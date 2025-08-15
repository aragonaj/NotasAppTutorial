import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const notes = ref([]);

    const createId = () => {
        // fórmula para aleatorizar un número basado en la fecha
        return Date.now.toString(36) + Math.random().toString(36).slice(2); 
    }

    const addNote = (title) => {
        notes.value.unshift({
            id: createId(),
            title,
            marked: false
        })
    }

    return {
        notes,
        addNote,
    };
}, 
{
    persist: true
});