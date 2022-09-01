<template>
  <div class="container-fluid">
        <h1>WELCOME ADMIN</h1>
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
				</tr>
			</thead>
			<tbody>
				<tr v-for="product of products" :key="product.id">
					<td scope="row"><img v-bind:src="product.image" alt="" /></td>
					<td>{{ product.name }}</td>
					<td>{{ product.category }}</td>
					<td>{{ product.price }}</td>
                    <td>{{ product.color }}</td>
                    <td>{{ product.size }}</td>
                    <td class="desc">{{ product.description }}</td>
					<td><button class="btn" @click="deleteProduct(product.product_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">Delete</span></button><UpdateModal :product="product" /></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getProducts");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        deleteProduct(id) {
            return this.$store.dispatch("deleteProduct", id);
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
    width: 100%;
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
    width: 180px;
    padding: 5px;
    text-align: center;
}

button.btn:hover {
    background-color: #fff;
    color: black; 
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