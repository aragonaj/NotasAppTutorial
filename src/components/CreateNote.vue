<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();
const handleSubmit = () => {
    noteStore.addNote(title.value);
    title.value = "";
}
const title = ref("");
</script>

<template>
    <form class="note-form" @submit.prevent="handleSubmit">
        <input type="text" class="note-title" placeholder="Nueva nota" v-model="title" />
        <button class="create-btn">+</button>
    </form>
</template>

<style scoped>
.note-form {
    margin-bottom: 20px;
    padding: 20px 30px;
    
    width: 400px;

    display: flex;
    justify-content: space-between;

    background-color: lightgreen;
    border: 3px solid darkblue;

    transition: all .2s;
}

.note-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
}

.create-btn {
    height: 30px;
    width: 30px;

    display: flex;
    align-items: center;

    font-size: 1.5rem;

    background-color: green;
    color: white;
}

.create-btn:hover {
    background-color: darkgreen;
}

.create-btn:active {
    background-color: green;
}

.note-form:hover {
    border: 3px solid black;
    box-shadow: 0 0 10px;
}
</style>