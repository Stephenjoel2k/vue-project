<template>
  
  <v-app>
    <Navbar /> 
    <v-main class="mx-4">
      <router-view></router-view>
    </v-main>
    <BottomNavbar />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import BottomNavbar from './components/BottomNavbar'

export default {
  name: 'App',
  components: { Navbar, BottomNavbar },
  data: () => ({

  }),
};
</script>
