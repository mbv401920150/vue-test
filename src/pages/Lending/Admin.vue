<template>
  <q-page>
    <p>Lending admin page</p>
    <p>
      <router-link :to="{ name: 'Home' }"> Back to home </router-link>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LendingAdminPage',
  setup() { },
});
</script>
