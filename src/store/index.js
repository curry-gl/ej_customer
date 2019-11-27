import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import app from './modules/app'
import order from './modules/order'
import product from './modules/product'
import address from './modules/address'
import shopcar from './modules/shopcar'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      app,
      order,
      product,
      category,
      address,
      shopcar
    }
})
