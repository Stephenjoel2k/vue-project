<template>
  <nav>

    <!-- Top Bar the one that's fixed -->
    <v-app-bar app class="black">
        <v-app-bar-nav-icon dark class="d-none d-md-flex" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase white--text">
            <span class="font-weight-light">Music</span>
            <span>Habits</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn color="green" href="http://localhost:3000/auth/login" v-if="!login">
            <v-icon left>mdi-import</v-icon>
            <span>Spotify</span>
        </v-btn>
    </v-app-bar>

    <!-- Sidebar the one that toggles -->
    <v-navigation-drawer v-model="drawer" fixed app dark class="black .d-none .d-md-flex" width="225px">
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
      login: true,
      value: 1,
    }
  },
  async mounted(){
    if(!localStorage.access_token){
      this.login = false;
    }else{
      this.login = true;
    }
  }
}
</script>

<style>
</style>