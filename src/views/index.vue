<template>
    <div class="content">
        <!--接受管理页面-->
        <router-view/>
        <!--导航-->
        <van-tabbar v-model="active" route>
            <van-tabbar-item replace to="/index/home" name="index" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/index/order" name="order" icon="search">订单</van-tabbar-item>
            <van-tabbar-item replace to="/index/user" name="my" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import {getToken} from '.././utils/auth'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            active:"index"
        }
    },
    created(){
       let token=getToken()
       if(token){
           this.getuserInfo()
       }else{
           this.router.push('/')
       }
    },
    methods:{
        ...mapActions('app',["getuserInfo"])
    }
}
</script>