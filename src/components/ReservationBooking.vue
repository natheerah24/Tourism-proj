<template>
  <div>
    <h1 class="booking-head">Reservation Bookings</h1>
    <h5>Reservation Details</h5>

    <form action="https://formspree.io/f/mvoljqra" method="POST">
      <div class="row">
        <div class="col-md-6">
          <label>
            First Name
            <input class="form-control" type="text" name="name" required />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Last Name
            <input class="form-control" type="text" name="name" required />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Phone
            <input class="form-control" type="text" name="phone" required />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Email
            <input class="form-control" type="text" name="email" required />
          </label>
        </div>
        <label>
          City
          <input class="form-control" type="text" name="city" required />
        </label>
        <div class="col-md-3">
          <label>
            Check-in Date
            <input class="form-control" type="date" name="date" required />
          </label>
        </div>
        <div class="col-md-3">
          <label>
            Check-in Time
            <input class="form-control" type="time" name="time" required />
          </label>
        </div>
        <div class="col-md-3">
          <label>
            Check-out Date
            <input class="form-control" type="date" name="date" required />
          </label>
        </div>
        <div class="col-md-3">
          <label>
            Check-out Time
            <input class="form-control" type="time" name="time" required />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Number of adults
            <input class="form-control" type="number" name="number" required />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Number of children
            <input class="form-control" type="number" name="number" required />
          </label>
        </div>
      </div>
      <button type="submit" class="form-control">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Reservation'
};
</script>

<style></style>
