<template>
 
     <v-container width=80 justify-center>
       
      <Header header_title="Top Tracks" header_background='track' />
      <TermButtons @display-top="displayTop" />
      <Preloader :items="items"/>

      <!-- Display the Tracks -->
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card dark :href=item.external_urls.spotify target="_blank">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{i+1}} - {{item.name}}</v-card-title>
                <v-card-subtitle>{{item.artists[0].name}}</v-card-subtitle>
                <v-card-subtitle> popularity: {{item.popularity}}%</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="100" tile>
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
  import Header from '../components/Header';
  import Preloader from '../components/Preloader';
  import TermButtons from '../components/TermButtons'

  export default {
    components: {Header, Preloader, TermButtons},
    data() {
      return {
        items: [],
        term: "long_term"
      }
    },
    methods : {
      async displayTop(term){
        this.term = term;

        const url = "https://yourmusichabit.herokuapp.com/api/user/top-tracks?term=" + this.term;
            const response = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                    "Access-Control-Allow-Origin": "*",
                }
            });
        this.items = response.data.data.items;
      }
    },
    async mounted(){
      if(!localStorage.access_token){
        this.$router.push('/');
      }
      await this.displayTop(this.term);
    }
  }
</script>