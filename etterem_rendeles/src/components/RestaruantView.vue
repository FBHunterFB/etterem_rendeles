<script setup>
import {ref} from 'vue'
const foods = ref([
    {name : "Grilled Chicken", calorie : 350, fat : 12, protein : 8, carbonhidrate : 13, sodium : 567},
    {name : "Beef Stew", calorie : 235, fat : 10, protein : 18, carbonhidrate : 13, sodium : 459},
    {name : "Lamb Rib", calorie : 372, fat : 34, protein : 12, carbonhidrate : 7, sodium : 782},
    {name : "Garlic Soup", calorie : 43, fat : 1, protein : 2, carbonhidrate : 6, sodium : 216},
    {name : "Beefless Vegan Taco", calorie : 360, fat : 21, protein : 16, carbonhidrate : 32, sodium : 610}
])

function orderAFood(index){
    console.log(foods.value[index])
}
</script>

<template>
    <h1>Restaruant</h1>
    <div id="page">
        <div id="menu" v-for="food,index in foods">
            <h1>{{food.name}}</h1>
            <h2>Calorie : {{food.calorie}} kcal</h2>
            <h2>Fat : {{food.fat}} g</h2>
            <h2>Protein : {{food.protein}} g</h2>
            <h2>Carbonhidrate : {{food.carbonhidrate}} g</h2>
            <h2>Sodium : {{food.sodium}} mg</h2>
            <button :id="index" @click="orderAFood(index)">Order</button>
        </div>
    </div>
</template>

<style>
@import '../style.css';
</style>