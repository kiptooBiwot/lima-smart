<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img
          :src="require('~/assets/images/register.svg')"
          height="500"
          contain
        />
      </v-col>
      <v-col cols="12" sm="8" class="pa-10">
        <v-card tile elevation="0">
          <v-card-title>
            <h2>Sign Up</h2>
          </v-card-title>
          <v-card-subtitle>
            <p>Create an account to access this platform</p>
          </v-card-subtitle>
          <v-card-text>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step
                  :complete="e1 > 1"
                  step="1"
                >
                  Setup Account
                </v-stepper-step>

                <v-divider />

                <v-stepper-step
                  :complete="e1 > 2"
                  step="2"
                >
                  Biodata
                </v-stepper-step>

                <v-divider />

                <v-stepper-step :complete="e1 > 3" step="3">
                  Farm details
                </v-stepper-step>
                <v-divider />

                <v-stepper-step step="4">
                  Complete
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card outlined width="80%" class="mx-auto">
                    <v-row align="center" justify="center">
                      <v-col cols="10" class="pt-10">
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
                            prepend-inner-icon="mdi-email"
                            outlined
                            label="Email"
                            dense
                          />
                          <v-text-field
                            v-model="credentials.password"
                            outlined
                            :rules="passwordRules"
                            required
                            prepend-inner-icon="mdi-lock"
                            label="Password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            dense
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                          />
                          <v-text-field
                            v-model="confirmPassword"
                            outlined
                            :rules="passwordRules"
                            required
                            prepend-inner-icon="mdi-lock"
                            label="Confirm Password"
                            :type="confirmShow ? 'text' : 'password'"
                            dense
                            :append-icon="confirmShow ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="confirmShow = !confirmShow"
                          />
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card-actions>
                    <v-btn
                      tile
                      color="success"
                      class="my-btn"
                      :loading="loading"
                      :disabled="loading"
                      @click.prevent="registerAccount"
                    >
                      <!-- @click="e1=2" -->
                      Continue
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      outlined
                      color="success"
                      class="my-btn"
                      to="/login"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card outlined width="100%" class="px-5">
                    <v-row>
                      <v-col cols="12" md="6" class="pt-10">
                        <v-form>
                          <v-text-field outlined label="First name" dense />
                          <v-text-field outlined label="Middle name" dense />
                          <v-text-field outlined label="Sir name" dense />
                        </v-form>
                      </v-col>
                      <v-col cols="12" md="6" class="pt-10">
                        <v-form>
                          <v-text-field outlined label="Mobile phone number" dense />
                          <v-text-field outlined label="Gender" dense />
                          <v-text-field outlined label="Education" dense />
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card-actions>
                    <v-btn
                      tile
                      color="success"
                      class="my-btn"
                      @click="e1=3"
                    >
                      Continue
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card outlined width="100%" class="px-5">
                    <v-row>
                      <v-col cols="12" md="6" class="pt-10">
                        <v-form>
                          <!-- <v-text-field outlined label="Farm Location" dense /> -->
                          <v-text-field outlined label="Farm Acarage" dense />
                          <v-text-field outlined label="Intended Crop" dense />
                          <v-text-field outlined label="County" dense />
                          <!-- <v-text-field outlined label="Farm number" dense /> -->
                          <!-- <v-text-field outlined label="Email" dense /> -->
                          <!-- <v-text-field outlined label="Farm" dense /> -->
                        </v-form>
                      </v-col>
                      <v-col cols="12" md="6" class="pt-10">
                        <v-form>
                          <v-text-field outlined label="Ward" dense />
                          <v-text-field outlined label="Village" dense />
                          <!-- <v-text-field outlined label="Farm" dense /> -->
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card-actions>
                    <v-btn
                      tile
                      color="success"
                      class="my-btn"
                      @click="e1=4"
                    >
                      Continue
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      outlined
                      color="success"
                      class="my-btn"
                      @click="e1=2"
                    >
                      Back
                    </v-btn>
                  </v-card-actions>
                </v-stepper-content>
                <v-stepper-content step="4">
                  <v-card outlined width="80%" class="mx-auto">
                    <v-row align="center" justify="center">
                      <v-col cols="10" class="pa-5">
                        <h1>Congratulations! Sign Up Complete.</h1>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card-actions class="mt-10">
                    <v-btn
                      tile
                      color="success"
                      class="my-btn"
                      to="/login"
                    >
                      Login
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      outlined
                      color="success"
                      class="my-btn"
                      @click="e1=3"
                    >
                      Back
                    </v-btn>
                  </v-card-actions>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data () {
    return {
      loading: false,
      alert: null,
      show: false,
      confirmShow: false,
      e1: 1,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must have at least 6 characters'
      ],
      valid: true,
      confirmPassword: '',
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerAccount () {
      // this.$refs.form.validate()
      this.alert = null
      this.loading = true
      if (this.credentials.password !== this.confirmPassword) {
        this.alert = { type: 'error', message: 'Passwords did not match!' }
        this.loading = false
        return
      }

      this.$store.dispatch('register/registerUser', this.credentials)
        .then((response) => {
          this.alert = { type: 'success', message: 'Account Created' }
          this.$refs.form.reset()

          // Show the user account createion notification for 3 sec then proceed
          setTimeout(() => {
            // this.e1 = 2
            this.loading = false
          }, 3000)
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = { type: 'error', message: error.response.data.error.message || error.response.status }
          }
        })
    }
  }
}
</script>

<style>

</style>
