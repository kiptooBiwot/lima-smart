<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" sm="6" align-self="center">
        <v-img
          :src="require('~/assets/images/login.svg')"
          height="500px"
          contain
        />
      </v-col>
      <v-col cols="12" sm="6" align-self="center">
        <v-row align="center" justify="center">
          <!-- <LoginForm /> -->
          <v-card tile elevation="0">
            <v-card-title>
              <h1>Log In</h1>
            </v-card-title>
            <v-card-subtitle>
              <p class="mb-0">
                Welcome back. Sign in to continue.
              </p>
            </v-card-subtitle>
            <v-card-text>
              <v-card class="ma-0 pa-5" elevation="0" outlined>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-alert v-if="alert" :type="alert.type" dense>
                    {{ alert.message }}
                  </v-alert>
                  <v-text-field
                    v-model="credentials.email"
                    :rules="emailRules"
                    required
                    outlined
                    prepend-inner-icon="mdi-email"
                    dense
                    label="Email"
                  />
                  <v-text-field
                    v-model="credentials.password"
                    required
                    :rules="passwordRules"
                    outlined
                    prepend-inner-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    dense
                    label="Password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                </v-form>
              </v-card>
              <v-btn text rounded class="text-btn ma-0">
                Forgot your password?
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn
                tile
                :loading="loading"
                :disabled="loading"
                color="success"
                class="my-btn"
                @click.prevent="signInUser"
              >
                Sign In
              </v-btn>
              <v-spacer />
              <v-btn
                outlined
                color="success"
                class="my-btn"
                to="/signup"
              >
                Sign Up
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import LoginForm from '@/components/login/Form'

export default {
  components: {
    // LoginForm
  },
  layout: 'login',
  auth: false,
  data () {
    return {
      alert: false,
      loading: false,
      showPassword: false,
      valid: true,
      credentials: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    async signInUser () {
      try {
        this.alert = null
        this.loading = true
        const result = await this.$auth.loginWith('local', { data: this.credentials })
        console.log(result)
        this.alert = { type: 'success', message: result.data.message }
        this.$refs.form.reset()
        setTimeout(() => {
          this.loading = false
          this.$router.push('/dashboard')
        }, 3000)
      } catch (error) {
        if (error.response && error.response.data) {
          this.loading = false
          this.alert = { type: 'error', message: error.response.data.error.message || error.response.status }
        }
      }
    }
    // signInUser () {
    //   this.alert = null
    //   this.loading = true

    //   this.$store.dispatch('login/loginUser', {
    //     email: this.email,
    //     password: this.password
    //   })
    //     .then((response) => {
    //       this.alert = { type: 'success', message: 'Welcome back!' }
    //       this.$refs.form.reset()
    //       setTimeout(() => {
    //         this.loading = false
    //         this.$router.push('/dashboard')
    //       }, 2000)
    //     }).catch((error) => {
    //       if (error.response && error.response.data) {
    //         this.alert = { type: 'success', message: error.response.data.error.message || error.response.status }
    //       }
    //     })
    // }
  }
}
</script>

<style scoped>
.first-half {
  /* background-color: #1A8917; */
  background-color: #4caf50;
  /* height: 590px; */
}

.heading1 {
  font-weight: normal;
}

/* .text-btn.hover {
  font-size: 13px;
  background: none;
} */

</style>
