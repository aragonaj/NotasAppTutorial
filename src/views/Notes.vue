<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';
import CreateNote from '../components/CreateNote.vue';

const noteStore = useNoteStore();
</script>

<template>
    <HeaderComponent />
    <section id="notes-page">
        <h2>Notes</h2>

        <ul class="note-list">
            <li><CreateNote /></li>
            <li v-for="note in noteStore.notes" :key="note.id">
                <NoteCard :note="note" />
            </li>
        </ul>
    </section>
</template>

<style>
#notes-page {
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-bottom: 50px;
    text-align: center;
}

.note-list {
    padding: 30px;

    width: 70%;
    min-width: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    border: 10px solid brown;
}
</style>