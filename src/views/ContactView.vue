<template>
  <div class="container-fluid">
        <h1>CONTACT US<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
        <div class="row my-5">
            <div class="col-lg-4 p-2">
                <div class="">
                    <img src="../assets/phone-removebg-preview.png" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-8">
                <form target="_blank" action="https://formspree.io/f/xqknwllo" method="POST" class="row">
                    <div class="col-md-6 p-2">
                        <label for="inputFirst" class="form-label">FIRST NAME</label>
                        <input type="text" name="first" class="form-control p-2" id="inputFirst" placeholder="Type your name here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputLast" class="form-label">LAST NAME</label>
                        <input type="text" name="last" class="form-control p-2" id="inputLast" placeholder="Type your surname here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputEmail4" class="form-label">EMAIL ADDRESS</label>
                        <input type="email" name="email" class="form-control p-2" id="inputEmail4" placeholder="Type your email address here..." required>
                    </div>
                    <div class="col-md-6 p-2">
                        <label for="inputPhone" class="form-label">PHONE NUMBER</label>
                        <input type="text" name="phone" class="form-control p-2" id="inputPhone" placeholder="Type your phone number here..." required>
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputSubject" class="form-label">SUBJECT</label>
                        <input type="text" name="subject" class="form-control p-2" id="inputSubject" placeholder="Type what you want to talk about..." required>
                    </div>
                    <div class="col-12 p-2">
                        <label for="inputMessage" class="form-label">MESSAGE</label>
                        <textarea class="form-control p-2" id="inputMessage" placeholder="Type your message here..."></textarea>
                    </div>
                    <!-- <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div> -->
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary p-2 mt-2">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

.container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px white; 
}

.card {
    height: 400px
}

img {
    height: 400px;
    width: 400px;
    object-fit: cover;
}

/* i {
    color: crimson;
    font-size: 40px;
} */

form {
    margin: 20px;
    padding: 10px;
}

.col-lg-6 input {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 10px;
    height: 40px;
    width: 350px;
}

.btn-primary {
    color: #fff;
    background-color: black;
    border-color: #fff;
    width: 200px;
}

button.btn:hover {
    background-color: #fff;
    color: black; 
}

@media screen and (max-width: 470px) {
    .card {
        width: 300px;
    }
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
}
</style>