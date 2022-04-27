<template>
   <section class="shipment-ways" >
      <h3>運送方式</h3>
      <div class="form2">
        <div class="shipment-way">
          <input type="radio"
           v-model="shipment"
           name="shipment-way" 
           value="shipment-way1"
           id="shipment-way1">
          <div class="description">
            <label for="shipment-way1">標準運送</label>
            <label for="shipment-way1">約3-7個工作天</label>
          </div>
          <label for="shipment-way1">免費</label>
        </div>
        <div class="shipment-way">
          <input type="radio" 
          v-model="shipment"
          name="shipment-way" 
          value="shipment-way2"
          id="shipment-way2">
          <div class="description">
            <label for="shipment-way2">DHL貨運</label>
            <label for="shipment-way2">48小時內送達</label>
          </div>
          <label for="shipment-way2">$500</label>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'formTwo',
  data () {
    return {
      shipment: 'shipment-way1'
    }
  },
  watch: {
    shipment: {
      handler: function () {
        this.$emit('shipment-change', this.shipment)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/formStyle';
</style>