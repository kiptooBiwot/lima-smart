<template>
  <v-app>
    <Nav />
    <v-main>
      <nuxt />
    </v-main>
    <!-- <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
html, body {
  color: #525050 !important;
}
</style>
