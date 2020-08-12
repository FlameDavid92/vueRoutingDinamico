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