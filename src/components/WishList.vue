<!-- create  WishList Component -->
<template>
       <!-- Use user defined card format to display the stocks , 4 cards per row -->
    <div class="card-container">
      <div v-for="stock in stocks" :key="stock.symbol" class="card">
        <h3 >{{stock.symbol}} {{ stock.name }}</h3>
        <p>{{ stock.currency }}</p>
        <p>{{ stock.exchange}}</p>
        <p>{{ stock.country }}</p>
        <p>{{ stock.type }}</p>
        <!-- create a button to  AddToWishList -->
        <button @click="deleteFromWishList(stock.symbol)" class="but-primary">DeleteFrom WishList</button>
      </div>
    </div>

</template>

<script>
import StockService from "../services/StockService";
import { onMounted } from 'vue';
import { ref } from 'vue';

 

export default {
  name: "WishList",
//In setup , use  onMounted hook to call the getAllStocksFromWishList method

  setup() {
    let stocks = ref([]);
    onMounted(async () => {
      console.log('WishList Mounted')
      //call the StockService  getAllStocksByCountry method
      let response = await StockService.getAllStocksFromDatabase(); 
      stocks.value = response.data ;
    });
    return {stocks}
  },

  data() {
    return {
     
    };
  },
  
  methods: {
    getAllStocksFromWishList() {
     StockService.getAllStocksFromDatabase().then((response) => {
        this.stocks = response.data;
        console.log(stocks)
      })
      .catch((error) => {
        console.log(error);
      });
    },

    deleteFromWishList(symbol) {
      console.log('Delete from WishList', symbol);
      StockService.deleteStock(symbol).then(response => {
        console.log(response.data);
        alert('Stock Deleted from WishList  ' + symbol)
        this.getAllStocksFromWishList();
      }).catch(error => {
        console.log(error);
        alert('Stock Not Deleted from WishList  ' + symbol)
      });
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
.card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
}
h3 {
  color: blue;
}
p {
  color: green;
}
.but-primary {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


 
</style>
 