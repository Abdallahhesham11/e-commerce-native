let productsDb=[
    {
        id :1,
        product:"RUNFALCON",
        price:"80$",
        category:"Shoes",
        imgUrl:"./images/adidas3.avif",
        qty:1
    },
    {
        id :2,
        product:"ADIZERO SL W",
        price:"60$",
        category:"Shoes",
        imgUrl:"./images/adidas4.avif",
        qty:1
    },
    {
        id :3,
        product:"ULTRABOOST LIGHT",
        price:"80$",
        category:"Shoes",
        imgUrl:"./images/adidas5.avif",
        qty:1
    },
    {
        id :4,
        product:"AVRYN SHOES",
        price:"75$",
        category:"Shoes",
        imgUrl:"./images/adidas2.avif",
        qty:1
    },
    {
        id :5,
        product:"POWER BACKPACK",
        price:"40$",
        category:"Bags",
        imgUrl:"./images/bag1.avif",
        qty:1
    },
    {
        id :6,
        product:"ADICOLOR BACKPACK",
        price:"35$",
        category:"Bags",
        imgUrl:"./images/bag3.avif",
        qty:1
    },
    {
        id :7,
        product:"TIRO GRAPHIC TEE",
        price:"50$",
        category:"T-shirts",
        imgUrl:"./images/wear1.avif",
        qty:1
    },
    {
        id :8,
        product:"DAME 9 TEE",
        price:"50$",
        category:"T-shirts",
        imgUrl:"./images/wear2.avif",
        qty:1
    }
]

localStorage.setItem("products",JSON.stringify(productsDb))