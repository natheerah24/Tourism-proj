<template>
  <div id="admin-table">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h2 class="text-center">Admin Page</h2>
    <div class="row text-display">





 <!-- <option value="All">All</option>
     <option value="Cape Town">Cape Town</option>
      <option value="Durban">Durban</option>
        <option value="Pretoria">Pretoria</option>
        </select>
    <button>search</button> -->
    
     <!-- Trigger the modal with a button -->
<button type="button" id="addBtn" class="btn btn-primary col-lg-1 col-md-2 col-sml-2 text-center" data-bs-toggle="modal" data-bs-target="#myModal">Add City</button>
</div>
<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
                   <div class="modal-content">
                          <div class="modal-header bg-light">
                           
                           

                            <h4 class="modal-title">Add a new city</h4>
                          </div>

                          <div class="modal-body">
                            <form @submit.prevent="createCity">
                           <div class="row">

                            <div class="form-group">
                                <h5 class="pt-2">Add a city</h5>
                                <input type="text" name="city" id="city" v-model="city" placeholder="add City...">
                              </div>

                              <div class="form-group">
                                <h5 class="pt-2">Add an image</h5>
                                <input type="text" name="image" v-model="img"  id="image" placeholder="add Img Url...">
                              </div>
                              <div class="form-group">
                                <h5 class="pt-2">Add an attraction</h5>
                                <input type="text" name="attraction" v-model="description"  id="image" placeholder="add attraction...">
                              </div>
                               <div class="form-group">
                                <h5 class="pt-2">Add a culture</h5>
                                <input type="text" name="culture" v-model="cultures"  id="image" placeholder="add culture...">
                              </div>
                              
                          </div>
                          <button class="btn btn-outline-success mt-3 mb-2" type="submit">add City</button>
                          </form>
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-default btn btn-outline-dark " data-bs-dismiss="modal">X</button>
      </div>
    </div>

  </div>
</div>
    </div>

    <div>
      <table class="table table-success table-borderless table-md" v-for="city of cities" :key="city">
        <thead class="table-info">
          <tr>
            <th scope="col-lg-2">ID</th>
            <th scope="col-lg-2">Cities</th>
            <th scope="col-lg-2">Image URL</th>
            <th scope="col-lg-2">Attraction</th>
            <th scope="col-lg-2">Cultures</th>
             <th colspan="2" class="col-lg-2">CRUD</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th>{{city.id}}</th>
            <td>{{city.city}}</td>
            <td>{{city.img}}</td>
            <td>{{city.description}}</td>
            <td>{{city.cultures}}</td>
            
            <td><button class="btn btn-outline-danger" @click="deleteCity(city.id)">Delete</button></td>
            <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#secondmodal">Update</button></td>
          </tr>
         <!-- Modal -->
<div id="secondmodal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
                    <div class="modal-content">
                          <div class="modal-header bg-light">
                           
                            <h4 class="modal-title">Add a new city</h4>
                          </div>

                          <div class="modal-body">
                            <form @submit="updateCity(city.id)">
                           <div class="row">

                            <div class="form-group">
                                <h5 class="pt-2">Update city</h5>
                                <input type="text" name="city" id="city" v-model="upcity" placeholder="update City...">
                              </div>

                              <div class="form-group">
                                <h5 class="pt-2">Update an image</h5>
                                <input type="text" name="image" v-model="upimg"  id="image" placeholder="update Img Url...">
                              </div>
                              <div class="form-group">
                                <h5 class="pt-2">Update attraction</h5>
                                <input type="text" name="attraction" v-model="updescription"  id="attraction" placeholder="update attraction...">
                              </div>
                              <div class="form-group">
                                <h5 class="pt-2">Update culture</h5>
                                <input type="text" name="culture" v-model="upculture"  id="culture" placeholder="update culture...">
                              </div>
                              
                          </div>
                          <button class="btn btn-outline-success mt-3" type="submit">Update City</button>
                          </form>
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-default btn btn-outline-dark " data-bs-dismiss="modal">X</button>
      </div>
    </div>

  </div>
</div>
    </div>

        </tbody>
      </table>
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
       cultures:"",
       upcity: "",
      upimg: "",
      updescription:"",
      area:'All',
    }
  },
  mounted() {
    this.$store.dispatch("getCities");
  },
  computed: {
    cities() {
      return this.$store.state.cities;
      
    },
        filteredCities() {
      return this.$store.state.cities?.filter((city) => {
        let isMatch = true;
       if (!city.title?.toLowerCase().includes(this.search.toLowerCase()))
       isMatch = false;
        if(this.area !== "All" && city.area !== this.area) isMatch = false;
        return isMatch;
      });
    },
  },
  methods:{
    createCity(){
      return this.$store.dispatch("createCity",{
      city: this.city,
      img: this.img,
      description:this.description,
      cultures:this.cultures,
      })
    },
    deleteCity(id){
      return this.$store.dispatch("deleteCity", id)
    },
      updateCity(id){
      return this.$store.dispatch("updateCity",id, {
      city: this.upcity,
      img: this.upimg,
      description:this.updescription,
      })
},
  },
 

};
</script>
<style>
.table{ padding: 5px;}

#addBtn{
  margin-bottom: 3px;
  margin-left: 15px;
}


/* #admin-table{ overflow-x: hidden;} */
</style>