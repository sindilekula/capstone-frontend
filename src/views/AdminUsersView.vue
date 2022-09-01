<template>
    <div class="container-fluid">
        <h1>WELCOME ADMIN</h1>
        <div class="admin my-5">
            <router-link href="" to="/adminProduct">
                <button type="button" class="btn btn-lg">PRODUCT ADMIN</button>
            </router-link>
        </div>
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
					<td><button class="btn" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">Delete</span></button><UpdateModal :product="product" /></td>
				</tr>
			</tbody>
	    </table>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getUsers");
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    methods: {
         deleteUser(id) {
            return this.$store.dispatch("deleteUser", id);
        },
    },
};
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

.admin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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