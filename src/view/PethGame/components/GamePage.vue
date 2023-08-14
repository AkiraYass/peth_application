<template @onMounted="startSetup">
    <div class="contents">
        <div v-if="store.player_num === -1" class="error-contents">
            <error />
        </div>
        <div v-else class="game-contents">
            <div v-for="player in playersList" :class="['player-info', 'id' + player.playerId]" :key="player.playerId">
                <div class="player-name">player{{ player.playerId }}</div>
                <div class="count">{{ player.count }}</div>
            </div>
            <div class="center-contents">
                <div v-if="limitPeth !== 0" class="playing-info">
                    <div class="now-turn">
                        Player
                        <span :class="['nowid' + nowPlayer]">{{ nowPlayer }}</span>
                        の番
                    </div>
                    <button :class="['peth-count', 'count-color' + nowPlayer]" @click="onClickCount">
                        ペス
                        <div class="limit">残り：{{ limitPeth }}</div>
                    </button>
                    <button class="pass-button" @click="playerChange">次の人へ</button>
                </div>
                <div v-else class="result">
                    <div class="result-title">RESULT</div>
                    <div>
                        <div class="win-player">【名誉ペス】
                            <span v-for="win in winner" :key="win">player {{ win }}</span>
                        </div>
                        <div class="nopeth-player">【 非 ペス 】
                            <span>player {{ loser }}</span>
                        </div>
                    </div>
                    <simple-button @click="onClickReturnTop">TOP画面に戻る</simple-button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Error from './Error.vue'
import SimpleButton from './SimpleButton.vue';
import { useSetupStore } from '../../../stores/gameSetup';
import { Ref, onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import pethSound from '../../../assets/001_ずんだもん（ノーマル）_ペス.wav'
import notPethSound from '../../../assets/001_ずんだもん（ノーマル）_お前はペスではない.wav'
import playerChangeSound from '../../../assets/和太鼓でドン.mp3'
import bgmPlayingSound from '../../../assets/kodokutosasayaki.mp3'
// State
const store = useSetupStore()
const playersList: {
    playerId: number,
    count: Ref<number>,
}[] = [];
const nowPlayer = ref<number>(1);
const limitPeth = ref<number>(0);
const limitClick = ref<number>(3);
const audio_peth = new Audio(pethSound);
const audio_not_peth = new Audio(notPethSound);
const audio_player_change = new Audio(playerChangeSound);
const audio_bgm_playing = new Audio(bgmPlayingSound);
const router = useRouter();
const loser = ref<number>(0);
const winner = ref<number[]>([]);

audio_bgm_playing.volume = 0.7
// Function
const startSetup = () => {
    limitPeth.value = store.life
    for (let i = 1; i <= store.player_num; i++) {
        const count = ref<number>(0);
        playersList.push({ playerId: i, count: count })
    }
}
const onClickCount = () => {
    limitPeth.value--
    const countTarget = playersList.findIndex(val => val.playerId === nowPlayer.value)
    playersList[countTarget].count.value++
    if (limitPeth.value === 0) {
        playersList[countTarget].count.value = 0
        audio_peth.pause()
        audio_not_peth.play()
        culcResult()
        return
    }
    audio_peth.currentTime = 0
    audio_peth.play()
    limitClick.value--
    if (limitClick.value === 0) {
        playerChange()
    }
}
const playerChange = () => {
    if (limitClick.value === 3) {
        return
    }
    limitClick.value = 3;
    audio_peth.pause()
    audio_player_change.currentTime = 0
    audio_player_change.play()
    nowPlayer.value++;
    if (nowPlayer.value > store.player_num) {
        nowPlayer.value = 1
        return
    }
}
const culcResult = () => {
    const loserIndex = playersList.findIndex(val => val.count.value === 0)
    loser.value = playersList[loserIndex].playerId

    const countNum = playersList.map((val) => val.count.value)
    const winnerCount = Math.max.apply(null, countNum);
    playersList.map((val) => {
        if (val.count.value === winnerCount) {
            winner.value.push(val.playerId);
        }
    })
}
const onClickReturnTop = () => {
    audio_bgm_playing.pause()
    router.push("/")
}
onBeforeMount(() => {
    startSetup()
    audio_bgm_playing.play()
})
</script>


<style scoped lang="scss">
.contents {
    height: 90vh;
}

.game-contents {
    position: relative;
    margin: auto;
    margin-top: 30px;
    width: 90%;
    height: 100%;
}

.player-info {
    position: absolute;
    text-align: center;
    padding: 10px;
    width: 100px;
    border-radius: 20px;
    box-shadow: inset 0 10px 25px 0 rgba(0, 0, 0, .5);
}

.id1 {
    top: 0;
    left: 0;
    background-color: red;
}

.id2 {
    top: 0;
    right: 0;
    background-color: blue;
}

.id3 {
    bottom: 0;
    left: 0;
    background-color: green;
}

.id4 {
    bottom: 0;
    right: 0;
    background-color: yellow;
}

.player-name {
    color: white;
    font-weight: bold;
}

.count {
    margin-top: 10px;
    padding: 10px;
    font-size: 50px;
    background-color: white;
    border-radius: 20px;
}

.playing-info {
    text-align: center;
}

.center-contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
    height: fit-content;
}

.now-turn {
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
}

.nowid1 {
    color: red;
}

.nowid2 {
    color: blue;
}

.nowid3 {
    color: green;
}

.nowid4 {
    color: yellow;
}

.peth-count {
    width: 275px;
    height: fit-content;
    padding: 20px 40px;
    font-size: 65px;
    border-radius: 50px;
    color: white;
}

.peth-count:hover {
    cursor: pointer;
    background: grey;
}

.count-color1 {
    background: linear-gradient(to bottom right, red, grey);
}

.count-color2 {
    background: linear-gradient(to bottom right, blue, grey);
}

.count-color3 {
    background: linear-gradient(to bottom right, green, grey);
}

.count-color4 {
    background: linear-gradient(to bottom right, yellow, grey);
}

.limit {
    font-size: 30px;
}

.pass-button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    font-size: 20px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(to bottom right, purple, white);
}

.result {
    padding: 10px 5px;
    margin: 0 auto;
    background-color: white;
    box-shadow: inset 0 10px 25px 0 rgba(0, 0, 0, .3);
    border-radius: 50px;
}

.result-title {
    text-align: center;
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
    background: linear-gradient(90deg, #4158D0, #C850C0 30%, #FFCC70); //背景色
    -webkit-background-clip: text; //背景を文字の形に切り抜き
    -webkit-text-fill-color: transparent; //文字を透明化
}

.win-player,
.nopeth-player {
    font-weight: bold;
}

.win-player>span,
.nopeth-player>span {
    margin: 0 10px 0 0;
    font-weight: bold;
}
</style>