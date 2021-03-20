<template>
  <v-card
  >
    <v-bottom-navigation horizontal class="d-md-none">
      <v-btn color="deep-purple accent-4" to=/top-artists text>
        <span>Top Artists</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" to=/top-tracks text>
        <span>Top Tracks</span>
        <v-icon>mdi-album</v-icon>
      </v-btn>

      <v-btn color="deep-purple accent-4" to=/recently-played text>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      

    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
   data() {
    return {
      links: [
        { icon: 'mdi-account', text: 'Top Artists', route: '/top-artists' },
        { icon: 'mdi-album', text: 'Top Tracks', route: '/top-tracks' },
        { icon: 'mdi-history', text: 'Recent', route: '/recently-played' },
      ],
    }
  }
}
</script>