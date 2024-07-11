<script setup>
import { defineProps } from 'vue';
defineOptions({ name: "showBooks" })
defineProps({
    showBooks: Object
})
</script>

<template>
    <ul>
        <li>1</li>
        <li v-for="book in showBooks">{{ book.name }}</li>
    </ul>
</template>

<style scoped>
ul {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 10px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        border: 1px solid black;
        vertical-align: middle;
        line-height: 100%;
        height: 100%;
    }
}
</style>