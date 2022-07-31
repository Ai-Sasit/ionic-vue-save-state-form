<template>
  <ion-content class="ion-padding" >กรุณาระบุ {{text}} ให้ถูกต้อง</ion-content>
</template>

<script lang="ts">
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PopOver',
  props: ['text'],
  components: { IonContent }
});
</script>