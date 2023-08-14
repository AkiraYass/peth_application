<template>
    <div class="back-ground">
        <div v-for="n in 4" :key="n">
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth1">ペス</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth2">ぺす</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth1">PETH</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth1">ペス</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth2">ぺす</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth1">PETH</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="i in 30" :key="i">
                        <span class="peth2">ペス</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
ul {
    padding: 0;
    margin-left: -90px;
    width: 10000px;
    display: flex;
    list-style: none;
}

.back-ground {
    z-index: -9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@mixin PETH {
    font-size: 75px;
    font-style: oblique;
    font-weight: bold;
    color: rgb(226, 255, 255);
}

.peth1 {
    @include PETH;
    margin-left: 75px;
}

.peth2 {
    @include PETH;
    margin-right: 75px;
}
</style>