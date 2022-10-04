var addCart = document.getElementById("addCart"),cart=[],getId,matchId;



products = [{
    id:0,
    price :" Rs.10000",
    productDes : "4 gb RAM , 64 Gb ROM",
    model : "realme 9"
},
{
    id:1,
    price : "Rs.90000",
    productDes : "6 gb RAM , 64 Gb ROM",
    model : "realme 8"
},
{
    id:2,
    price : "Rs.80000",
    productDes : "8 gb RAM , 128 Gb ROM",
    model : "realme 7"
}]







addCart.addEventListener("click",()=>{
    getId = prompt("enter value 0 to 2");
    producrPrice = products[getId].price;
    productModel = products[getId].model;
    productDes = products[getId].model

   console.log(producrPrice);
   console.log(productModel);
   console.log(productDes);

   cart.push(producrPrice)
   cart.push(productModel)
   cart.push(productDes)
   console.log((cart));
  

  
    

})


