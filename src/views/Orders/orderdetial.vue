<template>
    <div id="orderdetial">
      <!-- 地址 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="location-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务地址</div>
          <div>
            {{address}}
          </div>
        </van-col>
      </van-row>
      <!-- 订单项 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="balance-list-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">订单详情</div>
          <div>

            <van-row v-for="line of orderLines.values()" :key="line.productId">
              <van-col :span="8">{{line.productName}}</van-col>
              <van-col :span="4">￥{{line.price}}</van-col>
              <van-col :span="4">x{{line.number}}</van-col>
              <van-col :span="8">￥{{line.number*line.price}}</van-col>
            </van-row>

            <van-row style="border-top:1px dotted #ededed">
              <van-col :span="16"></van-col>
              <van-col :span="8">￥{{total}}</van-col>
            </van-row>

          </div>
        </van-col>
      </van-row>
      <!-- 服务时间 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="clock-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务时间</div>
          <!-- <div @click="()=>{this.show = true}">
            {{currentDate}}
          </div> -->
        </van-col>
      </van-row>
      <!-- 支付方式 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="gold-coin-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">支付方式</div>
          <div>第三方平台（支付宝）</div>
        </van-col>
      </van-row>
      <!-- <van-popup v-model="show" position="bottom">
        <van-datetime-picker v-model="currentDate" type="datetime"/>
      </van-popup> -->

      <!-- 按钮 -->
      <div style="position:fixed;bottom:0;width:100%" >
        <van-button  type="info" size="large" @click="confirmOrderHandler">确认订单</van-button>
      </div>
   
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
      created(){
      // 查询地址
     this. findAddress();
  },
  computed:{
    ...mapState('shopcar',['orderLines']),
    ...mapGetters('shopcar',['total']),
    ...mapState('address',['addresses'])
  },
  methods:{
    ...mapActions('order',['saveOrder']),
    ...mapActions('address',['findByCustomerId']),
  
    // 确认订单，保存订单
    confirmOrderHandler(){
      this.saveOrder()
      .then((response)=>{
        this.$notify({ 
          type: 'success', 
          message: response.statusText 
        });
        this.$router.push({path:'/index/order'})
      })
    },
      findAddress({rootState}){
        let data = {
           customerId:rootState.app.user.id,
        };
        this.findByCustomerId(data);
    }
  }
}
</script>
<style scoped>
.line  .line-left {
  padding: 1em 0;
  text-align: center;
  font-size: 24px;
}
.line  .line-right {
  padding: 1em 0;
  border-bottom: 1px solid #ccc;
}
.line  .line-right > .label {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  line-height: 2em;
}
</style> 