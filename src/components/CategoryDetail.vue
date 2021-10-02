<template>
<div v-if="items.length!=0">
  <div id="category">
      <div id="left">
        <img :src="items.image" alt="" style="height:250px; width:200px;">
        <div id="title">
          {{ items.title }}
        </div>
      </div>
      <div id="right">
        <div id="category-name" style="text-align:center; text-decoration:underline; font-size:15px">
          {{ items.category.toUpperCase() }}
        </div>
        <div id="price">
          Rs. {{ items.price }}
        </div>
        <div id="description">
          Description: {{ items.description }}
        </div>
        <div id="footer">
          <div id="rating">
            Ratings: {{ items.rating.rate }}
          </div>
          <div id="stock">
            Stock Count: {{ items.rating.count }}
          </div>
        </div>
      </div>
  </div>
</div>
<div v-else>
  <h1>Loading....</h1>
</div>
  

</template>

<script>
import axios from 'axios'
export default {
    name:'CategoryDetail',
    props: ["id"],
    data() {
    return {
      items: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products/"+this.id);
    this.items = result.data;
  },

}
</script>

<style scoped>

h1{
  background-color: rgb(236, 227, 227);
  padding: 50px;
  margin-top:80px;
  width: 50vw;
  text-align: center;
  margin-left: auto;
  margin-right:auto;
  border-radius: 30px;
}

#category{
    
    background-color:rgb(236, 227, 227) ;
    width: 80vw;
    margin: 70px auto;
    border-radius: 30px;
    padding:40px;
    font-weight: 700;
    color: blue;
    height: 70vh;
}

#left{
  float: left;
  width: 40%;
  font-weight: 700px;
  margin-left: 10px;
  text-align:center;
  margin-right: 30px;
}

#right{
  text-align: center;
}

#title{
  margin-top: 40px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
}

#price{
  font-size: 40px;
  margin: 5px;
}

#description{
  margin-bottom:5px;
  text-align:left;
  font-size: 14px;
}

#footer{
  color:black;
}

</style>