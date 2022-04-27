<template>
  <div class="cart">
    <p class="cart-title">
      購物籃
    </p>
    <div class="products">
      <!-- Render Product Data Here -->
      <div class="product" 
       v-for="product in products"
       :key="product.id"
      >
        <img :src="product.productInfo.image" alt="product image">
        <div class="product-info">
          <p class="product-info-name">
            {{product.productInfo.name}}
          </p>
          <div class="product-info-amount">
            <div class="decrease">
              <img src="~@/assets/images/minus.png" 
              alt="decrease" 
              class="decrease"
              v-show="product.amount" 
              @click.stop.prevent="minusAmount(product.id)"
              >
            </div>
            <p class="amount">
              {{product.amount}}
            </p>
            <div class="increase">
              <img src="~@/assets/images/plus.png" 
              alt="increase" 
              class="increase"
              @click.stop.prevent="addAmount(product.id)"
              >
            </div>
          </div>
          <div class="product-info-price">
            ${{product.productInfo.price | numberFormat}}
          </div>
        </div>
      </div>
    </div>
    <!-- Fee and Total -->
    <div class="fee">
      <p>運費</p>
      <p class="fee-price">
        {{shipmentFee? '$500' : '免費'}}
      </p>
    </div>
    <div class="total">
      <p>小計</p>
      <p class="total-price">
        ${{totalPrice | numberFormat}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    initialProducts: {
      type: Array,
      required: true,
    },
    shipment: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      products: this.initialProducts,
      totalPrice: 0,
      shipmentFee: 0,
      productTotal: 0,
    }
  },
  created () {
    // calculate total based on data 
    this.calculateProductTotal()
    this.calculateTotal()
  },
  methods: {
    calculateProductTotal () {
      this.productTotal = 0

      for (let i = 0; i < this.products.length; i++) {
        this.productTotal += this.products[i].total
      }

    },
    calculateTotal () {
      this.totalPrice = this.productTotal + this.shipmentFee
    },
    addAmount (Id) {
      this.products = this.products.map(product => {
        if ( product.id === Id) {
          return {
            ...product,
            amount: product.amount + 1,
            total: product.total + product.productInfo.price
          }
        } else {
          return product
        }
      })
    },
    minusAmount (Id) {
      this.products = this.products.map(product => {
        if(product.id === Id) {
          return {
            ...product,
            amount: product.amount - 1,
            total: product.total - product.productInfo.price
          }
        } else {
          return product
        }
      })
    },
  },
  watch: {
    products: {
      handler: function () {
        this.calculateProductTotal()
        this.calculateTotal()
      }
    },
    shipment: {
      handler: function () {
        if (this.shipment === 'shipment-way1') {
          this.shipmentFee = 0
        } else {
          this.shipmentFee = 500
        }
        this.calculateTotal()
      }
    }
  },
  filters: {
    numberFormat (number) {
      return number.toLocaleString('en-US')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  @include size(100%, auto);
  margin-top: 32px;
  padding: 0 16px;
  @include border-style($cart-border, 8px, 1px);
  background-color: $cart-bg;
  box-sizing: border-box;
  &-title {
    @include hide(display);
  }
  .product {
    @include flex($justify-content: space-between, $align-items: center);
    margin: 34px 0;
    img {
      @include size(100px, 100px);
    }
    .product-info {
      @include flex(column, center, flex-end);
      &-amount {
        width: 116px;
        @include font-style(14px, 500, $cart-heavy-color);
        @include flex(row, space-between, center);
        div {
          position: relative;
          @include size(26px, 26px);
          background-color: $amount-circle;
          border-radius: 50%;
          @include flex(row, center, center);
          cursor: pointer;
          img {
            @include image-size(50%, 50%);
          }
        }
      }
      &-price {
        @include font-style(16px, 700, $cart-heavy-color);
      }
    }
  }
  .fee, .total {
    @include size(100%, 52px);
    @include flex(row, space-between, center);
    border-top: 1px solid $cart-border;
    p ~ p {
      @include font-style(14px, 700, $cart-heavy-color);
    }
  }
}

@media screen and (min-width: 375px) {
  .cart {
    margin-top: 0;
    p {
      display: block;
      @include font-style(18px, 700);
    }
    .product {
      position: relative;
      justify-content: flex-start;
      .product-info {
        align-items: flex-start;
        margin-left: 21px;
        &-price {
          @include position-absolute( top, right, 18px, 0);
        }
      }
    }
  }
}
</style>