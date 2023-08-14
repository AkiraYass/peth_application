import { defineStore } from 'pinia'

export const useSetupStore = defineStore('gameSetup', {
    state: () => {
        return {
            player_num: -1,
            life: 10,
        }
    },
})
