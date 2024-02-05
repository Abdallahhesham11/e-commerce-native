
let allProducts=document.querySelector(".product-content")
let products=productsDb

// display products
let drawItems;
drawItems=function(products=[]){
   let y= products.map((item)=>{
        return `

        <div class="card my-3 mx-auto product-item col-lg-3 col-md-4 col-sm-6 pt-4 py-4 px-3" style="width: 20rem; height:auto; border-radius:10px;">
        <img src="${item.imgUrl}" alt="" class="card-img-top mx-auto" alt="..." style="width: 18rem; height:300px">
        <div class="product-item-desc">
          <a onClick="saveItemDetails(${item.id})"><span class="fw-bold">Product: </span>${item.product}</a>
          <p><span class="fw-bold">Price: </span>${item.price}</p>
          <p><span class="fw-bold">Category: </span>${item.category}</p>
          <button class="btn item-btn px-5" onClick="addToCart(${item.id})">Add to cart</button>
          <i class="fas fa-heart fav-icon"style="color:${item.liked==true?"red":""}" onClick="addToFavorite(${item.id})"></i>
        </div>
      </div><!-- product-item -->

        `
    })
    allProducts.innerHTML=y.join("");
}
drawItems(JSON.parse(localStorage.getItem("products"))||products)
///////////////////////////////////////////////////////////////

//if there is item in localstorage
let badge=document.querySelector(".badge")
let cartProductDiv=document.querySelector(".cart-products div")
let addedItem=localStorage.getItem("productsInCart")?JSON.parse(localStorage.getItem("productsInCart")):[]

    if(addedItem){
        addedItem.map(item=>{
            cartProductDiv.innerHTML +=`<p>${item.product} ${item.qty}</p>`
        })
        badge.innerHTML=addedItem.length
    }

/////////////////////////////////////////

//add to cart


if(localStorage.getItem("username")){
    function addToCart(id){
        let product=products.find((item)=>item.id===id)
        let isProductInCart=addedItem.some((i)=>i.id===product.id)
        if(isProductInCart){
           addedItem=addedItem.map((p)=>{
            if(p.id===product.id)
                p.qty+=1
                return p
           })
        }
        else{
            addedItem.push(product)
        }
        cartProductDiv.innerHTML=""
        addedItem.forEach((item)=>{
            cartProductDiv.innerHTML+=`<p>${item.product} ${item.qty}</p> `
        })

        

        // addedItem=[...addedItem,choosenItem]
        // let uniqueProducts=getUniqueArr(addedItem,"id")
        localStorage.setItem("productsInCart",JSON.stringify(addedItem))


        let cartProductsLength=document.querySelectorAll(".cart-products div p")
        badge.innerHTML=cartProductsLength.length
    }
}
else{
    window.location="login.html"
}
/////////////////////////////////////////////////////////////

//no repeat for products

function getUniqueArr(arr,filterType){
    let unique=arr.map((item)=>item[filterType])
    .map((item,i,final)=>final.indexOf(item===i&&i))
    .filter((item)=>arr[item])
    .map((item)=>arr[item])

    return unique
}
//////////////////////////////////////////////////////////////

//open cart 
let shoppingCartBtn=document.querySelector(".shopping-cart")
let cartProduct=document.querySelector(".cart-products")

shoppingCartBtn.addEventListener("click",openCart)
function openCart(){
    if(cartProductDiv.innerHTML!=""){
        if(cartProduct.style.display=="block"){
            cartProduct.style.display="none"
        }
        else{
            cartProduct.style.display="block"
        }
    
}
}

function saveItemDetails(id){
    localStorage.setItem("cartsDetails",id)
    window.location="cartsdetails.html"
}

//search function

let inputSearch=document.getElementById("search")


inputSearch.addEventListener("keyup",function(e){
   
        search(e.target.value,JSON.parse(localStorage.getItem("products")))
    if(e.target.value.trim()===""){
        drawItems(JSON.parse(localStorage.getItem("products")))
    }
})

function search(product,myArray){
    let arr= myArray.filter((item)=>item.product.indexOf(product)!==-1)
    drawItems(arr)
 }

 //add to favorites
 let favoriteItems=localStorage.getItem("productsInFavorite")?JSON.parse(localStorage.getItem("productsInFavorite")):[]

 if(localStorage.getItem("username")){
    function addToFavorite(id){
        let product=products.find((item)=>item.id===id)
        product.liked=true
        let isProductInFav=favoriteItems.some((i)=>i.id===product.id)
        if(isProductInFav){
           favoriteItems=favoriteItems.map((p)=>{
            if(p.id===product.id)
                p.qty+=1
                return p
           })
        }
        else{
            favoriteItems.push(product)
        }
        localStorage.setItem("productsInFavorite",JSON.stringify(favoriteItems))
        products.map((item)=>{
            if(item.id===product.id){
                item.liked=true;
            }
        })
        localStorage.setItem("products",JSON.stringify(products))
        drawItems(products)


    }
}
else{
    window.location="login.html"
}



