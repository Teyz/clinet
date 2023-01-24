<template>
  <NuxtLayout name="custom">
    <ScrollToTop />
    <Head>
      <Title>{{$t('history') }}</Title>
    </Head>
    <Hero />
    <Movie />
    <MantraSlider />
  </NuxtLayout>
</template>

<script>
import { disableScroll } from "@/utils";
import { onMounted } from "vue";
import { useStore } from "@/stores/store";
export default {
  name: "CustomLayout",
  setup() {
    const store = useStore();
    const loading = computed(() => store.$state.loading);
    const route = useRoute();

    onMounted(() => {
      if (route.hash) {
        const hash = route.hash.replace("#", "");
        setTimeout(() => {
          let scrollTo = document.getElementById(hash);
          scrollTo.scrollIntoView();
        }, 100);
      }
      disableScroll(true);
    });

    setTimeout(() => {
      store.setLoading(false);
      disableScroll(false);
    }, 2500);

    return { loading };
  },
};
</script>

<script setup>

useHead({
  meta: [
    {
      name: "title",
      lang: "fr",
      content: "Clinet | L'Histoire de Clinet",
    },
    {
      name: "title",
      lang: "en",
      content: "Clinet | The Story of Clinet",
    },
    {
      name: "description",
      lang: "fr",
      content:
        "Le Château Clinet est un humble domaine situé au cœur de Pomerol qui grâce au dévouement de son équipe fait preuve de prestige et noblesse.",
    },
    {
      name: "description",
      lang: "en",
      content:
        "Château Clinet is a modest estate at the heart of Pomerol that thanks to the devotion of its team has so much prestige and significance.",
    },
  ],
});
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
