<template>
    <div class="bg-slate-900 w-full h-screen flex justify-center">
        <div class="flex flex-col text-white justify-center items-center">
            <h1 class="text-6xl">{{ palabra }}</h1>
            <button 
            class="mt-4 p-1.5 px-3 rounded-full border hover:text-black hover:bg-white transition duration-500"
            @click="volver"
            >
            Volver</button> 
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter();
const route = useRoute();
const numero = route.params.numero;
const palabra = ref('');

function volver () {
    router.go(-1);
}

onMounted(() => {
    if (numero === '1') {
        palabra.value = "ME";
    } 
    if (numero === '2') {
        palabra.value = "LO";
    } 
    if (numero === '3') {
        palabra.value = "ROBARON";
    } 
    if (numero === '4') {
        palabra.value = "CARMINE";
    } 
    if (numero === '5') {
        palabra.value = "TODO";
    } 
});
</script>