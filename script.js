const cart = document.querySelector(".cart");
const addButtons = document.querySelectorAll(".card button");
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

let cartCount = 0;

// Add to Cart
addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        cartCount++;

        cart.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            Cart (${cartCount})
        `;

        button.textContent = "Added ✓";
        button.style.background = "#28a745";
        button.style.color = "#fff";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "#ffd814";
            button.style.color = "#111";
        }, 1000);
    });
});

// Live Search
searchInput.addEventListener("keyup", () => {
    const search = searchInput.value.toLowerCase();

    cards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Hero Button
const shopBtn = document.querySelector(".overlay button");

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Back to Top
const backToTop = document.querySelector(".footer-top");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}