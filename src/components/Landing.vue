<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/pexels-pixabay-259447.jpg')"
          class="my-5"
          contain
          height="500"
          weight="500"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Cape Town
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Landing',

  // data: () => ({
    
  // }),
}
</script>
