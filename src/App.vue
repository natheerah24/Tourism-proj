<template>
  <v-app>
    <v-main>
      <Nav />
      <Landing />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Landing from "./components/Landing.vue";
export default {
  name: 'App',
  components: {
    Nav,
    Landing
},

  //data: () => ({
    //
 // }),
}
</script>
