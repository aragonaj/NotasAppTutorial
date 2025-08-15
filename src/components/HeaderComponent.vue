<script setup>

</script>

<template>
    <header class="header">
        <h1 class="title">Notes page</h1>

        <nav class="nav-list">
            <li>
                <router-link to="/" class="link">Home</router-link>
            </li>
            <li>
                <router-link to="/notes" class="link">Notes</router-link>
            </li>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        padding: 30px;

        background-color: black;
        color: white;

        text-align: center;
    }

    .title {
        margin: 0;
    }

    .nav-list {
        display: flex;
        justify-content: space-around;
    }

    .link {
        color: white;
        text-decoration: none;
    }
</style>