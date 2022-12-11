<script setup>
import {ref} from 'vue';
import router from '../router/router';
const orderNumber = ref(Math.floor(Math.random() * (10000 - 1) + 1));
function returnToHome(){router.push({name : "Home"})}
</script>
<template>
    <div>
        <button @click="returnToHome()">Return</button>
        <h1>Thank you</h1>
        <h2>Remember, your order number is {{orderNumber}}</h2>
    </div>
</template>