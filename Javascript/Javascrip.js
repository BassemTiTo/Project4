
let divempty = document.querySelector(".empty")

 let hero = document.querySelector(".hero-section");


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

 let allproducts = document.querySelector(".allproducts")

let products = [

{id: 1, title:"Notebook" , price: "Price : $150" , category: "Category :" +  "Labtob" , image:"Images/pic34.jpg"} ,


{id: 2, title:"MacBook Pro" , price: "Price : $550"  , category: "Category :" +  "Labtob" , image:"Images/pic21.jpg"} ,


{id:3 , title:"Chromebook " , price: "Price : $200"   , category: "Category :" +  "Labtob" , image:"Images/pic19.jpg"} ,


{id:4 , title:"Iphone17" , price: "Price : $350"  , category: "Category :" +  "phone" , image:"Images/pic23.jpg"} ,


{id:5 , title:"Oppo Reno 10" , price: "Price : $450"  , category: "Category :" +  "phone" , image:"Images/pic24.jpg"} ,


{id:6 , title:"Galaxy S 7" , price: "Price : $850" , category: "Category :" +  "phone" , image:"Images/pic25.jpg"} ,


{id:7 , title:"iPad Mini " , price: "Price : $750"  , category: "Category :" +  "Tablet" , image:"Images/pic26.jpg"} ,


{id:8 , title:"iPad Pro" , price: "Price : $650"  , category: "Category :" +  "Tablet" , image:"Images/pic33.jpg"} ,


{id:9 , title:"iPad Air" , price: "Price : $550"  , category: "Category :" +  "Tablet" , image:"Images/pic28.jpg"} ,


{id:10, title:"Luxury Watch" , price: "Price : $250" , category: "Category :" +  "watch" , image:"Images/pic29.jpg"} ,


{id:11, title:"Analog Watch" , price:  "Price : $550" , category: "Category :" +  "watch" , image:"Images/pic30.jpg"} ,


{id:12 , title:"Digital Watch" , price: "Price : $800"  , category: "Category :" +  "watch" , image:"Images/pic32.jpg"} ,

]





// function repaetproducts(items = products){

// let y = items.map(function(item){

// return ركز انا هنا استخدمت ايتيمس بدل بروديكتس عشان خاطر ايتيمس هنا  بارميتر يعني وسيط يعني هي وسيلة تقدر تستخدمها وتستدعيها في اي حدث او اي فونشين لنفس مصفوفة 

// يعني عندك مصفوفة عايز تدخلها في كذا حدث او كذا فونشين الحل اية الحل نديلوة بارميتر يعني وسيط اسم يمررلنا دالة دي ويخلينا نستخدمها في كذا خاصية وكذا حدث وكذا فونشين لكن لو ما ادينهاش بارميتر كوسيط مش هنعرف نستخدمها في كذا فونشين او كذا حدث بالنسبة مصفوفة  

//  ملحوظة بارميتر بتستخدم دالة نفسها اللى انت مديها بارميتر مينفعش استخدمة في دالة تانية على سبيل مثال


// function repaetproducts(items = products){

// let y = items.map(function(item){

// return `          على سبيل مثال هنا بقولوة ايتميس لية مقولتلوش بردويكتس عشان انا مديلوة بارميتر ولازم استخدمة جوة الفونشين وعشان سبب رئيسي جدا ومهم وهو اني اعرف استدعية بارميتر في اي حدث و اي فونشين


// let filtered = products.filter(function(element){

// return element.title.toLowerCase().includes(inputvalue)

// let filtered = items.filter(function(element){ غلط كدة مفروض بروديكتس لان بروديكتس هو قيمة اصلية فيها منتجات هو مصفوفة نفسها

//  هنا منيفعش استخدم ايتيمس بدل بروديكتس عشان ايتميس دة بارمتر تبع فونشين اللى انت مسميها لكن تقدر تمررها وتدخلها في كذا فونشين وكذا حدث لكن مينفغش ادخلوة في فونشين تاني بنفس كود فوقك دة غلط
// })

function repaetproducts(someproduct = products){

let y = someproduct.map(function(item){

return `

<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">

<div class="card"  style="width: 18rem;">

  <img src="${item.image}" class="card-img-top w-100" alt="..." style="object-fit: cover; height: 200px;">

  <div class="card-body">

    <h5 class="card-title text-center">${item.title}</h5>

    <p class="card-text text-center mb-0">${item.price}</p>

     <p class="card-text text-center mb-4 pt-2">${item.category}</p>

     <div class="d-flex justify-content-center align-items-center gap-2">

    <i class="fa-solid fa-heart big-heart" data-id="${item.id}"></i>

    <span  class="btn btn-primary btn-click" data-id="${item.id}">add to cart</span>

     </div> <!-- d-flex justify-content-center align-items-center gap-2 -->

  </div> <!--card-body-->

</div> <!-- card -->

</div> <!-- col-12 col-md-6 col-lg-4 -->

`

})

allproducts.innerHTML = y.join("")  

 allproducts.style.textTransform="capitalize"

  allproducts.style.fontSize="18px"
 
// انا كان ممكن استدعي الحدث بعد فونشين بتاعة اقصد بعد دالة بتاعتوة وهيشتغل بس الفكرة انا استدعيتها هنا عشان خاطر كود سيرش اللى هو كود فلتير عندك لما اجي ببحث واضغط على منتج بلاقية مش بيضغط حدث كليك مش بينفذلي كود طيب ما دي مشكلة انا عايز اما ابحث على منتج اضيفوة في عربة فالمهم كان حل اني استدعيها هنا بعد ما اكرر منتجات عشان يهيأ نفسة ويكون جاهز بعد تكرار كروت عندي افتكر استدعيتها عشان خاطر كود سيرش اللى تحتيك اربط الاحداث كلها ببعض


}

repaetproducts() // هنا انا مكتبتش حاجة لان كدة هيطبعلي بردويكتس كتكرار مش لازم اكتب حاجة جوة هنا انا طبعتوة بنفسة

 // انا كان ممكن استدعي الحدث بعد فونشين بتاعة اقصد بعد دالة بتاعتوة وهيشتغل بس الفكرة انا استدعيتها هنا عشان خاطر كود سيرش اللى هو كود فلتير عندك لما اجي ببحث واضغط على منتج بلاقية مش بيضغط حدث كليك مش بينفذلي كود طيب ما دي مشكلة انا عايز اما ابحث على منتج اضيفوة في عربة فالمهم كان حل اني استدعيها هنا بعد ما اكرر منتجات عشان يهيأ نفسة ويكون جاهز بعد تكرار كروت عندي افتكر استدعيتها عشان خاطر كود سيرش اللى تحتيك اربط الاحداث كلها ببعض


let favorites = JSON.parse(localStorage.getItem("favorites"))|| []

document.addEventListener("click" , function(event){

const heart = event.target



if(event.target.classList.contains("big-heart")){

let getid = Number(heart.getAttribute("data-id"))

if(favorites.includes(getid)){

favorites = favorites.filter(function(id){

return id != getid

})

heart.style.color = ""

}

else{

favorites.push(getid)

  heart.style.color = "red"
}

 localStorage.setItem( "favorites" ,JSON.stringify(favorites))

}

})









let count = 0;

let cartItems = {}; // key = productId, value = quantity

let cartCount = document.querySelectorAll(".cartCount");

let cartProducts = document.querySelectorAll(".cart-products .cart-items");

const searchinput = document.querySelector(".wop");

searchinput.addEventListener("keyup", function(){

    let inputvalue = searchinput.value.toLowerCase();

    let filtered = products.filter(function(element){

        return element.title.toLowerCase().includes(inputvalue);

    });

    repaetproducts(filtered);
}); 



document.addEventListener("click", function(e){
    // فتح وغلق السلة
    if(e.target.closest(".cart-icon")){

        document.querySelectorAll(".cart-products").forEach(cartBox => cartBox.classList.add("active"));

    }

    if(e.target.closest(".close")){

        document.querySelectorAll(".cart-products").forEach(cartBox => cartBox.classList.remove("active"));
    }

  
if(e.target.classList.contains("btn-click")){

const btn = e.target

const productId = Number(btn.getAttribute("data-id"))

if(!btn.classList.contains("added")){

btn.classList.add("added")

btn.style.backgroundColor="red"

btn.textContent = "Remove From Cart";

btn.style.border="0"

cartItems[productId]=1 

}

else{
btn.classList.remove("added")

btn.style.backgroundColor=""

btn.textContent = "Add To Cart";

btn.style.border="0"

delete cartItems[productId];


}


}

count = Object.keys(cartItems).length

cartCount.forEach(function(counter){

counter.textContent = count

})

localStorage.setItem("Cart" , JSON.stringify(cartItems))

 renderCart()

})



// cartItems[item.id]  هنا انا بسالوة هل الايدي بتاع ايتيم بروديكتس بيساوي نفس الايدي بتاع كارت ايتيمس لو بيساوية بعض هيخزنة في اوبجكيت كارت ايتيمس عن طريق متغير سيلكيت بروديكيتس

// cartItems[cartitemId] هنا انا بقولوة زودلي كمية بتاع كارت ايتيمس اللى هي قيمة بتاعتة 

// cartItems{} اي اوبجكيت فاضي في الدنيا لما تيجي تخزن فية حاجة بيكون عبارة عن مفتاح وقيمة بالنسبة مشروع بتاعنا مفتاح دة اللى هو الايدي والقيمة دي اللى هو كمية 



function renderCart(){

let grandTotal = 0;

let selectProducts =products.filter(function(item){

return cartItems[item.id] // هو بيلف يشوف الايدي بتاع مصفوفة اصلية بيساوي نفس الايدي ومفتاح بتاع كارت ايتيمس

})


selectProducts.forEach(function(someitems){

let givemePrice = Number(someitems.price.replace(/[^0-9.]/g,""))

let everyquantity = cartItems[someitems.id]

grandTotal+= givemePrice * everyquantity


})

localStorage.setItem("grandTotal", grandTotal);


cartProducts.forEach(function(ele){

ele.innerHTML = ""


selectProducts.forEach(function(evryitem){

  let div = document.createElement("div") // بقولوة اعملي ديف كأنك روحت اتمشل وعملت ديف 

div.classList.add("all-cart-item") // هنا بقولوة جوة ديف اديلوة كلاس اسمة كذا كارت ايتيم عشان نستدعية في اتشمل ونظبطوة

// هنا بقولوة جو تاج ديف دة انشأتة هنا في جافا سكريبت خزنلي فية او حطيلي فية تاجات دي 


let getPrice = Number(evryitem.price.replace(/[^0-9.]/g, ""));

let quantites = cartItems[evryitem.id]

let totalPrice = getPrice * quantites


div.innerHTML = ` 

  <div class="cart-item" data-id="${evryitem.id}">
  
  <img src="${evryitem.image}">

  <h4> ${evryitem.title}</h4>
  
  <p>Price: $${totalPrice}</p>

 </div>

  <div class="quantity-controls">
  
  <button class="mins"> - </button>
  
  <span class="quantity">${cartItems[evryitem.id]}</span>
    
 <button class="plus"> + </button>


  </div>

`

ele.appendChild(div)








})


let centerBox = document.createElement("div");
centerBox.classList.add("center-box");

// total summary
let totalDiv = document.createElement("div");
totalDiv.classList.add("total-summary");
totalDiv.innerHTML = `<h3>Total Price: $${grandTotal}</h3>`;

// زر العرض
let viewBtn = document.createElement("a");
viewBtn.href = "cartproducts.html";
viewBtn.classList.add("View");
viewBtn.textContent = "View All Products";

// ضيف الاتنين داخل الصندوق
centerBox.appendChild(totalDiv);
centerBox.appendChild(viewBtn);

// ضيف الصندوق على الأب الأساسي
ele.appendChild(centerBox);

})

   


}

 localStorage.setItem("Cart" , JSON.stringify(cartItems))







document.addEventListener("click" , function(event){

if(event.target.classList.contains("plus")){


const parent = event.target.closest(".all-cart-item")

const cartitemId = Number(parent.querySelector(".cart-item").getAttribute("data-id"))

cartItems[cartitemId]++   // كدة كارت ايتيم اتخزن في اوبجكيت اتخزن كمفتاح وقيمة المفتاح هو الايدي والقيمة هو عدد كمية منتجات

renderCart()



}



if(event.target.classList.contains("mins")){


const parent = event.target.closest(".all-cart-item")

const cartitemId = Number(parent.querySelector(".cart-item").getAttribute("data-id"))

cartItems[cartitemId]--



if(cartItems[cartitemId] <=0 ){

delete cartItems[cartitemId] 

const allbtns = document.querySelectorAll(".btn-click")

allbtns.forEach(function(everybtn){

let idbtns = Number(everybtn.getAttribute("data-id"))

if(idbtns===cartitemId){

everybtn.classList.remove("added");

everybtn.style.backgroundColor=""

everybtn.textContent = "Add To Cart";


}


})

}


count = Object.keys(cartItems).length

cartCount.forEach(function(counter){

counter.textContent = count

})

renderCart()

   





}

localStorage.setItem("Cart" , JSON.stringify(cartItems))

});
  






    
  
























