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
                <v-form>
                  <v-text-field
                    outlined
                    prepend-inner-icon="mdi-email"
                    dense
                    label="Email"
                  />
                  <v-text-field
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
                color="success"
                class="my-btn"
                to="/dashboard"
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
  data () {
    return {
      showPassword: false
    }
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
