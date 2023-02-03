<template>
  <div class="chapterWordsRoot">
    <ul>
      <li v-for="word in slide.words" :key="word">
        {{ $t(`${word}`) }}
      </li>
    </ul>
  </div>
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
.chapterWordsRoot {
  padding: 0 24px 104px 24px;
  @include above(big) {
    padding: 144px 104px;
    max-width: 80%;
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      color: #8080804d;
      font-size: 23px;
      line-height: 29px;
      letter-spacing: 2.3px;
      position: relative;
      margin-right: 24px;

      @include above(big) {
        font-size: 36px;
        line-height: 46px;
        letter-spacing: 3.6px;
      }

      &:last-child {
        &:after {
          display: none;
        }
      }

      &:after {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 1000px;
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #8080804d;

        @include above(big) {
          width: 5px;
          height: 5px;
          right: -20px;
        }
      }

      @include above(big) {
        margin-right: 40px;
      }
    }
  }
}
</style>
