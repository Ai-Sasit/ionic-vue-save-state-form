<template>
  <ion-page>
    <ion-content mode="ios">
      <form @submit.prevent="onSubmit" novalidate>
        <ion-list lines="none">
          <ion-card color="tertiary">
            <ion-card-content class="ion-text-center">
              <h1><b>{{getSensitiveText(phone)}}</b></h1>
            </ion-card-content>
          </ion-card>

          <ion-item color="tertiary">
            <p class="ion-no-margin">
              <ion-icon
                v-if="vv.phone.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />
              <ion-icon
                v-else-if="c_phone"
                @click="openPopover($event,'ระบุเบอร์โทรศัพท์ให้ถูกต้อง')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;เบอร์โทรศัพท์ที่ผูกกับบัญชี mana&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </p>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="tel"
              placeholder="กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง"
              v-model="vv.phone.$model"
            ></ion-input>
          </ion-item>
        </ion-list>
        <ion-footer class="ion-no-border">
          <ion-button
            color="danger"
            class="ion-no-margin"
            expand="full"
            type="submit"
            >ยืนยัน</ion-button
          >
        </ion-footer>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonList,
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  popoverController,
  IonFooter,
  IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import { useFormState } from "@/store";

export default defineComponent({
  name: "CurrentAddress",
  components: {
    IonList,
    IonPage,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonFooter,
    IonText,
  },
  setup() {
    const router = useRouter();
    const c_phone = ref(false);
    const { setPhone, phone } = useFormState();

    const getSensitiveText = (text: string) => {
      if (text.length > 0) {
        return text.replace(text.substring(3, text.length - 3), "X".repeat(text.length - 6))
      } else {
        return "กรอกเบอร์โทรศัพท์";
      }
    }

    const phone_form = reactive({
      phone: "",
    });

    const rules = {
      phone: {
        required,
      },
    };

    const vv = useVuelidate(rules, phone_form);

    const onSubmit = () => {
      if (vv.value.$invalid) {
        vv.value.$touch();
        vv.value.phone.$invalid ? c_phone.value = true : c_phone.value = false;
      } else {
        setPhone.value(vv.value.phone.$model);
        c_phone.value = true;
        router.back();
      }
    };

    return {
      getSensitiveText,
      c_phone,
      phone,
      vv,
      onSubmit,
    };
  },
  methods: {
    async openPopover(ev: any, message: string) {
      const popover = await popoverController.create({
        component: Popover,
        componentProps: { text: message },
        event: ev,
        cssClass: "popover-popover",
        mode: "ios",
      });
      await popover.present();
    },
  }
});
</script>
