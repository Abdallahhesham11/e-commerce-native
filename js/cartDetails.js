let products=JSON.parse(localStorage.getItem("products"))
let productId=localStorage.getItem("cartsDetails")
let productItem=document.querySelector(".product-content")

let productDetails=products.find((item)=>item.id== productId);

productItem.innerHTML=`
<div class="product-detail-item col-lg-12">
                <img src="${productDetails.imgUrl}" alt="" style="width: 30rem; height:450px">
                <div class="product-detail-desc">
                    <p><span class="fw-bold">Product: </span>${productDetails.product}</p>
                    <p><span class="fw-bold">Price: </span>${productDetails.price}</p>
                    <p><span class="fw-bold">Category: </span>${productDetails.category}</p>
                </div><!-- product-detail-desc -->
            </div><!-- product-detail-item -->`