const products = [
  {
    id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
    category: "Cap",
    name: "UNISEX ORIGINALS WASHED BUCKET",
    seller: "Addidas",
    img: "https://plus.unsplash.com/premium_photo-1681487367144-3ac7acfead6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 27, stock: 14, shipping: 14, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 3 },
  },
  {
    id: "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
    category: "Cap",
    name: "SST Plus Strap-Back Hat",
    seller: "Addidas",
    img: "https://images.unsplash.com/photo-1483103068651-8ce44652c331?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 23, stock: 14, shipping: 47, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 32 },
  },
  {
    id: "5690e579-a943-4b42-9ffe-dfc65b71c560",
    category: "Cap",
    name: "Dispatch Trucker Hat",
    seller: "Addidas",
    img: "https://images.unsplash.com/photo-1466992133056-ae8de8e22809?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 28, stock: 16, shipping: 14, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 30 },
  },
  {
    id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
    category: "Earphones",
    name: "adidas Z.N.E. 01 True Wireless Earbuds",
    seller: "Addidas",
    img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 142, stock: 11, shipping: 23, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 22 },
  },
  {
    id: "b278e667-ca17-465c-b603-af1af4319b7b",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://images.unsplash.com/photo-1536435316746-a0b5a1665819?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 135, stock: 16, shipping: 30, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 51 },
  },
  {
    id: "1f56c0e5-4407-44bf-9225-90f592d2924a",
    category: "Earphones",
    name: "FWD-01 Sport In-Ear Headphones",
    seller: "Addidas",
    img: "https://images.unsplash.com/photo-1536435316746-a0b5a1665819?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 185, stock: 8, shipping: 15, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 66 },
  },
  {
    id: "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
    category: "Earphones",
    name: "adidas FWD-02 Sport True Wireless Earbuds",
    seller: "Addidas",
    img: "https://images.unsplash.com/photo-1531860898813-8cecde84646c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 162, stock: 14, shipping: 29, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 6 },
  },
  {
    id: "d1116075-10f2-49c4-985e-0d41e19ce1b3",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://plus.unsplash.com/premium_photo-1680346529160-549ad950bd1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: { price: 110, stock: 15, shipping: 48, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 9 },
  },
];


let cartCount = 0 ; 
let subTotal = 0; 

function displayProducts() {
  for (let item of products) {
    const card = document.createElement("div");
    card.innerHTML = `
     <div class="card  bg-base-100 shadow-xl h-full">
              <figure>
                <img src=${item.img}
                  alt="Shoes"
                  class="rounded-xl"
                   />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title ">${item.name}</h2>
                <p> Price:${item.details.price}$</p>
                <div class="card-actions">
                  <button onclick='addToCart("${item.name}",${item.details.price})' class="btn btn-primary">Add to Cart</button>
                </div>
              </div>
      </div>
    `;
    document.getElementById("products").append(card);
  }
}

function addToCart(name,price){
  cartCount ++ ; 
  subTotal = subTotal + price ; 
  // console.log(subTotal)
  const cardCountContainer = document.getElementById('card-count');
  const cardTotalCOntainer = document.getElementById('card-total');
  const subTotalCOntainer = document.getElementById('sub-total');
  cardCountContainer.innerText = cartCount ;
  cardTotalCOntainer.innerText = cartCount;
  subTotalCOntainer.innerText = subTotal;
}
displayProducts();
