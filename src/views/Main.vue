<template>
    <div class="w-full h-screen bg-slate-900 flex flex-col justify-between"> 
        
        <div class="flex text-white space-x-5 justify-center mt-5">
            <button 
            class="border p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
            @click="enviarAPalabra(1)"
            >Palabra uno</button>
            <button 
            class="border p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
            @click="enviarAPalabra(2)"
            >Palabra dos</button>
            <button 
            class="border p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
            @click="enviarAPalabra(3)"
            >Palabra tres</button>
            <button 
            class="border p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
            @click="enviarAPalabra(4)"
            >Palabra cuatro</button>
            <button 
            class="border p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
            @click="enviarAPalabra(5)"
            >Palabra cinco</button>
        </div>
        
        <div class="flex flex-col items-center justify-center flex-grow text-white"> 
            <span class="mb-2">Nombre las palabras</span>
            <input 
                type="text" 
                v-model="textoInput" 
                class="bg-transparent border-b border-white mb-4" 
            />
            <button 
                class="border border-white p-2 rounded-full hover:bg-white transition duration-500 hover:text-black"
                @click="comprobarTexto"
            >
                Comprobar
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const textoInput = ref('');

function comprobarTexto() {
    console.log(textoInput.value.split(" ").length);
    
    if (textoInput.value.split(" ").length === 5 && textoInput.value.toLowerCase() === "me lo robaron carmine todo") {
        console.log(textoInput.value);
        alert("Felicidades ganador, haz encontrado bien las palabras")
    } else {
        alert("Incorrecto, vuelve a intentarlo o volver a buscar")
    }
}

function enviarAPalabra(numero) {
    router.push(`/palabra/${numero}`);
}

</script>
