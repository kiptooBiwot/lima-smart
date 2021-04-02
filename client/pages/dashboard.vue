<template>
  <v-container fluid>
    <SideNav />
    <Nav />
    <v-main>
      <p>Content will go here soon!</p>
    </v-main>
  </v-container>
</template>

<script>
import Nav from '~/components/dashboard/Nav.vue'
import SideNav from '~/components/dashboard/SideNav.vue'

export default {
  components: {
    Nav,
    SideNav
  },
  layout: 'dashboard'
}
</script>

<style>

</style>
