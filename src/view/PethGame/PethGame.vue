<template>
    <div class="contents">
        <back-ground />
        <router-view></router-view>
    </div>
</template>


<script setup lang="ts">
import BackGround from './components/BackGround.vue'
</script>


<style scoped lang="scss">
.contents {
    width: 100%;
    height: 100%;
}

.game-area:hover {
    cursor: default;
}
</style>