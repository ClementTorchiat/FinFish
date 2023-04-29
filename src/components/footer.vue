<template>
  <footer>
    <div id="logofooter-container">
      <img id="logofooter" src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/logo_light.svg" alt="FinFish">
    </div>
    <div id="liensfooter">
      <div>
        <a href="https://clement-torchiat.fr/"><img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/logo_ct.svg" alt="clement-torchiat.fr"></a>
      </div>
      <div>
        <a href="https://mmi-montbeliard.nathanvanbignootvincler.fr/"><img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/logo_mmi.svg" alt="mmi-montbeliard.fr"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footing"
}
</script>

<style scoped lang="less">
footer {
  overflow-x: hidden;
  height: 122px;
  background-image: url("https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/footer.png");
  background-size: cover;
  display: flex;
  padding: 5px 25px;
  align-items: center;
  #logofooter-container {
    flex-basis: 50%;
    padding-top: 25px;
    #logofooter {
      width: 162px;
      height: auto;
    }
  }
  #liensfooter {
    display: flex;
    align-items: center;
    margin-left: auto;
    grid-gap: 30px;
    gap: 30px;
    padding-top: 25px;
    a {
      img {
        width: auto;
        height: 36px;
      }
    }
  }
}
</style>