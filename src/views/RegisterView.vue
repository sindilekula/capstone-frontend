<template>
  <div class="container-fluid">
    <h1>REGISTER</h1>
    <div class="output my-5">
        <form target="_blank" action="https://formspree.io/f/xqknwllo" method="POST" class="row">
            <div class="col-md-12 p-2">
                <label for="inputFull" class="form-label">FULL NAME</label>
                <input type="text" v-model="full_name" class="form-control p-2" id="inputFull" placeholder="Type your fullname here..." required>
            </div>
            <div class="col-md-12 p-2">
                <label for="inputEmail" class="form-label">EMAIL</label>
                <input type="text" v-model="email" class="form-control p-2" id="inputEmail" placeholder="Type your email here..." required>
            </div>
            <div class="col-md-12 p-2">
                <label for="inputPassword" class="form-label">PASSWORD</label>
                <input type="password" v-model="password" class="form-control p-2" id="inputPassword" placeholder="Type your password here..." required>
            </div>
             <div class="col-md-12 p-2">
                <label for="inputAddress" class="form-label">ADDRESS</label>
                <input type="text" v-model="address" class="form-control p-2" id="inputAddress" placeholder="Type your address here..." required>
            </div>
             <div class="col-md-12 p-2">
                <label for="inputPhone" class="form-label">PHONE</label>
                <input type="text" v-model="phone" class="form-control p-2" id="inputPhone" placeholder="Type your phone number here..." required>
            </div>
             <div class="col-md-12 p-2">
                <label for="inputBio" class="form-label">BIO</label>
                <input type="text" v-model="bio" class="form-control p-2" id="inputBio" placeholder="Type your bio here..." required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary p-2 mt-2" @click.prevent="Register()">Register</button>
            </div>
        </form>
        <div class="mt-5">
        <p>
          Already got an account?
          <span
            ><router-link href="#" to="/login" class="login"
              >Log In</router-link
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            full_name: "",
            email: "",
            password: "",
            address: "",
            phone: "",
            bio: "",
            role: "user",
        };
    },
    methods: {
        Register() {
            this.$store.dispatch("Register", {
                full_name: this.full_name,
                email: this.email,
                password: this.password,
                address: this.address,
                phone: this.phone,
                bio: this.bio,
                role: "user",
            })
        }
    }
}
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
  height: 700px;
  box-shadow: 5px 5px 5px #000122;
  /* text-align: center; */
  display: block;
  margin: 0 auto;
  border-radius: 30px;
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
.login {
    text-decoration: none;
}
</style>