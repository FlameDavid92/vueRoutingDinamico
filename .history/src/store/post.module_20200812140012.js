/* eslint-disable */

import Vue from 'vue';
import {sleep} from '@/lib/util';
import {postJson_1, postJson_2, postJson_3, postJson_4} from '@/jsonresponse';

const state = {
    posts : []
};
const getters = {
    getPosts(state){
        return state.posts;
    },
    getPost : (state, getters) => (paramKey) => {
        if(getters.getPosts){
            let found = getters.getPosts.find(el => {return el.key === paramKey});
            if(found){
                return found;
            }else return null;
        }
        return null;
    }
};
const mutations = {
    setPosts(state,payload){
        state.posts = payload
    },
    setPost(state,payload){
        Vue.set(state.posts, payload.key, payload);
    }
};
const actions = {
    fetchPosts(context, payload){
        //sleep ritorna una Promise
        return sleep(500)
        .then(()=>{
            console.log('fetchPosts' + payload.cat);
            if(payload.cat == 1){
                context.commit('setPosts', postJson_1);
            }else if(payload.cat == 2){
                context.commit('setPosts', postJson_2);
            }else if(payload.cat == 3){
                context.commit('setPosts', postJson_3);
            }else if(payload.cat == 4){
                context.commit('setPosts', postJson_4);
            }else{
                context.commit('setPosts', postJson_1);
            }
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