<template>
  <div class="container-fluid">
        <h1>WELCOME ADMIN<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
        <!-- <td><CreateModal :product="product" /></td> -->
        <div class="admin my-5">
            <router-link href="" to="/adminUser" class="adminUser">
                <button type="button" class="btn btn-lg">USER ADMIN</button>
            </router-link>
        </div>
		<table>
			<thead>
				<tr>
					<th scope="col">IMAGE</th>
					<th scope="col">NAME</th>
					<th scope="col">CATEGORY</th>
					<th scope="col">PRICE</th>
                    <th scope="col">COLOR</th>
                    <th scope="col">SIZE</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">DELETE</th>
                    <th scope="col">EDIT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product of products" :key="product.id">
					<td scope="row"><img v-bind:src="product.image" alt="" /></td>
					<td>{{ product.name }}</td>
					<td>{{ product.category }}</td>
					<td>R{{ product.price }}</td>
                    <td>{{ product.color }}</td>
                    <td>{{ product.size }}</td>
                    <td class="desc">{{ product.description }}</td>
					<td><button class="btn" @click="deleteProduct(product.product_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">DELETE</span></button><UpdateModal :product="product" /></td>
                    <td><!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT</span>
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="exampleModalLabel">EDIT PRODUCT</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="updateProduct(product.product_id)">
                                            <div class="name form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingName" placeholder="Name" v-model="product.name"/>
                                                <label for="floatingName">Name</label>
                                            </div>
                                            <div class="color form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingColor" placeholder="Color" v-model="product.color"/>
                                                <label for="floatingColor">Color</label
                                                >
                                            </div>
                                            <div class="form-floating category">
                                                <select class="form-select mb-2" aria-label="Default select example" v-model="product.category">
                                                    <option value="bedding">Bedding</option>
                                                    <option value="carpet">Carpet</option>
                                                    <option value="mirror">Mirror</option>
                                                    <option value="shelf">Shelf</option>
                                                    <option value="headboard">Headboard</option>
                                                    <option value="lamp">Lamp</option>
                                                    <option value="table">Table</option>
                                                </select>
                                                <label for="floatingCategory">Category</label>
                                            </div>
                                            <div class="price form-floating">
                                                <input
                                                    type="number" class="form-control mb-2" id="floatingPrice" placeholder="Price" v-model="product.price"/>
                                                <label for="floatingPrice">Price</label>
                                            </div>
                                            <div class="description form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingDescription" placeholder="Description" v-model="product.description"/>
                                                <label for="floatingDescription">Description</label>
                                            </div>
                                            <div class="size form-floating mb-2">
                                                <select class="form-select my-1" v-model="product.size">
                                                    <option selected>Open this select menu</option>
                                                    <option value="small">Small</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="big">Big</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="queen">Queen</option>
                                                    <option value="king">King</option>
                                                    <option value="single">Single</option>
                                                </select>
                                                <label for="floatingSize">Size</label>
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
                    </td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
    props: ["product_id"],
    mounted() {
        this.$store.dispatch("getProducts");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.$store.state.product;
        },
    },
    methods: {
        deleteProduct(id) {
            return this.$store.dispatch("deleteProduct", id);
        },
        updateProduct(id) {
            return this.$store.dispatch("updateProduct", id);
        },
    },
}
</script>

<style scoped>
.container-fluid {
    margin: 20px;
    padding: 10px;
    color: white;
}

.container-fluid h1 {
  color: black;
  text-shadow: 2px 3px 4px white; 
}

table {
    width: 1450px;
    padding: 15px;
}

th {
      border: solid 1px white;
      color: black;
}

td {
    border: solid 1px white;
    width: 20px;
}

.admin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.adminUser {
    text-decoration: none;
    color: #04bcff;
}

img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 150px;
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

@media screen and (max-width: 800px) {
  img {
    width: 100px;
  }
  .admin {
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 300px) {
    .admin {
        display: flex;
        flex-direction: column;
    }

    .table {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: fit-content;
    }
}
</style>