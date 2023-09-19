<template>
  <q-expansion-item
    expand-separator
    icon="menu"
    label="Admin Portal"
    default-opened
  >
    <q-expansion-item
      expand-separator
      icon="payments"
      label="Lending team"
      caption="Lending management section"
      default-opened
    >
      <q-expansion-item
        expand-separator
        icon="admin_panel_settings"
        label="Admin"
        default-opened
      >
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item clickable v-ripple active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="grade" />
            </q-item-section>

            <q-item-section>
              <router-link :to="{ name: 'Lending-HelloWorld' }">
                Hello world
              </router-link>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'settings'"
            @click="link = 'settings'"
            active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              <router-link :to="{ name: 'Lending-Admin' }">
                Rate changes
              </router-link>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-expansion-item>

    <q-expansion-item
      expand-separator
      icon="account_balance"
      label="Digital Banking"
      caption="..."
      default-opened
    >
    </q-expansion-item>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
