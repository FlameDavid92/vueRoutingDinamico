/* eslint-disable */

import Vue from 'vue';
import {sleep} from '@/lib/util';

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
        //axios.get GET API

        //sleep ritorna una Promise
        sleep(2000)
        .then(()=>{
            console.log('fetchCategories');
        })
        .catch(error => {
            throw new Error(error);
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