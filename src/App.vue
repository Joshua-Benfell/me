<template>
  <PageHeader />
  <router-view />
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    PageHeader,
    PageFooter
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
