<template>
  <main>
    <h1>OFFF</h1>
    <section id="section-1">
      <h3>Envies et attentes</h3>
      <div class="section-1-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/offf_1.png" alt="OFFF">
        <p>A travers l'<strong>OFFF</strong> de Barcelone, qui aura lieu en mars 2023, j'espère pouvoir découvrir de mes propres yeux de nouvelles créations originales dans de nombreux domaines différents. J'espère aussi que ces nombreuses créations me permettront de m'<strong>inspirer</strong> pour mon propre travail.<br><br>
          Par ailleurs, j'espère pouvoir faire de nombreuses belles rencontres avec des <strong>designers</strong> de divers domaines. J'ai pu en apprendre beaucoup sur eux et sur leur travail. Enfin, je pense qu'en <strong>rencontrant</strong> ces créateurs, cela pourrait me permettre de potentiellement promouvoir mon travail afin de mieux lancer ma future carrière de designer.</p>
      </div>
    </section>
    <section id="section-2">
      <div class="section-2-banner">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/05/photo_bandroll.png">
      </div>
      <h3>Comment c'était ?</h3>
      <div class="section-2-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/offf_2.png" alt="OFFF">
        <p>Pendant le festival, j'ai eu l'occasion d'assister à de nombreuses présentations et spectacles différents et intéressants.<br><br>
          Par exemple, j'ai assisté à la présentation <strong>PANIC! Studio</strong> très inspirante. <strong>PANIC! Studio</strong> est un studio d'animation qui travaille pour de nombreuses sociétés différentes telles que <strong>Netflix</strong>, <strong>Indeed</strong> et <strong>Google</strong>.<br><br>
          Je vais également participer à trois événements différents d'<strong>Adobe</strong> pour <strong>Photoshop</strong>, <strong>Premiere Pro</strong> et <strong>After Effects</strong>. Dans ceux-ci, ils ont montré un tas de nouvelles fonctionnalités très intéressantes qui seront bientôt ajoutées aux logiciels.<br><br>
          <strong>Rizon Parain</strong>, <strong>FIELD</strong> et <strong>Bendito Mockup</strong> ont également participé à l'OFFF et leurs conférences étaient très bien aussi.<br><br>
          Ce festival était globalement très inspirant et motivant !</p>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "OFFFfr"
}
</script>
<style scoped lang="less">
@import "/src/assets/css/main.less";
main {
  text-align: center;
  h1 {
    margin-top: 68px;
    @media screen and (min-width: 800px) {
      margin-top: 160px;
    }
  }
  #section-1 {
    margin: 80px 32px 70px;
    @media screen and (min-width: 800px) {
      margin: 120px 5% 100px 5%;
    }
    h3 {
      text-align: left;
      @media screen and (min-width: 800px) {
        margin-bottom: 25px;
      }
    }
    .section-1-flex {
      @media screen and (min-width: 800px) {
        display: flex;
      }
      img {
        width: 80vw;
        border: 5px solid black;
        border-radius: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
        @media screen and (min-width: 800px) {
          width: 40vw;
          height: fit-content;
          margin-bottom: 0;
          margin-top: 0;
        }
      }
      p {
        text-align: left;
        @media screen and (min-width: 800px) {
          margin-left: 5%;
        }
      }
    }
  }
  #section-2 {
    position: relative;
    background-color: #A0B6FF;
    padding-top: 12vw;
    @media screen and (min-width: 800px) {
      padding-top: 15vw;
    }
    .section-2-banner {
      position: absolute;
      top: -50px;
      width: 100%;
      img {
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
      }
    }
    h3 {
      text-align: left;
      margin: 0 32px 30px;
      @media screen and (min-width: 800px) {
        margin: 0 5% 25px;
      }
    }
    .section-2-flex {
      @media screen and (min-width: 800px) {
        display: flex;
        padding-bottom: 60px;
      }
      img {
        width: 80vw;
        border: 5px solid black;
        border-radius: 20px;
        margin-bottom: 20px;
        @media screen and (min-width: 800px) {
          margin-left: 5%;
          width: 40vw;
          height: fit-content;
          margin-bottom: 0;
        }
      }
      p {
        text-align: left;
        margin-left: 32px;
        margin-right: 32px;
        padding-bottom: 50px;
        @media screen and (min-width: 800px) {
          margin-left: 5%;
          margin-right: 5%;
          padding-bottom: 0;
        }
      }
    }
  }
}

</style>