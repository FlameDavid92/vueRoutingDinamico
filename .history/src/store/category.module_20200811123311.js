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
    getCategory : (state, getters) => (paramkey) => {
        if(getters.getCategories){
            return state.categories[paramkey];
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
        return sleep(3000)
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