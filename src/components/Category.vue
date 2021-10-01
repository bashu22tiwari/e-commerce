<template>
  
<div id="HomePage">
  <h1>{{ this.category.toUpperCase() }}</h1>
  
<div class="container">
    <div class="element" v-for="item in items" :key="item.id">
      <div id="category">
                {{ item.category.toUpperCase() }}
        </div>
        
        <div>
            <a href="">
                <div>
                    <img :src="item.image" style="height:200px; width:200px; border-radius:20px;">
                </div>
            </a>
        </div>

         <div id="price">
                Rs. {{ item.price }}
        </div>

        <div id="title">
            <a href="">
                {{ item.title }}
            </a>
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
  
  
}
</script>

<style scoped>
#HomePage{
  width: 90vw;
  margin: 40px auto;
  background-color: white;
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
    background-color: rgb(196, 231, 240);
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
}

#title a{
  text-decoration: none;
  color: blue;
  font-weight: 600;
  text-decoration:underline blue;
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