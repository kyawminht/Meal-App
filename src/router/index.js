import {createRouter, createWebHistory} from 'vue-router'
import MealsByLetter from './../views/MealsByLetter.vue'
import MealsByName from './../views/MealsByName.vue'
import MealsByIngredients from './../views/MealsByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetail from '../views/MealDetail.vue'
import Ingredients from '../views/Ingredients.vue'


const routes=[

    {
        path:'/letter/:letter',
        component:DefaultLayout,
        name:'default',
        children:[
            
            {
                path:'/',
                component:MealsByName,
                name:'by-name',
            },
            {
                path:'/by-letter/:letter?',
                component:MealsByLetter,
                name:'by-letter',
            },
            {
                path:'/ingredients?',
                component:Ingredients,
                name:'ingredients',
            },
            {
                path:'/ingredients/:ingredients?',
                component:MealsByIngredients,
                name:'by-ingredients',
            },

            {
                path:'/meal/:id',
                component:MealDetail,
                name:'detail',
            }
        ]
    },

 

]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;