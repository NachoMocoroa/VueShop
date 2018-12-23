<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-wrapper">
        <div class="card-wrapper-img">
          <img :src="linkItem.image">
        </div>
        <div class="card-wrapper-text">
          <h1>{{ linkItem.text }}</h1>
          <span>({{ listProducts.length }} items)</span>
        </div>
      </div>
    </div>
    <ul class="grid">
      <li v-for="(product, index) in listProducts" :key="index">
        <a @click="goToUrl(product.urlid)">
          <div>
            <div>
              <img :src="product.image" />
            </div>
            <div class="title">
              {{ product.text }}
            </div>
            <span class="price">
              {{ product.price }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        listItems: [],
        itemIndex: null,
        linkItem: null,
        listProducts: null
      }
    },
    created() {
      this.listItems = this.$store.getters.getProducts;
      this.filterItems(this.$route.params.id)
    },
    methods: {
      goToUrl(param) {
        this.$router.push(param);
      },
      filterItems(param) {
        switch (param) {
          case 'mens_outerwear':
            this.itemIndex = 0;
            break;
          case 'ladies_outerwear':
            this.itemIndex = 1;
            break;
          case 'mens_tshirts':
            this.itemIndex = 2;
            break;
          case 'ladies_tshirts':
            this.itemIndex = 3;
            break;
          default:
            console.log('ERROR: ', param);
            break;
        }
        this.linkItem = {
          "text": this.listItems[this.itemIndex].text,
          "image": this.listItems[this.itemIndex].image,
          "clicked": this.listItems[this.itemIndex].clicked
        }
        this.listProducts = this.listItems[this.itemIndex].clothes
      }
    },
    watch: {
      '$route': function (value) {
        this.filterItems(this.$route.params.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    .card {
      .card-wrapper {
        .card-wrapper-img {
          position: relative;
          height: 320px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          margin-bottom: 32px;
          &::after {
            display: block;
            content: '';
            position: absolute;
            transition-property: opacity;
            transition-duration: 0s;
            transition-delay: 90ms;
            pointer-events: none;
            opacity: 0;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            outline: var(--outline-color) auto 5px;
            outline: -moz-mac-focusring auto 5px;
            outline: -webkit-focus-ring-color auto 5px;
          }
          img {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            margin: 0 auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9999px;
            right: -9999px;
            max-width: none;
          }
        }
        .card-wrapper-text {
          h1 {
            margin: 0 0 4px 0;
            font-size: var(--font-normal);
            font-weight: var(--weight-intermediate);
          }
          span {
            color: var(--grey-light);
            font-size: var(--font-small);
          }
        }
      }
    }
    .grid {
      display: flex;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-pack: justify;
      -webkit-justify-content: justify;
      justify-content: justify;
      margin: 0 10px 32px 10px;
      padding: 0;
      list-style: none;
      li {
        -webkit-flex: 1 1;
        flex: 1 1;
        -webkit-flex-basis: 33%;
        flex-basis: 33%;
        max-width: 33%;
        cursor: pointer;
        a {
          display: block;
          text-decoration: none;
          div {
            display: flex;
            -ms-flex-direction: column;
            -webkit-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
            margin: 0 48px;
            div {
              display: block;
              position: relative;
              overflow: hidden;
              background-size: cover;
              background-position: center;
              margin: 32px 0 16px;
              &::before {
                content: '';
                display: block;
              }
              img {
                width: 100%;
                max-width: 100%;
                max-height: 100%;
                margin: 0 auto;
              }
            }
            .title {
              color: var(--grey-dark);
              font-weight: var(--weight-bold);
            }
            .price {
              color: var(--grey-light);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      .card {
        .card-wrapper {
          .card-wrapper-img {
            height: 0px;
          }
        }
      }
    }
  }
</style>
