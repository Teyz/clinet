<template>
  <div class="mantraControlsRoot" :class="{ isSmall }">
    <div @click="prevSlide" :class="slide" class="prev">
      <svg
        id="flechegauche"
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
      >
        <g
          id="Groupe_487"
          data-name="Groupe 487"
          transform="translate(1029 2703) rotate(180)"
        >
          <g
            id="Groupe_484"
            data-name="Groupe 484"
            transform="translate(250 3638.939) rotate(-90)"
          >
            <g
              id="Groupe_482"
              data-name="Groupe 482"
              transform="translate(956.814 771.469) rotate(180)"
            >
              <g
                id="Groupe_486"
                data-name="Groupe 486"
                transform="translate(0 0)"
              >
                <path
                  id="Tracé_46"
                  data-name="Tracé 46"
                  d="M10.714,6.424,5.641.1A.394.394,0,0,0,5.12.1h0L5.108.107.035,6.433A.158.158,0,0,0,0,6.525a.2.2,0,0,0,.331.146l4.679-4.6.042,13.514c0,.2.087.351.286.351a.36.36,0,0,0,.36-.359L5.74,2.065l4.679,4.6a.194.194,0,0,0,.331-.146.158.158,0,0,0-.035-.093"
                  transform="translate(0 0)"
                  fill="#d6d6d6"
                />
                <path
                  id="Tracé_46_-_Contour"
                  data-name="Tracé 46 - Contour"
                  d="M5.337,16.038c-.237,0-.385-.173-.386-.45L4.91,2.312.4,6.743A.292.292,0,0,1,.2,6.828a.3.3,0,0,1-.215-.092A.29.29,0,0,1-.1,6.521.26.26,0,0,1-.043,6.37L5.02.058v0L5.042.032,5.054.023a.494.494,0,0,1,.653,0l.012.012,5.074,6.325a.256.256,0,0,1,.057.152.291.291,0,0,1-.081.215.3.3,0,0,1-.215.092.291.291,0,0,1-.205-.085L5.839,2.3,5.8,15.58A.461.461,0,0,1,5.337,16.038Zm-.228-14.2.043,13.751c0,.166.063.251.186.251a.261.261,0,0,0,.26-.26L5.64,1.827l4.848,4.764a.1.1,0,0,0,.136,0,.091.091,0,0,0,.025-.069.058.058,0,0,0-.013-.034L5.569.168A.3.3,0,0,0,5.2.161L5.184.175l-.006,0L.113,6.5A.058.058,0,0,0,.1,6.529.091.091,0,0,0,.125,6.6a.1.1,0,0,0,.136,0Z"
                  transform="translate(0 0)"
                  fill="#d6d6d6"
                />
              </g>
            </g>
            <path
              id="Ellipse_10"
              data-name="Ellipse 10"
              d="M15.5,1A14.5,14.5,0,0,0,5.247,25.753,14.5,14.5,0,0,0,25.753,5.247,14.405,14.405,0,0,0,15.5,1m0-1A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z"
              transform="translate(935.939 748)"
              fill="#d6d6d6"
            />
          </g>
        </g>
      </svg>
    </div>
    <div @click="nextSlide" :class="slide" class="next">
      <svg
        id="flechedroite"
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        click="nextSlide"
        :class="slide"
        class="next"
      >
        <g
          id="Groupe_484"
          data-name="Groupe 484"
          transform="translate(-748 966.939) rotate(-90)"
        >
          <g
            id="Groupe_482"
            data-name="Groupe 482"
            transform="translate(956.814 771.469) rotate(180)"
          >
            <g
              id="Groupe_486"
              data-name="Groupe 486"
              transform="translate(0 0)"
            >
              <path
                id="Tracé_46"
                data-name="Tracé 46"
                d="M10.714,6.424,5.641.1A.394.394,0,0,0,5.12.1h0L5.108.107.035,6.433A.158.158,0,0,0,0,6.525a.2.2,0,0,0,.331.146l4.679-4.6.042,13.514c0,.2.087.351.286.351a.36.36,0,0,0,.36-.359L5.74,2.065l4.679,4.6a.194.194,0,0,0,.331-.146.158.158,0,0,0-.035-.093"
                transform="translate(0 0)"
                fill="#d6d6d6"
              />
              <path
                id="Tracé_46_-_Contour"
                data-name="Tracé 46 - Contour"
                d="M5.337,16.038c-.237,0-.385-.173-.386-.45L4.91,2.312.4,6.743A.292.292,0,0,1,.2,6.828a.3.3,0,0,1-.215-.092A.29.29,0,0,1-.1,6.521.26.26,0,0,1-.043,6.37L5.02.058v0L5.042.032,5.054.023a.494.494,0,0,1,.653,0l.012.012,5.074,6.325a.256.256,0,0,1,.057.152.291.291,0,0,1-.081.215.3.3,0,0,1-.215.092.291.291,0,0,1-.205-.085L5.839,2.3,5.8,15.58A.461.461,0,0,1,5.337,16.038Zm-.228-14.2.043,13.751c0,.166.063.251.186.251a.261.261,0,0,0,.26-.26L5.64,1.827l4.848,4.764a.1.1,0,0,0,.136,0,.091.091,0,0,0,.025-.069.058.058,0,0,0-.013-.034L5.569.168A.3.3,0,0,0,5.2.161L5.184.175l-.006,0L.113,6.5A.058.058,0,0,0,.1,6.529.091.091,0,0,0,.125,6.6a.1.1,0,0,0,.136,0Z"
                transform="translate(0 0)"
                fill="#d6d6d6"
              />
            </g>
          </g>
          <path
            id="Ellipse_10"
            data-name="Ellipse 10"
            d="M15.5,1A14.5,14.5,0,0,0,5.247,25.753,14.5,14.5,0,0,0,25.753,5.247,14.405,14.405,0,0,0,15.5,1m0-1A15.5,15.5,0,1,1,0,15.5,15.5,15.5,0,0,1,15.5,0Z"
            transform="translate(935.939 748)"
            fill="#d6d6d6"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "MantraControls",
  emits: ["onNext", "onPrev"],
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: Object,
      default: () => {},
    },
    currentSlide: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const slide = computed(() => `slide-${props.currentSlide}`);
    const nextSlide = () => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("onNext");
      }, 1000);
    };

    const prevSlide = () => {
      const mantraHeader = document.getElementById("mantraHeader");
      mantraHeader.scrollIntoView();
      setTimeout(() => {
        emit("onPrev");
      }, 1000);
    };

    return { nextSlide, prevSlide, slide };
  },
};
</script>

<style lang="scss" scoped>
.mantraControlsRoot {
  padding: 24px 48px;
  margin: 42px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include above(big) {
    padding: 24px 200px;
  }

  &.isSmall {
    max-width: 180px;
    width: 100%;
    padding: 24px;
  }

  div {
    cursor: pointer;
  }
}

.prev {
  pointer-events: auto;
  path {
    fill: #ce1313;
  }
  &.slide-0 {
    pointer-events: none;
    path {
      fill: #cfc9c7;
    }
  }
}

.next {
  pointer-events: auto;
  path {
    fill: #ce1313;
  }
  &.slide-0 {
    color: #ce1313;
    pointer-events: auto;
    path {
      fill: #ce1313;
    }
  }

  &.slide-5 {
    pointer-events: none;
    path {
      fill: #cfc9c7;
    }
  }
}
</style>
