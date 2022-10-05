var addCart = document.getElementById("addCart"),
getId,matchId,cartList ;
cartList = document.getElementById("cartList");



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


    

function hidecartlist(){
    cartList.style.display ="none"
 }
 hidecartlist();
 function showcartlist(){
    cartList.style.display ="block"
 }




addCart.addEventListener("click",()=>{
    var cart,cnt=1;
    
    

    
    getId = prompt("enter value 0 to 2");
    productPrice = products[getId].price;
    productModel = products[getId].model;
    productDes = products[getId].productDes 

   console.log(productPrice);
   console.log(productModel);
   console.log(productDes);
   
//    cart.push(productPrice)
//    cart.push(productModel)
//    cart.push(productDes)

   
   //cart.push((JSON.stringify({quantity:1})) );
cart =products [getId]
//cart.push((JSON.stringify({quantity:1})) );

   console.log(cart);
   
 if(getId!==cnt){

    cnt=1;
    var qty = document.createElement("input");
    qty.setAttribute("value","qty " +cnt )
 
   var items = document.getElementById("items");
 
    var cardText = document.createElement("h5");
    cardText.setAttribute("class","card-text");
    cardText.innerText =cart.model;
    items.appendChild(cardText);
 
    var cardText = document.createElement("h5");
    cardText.setAttribute("class","card-text");
    cardText.innerText =cart.price;
    items.appendChild(cardText);
 
    var cardText = document.createElement("h5");
    cardText.setAttribute("class","card-text");
    cardText.innerText =cart.productDes ;
    items.appendChild(cardText);
 
    var cardText = document.createElement("h5");
    cardText.setAttribute("class","card-text");
    cardText.innerText =qty.value;
    items.appendChild(cardText);
 
    var hr = document.createElement("hr");
    items.appendChild(hr);

   
    showcartlist()
 }
   

 cartList.addEventListener("click",()=>{
 
     console.log(cart)
 })

    

});




