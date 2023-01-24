<template>
  <div class="chapterContentRoot" :class="{ isReverse }">
    <p class="tagline" v-if="!onlySecond">
      {{ $t(`mantra-${index}-tagline`)
      }}<span>{{ $t(`mantra-${index}-tagline-red`) }}</span>
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
    <div class="secondBlock" :class="{ onlySecond }">
      <img
        :src="slide.images?.mantra_content_image_2"
        alt=""
        v-if="!onlySecond"
      />
      <img :src="slide.images?.mantra_content_image_5" alt="" v-else />
      <div class="textImage">
        <div class="textImageContent">
          <h2 class="textTitleContent" :class="{ largeTitle }">
            {{ $t(`mantra-${index}-content-title-${onlySecond}`) }}
            <br v-if="backLine" />
            <span v-if="!onlySecond">{{
              $t(`mantra-${index}-content-subtitle-${onlySecond}`)
            }}</span>
            <span v-if="alinea" class="alinea">
              {{ $t(`mantra-${index}-content-subtitle-${onlySecond}`) }}
            </span>
            <span v-else class="black">
              {{ $t(`mantra-${index}-content-subtitle-${onlySecond}`) }}
            </span>
          </h2>
          <p v-if="onlySecond && !redText">
            {{ $t(`mantra-${index}-content-text-2-second`) }}
          </p>
          <div v-else-if="onlySecond && redText">
            <p class="redText"> {{ $t(`mantra-${index}-content-text-2-second`) }} <span>{{ $t(`mantra-${index}-content-text-2-red`) }}</span>{{ $t(`mantra-${index}-content-text-2-second-p2`) }} <span>{{ $t(`mantra-${index}-content-text-2-red`) }}</span> {{ $t(`mantra-${index}-content-text-2-second-p3`) }} <span>{{ $t(`mantra-${index}-content-text-2-red`) }}</span></p>
          </div>
          <div v-else-if="redText">
            <p class="redText"> {{ $t(`mantra-${index}-content-text-2`) }} <span>{{ $t(`mantra-${index}-content-text-2-red`) }}</span>{{ $t(`mantra-${index}-content-text-2-red-suite`) }}</p>
          </div>
          <p v-else>{{ $t(`mantra-${index}-content-text-2`) }}</p>
        </div>
        <img
          :src="slide.images?.mantra_content_image_3"
          alt=""
          v-if="!onlySecond"
        />
        <img :src="slide.images?.mantra_content_image_4" alt="" v-else />
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
    backLine: {
      type: Boolean,
      default: false,
    },
    largeTitle: {
      type: Boolean,
      default: false,
    },
    redText: {
      type: Boolean,
      default: false
    },
    alinea: {
      type: Boolean,
      default: false
    }
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
    padding: 0 226px;
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
            text-align: left;
            margin-left: 0px;
            margin-right: 24px;
          }

          @include above(large) {
            padding: 0 0 18px 0;
            font-size: 42px;
          }

          &.largeTitle {
            &:before {
              @include above(large) {
                width: 82px;
                right: -13%;
                left: inherit;
              }
            }
          }

          &:before {
            left: -35%;

            @include above(big) {
              width: 62px;
              left: inherit;
              right: -13%;
            }

            @include above(large) {
              left: inherit;
              width: 82px;
              top: 35%;
              right: -13%;
            }
          }
        }
      }
    }
  }
  .secondBlock {
    &.onlySecond {
      margin-top: 0;
    }
    @include above(big) {
      margin-top: 180px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    @include above(large) {
      margin-top: 180px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    & > img {
      object-fit: cover;
      width: 100%;
      display: none;

      @include above(big) {
        max-width: 500px;
        display: block;
      }
      @include above(large) {
        max-width: 660px;
        display: block;
      }
    }

    .textImage {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      @include above(big) {
        margin-left: 12px;
        display: block;
      }

      .textImageContent {
        @include above(large) {
          margin-bottom: 64px;
        }
      }
      h2 {
        font-family: "Baskerville" !important;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 4px;
        line-height: 23px;
        color: #260f01;
        position: relative;
        margin-top: 42px;
        text-align: left;
        margin-left: 12px;

        @include above(big) {
          font-size: 40px;
        }

        @include above(large) {
          font-size: 42px;
          letter-spacing: 9.2px;
          line-height: 52px;
          text-align: left;
          margin-top: 0;
          margin-left: 24px;
        }

        .alinea {
          color: #260f01;
          margin-left: 32px;
        }

        .black{
           color: #260f01;
        }

        @include above(large) {
          margin-top: 0;
          //padding: 0 64px 0 0;
          font-size: 42px;
        }

        &.largeTitle {
          &:before {
            left: -17%;
            @include above(large) {
              width: 82px;
              left: -13%;
            }
          }
        }

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: -35%;
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
            left: -16%;
          }
        }

        span {
          font-family: "Baskerville" !important;
          font-weight: 400;
          color: #ce1313;
        }
      }
      p {
        color: #333333b3;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        padding: 16px 0 80px 32px;
        max-width: 300px;

        @include above(big) {
          padding: 0;
          line-height: 20px;
          font-size: 16px;
          margin: 0 auto;
          max-width: 500px;
          padding-bottom: 24px;
          padding-top: 12px;
        }

        @include above(large) {
          font-size: 18px;
          line-height: 24px;
          margin-top: 10px;
          max-width: 500px;
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
    font-family: "Baskerville" !important;
    text-align: right;
    font-size: 15px;
    letter-spacing: 3px;
    line-height: 15px;
    margin: 0 32px 16px 0;
    span {
      font-family: "Baskerville" !important;
      font-size: 15px;
      line-height: 15px;
      letter-spacing: 3px;
      font-style: italic;
      color: #ce1313;
    }
    @include above(big) {
      font-family: "Baskerville" !important;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 5.6px;
      margin-bottom: 64px;

      span {
        font-family: "Baskerville" !important;
        font-size: 24px;
        font-style: italic;
        line-height: 28px;
        letter-spacing: 5.6px;
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
      left: 10%;
      bottom: -5%;
      transform: rotate(90deg);

      @include above(big) {
        width: 80px;
        left: -5%;
        bottom: -96px;
        transform: rotate(0deg);
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
      margin: 116px auto 64px auto;
      max-width: 325px;
      font-size: 17px;
      line-height: 19px;
      text-align: left;

      @include above(small) {
        max-width: 400px;
        font-size: 20px;
        line-height: 28px;
        margin: 64px 0 0 64px;
      }

      @include above(big) {
        font-size: 28px;
        margin: 64px 0 0 64px;
        line-height: 28px;
        max-width: 570px;
      }

      @include above(large) {
        margin: 64px 0 0 64px !important;
        font-size: 30px;
        line-height: 38px;
        margin: 0;
        max-width: 400px;
      }
    }
  }

  .redText{
    span{
      color : #CE1313;
    }
  }
}
</style>
