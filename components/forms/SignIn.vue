<template>


  <div class="d-flex justify-center mt-16">
    <div class="elevation-5 box rounded">

      <v-container class="pt-10 pb-10">

        <v-row>

          <v-col class="v-col-12 v-col-md-6">
            <div class="shadow rounded text-center ml-auto mr-auto" style="width:80%">
              <v-btn style="width:100%" class="bg-google mb-3" rounded="rounded" prepend-icon="mdi-google" dark="dark">
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
          <v-col class="v-col-12 v-col-md-6">
            <div class="vl">
              <div style="width:80%" class="text-center ml-auto mr-auto">
                <v-form ref="form" @keydown.enter="login()">
                  <v-text-field class="shadow" v-model="loginData.mail" type="email" :label="$t('login.label.email')"
                                :rules="[requiredRule]"
                                prepend-inner-icon="mdi-email" variant="solo"></v-text-field>
                  <v-text-field v-model="loginData.pwd" type="password" :label="$t('login.label.password')"
                                :rules="[requiredRule]"
                                prepend-inner-icon="mdi-lock"
                                append-inner-icon="mdi-eye" variant="solo"></v-text-field>
                  <v-btn class="stretch bg-primary" style="width:80%" rounded="rounded" @click="login()"
                         :loading="loading"> {{ $t('login.label.login') }}
                  </v-btn>
                </v-form>
                <v-alert class="mt-3" closable v-if="showAlert" type="error">{{ $t('login.invalid') }}</v-alert>
              </div>

            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import {navigateTo, ref, useLocalePath} from '#imports';
import {useFirebase} from '~/composables/useFirebase';
import {signInWithEmailAndPassword} from '@firebase/auth';
import {useRuntimeConfig} from '#app';
import {useI18n} from 'vue-i18n';
import {Ref} from '@vue/reactivity';
import {VForm} from 'vuetify/components';
import {localePath} from 'vue-i18n-routing';

const form: Ref<VForm> = ref();
const t = useI18n();
const loading = ref(false)
const loginData = ref({
  mail: '',
  pwd: ''
})
const requiredRule = (value: any) => !!value || t.t('required')
let showAlert = ref(false)

const runtimeConfig = useRuntimeConfig();
const localePath = useLocalePath();

const login = () => {

  form.value.validate().then(result => {

    if (!result.valid) {
      return;
    }

    loading.value = true;
    showAlert.value = false;
    const {app, auth} = useFirebase();

    signInWithEmailAndPassword(auth, loginData.value.mail, loginData.value.pwd).then((userCredential) => {
      // Signed in
      const user = userCredential.user;


      navigateTo(localePath('/'))
      // window.location.href = runtimeConfig.public.appURL;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      showAlert.value = true;
    }).finally(() => {
      loading.value = false;
    })

  });


}
</script>

<style scoped>

.vl {
  border-left: 1px solid black;
  height: 100%;
}

.box {
  width: 35%
}

</style>