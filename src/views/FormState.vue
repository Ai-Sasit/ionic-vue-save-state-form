<template>
  <ion-page>
    <ion-content mode="ios">
      <form @submit.prevent="onSubmit" novalidate>
        <ion-list lines="none" class="ion-margin-bottom">
          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.prefix.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_prefix" @click="openPopover($event, 'คำนำหน้าชื่อ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;คำนำหน้าชื่อ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" cancelText="ยกเลิก"
              interface="action-sheet" placeholder="กรุณาระบุคำนำหน้าชื่อ" v-model="vv.prefix.$model">
              <ion-select-option value="mr">นาย</ion-select-option>
              <ion-select-option value="mrs">นาง</ion-select-option>
              <ion-select-option value="miss">นางสาว</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.surname.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_surname" @click="openPopover($event, 'ชื่อ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;ชื่อ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="ตัวอย่าง. อานนท์" v-model="vv.surname.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.lastname.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_lastname" @click="openPopover($event, 'นามสกุล')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;นามสกุล&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="ตัวอย่าง. บางสาน" v-model="vv.lastname.$model"></ion-input>
          </ion-item>

          <ion-item button color="tertiary" id="open-date-input" lines="full">
            <ion-label style="font-size: 16px">
              <ion-icon v-if="vv.dob.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_dob" @click="openPopover($event, 'วันเกิด')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              วันเกิด&nbsp;<ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-note v-if="!vv.dob.$model" slot="end">วัน/เดือน/ปี</ion-note>
            <ion-note v-else slot="end">{{ vv.dob.$model }}</ion-note>
          </ion-item>

          <ion-popover trigger="open-date-input" mode="ios" size="cover" :arrow="false" id="popover-bottom"
            :show-backdrop="true">
            <ion-datetime style="background: white" locale="th-TH" @ionChange="formatDate1($event)"
              display-format="YYYY-MM-DD"></ion-datetime>
          </ion-popover>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.peopleId.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_peopleId" @click="openPopover($event, 'หมายเลขบัตรประชาชน')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เลขบัตร ปชช.&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="1349900000000"
              v-on:ion-focus="onFocusPeopleID" v-on:ion-blur="onBlurPeopleID"
              v-model="vv.peopleId.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.peopleIdBack.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_peopleIdBack" @click="openPopover($event, 'หมายเลขหลังบัตรประชาชน')"
                name="alert-circle-outline" style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;เลขหลังบัตร ปชช.&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-input type="text" placeholder="AB1234567890"
              v-on:ion-focus="onFocusPeopleBackID" v-on:ion-blur="onBlurPeopleBackID"
              v-model="vv.peopleIdBack.$model"></ion-input>
          </ion-item>

          <ion-item color="tertiary" lines="full" style="--inner-padding-end: 0">
            <ion-grid class="ion-no-padding ion-no-margin">
              <ion-row>
                <ion-col class="ion-no-padding ion-no-margin my-thin-col">
                  <ion-item color="tertiary" class="div-item-inner ion-no-padding ion-no-margin">
                    <ion-icon v-if="vv.fixAddress.$model" name="checkmark-circle-outline"
                      style="color: cornflowerblue; font-size: 1em" />
                    <ion-icon v-else-if="c_fix" @click="openPopover($event, 'ที่อยู่ตามบัตรประชาชน')"
                      name="alert-circle-outline" style="color: red; font-size: 1em" />
                    <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue; font-size: 1em" />
                  </ion-item>
                </ion-col>
                <ion-col style="width: 0.5vw">
                  <ion-item class="ion-no-padding ion-no-margin" button color="tertiary" router-link="/fix-address">
                    <ion-text style="width: 95%">
                      <b>ที่อยู่ตามบัตรประชาชน&nbsp;</b>
                      <ion-text color="danger" style="font-weight: 800">*</ion-text>
                      <ion-text v-if="vv.fixAddress.$model" color="medium">
                        <ion-label class="input">{{ vv.fixAddress.$model }}
                        </ion-label>
                      </ion-text>
                    </ion-text>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>

          <ion-item color="tertiary" lines="full" style="--inner-padding-end: 0">
            <ion-grid class="ion-no-padding ion-no-margin">
              <ion-row>
                <ion-col class="ion-no-padding ion-no-margin my-thin-col">
                  <ion-item color="tertiary" class="div-item-inner ion-no-padding ion-no-margin">
                    <ion-icon v-if="vv.currentAddress.$model" name="checkmark-circle-outline"
                      style="color: cornflowerblue; font-size: 1em" />
                    <ion-icon v-else-if="c_current" @click="openPopover($event, 'ที่อยู่ปัจจุบัน')"
                      name="alert-circle-outline" style="color: red; font-size: 1em" />
                    <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue; font-size: 1em" />
                  </ion-item>
                </ion-col>
                <ion-col style="width: 0.5vw">
                  <ion-item class="ion-no-padding ion-no-margin" button color="tertiary" router-link="/current-address">
                    <ion-text style="width: 95%">
                      <b>ที่อยู่ปัจจุบัน&nbsp;</b>
                      <ion-text color="danger" style="font-weight: 800">*</ion-text>
                      <ion-text v-if="vv.currentAddress.$model" color="medium">
                        <ion-label class="input">{{ vv.currentAddress.$model }}
                        </ion-label>
                      </ion-text>
                    </ion-text>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>
              <ion-icon v-if="vv.job.$model" name="checkmark-circle-outline" style="color: cornflowerblue" />
              <ion-icon v-else-if="c_job" @click="openPopover($event, 'อาชีพ')" name="alert-circle-outline"
                style="color: red" />
              <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue" />
              <b>&nbsp;อาชีพ&nbsp;</b>
              <ion-text color="danger">*</ion-text>
            </ion-label>
          </ion-item>
          <ion-item color="tertiary" lines="full">
            <ion-select class="ion-no-padding ion-padding-end ion-select-full" okText="ตกลง" cancelText="ยกเลิก"
              interface="action-sheet" placeholder="กรุณาระบุอาชีพ" v-model="vv.job.$model">
              <ion-select-option value="a">รับราชการ</ion-select-option>
              <ion-select-option value="b">รับจ้างทั่วไป</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item color="tertiary" lines="full" style="--inner-padding-end: 0">
            <ion-grid class="ion-no-padding ion-no-margin">
              <ion-row>
                <ion-col class="ion-no-padding ion-no-margin my-thin-col">
                  <ion-item color="tertiary" class="div-item-inner ion-no-padding ion-no-margin">
                    <ion-icon v-if="vv.phoneState.$model" name="checkmark-circle-outline"
                      style="color: cornflowerblue; font-size: 1em" />
                    <ion-icon v-else-if="c_phone" @click="openPopover($event, 'เบอร์โทรศัพท์')"
                      name="alert-circle-outline" style="color: red; font-size: 1em" />
                    <ion-icon v-else name="ellipse-outline" style="color: cornflowerblue; font-size: 1em" />
                  </ion-item>
                </ion-col>
                <ion-col style="width: 0.5vw">
                  <ion-item class="ion-no-padding ion-no-margin" button color="tertiary" router-link="/tel">
                    <ion-text>
                      <b>เบอร์โทรศัพท์&nbsp;</b>
                      <ion-text color="danger" style="font-weight: 800">*</ion-text>
                      <ion-text v-if="vv.phoneState.$model" color="medium">
                        <ion-label class="input">{{ getSensitiveText(vv.phoneState.$model) }}
                        </ion-label>
                      </ion-text>
                    </ion-text>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
        </ion-list>
        <ion-button color="danger" class="ion-no-margin" id="footer" expand="full" type="submit">ตกลง</ion-button>
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
  IonSelect,
  IonSelectOption,
  IonInput,
  popoverController,
  alertController,
  IonDatetime,
  IonPopover,
  IonNote,
  IonButton,
  IonText,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Popover from "../components/Popover.vue";
import moment from "moment";
import { useFormState } from "../store";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HomePage",
  components: {
    IonList,
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonNote,
    IonButton,
    IonText,
    IonIcon,
    IonRow,
    IonGrid,
    IonCol,
    IonPopover,
  },
  setup() {
    const c_prefix = ref(false);
    const c_surname = ref(false);
    const c_lastname = ref(false);
    const c_peopleId = ref(false);
    const c_dob = ref(false);
    const c_peopleIdBack = ref(false);
    const c_job = ref(false);
    const c_fix = ref(false);
    const c_current = ref(false);
    const c_phone = ref(false);
    const c_error = ref(false);

    const {
      prefix,
      surname,
      lastname,
      peopleId,
      peopleBackId,
      currentAddress,
      fixAddress,
      dob,
      job,
      phone,
      setPrefix,
      setSurname,
      setLastname,
      setDob,
      setPeopleId,
      setPeopleBackId,
      setJob,
    } = useFormState();
    const router = useRouter();

    const getSensitiveText = (text: string) => {
      if (text.length > 0) {
        return text.replace(text.substring(3, text.length - 3), "*".repeat(text.length - 6))
      } else {
        return "";
      }
    }

    const payload = {
      prefix: '',
      surname: '',
      lastname: '',
      peopleId: '',
      dob: '',
      peopleIdBack: '',
      job: '',
      currentAddress: currentAddress,
      fixAddress: fixAddress,
      phoneState: phone,
    }

    prefix.value ? payload.prefix = prefix.value : null;
    surname.value ? payload.surname = surname.value : null;
    lastname.value ? payload.lastname = lastname.value : null;
    peopleId.value ? payload.peopleId = getSensitiveText(peopleId.value) : null;
    dob.value ? payload.dob = dob.value : null;
    peopleBackId.value ? payload.peopleIdBack = getSensitiveText(peopleBackId.value) : null;
    job.value ? payload.job = job.value : null;


    const data_form = reactive(payload);

    const rules = {
      prefix: { required },
      surname: { required },
      lastname: { required },
      dob: { required },
      peopleId: { required },
      peopleIdBack: { required },
      job: { required },
      currentAddress: { required },
      fixAddress: { required },
      phoneState: { required },
    };

    const vv = useVuelidate(rules, data_form);

    const onSubmit = () => {
      vv.value.$touch();
      if (vv.value.$invalid) {
        vv.value.prefix.$invalid
          ? (c_prefix.value = true)
          : (c_prefix.value = false);
        vv.value.surname.$invalid
          ? (c_surname.value = true)
          : (c_surname.value = false);
        vv.value.lastname.$invalid
          ? (c_lastname.value = true)
          : (c_lastname.value = false);
        vv.value.peopleId.$invalid
          ? (c_peopleId.value = true)
          : (c_peopleId.value = false);
        vv.value.peopleIdBack.$invalid
          ? (c_peopleIdBack.value = true)
          : (c_peopleIdBack.value = false);
        vv.value.dob.$invalid ? (c_dob.value = true) : (c_dob.value = false);
        vv.value.job.$invalid ? (c_job.value = true) : (c_job.value = false);
        vv.value.currentAddress.$invalid
          ? (c_current.value = true)
          : (c_current.value = false);
        vv.value.fixAddress.$invalid
          ? (c_fix.value = true)
          : (c_fix.value = false);
        vv.value.phoneState.$invalid
          ? (c_phone.value = true)
          : (c_phone.value = false);
        c_error.value = true;
        console.log("Error")
      } else {
        setPrefix.value(vv.value.prefix.$model);
        setSurname.value(vv.value.surname.$model);
        setLastname.value(vv.value.lastname.$model);
        setDob.value(vv.value.dob.$model);
        if (vv.value.peopleId.$model == getSensitiveText(peopleId.value)){
          setPeopleId.value(peopleId.value);
        } else {
          setPeopleId.value(vv.value.peopleId.$model);
        }
        if (vv.value.peopleIdBack.$model == getSensitiveText(peopleBackId.value)){
          setPeopleBackId.value(peopleBackId.value);
        } else {
          setPeopleBackId.value(vv.value.peopleIdBack.$model);
        }
        setJob.value(vv.value.job.$model);
        router.back();
      }
    };
    return {
      getSensitiveText,
      prefix,
      surname,
      lastname,
      peopleId,
      peopleBackId,
      dob,
      job,
      currentAddress,
      fixAddress,
      phone,
      c_error,
      c_prefix,
      c_surname,
      c_lastname,
      c_peopleId,
      c_dob,
      c_peopleIdBack,
      c_job,
      c_fix,
      c_current,
      c_phone,
      vv,
      router,
      onSubmit,
    };
  },
  methods: {
    formatDate1(event: any) {
      this.vv.dob.$model = moment(event.target.value).format("DD/MM/YYYY");
    },
    async openPopover(ev: any, message: string) {
      const popover = await popoverController.create({
        component: Popover,
        componentProps: { text: message },
        event: ev,
        cssClass: "popover-popover",
        mode: "ios",
      });
      await popover.present();
      await popover.onDidDismiss();
    },
    async errorAlert(text: string, btn: string) {
      const alert = await alertController.create({
        cssClass: "error-alert",
        header: "เกิดข้อผิดพลาด",
        message: text,
        buttons: [btn],
        mode: "ios",
      });
      await alert.present();
      await alert.onDidDismiss();
      if (text === "ที่อยู่ตามบัตรประชาชน") {
        this.router.push("/fix-address");
      }
    },
    onBlurPeopleID() {
      if (this.peopleId != '') {
        if (this.vv.peopleId.$model == '') {
          this.vv.peopleId.$model = this.getSensitiveText(this.peopleId);
        } else if (this.vv.peopleId.$model == this.peopleId) {
          this.vv.peopleId.$model = this.getSensitiveText(this.peopleId);
        }
      }
    },
    onBlurPeopleBackID() {
      if (this.peopleBackId != '') {
        if (this.vv.peopleIdBack.$model == '') {
          this.vv.peopleIdBack.$model = this.getSensitiveText(this.peopleBackId);
        } else if (this.vv.peopleIdBack.$model == this.peopleBackId){
          this.vv.peopleIdBack.$model = this.getSensitiveText(this.peopleBackId);
        }
      }
    },
    onBlurPhone() {
      if (this.phone != '') {
        if (this.vv.phoneState.$model == '') {
          this.vv.phoneState.$model = this.getSensitiveText(this.phone);
        } else if (this.vv.phoneState.$model == this.phone){
          this.vv.phoneState.$model = this.getSensitiveText(this.phone);
        }
      }
    },
    onFocusPeopleID() {
      if (this.vv.peopleId.$model == this.getSensitiveText(this.peopleId)) {
        this.vv.peopleId.$model = '';
      }
    },
    onFocusPeopleBackID() {
      if (this.vv.peopleIdBack.$model == this.getSensitiveText(this.peopleBackId)) {
        this.vv.peopleIdBack.$model = '';
      }
    },
    onFocusPhone() {
      if (this.vv.phoneState.$model == this.getSensitiveText(this.phone)) {
        this.vv.phoneState.$model = '';
      }
    }
  },
});
</script>

<style>
ion-range::part(tick) {
  background: #a2d2ff;
}

ion-range::part(tick-active) {
  background: #bde0fe;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #ff0000;
  color: #fff;

  border-radius: 50%;
  transform: scale(1.01);

  top: -20px;

  min-width: 28px;
  height: 28px;
  transition: transform 120ms ease, background 120ms ease;
}

ion-range::part(pin)::before {
  content: none;
}

ion-range::part(knob) {
  background: #ff0000;
}

ion-range::part(bar) {
  background: #a2d2ff;
}

ion-range::par(bar-active) {
  background: #bde0fe;
}

.popover-popover {
  background-color: #00000080;
}

ion-popover#popover-bottom::part(content) {
  top: unset !important;
  align-items: center;
  left: 0 !important;
  bottom: 0;
  width: 100vw;
  border-radius: 0;
  --background: white;
}

ion-popover.popover-bottom ion-datetime {
  margin-left: auto;
  margin-right: auto;
  --background: white;
}

.sc-ion-label-ios-h sc-ion-label-ios-s ios in-item-color {
  padding-right: 0;
}

.div-item-inner {
  --inner-padding-end: 0;
}

ion-col.my-thin-col {
  flex: 0 0 4px;
  padding: 0;
  margin-right: 9px;
}
</style>