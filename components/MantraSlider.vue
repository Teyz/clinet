<template>
  <div class="mantraSliderRoot" ref="showBackTopHeader">
    <Carousel
      ref="slider"
      :mouseDrag="false"
      :touchDrag="false"
      :transition="500"
      :style="`height: ${store.$state.mantraSize}px`"
    >
      <slide v-for="(slide, key) in slides" :key="key">
        <component
          :is="slide.components"
          :slide="slide"
          :index="key + 1"
          v-bind:currentSlide="currentSlide"
          @on-next="() => nextSlide()"
          @on-prev="() => prevSlide()"
          ref="mantraRoot"
        />
      </slide>
    </Carousel>
    <WordList
      @go-to-slide="(goToSlideNumber) => goToSlide(goToSlideNumber)"
      v-bind:currentSlide="currentSlide"
    />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { getSliders } from "./slides";
import Chapter_1 from "./Mantra_1.vue";
import Chapter_2 from "./Mantra_2.vue";
import Chapter_3 from "./Mantra_3.vue";
import Chapter_4 from "./Mantra_4.vue";
import Chapter_5 from "./Mantra_5.vue";
import { useStore } from "@/stores/store";

export default {
  name: "MantraSlider",
  components: {
    Carousel,
    Slide,
    Chapter_1,
    Chapter_2,
    Chapter_3,
    Chapter_4,
    Chapter_5,
  },
  setup() {
    const slider = ref(null);

    const slides = getSliders();

    const currentSlide = computed(() => slider?.value?.data.currentSlide.value);

    const goToSlide = (goToSlideNumber) => {
      slider.value.slideTo(goToSlideNumber);
      slider.value.updateSlideWidth();
    };

    const nextSlide = () => {
      slider.value.next();
      slider.value.updateSlideWidth();
    };

    const prevSlide = () => {
      slider.value.prev();
      slider.value.updateSlideWidth();
    };

    const showBackTopHeader = ref(null);

    const store = useStore();

    const { stop } = useIntersectionObserver(
      showBackTopHeader,
      ([{ isIntersecting }], observerElement) => {
        store.setShowBackToHeader(isIntersecting);
      }
    );

    return {
      slider,
      nextSlide,
      currentSlide,
      prevSlide,
      slides,
      goToSlide,
      showBackTopHeader,
      store,
    };
  },
};
</script>

<style lang="scss">
.mantraSliderRoot {
  position: relative;
  overflow: hidden;

  @include above(xs){
     padding: 0 66px;
  }
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.carousel__slide {
  overflow: hidden;
  align-items: flex-start;
}

.carousel__viewport,
.carousel__slide,
.carousel__track {
  height: 100%;
}
</style>
