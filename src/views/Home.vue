<template>
    <div class="Home">
      <!-- Display if content is true -->
        <div v-if="content">

          <h1>Please Connect with spotify using the top right button to continue!</h1>
          
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        content: false
      }
    },
    async mounted(){
      if(this.$route.query.access_token != undefined && this.$route.query.access_token != null){
        localStorage.access_token = this.$route.query.access_token
      }
      if(localStorage.access_token){
        this.$router.push('top-tracks');
      }
      this.content = true;
    }
  }
</script>