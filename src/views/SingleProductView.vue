<template>
  <div v-if="product" class="container-fluid">
    <div v-for="item in product" :key="item.id" class="cards mb-5">
        <div class="row">
            <div class="image">
                <img :src="item.image" class="img-fluid" />
            </div>
            <div class="details mt-5">
                <h5>{{ item.name }}</h5>
                <p class="py-2"><span>Category</span>: {{ item.category }}</p>
                <p class="py-2"><span>Price</span>: R{{ item.price }}</p>
                <p class="py-2"><span>Color</span>: {{ item.color }}</p>
                <p class="py-2"><span>Size</span>: {{ item.size }}</p>
                <p class="py-2"><span>Description</span>: {{ item.description }}</p>
            </div>
            <div class="buttons mb-2">
                <button @click="addToCart(item)" class="btn btn-lg ms-2 my-1">
                    ADD TO CART
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["product.id"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit("updateCart", product);
        },
    },
    mounted() {
        this.$store.dispatch("getProduct", this.$route.params.id);
    },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

.container-fluid {
    display: block;
    margin: 0 auto;
}

.image img {
  width: 400px;
  min-height: 300px;
  object-fit:cover;
  -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
  transform-origin:center;
  transform:perspective(800px) rotateY(25deg);
  transition:0.8s;
}

.cards {
  width:500px;
  min-height:550px;
  display: block;
  margin: 0 auto;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  gap:20px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.4);
}

.cards:hover img {
  opacity:0.3;
}

.cards img:hover {
  transform:perspective(800px)       rotateY(0deg);
  opacity:1;
}

span {
    color: black;
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

.details h5 {
    color: black;
    text-shadow: 2px 2px 2px white;
}

@media screen and (max-width: 556px) {
    .cards {
        width: 350px;
    }
    .image img {
        width: 250px;
    }
}
@media screen and (max-width: 408px) {
    .cards {
        width: 280px;
    }
    .image img {
        width: 200px;
    }
}
</style>