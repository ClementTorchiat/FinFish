<template>
  <main>
    <div class="parallax">
      <div class="parallax__layer parallax__layer__0">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l9.png" />
      </div>
      <div class="parallax__layer parallax__layer__1">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l8.png" />
      </div>
      <div class="parallax_layer_title">
        <h1>LET'S DIVE</h1>
      </div>
      <div class="parallax__layer parallax__layer__2">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l7.png" />
      </div>
      <div class="parallax__layer parallax__layer__3">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l6.png" />
      </div>
      <div class="parallax__layer parallax__layer__4">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l5.png" />
      </div>
      <div class="parallax__layer parallax__layer__5">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l4.png" />
      </div>
      <div class="parallax__layer parallax__layer__6">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l3.png" />
      </div>
      <div class="parallax__layer parallax__layer__7">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l2.png" />
      </div>
      <div class="parallax__layer parallax__layer__8">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/l1.png" />
      </div>
    </div>
    <section id="section-1">
      <h2>À Propos</h2>
      <div class="section-1-flex">
        <div class="section-1-flex-1">
          <p><strong>Abyssal NFT</strong> est le projet pour lequel <strong>FinFish</strong> est né.<br><br>
            Avec <strong>141 778 000 000</strong> de variantes différentes et uniques de ce NFT, vous en trouverez certainement une qui vous plaira.<br><br>
            Ce montant a été atteint grâce aux multiples <strong>éléments</strong> différents utilisés pour fabriquer chaque poisson et fond, comme les nageoires, les queues ou encore le refief pour les fonds. Il existe <strong>62 512 128</strong> possibilités de poissons différents et environ <strong>2 268</strong> fonds différents.<br><br>
            Suivez chaque étape du processus de réalisation de cette collection de NFT en consultant la page <strong>"À Propos"</strong>.</p>
          <router-link to="/fr/story"><button class="button">En savoir plus</button></router-link>
        </div>
        <div class="section-1-flex-2">
          <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/05/nft-1.png" id="nft-generator" alt="A FinFish NFT">
          <button class="button" id="nft-generator-button" onclick="generate_nft();">Générer</button>
        </div>
      </div>
    </section>
    <section id="section-2">
      <h2>OFFF</h2>
      <div class="section-2-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/offf_1.png" alt="OFFF">
        <p>L'<strong>OFFF</strong>, à Barcelone en 2023, est un collectif international d'art médiatique et de design qui comprend des artistes numériques, des designers d'expérience et des futurs créateurs.<br><br>
          Avec mon université, <strong>j'ai assisté à ce festival</strong>. Ce fut une expérience incroyable qui a été très inspirante.<br><br>
          Voyez quelles étaient mes attentes et ce que j'ai vécu durant ces trois jours.</p>
      </div>
      <router-link to="/fr/offf"><button class="button">En savoir plus</button></router-link>
    </section>
  </main>
</template>
<script>
export default {
  name: "Homefr"
}
</script>
<style scoped lang="less">
@import "/src/assets/css/main.less";
#section-1 {
  text-align: center;
  overflow-x: hidden;
  background-color: #ADD6FF;
  h2 {
    margin-top: 50px;
  }
  .section-1-flex {
    @media screen and (min-width: 800px) {
      margin: 80px 5% 70px 5%;
      display: flex;
      flex-direction: row-reverse;
    }
    .section-1-flex-1 {
      margin-bottom: 50px;
      @media screen and (min-width: 800px) {
        margin-bottom: 0;
      }
      p {
        text-align: left;
        margin: 30px 32px;
        @media screen and (min-width: 800px) {
          margin: 0 0 68px 10%;
        }
      }
    }
    .section-1-flex-2 {
      #nft-generator {
        width: 80vw;
        border: 5px solid black;
        border-radius: 20px;
        margin-bottom: 30px;
        @media screen and (min-width: 800px) {
          width: 473px;
        }
      }
      .button {
        margin-bottom: 75px;
        @media screen and (min-width: 800px) {
          margin-bottom: 0;
        }
      }
    }
  }
}

#section-2 {
  &:before{
    content: " ";
    display: block;
    height: 36px;
    width: 100vw;
    background-image: url("https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/relief_1.png");
    background-size: cover;
    position: relative;
    top: -36px;
  }
  text-align: center;
  background-color: #BACAFF;
  h2 {
    @media screen and (min-width: 800px) {
      margin-top: 50px;
    }
  }
  .section-2-flex {
    @media screen and (min-width: 800px) {
      display: flex;
      margin: 80px 5% 50px 5%;
    }
    img {
      width: 80vw;
      border: 5px solid black;
      border-radius: 20px;
      margin-top: 40px;
      @media screen and (min-width: 800px) {
        width: 576px;
        margin-top: 0;
      }
    }
    p {
      text-align: left;
      margin: 30px 32px;
      @media screen and (min-width: 800px) {
        margin: 0 0 68px 5%;
      }
    }
  }
  .button {
    margin-bottom: 50px;
  }
}

.parallax {
  overflow-x: hidden;
  height: 100vh;
  position: relative;
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.parallax__layer img {
  position: absolute;
  bottom: 0;
  width: 350vw;
  @media screen and (min-width: 800px) {
    width: 100vw;
  }
}

.parallax_layer_title h1 {
  text-align: center;
  margin-top: 290px;
  @media screen and (min-width: 800px) {
    margin-top: 300px;
  }
}

</style>