<template>
    <div class="game-area">
        <start-page />
        <back-ground />
    </div>
</template>


<script setup lang="ts">
import BackGround from './components/BackGround.vue'
import StartPage from './components/StartPage.vue'
</script>


<style scoped lang="scss">
.game-area {
    width: 100%;
}

.game-area:hover {
    cursor: default;
}
</style>