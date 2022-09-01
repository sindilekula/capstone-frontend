<template>
  <div class="container-fluid">
    <h1>ABOUT US</h1>
    <h5 class="my-5">MEET THE TEAM</h5>
    <div class="team mb-5">
      <div class="row m-3">
        <div class="col-lg-4">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://i.postimg.cc/k4rDphmP/Live-1.jpg">
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>WEB DEVELOPER & DESIGNER</h3>
              <div class="details text-dark">
                <p>Name: <span>Live Maweni</span></p>
                <p>Age: <span>20</span></p>
                <p>Email: <span>livemaweni@gmail.com</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://i.postimg.cc/0ybDfBY9/Sindile-2.jpg">
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>FOUNDER, CEO & MANAGER</h3>
              <div class="details text-dark">
                <p>Name: <span>Sindile Kula</span></p>
                <p>Age: <span>23</span></p>
                <p>Email: <span>Kulasindile@gmail.com</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://i.postimg.cc/kgny7L0g/Leandre-5.jpg">
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>ASSISTANT & ADMINISTRATOR</h3>
              <div class="details text-dark">
                <p>Name: <span>Le-Andre Moritz</span></p>
                <p>Age: <span>19</span></p>
                <p>Email: <span>leandremotitz@gmail.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="row">
        <div class="col-lg-8 mt-5">
          <h4 class="my-3">OUR STORY</h4>
          <p class="my-3">Interior design firm named <span class="name">FIVESTAR DESIGN</span> is located in Cape Town. We design innovative, opulent furniture, lighting, handcrafted items, and modern floor art. Our design is influenced by a timeless classicism and an inquisitive modern aesthetic, with a strong appreciation for natural materials and skilled craftsmanship.</p> 
          <p class="my-3">We provide a complete and individualized interior design service in an effort to lead the way in discriminating modern living.</p>
          <p class="my-3">In order to more effectively convey personal and character-driven storylines via the art of design, we constantly explore and hone our style.</p>
          <p class="my-3">It might occasionally be pretty daunting to furnish your house, at least that's how we felt.</p>
          <p class="my-3"><span class="name">FIVESTAR DESIGN</span> was created to guide people navigate the confusing world of home design. To assist you in making your house come to life, we choose to compile the latest interior design inspirations, tips, and techniques from the huge interior collective.</p>
          <p class="my-3">In order to design and create limited edition and one-of-a-kind rarefied goods, <span class="name">FIVESTAR DESIGN</span> works closely with South Africa's top artists and craftspeople.</p>
        </div>
        <div class="col-lg-4 text-center mt-5">
          <div class="details">
            <div class="card text-center">
              <i class="fa-regular fa-globe my-3"></i>
              <h5>ADDRESS</h5>
              <p>314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
            </div>
            <div class="card text-center">
              <i class="fa-regular fa-envelope my-3"></i>
              <h5>E-MAIL</h5>
              <p>Fivestardesign@gmail.com</p>
              <!-- <p>021 637 7171</p> -->
            </div>
            <div class="card text-center">
              <i class="fa-regular fa-clock my-3"></i>
              <h5>OFFICE TIME</h5>
              <ul>
                <li>MON - FRI : 09H00 - 18H00</li>
                <li>SAT - SUN : 09H00 - 17H00</li>
                <li>PUBLIC HOLIDAYS : 09H00 - 14H00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-fluid h1 {
  color: black;
  text-shadow: 2px 3px 4px white; 
}

body {
  text-align: center;
  padding: 30px;
  background: #f8f4f2;
  font-family: Arial;
}

.a-box {
  display: inline-block;
  width: 240px;
  text-align: center;
}

.img-container {
  height: 230px;
  width: 200px;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
  display: inline-block;
}

.img-container img {
  transform: skew(0deg, -13deg);
  height: 250px;
  margin: -35px 0px 0px 0px;
  object-fit: cover;
}

.img-container img:hover {
  transform: skew(0deg, 13deg);
  transition: 0.3s;
}

.inner-skew {
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  transform: skew(0deg, 13deg);
  font-size: 0px;
  margin: 30px 0px 0px 0px;
  background: #c8c2c2;
  height: 250px;
  width: 160px;
}

.inner-skew:hover {
  transform: skew(0deg, -13deg);
  transition: 0.3s;
}

.text-container {
  box-shadow: 10px 10px 10px 10px rgb(0, 0, 0);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
}

.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: #04bcff;
  font-size: 18px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
}

.col-lg-8 p {
  font-size: 20px;
}

p.my-3 {
   margin: 0;
}

.details {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  width: 300px;
  margin: 20px;
  padding: 15px;
  color: black;
  background-color: #fff;
}

ul li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}

i {
  color: #04bcff;
  font-size: 40px;
}

.name {
  color: black;
}
</style>