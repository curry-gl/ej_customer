<template>
    <div class="home">
        <van-row>
            <van-image
            width="100%"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </van-row>
        <van-grid :column-num="3">
            <van-grid-item
                v-for="itme in categories"
                :key="itme.id"
                :icon=itme.icon
                :text=itme.name
                @click="xiadanHandler"
            />
        </van-grid>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            active:"index"
        }
    },
    computed:{
        ...mapState('app',["user"]),
        ...mapState('category',["categories"]),
    },
    created(){
        this.findOneLevelCategory()
    },
    methods:{
        ...mapActions("category",["findOneLevelCategory"]),
        xiadanHandler(){
            this.$router.push("/Orders")
        }
    }
}
</script>