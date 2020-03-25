import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        cart:[],
        showLoader:false,
        product:{},
        products:[
            {
                name:'1',
            }
        ],
        manufacturers:[]
    }
})