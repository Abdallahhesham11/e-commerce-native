
let allProducts=document.querySelector(".product-content")
let noProducts=document.querySelector(".no-products")





function drawFavorites(allOfProducts=[]){
    if(JSON.parse(localStorage.getItem("productsInFavorite")).length===0){
        noProducts.innerHTML="There is no Products !!"
    }
    
    products= JSON.parse(localStorage.getItem("productsInFavorite"))||allOfProducts
    let y= products.map((item)=>{
        return `

        <div class="card my-3 mx-auto product-item col-lg-3 col-md-4 col-sm-6 pt-4 py-4 px-3" style="width: 20rem; height:auto; border-radius:10px;">
        <img src="${item.imgUrl}" alt="" class="card-img-top mx-auto" alt="..." style="width: 18rem; height:300px">
        <div class="product-item-desc">
          <p><span class="fw-bold">Product: </span>${item.product}</p>
          <p><span class="fw-bold">Price: </span>${item.price}</p>
          <p><span class="fw-bold">Category: </span>${item.category}</p>
          <p><span class="fw-bold">Quantity: </span>${item.qty}</p>
          <button class="btn item-btn px-5" onClick="removeFromFavorite(${item.id})">Remove from favorites</button>
        </div>
      </div><!-- product-item -->

        `
    })
    allProducts.innerHTML=y.join("");
}
drawFavorites()
///////////////////////////////////////////////////////////////////////////////


function removeFromFavorite(id){
    let productsInFavorite= localStorage.getItem("productsInFavorite")
    if(productsInFavorite){
        let items=JSON.parse(productsInFavorite)
        let filteredItems=items.filter((item)=>item.id !==id)
        localStorage.setItem("productsInFavorite",JSON.stringify(filteredItems))
        drawFavorites(filteredItems)
       
    }
}