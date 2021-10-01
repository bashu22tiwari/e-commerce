<template>
    <div id="nav">
      <ul>
        <li class="logo">
          <router-link to="/">LOGO</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Category', params: { category: men } }" :key="$route.path">MEN</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Category', params: { category: women } }" :key="$route.path">WOMEN</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Category', params: { category: 'electronics' } }" :key="$route.path">ELECTRONICS</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Category', params: { category: 'jewelery' } }" :key="$route.path">JEWELLERY</router-link>
        </li>
        <li class="input">
          <input type="text" placeholder="Search Product" />
          <button>Search</button>
        </li>
        <li>
          <router-link to="/sign-up">SIGN UP</router-link>
        </li>
        <li>
          <router-link to="/login">LOGIN</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      men: "men's clothing",
      women: "women's clothing"
    };
  }
};
</script>

<style scoped>

#nav {
  background-color:rgb(245, 237, 238);
  margin-bottom: 20px;
  padding: 0px;
  height: 80px;
}


ul {
  list-style-type: none;
  padding: 10px;
  margin: 0px;
}

li{
  display: inline;
  
  vertical-align: center;
  font-size: 15px;
  margin: 0px 10px;
  letter-spacing: 3px;
  font-weight: 600;
}

a{
  text-decoration: none;
  margin: 10px;
  color: rgb(255, 0, 55);
  transform: inherit;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
}

a:hover{
    color: rgb(221, 22, 194);
    text-decoration-color: rgb(221, 22, 194);
    
}

#nav ul .logo {
  margin: 5px 20px 5px 10px;
  font-size: 35px;
}

#nav ul .input input{
    padding: 10px 5px 10px 20px;
    margin-right: 5px;
    margin-left: 30px;
    border-radius: 5px;
    border: 2px solid rgb(255, 0, 55);
    width: 200px;
}

#nav ul .input input:focus{
    outline: none;
}

#nav ul .input button{
    padding: 8px;
    margin-right: 30px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: rgb(255, 0, 55) ;
    border: 1px solid rgb(255, 0, 55);
    font-weight: bold;
}

#nav ul .input button:hover{
    background-color: rgb(221, 22, 194);
}


.loginRegister {
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
}
.loginRegister:hover {
  border: 2px solid #ff3f6c;
}
</style>
