// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var changeCounter = 0;
    var changeObject = {};
    if(currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }    
    function countCoins(value,valueName){
        var coinCounter = 0;
        while(changeCounter + value <= currency){
            coinCounter++
            changeCounter = changeCounter+=value;         
        }
        if(coinCounter > 0){
            changeObject[valueName] = coinCounter
        }
    }
    countCoins(50,'H')
    countCoins(25,'Q')
    countCoins(10,'D')
    countCoins(5,'N')
    countCoins(1,'P')
    return changeObject
}
