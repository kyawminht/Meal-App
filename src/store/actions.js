import axiosClient from '../axiosClient';

export function searchMeals({commit},keyword){
    commit("setLoading",true);
    
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        commit('setSearchMeals',data.meals)
        commit('setLoading',false);
    })
}

export function searchMealsByLetter({commit},letter){

    axiosClient.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setSearchByLetter',data.meals)
    })
}

export function searchMealsByIngredients({commit},ingredient){

    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data})=>{
        commit('setSearchByIngredients',data.meals)
    })
}