<template>
 
     <v-container justify-center>

      <Header header_title="Dashboard" header_background='dashboard' />

      <Miniboard title="Your Top Artists" background='artist' route='/top-artists' />
      <Miniboard title="Your Top Tracks" background='track' route='/top-tracks' />
      <Miniboard title="Your Recents" background='recent' route='/recently-played' />
      <Miniboard title="Discover Artists" background='discover' route='/discover-artists' />

      <Redirect />

    </v-container>



</template>

<script>

  import Header from '@/components/common/Header';
  import Miniboard from '@/components/common/Miniboard';
  import Redirect from '@/components/common/Redirect';

  export default {
    components: {Header, Miniboard, Redirect},
    data() {
      return {
      }
    },
  }
</script>

<style scoped>

</style>