<template>
    <div id="admin-table"> 
        <h2>Admin Table</h2>
        <ul v-for="city of cities"
        :key="city.id">
          <li>
            {{ city.city }}
            <div v-for="culture in city.cultures" :key="culture.id">

            {{ culture.culture }}
            </div>
          </li>
        </ul>

        <div class="row">
        <h1 class="col-lg-6">Admin List</h1>
        <button class="btn btn-success col-lg-6"> Add + </button>
        </div>

<div>
        
            <table class="table table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Cities</th>
      <th scope="col">Cultures</th>
      <th scope="col">Attractions</th>
       <th scope="col">Attractions</th>
        <th scope="col">Attractions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Drol</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>

<td>@fat</td>
        
        </div> 
    </div>
</template>
<script>
export default {
mounted () {
  this.$store.dispatch("getCities")
},
computed: {
  cities() {
    return this.$store.state.cities;
  },
},

}
</script>
<style>
    
</style>