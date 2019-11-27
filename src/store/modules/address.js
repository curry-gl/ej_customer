import {get} from '../http'
export default{
    namespaced:true,
    state:{
        address:[]
    },
    mutations:{
        getAddress(state,data){
            state.address=data
        }
    },
    actions:{
        async findByCustomerId(context,id){
        let response=await get('/address/findByCustomerId',{id})
        context.commit('getAddress',response.data)
        }
    }
}