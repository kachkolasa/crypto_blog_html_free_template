var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Csolana%2Cripple%2Cdogecoin&vs_currencies=usd&include_24hr_change=true&precision=2",
    "method": "GET",
    "headers": {}
    }

    $.ajax(liveprice).done(function(response) {
        // Bitcoin 
        let bitcoin_price = new Intl.NumberFormat('us-EN').format(response.bitcoin.usd);
        let bitcoin_change = 0;
        if(response.bitcoin.usd_24h_change > 0){
            bitcoin_change = '+' + response.bitcoin.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".bitcoin .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#btc-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.bitcoin.usd_24h_change < 0){
            $(".crypto-banner").find(".bitcoin .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#btc-price").addClass("tw-bg-[#EBD9D9]");
            bitcoin_change = '-' + response.bitcoin.usd_24h_change.toString().substring(0, 5);
        }
        $("#btc-price").text(`$${bitcoin_price} ${bitcoin_change}%`);
        
        // Ethereum 
        let eth_price = new Intl.NumberFormat('us-EN').format(response.ethereum.usd);
        let eth_change = 0;
        if(response.ethereum.usd_24h_change > 0){
            eth_change = '+' + response.ethereum.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".ethereum .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#eth-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.ethereum.usd_24h_change < 0){
            $(".crypto-banner").find(".ethereum .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#eth-price").addClass("tw-bg-[#EBD9D9]");
            eth_change = '-' + response.ethereum.usd_24h_change.toString().substring(0, 5);
        }
        $("#eth-price").text(`$${eth_price} ${eth_change}%`);
        
        // Binance Coin 
        let bnb_price = new Intl.NumberFormat('us-EN').format(response.binancecoin.usd);
        let bnb_change = 0;
        if(response.binancecoin.usd_24h_change > 0){
            bnb_change = '+' + response.binancecoin.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".binance-coin .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#bnb-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.binancecoin.usd_24h_change < 0){
            $(".crypto-banner").find(".binance-coin .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#bnb-price").addClass("tw-bg-[#EBD9D9]");
            bnb_change = '-' + response.binancecoin.usd_24h_change.toString().substring(0, 5);
        }
        $("#bnb-price").text(`$${bnb_price} ${bnb_change}%`);
        
        // Solana 
        let sol_price = new Intl.NumberFormat('us-EN').format(response.solana.usd);
        let sol_change = 0;
        if(response.solana.usd_24h_change > 0){
            sol_change = '+' + response.solana.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".solana .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#sol-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.solana.usd_24h_change < 0){
            $(".crypto-banner").find(".solana .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#sol-price").addClass("tw-bg-[#EBD9D9]");
            sol_change = '-' + response.solana.usd_24h_change.toString().substring(0, 5);
        }
        $("#sol-price").text(`$${sol_price} ${sol_change}%`);
        
        // XRP 
        let xrp_price = new Intl.NumberFormat('us-EN').format(response.solana.usd);
        let xrp_change = 0;
        if(response.ripple.usd_24h_change > 0){
            xrp_change = '+' + response.ripple.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".xrp .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#xrp-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.ripple.usd_24h_change < 0){
            $(".crypto-banner").find(".xrp .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#xrp-price").addClass("tw-bg-[#EBD9D9]");
            xrp_change = response.ripple.usd_24h_change.toString().substring(0, 5);
        }
        $("#xrp-price").text(`$${xrp_price} ${xrp_change}%`);
        
        // Doge 
        let doge_price = new Intl.NumberFormat('us-EN').format(response.dogecoin.usd);
        let doge_change = 0;
        if(response.dogecoin.usd_24h_change > 0){
            doge_change = '+' + response.dogecoin.usd_24h_change.toString().substring(0, 4);
            $(".crypto-banner").find(".doge .bi").addClass("tw-text-green-600 bi-caret-up-fill");
            $("#doge-price").addClass("tw-bg-[#DDEDDC]");
        }
        if(response.dogecoin.usd_24h_change < 0){
            $(".crypto-banner").find(".doge .bi").addClass("tw-text-red-600 bi-caret-down-fill");
            $("#doge-price").addClass("tw-bg-[#EBD9D9]");
            doge_change = response.dogecoin.usd_24h_change.toString().substring(0, 5);
        }
        $("#doge-price").text(`$${doge_price} ${doge_change}%`);

    });