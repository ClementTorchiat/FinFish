<template>
  <main>
    <h1>Creative Process</h1>
    <section id="section-1">
      <h3>Step 1 : Benchmark</h3>
      <div class="section-1-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/benchmark.png" alt="Benchmark">
        <p>The first step of this project was to benchmark the different aspects of NFTs. First of all, I took a look at the different NFT marketplaces (OpenSea, Rarible…). I lingered on OpenSea and went to see the current trends on the platform. Trending number 1 at the time was a collection of NFTs by the name of GardenLockdown which consisted of different personified and pixel art plants.<br><br>
          Then, I learned about the different applications of NFTs. For example, I discovered Guerlain's Cryptobees, whose income will be used to rewild the Vallée de la Millière nature reserve. I also discovered the Blankos Block Party video game, developed by Epic Games, in which the character you play is a unique NFT.<br><br>
          Eventually, I settled on the two different types of NFTs, namely “unique” NFTs and “random” NFTs. For “unique” NFTs, we have for example the SuperRare marketplace in which artistic NFTs that are not alike are sold. For “random” NFTs, there is the collection of “Bored Ape” NFTs by Yacht Club. These NFTs are characterized by the fact that they all start from the same base on which we randomly add accessories, colors and visual elements. It is the accumulation of these elements that will make the NFT unique and will also determine its rarity. It is moreover a collection of this type that I have chosen to make.</p>
      </div>
    </section>
    <section id="section-2">
      <h3>Step 2 : Moodboard</h3>
      <div class="section-2-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/moodboard.png" alt="Moodboard">
        <p>For this second step, I had to decide which style of design suited me as well as a color theme and a vague idea of the rendering of the collection thanks to an internet search. So I went for a very colorful look based on a flat design aesthetic. So I also, at that time, decided that my collection was going to be a fish on which the different elements like the fins can be modified in order to obtain a wide variety of different and unique NFTs. I also added to the moodboard various aquatic decorations that could potentially accompany the fish.</p>
      </div>
    </section>
    <section id="section-3">
      <h3>Step 3 : Creative Strategy</h3>
      <div class="section-3-flex">
        <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/creative_strategy.png" alt="Creative Strategy">
        <p>The goal is to play with the user to bring rare elements and combine them to create unique works, all in a flat design style, colorful and cartoony/childish. Items that can be changed are:<br>
          • The background :<br>
          &nbsp;&nbsp;&nbsp;• The color/tint of the water<br>
          &nbsp;&nbsp;&nbsp;• The shape of the seabed<br>
          &nbsp;&nbsp;&nbsp;• Vegetation in the seabed<br>
          &nbsp;&nbsp;&nbsp;• Decorations on the seabed (ruins, other marine animals, wrecks, etc.)<br>
          &nbsp;&nbsp;&nbsp;• The intensity of the lighting coming from the top of the work<br>
          • The fish :<br>
          &nbsp;&nbsp;&nbsp;• The shape/species of the fish<br>
          &nbsp;&nbsp;&nbsp;• His/her color(s)<br>
          &nbsp;&nbsp;&nbsp;• The pattern on the fish<br>
          &nbsp;&nbsp;&nbsp;• The shape and color of its fins<br>
          &nbsp;&nbsp;&nbsp;• Certain specificities of some fish can also be modified (for example the color and shape of the lamps of the lantern fish)</p>
      </div>
    </section>
    <section id="section-4">
      <div class="section-4-flex">
        <div class="section-4-1">
          <h3>Step 4 : Sketch</h3>
          <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/sketch.png" alt="Sketch">
          <p>Through this stage, I was able to begin to materialize my ideas through the creation of sketches representing different variants of the NFT. I made 4 of them, each with a different body, visual elements and background. Being instantly rather satisfied with the result, I immediately started the next part.</p>
        </div>
        <div class="section-4-2">
          <h3>Step 5 : Creation</h3>
          <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/creation.png" alt="Creation">
          <p>For this 5th step, I moved on to the creation phase. First of all, I started from the sketches previously made in order to start with a good base. So I created a body on which I then added different elements including, for example, upper and lower fins and a tail. These elements would therefore allow me to obtain a basis for the general size of these for the rest of the process. And so, category after category, I created a large amount of various elements and derivatives of these. Finally, I created a series of patterns used to dress the body of the fish and I also chose a range of colors for it.<br><br>
            Then I embarked on creating different elements to put together to form a variety of backgrounds for the collection, starting by creating a luminosity effect coming from the surface of the work. Then, I designed reliefs, vegetation and decorations to dress the seabed, while choosing different color combinations for them.</p>
        </div>
      </div>
      <div class="section-4-3">
        <h3>Step 6 : Result</h3>
        <div class="section-4-3-flex">
          <div class="section-4-3-1">
            <img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/05/nft-1.png" id="nft-generator" alt="A FinFish NFT">
            <button class="button" id="nft-generator-button" onclick="generate_nft();">Generate</button>
          </div>
          <p>Once all the elements were created, I decided to combine them and test different possibilities of fish and bottoms. So, through the combination of all the elements that can be used and combined, I am able to make approximately 141,778,000,000 different NFTs. To cut that figure out, that's 62,512,128 different fish and approximately 2,268 different backgrounds.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Story"
}
</script>

<style scoped lang="less">
@import "/src/assets/css/main.less";
main {
  text-align: center;
  img {
    width: 80vw;
    border: 5px solid black;
    border-radius: 20px;
    @media screen and (min-width: 800px) {
      width: 40vw;
      height: fit-content;
    }
  }
  h1 {
    margin: 68px 32px 0;
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
    }
    .section-1-flex {
      @media screen and (min-width: 800px) {
        margin-top: 25px;
      }
      img {
        margin: 30px 0 20px;
        @media screen and (min-width: 800px) {
          margin-top: 0;
          float: left;
          margin-right: 5%;
          margin-bottom: 2%;
        }
      }
      p {
        text-align: left;
      }
    }
  }
  #section-2 {
    background-color: #BACAFF;
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
    h3 {
      text-align: left;
      margin: 0 32px 30px;
      @media screen and (min-width: 800px) {
        margin: 0 5% 35px;
      }
    }
    .section-2-flex {
      @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        padding-bottom: 100px;
        margin-left: 5%;
        margin-right: 5%;
      }
      p {
        text-align: left;
        margin: 20px 32px 0;
        padding-bottom: 60px;
        @media screen and (min-width: 800px) {
          margin-left: 0;
          margin-right: 5%;
          margin-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
  #section-3 {
    background-color: #A0B6FF;
    &:before{
      content: " ";
      display: block;
      height: 36px;
      width: 100vw;
      background-image: url("https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/relief_2.png");
      background-size: cover;
      position: relative;
      top: -36px;
    }
    h3 {
      text-align: left;
      margin: 0 32px 30px;
      @media screen and (min-width: 800px) {
        margin: 0 5% 35px;
      }
    }
    .section-3-flex {
      @media screen and (min-width: 800px) {
        display: flex;
        padding-bottom: 100px;
        margin-left: 5%;
        margin-right: 5%;
      }
      img {
        @media screen and (min-width: 800px) {
          width: 20vw;
        }
      }
      p {
        text-align: left;
        margin: 20px 32px 0;
        padding-bottom: 60px;
        @media screen and (min-width: 800px) {
          margin-left: 5%;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
  #section-4 {
    background-color: #87A9FF;
    &:before{
      content: " ";
      display: block;
      height: 36px;
      width: 100vw;
      background-image: url("https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/relief_3.png");
      background-size: cover;
      position: relative;
      top: -36px;
    }
    .section-4-flex {
      @media screen and (min-width: 800px) {
        display: flex;
        margin-left: 5%;
        margin-right: 5%;
      }
      .section-4-1 {
        @media screen and (min-width: 800px) {
          margin-right: 2.5%;
        }
        h3 {
          text-align: left;
          margin: 0 32px 30px;
          @media screen and (min-width: 800px) {
            margin: 0 0 35px;
          }
        }
        img {

        }
        p {
          text-align: left;
          margin: 20px 32px 0;
          padding-bottom: 60px;
          @media screen and (min-width: 800px) {
            margin: 30px 0 0;
            padding-bottom: 0;
          }
        }
      }
      .section-4-2 {
        @media screen and (min-width: 800px) {
          margin-left: 2.5%;
        }
        h3 {
          text-align: left;
          margin: 0 32px 30px;
          @media screen and (min-width: 800px) {
            margin: 0 0 35px;
          }
        }
        img {
          @media screen and (min-width: 800px) {
            width: 100%;
          }
        }
        p {
          text-align: left;
          margin: 20px 32px 0;
          padding-bottom: 60px;
          @media screen and (min-width: 800px) {
            margin: 30px 0 0;
            padding-bottom: 0;
          }
        }
      }
    }
    .section-4-3 {
      @media screen and (min-width: 800px) {
        margin: 40px 5% 0;
        padding-bottom: 50px;
      }
      h3 {
        text-align: left;
        margin: 0 32px 30px;
        @media screen and (min-width: 800px) {
          margin: 0 0 35px;
        }
      }
      .section-4-3-flex {
        @media screen and (min-width: 800px) {
          display: flex;
        }
        .section-4-3-1 {
          button {
            margin-top: 30px;
          }
        }
        p {
          text-align: left;
          margin: 40px 32px 0;
          padding-bottom: 60px;
          @media screen and (min-width: 800px) {
            margin: 100px 0 0 5%;
            padding-bottom: 0;
          }
        }
      }
    }
  }
}

</style>