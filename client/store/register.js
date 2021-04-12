export const state = () => ({
  user: null,
  isRegistered: false
})

export const getters = {

}

export const actions = {
  async registerUser ({ commit }, { email, password }) {
    const response = await this.$axios.post('/api/users/register', {
      email,
      password
    })

    commit('SET_USER', response)
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}
