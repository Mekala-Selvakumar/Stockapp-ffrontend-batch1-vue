<template>
  <div>
    <h1>{{ message }}</h1>
<!-- use user definde card format to display all the countries in a single row   -->
    <div class="country-container">
      <div v-for="country in countries" :key="country" class="country">
        <button  @click="getAllStocksByCountry(country)"      class="but-primary">{{ country }}</button>
      </div>
    </div>
    <h1> Stock Details</h1>

    <!-- Use user defined card format to display the stocks , 4 cards per row -->
    <div class="card-container">
      <div v-for="stock in stocks" :key="stock.symbol" class="card">

        <h3 >{{stock.symbol}} {{ stock.name }}</h3>
        <p>{{ stock.currency }}</p>
        <p>{{ stock.exchange}}</p>
        <p>{{ stock.country }}</p>
        <p>{{ stock.type }}</p>
        <!-- create a button to  AddToWishList -->
        <button @click="addToWishList(stock)" class="but-primary">Add to WishList</button>
      </div>
    </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import StockService from '../services/StockService';
import { ref } from 'vue';

export default {
   // Add your component logic here
  //create setup function to return data , implment onmount hook and  get the  data from the StockSerive  getAllStocksByCountry method
    setup() {
        let stocks= ref([]);
        onMounted(async () => {
            console.log('HomePage Mounted')
            //call the StockService  getAllStocksByCountry method
            let response = await StockService.getAllStocksByCountry('India'); 
          //  console.log(response)
            stocks.value = response.data.data ;
           // console.log(stocks.value)
        });
        return {stocks}
    },
  data() {
    return {
      message: 'Welcome to Stocks App',
    //   create  countries array with multiple country names
        countries: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Japan'],
        
         
    }
  },
    methods: {
        //create a method to add the stock to the wishlist
        addToWishList(stock) {
        
            console.log('Add to WishList', stock);
            //call the StockService  addToWishList method
            StockService.createStock(stock).then(response => {

                console.log(response.data);
                alert('Stock Added to WishList  ' + stock.symbol + ' ' + stock.name)
            }).catch(error => {
                console.log(error);
                alert('Stock Not Added to WishList  ' + stock.symbol + ' ' + stock.name)
            });
            
        },
//getAllStocksByCountry method to get the stocks based on the country
     getAllStocksByCountry(country) {
            console.log('Get All Stocks By Country', country);
              StockService.getAllStocksByCountry(country).then(response => {
                console.log(response.data.data);
                this.stocks = response.data.data;
              }).catch(error => {
                console.log(error);
              });
              
        
     }   
      
    }
        
  }
</script>

<style scoped>
    /* Add your component style here */
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card {
        width: 300px;
        height: 300px;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
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
        padding: 10px;
        margin: 10px;
        border: none;
        cursor: pointer;
    }

    .country-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .country {
        margin: 10px;
    }

 
</style>
