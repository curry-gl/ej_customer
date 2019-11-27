<template>
    <div class="user">
        <div class="title">
            我的
        </div>
        <div class="photo">
            <van-image
            radius="60"
            width="120"
            height="120"
            :src=user.avatar
            />
        </div>
        <div class="name">
            {{user.name}}
        </div>
        <div class="address">
            <div class="line" @click="addressHanler">常用地址</div>
        </div>  
        <div class="logout">
            <div class="line" @click="logoutHandler">退出</div>
        </div>      
    </div>
</template>
<script>
import{mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState("app",["user"]),
        ...mapState('address',["address"])
    },
    created(){
        this.findByCustomerId(this.user.id)
    },
    methods:{
        ...mapActions('address',['findByCustomerId']),
        ...mapActions('app',['logout']),
        logoutHandler(){
            //退出
            this.$router.push('/')
        },
        addressHanler(){
            //跳转常用地址页面
            this.$router.push('/Address')
        }
    }
}
</script>
<style scoped>
.title{
    margin-top:28px;
    text-align: center; 
}
.photo{
    margin-top: 18px;
    text-align: center;
}
.name{
    margin-top: 10px;
    text-align: center;
}
.address{
    width: 100%;
    height: 38px;
    line-height: 38px;
    margin-top: 28px;
    border-bottom: 1px solid #efefee;
}
.address>.line{
    width: 80%;
    margin: 0 auto;
}
.logout{
    width: 100%;
    height: 38px;
    line-height: 38px;
    margin-top: 18px;
    border-bottom: 1px solid #efefee;
}
.logout>.line{
    width: 80%;
    margin: 0 auto;
}
</style>