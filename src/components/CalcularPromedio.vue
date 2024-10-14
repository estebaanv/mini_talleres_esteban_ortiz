<template>
    <div class="bg-gray-300 inline-block p-3 flex-col space-y-2 rounded-lg">
        <h3 class="text-center">Calculadora Promedio</h3>
        <div class="space-y-2">
            <InputNota :porcentaje="20" @update:valor="updateValor(0, $event)" />
            <InputNota :porcentaje="20" @update:valor="updateValor(1, $event)" />
            <InputNota :porcentaje="20" @update:valor="updateValor(2, $event)" />
            <InputNota :porcentaje="20" @update:valor="updateValor(3, $event)" />
            <InputNota :porcentaje="10" @update:valor="updateValor(4, $event)" />
            <InputNota :porcentaje="10" @update:valor="updateValor(5, $event)" />
        </div>
        <div>
            <div class="flex space-x-10">
                <span>Promedio:</span>
                <span>{{ promedio }}</span>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import InputNota from './InputNota.vue';
  
  const valores = ref(Array(6).fill(0));
  
  function updateValor(index, nuevoValor) {
    valores.value[index] = nuevoValor; 
  }
  
  const promedio = computed(() => {
    const suma = valores.value[0] + valores.value[1] + valores.value[2] + valores.value[3] + valores.value[4] + valores.value[5];
    return suma.toFixed(2); 
  });
  </script>
  