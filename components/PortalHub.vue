<template>
  <section id="hero">
    <video loop muted autoplay class="video-desktop">
      <source src="@/assets/img/movie.mp4" type="video/mp4" />
    </video>
    <video loop muted autoplay class="video-mobile">
      <source src="@/assets/img/movie.mp4" type="video/mp4" />
    </video>
    <div class="heading">
      <nuxt-link :to="{ path: '/' }">
        <div>
          The
          <span> Sensation </span>
        </div>
      </nuxt-link>
      <div class="portalImage">
        <img src="@/assets/img/castleIllus.svg" alt="" />
      </div>
      <nuxt-link :to="{ path: '/history' }">
        <div>
          The
          <span> Story </span>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  setup() {},
};
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 600px;
  max-height: calc(100vh - 162px);
  padding: 0 24px;
  height: 100%;

  @include above(big) {
    padding: 0 80px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #8f8f8d;
    opacity: 0.5;
    width: 1px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    @include above(big) {
      height: 200px;
    }
  }

  &:before {
    top: 32px;
  }

  &:after {
    bottom: 32px;
  }
}
video {
  padding: 0 24px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  &.video-desktop {
    display: none;
  }
  @include above(small) {
    width: 100%;
    max-height: 100%;
    padding: 0 80px;
    object-fit: cover;
    &.video-mobile {
      display: none;
    }
    &.video-desktop {
      display: block;
    }
  }
}

.portalImage {
  img {
    object-fit: cover;
    width: 335px;
  }
}
.heading {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @include above(big) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    div {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #8f8f8d;
      font-family: "Baskerville";
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 2.5px;
      line-height: 23px;
      font-weight: 500;
      position: relative;
      transition: all 0.2s ease;

      margin: 32px 0;

      @include above(big) {
        margin: 0;
      }

      &:after,
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 1000px;
        background-color: #fff;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
      }

      &:after {
        right: -10%;

        @include above(big) {
          right: 10%;
        }
      }

      &:before {
        left: -10%;

        @include above(big) {
          left: 10%;
        }
      }

      span {
        font-family: "Baskerville";
        color: #8f8f8d;
        font-size: 40px;
        font-weight: 400;
        text-align: center;
        letter-spacing: 4px;
        line-height: 45px;
        font-style: italic;
        text-transform: capitalize;
        transition: all 0.2s ease;
      }

      &:hover {
        color: white;

        span {
          color: white;
        }

        &:after,
        &:before {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
