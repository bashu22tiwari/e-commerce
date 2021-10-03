<template>
  <div id="signup">
    <div id="image">
      <img src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" alt="signup-image" style="width:500px; height:500px;">
    </div>
    <div id="details">
      <h1>SIGN UP YOURSELF</h1>
      <form>
        <input type="text" v-model="name" placeholder="Enter Your Name">
        
        <input type="email" v-model="email" placeholder="Enter Your Email Id">
        
        <input type="text" v-model="contact" placeholder="Enter Your Contact Number">
       
        <input type="password" v-model="password" placeholder="Create Your Password">
        
        <button @click.prevent="signup">SIGN UP</button>
      </form> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Signup',
  data(){
    return {
      name:'',
      email:'',
      contact:'',
      password:''
    }
  },
  methods: {
    async signup() {
      if(this.name=='' || this.email=='' || this.contact=='' || this.password==''){
        alert('Please Fill All The Coloums Properly')
      }
      else{
        let result = await axios.post('http://localhost:3000/user',{
            name: this.name,
            email: this.email,
            password:this.password,
            contact:this.contact
          })
           this.name = '';
           this.email = '';
           this.password = '';
           this.contact = '';
           if(result.status==201){
              //  localStorage.setItem('user-info',JSON.stringify(result.data))
               this.$router.push({name:'Login'})
               alert('Sign Up Done Succesfully');
            }
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
  padding: 20px;
  width: 95vw;
  margin: 50px auto;
  border-radius: 20px;
  color: red;
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
}

#details input{
  display: block;
  margin: 20px;
  width: 400px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid red;
}

#details input:focus{
  outline: none;
   border: 2px solid red;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 0.7; /* Firefox */
}

button{
  width: 400px;
  padding: 20px;
  outline: none;
  border: none;
  color: red;
  font-weight: 700;
  font-size: 20px;
  background-color: rgb(223, 175, 175);
}

button:hover{
  background-color: rgb(214, 133, 197);
  color: black;
}

</style>