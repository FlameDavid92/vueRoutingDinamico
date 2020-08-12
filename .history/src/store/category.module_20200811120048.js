/* eslint-disable */

import Vue from 'vue';
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
        console.log('fetchCategories');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}