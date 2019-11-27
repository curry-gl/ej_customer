<template>
<div class="placeOrders">
    <!--左侧导航-->
    <van-nav-bar
    title="商品分类"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
   <van-row>
       <van-col span='6'>
            <div class="left">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item @click="categoryId = c.id" :title="c.name" v-for="c in categories" :key="c.id" />
                </van-sidebar>
            </div>
       </van-col>
        <!--左侧导航-->
        <!-- 右侧内容 -->
       <van-col span='18'>
            <div class="product_content">
             <div class="product" v-for="p in getProductsByCategoryId(categoryId)" :key='p.id'>
             <van-row>
                 <van-col span="6">
                     <img v-if='p.photo' :src="p.photo" alt="" width="100%"  >
                     <img v-else src="../../assets/3.jpg" alt="" width="100%">
                 </van-col>
                 <van-col span="12">
                     <p class="productname">{{p.name}}</p>
                     <p class="desc">{{p.description}}</p>
                     <p class="price"><strong>￥:{{p.price}}</strong></p>
                 </van-col>
                 <van-col class="step">
                     <van-stepper v-model="p.number" :min="0" @change="numberChangeHandler(p)"></van-stepper>
                 </van-col>
             </van-row>
            </div>
        </div>
    </van-col>
        <!-- 右侧内容 -->
   </van-row>
   <van-row class="spcor">
       <van-col :span="10">总额:<strong>￥:{{total}}</strong></van-col>
       <van-col :offset="7" :span="7" @click="toorderdel">立即下单</van-col>
   </van-row>
</div>
</template>
<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return{
          activeKey:0,
          value:0,
          categoryId:''
        }
    },
    created(){
        //查询所有栏目
        this.findOneLevelCategory();
        //查询所用产品
        this.findAllProducts();
        this.categoryId = this.$route.query.id;
        this.activeKey = this.$route.query.activeKey;
        
          
    },
    computed:{
        ...mapState('category',["categories"]),
        ...mapState('product',["products"]),
        ...mapGetters('product',['getProductsByCategoryId']),
        ...mapGetters('shopcar',['total'])
    },
    methods:{
        ...mapActions('product',["findProductsByCategoryId",'findAllProducts']),
        ...mapActions('category',['findOneLevelCategory']),
        ...mapMutations('shopcar',['addShopCar']),
        onClickLeft(){
            this.$router.push('/index/home')
        },
        //添加购物车
        toorderdel(){
            this.$router.push('/orderdetial')
        },
        //获取订单信息
       numberChangeHandler(val){
            let orderLine = {
                productId:val.id,
                productName:val.name,
                price:val.price,
                number:val.number
            }
            this.addShopCar(orderLine);
            
            }
        }, 
}
</script>
<style scoped>
.product{
    background-color: #f8f9fa;
   margin-bottom: 5px;
}
.product van-col{
    margin-top: 10px;
}
.product .step{
   margin-left:180px;
   margin-bottom: 5px;
}
.productname{
    font-weight: bolder;
}
.desc{
    font-size: 10px;
}
p{
    margin: 0;
    margin-left: 5px;
}
img{
    width:100%;
    height: 100%;
    border-radius: 5%;
}
strong{
  color: brown;
}
.spcor{
  position: fixed;
  bottom: 0;
  line-height: 4em;
  width: 100%;
  
  background-color: rgba(0, 0, 0, 0.1);
  color: #ffffff;
  text-align: center;  
}
</style>
