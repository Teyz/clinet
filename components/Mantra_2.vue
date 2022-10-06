<template>
  <div class="mantraRoot" ref="el">
    <MantraHeader
      v-bind:currentSlide="currentSlide"
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :index="index"
      :slide="slide"
    />
    <MantraContent :slide="slide" :index="index" />
    <MantraSimpleText :slide="slide" :index="index" />
    <MantraSimpleImage :slide="slide" />
    <MantraImageText :slide="slide" :index="index" big-illus />
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
  name: "Mantra_2",
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
