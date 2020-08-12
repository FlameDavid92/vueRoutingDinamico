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

        }
        return null;
    }
};
const mutations = {

};
const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}