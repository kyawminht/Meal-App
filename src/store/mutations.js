import state from "./state"

export const setSearchMeals=(state,meals)=>{
    state.searchedMeals=meals;
}

export const setSearchByLetter=(state,meals)=>{
    state.searchedByLetter=meals;
}

export const setSearchByIngredients=(state,meals)=>{
    state.searchedByIngredients=meals;
}

export const setLoading=(state,isLoading)=>{
    state.loading=isLoading;
}