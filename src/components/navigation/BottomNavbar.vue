<template>
  <v-card
  >
    <v-bottom-navigation dark app class="d-md-none black" fixed grow>
      
      <v-btn to=/profile text>
        <span>My Insights</span>
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>

      <v-btn to=/dashboard text>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      

    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
   data() {
    return {
    }
  }
}
</script>