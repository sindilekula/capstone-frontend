<template>
    <div class="container-fluid">
        <h1>My Cart</h1>
        <div class="row">
            <div class="col-lg-8">
                <div class="box">
                    <div class="content">
                        <div class="cards" v-for="product in cartproducts" :key="product.id">
                            <img :src="product.image" class="mb-2" alt="food" />
                            <div class="cart-content">
                                <h3 class="ms-5">{{ product.brand }}</h3>
                                <p class="d-flex justify-content- gap-3">
                                <span class="ms-5">Subtotal: R{{ product.price }}</span>
                                </p>
                                <button @click="deleteFromCart(product.product_id)" class="btn btn-lg ms-5">
                                <i class="fa fa-trash"></i>
                                <span class="btn2">Remove</span>
                                </button>
                                <div class="right-bar">
                                <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <h5>CART SUMMARY</h5>
                    <div class="cart-details">
                        <div class="row my-3">
                            <p>Subtotal:</p>
                            <p>Discount:</p>
                            <p>Shipping:</p>
                        </div>
                        <div class="row my-3">
                            <p>R{{ calculatePrice }}</p>
                            <p>R0</p>
                            <p>Free shipping</p>
                        </div>
                    </div>
                    <!-- <router-link to="/checkout"> -->
                        <button type="submit" class="btn btn-lg my-2" @click="deleteCart(product)">Checkout</button>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            total: "",
        };
    },
    methods: {
        deleteFromCart(id) {
            return this.$store.dispatch("deleteFromCart", id);
        },
         deleteCart(id) {
            return this.$store.dispatch("deleteCart", id);
        },
    },
    computed: {
        calculatePrice() {
            return this.$store.state.cart.reduce((accumulator, currentValue) => {
                return accumulator + parseInt(currentValue.price);
            }, 0);
        },
        cartproducts() {
            return this.$store.state.cart;
        },
        product() {
            return this.$store.state.product;
        },
    },
};
</script>

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

img {
    width: 350px;
    height: 150px;
    object-fit: cover;
}

.cards {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
    border: solid 1px black;
    justify-content: space-between;
    background-color: #fff;
    color: black;
}

.cart-content {
    display: flex;
    flex-direction: row;
}

.card {
    margin: 20px;
    padding: 10px;
    border: solid 1px black;
    color: black;
    background-color: #fff;
}

.cart-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

button.btn {
    background-color: black;
    color: #fff;
    width: 150px;
    height: 50px;
}

button.btn:hover {
   background-color: #fff;
  color: black;
}

@media screen and (max-width: 630px) {
    .cart-content {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 420px) {
    .cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>