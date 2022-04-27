<template>
  <section class="shipment-pay" >
      <h3>付款資訊</h3>
      <div class="form3">
        <div class="card-name">
          <label for="card-name">
            持卡人姓名
          </label>
          <input type="text" id="card-name"
           placeholder="John Doe" name="card-name"
           v-model="buyerCard.name"
          >
        </div>
        <div class="card-number">
          <label for="card-number">
            卡號
          </label>
          <input type="text" id="card-number" 
          name="card-number" placeholder="1111 2222 3333 4444"
          v-model="buyerCard.number"
          >
        </div>
        <div class="card-date">
          <label for="card-date">
            有效期限
          </label>
          <input type="text" id="card-date" 
          name="card-date" placeholder="MM/YY"
          v-model="buyerCard.date"
          >
        </div>
        <div class="card-code">
          <label for="card-code">
            CVC/CCV
          </label>
          <input type="text" id="card-code" 
           name="card-code" placeholder="123"
           v-model="buyerCard.code"
          >
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'formThree',
  data () {
    return {
      buyerCard: {
        name: '',
        number: '',
        date: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/formStyle';
</style>