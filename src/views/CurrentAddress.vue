<template>
  <ion-page>
    <ion-content mode="ios">
      <form @submit.prevent="onSubmit" novalidate>
      <ion-list lines="none">
          <ion-item color="tertiary">
            <ion-label>
              <ion-icon
                v-if="vv.address.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />

              <ion-icon
                v-else-if="c_address"
                @click="openPopover($event, 'ที่อยู่ที่ผูกกับบัญชี mana')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;ที่อยู่&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="เช่น หมู่บ้านแสนสุข 144/1 หมู่ 1 ถนนริมบึง"
              v-model="vv.address.$model"
            >
            </ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon
                v-if="vv.subdistrict.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />

              <ion-icon
                v-else-if="c_subdistrict"
                @click="openPopover($event, 'ตำบล/แขวง')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;ตำบล&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="เช่น บางพระ"
              v-model="vv.subdistrict.$model"
            ></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon
                v-if="vv.district.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />

              <ion-icon
                v-else-if="c_district"
                @click="openPopover($event, 'อำเภอ/เขต')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;อำเภอ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="เช่น ศรีราชา"
              v-model="vv.district.$model"
            ></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon
                v-if="vv.province.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />

              <ion-icon
                v-else-if="c_province"
                @click="openPopover($event, 'จังหวัด')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;จังหวัด&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="เช่น ชลบุรี"
              v-model="vv.province.$model"
            ></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon
                v-if="vv.postcode.$model"
                name="checkmark-circle-outline"
                style="color: cornflowerblue"
              />

              <ion-icon
                v-else-if="c_postcode"
                @click="openPopover($event, 'รหัสไปรษณีย์')"
                name="alert-circle-outline"
                style="color: red"
              />
              <ion-icon
                v-else
                name="ellipse-outline"
                style="color: cornflowerblue"
              />
              <b>&nbsp;รหัสไปรษณีย์&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="เช่น 20110"
              v-model="vv.postcode.$model"
            ></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <b>&nbsp;หมายเหตุ&nbsp;</b>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input
              type="text"
              placeholder="ระบุบันทึกเพิ่มเติม (ไม่จำเป็น)"
              v-model="vv.optional.$model"
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
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
  IonFooter,
  popoverController,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import { useFormState} from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FormInput",
  components: {
    IonList,
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonText,
    IonFooter,
  },
  setup() {
    const c_address = ref(false);
    const c_subdistrict = ref(false);
    const c_district = ref(false);
    const c_province = ref(false);
    const c_postcode = ref(false);
    const router = useRouter();

    const { setCurrentAddress } = useFormState();

    const Address_form = reactive({
      address: "",
      subdistrict: "",
      district: "",
      province: "",
      postcode: "",
      optional: "",
    });
    const rules = {
      address: { required },
      subdistrict: { required },
      district: { required },
      province: { required },
      postcode: { required },
      optional: {},
    };

    const vv = useVuelidate(rules, Address_form);

    const onSubmit = () => {
      if (vv.value.$invalid) {
        vv.value.$touch();
        vv.value.address.$invalid
          ? (c_address.value = true)
          : (c_address.value = false);
        vv.value.subdistrict.$invalid
          ? (c_subdistrict.value = true)
          : (c_subdistrict.value = false);
        vv.value.district.$invalid
          ? (c_district.value = true)
          : (c_district.value = false);
        vv.value.province.$invalid
          ? (c_province.value = true)
          : (c_province.value = false);
        vv.value.postcode.$invalid
          ? (c_postcode.value = true)
          : (c_postcode.value = false);
      } else {
        setCurrentAddress.value(
          vv.value.address.$model +
            " " +
            vv.value.subdistrict.$model +
            " " +
            vv.value.district.$model +
            " " +
            vv.value.province.$model +
            " " +
            vv.value.postcode.$model +
            " " +
            vv.value.optional.$model
        );
        router.back();
      }
    };
    return {
      vv,
      c_address,
      c_subdistrict,
      c_district,
      c_province,
      c_postcode,
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
