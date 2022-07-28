<template>
  <footer ref="footer">
    <div class="footer">
      <p>© 2022 Château Clinet</p>
      <ul>
        <li>
          <nuxt-link :to="{ path: '/mentions-legales' }"
            >Legal / Credits</nuxt-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { useStore } from "@/stores/store";

export default {
  name: "Footer",
  setup() {
    const footer = ref(null);

    const store = useStore();

    const { stop } = useIntersectionObserver(
      footer,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          store.setShowBackToHeader(false);
        }
      }
    );

    return {
      footer,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 25px 27px;

  @include above(small) {
    padding: 32px 100px 32px 100px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 12px;
      font-size: 16px;

      &.desktopLink {
        display: none;

        @include above(big) {
          display: block;
        }
      }

      &.mobileLink {
        display: block;

        @include above(big) {
          display: none;
        }
      }

      a {
        font-family: "Baskerville";
        font-size: 8px;
        line-height: 18px;
        letter-spacing: 1.6px;
        text-transform: uppercase;

        @include above(big) {
          font-size: 12px;
          letter-spacing: 2.4px;
          line-height: 14px;
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  p {
    @include typo-text-footer-mobile;

    @include above(big) {
      @include typo-text-footer;
    }
  }
}
</style>
