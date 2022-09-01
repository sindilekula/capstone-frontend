<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-5 details">
        <header>
          <h1>WELCOME TO FIVESTAR DESIGN</h1>
          <h4>A place where you find the best interior designs</h4>
          <p class="text-muted mt-2">We create elegant, modern living spaces, each a unique story tailored to the client's personal requirements.</p>
        </header>
        <buttons> 
          <div class="buttons d-flex justify-content-center mt-5 mb-5">
            <router-link to="/login">
              <button type="button" class="btn btn-lg ms-3 my-2">
                LOGIN
              </button>
            </router-link>
            <router-link to="/register">
              <button type="button" class="btn btn-lg ms-3 my-2">
                REGISTER
              </button>
            </router-link>
          </div>
        </buttons>
      </div>
      <div class="col-lg-7">
        <img alt="logo" src="../assets/project-logo-removebg-preview.png" class="img-fluid"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container-fluid {
  min-height: 100vh;
}

h1 {
  font-size: 50px;
  color: black;
}

img {
  height: 60vh;
  object-fit: cover;
}

button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 200px;
    padding: 5px;
    text-align: center;
}

button.btn:hover {
    background-color: #fff;
    color: black; 
}

.row {
  margin-top: 100px;
}

.img-fluid {
      /* height: 600px; */
      position: relative;
      animation: up-down 1.9s infinite ease-in-out alternate;
    }

    @keyframes up-down{
    from{
    transform: translatey(20px);
  }
    to{
    transform: translatey(-20px);
  }
}


@media only screen and (max-width: 1290px) {
  .buttons{
    display: flex;
    flex-direction: column;
  }
  img {
    height: 30vh;
  }
  .img-fluid {
      /* height: 600px; */
      position: relative;
      animation: up-down 1.9s infinite ease-in-out alternate;
    }

    @keyframes up-down{
    from{
    transform: translatey(10px);
  }
    to{
    transform: translatey(-10px);
  }
}
}
</style>
