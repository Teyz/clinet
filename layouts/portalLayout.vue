<template>
  <div id="__root">
    <Header is-relative/>
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#__root{
  width: 100vw;
  height: 100vh;
}
</style>
