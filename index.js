const apiurl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(apiurl)
    .then(function(res) { return res.json() })
    .then(function(responseJson) {
        let btcToUsd = responseJson.bpi.USD.rate; 
        console.log(`1 Bitcoin = ${btcToUsd} USD`);
        document.getElementById("btc-to-usd").innerHTML = `${btcToUsd}`;
        document.getElementById("usd").style.display = "inline";
    })