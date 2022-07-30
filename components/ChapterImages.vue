<template>
  <section class="chaperImagesRoot">
    <img :src="slide.images?.chapter_images_1" alt="" />
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
    padding: 0 160px;
  }
  img {
    object-fit: cover;
    display: block;
    max-width: 100%;
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
        width: 400px;
        height: 400px;
        margin-right: 12px;
      }
      @include above(large) {
        width: 520px;
        display: block;
      }
    }

    .mediumImage {
      @include above(big) {
        width: 720px;
        height: 400px;
      }
      @include above(large) {
        width: 790px;
      }
    }
  }
}
</style>
