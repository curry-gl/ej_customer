import {get,post,post_array_dots} from "../http"

export default {
  namespaced:true,
  state:{
    orders:[],
    message:""
  },
  getters:{
    ordersFilter(state){
      return (status)=>{
        return state.orders.filter(item=>item.status === status)
      }
    }
  },
  mutations:{
    resetOrders(state,orders){
      state.orders = orders;
    },
    resetMessage(state,message){
      state.message = message;
    }
  },
  actions:{
  
    async saveOrder({commit,rootState}){
      let data = {
        customerId:rootState.app.user.id,
        addressId:rootState.address.address.id,
        orderLines:Array.from(rootState.shopcar.orderLines.values())
      }
      // 2. 调用后台接口完成保存
      let response = await post_array_dots('/order/save',data)
      // 3. 清空购物车（order -> shopcar）
      commit('shopcar/clearShopCar',null,{root:true})
      return response;
    },
    async findCustomerOrders({commit,rootState}){
      let result = await get("/order/query",{
        customerId:rootState.app.user.id
      })
      commit("resetOrders",result.data);
    },
    async findAllOrders({commit}){
      let result =await get("/order/findAll")
           commit("resetOrders",result.data);
    },
    async confirmOrder({dispatch},orderId){
      let result = await get("/order/confirmOrder",{orderId})
      dispatch("findCustomerOrders");
      return result;
    }
    
  }
}