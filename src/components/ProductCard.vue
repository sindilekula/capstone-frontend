<template>
  <div class="container-fluid">
    <div class="card" v-for="product in Products" :key="product.product_id">
        <img :src="product.image" alt="">
        <div class="details">
            <h3>{{ product.name }}</h3>
            <p>{{}}</p>
            <p></p>
            <p></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["products"],
}
</script>

<style scoped>
.card {
    width: 400px;
    height: 400px;
    border: 1px solid black;
}
</style>