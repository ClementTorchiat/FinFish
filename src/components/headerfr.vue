<template>
  <header>
    <svg>
      <defs>
        <filter id="gooeyness">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
          <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
        </filter>
      </defs>
    </svg>
    <router-link to="/"><img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/logo_dark.svg" alt="FinFish" class="logo_header_mobile"></router-link>
    <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
      <div class="plate" onclick="this.classList.toggle('active')">
        <svg class="burger" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path class="line line1" d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
          <path class="line line2" d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
          <path class="line line3" d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
          <path class="line line4" d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
          <path class="line line5" d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
          <path class="line line6" d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
        </svg>
        <svg class="x" version="1.1" height="100" width="100" viewBox="0 0 100 100">
          <path class="line" d="M 34,32 L 66,68" />
          <path class="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </div>
    <nav class="menu">
      <ul>
        <li><router-link to="/"><img src="https://finfish.clement-torchiat.fr/wp-content/uploads/2023/04/logo_dark.svg" alt="FinFish"></router-link></li>
        <li><router-link to="/fr">Accueil</router-link></li>
        <li><router-link to="/fr/story">À Propos</router-link></li>
        <li><router-link to="/fr/offf">OFFF</router-link></li>
        <li>
          <div class="langue">
            <router-link to="/">EN</router-link>
            <router-link to="/fr">FR</router-link>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "headingfr"
}
</script>

<style scoped lang="less">
header {
  svg {
    height: 70px;
    position: absolute;
    width: 70px;
  }
  .logo_header_mobile {
    height:30px;
    width: auto;
    margin-top: 25px;
    margin-left: 26px;
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  .nav-toggle {
    display: flex;
    flex-wrap: wrap;
    max-height: 160px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    @media screen and (min-width: 800px) {
      width: 320px;
      display: none;
    }
    .plate {
      height: 80px;
      width: 80px;
    }
  }
  .menu {
    background-color: #ADD6FF;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transform: translateX(-300vw);
    transform: translateX(-300vw);
    transition: all 0.4s;
    z-index: 99;
    text-align: center;
    @media screen and (min-width: 800px) {
      background-color: transparent;
      -webkit-transform: none;
      transform: none;
      position: initial;
    }
    ul {
      list-style: none;
      padding: 0;
      font-size: 40px;
      font-weight: bold;
      width: 100%;
      margin-top: 0;
      @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: row;
        font-size: 24px;
        margin: 32px 64px 0;
        align-items: center;
        grid-gap: 48px;
        gap: 48px;
      }
      li {
        margin-bottom: 60px;
        @media screen and (min-width: 800px) {
          margin-bottom: 0;
        }
        &:first-child {
          margin-top: 150px;
          @media screen and (min-width: 800px) {
            flex-basis: 17%;
            margin-top: 0;
            order: 4;
            margin-left: auto;
            margin-right: auto;
            a {
              &:after {
                background: none repeat scroll 0 0 transparent;
                bottom: initial;
                display: initial;
                height: initial;
                left: initial;
                position: initial;
                background: transparent;
                transition: none;
                width: initial;
              }
              &:hover {
                &:after {
                  width: initial;
                  left: initial;
                }
              }
            }
          }
        }
        &:nth-child(4) {
          margin-bottom: 200px;
          @media screen and (min-width: 800px) {
            margin-bottom: 0;
          }
        }
        &:last-child {
          margin-bottom: 0;
          text-align: center;
          @media screen and (min-width: 800px) {
            position: initial;
            left: initial;
            bottom: initial;
            order: 5;
            margin-left: auto;
          }
          .langue {
            display: block;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            font-weight: initial;
            a {
              font-size: 20px;
              font-family: Interstate, sans-serif;
              @media screen and (min-width: 800px) {
                font-size: 15px;
                &:hover {
                  font-weight: bold;
                  &:after {
                    font-weight: initial;
                  }
                }
                &:after {
                  background: none repeat scroll 0 0 transparent;
                  bottom: initial;
                  display: initial;
                  height: initial;
                  left: initial;
                  position: initial;
                  background: transparent;
                  transition: none;
                  width: initial;
                }
                &:hover {
                  &:after {
                    width: initial;
                    left: initial;
                  }
                }
              }
              &:first-child {
                &:after {
                  content: "/";
                  margin-left: 3px;
                  margin-right: 3px;
                }
              }
            }
          }
        }
        a {
          color: #000000;
          font-family: Interstate, sans-serif;
          text-decoration: none;
          white-space: nowrap;
          position: relative;
          @media screen and (min-width: 800px) {
            &:after {
              background: none repeat scroll 0 0 transparent;
              bottom: 0;
              content: "";
              display: block;
              height: 2px;
              left: 50%;
              position: absolute;
              background: #000000;
              transition: width 0.3s ease 0s, left 0.3s ease 0s;
              width: 0;
            }
            &:hover {
              &:after {
                width: 100%;
                left: 0;
              }
            }
            &:active {
              font-weight: bold;
            }
          }
          img {
            width: auto;
            height: 50px;
            @media screen and (min-width: 800px) {
              width: auto;
              height: 30px;
            }
          }
        }
      }
    }
  }
}

.burger {
  filter: url(#gooeyness);
}
.x {
  transform: scale(0);
  transition: transform 400ms;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: 50%;
  transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms;
}
.x .line {
  stroke-width: 5.5px;
}
.active .x {
  transform: scale(1);
  transition: transform 400ms 350ms;
}
/* El segundo plato */
.plate .line1 {
  stroke-dasharray: 21 185.62753295898438;
  transition-delay: 0ms;
}
.plate .line2 {
  stroke-dasharray: 21 178.6514129638672;
  transition-delay: 30ms;
}
.plate .line3 {
  stroke-dasharray: 21 197.92425537109375;
  transition-delay: 60ms;
}
.plate .line4 {
  stroke-dasharray: 21 190.6597137451172;
  transition-delay: 90ms;
}
.plate .line5 {
  stroke-dasharray: 21 208.52874755859375;
  transition-delay: 120ms;
}
.plate .line6 {
  stroke-dasharray: 21 186.59703063964844;
  transition-delay: 150ms;
}
.active.plate .line1 {
  stroke-dasharray: 5 185.62753295898438;
  stroke-dashoffset: -141px;
}
.active.plate .line2 {
  stroke-dasharray: 5 178.6514129638672;
  stroke-dashoffset: -137px;
}
.active.plate .line3 {
  stroke-dasharray: 5 197.92425537109375;
  stroke-dashoffset: -176px;
}
.active.plate .line4 {
  stroke-dasharray: 5 190.6597137451172;
  stroke-dashoffset: -159px;
}
.active.plate .line5 {
  stroke-dasharray: 5 208.52874755859375;
  stroke-dashoffset: -139px;
}
.active.plate .line6 {
  stroke-dasharray: 5 186.59703063964844;
  stroke-dashoffset: -176px;
}
.active.plate .x {
  transition: transform 400ms 250ms;
}
.menu-open .menu {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.menu-open,
.menu-open body {
  overflow: hidden;
}
.menu-open .menu li {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}
</style>
