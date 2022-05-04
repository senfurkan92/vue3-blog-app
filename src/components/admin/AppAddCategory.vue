<template>
  <div>
      <div>
        <AppInput
          :placeholder="'Name'"
          :label="'Name'"
          :elementId="'Name'"
          :model="v$.name"
          @onInput="category.name = $event"
          @onFocus="v$.name.$dirty = true"
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
import AppInput from '@/components/base/AppInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import { reactive, inject } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useStore } from 'vuex';

const swal = inject('$swal');
const store = useStore();

const category = reactive({
  name: '',
});

const rules = {
  name: {
    required,
  },
};

const v$ = useVuelidate(rules, category);

const save = async () => {
//   swal.fire('hello');
  const result = await store.dispatch('category/addCategory', category);
  if (result.data) {
    swal.fire({
      icon: 'success',
      title: 'Congratulations !!!',
      text: 'A new category has been added',
    });
  } else {
    swal.fire({
      icon: 'error',
      title: 'Sh*t !!!',
      text: 'A new category has not been added',
    });
  }
};
</script>
