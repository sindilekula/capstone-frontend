<template>
  <div id="footer" class="container-fluid">
    <div class="row">
        <div class="col-lg-3 my-1">
            <img src="../assets/project-logo-removebg-preview.png" alt="">
        </div>
        <div class="col-lg-2 text-center my-1">
            <h5>Customers</h5>
            <ul class="text-muted">
                <li>Supplier</li>
                <li>Buyers</li>
            </ul>
        </div>
        <div class="col-lg-2 text-center my-1">
            <h5>Company</h5>
            <ul class="text-muted">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="col-lg-2 text-center my-1">
            <h5>Further Information</h5>
            <ul class="text-muted">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div class="col-lg-3 text-center my-1">
            <h5>Follow Us</h5>
            <div class="button mt-3">
                <button type="button" class="btn mx-2"><a target="_blank" href="https://i.postimg.cc/NfgzcjKH/zeoob-com-ubnt8w32r2-photo.png" class="text-dark"><i class="fa-brands fa-facebook" data-toggle="tooltip" data-placement="top" title="FACEBOOK"></i></a></button>
                <button type="button" class="btn mx-2"><a target="_blank" href="https://i.postimg.cc/HkWnXXVk/zeoob-com-ohgmj68bz5-photo.png" class="text-dark"><i class="fa-brands fa-instagram" data-toggle="tooltip" data-placement="top" title="INSTAGRAM"></i></a></button>
                <button type="button" class="btn mx-2"><a target="_blank" href="https://i.postimg.cc/TwVD2GKy/zeoob-com-62x0ffum62-photo.png" class="text-dark"><i class="fa-brands fa-twitter" data-toggle="tooltip" data-placement="top" title="TWITTER"></i></a></button>
                <button type="button" class="btn mx-2"><a target="_blank" href="https://i.postimg.cc/FR26jypd/zeoob-com-0ne6s98dxa-photo.png" class="text-dark"><i class="fa-brands fa-tiktok" data-toggle="tooltip" data-placement="top" title="TIKTOK"></i></a></button>
                <!-- <button type="button" class="btn mx-2"><a href='https://postimg.cc/7GnX4Tpw' target='_blank'><img src='https://i.postimg.cc/7GnX4Tpw/zeoob-com-0ne6s98dxa-photo.png' border='0' alt='zeoob-com-0ne6s98dxa-photo'/></a></button> -->
            </div>
        </div>
        <div class="Copyright">
            <p class="text-white mt-5 pt-5">Copyright ?? 2022 <span class="name ms-2">Fivestar Design</span>.  All rights reserved.</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
    background-color: black;
    min-height: 150px;
}
img {
    width: fit-content;
    height: 75px;
    object-fit: cover;
}
ul li {
    list-style-type: none;
    text-align: center;
}
ul {
    padding: 0;
    margin: 0;
}
button {
    background-color: white;
    border-radius: 50%;
}

button:hover {
    background-color: #04bcff;
    border-radius: 50%;
}

span.name {
    color: #04bcff;
}
</style>