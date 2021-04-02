<template>
  <v-col cols="8" align-self="center">
    <h2>
      Sign In
    </h2>
    <p>Welcome back. Sign in to continue.</p>
    <v-card
      class="mx-auto"
      max-width="540px"
      outlined
    >
      <v-form class="ma-5">
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
    <v-btn text rounded class="text-btn mb-5">
      Forgot your password?
    </v-btn>
    <v-row justify="space-between">
      <v-col cols="6">
        <v-btn
          tile
          color="success"
          class="my-btn"
        >
          Sign In
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          outlined
          color="success"
          class="my-btn"
        >
          Sign Up
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>
