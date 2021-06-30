
const getData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjUwNTc3NTAsImV4cCI6MTYyNjI2NzM1MH0.OXxI2bYNf3jJ6nk1OiFnfaesutgZhhaRz8WEGEfw_mg"
            }
            })
        const products = await response.json()
        return products
    } catch (err) {
        console.log(err)
    }
}

const displayProducts = (products) => {
    let row = document.querySelector(".row")

        products.forEach((product) => {
            let col = document.createElement("div")
            col.classList.add("col-3", "mb-4")
            col.innerHTML = `<div class="card" style="height: 36rem">
                                <img src="${product.imageUrl}" class="card-img-top img-fluid pt-1" alt="Product" style="height: 18rem">
                                <div class="card-body">
                                   <h5 class="card-title">${product.name}</h5>
                                   <p class="card-text description">${product.description}</p>
                                   <p class="card-text">Brand: ${product.brand}</p>
                                   <span class="d-flex justify-content-between">Price: ${product.price}$<a href="#" class="btn btn-primary"><i class="bi bi-cart3"></i> Buy</a></span>
                                </div>
                            </div>`
            row.appendChild(col)
        })
    
}

window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const products = await getData(url)
    displayProducts(products)
}