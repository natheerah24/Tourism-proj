<template>
  <div>
    <h1>Login</h1>
    <div class="container">
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
          class="rounded-pill bg-primary"
          @click="goToAdmin()"
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
    admin() {
      this.$store.state.admin;
    },
  },

  name: "Login",

  methods: {
    Login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },

    goToAdmin() {
      this.$router.push("/admin");
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
  height: 25px;
}

.check {
  display: flex;
}

.container {
  display: flex;
  justify-content: center;
}

.form_footer {
  display: flex;
  justify-content: space-between;
}
</style>
