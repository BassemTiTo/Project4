

let divempty = document.querySelector(".empty")

let hero = document.querySelector(".hero-section");

let goHomebtn = document.getElementById("goHome")

if(localStorage.getItem("fristname")){

divempty.innerHTML = "👋" + "Hello." +  localStorage.getItem("fristname")

divempty.style.fontSize="19px"

divempty.style.textTransform = "capitalize"

 divempty.style.color = "#FFFFFF";

 divempty.style.textShadow = "2px 2px 6px rgba(0,0,0,0.5)";

}


let logout = document.querySelector("#Logout")


logout.onclick=function(){
 
localStorage.clear()

setTimeout(function() {

  window.location="index.html"    

},500)

  
}





let cartContainer = document.querySelector(".saved-products");

let goHomeBtn = document.getElementById("goHome");

let showAllproducts = JSON.parse(localStorage.getItem("Cart")) || {};

let cartCount = document.querySelectorAll(".cartCount");

let products = [

{id: 1, title:"Notebook" , price: "Price : $150" , category:"Labtob" , image:"Images/pic34.jpg"} ,


{id: 2, title:"MacBook Pro" , price: "Price : $550"  , category: "Labtob" , image:"Images/pic21.jpg"} ,


{id:3 , title:"Chromebook " , price: "Price : $200"   , category: "Labtob" , image:"Images/pic19.jpg"} ,


{id:4 , title:"Iphone17" , price: "Price : $350"  , category: "phone" , image:"Images/pic23.jpg"} ,


{id:5 , title:"Oppo Reno 10" , price: "Price : $450"  , category : "phone" , image:"Images/pic24.jpg"} ,


{id:6 , title:"Galaxy S 7" , price: "Price : $850" , category:"phone" , image:"Images/pic25.jpg"} ,


{id:7 , title:"iPad Mini " , price: "Price : $750"  , category: "Tablet" , image:"Images/pic26.jpg"} ,


{id:8 , title:"iPad Pro" , price: "Price : $650"  , category: "Tablet" , image:"Images/pic33.jpg"} ,


{id:9 , title:"iPad Air" , price: "Price : $550"  , category: "Tablet" , image:"Images/pic28.jpg"} ,


{id:10, title:"Luxury Watch" , price: "Price : $250" , category: "watch" , image:"Images/pic29.jpg"} ,


{id:11, title:"Analog Watch" , price:  "Price : $550" , category: "watch" , image:"Images/pic30.jpg"} ,


{id:12 , title:"Digital Watch" , price: "Price : $800"  , category:"watch" , image:"Images/pic32.jpg"} ,

]


function updateCartCount() {

    let count = Object.keys(showAllproducts).length;

    cartCount.forEach(counter => counter.textContent = count);
}


updateCartCount()

let seclectProducts = products.filter(function(someitems){

    return showAllproducts[someitems.id]
});

cartContainer.innerHTML = "";

// إنشاء row واحد للـ Grid
let brow = document.createElement("div");

brow.classList.add("row", "justify-content-center", "g-4"); // g-4 = gap بين الأعمدة والصفوف

seclectProducts.forEach(function(chooseitems){

    let getPrice = Number(chooseitems.price.replace(/[^0-9.]/g, ""));

   let quantites = showAllproducts[chooseitems.id];

   let totalPrice = getPrice * quantites;


    // إنشاء عمود لكل عنصر
    let col = document.createElement("div");

    col.classList.add("col-12", "col-md-6", "col-lg-4", "d-flex", "justify-content-center","align-items-stretch");

    col.innerHTML = `
      <div class="all-cart-items border-0">

        <div class="card favourites-items-bro cart-item" data-id="${chooseitems.id}">

            <img src="${chooseitems.image}" alt="${chooseitems.title}">

            <div class="card-body text-center">

                <h5 class="card-title we">${chooseitems.title}</h5>

                <p class="card-text more-much">Price: $${totalPrice}</p>

                <div class="quantity-controls-cart d-flex justify-content-center align-items-center gap-2 mb-2">

                    <button class="btn btn-sm btn-outline-primary mins">-</button>

                    <span class="quantity px-2">${showAllproducts[chooseitems.id]}</span>

                    <button class="btn btn-sm btn-outline-primary plus">+</button>
                </div>

                <button class="btn btn-danger btn-sm remove-btn mt-3">Remove From Cart</button>
            </div>
        </div>
    `;

    brow.appendChild(col);

    updateGrandTotal();
});

cartContainer.appendChild(brow);




document.addEventListener("click", function(event) {


  if(event.target.classList.contains("plus") || event.target.classList.contains("mins")) {

    const parent = event.target.closest(".all-cart-items");

    const cartitemId = Number(parent.querySelector(".cart-item").getAttribute("data-id"));

    if(event.target.classList.contains("plus")){

        showAllproducts[cartitemId]++;
    } 
    else {
        showAllproducts[cartitemId]--;
    }

  
    if(showAllproducts[cartitemId] <= 0){

        delete showAllproducts[cartitemId];

     parent.style.opacity = 0;

     parent.style.width = "300px";

   parent.style.transform = "scale(0.95)";

       

    } 
    
    else {
   
        parent.querySelector(".quantity").textContent = showAllproducts[cartitemId];

        const product = products.find(item => item.id === cartitemId);

        let getPrice = Number(product.price.replace(/[^0-9.]/g, ""));

        let qty = showAllproducts[cartitemId] || 0;

         let totalPrice = getPrice * qty;


        parent.querySelector(".more-much").textContent = "Price: $" + totalPrice;
    }

    updateCartCount(); 

    updateGrandTotal()
  }

  if(event.target.classList.contains("remove-btn")){

    const parent = event.target.closest(".all-cart-items");

    const cartitemId = Number(parent.querySelector(".cart-item").getAttribute("data-id"));


    delete showAllproducts[cartitemId]; 

    parent.style.opacity = 0;

   parent.style.width = "300px";

parent.style.transform = "scale(0.95)";

setTimeout(() => parent.remove(), 300);

    updateCartCount();

    updateGrandTotal()
  }

});

function updateGrandTotal() {

    let grandTotal = 0;

 Object.keys(showAllproducts).forEach(function(id){

 const product = products.find(p => p.id === Number(id));

  const quantity = showAllproducts[id] || 0;

  const price = Number(product.price.replace(/[^0-9.]/g, ""));

  grandTotal += price * quantity;

});

  const grandTotalDiv = document.querySelector(".grand-total");

    if (grandTotalDiv) {

        grandTotalDiv.textContent = "Grand Total: $" + grandTotal;
}

}






let favoritesContainer = document.querySelector(".favorites-container");


let favorites = JSON.parse(localStorage.getItem("favorites"))|| []


let favoriteProducts = products.filter(function(item){

return favorites.includes(item.id)

}) 


favoritesContainer.innerHTML = ""; 

let row = document.createElement("div");

row.classList.add("row", "justify-content-center", "g-4");


favoriteProducts.forEach(function(item){

    let col = document.createElement("div");

    col.classList.add("col-12", "col-md-6", "col-lg-4", "d-flex", "justify-content-center");

    col.innerHTML = `
        <div class="card favourites-items-bro" data-id="${item.id}">

            <img src="${item.image}" class="card-img-top" alt="${item.title}">

            <div class="card-body text-center">

                <h5 class="card-title">${item.title}</h5>

                <p class="card-text">Category: ${item.category}</p>

                <i class="fa-solid fa-heart big-heart-too"></i>

            </div>

        </div>
    `;

    row.appendChild(col);
});

favoritesContainer.appendChild(row);


document.addEventListener("click", function(me) {

    if(me.target.classList.contains("big-heart-too")) {

        const parentDiv = me.target.closest(".favourites-items-bro");

        const productId = Number(parentDiv.getAttribute("data-id"));

      
        favorites = favorites.filter(id => id !== productId);

        localStorage.setItem("favorites", JSON.stringify(favorites));

     
        parentDiv.style.opacity = 0;

        parentDiv.style.margin = "0px 0px";

parentDiv.style.transform = "scale(0.9)";

setTimeout(() => parentDiv.style.display = "none", 300);

    }
});

  document.getElementById("goHome").addEventListener("click", function () {
    window.location.href = "home.html";  // المسار اللي عايز تروّح له
  });