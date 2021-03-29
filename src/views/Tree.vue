<template>
    <v-container width=80 justify-center>

        <Header header_title="Discovery Tree" header_background='geography' />
        
        <v-toolbar color="orange accent-1">
            <v-toolbar-title class="title mr-6 hidden-sm-and-down">
                <v-icon>{{icon}}</v-icon>
            </v-toolbar-title>
            <v-autocomplete :search-input.sync="search" :items="items" :loading="isLoading" chips clearable
            hide-details hide-selected item-text="name" item-value="id" :label="query_label" return-object solo rounded>

                <template v-slot:no-data>
                    <v-list-item>
                    <v-list-item-title>
                        Search for
                        <strong>{{type}}s</strong>
                    </v-list-item-title>
                    </v-list-item>
                </template>

                <template v-slot:selection="{ attr, on, item, selected }">
                    <v-chip v-bind="attr" :input-value="selected" color="blue-grey" class="white--text" v-on="on">
                        <v-avatar left>
                            <v-img v-if="type == 'track'" :src="item.album.images[0].url"></v-img>
                            <v-img v-else-if="item.images.length > 1" :src="item.images[0].url"></v-img>
                        </v-avatar>
                        <span v-text="item.name"></span>
                    </v-chip>
                </template>

                <template v-slot:item="{ item }">
                    <v-list-item-avatar  v-if="item != undefined && item != null">
                        <v-img v-if="type == 'track'" :src="item.album.images[0].url"></v-img>
                        <v-img v-else-if="item.images.length > 1" :src="item.images[0].url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    
                    <v-list-item-subtitle v-if="type == 'track'" v-text="item.artists[0].name"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                    <v-icon>{{icon}}</v-icon>
                    </v-list-item-action>
                </template>

            </v-autocomplete>

            <template v-slot:extension>
                <v-tabs v-model="tab" :hide-slider="!model" color="blue-grey" slider-color="blue-grey">
                    <v-row align="center" justify="center">
                        <v-btn-toggle mandatory dense color="deep-purple accent-3" group class="mb-4">
                            <v-btn @click="updateSearchType('track')">Track</v-btn>
                            <v-btn @click="updateSearchType('artist')">Artist</v-btn>
                        </v-btn-toggle>
                    </v-row>
                </v-tabs>
            </template>

        </v-toolbar>


        
    </v-container>
</template>

<script>

import axios from 'axios';
import Header from '../components/Header';
import _ from 'lodash';

export default {
    components: {Header},
    data(){
        return{
            items: [],
            artist: "4iiQabGKtS2RtTKpVkrVTw",
            query_label: "Search Track",
            type: "track",
            search: null,
            icon: "mdi-album",
            isLoading: false,
            model: null,
            tab: null,
        }
    },
    watch: {
        search() {
            this.doSearch();
        },
        model (val) {
        if (val != null) this.tab = 0
        else this.tab = null
      },
    },
    methods: {
        doSearch: _.debounce(function() {
            if(this.search == null || this.search.length == 0){
                return;
            }

             this.isLoading = true

            var url = "https://api.spotify.com/v1/search?q=" + this.search + "&type=" + this.type;
            if(localStorage.profile){
                const profile = JSON.parse(localStorage.getItem('profile'));
                url = "https://api.spotify.com/v1/search?q=" + this.search + "&type=" + this.type + "&market=" + profile.country;
            }
            axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.access_token
                }
            })
            
            .then((response) => {
                if(response.data.error || !response.data){
                    this.items = [];
                }else if(response.data){
                    this.items = response.data[this.type + "s"].items;
                }
            })    
            .catch(e => console.log(e))
            .finally(() => (this.isLoading = false))
        },200),
        updateSearchType(type){
            this.type = type;
            this.items = [];
            this.search = "";
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