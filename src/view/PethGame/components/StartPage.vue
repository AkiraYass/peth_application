<template>
    <div class="contents">
        <div class="title">ペス・ゲーム</div>
        <div class="story-rule">
            <div class="story">
                <div class="instruction-title">「ペス」って何？</div>
                <div class="text">「ペス」とはありふれた存在のことです。身近にいる人や猫、犬など。もちろん"あなた自身も"。</div>
                <div class="text">この世界の様々なものには「ペス」が宿っています。「ペス」であることはこの世界にとって"当たり前"のことなのです。</div>
                <div class="text">もし「ペス」ではない存在がいたのなら…。いったいどうなるのでしょうね。</div>
            </div>
            <div class="rule">
                <div class="instruction-title">～ルール説明～</div>
                <div class="text">① カウントがボタンを押すたびに1ずつ増えていきます。この時、1人3回までボタンを押す事が出来ます。</div>
                <div class="text">② 【３回ボタンを押す】・【"次の人へ"ボタンを押す】と交代です。次の人は同じように自分の番をこなします。</div>
                <div class="text">③ カウントを"0"にしてしまった人の負けです。その人は"残念ながら"ペスではありませんので、ペス度が0になります。</div>
                <div class="text">④ 残った人たちの中でも特にカウントが一番大きい人は"名誉ペス"に選ばれます。</div>
            </div>
        </div>
        <div class="config-area">
            <div class="select-playernum">
                <div class="config-title">遊ぶ人数を選択</div>
                <div class="radio-button">
                    <label><input type="radio" name="select-playernum" value="2" checked>２人</label>
                    <label><input type="radio" name="select-playernum" value="3">３人</label>
                    <label><input type="radio" name="select-playernum" value="4">４人</label>
                </div>
            </div>
            <div class="limit-config">
                <div class="config-title">カウント数選択</div>
                <div class="form-limit">
                    <input type="range" id="limit-slider" v-model="store.life" min="10" max="70">
                    <label class="now-select">{{ store.life }}</label>
                </div>
            </div>
        </div>
        <simple-button @click="gameStart">ペスゲーを始める</simple-button>
    </div>
</template>


<script setup lang="ts">
import SimpleButton from './SimpleButton.vue';
import { useRouter } from 'vue-router';
import { useSetupStore } from '../../../stores/gameSetup';
import sceneChangeSound from '../../../assets/シーン切り替え1.mp3'
import bgmSound from '../../../assets/natsuyasuminotanken.mp3'
import { onMounted } from 'vue';

// State
const router = useRouter();
const store = useSetupStore();
const audio_scene = new Audio(sceneChangeSound);
const audio_bgm = new Audio(bgmSound);


audio_bgm.volume = 0.5

// Function
const getPlayerNum = () => {
    const playerRadio = document.getElementsByName("select-playernum") as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < playerRadio.length; i++) {
        const checked: boolean = playerRadio[i].checked
        if (checked) {
            store.player_num = Number(playerRadio[i].value);
        }
    }
    //console.log(checkValue)
}
const gameStart = () => {
    audio_scene.play()
    audio_bgm.pause()
    getPlayerNum()
    router.push("/peth-play")
}
onMounted(() => {
    audio_bgm.currentTime = 0
    audio_bgm.play()
})

</script>


<style scoped lang="scss">
.title {
    margin: 10px 0;
    text-align: center;
    font-weight: bold;
    font-size: 65px;
    border-bottom: solid 2px grey;
}

.story-rule {
    margin: 20px auto 5px auto;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border: solid 2px black;
    background-color: white;
}

.story {
    padding: 10px;
    border-bottom: dotted 5px rgb(87, 85, 7);
}

.rule {
    padding: 10px;
}

.instruction-title {
    text-align: center;
    font-size: 40px;
    font-weight: 900;
}

.text {
    margin: 10px 0;
    font-weight: 900;
    font-size: 20px;
    border-bottom: solid 1px rgb(202, 202, 202);
}

.config-area {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
}

.config-title {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    color: grey;
}

.select-playernum {
    border-right: dotted 1px black;
}

.radio-button {
    margin: 10px auto;
    text-align: center;
    font-size: 20px;
}

.radio-button>label {
    margin-right: 15px;
}

input[name="select-playernum"]:hover {
    cursor: pointer;
}

.limit-config {
    margin: 0 5px 0 5px;
}

.form-limit {
    margin: 10px auto;
    text-align: center;
}

.now-select {
    margin-left: 10px;
    font-weight: bold;
}

.start-button:hover {
    cursor: pointer;
    background: grey;
}
</style>