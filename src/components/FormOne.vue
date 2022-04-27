<template>
  <section class="shipment-address" >
      <h3>寄送地址</h3>
      <div class="form1">
        <div class="title">
          <label for="title">稱謂</label>
          <select name="title" id="title" v-model="buyer.title">
            <option value="sir">先生</option>
            <option value="miss">小姐</option>
          </select>
        </div>
        <div class="name">
          <label for="name">姓名</label>
          <input type="text" 
          v-model="buyer.name"
          placeholder="請輸入姓名" 
          id="name"
          name="name"
          >
        </div>
        <div class="phone">
          <label for="phone">電話</label>
          <input type="text" 
          v-model="buyer.phone"
          placeholder="請輸入行動電話" 
          id="phone"
          name="phone"
          >
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input type="text" 
          v-model="buyer.email"
          placeholder="請輸入電子郵件" 
          id="email"
          name="email"
          >
        </div>
        <div class="county">
          <label for="county">縣市</label>
          <select name="county" 
          v-model="buyer.county"
          id="county">
            <option value="default" selected disabled>請選擇縣市</option>
            <option value="Taipei">台北市</option>
            <option value="New Taipei">新北市</option>
            <option value="Hsinchu">新竹市</option>
          </select>
        </div>
        <div class="address">
          <label for="address">地址</label>
          <input type="text" 
          v-model="buyer.address"
          placeholder="請輸入地址" 
          id="address"
          name="address"
          >
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'formOne',
  data () {
    return {
      buyer: {
        id: -1,
        title: 'miss',
        name: '',
        phone: '',
        email: '',
        county: 'default',
        address: '',
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/formStyle';
</style>