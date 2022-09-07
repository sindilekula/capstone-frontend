import router from "@/router";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const api = "https://capstone-sindile.herokuapp.com";
console.log(api);

export default createStore({
  state: {
    product: null,
    products: null,
    user: null,
    users: null,
    token: null,
    asc: true,
    cart: [],
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    clearCart: (state, cart) => {
      state.cart = cart;
    },
    sortProductsByPrice: (state) => {
      state.products = state.products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    sortProductsByName: (state) => {
      state.products = state.products.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    Logout(state){
      (state.user = ""), (state.token = "")
    },
  },
  actions: {
    // LOGIN USER
    Login: async (context, payload) => {
      fetch(`${api}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Saveing token to the store
            context.commit("setToken", data.token);

            // Once token
            // Verify Route
            fetch(`${api}/users/users/verify`, {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                context.commit("setUser", data.user);
                alert("YOU ARE SUCCESSFULLY LOGGED IN");
                router.push("/");
                // router.push({
                //   name: "products",
                // });
              });
          }
          //   });
          // router.push({
          //   name: "products",
        });
    },

    // REGISTER USER
    Register: async (context, payload) => {
      fetch(`${api}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: payload.full_name,
          email: payload.email,
          password: payload.password,
          address: payload.address,
          phone: payload.phone,
          bio: payload.bio,
          role: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
        alert("Registration was successful");
    },

    // GET ALL PRODUCTS
    getProducts: async (context) => {
      fetch(`${api}/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setProducts", data);
            // console.log(data);
          }
        });
    },

    // GET A SINGLE PRODUCT BY ID
    getProduct: async (context, id) => {
      fetch(`${api}/products/${id}`)
        .then((res) => res.json())
        .then((product) => {
          console.log(product), context.commit("setProduct", product);
        });
    },

    // GET ALL USERS
    getUsers: async (context) => {
      fetch(`${api}/users`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            console.log(data);
            context.commit("setUsers", data);
            // console.log(data);
          }
        });
    },

    // GET USER USING ID
    getUser: async (context, id) => {
      fetch(`${api}/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user), context.commit("setUser", user);
        });
    },

    // CART
    // SHOW CART
    getCart: async (context) => {
      fetch(`${api}/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(data);
          } else {
            context.commit("setProducts", data);
          }
        });
    },

    // ADD PRODUCT TO CART
    addToCart: async (context, id) => {
      console.log(id);
      alert("ADDED PRODUCT TO CART");
    },

    // DELETE PRODUCT FROM CART
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter(
        (product) => product.product_id != id
      );
      context.commit("removeFromCart", newCart);
    },

    // CHECKOUT
    deleteCart: async (context, id) => {
      const emptyCart = context.state.cart.filter(
        (product) => product.id != id
      );
      context.commit("clearCart", emptyCart);
      alert("ORDER SUCCESSFULLY PLACED");
    },

    // ADDING A PRODUCT
    addProduct: async (context, product,token) => {
      console.log(token);
      fetch(`${api}/products`, {
        method: "POST",
        body: JSON.stringify({
          name: product.name,
          category: product.category,
          price: product.price,
          color: product.color,
          size: product.size,
          description: product.description
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": product.token,
        },
      })
        .then((response) => response.json())
        .then((productdata) => {
        console.log(productdata);
        context.commit("setProducts")
      });
    },

    // DELETE PRODUCT USING ID
    deleteProduct: async (context, id) => {
      fetch(`${api}/products/${id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
    },

    
    // UPDATE PRODUCT USING ID
    updateProduct: async (context, product) => {
      const {
        name,
        category,
        price,
        color,
        size,
        description,
      } = product;
      fetch("https://capstone-sindile.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          category: category,
          price: price,
          color: color,
          size: size,
          description: description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((product) => context.commit("setProduct", product));
    },

    // addingProduct: async (context, product) => {
    //   const {
    //     name,
    //     image,
    //     category,
    //     price,
    //     color,
    //     size,
    //     description,
    //   } = product;
    //   fetch(`${api}/products`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name: name,
    //       image: image,
    //       category: category,
    //       price: price,
    //       color: color,
    //       size: size,
    //       description: description,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //   .then((response) => response.json())
    //   .then((json) => context.commit("setProduct", json));
    // },

    // DELETE USER USING ID
    deleteUser: async (context, id) => {
      fetch(`${api}/users/` + id, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getUser"));
      router.push({
        name: "home",
      });
    },

    // UPDATE USER BY ID
    updateUser: async (context, user) => {
      const {
        full_name,
        email,
        address,
        phone,
        bio,
      } = user;
      fetch(`${api}/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          address: address,
          phone: phone,
          bio: bio,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setUser", json));
    },
  },
  modules: {},
  plugins: [createPersistedState()]
});
