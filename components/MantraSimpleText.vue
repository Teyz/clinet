<template>
  <div class="mantraSimpleTextRoot">
    <p>
      {{ $t(`mantra-${index}-simple-text`) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MantraSimpleText",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.mantraSimpleTextRoot {
  position: relative;
  padding: 120px 24px 120px 24px;

  @include above(big) {
    padding: 120px 140px 120px 140px;
  }

  p {
    max-width: 325px;
    text-align: center;
    font-size: 22px;
    line-height: 25px;
    margin: 0 auto;
    font-weight: 100;
    color: #333333;

    @include above(small) {
      max-width: 1054px;
    }

    @include above(big) {
      max-width: 1054px;
      font-size: 28px;
      line-height: 47px;
    }

    @include above(large) {
      max-width: 1000px;
      font-size: 38px;
      line-height: 47px;
    }
  }
}
</style>
