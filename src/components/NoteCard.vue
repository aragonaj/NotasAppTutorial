<script setup>
defineProps({
    note: Object
})
</script>

<template>
    <article class="note-card">
        <input type="text" class="card-title" v-model="note.title">
        <input type="checkbox" v-model="note.marked">
    </article>
</template>

<style scoped>
.note-card {
    padding: 20px 30px;

    width: 400px;

    display: flex;
    justify-content: space-between;

    background-color: lightgoldenrodyellow;
    border: 3px solid black;

    transition: all .2s;
}

.card-title {
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: transparent;
}

.note-card:hover {
    border: 3px solid black;
    box-shadow: 0 0 10px;
}

.note-card:has(input:checked) {
    border: 3px solid lightgray;
    background-color: lightblue;
}

.card-title {
    font-weight: 100;
}
</style>