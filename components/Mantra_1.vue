<template>
  <div class="mantraRoot" id="chapter" ref="el">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraContent :slide="slide" :index="index" is-top red-text/>
    <ChapterWords :slide="slide" />
    <ChapterImages :slide="slide" />
    <MantraSimpleText :index="index" :slide="slide" />
    <MantraContent :slide="slide" :index="index" is-reverse only-second red-text no-red-title/>
    <ChapterTexts :index="index" />
    <MantraControls
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :currentSlide="currentSlide"
      :index="index"
    />
  </div>
</template>

<script>
import { useResizeObserver, useIntersectionObserver } from "@vueuse/core";
import { useStore } from "@/stores/store";
export default {
  name: "Mantra",
  props: {
    currentSlide: {
      type: Number,
      default: 0,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const el = ref(null);
    const mantraSize = ref();
    const store = useStore();

    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          store.setMantraSize(mantraSize.value);
        }
      }
    );

    useResizeObserver(el, (entries) => {
      const entry = entries[0];
      const { height } = entry.contentRect;
      mantraSize.value = height;
    });

    const nextSlide = () => {
      emit("onNext");
    };

    const prevSlide = () => {
      emit("onPrev");
    };

    return { nextSlide, prevSlide, el };
  },
};
</script>

<style lang="scss" scoped>
#chapter {
  scroll-margin-top: 0px;
}
.mantraContentRoot {
  h3 {
    bottom: 0;
  }
}
</style>
