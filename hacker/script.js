
const products = [
    {
        id: 1,
        name: "Royal Gala Apples",
        category: "Produce",
        price: 49.90,
        unit: "1 kg",
        label: "Fresh pick",
        rating: "★ 4.9",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Ripe Bananas",
        category: "Produce",
        price: 42.50,
        unit: "1 kg",
        label: "Everyday",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Vine Tomatoes",
        category: "Produce",
        price: 36.90,
        unit: "1 kg",
        label: "Seasonal",
        rating: "★ 4.7",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Fresh Spinach",
        category: "Produce",
        price: 29.90,
        unit: "200 g",
        label: "Fresh pick",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Free-Range Eggs",
        category: "Dairy",
        price: 79.90,
        unit: "10 pack",
        label: "Farm favourite",
        rating: "★ 4.9",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Whole Milk",
        category: "Dairy",
        price: 34.50,
        unit: "1 L",
        label: "Everyday",
        rating: "★ 4.7",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "White Cheese",
        category: "Dairy",
        price: 96.90,
        unit: "400 g",
        label: "Customer favourite",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Rolled Oats",
        category: "Pantry",
        price: 44.90,
        unit: "500 g",
        label: "Pantry staple",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Penne Pasta",
        category: "Pantry",
        price: 32.90,
        unit: "500 g",
        label: "Easy dinner",
        rating: "★ 4.7",
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Extra Virgin Olive Oil",
        category: "Pantry",
        price: 189.90,
        unit: "500 ml",
        label: "Kitchen essential",
        rating: "★ 4.9",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 59.90,
        unit: "1 L",
        label: "Bright & fresh",
        rating: "★ 4.6",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Butter Cookies",
        category: "Snacks",
        price: 54.90,
        unit: "250 g",
        label: "Little treat",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Fresh Avocados",
        category: "Produce",
        price: 69.90,
        unit: "2 pieces",
        label: "Fresh pick",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Sourdough Bread",
        category: "Pantry",
        price: 64.90,
        unit: "1 loaf",
        label: "Bakery",
        rating: "★ 4.7",
        image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Greek Yoghurt",
        category: "Dairy",
        price: 48.90,
        unit: "400 g",
        label: "Creamy",
        rating: "★ 4.8",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Dark Chocolate",
        category: "Snacks",
        price: 39.90,
        unit: "100 g",
        label: "Little treat",
        rating: "★ 4.9",
        image: "https://images.unsplash.com/photo-1548907040-4d42e3f8c6b7?auto=format&fit=crop&w=600&q=80"
    }
];

const state = {
    category: "All",
    search: "",
    sort: "featured",
    cart: []
};

const $ = selector => document.querySelector(selector);

const money = amount => amount.toLocaleString("en-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2
});

function safeText(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// PRODUCT LIST

function getVisibleProducts() {
    let result = products.filter(product => {
        const matchesCategory =
            state.category === "All" ||
            product.category === state.category;

        const searchableText =
            `${product.name} ${product.category} ${product.unit}`
                .toLowerCase();

        const matchesSearch = searchableText.includes(
            state.search.toLowerCase()
        );

        return matchesCategory && matchesSearch;
    });

    if (state.sort === "price-low") {
        result.sort((a, b) => a.price - b.price);
    }

    if (state.sort === "price-high") {
        result.sort((a, b) => b.price - a.price);
    }

    if (state.sort === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}

function renderProducts() {
    const visibleProducts = getVisibleProducts();
    const productGrid = $("#productGrid");

    productGrid.innerHTML = visibleProducts.map(product => `
        <article class="product-card">
            <div class="product-photo">
                <img
                    src="${product.image}"
                    alt="${safeText(product.name)}"
                    loading="lazy"
                >

                <span class="product-label">
                    ${safeText(product.label)}
                </span>

                <button
                    class="quick-add"
                    data-add="${product.id}"
                    aria-label="Add ${safeText(product.name)} to bag"
                >+</button>
            </div>

            <div class="product-meta">
                <span class="product-category">
                    ${safeText(product.category)}
                </span>
                <span class="product-rating">
                    ${safeText(product.rating)}
                </span>
            </div>

            <h3 class="product-name">
                ${safeText(product.name)}
            </h3>

            <div class="product-bottom">
                <span class="product-price">
                    ${money(product.price)}
                </span>
                <span class="product-unit">
                    ${safeText(product.unit)}
                </span>
            </div>
        </article>
    `).join("");

    $("#emptyResults").hidden = visibleProducts.length > 0;
    productGrid.hidden = visibleProducts.length === 0;
}

// SHOP FILTERS

function setCategory(category) {
    state.category = category;

    document.querySelectorAll("[data-filter]").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === category
        );
    });

    renderProducts();
}

$("#filters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");

    if (button) {
        setCategory(button.dataset.filter);
    }
});

document.querySelectorAll("[data-department]").forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.department);
        $("#shop").scrollIntoView({ behavior: "smooth" });
    });
});

$("#searchInput").addEventListener("input", event => {
    state.search = event.target.value.trim();
    renderProducts();
});

$("#sortSelect").addEventListener("change", event => {
    state.sort = event.target.value;
    renderProducts();
});

function resetShop() {
    state.category = "All";
    state.search = "";
    state.sort = "featured";

    $("#searchInput").value = "";
    $("#sortSelect").value = "featured";

    setCategory("All");
}

$("#resetFilters").addEventListener("click", resetShop);

$("#showAll").addEventListener("click", () => {
    resetShop();
    $("#shop").scrollIntoView({ behavior: "smooth" });
});

// SHOPPING BAG

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    const existingItem = state.cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }

    renderCart();
    showToast(`${product.name} added to your bag`);
}

function changeQuantity(id, change) {
    const item = state.cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        state.cart = state.cart.filter(product => product.id !== id);
    }

    renderCart();
}

function removeFromCart(id) {
    state.cart = state.cart.filter(product => product.id !== id);
    renderCart();
}

function renderCart() {
    const itemCount = state.cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const subtotal = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    $("#cartCount").textContent = itemCount;
    $("#drawerCount").textContent = `(${itemCount})`;
    $("#cartTotal").textContent = money(subtotal);
    $("#checkoutBtn").disabled = state.cart.length === 0;

    const deliveryGoal = 750;
    const progress = Math.min(subtotal / deliveryGoal * 100, 100);

    $("#deliveryProgress").style.width = `${progress}%`;

    $("#deliveryMessage").textContent =
        subtotal >= deliveryGoal
            ? "You've reached the free delivery threshold."
            : `Add ${money(deliveryGoal - subtotal)} more for free delivery.`;

    if (state.cart.length === 0) {
        $("#cartItems").innerHTML = `
            <div class="empty-cart">
                <strong>Your bag is taking a little break.</strong>
                <p>Browse the shelves and add a few everyday favourites.</p>
            </div>
        `;

        return;
    }

    $("#cartItems").innerHTML = state.cart.map(item => `
        <article class="cart-item">
            <img src="${item.image}" alt="${safeText(item.name)}">

            <div>
                <h3>${safeText(item.name)}</h3>
                <p class="item-unit">${safeText(item.unit)}</p>
                <p class="item-price">
                    ${money(item.price * item.quantity)}
                </p>

                <button
                    class="remove-item"
                    data-remove="${item.id}"
                >Remove</button>
            </div>

            <div class="quantity-control">
                <button
                    data-quantity="${item.id}"
                    data-change="-1"
                    aria-label="Decrease quantity"
                >−</button>

                <span>${item.quantity}</span>

                <button
                    data-quantity="${item.id}"
                    data-change="1"
                    aria-label="Increase quantity"
                >+</button>
            </div>
        </article>
    `).join("");
}

$("#productGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (button) {
        addToCart(Number(button.dataset.add));
    }
});

$("#cartItems").addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-quantity]");
    const removeButton = event.target.closest("[data-remove]");

    if (quantityButton) {
        changeQuantity(
            Number(quantityButton.dataset.quantity),
            Number(quantityButton.dataset.change)
        );
    }

    if (removeButton) {
        removeFromCart(Number(removeButton.dataset.remove));
    }
});

// DRAWER CONTROLS

const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");

function openCart() {
    cartDrawer.classList.add("open");
    overlay.classList.add("show");
    cartDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#closeCart").focus();
}

function closeCart() {
    cartDrawer.classList.remove("open");
    overlay.classList.remove("show");
    cartDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

// NOTIFICATIONS

let toastTimeout;

function showToast(message) {
    const toast = $("#toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2300);
}

// ACCOUNT MODAL

const accountModal = $("#accountModal");

$("#accountBtn").addEventListener("click", () => {
    accountModal.classList.add("show");
});

function closeAccountModal() {
    accountModal.classList.remove("show");
}

$("#closeModal").addEventListener("click", closeAccountModal);
$("#modalOkay").addEventListener("click", closeAccountModal);

accountModal.addEventListener("click", event => {
    if (event.target === accountModal) {
        closeAccountModal();
    }
});

// DEMO CHECKOUT

$("#checkoutBtn").addEventListener("click", () => {
    if (state.cart.length === 0) return;

    showToast("Checkout isn't connected in this demo yet.");
});

// NEWSLETTER FORM

$("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = $("#emailInput");

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
    }

    $("#newsletterMessage").textContent =
        "Thanks for your interest. Newsletter registration is a demo feature.";

    emailInput.value = "";
});

// MOBILE MENU

$("#menuBtn").addEventListener("click", () => {
    const nav = $("#nav");
    nav.classList.toggle("open");

    $("#menuBtn").setAttribute(
        "aria-expanded",
        String(nav.classList.contains("open"))
    );
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        $("#nav").classList.remove("open");
        $("#menuBtn").setAttribute("aria-expanded", "false");
    });
});

// KEYBOARD SHORTCUTS

document.addEventListener("keydown", event => {
    const activeTag = document.activeElement.tagName;

    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(activeTag)
    ) {
        event.preventDefault();
        $("#searchInput").focus();
    }

    if (event.key === "Escape") {
        closeCart();
        closeAccountModal();
    }
});

// INITIAL RENDER

renderProducts();
renderCart();
