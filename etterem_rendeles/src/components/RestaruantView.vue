<script setup>
import {ref} from 'vue'
import router from '../router/router.js';
const foods = ref([
    {name : "Grilled Chicken", calorie : 350, fat : 12, protein : 8, carbonhidrate : 13, sodium : 567, time : 20},
    {name : "Beef Stew", calorie : 235, fat : 10, protein : 18, carbonhidrate : 13, sodium : 459, time : 25},
    {name : "Lamb Rib", calorie : 372, fat : 34, protein : 12, carbonhidrate : 7, sodium : 782, time : 15},
    {name : "Garlic Soup", calorie : 43, fat : 1, protein : 2, carbonhidrate : 6, sodium : 216, time : 10},
    {name : "Beefless Vegan Taco", calorie : 360, fat : 21, protein : 16, carbonhidrate : 32, sodium : 610, time : 5}
])
const selectedFood = ref({name : "None", calorie : 0, fat : 0, protein : 0, carbonhidrate : 0, sodium : 0, time : 0});
const customerDetails = ref(["","",""])
const labels = ref(["Name","Email","Phone Number"])
const checks = ref([/[A-Z][\w]{1,30} [A-Z][\w]{1,30}/,/[\w|\W]{1,90}@gmail.com/,/[+][\d]{2,} [\d]{2,} [\d]{3,} [\d]{4,}/])
function selectFood(index){selectedFood.value = foods.value[index];}
function placeAnOrder(){if(checkInputs()){router.push({name : 'Finish Order'})}}
function checkInputs(){return checks.value[0].test(customerDetails.value[0]) && checks.value[1].test(customerDetails.value[1]) && checks.value[2].test(customerDetails.value[2])}
</script>
<template>
    <div id="top">
        <h1>Restaruant</h1>
        <h1>Preparation Time : Approximetely {{selectedFood.time}} minutes</h1>
        <h1>Selected Menu : {{selectedFood.name}}</h1>
    </div>
    <div id="page">
        <div class="menu" v-for="food,index in foods">
            <button :id="index" @click="selectFood(index)">Select</button> <h1>{{food.name}}</h1>
            <h2>Calorie : {{food.calorie}} kcal</h2> <h2>Fat : {{food.fat}} g</h2>
            <h2>Protein : {{food.protein}} g</h2> <h2>Carbonhidrate : {{food.carbonhidrate}} g</h2>
            <h2>Sodium : {{food.sodium}} mg</h2>
        </div>
    </div>
    <div class="inputs">
        <div class="input" v-for="customer,index in customerDetails">
            <label :for="index">{{labels[index]}}</label> <input :id="index" v-model="customerDetails[index]" @keyup.enter="checkdetail(index)">
        </div>
        <button @click="placeAnOrder()">Order</button>
    </div>
</template>
<style>
@import '../style.css';
</style>