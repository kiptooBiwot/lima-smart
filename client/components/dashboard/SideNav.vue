<template>
  <v-navigation-drawer
    app
    color="#4caf50"
    dark
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Lima Smart
        </v-list-item-title>
        <v-list-item-subtitle>
          A product of HortiGrid Ltd.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Manage Farm', icon: 'mdi-image' },
      { title: 'Crop/ Crops', icon: 'mdi-flower' },
      { title: 'Soil Tests', icon: 'mdi-test-tube' },
      { title: 'Harvest Records', icon: 'mdi-clipboard-file' },
      { title: 'Reports', icon: 'mdi-view-list' },
      { title: 'Settings', icon: 'mdi-hammer-wrench' }
    ],
    right: null
  })
}
</script>

<style>

</style>
