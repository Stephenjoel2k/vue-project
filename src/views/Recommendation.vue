<template>
    <v-container width=80 justify-center>

        <Header header_title="Discovery Tree" header_background='geography' />
        
  

            <!-- Search Bar & Button-->
            <v-flex class="d-flex flex-no-wrap">
                <v-col sm12 lg8> 
                    <v-autocomplete
                        style="background:rgba(0,0,0,0)"
                        v-model="select"
                        :items="query_suggestions"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="deep-purple accent-3"
                        hide-no-data
                        hide-selected
                        item-text="Description"
                        item-value="state"
                        :label="query_label"
                        placeholder="Start typing to Search"
                        :prepend-icon="icon"
                        return-object
                        >
                    </v-autocomplete>
                    <!-- <v-text-field class="mt-2" :label="query_label" rounded dense filled>
                    </v-text-field> -->
                    <v-row align="center" justify="center">
                        <v-btn-toggle mandatory dense color="deep-purple accent-3" group class="mb-4">
                            <v-btn @click="updateSearchType('track')">Track</v-btn>
                            <v-btn @click="updateSearchType('artist')">Artist</v-btn>
                        </v-btn-toggle>
                    </v-row>
                </v-col>
            </v-flex>

            <v-list-item>
        

        <v-row dense>

        <!-- The component tracks -->
        <v-col v-for="(item) in items" :key="item.id" cols="12">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>{{item.name}}</v-card-title>
                <v-flex class="d-flex flex-wrap">
                    <v-btn outlined small class="ma-2" >Preview</v-btn>
                <!-- Add function to preview similar -->
                    <v-btn outlined small class="ma-2" >Find Similar</v-btn>
                </v-flex>
              </div>
              <v-avatar class="ma-3" size="100" tile>
                <v-img :src="item.images[1].url"></v-img>
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

export default {
    components: {Header},
    data(){
        return{
            items: [],
            artist: "4iiQabGKtS2RtTKpVkrVTw",
            query_label: "Search Track",
            type: "track",
            icon: "mdi-album",
            query_suggestions: []
        }
    },
    methods: {
        //Work in Progress
        async getSimilar(){
            const url = `https://api.spotify.com/v1/artists/${this.artist}/related-artists`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                }
            })
            this.query_suggestions = response.data.artists.map(artist => artist.name);
        },
        updateSearchType(type){
            this.type = type;
            if(type == 'track'){
                this.query_label = "Search Track";
                this.icon = "mdi-album";
            }else{
                this.query_label = "Search Artist";
                this.icon = "mdi-account";
            }
        },


    },
    async mounted(){
        if(!localStorage.access_token){
            this.$router.push('/');
        }
    }
}
</script>