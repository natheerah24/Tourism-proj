<template>
   <section id="testimonials" class="mb-3">
  <div class="container-fluid">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>

    </div>
    <div class="carousel-inner bg-dark">
      <div class="carousel-item active">

        <div class="carousel-caption  d-md-block">
          <img src="./Images/godwin-2.jfif" alt="" class="img-fluid">
          <h5>Godwin Dzvapatsva</h5>
          <p>Lecturer</p>
          <hr>
          <p><i class="fa-solid fa-quote-left"></i> 
        </div> <i class="fa-solid fa-quote-right"></i></p>
      </div>
      <div class="carousel-item">

        <div class="carousel-caption d-md-block">
          <img src="./Images/Lee.png" alt="" class="img-fluid lee">
          <h5>Le-Andre Moritz</h5>
          <p>Collegue</p>
          <hr>
          <p><i class="fa-solid fa-quote-left"></i> <i class="fa-solid fa-quote-right"></i></p>
        </div>
      </div>
      <div class="carousel-item">

        <div class="carousel-caption d-md-block">
          <img src="./Images/LUNGA.PNG" alt="" class="img-fluid">
          <h5>Lunga Booi</h5>
          <p>Collegue</p>
          <hr>
          <p><i class="fa-solid fa-quote-left"></i><i class="fa-solid fa-quote-right"></i></p>
        </div>
      </div>
      <div class="carousel-item">

        <div class="carousel-caption d-md-block">
          <img src="./Images/Ashton (4).JPG" alt="" class="img-fluid ash">
          <h5>Ashton Abrahams</h5>
          <p>Collegue</p>
          <hr>
          <p><i class="fa-solid fa-quote-left"></i> <i class="fa-solid fa-quote-right"></i></p>
        </div>
      </div>
      <div class="carousel-item">

        <div class="carousel-caption d-md-block">
          <img src="./Images/siyolise.jpg" alt="" class="img-fluid">
          <h5>Siyolise Mekuto</h5>
          <p>Collegue</p>
          <hr>
          <p><i class="fa-solid fa-quote-left"></i> efforts. <i class="fa-solid fa-quote-right"></i></p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</section>
</template>
<script>
export default {
    name: 'Slider'
}
</script>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
#testimonials {
  height: 500px;
  padding-top: 50px;
}

.carousel-inner {
  /* height: 500px; */
  padding-top: 20px;
  padding-bottom: 0;
}

.carousel-item {
  height: 500px;
}

.carousel-caption > img {
  height: 300px;
}
</style>







