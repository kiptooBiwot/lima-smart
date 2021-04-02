<template>
  <v-app-bar app elevation="0" class="pt-4" color="transparent">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Search"
          clearable
          solo
          flat
        />
      </v-col>
      <v-col cols="4">
        <v-list rounded two-line dense class="py-0">
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Kiptoo Biwot</v-list-item-title>
              <v-list-item-subtitle>Developer</v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer />
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-chevron-down
                </v-icon>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'My Profile', icon: 'mdi-account' },
      { title: 'Sign Out', icon: 'mdi-logout' }
    ]
  })

}
</script>

<style>

</style>
