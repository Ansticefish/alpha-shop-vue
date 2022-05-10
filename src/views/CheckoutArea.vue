<template>
  <form @submit.stop.prevent="handleSubmit">

    <h1 class="header">結帳</h1>

    <Stepper class="stepper" 
      :currentStep="currentStep" 
    />

    <!-- Render Forms -->
    <FormOne class="form" 
      v-show="currentStep === 1"
    />
    <FormTwo  class="form" 
      v-show="currentStep === 2"
      @shipment-change="shipmentChange"
    />
    <FormThree class="form" 
      v-show="currentStep === 3"
    />


    <Buttons class="buttons" 
      :initial-current-step="currentStep"
      @step-change="stepChange"
    />
    
    <Cart class="cart" 
      :initial-products="products" 
      :shipment="shipment"
    />
  </form>

</template>
 

<script>
import Stepper from '../components/Stepper.vue'
import Buttons from '../components/Buttons.vue'
import Cart from '../components/Cart.vue'
import { v4 as uuidv4 } from 'uuid'
import FormOne from '../components/FormOne.vue'
import FormTwo from '../components/FormTwo.vue'
import FormThree from '../components/FormThree.vue'

const dummyProducts = [
  {
    id: 1,
    amount: 1,
    total: 3999,
    productInfo: {
      id: uuidv4(),
      name: '破壞補丁修身牛仔褲',
      price: 3999,
      image: require('../assets/images/product_one.png'),
      inventory: 10,
    }
  },
  {
    id: 2,
    amount: 1,
    total: 1299,
    productInfo: {
      id: uuidv4(),
      name: '刷色直筒牛仔褲',
      price: 1299,
      image: require('../assets/images/product_two.png'),
      inventory: 10,
    } 
  }
]
 

export default {
  name: 'CheckoutArea',
  components: {
    Stepper,
    Buttons,
    Cart,
    FormOne,
    FormTwo,
    FormThree,
  },
  data () {
    return {
      products: [],
      currentStep: 1, 
      shipment: 'shipment-way1'
    }
  },
  created () {
    this.fetchProducts()
    //refresh current page based on url 
    if (this.$route.params.id) {
      this.currentStep = Number(this.$route.params.id)
    }  

    console.log('created')
    
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to, from)
    const id = Number(to.params.id)
    this.currentStep = id
    console.log('beforeUpdate',this.currentStep)
    next()
  },
  methods: {
    fetchProducts () {
      this.products = dummyProducts
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData (form)
      for (let [name, value] of formData.entries()) {
        console.log(name, ':', value)
      }
    },
    stepChange (changedStep) {
      this.currentStep = changedStep
    },
    shipmentChange(changedShipment) {
      this.shipment = changedShipment
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 375px) {
  form {
    padding: 30px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "header  header"
      "stepper cart"
      "form cart"
      "buttons cart";    
    gap: 15px;
  }

  $elements: (stepper, form, buttons, cart);
  @each $element in $elements {
    .#{$element} {
      grid-area: $element;
    }
  };

}

</style>