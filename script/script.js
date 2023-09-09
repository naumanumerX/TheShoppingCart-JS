let shop= document.querySelector(".shop");
let basket=[];  
let itemsData=[
    {
        id:1,
        name:"Casual Shirt",
        price:"£25",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing. ",
        img: "images/img-1.webp"
    },
    {
        id:2,
        name:"Regular Shirt",
        price:"£19.99",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing. ",
        img: "images/img-2.webp"
    },
    {
        id:3,
        name:"Dress Shirt",
        price:"£33",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing. ",
        img: "images/img-3.webp"
    },
    {
        id:4,
        name:"Casual Shirt",
        price:"£27.99",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing. ",
        img: "images/img-4.webp"
    },
    ]
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
    }

    let decrement=(id)=>{

        let sItem=id;
        let searchItem=basket.find((checkItemID)=>checkItemID.id===sItem);
        if(searchItem.item===0){
       return
    }
    else{
        searchItem.item-=1;
    }
      //  console.log(basket);  
        updateQty(sItem);  

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