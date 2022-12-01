<script setup>
import {ref} from 'vue'
import router from '../router/router.js';
const foods = ref([
    {name : "Grilled Chicken", calorie : 350, fat : 12, protein : 8, carbonhidrate : 13, sodium : 567},
    {name : "Beef Stew", calorie : 235, fat : 10, protein : 18, carbonhidrate : 13, sodium : 459},
    {name : "Lamb Rib", calorie : 372, fat : 34, protein : 12, carbonhidrate : 7, sodium : 782},
    {name : "Garlic Soup", calorie : 43, fat : 1, protein : 2, carbonhidrate : 6, sodium : 216},
    {name : "Beefless Vegan Taco", calorie : 360, fat : 21, protein : 16, carbonhidrate : 32, sodium : 610}
])
const selectedFood = ref();
const customerDetails = ref(["","",""])
const labels = ref(["Name","Email","Phone Number"])
const checks = ref([/[A-Z][\w]{1,30} [A-Z][\w]{1,30}/,/[\w\W]{1,90}@gmail.com/,/[+][\d]{2,} [\d]{2,} [\d]{3,} [\d]{4,}/])
function selectFood(index){selectedFood.value = foods.value[index];}
function placeAnOrder(){if(checkInputs){router.push({name : 'Finish Order'})}}
function checkInputs(){return checks.value[0].test(customerDetails.value[0]) && checks.value[1].test(customerDetails.value[1] && checks.value[2].test(customerDetails.value[2]))}
</script>
<template>
    <h1>Restaruant</h1>
    <div id="page">
        <div class="menu" v-for="food,index in foods">
            <h1>{{food.name}}</h1>
            <h2>Calorie : {{food.calorie}} kcal</h2> <h2>Fat : {{food.fat}} g</h2>
            <h2>Protein : {{food.protein}} g</h2> <h2>Carbonhidrate : {{food.carbonhidrate}} g</h2>
            <h2>Sodium : {{food.sodium}} mg</h2> <button :id="index" @click="selectFood(index)">Select</button>
        </div>
        <div class="inputs">
            <div class="input" v-for="customer,index in customerDetails">
                <label :for="index">{{labels[index]}}</label> <input :id="index" v-model="customerDetails[index]" @keyup.enter="checkdetail(index)">
            </div>
            <button @click="placeAnOrder()">Order</button>
        </div>
    </div>
</template>
<style>
@import '../style.css';
</style>