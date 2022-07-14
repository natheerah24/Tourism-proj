<template>
  <div id="admin-table">
    <h2>Admin Table</h2>
    <div class="row">
      <h3 class="col-lg-6">Admin List</h3>
      <button class="btn btn-success col-lg-6">Add +</button>
    </div>

    <div>
      <table class="table table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Cities</th>
            <th scope="col">Images</th>
            <th scope="col">Attraction1</th>
            <th scope="col">Attraction2</th>
            <th scope="col">Cultures</th>
          </tr>
        </thead>
        <tbody>
          {{cities}}
          <tr >
            <th scope="row">1</th>
            <td>Drol</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getCities");
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
};
</script>
<style></style>
