
<template>
  <div id="signup">
    <div id="image">
      <img src="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg" alt="login-image" style="width:600px; height:350px;">
    </div>
    <div id="details">
      <h1>LOG IN YOURSELF</h1>
      <form action="">
        <input type="email" v-model="email" placeholder="Enter Your Email Id">
        <input type="password" v-model="password" placeholder="Enter Your Password">
        <button @click.prevent="login">LOG IN</button>
      </form>  
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name:'Login',
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods: {
        async login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length>0){
                this.email=''
                this.password=''
                localStorage.setItem('user-info',JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'})
                alert('Logged In Succesfully');
            }
            else{
                this.email=''
                this.password=''
                alert('Please Enter Correct Data')
            }
        }
    },
    mounted(){
      if ("user-info" in localStorage) {
          alert('You are already logged in');
          this.$router.push({name:'HomePage'})
      } 
    }

}
</script>

<style scoped>

#signup{
  background-color:rgb(236, 227, 227);
  padding: 40px;
  width: 95vw;
  margin: 50px auto;
  border-radius: 20px;
  color: blue;
}


h1{
  text-decoration: underline;
  margin-bottom: 40px;
}

#image{
  
  float: left;
  margin-left: 50px;
}

#details{
  display: block;
  text-align: center;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: auto;
}

#details input{
  display: block;
  margin: 20px;
  width: 400px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid blue;
}

#details input:focus{
  outline: none;
   border: 2px solid blue;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: blue;
  opacity: 0.7; /* Firefox */
}

button{
  width: 400px;
  padding: 20px;
  outline: none;
  border: none;
  color: blue;
  font-weight: 700;
  font-size: 20px;
  background-color: rgb(137, 209, 214);
}

button:hover{
  background-color: rgb(0, 159, 251);
  color: black;
}

</style>