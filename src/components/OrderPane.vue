<template>
  <div class="order_pane">
    <ul>
      <li class="order" v-for="o in data" :key="o.id">
        <van-row class="header"> 
          <van-col span="21">订单编号：{{o.id}}</van-col>
          <van-col span="3" class="status">{{o.status}}</van-col>
        </van-row>
        <van-row>
          <van-col :span="10">
            <img width="60%" src="../assets/service.png" alt="">
          </van-col>
          <van-col :span="14">
            <p class="title">下单时间：{{o.orderTime | datefmt}}</p>
            <div v-if='o.address'>服务地址：{{o.address.province}} {{o.address.city}} {{o.address.area}} {{o.address.address}}</div>
            <div v-if='o.address'>联系方式：{{o.address.telephone}}</div>
            <p class="price">总额：￥{{o.total}}</p>
            <div class="btns">
              <div v-if="o.status ==='待确认'">
                <van-button size="mini" plain type="primary" @click="confirmOrder(o.id)">确认完成</van-button>
              </div>
            </div>
          </van-col>
        </van-row>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  props:["data"],
  created(){

  },
  computed:{
    ...mapState("address",["address"]),
    ...mapState("app",["user"])
  },
  methods:{
    ...mapActions("address",['findByCustomerId']),
    confirmOrder(orderId){
      this.$emit("confirm",orderId)
    },
  }
}
</script>
<style scoped>

.order {
  font-size: 12px;
  padding: .5em;
  margin-bottom: 1em;
  border-bottom: 1px solid #ededed;
  /* box-shadow: 0 1px 5px rgba(0,0,0,0.3) */
  /* height: 8em; */
  overflow-y: hidden;
}
.order .title {
  line-height: 2em;
}
.order .price {
  line-height: 2em;
}
.order .status {
  color: #ff700d;
  line-height: 2em;
}
.order .header{
  font-size: 14px;
}
</style>