export const state = () => ({
    show: false
})

export const mutations =  {
    CHANGE(state) {
        state.show = !state.show
    }
}

export const actions =  {
    changeStatus({commit}) {
        commit('CHANGE')
    }

}