import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const notes = ref([
        {
            id: 1,
            title: "Ir al médico",
            marked: false
        },
        {
            id: 2,
            title: "Contraseña del WiFi: 123456",
            marked: false
        }
    ]);

    return {
        notes,
    };
})