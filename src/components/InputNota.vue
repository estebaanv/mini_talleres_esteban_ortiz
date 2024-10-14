<template>
    <div class="flex space-x-2">
      <input type="number" v-model="nota" @input="emitirValor" class="rounded-sm"/>
      <div>
        <span>{{ porcentaje }}</span>
        <span>%</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    porcentaje: {
      type: Number,
      required: true,
    },
  });
  
  const nota = ref(0);
  const emit = defineEmits(['update:valor']);
  
  function emitirValor() {
    emit('update:valor', (nota.value * props.porcentaje) / 100);
  }
  </script>
  