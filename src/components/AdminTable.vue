<template>
  <div id="admin-table">
    <h2>Admin Table</h2>
    <div class="row">
      <h3 class="col-lg-6">Admin List</h3>
     <!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg col-lg-6" data-bs-toggle="modal" data-bs-target="#myModal">Add City</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
                   <div class="modal-content">
                          <div class="modal-header">
                           
                            <h4 class="modal-title"></h4>

                            <h4 class="modal-title text-center">Add a new city</h4>
                          </div>

                          <div class="modal-body">
                            <form @submit.prevent="createCity">
                           <div class="row">

                            <div class="form-group col-lg-12 col-sm-3 col-xs-6">
                                <h5>Add a city</h5>
                                <input type="text" name="city" id="city" v-model="city" placeholder="add City...">
                              </div>

                              <div class="form-group col-lg-12 col-sm-3 col-xs-6">
                                <h5>Add an image</h5>
                                <input type="text" name="image" v-model="img"  id="image" placeholder="add Img Url...">
                              </div>
                              <div class="form-group col-lg-12 col-sm-3 col-xs-6">
                                <h5>Add an desc</h5>
                                <input type="text" name="image" v-model="description"  id="image" placeholder="add desc...">
                              </div>
                          </div>
                          <button type="submit">add City</button>
                          </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>

    <div>
      <table class="table table table-success table-striped" v-for="city of cities" :key="city">
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
          <tr >
            <th scope="row">1</th>
            <td>{{city.id}}</td>
            <td>{{city.city}}</td>
            <td>{{city.img}}</td>
            <td>{{city.description}}</td>
            <td>@mdo</td>
            <td><button @click="deleteCity(city.id)">delete</button></td>
          </tr>
         
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </template>
<script>
export default {
  data(){
    return{
      id:"",
      city: "",
      img: "",
      description:"",
    }
  },
  mounted() {
    this.$store.dispatch("getCities");
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  methods:{
    createCity(){
      return this.$store.dispatch("createCity",{
      city: this.city,
      img: this.img,
      description:this.description,
      })
    },
    deleteCity(id){
      return this.$store.dispatch("deleteCity", id)
    }
  }
};
</script>
<style>
#admin-table{
  background-color: rgb(255, 255, 255);
}
</style>
