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
  @include above(big) {
    padding: 144px 104px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      color: #8080804d;
      font-size: 36px;
      line-height: 46px;
      letter-spacing: 3.6px;
      position: relative;

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
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #8080804d;
      }

      @include above(big) {
        margin-right: 40px;
      }
    }
  }
}
</style>
