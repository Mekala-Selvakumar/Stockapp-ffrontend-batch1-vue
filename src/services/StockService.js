// create  StockService to fetch stock data from API http://localhost:9090/api/v1/stocks
//create   functions to get all the stocks based on the country, get all stocks
//get stock by id, add stock,  delete stock
//create a function to get the stock data from the API
//use axios to fetch the data from the API

import axios from 'axios';

const STOCK_API_BASE_URL = "http://localhost:9090/api/v1/stocks";

const  StockService = {
    //getStocks based on country

    getAllStocksByCountry(country){
        // http://localhost:9090/api/v1/stocks/api/{country}
        return axios.get(STOCK_API_BASE_URL + '/api/' + country);
    },

    getAllStocksFromDatabase(){
        return axios.get(STOCK_API_BASE_URL);  
    },

    createStock(stock){
        return axios.post(STOCK_API_BASE_URL, stock);
    },

    // getStockById(stockId){
    //     return axios.get(STOCK_API_BASE_URL + '/' + stockId);
    // },

   

    deleteStock(stockId){
        return axios.delete(STOCK_API_BASE_URL + '/delete/' + stockId);
    },

}

export default StockService;

