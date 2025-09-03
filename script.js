// Product data
const products = [
  { name: "Instagram Followers", price: "₹200 / 1K", desc: "Non-drop followers • Lifetime guarantee", category: "service", img: "https://img.icons8.com/fluency/96/group.png" },
  { name: "Instagram Likes", price: "₹20 / 1K", desc: "No-drop likes • Instant delivery", category: "service", img: "https://img.icons8.com/fluency/96/hearts.png" },
  { name: "Instagram Comments", price: "₹50", desc: "Custom comments", category: "service", img: "https://img.icons8.com/fluency/96/comments.png" },
  { name: "Instagram Views", price: "₹2 / 1K", desc: "Fast delivery • No-drop", category: "service", img: "https://img.icons8.com/fluency/96/view-file.png" },

  { name: "2012 Instagram Old ID", price: "₹100", desc: "Made in 2012 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2013 Instagram Old ID", price: "₹90", desc: "Made in 2013 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2014 Instagram Old ID", price: "₹80", desc: "Made in 2014 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2015 Instagram Old ID", price: "₹70", desc: "Made in 2015 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2016 Instagram Old ID", price: "₹60", desc: "Made in 2016 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2017 Instagram Old ID", price: "₹50", desc: "Made in 2017 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2018 Instagram Old ID", price: "₹40", desc: "Made in 2018 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
  { name: "2019 Instagram Old ID", price: "₹30", desc: "Made in 2019 • Rare", category: "oldid", img: "https://img.icons8.com/fluency/96/calendar.png" },
];

// Load products
const container = document.getElementById("products");
function loadProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-content">
          <h2>${p.name}</h2>
          <p>${p.desc}</p>
          <strong>${p.price}</strong>
        </div>
        <button class="buy-btn" onclick="buy('${p.name}','${p.price}')">BUY</button>
      </div>
    `;
  });
}
loadProducts(products);

// Buy function (auto copy + open Telegram)
function buy(service, price) {
  const message = `Hello! I want to buy ${service} – ${price}`;
  navigator.clipboard.writeText(message).then(() => {
    alert("Message copied! Paste in Telegram chat.");
  });
  window.open("https://t.me/irfanogu", "_blank");
}

// Search & Filter
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(val));
  loadProducts(filtered);
});

document.getElementById("filter").addEventListener("change", e => {
  const val = e.target.value;
  if (val === "all") loadProducts(products);
  else loadProducts(products.filter(p => p.category === val));
});
