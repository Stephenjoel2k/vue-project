<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: "Redirect",
    data(){
        return{

        }
    },
    mounted(){
      if(!localStorage.access_token){
        this.$router.push('/');
      }
    }
}
</script>