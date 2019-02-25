import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  goods: [
    {
      id: '0',
      name: 'vivo-X20Plus屏幕指纹版',
      hint: '逆光也清晰，照亮你的美',
      price: 3000.00,
      num: 0,
      img: '//img11.360buyimg.com/n7/jfs/t1/26819/35/6965/152283/5c6617f5E8c613e4a/e952637dca4a0b99.jpg'
    },
    {
      id: '1',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 5000.00,
      num: 0,
      img: '//img11.360buyimg.com/n7/jfs/t1/26819/35/6965/152283/5c6617f5E8c613e4a/e952637dca4a0b99.jpg'
    },
    {
      id: '2',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 1000.00,
      num: 0,
      img: '//img11.360buyimg.com/n7/jfs/t1/26819/35/6965/152283/5c6617f5E8c613e4a/e952637dca4a0b99.jpg'
    }
  ],
  totalCount: 0,
  totalPrice: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
