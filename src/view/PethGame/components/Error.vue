<template>
    <div>
        <div class="title">エラーが発生しました。</div>
        <div class="error-detail">
            <div class="text">ゲームプレイ中のページ読み込みはNGです。</div>
            <div class="text">以下よりトップ画面に戻ってください。</div>
        </div>
        <simple-button @click="onClickReturnTop">TOP画面に戻る</simple-button>
    </div>
</template>


<script setup lang="ts">
import SimpleButton from './SimpleButton.vue';
import { useRouter } from 'vue-router';

// State
const router = useRouter()
// Function
const onClickReturnTop = () => {
    router.push("/")
}
</script>


<style scoped lang="scss">
.title {
    margin-top: 150px;
    text-align: center;
    font-size: 50px;
}

.error-detail {
    margin: 30px auto;
    padding: 10px 20px;
    width: fit-content;
    height: fit-content;
    font-size: 30px;
    border: solid 1px black;
    background-color: white;
    color: rgb(94, 94, 94);
}
</style>