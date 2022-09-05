<template>
  <div class="container-fluid">
    <h1>MY PROFILE<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
    <div class="row my-5 mx-4">
      <div class="col-lg-5 p-3 my-2">
        <div class="img">
          <img src="../assets/profile.png" alt="" />
        </div>
        <div class="button">
          <button type="button" class="btn btn-primary ms-2 my-2" @click="Logout()">LOGOUT</button>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary ms-2 my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT USER</span>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">EDIT USER</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="updateUser(user.user_id)">
                    <div class="fullname form-floating">
                      <input type="text" class="form-control mb-2" id="floatingFullName" placeholder="FULL NAME" v-model="user.full_name"/>
                      <label for="floatingFullName">FULL NAME</label>
                    </div>
                    <div class="email form-floating">
                      <input type="text" class="form-control mb-2" id="floatingEmail" placeholder="EMAIL" v-model="user.email"/>
                      <label for="floatingEmail">EMAIL</label>
                    </div>
                    <div class="address form-floating">
                      <input type="text" class="form-control mb-2" id="floatingAddress" placeholder="ADDRESS" v-model="user.address"/>
                      <label for="floatingAddress">ADDRESS</label>
                    </div>
                    <div class="phone form-floating">
                      <input type="text" class="form-control mb-2" id="floatingPhone" placeholder="PHONE NUMBER" v-model="user.phone"/>
                      <label for="floatingPhone">PHONE NUMBER</label>
                    </div>
                    <div class="bio form-floating">
                      <input type="text" class="form-control mb-2" id="floatingBio" placeholder="BIO" v-model="user.bio"/>
                      <label for="floatingBio">BIO</label>
                    </div>
                    <button type="submit" class="button">Save</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="button btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="button btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 p-3 my-2">
        <h4>Account Details</h4>
        <div class="row">
          <div class="col-lg-6">
            <p>FULL NAME:<span class="user ms-2">{{ user.full_name }}</span></p>
            <p>ADDRESS:<span class="user ms-2">{{ user.address }}</span></p>
          </div>
          <div class="col-lg-6">
            <p>EMAIL:<span class="ms-2">{{ user.email}}</span></p>
            <p>PHONE NUMBER:<span class="user ms-2">{{ user.phone }}</span></p>
          </div>
          <div class="col-lg-12">
            <p>BIO:<span class="user ms-2">{{ user.bio }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // computed: {
  //   user() {
  //     console.log(this.$store.state.user);
  //     return this.$store.state.user;
  //   },
  // },

  props: ["user.user_id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    updateUser(id) {
      return this.$store.dispatch("updateUser", id);
    },
    Logout() {
      this.$store.commit("Logout");
      this.$router.push("/");
    }
  },
  // mounted() {
  //   this.$store.dispatch("getUser", this.$route.params.id);
  // },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.container-fluid {
  overflow: hidden;
}

.container-fluid h1 {
  color: black;
  text-shadow: 2px 3px 4px white;
}

.col-lg-5 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.col-lg-5,
.col-lg-7 {
  border: 1px solid black;
}

.img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
}

.img img {
  width: 100px;
  height: 100px;
}
.display {
  height: 50vh;
  /* width: 100vw; */
  background-color: rgb(56, 52, 52);
}

.profilepicture {
  width: 100px;
  height: 100px;
  border: solid 2px white;
  border-radius: 10px;
}

button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 180px;
    padding: 5px;
    text-align: center;
}

button.btn:hover {
    background-color: #fff;
    color: black; 
}

button.button {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 150px;
    padding: 5px;
    text-align: center;
}

button.button:hover {
    background-color: #04bcff;
    color: black; 
}

label {
    color: #04bcff;
    margin-bottom: 20px;
}

p {
  color: black;
}

span.user {
  color: #fff;
}

@media screen and (max-width: 560px) {

}
</style>
