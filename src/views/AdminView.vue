<template>
  <h1>ADMIN PAGE</h1>
  <div class="container-fluid">
        <!-- <td><CreateModal :product="product" /></td> -->
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

        <table>
			<thead>
				<tr>
					<th scope="col">FULL NAME</th>
					<th scope="col">EMAIL</th>
					<th scope="col">ADDRESS</th>
					<th scope="col">PHONE NUMBER</th>
                    <th scope="col">BIO</th>
                    <th scope="col">ROLE</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user of users" :key="user.id">
					<!-- <td scope="row"><img v-bind:src="product.image" alt="" /></td> -->
					<td>{{ user.full_name }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.address }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.bio }}</td>
                    <td>{{ user.role }}</td>
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
        this.$store.dispatch("getUsers");
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        user() {
            return this.$store.state.users;
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
    width: 100px;
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