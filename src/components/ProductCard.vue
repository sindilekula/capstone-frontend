<template>
  <div class="container-fluid">
    <div class="products">
        <div class="cards" v-for="product in Products" :key="product.product_id" >
            <div class="row">
                <div class="col-6">
                    <img :src="product.image" class="img-fluid" />
                </div>
                <div class="col-6">
                    <h5>{{ product.name }}</h5>
                    <p class="py-2"><span>Category</span>: {{ product.category }}</p>
                    <p class="py-2"><span>Price</span>: R{{ product.price }}</p>
                    <p class="py-2"><span>Color</span>: {{ product.color }}</p>
                    <p class="py-2"><span>Size</span>: {{ product.size }}</p>
                    <p class="py-2"><span>Description</span>: {{ product.description }}</p>
                </div>
                <div class="buttons mb-2">
                    <router-link :to="{ name: 'product', params: { id: product.product_id} }">
                    <button class="btn btn-lg ms-2 my-1">
                        VIEW PRODUCT
                    </button>
                    </router-link>
                    <button @click="addToCart(product)" class="btn btn-lg ms-2 my-1">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
        <!-- <div v-for="product of filteredProducts" :key="product.product_id" :product="product"></div> -->
    </div>
  </div>
</template>

<script>
export default {
    props: ["product"],
    computed: {
        Products() {
            return this.$store.state.products;
        },
        filteredProducts() {
            return this.$store.state.products?.filter((product) => {
                let isMatch = true;
                if (!product.name?.toLowerCase().includes(this.search.toLowerCase()))
                isMatch = false;
                if (this.category !== "all" && product.category !== this.category) isMatch = false;
                return isMatch;
            });
        },
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

/* .card {
    width: 400px;
    height: 400px;
    border: 1px solid black;
} */
.col-6 img {
  width: 300px;
  height: 400px;
  object-fit:cover;
  
  -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
  
  transform-origin:center;
  transform:perspective(800px) rotateY(25deg);
  transition:0.8s;
}
.cards {
  width:600px;
  min-height:550px;
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  gap:20px;
  border: 1px solid black;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  
}
.cards:hover img {
  opacity:0.3;
}
.cards img:hover {
  transform:perspective(800px)       rotateY(0deg);
  opacity:1;
}
.products {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
    padding: 10px;
}

.col-6 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
}

span {
    color: black;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

input {
    min-width: 700px;
    padding: 10px;
}

select {
    width: 300px;
    height: 49px;
    padding: 10px;
}

.col-6 h5 {
    color: black;
    text-shadow: 2px 2px 2px white;
}
</style>