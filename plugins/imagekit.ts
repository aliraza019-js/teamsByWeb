import { createVuetify } from "vuetify";
import ImageKit from "imagekitio-vue"
import {defineNuxtPlugin} from "#imports";

export default defineNuxtPlugin(nuxtApp => {
    const options = {
        urlEndpoint: 'https://ik.imagekit.io/teamstage',
        publicKey: 'public_fRrTNBK7+PU2mAy/CwgagUDcf64=',
        transformationPosition: 'path',
        authenticationEndpoint: "https://test.team-stage.com/api/auth/imgkit"
    }

    nuxtApp.vueApp.use(ImageKit, options)
})