<template>

  <!--            no-ssr Tag weil $vuetify.display.lgAndUp sonst buggt-->
  <v-no-ssr>
    <div class="d-flex justify-center mt-16">
      <div class="elevation-5 rounded" :class="{'box': $vuetify.display.mdAndUp}">

        <v-container class="pt-10 pb-10">

          <v-row>

            <v-col class="v-col-12 v-col-lg-6 d-flex align-center">
              <div class="shadow rounded text-center ml-auto mr-auto" style="width:80%">
                <v-btn style="width:100%" class="bg-google mb-3" rounded="rounded" prepend-icon="mdi-google"
                       dark="dark">
                  Sign in with Google
                </v-btn>
                <v-btn style="width:100%" class="bg-facebook mb-3 text-white" rounded="rounded"
                       prepend-icon="mdi-facebook">Sign in with
                  Facebook
                </v-btn>
                <v-btn style="width:100%" class="bg-apple mb-3 text-white" rounded="rounded" theme="dark"
                       prepend-icon="mdi-apple">Sign in
                  with
                  Apple
                </v-btn>
              </div>
            </v-col>
            <v-col class="v-col-12 v-col-lg-6">
              <div :class="{ 'vl': $vuetify.display.lgAndUp }">
                <div style="width:80%" class="text-center ml-auto mr-auto">
                  <v-form ref="form" @keydown.enter="signUp()">
                    <v-text-field class="shadow" v-model="signUpData.mail" type="email"
                                  :label="$t('signUp.label.email')"
                                  :rules="[requiredRule]"
                                  prepend-inner-icon="mdi-email" variant="solo"></v-text-field>
                    <v-text-field v-model="signUpData.pwd" type="password" :label="$t('signUp.label.password')"
                                  :rules="[requiredRule]"
                                  prepend-inner-icon="mdi-lock"
                                  append-inner-icon="mdi-eye" variant="solo"></v-text-field>
                    <v-text-field v-model="signUpData.pwd2" type="password" :label="$t('signUp.label.password2')"
                                  :rules="[requiredRule]"
                                  prepend-inner-icon="mdi-lock"
                                  append-inner-icon="mdi-eye" variant="solo"></v-text-field>
                    <v-btn class="stretch bg-primary" style="width:80%" rounded="rounded" @click="signUp()"
                           :loading="loading"> {{ $t('signUp.label.login') }}
                    </v-btn>
                  </v-form>
                  <v-alert class="mt-3" closable v-if="showAlert" type="error">{{ $t('signUp.invalid') }}</v-alert>
                </div>
              </div>
            </v-col>

          </v-row>
        </v-container>
      </div>
    </div>
  </v-no-ssr>
</template>

<script setup lang="ts">
import {computed, navigateTo, onMounted, ref, useLocalePath} from '#imports';
import {useFirebase} from '~/composables/useFirebase';
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {useRuntimeConfig} from '#app';
import {useI18n} from 'vue-i18n';
import {Ref} from '@vue/reactivity';
import {VForm} from 'vuetify/components';

const form: Ref<VForm> = ref();
const t = useI18n();
const loading = ref(false);
const signUpData = ref({
  mail: '',
  pwd: '',
  pwd2: ''
});
const requiredRule = (value: any) => !!value || t.t('required');
let showAlert = ref(false);

const runtimeConfig = useRuntimeConfig();
const localePath = useLocalePath();

const signUp = () => {

  form.value.validate().then(result => {

    if (!result.valid) {
      return;
    }

    loading.value = true;
    showAlert.value = false;
    const {app, auth} = useFirebase();

    if (signUpData.value.pwd === signUpData.value.pwd2) {

      createUserWithEmailAndPassword(auth, signUpData.value.mail, signUpData.value.pwd).then((userCredential) => {
        // Signed up
        const user = userCredential.user;


        navigateTo(localePath('/'));
        // window.location.href = runtimeConfig.public.appURL;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        showAlert.value = true;
      }).finally(() => {
        loading.value = false;
      });

    }

  });


};
</script>

<style scoped>

.vl {
  border-left: 1px solid black;
  height: 100%;
}

.box {
  width: 50%
}

</style>