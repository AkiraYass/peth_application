<template>
    <div class="contents">
        <div class="title">ペス 21</div>
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
                <div class="text">③ カウントを"21"にしてしまった人の負けです。その人は"残念ながら"ペスではありません。</div>
                <div class="text">④ 残った人たちの中でもカウントが一番大きい人は"名誉ペス"になれます。</div>
            </div>
        </div>
        <button class="start-button">ペス 21 を始める</button>
    </div>
</template>


<style scoped lang="scss">
.title {
    text-align: center;
    font-weight: bold;
    font-size: 75px;
    border-bottom: solid 2px grey;
}

.story-rule {
    margin: 50px auto;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    border: solid 2px black;
    background-color: white;
}

.story {
    margin-top: 20px;
    padding: 10px;
    border-bottom: solid 1px grey;
}

// .story>.text {
//     text-align: center
// }

.rule {
    margin-top: 20px;
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
}

.start-button {
    display: block;
    margin: 20px auto;
    padding: 10px;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    background: linear-gradient(to bottom right, blue, rgb(149, 149, 149));
    color: white;
}

.start-button:hover {
    cursor: pointer;
    background: grey;
}
</style>