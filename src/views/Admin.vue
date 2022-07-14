<template>
  <div>
    <h1>Welcome Admin</h1>
    <table class="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>IMAGE</th>
          <th>CITY</th>
          <th>PLACES</th>
          <th>CULTURES</th>
          <th>IMG-URL</th>
          <th>VIDEO-URL</th>
          <th>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add City
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Add City Details
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="submit">
                      <input type="text" placeholder="City Name" />
                      <input type="text" placeholder="ImageURL" />
                      <label>Places To Go:</label>
                      <textarea id="" cols="30" rows="10"></textarea>
                      <label>Cultures:</label>
                      <button type="button" class="btn btn-primary">
                        Save City
                      </button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}
</style>
