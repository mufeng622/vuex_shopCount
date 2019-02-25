<template>
  <div class="hello">
    <button type="button" @click="addCart(goodsLength)">add</button>
    <ul class="goodslist">
      <li v-for="good in goods" :key="good.id" :id="good.id">
        <div class="img"><img :src="good.img" alt=""></div>
        <div class="content">
          <h3>{{good.name}}</h3>
          <p>{{good.hint}}</p>
          <span>￥{{good.price}}</span>
          <div>
            <button type="button" @click="reduceCount(good.id)">-</button>
            <span>{{good.num}}</span>
            <button type="button" @click="addCount(good.id)">+</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="bottom">
      <span>总价为：{{totalPrice}}</span>
      <span>商品总数：{{totalCount}}</span>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'goods', 'totalPrice', 'totalCount'
    ]),
    ...mapGetters([
      'goodsLength'
    ])
  },
  methods: {
    ...mapActions([
      'addCount',
      'reduceCount'
    ]),
    ...mapMutations([
      'ADD_CART'
    ]),
    addCart (len) {
      this.$store.commit('ADD_CART', len)
    }
  }
}
</script>

<style scoped>
.goodslist li{
  overflow: hidden;
  width: 400px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
.img{
  float: left;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-right: 10px;
}
.content{
  width: 220px;
  float: left;
  overflow: hidden;
}
.bottom{
  width: 400px;
}
.bottom span{
  margin: 0 10px;
}
.delete{
  float: left;
}
</style>
