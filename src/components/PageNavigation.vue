<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="route of routes" :key="route">
        <router-link :to="{ name: route }" class="nav-link">{{
          route
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNavigation",
  components: {},
  computed: {
    routes() {
      return this.$router.getRoutes().map(item => item.name);
    }
  }
});
</script>

<style lang="scss" scoped></style>
