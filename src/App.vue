<template>
  <nav>
    <Navbar />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> -->
  </nav>
  <router-view/>
    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
#app {
  font-family: 'Special Elite', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  /* background-image: linear-gradient(to left bottom, #091558, #292570, #443789, #5e49a3, #795cbd); */
  overflow: hidden;
  /* min-height: 100vh; */
  background-color: #aa8cda;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f9f9f9;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
