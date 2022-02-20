<template>
  <div >
    <h1>{{msg}}</h1>
    <router-link to="/">Categorie</router-link>
    <div>

    <div class="col2">
      <div v-for="cat in catList" :key="cat.id">
          <ul >
            <router-link :to="{name: 'prodotti', params: {id:cat.id, tit:cat.value.name, order:'0'}}"  class="button">
              {{cat.value.name}}
            </router-link>
          </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {ApiConfig} from "@/config";
export default {

    name: 'CategorieItem',
    props: {
      msg: String
    },

    data () {
      return {catList: null}
    },
    methods: {
      selCat() {
        alert('${cat.value.name}');
      }
    },

    mounted() {
      const headers = {
        "Accept": "application/json",
        "x-api-key": ApiConfig.TOKEN
      };

      axios.get(ApiConfig.CATURL, {headers})
           .then(response => (this.catList = response.data.sort((o1,o2) => ApiConfig.f2(o1,o2))));
    }
  }
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .button {
   background-color: #4CAF50;
   border: none;
   color: white;
   padding: 35px 12px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 26px;
   margin: 4px 2px;
   cursor: pointer;
   border-radius: 12px;
   height: 100px;

   width: 50%;
 }
 .col2{
   column-count: 2;
}

</style>
