const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Shirt", price: 40, category: "Clothing" },
  { name: "Book", price: 20, category: "Stationery" },
  { name: "Shoes", price: 100, category: "Clothing" }
];



let MappedArr = products.map((ele) => ele.name.toUpperCase())
console.log(MappedArr)




let filteredArr = products.filter((ele) => ele.category == "Clothing" )
console.log(filteredArr)




let sortArr = products.sort((a, b) => a.price - b.price).map((ele) => ele.name);
console.log(sortArr);




products.forEach((ele) => {
  console.log(`The product ${ele.name} costs $ ${ele.price} and belongs to ${ele.category} category`)
})



let reduceArr = products.reduce((acc, ele) => acc + ele.price ,0)
console.log(reduceArr)