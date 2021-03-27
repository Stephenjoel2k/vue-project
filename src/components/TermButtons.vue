<template>

      <v-row align="center" justify="center">
        <v-btn-toggle mandatory class="mb-4">
          <v-btn @click="$emit('display-top', 'long_term')" class="caption black white--text">All Time</v-btn>
          <v-btn @click="$emit('display-top', 'medium_term')" class="caption black white--text">~ 6 Months</v-btn>
          <v-btn @click="$emit('display-top', 'short_term')" class="caption black white--text" >~ 1 Month</v-btn>
        </v-btn-toggle>
      </v-row>

</template>

<script>
export default {
    name: "TermButtons",
}
</script>


<style scoped>

</style>