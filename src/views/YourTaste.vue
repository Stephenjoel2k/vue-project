<template>
    <v-container width=80 justify-center>

        <Header header_title="Your Taste" header_background='taste' />
        <Preloader :items="items"/>
        <div v-if="items.length > 1">
            <h1>Hey User, </h1>
            <h3>You listened to {{items.length}} songs yesterday!</h3>
        </div>
        
    </v-container>
</template>

<script>

import axios from 'axios';
import Header from '../components/Header';
import Preloader from '../components/Preloader';

export default {
    components: {Header, Preloader},
    data(){
        return{
            items: []
        }
    },
    methods: {
        async getUserTracks(){
            const url = "http://localhost:3000/api/user/stats";
            const response = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.access_token,
                    "Access-Control-Allow-Origin": "*",
                }
            })
            this.items = response.data.data;
        }
    },
    async mounted(){
        if(!localStorage.access_token){
            this.$router.push('/');
        }
        await this.getUserTracks();
    }
}
</script>