<template>
    <div class="address">
        <van-nav-bar
        title="地址列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-list
        add-button-text="确定"
        v-model="chosenAddressId"
        :list=list
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
        chosenAddressId:`2229`,
        obj:{},
        list:[]
    }
    },
    computed:{
        ...mapState('app',['user']),
        ...mapState('address',['address'])
    },
    created(){
        this.findByCustomerId(this.user.id)
        this.foreachHandler()
    },
    methods:{
        ...mapActions('address',["findByCustomerId"]),
        onClickLeft(){
            this.$router.push('/index/user')
        },
        //配置地址信息
        foreachHandler(){
            this.address.forEach((itme)=>{
            let id=itme.id
            let name=this.user.name
            let tel=itme.telephone
            let address=itme.province+itme.city+itme.area+itme.address
            this.obj={id,name,tel,address}
            this.list=[this.obj]
        })
        },
        onEdit(){
            this.$router.push("/editAddress")
        }
    }
}
</script>