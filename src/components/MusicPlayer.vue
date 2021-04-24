<template>
  <div class="text-center">
    <v-card tile>
      <v-progress-linear
        :value="this.$store.state.savedPreviewProgress"
        class="my-0"
        height="3"
      ></v-progress-linear>

      <v-list>
        <v-list-item>
          <v-list-item-avatar tile>
            <img
              v-if="this.$store.state.savedTrack.album.images[0].url"
              :src="this.$store.state.savedTrack.album.images[0].url"
            />
            <span v-else>{{ this.$store.state.savedTrack.name[0] }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              this.$store.state.savedTrack.artists[0].name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              this.$store.state.savedTrack.name
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MusicPlayer",
  data() {
    return {};
  }
};
</script>