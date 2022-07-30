<template>
  <div class="wordListRoot">
    <img src="@/assets/img/logo-mobile.svg" alt="" />
    <ul>
      <li class="wordListItem" @click="goToSlide(0)">
        {{ $t("mantra-1-wordlist") }}
      </li>
      <li class="wordListItem" @click="goToSlide(1)">
        {{ $t("mantra-2-wordlist") }}
      </li>
      <li class="wordListItem" @click="goToSlide(2)">
        {{ $t("mantra-3-wordlist") }}
      </li>
      <li class="wordListItem" @click="goToSlide(3)">
        {{ $t("mantra-4-wordlist") }}
      </li>
      <li class="wordListItem" @click="goToSlide(4)">
        {{ $t("mantra-5-wordlist") }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WordList",
  props: {
    currentSlide: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const currentSlide = computed(() => props.currentSlide);
    const wordListItems = ref();
    onMounted(() => {
      wordListItems.value = document.querySelectorAll(".wordListItem");
      wordListItems.value.forEach((item, index) => {
        if (index === props.currentSlide) {
          item.style.pointerEvents = "none";
        } else {
          item.style.pointerEvents = "auto";
        }
      });
    });

    watch(currentSlide, (newValue) => {
      wordListItems.value.forEach((item, index) => {
        if (index === newValue) {
          item.style.pointerEvents = "none";
        } else {
          item.style.pointerEvents = "auto";
        }
      });
    });

    const goToSlide = (goToSlideNumber) => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("goToSlide", goToSlideNumber);
      }, 1000);
    };

    return { goToSlide };
  },
};
</script>

<style lang="scss" scoped>
.wordListRoot {
  max-width: 920px;
  margin: 32px auto 64px auto;
  text-align: center;

  @include above(big) {
    margin: 32px auto 104px auto;
    max-width: 1330px;
  }

  img {
    object-fit: cover;
    width: 28px;
    margin-bottom: 48px;

    @include above(big) {
      margin-bottom: 72px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      font-family: "Baskerville";
      color: #333333;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 1.4px;
      font-weight: 500;
      margin: 0 8px;
      transition: all 0.5s ease;
      cursor: pointer;
      text-align: center;
      text-transform: uppercase;
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
        margin: 0 16px;
        font-size: 32px;
        letter-spacing: 7.2px;
        line-height: 46px;
        text-align: left;
        color: #00000029;
      }

      @include above(large) {
        margin: 0 16px;
        font-size: 36px;
        letter-spacing: 7.2px;
        line-height: 46px;
        text-align: left;
        color: #00000029;
      }

      &:hover {
        color: #b71616;
      }

      &:first-child {
        @include above(big) {
          margin-left: 0;
        }
      }

      &:last-child {
        @include above(big) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
