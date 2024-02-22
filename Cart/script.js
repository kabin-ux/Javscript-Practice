var products = [
    {name: "White Chair", headline: "Soft like cloud", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Black Chair", headline: "Black ", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Traditional Chair", headline: "Old is gold", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

var popular = [
    {name: "White Sofa", headline: "Soft like cloud", price: "$5000", image: "https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "White Sofa", headline: "Soft like cloud", price: "$5000", image: "https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "White Sofa", headline: "Soft like cloud", price: "$5000", image: "https://plus.unsplash.com/premium_photo-1673014201385-115f57893c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
];

var cart = [

];

function addProduct() {
    var clutter = "";
    products.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${product.image}')"></div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.headline}</h3>
                        <h4 class="font-semibold mt-2">${product.price}</h4>
                    </div>
                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
                </div>
            </div>
        </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}


function addPopularProducts() {
    var clutter = "";
    popular.forEach((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}


const addToCart = () => {
    document.querySelector('.products').addEventListener('click', (details) => {
        console.log(details.target.dataset);
    if (details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index]);
    }
    })
};

const showCart = () => {
    document.querySelector('.carticon').addEventListener('click', () => {
        document.querySelector('.cartexpnd').style.display = "block";

        var clutter = "";
        cart.forEach((prod, index) => {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500"><img src = "${prod.image}"/> </div>
        <div>
        <h3 class="font-semibold">${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
        
        </div>
        </div>`;
        });
        document.querySelector('.cartexpnd').innerHTML = clutter;
    });
};



addProduct();
addPopularProducts();
addToCart();
showCart();