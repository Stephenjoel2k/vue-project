<template>
  <nav>

    <!-- Top Bar the one that's fixed -->
    <v-app-bar flat app>
        <v-app-bar-nav-icon  class="grey--text d-none d-md-flex" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Your</span>
            <span>MusicHabits</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-export</v-icon>
        </v-btn>
    </v-app-bar>

    <!-- Sidebar the one that toggles -->
    <v-navigation-drawer v-model="drawer" fixed app dark class="default .d-none .d-md-flex" width="225px">
        <v-list rounded>
            <v-list-item v-for="([icon, text, route], i) in links" :key="i" :to="route" link>
                <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>
  
                <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">{{ text }}</v-list-item-title>
                </v-list-item-content>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        [ 'mdi-account', 'Top Artists', '/top-artists' ],
        [ 'mdi-album', 'Top Tracks',  '/top-tracks' ],
        [ 'mdi-history', 'Recent', '/recently-played' ],
      ],
      value: 1,
    }
  }
}
</script>

<style>
</style>