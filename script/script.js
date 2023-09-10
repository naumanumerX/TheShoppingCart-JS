let shop= document.querySelector(".shop");
let basket=JSON.parse(localStorage.getItem("Storing Data"))||[];  
console.log(basket);
// let calculation=()=>{
//     let cartIconAmount=document.getElementById("carAmount");
//      cartIconAmount.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>{return x+y},0);
    
// }   
// calculation();

 
let generateShop=()=>{

    return shop.innerHTML= (itemsData
        .map((item)=>{
        return`
                <div id="product-id-${item.id}"class="item">
                    <img  width ="220" src="${item.img}" alt="">
                    <hr>
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.desc  }</p>
                        <div class="price-quanitity">
                            <h2>${item.price}</h2>  
                            <div class="buttons">
                                <i  onclick="decrement(${item.id})"  class="bi bi-dash-lg"></i>
                                <div id="quantity-id-${item.id}" class="quantity">0</div>
                                <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `
                }).join(""));
};
generateShop(); 

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

    let calculation=()=>{
        let cartIconAmount=document.getElementById("carAmount");
         cartIconAmount.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>{return x+y},0);
        
    }
   