<template>
  <div class="container-fluid">
    <h1>Profile Page</h1>
    <div class="row m-4">
      <div class="col-lg-5 p-3 my-2">
        <div class="img">
          <img src="../assets/profile.png" alt="" />
        </div>
      </div>
      <div class="col-lg-7 p-3 my-2">
        <h4>Account Details</h4>
        <div class="row">
          <div class="col-lg-6">
            <p>FULL NAME:<span class="ms-2">{{ user.full_name }}</span></p>
            <p>ADDRESS:<span class="ms-2">{{ user.address }}</span></p>
          </div>
          <div class="col-lg-6">
            <p>EMAIL:<span class="ms-2">{{ user.email}}</span></p>
            <p>PHONE NUMBER:<span class="ms-2">{{ user.phone }}</span></p>
          </div>
          <div class="col-lg-12">
            <p>BIO:<span class="ms-2">{{ user.bio }}</span></p>
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


@media screen and (max-width: 560px) {

}
</style>
