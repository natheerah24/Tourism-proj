<template>
    <div id="admin-table"> 
        <h2>Admin Table</h2>
        <ul>
          <li v-bind="city in cities"></li>
        </ul>

        <!-- <div class="row">
        <h1 class="col-lg-6">Admin List</h1>
        <button class="col-lg-6"> Add + </button>
        </div>

<div>
        
            <table class="table table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        
        </div> -->
    </div>
</template>
<script>
export default {
  props: ['cities'],
  data () {
    return{

    }
  }
    
}
</script>
<style>
    
</style>