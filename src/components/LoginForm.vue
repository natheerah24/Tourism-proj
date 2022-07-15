<template>
  <div>
     <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1 class="mt-5">Admin Login</h1>
    <div class="container shadow">
      <form @submit.prevent="login">
        <input
          type="email"
          v-model="email"
          placeholder="email"
          class="user_input"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="user_input"
          required
        />
        <div class="form_footer">
          <div><input type="checkbox" id="" /><label>Remember Me</label></div>
          <a href="#">Forgot Password?</a>
        </div>
        <button
          type="submit"
          class="rounded-pill bg-primary mt-3"
          @click="goToAdmin"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      this.$store.state.user;
    },
  },
  methods: {
    Login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    goToAdmin() {
      if (
        (this.email === "selbysabelomdashe@gmail.com" &&
          this.password === "password") ||
        (this.email === "natheerah24@gmail.com" &&
          this.password === "password") ||
        (this.email === "raaidlatiegbr@gmail.com" &&
          this.password === "password") ||
        (this.email === "saliwalive@gmail.com" &&
          this.password === "password") ||
        (this.email === "json@gmail.com" && this.password === "password")
      ) {
        this.$router.push("/admin");
      } else {
        window.alert("Can't log you in.. Please check your login details");
      }
    },
  },
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.user_input {
  width: 300px;
  height: 30px;
  background-color: white;
}
.check {
  display: flex;
}
.container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  background-color: aqua;
  padding: 50px;
  width: fit-content;
}
.form_footer {
  display: flex;
  justify-content: space-between;
}
</style>















