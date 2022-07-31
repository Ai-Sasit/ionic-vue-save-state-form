<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar color="tertiary">
        <ion-title>Ionic Vue Framework</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item color="tertiary" lines="full" button @click="() => router.push('/form-state')">
          <ion-label>Form State Saving Mask</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>