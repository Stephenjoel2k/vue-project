<template>
  <div class="Home">
    <v-container justify-center>
      <!-- Display if content is true -->
      <v-card tile :v-if="display" :dark="dark" class="pa-3 ma-5 text-center">
        <div class="menu">
          <h2>Please Connect with spotify to continue!</h2>
          <!-- Placeholder until hosted -->
          <v-btn
            class="my-5"
            color="green"
            href="https://yourmusichabit.herokuapp.com/auth/login"
          >
            <v-icon left>mdi-import</v-icon>
            <span>Spotify</span>
          </v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: true,
      dark: localStorage.theme
        ? localStorage.theme == "dark"
          ? true
          : false
        : true
    };
  },
  methods: {
    isValid() {
      if (localStorage.expiry && localStorage.access_token) {
        this.display = false;
        const time = new Date();
        const expiry = new Date(localStorage.expiry);
        localStorage.offset = time.getTimezoneOffset();
        if (expiry <= time) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("expiry");
          window.location.href =
            "https://yourmusichabit.herokuapp.com/auth/login";
        } else {
          this.$router.push("/dashboard");
        }
      }
    }
  },
  async mounted() {
    this.isValid();

    if (
      this.$route.query.access_token != undefined &&
      this.$route.query.access_token != null
    ) {
      const access_token = this.$route.query.access_token;
      localStorage.access_token = access_token;
      const time = new Date();
      time.setMinutes(time.getMinutes() + 59);
      localStorage.expiry = time;
      this.$router.push("dashboard");
    }
    this.content = true;
  }
};
</script>

<style>
.container {
  padding: 0;
  color: white;
}
</style>