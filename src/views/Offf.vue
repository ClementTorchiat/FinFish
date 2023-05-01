<template>
  <main>
    <h1>OFFF</h1>
    <section id="section-1">
      <h3>Wishes and expectations</h3>
      <div class="section-1-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/offf_1.png" alt="OFFF">
        <p>Through the Barcelona <strong>OFFF</strong>, taking place in March 2023, I hope to be able to discover with my own eyes new original creations in many different fields. I also expect that these many creations will allow me to get <strong>inspiration</strong> for my own work.<br><br>
          Besides, I hope to be able to make many great encounters with <strong>designers</strong> from various fields. I could learn a lot about them and their work. Finally, I think that by <strong>meeting</strong> these creators, it could allow me to potentially promote my work in order to better launch my future career as a designer.</p>
      </div>
    </section>
    <section id="section-2">
      <div class="section-2-banner">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/05/photo_bandroll.png">
      </div>
      <h3>How was it ?</h3>
      <div class="section-2-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/offf_2.png" alt="OFFF">
        <p>During the festival, I got the opportunity to attend a lot of different and interesting presentations and shows.<br><br>
          For example, I attended the <strong>PANIC! Studio</strong> presentation which was very inspiring. <strong>PANIC! Studio</strong> is an animation studio who works for a lot of different companies such as <strong>Netflix</strong>, <strong>Indeed</strong>, and <strong>Google</strong>.<br><br>
          I also go to participate in three different events of <strong>Adobe</strong> for <strong>Photoshop</strong>, <strong>Premiere Pro</strong> and <strong>After Effects</strong>. In these, they showed a bunch of very cool new features that are soon gonna be added to the softwares.<br><br>
          <strong>Rizon Parain</strong>, <strong>FIELD</strong> and <strong>Bendito Mockup</strong> also attended the OFFF and their conferences were very good too.<br><br>
          This festival was overally very inspiring and motivating !</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "OFFF"
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