/* eslint-disable */

import Vue from 'vue';
import {sleep} from '@/lib/util';
import {catJson} from '@/jsonresponse';

const state = {
    categories : []
};
const getters = {
    getCategories(state){
        return state.categories;
    },
    getCategory : (state, getters) => (paramKey) => {
        if(getters.getCategories){
            let found = getters.getCategories.find(el => {return el.key === paramKey});
            console.log("sono quaa")
            if(found){
                return found;
            }else{
                console.log("sono quiiiiii")
                return null
            };
        }
        return null;
    }
};
const mutations = {
    setCategories(state,payload){
        state.categories = payload
    },
    setCategory(state,payload){
        Vue.set(state.categories, payload.key, payload);
    }
};
const actions = {
    fetchCategories(context, payload){
        //sleep ritorna una Promise
        return sleep(500)
        .then(()=>{
            console.log('fetchCategories');
            console.log(catJson);
            context.commit('setCategories', catJson);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}