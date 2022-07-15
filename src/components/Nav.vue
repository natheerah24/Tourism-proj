<template>
  <div class="navigation">
    <nav>
      <ul class="nav-type">
        <li>
          <router-link to="/" class="active mx-2">Home </router-link>
        </li>
        <li>
          <router-link to="/about" class="active mx-2">About </router-link>
        </li>
        <li>
          <router-link to="/login" class="active mx-2">Login </router-link>
        </li>
        <li>
          <router-link to="/reservation" class="active mx-2"
            >Reservation
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
ul {
  list-style-type: none;
  display: flex;
  padding: 18px 0;
  background-size: 400% 400%;
  background: rgb(6, 1, 1);
  background: linear-gradient(
    60deg,
    rgba(6, 1, 1, 1) 98%,
    rgba(43, 35, 193, 1) 100%
  );
  animation: 12s myGradient infinite;
  border-radius: 40px;
  box-shadow: 3px 3px 20px #FF3352;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
@keyframes myGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.fa-search {
  transition: 1s;
  cursor: pointer;
  margin-left: 30px;
}
.active {
  transition: 1s;
}
.active1 {
  transition: 1s;
}
.active2 {
  transition: 1s;
}
.active3 {
  transition: 1s;
}
li a {
  color: #fff;
  text-decoration: none;
  padding: 45px 45px;
  font-family: verdana;
  font-weight: lighter;
  font-size: 24px;
  letter-spacing: 1px;
  opacity: 0.9;
}
.navigation {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 8%;
  left: 50%;
}
.fa-search:hover {
  color: #fff;
  animation: 1.5s myFlash linear infinite;
  text-shadow: 2px 2px 30px #fff;
  transition: 2s;
}
.active3:hover {
  color: #fff;
  animation: 1.5s myFlash linear infinite;
  text-shadow: 2px 2px 30px #fff;
  transition: 2s;
  margin-top: -100px;
}
.active2:hover {
  color: #fff;
  animation: 1.5s myFlash linear infinite;
  text-shadow: 2px 2px 30px #fff;
  transition: 2s;
}
.active1:hover {
  color: #fff;
  animation: 1.5s myFlash linear infinite;
  text-shadow: 2px 2px 30px #fff;
  transition: 2s;
}
.active:hover {
  color: #fff;
  animation: 1.5s myFlash linear infinite;
  text-shadow: 2px 2px 30px #fff;
  transition: 2s;
}
</style>









