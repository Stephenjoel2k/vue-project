<template>

    <div class="text-center">
        <v-progress-circular v-if="items.length < 1"
        :size="80"
        :width="10"
        color="Black"
        indeterminate
        ></v-progress-circular>
    </div> 

</template>

<script>
export default {
    name: "Preloader",
    props: {
        items: Array
    }
}
</script>


<style scoped>
.v-progress-circular {
  margin: 2rem;
}
</style>