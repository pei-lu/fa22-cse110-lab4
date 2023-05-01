function discountPrices(price, discount){
    const discounted = [];
    const length = price.length;

    for(let i = 0; i< price.length; i++){
        const discountedPrice = price[i]*(1 - discount);
        //finalPrice = Math.round(discountedPrice * 100)/ 100;
        discounted.push(discountedPrice);
    }
    //console.log(i);
    //console.log(discountedPrice);
    //console.log(length);
    return discounted;
}

discountPrices([100, 200, 300], 0.5);