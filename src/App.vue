<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, watch, onMounted } from 'vue';

const scrollHeight = ref('0px')
const scrollbarMain = ref(0)
onMounted(() => {
    const scrollbarElement = scrollbarMain.value.$el
    scrollHeight.value = scrollbarElement.offsetHeight + 'px'
})
</script>

<template>
    <div class="common-layout">
        <el-container class="app" style="background-color: chocolate;">
            <el-header style="background-color: hotpink;">
                <h1>
                    <img src="http://localhost:3000/images/homeHeaderLogo.png" alt="library logo">
                    local library
                </h1>
            </el-header>
            <el-container class="body" style="border: 1px solid black;">
                <el-aside width="200px" style="background-color: aqua;">
                    <menu>
                        <li>
                            <RouterLink to="/home">home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/search">search</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/create">create</RouterLink>
                        </li>
                    </menu>
                </el-aside>
                <el-container class="main">
                    <!-- <el-header height="20px">面包屑&gt;mianbaoxie</el-header> -->
                    <el-scrollbar ref="scrollbarMain" :height="scrollHeight" style="border: 1px solid black;">
                        <el-main style="background-color: magenta;padding-top: 0;margin: 0;">
                            <RouterView></RouterView>
                        </el-main>
                    </el-scrollbar>
                    <el-footer style="background-color: forestgreen;">Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
div.common-layout {
    height: calc(100dvh - 16px);
    width: calc(100dvw - 16px);
    border-radius: 8px;
    overflow: hidden;

    .el-header {
        position: sticky;
        top: 0;

        h1 {
            display: flex;
            align-items: center;
            margin: 0;
            height: 100%;
            line-height: 100%;

            img {
                height: calc(100% - 12px);
                margin-right: 20px;
            }
        }
    }

    >.el-container {
        height: 100%;
        width: 100%;
    }
    >el-scrollbar{
        >el-scrollbar__view{
            height: 110%;
        }
    }
}
</style>
