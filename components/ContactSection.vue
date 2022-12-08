<template>
  <section class="contactRoot" id="contact">
    <img src="@/assets/img/contact.webp" alt="" />
    <div class="contactMain">
      <div class="contactContent">
        <div class="divider"></div>
        Nous
        <span class="cercle">Contacter</span>
        <p>
          16, Chemin de Feytit <br />
          33500 POMEROL, France
        </p>
        <p>
          +33 (0) 5 57 25 50 00 <br />
          contact@chateauclinet.com
        </p>
      </div>
      <p class="downloadDesktop">TÉLÉCHARGER LE DOSSIER DE PRESSE</p>
      <p class="downloadMobile">
        TÉLÉCHARGER <br /><span>DOSSIER DE PRESSE</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  setup() {},
};
</script>

<script setup>
useHead({
  meta: [
    {
      name: "title",
      lang: "fr",
      content: "Clinet | Contact",
    },
    {
      name: "title",
      lang: "en",
      content: "Clinet | Contact",
    },
    {
      name: "description",
      lang: "fr",
      content: "Coordonnées de Château Clinet, Pomerol.",
    },
    {
      name: "description",
      lang: "en",
      content: "Contact details for Château Clinet, Pomerol.",
    },
  ],
});
</script>

<style lang="scss" scoped>
#contact {
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

  @include above(small) {
    padding: 0 80px;
  }
}
img {
  padding: 0 24px;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  width: 100%;
  top: 0;
  left: 0;
  @include above(small) {
    width: 100%;
    padding: 0 80px;
    max-height: 100%;
    object-fit: cover;
  }
}

.portalImage {
  img {
    object-fit: cover;
    width: 335px;
  }
}
.contactMain {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  width: 100%;
  height: 100%;

  .divider {
    background-color: #cecece;
    width: 1px;
    height: 143px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    margin-bottom: 60px;
  }

  .contactContent {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "Baskerville";
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2.5px;
    line-height: 23px;
    font-weight: 500;
    position: relative;

    span {
      font-family: "Baskerville";
      color: white;
      font-size: 40px;
      font-weight: 400;
      text-align: center;
      letter-spacing: 4px;
      line-height: 45px;
      font-style: italic;
      text-transform: capitalize;
      margin-bottom: 64px;

      position: relative;

      &:before {
        content: "";
        background-color: white;
        border-radius: 1000px;
        position: absolute;
        bottom: -70%;
        left: 50%;
        width: 4px;
        height: 4px;
      }
    }

    p {
      color: white;
      font-size: 20px;
      line-height: 23px;
      font-family: "Baskerville";
      font-weight: 500;
      text-align: center;
      text-transform: none;
      letter-spacing: normal;
      margin-bottom: 32px;
    }
  }

  p {
    color: white;
    font-size: 14px;
    line-height: 18px;
    font-family: "Baskerville";
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;

    span {
      color: white;
      font-size: 14px;
      line-height: 18px;
      font-family: "Baskerville";
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-style: italic;
    }

    &.downloadDesktop {
      display: none;
    }

    @include above(big) {
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 1.6px;
      &.downloadDesktop {
        display: block;
      }
      &.downloadMobile {
        display: none;
      }
    }
  }
}
</style>
