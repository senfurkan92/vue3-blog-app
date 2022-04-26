<template>
  <div class="container mx-auto lg:p-10 md:p-5">
      <div class="grid grid-cols-4">
        <div class=" md:col-start-2 md:col-span-2 col-span-4">
          <div class="flex flex-col">
            <div class="text-center">
              <span class="text-sun-blue dark:text-moon-2
                underline font-semibold text-xl uppercase">
                &nbsp;Sign In&nbsp;
              </span>
            </div>
            <div class="mb-3">
              <AppInput
              :placeholder="'Email'"
              :label="'Email'"
              :elementId="'email'"
              :model="v$.email"
              @onFocus="v$.email.$dirty = true"
              @onInput="form.email = $event"
            />
            </div>
            <div class="mb-3">
              <AppInput
                :placeholder="'Password'"
                :label="'Password'"
                :elementId="'password'"
                :model="v$.password"
                @onFocus="v$.password.$dirty = true"
                @onInput="form.password = $event"
              />
            </div>
            <div class="mb-3 text-center">
              <AppButton
                :content="'Submit'"
                :deny="false"
                :action="submit"
              />
            </div>
            <div class="mb-3 text-center text-sm underline underline-offset-2
              text-sun-navy dark:text-moon-2 hover:italic hover:font-semibold">
              <router-link :to="{name:'signup'}">
                Sign Up
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import AppInput from '@/components/base/AppInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import { reactive, inject } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  email,
  required,
  helpers,
} from '@vuelidate/validators';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const swal = inject('$swal');
const store = useStore();
const router = useRouter();

const form = reactive({
  email: 'senfurkan92@gmail.com',
  password: 'Rambo1076',
});

const rules = {
  email: {
    email: helpers.withMessage('Invalid email address', email),
    required: helpers.withMessage('This field cannot be empty', required),
  },
  password: {
    required: helpers.withMessage('This field cannot be empty', required),
  },
};

const v$ = useVuelidate(rules, form);

const submit = async () => {
  if (!v$.value.$invalid) {
    const resp = await store.dispatch('user/signIn', form);
    if (resp.data) {
      router.push('/admin');
    } else {
      swal.fire({
        icon: 'error',
        title: 'Unauthorized',
        text: 'Something went wrong!',
        footer: `<a href="/signup">
                  Sign Up
                </a>`,
      });
    }
  }
};
</script>

<style>

</style>
