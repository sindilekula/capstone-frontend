<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/project-logo-removebg-preview.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <div v-if="user" class="d-flex">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" href="#" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/profile">Account</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/cart">Cart</router-link>
          </li>
        </div>
        <div v-else class="d-flex">
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" href="#" to="/register">Register</router-link>
          </li>
        </div>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
   computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
nav.navbar {
    display: block;
    margin: 0 auto;
    /* background-color: rgba(0, 0, 0, 0.1); */
    overflow: hidden;
}
#navbarNav {
    margin-left: 150px;
}

img {
    width: 150px;
    height: 75px;
    object-fit: cover;
}
.d-flex {
    margin-left: 400px;
}
a:active,
a:focus {
  text-decoration: underline;
  color: #fff!important;
}

/* .collapse {
    display: flex;
    justify-content: center;
} */

#navbarNav {
  margin: 0;
}
</style>