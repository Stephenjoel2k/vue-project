<template>
 
     <v-container width=80 justify-center>

      <Header header_title="Dashboard" header_background='dashboard' />


      <Miniboard title="Top Artists" background='artist' route='/top-artists' />
      <Miniboard title="Top Tracks" background='track' route='/top-tracks' />
      <Miniboard title="Recents" background='recent' route='/recently-played' />
      <Miniboard title="Discovery Tree" background='geography' route='/tree' />

    </v-container>



</template>

<script>

  import Header from '../components/Header';
  import Miniboard from '../components/Miniboard';

  export default {
    components: {Header, Miniboard},
    data() {
      return {
      }
    },
    async mounted(){
      if(!localStorage.access_token){
        this.$router.push('/');
      }
    }
  }
</script>