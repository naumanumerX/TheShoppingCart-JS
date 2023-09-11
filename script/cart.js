let basket=JSON.parse(localStorage.getItem("Storing Data"))||[];  
let label=document.querySelector("#label");
let shoppingCart=document.querySelector("#shopping-cart");
let calculation=()=>{
    let cartIconAmount=document.getElementById("carAmount");
     cartIconAmount.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>{return x+y},0);
    
}   
console.log(itemsData)
calculation();
let generateCart = () => {
    if (basket.length !== 0) {
      shoppingCart.innerHTML = basket.map((x) => {
        let search = itemsData.find((i) => i.id === x.id) || {};
        return `
          <div class="cart-item">
            <img  width ="100" src="${search.img}" alt="${search.name}"/> 
            <div class="details">
             <div class="title-price-x">
             <h3 class="title-price">
              <p>${search.name}</p>
              <p class="cart-item-price"> ${search.price}</p>
              </h3>
              <i onclick=removeItem(${x.id}) class= "bi bi-x-lg"></i>

             </div>
             
             <div class="buttons">
              <i  onclick="decrement(${itemsData.id})"  class="bi bi-dash-lg"></i>
              <div id="quantity-id-${itemsData.id}" class="quantity">${x.item}</div>
              <i onclick="increment(${itemsData.id})" class="bi bi-plus-lg"></i>
              </div>
              

            </div>
          </div>
        `;
      }).join("");
    } else {
      label.innerHTML = `
        <h3>Cart is Empty</h3>
        <a href="index.html">
          <button class="homeBtn">Back to Home</button>
        </a>
      `;
    }
  }
  
  generateCart();
  

  let increment=(id)=>{

    let sItem=id;
    
    let searchItem=basket.find((checkItemID)=>checkItemID.id===sItem);
    if(searchItem===undefined){
    basket.push({
        id:sItem,
        item:1
    });
}
else{
    searchItem.item+=1;
}
   // console.log(basket);    
   updateQty(sItem);
   localStorage.setItem("Storing Data",JSON.stringify(basket));
}

let decrement=(id)=>{

    let sItem=id;
    let searchItem=basket.find((checkItemID)=>checkItemID.id===sItem);
    if(searchItem===undefined) return   
    if(searchItem.item===0){
   return
}
else{
    searchItem.item-=1;
}
updateQty(sItem); 
basket=basket.filter((x)=>x.item!== 0);

   
    localStorage.setItem("Storing Data",JSON.stringify(basket));


}


let updateQty = (id) => {
    let searchItem = basket.find((checkItemID) => checkItemID.id === id);
    if (searchItem) {
        document.getElementById(`quantity-id-${id}`).innerHTML = searchItem.item;
    }
   calculation();
};

let removeItem=(id)=>{
  
  basket=basket.filter((x)=>x.id !==id)
  localStorage.setItem("Storing Data",JSON.stringify(basket));
  generateCart();

}