<template>
  <div class="mantraHeader" ref="mantraHeader" id="mantraHeader">
    <span class="sliderStep">{{ $t("chapter") }} {{ currentSlide + 1 }}/5</span>
    <h2 :class="{maxWidth}">
      {{ $t(`mantra-${index}-title`) }}
    </h2>
    <MantraControls
      is-small
      @on-next="() => nextSlide()"
      @on-prev="() => prevSlide()"
      :currentSlide="currentSlide"
      :index="index"
    />
  </div>
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
export default {
  name: "MantraHeader",
  props: {
    currentSlide: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    maxWidth: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const nextSlide = () => {
      emit("onNext");
    };

    const prevSlide = () => {
      emit("onPrev");
    };

    return { nextSlide, prevSlide };
  },
};
</script>

<style lang="scss" scoped>
.mantraHeader {
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 0;
  margin: 160px 0 148px 0;

  @include above(small) {
    padding: 0 160px;
    margin: 250px 0 360px 0;
  }

  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @include above(small) {
      bottom: -70%;
      height: 180px;
      display: block;
    }

    @include above(big) {
      bottom: -80%;
      height: 180px;
      display: block;
    }
  }

  img {
    margin: 0 auto;
    object-fit: cover;
    max-width: 159px;
    display: block;
  }

  .sliderControls {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      position: relative;
      color: #00000029;
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        color: #260f01;

        #flecheG {
          right: 120%;
        }

        #flecheD {
          left: 130%;
        }

        path {
          stroke: #260f01;
        }
      }

      svg {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        transition: all 0.5s ease;

        path {
          stroke: #cfc9c7;
        }
      }

      #flecheG {
        right: 110%;
      }

      #flecheD {
        left: 120%;
      }
    }
  }

  .sliderStep {
    font-family: "Baskerville";
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    color: #ce1313;
    position: relative;

    @include above(big) {
      font-size: 13px;
      line-height: 19px;
      letter-spacing: 2px;
    }

    &:before {
      content: "";
      background-color: #ce1313;
      width: 3px;
      height: 3px;
      border-radius: 1000px;
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);

      @include above(big) {
        bottom: -24px;
        width: 5px;
        height: 5px;
      }
    }

    @include above(small) {
      font-size: 15px;
      line-height: 17px;
      letter-spacing: 3px;
    }
  }

  h2 {
    max-width: 50%;
    font-family: "Baskerville";
    color: #260f01;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 3.9px;
    margin: 24px auto 24px auto;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;

    &.maxWidth {
      max-width: 48%;
    }

    @include above(small) {
      margin: 42px 160px 40px 160px;
      font-size: 44px;
      line-height: 46px;
      letter-spacing: 8.8px;
      max-width: 40%;
    }
  }
}
</style>
