<template>
  <div class="chapterContentRoot" :class="{ isReverse }">
    <p class="tagline" v-if="!onlySecond">
      ÉNIGMATIQUE ET <span>PUISSANT</span>
    </p>
    <div class="firstBlock" v-if="!onlySecond">
      <div class="headerImage">
        <img
          :src="slide.images?.mantra_content_image_1"
          alt=""
          class="firstImage"
        />
      </div>
      <div class="content" :class="{ isReverse }">
        <p>
          {{ $t(`mantra-${index}-content-text`) }}
        </p>
      </div>
    </div>
    <div class="secondBlock">
      <img :src="slide.images?.mantra_content_image_2" alt="" />
      <div class="textImage">
        <h2>
          {{ $t(`mantra-${index}-content-title`) }}
          <span>{{ $t(`mantra-${index}-content-subtitle`) }}</span>
        </h2>
        <p>{{ $t(`mantra-${index}-content-text-2`) }}</p>
        <img :src="slide.images?.mantra_content_image_3" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "MantraContent",
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 1,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
    onlySecond: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { locale } = useI18n();

    const lang = computed(() => locale.value);

    return { locale, lang };
  },
};
</script>

<style lang="scss" scoped>
.chapterContentRoot {
  @include above(big) {
    padding: 0 160px;
  }

  &.isReverse {
    .secondBlock {
      flex-direction: row-reverse;

      .textImage {
        @include above(big) {
          margin-left: 0px;
          margin-right: 12px;
        }

        h2 {
          @include above(big) {
            text-align: right;
            margin-left: 0px;
            margin-right: 24px;
          }

          @include above(large) {
            padding: 0 64px 0 0;
            font-size: 46px;
          }

          &:before {
            left: inherit;
            right: -13px;

            @include above(big) {
              width: 62px;
              left: inherit;
              right: -13%;
            }

            @include above(large) {
              width: 82px;
              left: inherit;
            }
          }
        }
      }
    }
  }

  .secondBlock {
    @include above(big) {
      margin-top: 240px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    & > img {
      object-fit: cover;
      width: 100%;

      @include above(big) {
        max-width: 500px;
      }
      @include above(large) {
        max-width: 660px;
      }
    }

    .textImage {
      @include above(big) {
        margin-left: 12px;
      }
      h2 {
        font-size: 32px;
        letter-spacing: 9.2px;
        line-height: 52px;
        color: #260f01;
        position: relative;

        @include above(big) {
          font-size: 40px;
          text-align: left;
          margin-left: 24px;
        }

        @include above(large) {
          padding: 0 64px 0 0;
          font-size: 46px;
        }

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: -17%;
          transform: translateY(-50%);
          background-color: #b71616;
          width: 82px;
          height: 1px;

          @include above(big) {
            width: 62px;
            left: -13%;
          }

          @include above(large) {
            width: 82px;
            left: -17%;
          }
        }

        span {
          color: #ce1313;
        }
      }
      p {
        color: #333333b3;
        font-size: 16px;
        line-height: 23px;
        text-align: left;
        padding: 16px 0 80px 80px;
        max-width: 550px;

        @include above(big) {
          padding: 0;
          font-size: 18px;
          margin: 0 auto;
          max-width: 500px;
          padding-bottom: 24px;
          padding-top: 12px;
        }

        @include above(large) {
          padding: 0 64px 0 0;
          font-size: 20px;
          max-width: 550px;
        }
      }
      img {
        object-fit: cover;
        width: 100%;
        display: block;

        @include above(big) {
          max-width: 660px;
          max-height: 450px;
        }
      }
    }
  }

  .tagline {
    @include above(big) {
      text-align: right;
      font-size: 28px;
      font-family: "Baskerville";
      line-height: 28px;
      letter-spacing: 5.6px;
      margin-bottom: 64px;

      span {
        font-size: 28px;
        font-family: "Baskerville";
        line-height: 28px;
        letter-spacing: 5.6px;
        font-style: italic;
        color: #ce1313;
      }
    }
  }

  .headerImage {
    position: relative;

    &:after {
      content: "";
      width: 80px;
      height: 1px;
      background-color: #ae0721;
      position: absolute;
      left: 20%;
      bottom: -30%;

      @include above(small) {
        width: 80px;
        left: 30%;
      }

      @include above(big) {
        width: 80px;
        left: -5%;
        bottom: -96px;
      }
    }
  }

  .firstImage {
    object-fit: cover;
    max-width: 100%;
    height: 270px;

    @include above(small) {
      height: 100%;
    }
  }

  .content {
    position: relative;

    @include above(big) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 12px 0 0 0;

      &.isReverse {
        flex-direction: row-reverse;

        h3 {
          left: 0;
        }
      }
    }

    img {
      object-fit: cover;
      max-width: 100%;

      @include above(big) {
        max-width: 640px;
      }
    }

    p {
      margin: 128px auto 104px auto;
      max-width: 300px;
      font-size: 20px;
      line-height: 28px;
      text-align: left;
      font-weight: 500;
      font-family: "Baskerville";

      @include above(small) {
        max-width: 400px;
      }

      @include above(big) {
        font-size: 32px;
        margin: 64px 0 0 64px;
        line-height: 30px;
        max-width: 570px;
      }

      @include above(large) {
        font-size: 20px;
        margin: 0;
        max-width: 400px;
      }
    }
  }
}
</style>
