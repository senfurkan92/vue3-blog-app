<template>
  <div class="container mx-auto lg:p-10 md:p-5">
      <div class="grid grid-cols-4">
        <div class=" md:col-start-2 md:col-span-2 col-span-4">
          <div class="flex flex-col">
            <div class="text-center">
              <span class="text-sun-blue dark:text-moon-2
                underline font-semibold text-xl uppercase">
                &nbsp;Sign Up&nbsp;
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
            <div class="mb-3">
              <AppInput
                :placeholder="'Password (Check)'"
                :label="'Password (Check)'"
                :elementId="'repassword'"
                :model="v$.repassword"
                @onFocus="v$.repassword.$dirty = true"
                @onInput="form.repassword = $event"
              />
            </div>
            <div class="mb-3">
              <AppButton
                :content="'Submit'"
                :deny="false"
                :action="submit"
              />
            </div>
            <div>
              {{v$}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import AppInput from '@/components/base/AppInput.vue';
import AppButton from '@/components/base/AppButton.vue';
import { reactive, inject, toRefs } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  email,
  required,
  sameAs,
  helpers,
} from '@vuelidate/validators';

const swal = inject('$swal');

const form = reactive({
  email: '',
  password: '',
  repassword: '',
});

const strongPassword = helpers.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

const rules = {
  email: {
    email: helpers.withMessage('Invalid email address', email),
    required: helpers.withMessage('This field cannot be empty', required),
  },
  password: {
    required: helpers.withMessage('This field cannot be empty', required),
    strongPassword: helpers.withMessage('at least 1 uppercase, 1 lowercase, 1 number 8 characters', strongPassword),
  },
  repassword: {
    required: helpers.withMessage('This field cannot be empty', required),
    sameAs: sameAs(toRefs(form).password),
  },
};

const v$ = useVuelidate(rules, form);

const submit = () => {
  swal.fire('hello');
  if (v$.value.$invalid) {
    console.log('asd');
  }
};
</script>

<style>

</style>
