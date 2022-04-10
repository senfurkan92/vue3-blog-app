<template>
  <AppBanner :items="bannerItems"></AppBanner>
  <div class="container mx-auto lg:py-10 py-5">
    <div class="flex flex-col">
      <div class="md:pb-10 pb-5">
        <AppTimeline></AppTimeline>
      </div>
      <div class="grid grid-cols-4">
        <div class="md:col-start-2 md:col-span-2 col-span-4 text-center mb-6
         text-sun-blue dark:text-moon-1 font-semibold text-xl underline">
          &nbsp; SUBSCRIBE &nbsp;
        </div>
        <div class="md:col-start-2 md:col-span-2 col-span-4">
          <div class="grid grid-cols-2">
            <div class="lg:col-span-1 col-span-2 mb-6 relative">
              <AppInput :elementId="'name'"
                :label="'Name'"
                :placeholder="'Name'"
                @onInput="v$.name = $event"
                @onFocus="v$.name.$dirty = true"
                :model="v$.name"
              ></AppInput>
            </div>
            <div class="lg:col-span-1 col-span-2 mb-6">
              <AppInput :elementId="'surname'"
                :label="'Surname'"
                :placeholder="'Surname'"
                @onInput="subscribe.surname = $event"
                @onFocus="v$.surname.$dirty = true"
                :model="v$.surname"
              ></AppInput>
            </div>
            <div class="col-span-2 mb-6">
              <AppInput :elementId="'email'"
                :label="'E-mail Address'"
                :placeholder="'example@mail.com'"
                @onInput="subscribe.email = $event"
                @onFocus="v$.email.$dirty = true"
                :model="v$.email"
              ></AppInput>
            </div>
            <div class="col-span-2 mb-6">
              <AppInput :elementId="'interests'"
                :label="'Interests'"
                :placeholder="'Interests'"
                @onInput="subscribe.interests = $event"
                @onFocus="v$.interests.$dirty = true"
                :model="v$.interests"
              ></AppInput>
            </div>
            <div class="col-span-2 text-right">
              <AppButton :content="'Submit'" :action="submit">
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBanner from '@/components/base/AppBanner.vue';
import AppTimeline from '@/components/base/AppTimeline.vue';
import AppInput from '@/components/base/AppInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import useVuelidate from '@vuelidate/core';
import { reactive } from 'vue';
import { required, email, maxLength } from '@vuelidate/validators';

const bannerItems = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'about',
  },
];

const subscribe = reactive({
  name: '',
  surname: '',
  email: '',
  interests: '',
});
const rules = {
  name: {
    required,
    maxLength: maxLength(20),
  },
  surname: {
    required,
    maxLength: maxLength(20),
  },
  email: {
    required,
    email,
  },
  interests: {
    maxLength: maxLength(200),
  },
};
const v$ = useVuelidate(rules, subscribe);

const submit = () => console.log(subscribe);
</script>
