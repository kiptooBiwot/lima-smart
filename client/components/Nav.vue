<template>
  <v-app-bar
    app
    color="rgba(68, 68, 68, 0.9)"
    dark
    elevation="0"
  >
    <v-toolbar-title>Lima Smart</v-toolbar-title>

    <v-spacer />
    <div v-if="$auth.loggedIn">
      <!-- Display Username -->
      <!-- Show Sign Out -->
    </div>
    <div v-else>
      <v-btn
        text
        to="/login"
      >
        Log In
      </v-btn>
    </div>

    <v-btn
      text
      to="/signup"
    >
      Sign Up
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>
