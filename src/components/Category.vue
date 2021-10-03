<template>
  
<div id="HomePage">
  <h1>{{ this.category.toUpperCase() }}</h1>

  <div id="filter">
    <div id="price-filter">
      <h3>Price : </h3>
      <button @click="htlprice">High To Low</button>
      <button @click="lthprice">Low To High</button>
    </div>

    <div id="rating-filter">
      <h3>Ratings : </h3>
      <button @click="htlrating">High To Low</button>
      <button @click="lthrating">Low To High</button>
    </div>    
  </div>
  
<div class="container">
    <div class="element" v-for="item in items" :key="item.id">
      <div id="category">
                {{ item.category.toUpperCase() }}
        </div>
        
        <div>
            <router-link :to="{ name: 'CategoryDetail', params: { id: item.id } }">
                <div>
                    <img :src="item.image" style="height:200px; width:200px; border-radius:20px;">
                </div>
            </router-link>
        </div>

         <div id="price">
                Rs. {{ item.price }}
        </div>

        <div id="title">
            <router-link :to="{ name: 'CategoryDetail', params: { id: item.id } }">
                {{ item.title }}
            </router-link>
        </div>

        <div id="footer">
            <div id="rating">
              Ratings: {{ item.rating.rate }}
            </div>
            <div id="instock">
              InStock: {{ item.rating.count }}
            </div>
        </div>
    </div>
</div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: "Category",
    props: ["category"],
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products/category/"+this.category);
    this.items = result.data;
  },
//   watch : {
//       $route(to,from){
//           if(to!=from){
//               axios.get("https://fakestoreapi.com/products/category/"+this.category).then((res) => {
//                   this.item=res.data;
//               })
//           }
//       }
//   }
// beforeRouteUpdate() {

//     axios
//       .get('https://fakestoreapi.com/products/category/'+this.category)
//       .then(response => (this.items = response.data))
//   },
  // watch: {
  //     $route(to,from){
  //         if(to!=from){
  //             axios
  //     .get('https://fakestoreapi.com/products/category/'+this.category)
  //     .then(response => (this.items = response.data))
  //         }
  //     }
  // },
  methods: {
    htlprice(){
      this.items.sort((a,b) => {
        return b.price - a.price
      })
      console.log('htl')
    },
    lthprice(){
      this.items.sort((a,b) => {
        return a.price - b.price;
      })
      console.log('lth')
    },
    htlrating(){
      this.items.sort((a,b) => {
        return b.rating.rate - a.rating.rate
      })
      console.log('htlrating')
    },
    lthrating(){
      this.items.sort((a,b) => {
        return a.rating.rate - b.rating.rate;
      })
      console.log('lthrating')
    }
  },
  
  
}
</script>

<style scoped>

h3{
  display: inline-block;
  color: blue;
}

#HomePage{
  width: 90vw;
  margin: 40px auto;
  background-color: rgb(227, 233, 224);
  padding: 2px;
  border-radius: 50px;
}

#HomePage h1{
  margin: 20px auto;
  text-decoration: underline;
  width: 80vw;
  color: rgb(27, 45, 209);
}

.container{
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  margin: 0px auto;
}

.element{
  border-radius: 20px;
  width: 250px;
    height: 400px;
    margin: 20px;
    background-color: rgb(95, 215, 219);
}

#filter{
  text-align: center;
  margin: 20px auto;
}

#filter button{
  margin: 20px 60px;
  padding: 5px;
  font-size: 20px;
  width: 200px;
  background-color: rgb(151, 238, 51);
  color: red;
  font-weight: 700;
  border: none;
  border-radius: 20px;
}

#filter button:hover{
  background-color: rgb(151, 235, 223);
  color: blue;
}

#category {
  margin-top: 5px;
  margin-bottom: 10px;
  color: blue;
  font-weight: 700;
}

#price{
  margin:10px 10px;
  color: blue;
  font-weight: 700;
  font-size: 25px;
}

#title{
line-height: 15px;
color: black;
}

#title a{
  text-decoration: none;
  color: black;
  font-weight: 600;
  text-decoration:underline black;
  font-size: 13px;
  
}

#rating{
  color: blue;
  font-weight: 600;
  font-size: 15px;
  float: left;
  margin-left: 10px;
  margin-top: 20px;
}

#instock{
  color: blue;
  font-weight: 600;
  font-size: 15px;
  float: right;
   margin-right: 10px;
   margin-top: 20px;
}

</style>