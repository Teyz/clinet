<template>
  <section class="chaperTextsRoot" :class="{ noFirstText }">
    <p class="smallText" v-if="!noFirstText">
      {{ $t(`chapter-${index}-texts-1`) }}
    </p>
    <p class="bigText">{{ $t(`chapter-${index}-texts-2`) }} <span :class="{redText}">{{ $t(`chapter-${index}-texts-2-red`) }}</span> </p>
  </section>
</template>

<script>
export default {
  name: "ChapterTexts",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    noFirstText: {
      type: Boolean,
      default: false,
    },
    redText: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.chaperTextsRoot {
  padding: 0 24px;
  margin-top: 380px;
  position: relative;

  &:before {
    content: "";
    height: 141px;
    width: 1px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70%;
    background-color: #ce1313;

    @include above(small) {
      top: -100%;
    }

    @include above(big) {
      top: -60%;
    }
  }

  &.noFirstText {
    &:before {
      top: -240px;

      @include above(small) {
        top: -240px;
      }

      @include above(big) {
        top: -320%;
      }
    }
  }

  .smallText {
    text-align: center;
    font-size: 22px;
    line-height: 25px;
    position: relative;
    max-width: 350px;
    margin: 0 auto;

    &:before {
      content: "";
      height: 6px;
      width: 6px;
      border-radius: 1000px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -40px;
      background-color: #ce1313;
    }

    @include above(big) {
      font-size: 36px;
      line-height: 47px;
      max-width: 1050px;
      margin: 0 auto;
    }
  }

  .bigText {
    font-family: "Baskerville";
    font-weight: 500;
    margin-top: 80px;
    text-align: center;
    font-size: 12px;
    line-height: 17px;
    text-transform: uppercase;
    max-width: 350px;
    margin: 80px auto 0 auto;

    span{
      font-family: "Baskerville";
      font-weight: 500;

      &.redText{
        color: #CE1313;
      }
    }

    @include above(big) {
      font-size: 18px;
      letter-spacing: 4px;
      line-height: 28px;
      max-width: 935px;
      margin: 80px auto 0 auto;
    }
  }
}
</style>
