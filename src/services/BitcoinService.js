import axios from 'axios';


// https://blockchain.info/tobtc?currency=USD&value=1

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(coins) {
  var rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`) 
  try {
    //   console.log(rate.data);
    return rate.data
    } catch (err) {
    console.log('Had an error: ', err.message);
    }    
}

async function getMarketPrice() {
    var marketPrice = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`) 
    try {
      return marketPrice.data
      } catch (err) {
      console.log('Had an error: ', err.message);
      }    
  }


async function getConfirmedTransactions() {
    var confirmedTransactions = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`) 
    try {
      return confirmedTransactions.data
      } catch (err) {
      console.log('Had an error: ', err.message);
      }    
}