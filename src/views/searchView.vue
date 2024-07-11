<script setup>
import { ref, onMounted } from 'vue'
defineOptions({ name: "SEARCH" })
import ShowBooks from '@/components/showBooks.vue';
const inputSearch = ref(null)
const searchSubmit = (e) => {
    const formData = new FormData(e.target)
    for (let pair of formData) {
        console.log(pair[1])
        fetch('http://localhost:3000/db/books', {
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(typeof json)
            inputSearch.value = json
        })
    }
}
</script>

<template>
    <el-header>
        <form class="searchBox" @submit.prevent="searchSubmit">
            <label class="search" for="searchInput">
                <input type="search" name="search" placeholder="Search for the books you like" id="searchInput">
                <button type="submit" class="search">search</button>
            </label>
        </form>
    </el-header>
    <el-container class="body">
        <!-- <el-main style="background-color: aliceblue;padding-top: 0;padding-bottom: 0;overflow: visible;display: flex;"> -->
            <ShowBooks :showBooks="inputSearch"></ShowBooks>
        <!-- </el-main> -->
    </el-container>
</template>

<style scoped>
.el-header {
    position: relative;

    form.searchBox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: none;
        height: 35px;
        width: 35%;

        label.search {
            user-select: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 100%;
            padding: 3px;
            border: 1px solid darkred;
            border-radius: 7px;
            width: 100%;
            height: 100%;
            background-color: white;
            box-sizing: border-box;

            input[type="search"] {
                outline: none;
                border: none;
                height: 100%;
                box-sizing: border-box;
                flex: 1;
            }

            button.search {
                border: none;
                border-radius: 5px;
                color: white;
                background-color: darkred;
                cursor: pointer;
                height: 100%;
                box-sizing: border-box;
            }
        }
    }
}
.el-container.body{
    height: 100%;
    width: 100%;
}
</style>