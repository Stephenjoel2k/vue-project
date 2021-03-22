<template>
  <v-card
  >
    <v-bottom-navigation dark app class="d-md-none black" fixed >
      <v-btn to=/top-artists text>
        <span>Top Artists</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn to=/top-tracks text>
        <span>Top Tracks</span>
        <v-icon>mdi-album</v-icon>
      </v-btn>

      <v-btn to=/recently-played text>
        <span>Recently Played</span>
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