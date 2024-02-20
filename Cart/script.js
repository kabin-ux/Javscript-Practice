var products = [
    {name: "White Chair", headline: "Soft like cloud", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Black Chair", headline: "Black ", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Traditional Chair", headline: "Old is gold", price: "$5000", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

function addProduct(){
    var clutter = "";
    products.forEach((product) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl" style="background-image: url('${product.image}')"></div>
            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">${product.headline}</h3>
                        <h4 class="font-semibold mt-2">${product.price}</h4>
                    </div>
                    <button class="w-10 h-10 rounded-full shader text-yellow-400"><i class="ri-add-line"></i></button>
                </div>
            </div>
        </div>`;
    });
    
    // Append the generated HTML to the container with the class "products"
    document.querySelector(".products").innerHTML = clutter;
}

addProduct();
