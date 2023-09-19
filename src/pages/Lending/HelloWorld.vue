<template>
  <div class="main-hw-class">
    <h3>HELLO WORLD!</h3>

    <h3>Counter</h3>
    <div>
      <input type="button" value="+1" @click="incrementCount" />
      <div>
        Pania (Global state) value x2:
        <pre>{{ getCount }}</pre>
      </div>
    </div>

    <h3>Env variables</h3>
    <div>
      <input type="button" value="Set environment variables" @click="setEnvironmentVariables" />
      <pre>{{ getEnvVars }}</pre>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useGeneralStore } from 'stores/example-store.js';

const store = useGeneralStore();

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {};
  },
  methods: {
    incrementCount() {
      store.increment();
    },
    setEnvironmentVariables() {
      store.setEnvVariables();
    },
  },
  computed: {
    getCount() {
      return store.doubleCount;
    },
    getEnvVars() {
      return store.getEnvVariables;
    },
  },
  setup() { },
});
</script>

<style lang="scss" scoped>
.main-hw-class {
  padding: 10px 30px;

  h3 {
    font-size: 20px;
  }

  pre {
    background-color: rgb(244, 244, 244);
    border: 2px solid grey;
    border-radius: 5px;
    color: black;
    padding: 5px
  }
}
</style>
