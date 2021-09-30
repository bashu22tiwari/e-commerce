<template>

<div id="HomePage">
  <h1>Deals Of The Day</h1>
  
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


<div id="HomePage-2">

<section class="section3">
    <h1> Product You Can Never Deny </h1>
    <div class="deals-container1">
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
        alt=""
        class="deals-image"
      />
    </div>
    <div class="deals-container1">
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
        alt=""
        class="deals-image"
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg"
        alt=""
        class="deals-image"
      />
    </div>
  </section>
</div>

</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products?limit=18");
    console.log(result);
    this.items = result.data;
  },
};
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



.section3 {
  margin: 100px 20px;
}
.deals-container {
  display: flex;
  justify-content: space-around;
  margin: 50px 0px;
}
.deals-container1 {
  display: flex;
  justify-content: space-around;
}
.deals-container1 img {
  height: 215px;
  width: 180px;
}

.deals-image {
  height: 333px;
  width: 222px;
}

#HomePage-2{
  background-color: white;
  width: 90vw;
  margin: 50px auto;
  border-radius: 50px;
  padding: 10px;
  padding-bottom: 0px;
}

#HomePage-2 h1{
  margin: 10px;
  margin-top: -70px;
  margin-bottom: 40px;
  text-decoration: underline;
  width: 80vw;
  color: rgb(27, 45, 209);
}
</style>