<template>
  <header class="page-header">
    <div class="title-block">
      <h1 class="title-header">{{ heading }}</h1>
      <p v-if="subheading != ''" class="title-subheading" role="doc-subtitle">
        {{ subheading }}
      </p>
    </div>
    <PageNavigation />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageNavigation from "./PageNavigation.vue";
import { headings } from "@/constants";

export default defineComponent({
  name: "PageHeader",
  components: {
    PageNavigation
  },
  computed: {
    heading() {
      if (this.$route.meta.heading) {
        return this.$route.meta.heading;
      }
      return headings.main.heading;
    },
    subheading() {
      return headings.main.subheading || "";
    }
  }
});
</script>

<style lang="scss" scoped></style>
