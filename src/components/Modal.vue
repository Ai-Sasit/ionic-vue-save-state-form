<template>
  <ion-header mode="ios">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-title>Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item lines="full">
      <ion-label>ชื่อ {{payload.prefix.$model}}{{payload.surname.$model}} {{payload.lastname.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>เพศ {{payload.gender.$model}} วันเกิด {{payload.dob.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>เลขบัตรประชาชน {{payload.peopleId.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>เลขหลังบัตร {{payload.peopleIdBack.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>ที่อยู่ปัจจุบัน {{payload.currentAddress.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>ที่อยู่ตามบัตรประชาชน {{payload.fixAddress.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>อาชีพ {{payload.job.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>อายุ {{payload.age.$model}}</ion-label>
    </ion-item>
    <ion-item lines="full">
      <ion-label>เบอร์ {{payload.phoneState.$model}}</ion-label>
    </ion-item>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonItem,
    IonLabel,
    modalController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ModalXX',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel },
    props: ['payload'],
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
    },
  });
</script>