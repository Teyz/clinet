<template>
  <div class="heroRoot" id="hero">
    <div class="container">
      <img src="@/assets/img/heroIllus.svg" alt="" />
      <h1>
        {{ $t("title") }} <span>{{ $t("subtitle") }}</span>
      </h1>
      <div class="discover">
        <a href="#chapter"
          >{{ $t("discover") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.075"
            height="36.075"
            viewBox="0 0 36.075 36.075"
          >
            <g
              id="Groupe_487"
              data-name="Groupe 487"
              transform="translate(2708.075 -998) rotate(90)"
            >
              <g
                id="Groupe_484"
                data-name="Groupe 484"
                transform="translate(998 2708.075) rotate(-90)"
              >
                <g
                  id="Groupe_482"
                  data-name="Groupe 482"
                  transform="translate(24.408 27.428) rotate(180)"
                >
                  <g
                    id="Groupe_486"
                    data-name="Groupe 486"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Tracé_46"
                      data-name="Tracé 46"
                      d="M12.468,7.476,6.564.115a.459.459,0,0,0-.607,0h0l-.013.01L.04,7.486A.184.184,0,0,0,0,7.594a.226.226,0,0,0,.385.17L5.83,2.413,5.879,18.14c0,.231.1.408.333.408a.419.419,0,0,0,.419-.418L6.679,2.4l5.445,5.351a.226.226,0,0,0,.385-.17.184.184,0,0,0-.04-.108"
                      transform="translate(0.116 0.116)"
                      fill="#d6d6d6"
                    />
                    <path
                      id="Tracé_46_-_Contour"
                      data-name="Tracé 46 - Contour"
                      d="M6.328,18.78c-.276,0-.448-.2-.449-.524L5.831,2.806.583,7.963a.339.339,0,0,1-.239.1.349.349,0,0,1-.25-.107A.338.338,0,0,1,0,7.705a.3.3,0,0,1,.066-.176L5.958.184V.179L5.984.154,6,.143a.575.575,0,0,1,.76,0l.014.014,5.9,7.361a.3.3,0,0,1,.066.176.338.338,0,0,1-.094.25.349.349,0,0,1-.25.107.339.339,0,0,1-.239-.1L6.911,2.8l-.048,15.45A.537.537,0,0,1,6.328,18.78ZM6.062,2.253l.05,16c0,.194.073.292.216.292a.3.3,0,0,0,.3-.3l.049-16,5.642,5.544a.112.112,0,0,0,.158,0,.106.106,0,0,0,.029-.08.067.067,0,0,0-.015-.04L6.6.312A.351.351,0,0,0,6.169.3l-.02.017L6.142.326.248,7.675a.068.068,0,0,0-.015.039.106.106,0,0,0,.029.08.112.112,0,0,0,.158,0Z"
                      transform="translate(0 0)"
                      fill="#d6d6d6"
                    />
                  </g>
                </g>
                <path
                  id="Ellipse_10"
                  data-name="Ellipse 10"
                  d="M18.037,1.164A16.874,16.874,0,0,0,6.106,29.969,16.874,16.874,0,0,0,29.969,6.106,16.763,16.763,0,0,0,18.037,1.164m0-1.164A18.037,18.037,0,1,1,0,18.037,18.037,18.037,0,0,1,18.037,0Z"
                  fill="#d6d6d6"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Hero",
  setup() {
    const { locale } = useI18n();

    return {
      locale,
    };
  },
};
</script>

<style lang="scss" scoped>
.heroRoot {
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  z-index: 2;

  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  img {
    object-fit: cover;
    max-width: 250px;
    width: 100%;

    @include above(big) {
      max-width: 600px;
    }
  }

  h1 {
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 3.6px;
    margin-top: 40px;
    text-transform: uppercase;
    font-family: "Baskerville";

    @include above(small) {
      font-size: 46px;
      line-height: 52px;
      letter-spacing: 9.2px;
      margin-top: 24px;
    }

    @include above(large) {
      font-size: 46px;
      line-height: 52px;
      letter-spacing: 9.2px;
      margin-top: 42px;
    }

    font-family: "SchnyderS";
    color: #260f01;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;

    span {
      color: #d10019;
    }
  }

  .discover {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    path {
      transition: all 0.2s ease;
    }

    &:hover {
      path {
        fill: #d10019;
      }
    }
  }

  a {
    position: relative;
    font-family: "SchnyderS";
    color: #260f01;
    line-height: 11px;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include above(big) {
      line-height: 16px;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 2.8px;
    }

    svg {
      margin-top: 24px;
    }

    @include above(large) {
      margin-top: 24px;
    }
  }
}
</style>
