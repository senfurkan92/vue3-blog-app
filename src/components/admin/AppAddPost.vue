<template>
  <div>
      <div class="mb-6">
        <div class=" grid grid-cols-2">
            <div class="lg:col-span-1 col-span-2">
                <AppFileInput
                    :placeholder="'Image'"
                    :label="'Image'"
                    :elementId="'image'"
                    :accept="'image/*'"
                    :multiple="false"
                    :model="v$.image"
                    @onInput="imageAdd($event)"
                    @onFocus="v$.image.$dirty = true"
                />
            </div>
            <div class="lg:col-span-1 col-span-2 text-center lg:px-4">
                <div class="h-60 w-full border inline-block mt-5 rounded-lg">
                    <img class="rounded-lg h-full w-full object-contain" alt="upload img"
                      :src="imgSrc"
                    />
                </div>
            </div>
        </div>
      </div>
      <div class="mb-6">
        <AppSelect
          :label="'Category'"
          :elementId="'category'"
          :model="v$.categoryId"
          :options="$store.state.category.list.map(x => ({
            value: x.id,
            text: x.name,
          }))"
          @onInput="post.categoryId = $event"
          @onFocus="v$.categoryId.$dirty = true"
        />
      </div>
      <div class="mb-6">
        <AppInput
          :placeholder="'Title'"
          :label="'Title'"
          :elementId="'title'"
          :model="v$.title"
          @onInput="post.title = $event"
          @onFocus="v$.title.$dirty = true"
        />
      </div>
      <div>
        <AppTextArea
          :placeholder="'Caption'"
          :label="'Caption'"
          :elementId="'caption'"
          :model="v$.caption"
          :rows="2"
          @onInput="post.caption = $event"
          @onFocus="v$.caption.$dirty = true"
        />
      </div>
      <div>
        <AppTextArea
          :placeholder="'Description'"
          :label="'Description'"
          :elementId="'description'"
          :model="v$.description"
          :rows="4"
          @onInput="post.description = $event"
          @onFocus="v$.description.$dirty = true"
        />
      </div>
      <div>
        <AppTextEditor
          :placeholder="'Content'"
          :label="'Content'"
          :elementId="'content'"
          :model="v$.content"
          :rows="4"
          @onInput="post.content = $event"
          @onFocus="v$.content.$dirty = true"
        />
      </div>
      <div class="pb-3 pt-3 text-right" v-show="!v$.$invalid">
            <AppButton
                :deny="false"
                :content="'Save'"
                :action="save"/>
        </div>
  </div>
</template>

<script setup>
import AppTextArea from '@/components/base/AppTextArea.vue';
import AppTextEditor from '@/components/base/AppTextEditor.vue';
import AppInput from '@/components/base/AppInput.vue';
import AppSelect from '@/components/base/AppSelect.vue';
import AppFileInput from '@/components/base/AppFileInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import { reactive, ref, inject } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useStore } from 'vuex';

const swal = inject('$swal');
const store = useStore();

const post = reactive({
  title: 'test title',
  caption: 'test caption',
  description: 'test description',
  content: 'text content',
  image: null,
  categoryId: 0,
  authorId: store.state.user.activeUser.id || 6,
});

const rules = {
  title: {
    required,
  },
  caption: {
    required,
  },
  description: {
    required,
  },
  content: {
    required,
  },
  image: {
    required,
  },
  categoryId: {
    required,
  },
};

const v$ = useVuelidate(rules, post);

const imgSrc = ref('');

const imageAdd = (e) => {
  const file = e[0];
  const url = URL.createObjectURL(file);
  imgSrc.value = url;
  post.image = file;
};

const save = async () => {
  const result = await store.dispatch('post/addPost', post);
  if (result.data) {
    result.data.category = store.state.category.list.find((x) => x.id === result.data.categoryId);
    store.commit('post/pushPost', result.data);
    swal.fire({
      icon: 'success',
      title: 'Congratulations !!!',
      text: 'A new post has been added',
    });
  } else {
    swal.fire({
      icon: 'error',
      title: 'Sh*t !!!',
      text: 'A new post has not been added',
    });
  }
};
</script>
