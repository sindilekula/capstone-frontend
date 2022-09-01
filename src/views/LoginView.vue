<template>
  <div class="container-fluid">
     <h1>LOGIN<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
     <div class="output mt-5">
        <form target="_blank" action="https://formspree.io/f/xqknwllo" method="POST" class="row">
            <div class="col-md-12 p-2">
                <label for="inputEmail" class="form-label">EMAIL</label>
                <input type="text" v-model="email" class="form-control p-2" id="inputEmail" placeholder="Type your email here..." required>
            </div>
            <div class="col-md-12 p-2">
                <label for="inputPassword" class="form-label">PASSWORD</label>
                <input type="password" v-model="password" class="form-control p-2" id="inputPassword" placeholder="Type your password here..." required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary p-2 mt-2" @click.prevent="Login()">LOGIN</button>
            </div>
        </form>
        <div class="mt-5">
        <p>
          Not a member?
          <span
            ><router-link href="#" to="/register" class="register"
              >Register</router-link
            ></span
          >
        </p>
      </div>
      <div v-if="user">Welcome {{ user.full_name }}</div>
     </div>
  </div>
</template>

<script>
export default {
    props: ["user.user_id"],
    computed: {
        user() {
        return this.$store.state.user;
        },
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        Login() {
            this.$store.dispatch("Login", {
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
.container-fluid {
    min-height: 100vh;
}

.container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px white; 
}

.output {
    background-color: rgba(0, 0, 0, 0.4);
  border: solid 3px black;
  margin: 20px;
  padding: 10px;
  width: 300px;
  height: 500px;
  box-shadow: 5px 5px 5px #000122;
  /* text-align: center; */
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}
input {
    border: none;
}
.btn-primary {
    color: #fff;
    background-color: black;
    border-color: #fff;
    width: 200px;
}
.btn-primary:hover {
    color: black;
    background-color: #fff;
    border-color: black;
    width: 200px;
}
.register {
    text-decoration: none;
}
</style>