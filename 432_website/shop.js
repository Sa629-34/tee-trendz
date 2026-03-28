function addToCart(button) {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) { alert("Login first!"); return; }

    const productCard = button.parentElement;
    const image = productCard.querySelector("img").src;
    const price = productCard.querySelector("span").innerText;

    fetch("http://localhost:3000/add-to-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userId: user._id,
            image: image,
            price: price
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Cart Updated:", data);
        alert("Added to Cart!");
        // optional: update mini-cart
    })
    .catch(err => console.error(err));
}
function updateCartCount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    fetch(`http://localhost:3000/cart/${user._id}`)
    .then(res => res.json())
    .then(data => {
        const totalItems = data.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-count").innerText = totalItems;
    });
}
function searchProducts() {
    // Dono search bars se value lo
    const input = document.getElementById("searchInput") || 
                  document.getElementById("navSearch");
    const query = input.value.toLowerCase();

    // Sab products dhundho
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const img = product.querySelector("img");
        const price = product.querySelector("span");

        // Image alt text aur price mein search karo
        const altText = img ? img.alt.toLowerCase() : "";
        const priceText = price ? price.innerText.toLowerCase() : "";

        if (altText.includes(query) || priceText.includes(query)) {
            product.style.display = "flex"; // dikhao
        } else {
            product.style.display = "none"; // chhupaao
        }
    });
}


// Page load hone par bhi count dikhao
updateCartCount();
