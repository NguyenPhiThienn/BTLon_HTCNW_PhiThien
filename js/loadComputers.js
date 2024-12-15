var products = [{
  "id": "CPT01",
  "name": "Bag Flap MSI Katana 15 B13VEK 252VN",
  "image": ["../access/brand/Dior1_1.png"],
  "price": 23000000,
  "description": ""
},
{
  "id": "CPT02",
  "name": "Bag Flap MSI Katana 15 B13VFK 676VN",
  "image": ["../access/brand/Dior1_2.png"],
  "price": 25000000,
  "description": ""
}
  ,
{
  "id": "CPT03",
  "name": "Bag Flap MSI Thin 15 B13UC 2044VN",
  "image": ["../access/brand/Dior1_3.png"],
  "price": 22000000,
  "description": ""
}
  ,
{
  "id": "CPT04",
  "name": "Bag Flap MSI Thin 15 B13UC 1411VN",  
  "image": ["../access/brand/Dior1_1.png"],
  "price": 23000000,
  "description": ""
}
  ,
{
  "id": "CPT05",
  "name": "Bag Flap MSI Stealth 18 Mercedes AMG",
  "image": ["../access/brand/Dior1_2.png"],
  "price": 22005000,
  "description": ""
}
  ,
{
  "id": "CPT06",
  "name": "Bag Flap MSI Stealth 16 Mercedes AMG A1VGG 293VN",
  "image": ["../access/brand/Dior1_3.png"],
  "price": 23800000,
  "description": ""
}
  ,
{
  "id": "CPT07",
  "name": "Bag Flap MSI Thin 15 B12UCX 1419VN",
  "image": ["../access/brand/Dior1_2.png"],
  "price": 19000000,
  "description": ""
}
  ,
{
  "id": "CPT08",
  "name": "Bag Flap MSI Cyborg 14 A13VE 090VN",
  "image": ["../access/brand/Dior1_1.png"],
  "price": 23000000,
  "description": ""
}
  ,
{
  "id": "CPT09",
  "name": "Bag Flap MSI Stealth 18 AI Studio A1VHG",
  "image": ["../access/brand/Dior1_3.png"],
  "price": 22000000,
  "description": ""
}
  ,
{
  "id": "CPT10",
  "name": "Bag Flap MSI Katana A15  ( 20th Edition)",
  "image": ["../access/brand/Dior1_1.png"],
  "price": 25000000,
  "description": ""
}
  ,
{
  "id": "CPT11",
  "name": "Bag Flap MSI 18 A1VGG 008VN (20th)",
  "image": ["../access/brand/Dior1_2.png"],
  "price": 33000000,
  "description": ""
}
  ,
{
  "id": "CPT12",
  "name": "Bag Flap MSI Pulse 17 AI C1VGKG 017VN",
  "image": ["../access/brand/Dior1_1.png"],
  "price": 18000000,
  "description": ""
}
  ,
{
  "id": "CPT13",
  "name": "Bag Flap MSI Pulse 17 AI C1VGKG 018VN",
  "image": ["../access/brand/Dior1_3.png"],
  "price": 19000000,
  "description": ""
}
  ,
{
  "id": "CPT14",
  "name": "Bag Flap MSI Pulse 17 AI C1VGKG 017VN",
  "image": ["../access/brand/Dior1_1.png"],
  "price": 19500000,
  "description": ""
}
  ,
{
  "id": "CPT15",
  "name": "Bag Flap MSI Pulse 17 AI C1VGKG 012VN",
  "image": ["../access/brand/Dior1_2.png"],
  "price": 25000000,
  "description": ""
}
]
// Load product list page
document.addEventListener("DOMContentLoaded", function () {
  var listProductHTML = document.querySelector('.list-product');
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML =
      `<img src="${value.image[0]}" alt="" id="imgPD">
      <h2>${value.name}</h2>
      <div class="price">${value.price.toLocaleString()}₫</div>
      <button class="detail" onclick="showDetail(${key})">Details</button>
      <button class="addCart" onclick="addToCart(products[${key}])">Add To Cart</button>`
      listProductHTML.appendChild(newDiv);
  });
})
//chuyển sang trang chi tiết sản phẩm
function showDetail(key){
  cart = products[key];
  localStorage.setItem("detail",JSON.stringify(cart));
  window.location.href = "../html/detail.html";
 
}