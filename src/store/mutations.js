const mutations = {
  ADD_COUNT (state, id) {
    state.goods[id].num++
    state.totalCount++
    state.totalPrice += state.goods[id].price
  },
  REDUCE_COUNT (state, id) {
    if (state.goods[id].num > 0) {
      state.goods[id].num--
      state.totalCount--
      state.totalPrice -= state.goods[id].price
    }
  },
  ADD_CART (state, len) {
    const newGoods = {
      id: len + 1,
      name: 'vivo-X20Plus屏幕指纹版111',
      hint: '逆光也清晰，照亮你的美111',
      price: 3000.00,
      num: 0,
      img: '//img11.360buyimg.com/n7/jfs/t1/26819/35/6965/152283/5c6617f5E8c613e4a/e952637dca4a0b99.jpg'
    }
    state.goods.push(newGoods)
  }
}

export default mutations
