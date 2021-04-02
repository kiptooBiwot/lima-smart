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

                <v-stepper-step step="3">
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
                        <v-form>
                          <!-- <v-text-field outlined label="First name" dense /> -->
                          <!-- <v-text-field outlined label="Last name" dense /> -->
                          <!-- <v-text-field outlined label="Mobile phone number" dense /> -->
                          <v-text-field outlined label="Email" dense />
                          <!-- <v-text-field outlined label="Gender" dense /> -->
                          <v-text-field outlined label="Password" type="password" append-icon="mdi-eye-closed" dense />
                          <v-text-field outlined label="Confirm Password" type="password" append-icon="mdi-eye-closed" dense />
                        </v-form>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card-actions>
                    <v-btn
                      tile
                      color="success"
                      class="my-btn"
                      @click="e1=2"
                    >
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
                    <!-- <v-btn
                      outlined
                      color="success"
                      class="my-btn"
                      to="/login"
                    >
                      Cancel
                    </v-btn> -->
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
            <!-- <v-card outlined class="pa-5">
              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined label="First name" dense />
                    <v-text-field outlined label="Last name" dense />
                    <v-text-field outlined label="Mobile phone number" dense />
                    <v-text-field outlined label="Email" dense />
                    <v-text-field outlined label="Gender" dense />
                    <v-text-field outlined label="Password" type="password" append-icon="mdi-eye-closed" dense />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field outlined label="County" dense />
                    <v-text-field outlined label="Sub-county" dense />
                    <v-text-field outlined label="Ward" dense />
                    <v-text-field outlined label="Village" dense />
                    <v-text-field outlined label="Education level" dense />
                    <v-text-field outlined label="Confirm Password" type="password" append-icon="mdi-eye-closed" dense />
                  </v-col>
                </v-row>
              </v-form>
            </v-card> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      e1: 1
    }
  }
}
</script>

<style>

</style>
