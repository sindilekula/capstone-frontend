<template>
    <div class="container-fluid">
        <h1>WELCOME ADMIN<span class="text-white ms-2"><i class="fa-solid fa-exclamation"><i class="fa-solid fa-exclamation ms-2"></i></i></span></h1>
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
                    <th scope="col">DELETE</th>
                    <th scope="col">EDIT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) of users" :key="index">
					<td>{{ user.full_name }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.address }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.bio }}</td>
                    <td>{{ user.role }}</td>
					<td><button class="btn" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">DELETE</span></button><UpdateModal :product="product" /></td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#modal${index}`">
                            <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT</span>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="`modal${index}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="(user, index) of users" :key="index">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="exampleModalLabel">EDIT USER</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="updateUser(user.user_id)">
                                            <div class="fullname form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingFullName" placeholder="FULL NAME" v-model="user.full_name"/>
                                                <label for="floatingFullName">FULL NAME</label>
                                            </div>
                                            <div class="email form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingEmail" placeholder="EMAIL" v-model="user.email"/>
                                                <label for="floatingEmail">EMAIL</label
                                                >
                                            </div>
                                            <div class="address form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingAddress" placeholder="ADDRESS" v-model="user.address"/>
                                                <label for="floatingAddress">ADDRESS</label>
                                            </div>
                                            <div class="phone form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingPhone" placeholder="PHONE NUMBER" v-model="user.phone"/>
                                                <label for="floatingPhone">PHONE NUMBER</label>
                                            </div>
                                            <div class="bio form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingBio" placeholder="BIO" v-model="user.bio"/>
                                                <label for="floatingBio">BIO</label>
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
    mounted() {
        this.$store.dispatch("getUsers");
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
         deleteUser(id) {
            return this.$store.dispatch("deleteUser", id);
        },
         updateUser(id) {
            return this.$store.dispatch("updateUser", id);
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
    width: 1450px;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.4);
}

.admin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
th {
    border: solid 1px white;
    background-color: #04bcff;
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