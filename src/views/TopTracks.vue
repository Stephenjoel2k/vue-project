<template>
    <v-container width=80 justify-center>
      <v-row dense>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card dark>

            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title v-text="item.name"></v-card-title>
                <v-card-subtitle v-text="item.artists[0].name"></v-card-subtitle>
              </div>
              
              <v-avatar class="ma-3" size="80" tile>
                <v-img :src="item.album.images[1].url"></v-img>
              </v-avatar>
            </div>

          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>

  import axios from 'axios';

  export default {
    data() {
      return {
        items: []
      }
    },
    async mounted(){
     const access_token = "";

      const url = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50";
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + access_token
        }
      });
      this.items = response.data.items;
    }
  }
</script>