<template>
  <div class="movieRoot">
    <video controls width="1156" id="movie">
      <source src="@/assets/img/movie.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.movieRoot {
  padding: 80px 24px 80px 24px;

  @include above(big) {
    padding: 200px 142px;
  }
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: 260px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -75%;
    z-index: 11;

    @include above(big) {
      top: -120px;
      height: 200px;
    }
  }

  &:after {
    content: "";
    width: 1px;
    height: 135px;
    background-color: $secondary;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -40%;

    @include above(big) {
      bottom: -120px;
      height: 200px;
    }
  }

  video {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 600px;
    margin: 0 auto;
    display: block;
  }
}

#movie {
  scroll-margin-top: 120px;
}
</style>
