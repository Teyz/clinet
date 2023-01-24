<template>
  <section class="chaperImagesRoot">
    <img :src="slide.images?.chapter_images_1" alt="" class="firstImage" />
    <div>
      <img :src="slide.images?.chapter_images_2" alt="" class="smallImage" />
      <img :src="slide.images?.chapter_images_3" alt="" class="mediumImage" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ChapterWords",
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.chaperImagesRoot {
  @include above(big) {
    padding: 0 226px;
  }

  .firstImage {
    margin: 0 auto;
    max-width: 1322px;
    width: 100%;
  }

  img {
    object-fit: cover;
    display: block;
    width: 100%;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 12px;

    .smallImage {
      width: 520px;
      display: none;

      @include above(big) {
        display: block;
        width: 528px;
        height: 515px;
        margin-right: 12px;
        object-fit: cover;
      }
      @include above(large) {
        width: 520px;
        display: block;
      }
    }

    .mediumImage {
      @include above(big) {
        width: 790px;
        height: 515px;
        object-fit: cover;
      }
      @include above(large) {
        width: 790px;
      }
    }
  }
}
</style>
