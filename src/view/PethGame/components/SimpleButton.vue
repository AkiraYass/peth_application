<template>
    <button class="start-button">
        <slot></slot>
    </button>
</template>


<style scoped lang="scss">
.start-button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    background: linear-gradient(to bottom right, blue, rgb(149, 149, 149));
    color: white;
}
</style>