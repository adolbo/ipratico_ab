<template>
  <nav>
    <router-link to="/">Ritorna alle categorie</router-link>
  </nav>
  <router-view/>

  <div>
    <h1>{{ this.$route.params.tit }}</h1>
    <select name="orderProdotti" id="idOrderProdotti" @change="sel" >
      <option value="0">Ordina per prezzo</option>
      <option value="1">Ordina per nome</option>
    </select>
    <div class="col2" >

      <div v-for="prod in prodList" :key="prod.id" >
        <!--<div v-if="prod.value.productCategoryId===this.$route.params.id" >-->
        <div >
          <span class="button" >
            <div style="text-align: left">
              {{prod.value.name}}
            </div>
            <div style="text-align: right">
              {{prod.value.description}}
            </div>
            <div style="text-align: right" v-if="prod.value.prices && prod.value.prices.length>0">
              &euro;{{ prod.value.prices[0].price.toLocaleString('it-IT', {minimumFractionDigits: 2, useGrouping:true})}}
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {ApiConfig} from "@/config";
//import OrderProdotti from "@/components/OrderProdotti";
export default {

  name: 'ProdottiItem',
  //components: {OrderProdotti},
  data () {
    return {prodList: null}
  },
  methods: {
    sel: function(evt){
      ApiConfig.ORDERP = evt.target.value;
      ApiConfig.ROUTER.push({name: 'prodotti', params: {id:this.$route.params.id, tit:this.$route.params.tit, order:ApiConfig.ORDERP}});
      ApiConfig.ROUTER.go({name: 'prodotti', params: {id:this.$route.params.id, tit:this.$route.params.tit, order:ApiConfig.ORDERP}});
    }
  },
  mounted() {
    const headers = {
      "Accept": "application/json",
      "x-api-key": ApiConfig.TOKEN
    };


  document.getElementById("idOrderProdotti").selectedIndex = this.$route.params.order ;
  axios.get(ApiConfig.PRODURL, {headers})
        .then(response => (this.prodList = response.data.sort((o1,o2) => ApiConfig.f1(o1,o2, this.$route.params.order ))));
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
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  width: 50%;
  height: 100px;
  ;
}
.col2{
  column-count: 2;
}

</style>
