// ==========================================
// 1. الثوابت والإعدادات الرئيسية
// ==========================================
const DEFAULT_PRICE = 2.00;
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80";
const MY_PHONE_NUMBER = "962785522491"; // رقم الواتساب الكامل للتحويل
const CLIQ_NUMBER = "0785522491";       // رقم CliQ الكامل للنسخ

// ==========================================
// 2. قائمة العناصر (Menu Items)
// ==========================================
const menuItems = [
    // الرئيسي
    { id: 1, name: "حمص", category: "main", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.8IJRkcwGT9aOjDyDWHUh6gHaEs?r=0&pid=Api&h=220&P=0" },
    { id: 2, name: "حمص بيروتي", category: "main", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/small/8e/8e788029fd67f0e08ce24ca89c100674_w750_h500.jpg" },
    { id: 3, name: "فول", category: "main", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.EJq08RvQ0cu3EfmoXEtNqAHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 4, name: "مسبحة", category: "main", price: DEFAULT_PRICE, image: "https://i.ytimg.com/vi/VH-qKUPwOCY/maxresdefault.jpg" },
    { id: 5, name: "متّبل", category: "main", price: DEFAULT_PRICE, image: "https://i.ytimg.com/vi/uTOxh8h68Kw/maxresdefault.jpg" },
    { id: 8, name: "جبنة حلوم مشوي", category: "main", price: DEFAULT_PRICE, image: "https://wasfetmama.com/wp-content/uploads/2023/04/grilled-halloumi-1-2022_1.jpg" },
    { id: 9, name: "جبنة حلوم", category: "main", price: DEFAULT_PRICE, image: "https://yummy.awicdn.com/site-images/sites/default/files/prod/recipe/a/a/395637/3b7e2c17c225fc9a0e09c1fac41b9ff99b8426e3-090321192152.jpg?preset=article-main-img&save-png=1&rnd=1519151RND220215" },
    { id: 10, name: "لبنة", category: "main", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.kzh3KCuaatWb0oO7t44HRwHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 11, name: "مقدوس بالجوز", category: "main", price: DEFAULT_PRICE, image: "https://www.salla.ps/wp-content/uploads/2020/08/IMG-1431-scaled.jpg" },
    { id: 13, name: "فلفل عادي 5 حبات", category: "main", price: DEFAULT_PRICE, image: "https://dokkan-albalady.com/wp-content/uploads/2023/07/%D9%81%D9%84%D9%81%D9%84.jpeg" },
    { id: 14, name: "فلفل محشي الحبة", category: "main", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/small/1f/1fe0b69532a777e795b63fb5eec90a33_w750_h500.jpeg" },

    // الساخن
    { id: 15, name: "لحمة ع حمص", category: "hot", price: DEFAULT_PRICE, image: "https://i.pinimg.com/736x/3e/8c/38/3e8c3815b0f1aecff33c8e297470b6cc.jpg" },
    { id: 16, name: "كبدة دجاج", category: "hot", price: DEFAULT_PRICE, image: "https://i.pinimg.com/originals/6f/ac/c3/6facc3b9010d0d5df678abda79d80f2c.jpg" },
    { id: 17, name: "كبدة غنم", category: "hot", price: DEFAULT_PRICE, image: "https://zahrah.com/wp-content/uploads/2020/05/zahrah1545.jpg" },
    { id: 18, name: "قلاية سادة", category: "hot", price: DEFAULT_PRICE, image: "https://hashemrestaurants.com/ae/wp-content/uploads/2021/09/WhatsApp-Image-2021-04-04-at-11.08.04-AM-16.jpeg" },
    { id: 19, name: "قلاية باللحمة", category: "hot", price: DEFAULT_PRICE, image: "https://i.ytimg.com/vi/gPfi4tYYtbg/maxresdefault.jpg" },
    { id: 20, name: "قلاية رأس عصفور", category: "hot", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.VDyD_SxtMR5s6jBJVfDSLAHaFS?r=0&pid=Api&h=220&P=0" },
    { id: 21, name: "مفركة", category: "hot", price: DEFAULT_PRICE, image: "https://ma3lomateworld.com/wp-content/uploads/2022/12/f38d28d0e106e73e4b50afcf8b1e9c92.webp" },
    { id: 22, name: "بيض عجة", category: "hot", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.Q9CZlucwO_jbJbahExjw8AHaE7?r=0&pid=Api&h=220&P=0" },
    { id: 23, name: "بيض عيون", category: "hot", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.gXVCUDM2C74tIfU6AUUj8QHaEK?r=0&pid=Api&h=220&P=0" },
    { id: 25, name: "سجق بلدي", category: "hot", price: DEFAULT_PRICE, image: "https://i.pinimg.com/736x/57/4d/cf/574dcfae130bd66758ade150a26f3e36.jpg" },
    { id: 26, name: "سجق مع بيض", category: "hot", price: DEFAULT_PRICE, image: "https://modo3.com/thumbs/fit630x300/159507/1495716637/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%B3%D8%AC%D9%82_%D8%A8%D8%A7%D9%84%D8%A8%D9%8A%D8%B6.jpg" },
    { id: 27, name: "صاجية لحمة", category: "hot", price: DEFAULT_PRICE, image: "https://tse3.mm.bing.net/th/id/OIP.u2BMUmFxkCL19gmnQqOmaAHaE8?r=0&pid=Api&h=220&P=0" },
    { id: 28, name: "فهيتا", category: "hot", price: DEFAULT_PRICE, image: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/zjbj1ej8yiayqcd9jaopecltydy8/%D8%B5%D8%AD%D9%86%20%D9%81%D8%A7%D9%87%D9%8A%D8%AA%D8%A7%20%D8%AF%D8%AC%D8%A7%D8%AC%20%D8%A8%D8%A7%D9%84%D8%AC%D8%A8%D9%86.png?w=1080&q=75" },
    { id: 29, name: "دجاج بالكريما", category: "hot", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.t6Rbat5qCY4ozWOmuDD-ggHaHO?r=0&pid=Api&h=220&P=0" },
    { id: 30, name: "كفتة طحينية", category: "hot", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.RPJWW_sWOT9f5GOvPd4FSQHaE8?r=0&pid=Api&h=220&P=0" },
    { id: 31, name: "كفتة بندورة", category: "hot", price: DEFAULT_PRICE, image: "https://i.ytimg.com/vi/xrY1sgDettw/maxresdefault.jpg" },
    { id: 32, name: "بطاطا حارة", category: "hot", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/node/1710321777_node.JPG" },
    { id: 33, name: "بطاطا قلي", category: "hot", price: DEFAULT_PRICE, image: "https://chefshoppro.com/wp-content/uploads/2020/05/french-fries.jpg" },

    // المشاوي
    { id: 38, name: "وجبة مشكل", category: "grill", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.bERIjTsZz0HscUtYJgT7twHaE7?r=0&pid=Api&h=220&P=0" },
    { id: 39, name: "وجبة كباب", category: "grill", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.tlnnpStxGhrla87_ujJXmQHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 40, name: "وجبة شيش طاووق", category: "grill", price: DEFAULT_PRICE, image: "https://tse2.mm.bing.net/th/id/OIP.pM_2OZRmKrTRxxkWgF9mggHaEy?r=0&pid=Api&h=220&P=0" },
    { id: 41, name: "دجاج مشوي على الفحم", category: "grill", price: DEFAULT_PRICE, image: "https://img-global.cpcdn.com/recipes/127532/1200x630cq70/photo.jpg" },
    { id: 42, name: "سجق مشوي على الفحم", category: "grill", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.QTnccxlDw1glj5HIpgGeFAHaEz?r=0&pid=Api&h=220&P=0" },

    // السندويشات
    { id: 43, name: "حمص وفلافل", category: "sandwiches", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/small/30/30e22aaff1094dff84ba4d8c9bd6af99_w550_h550.jpg" },
    { id: 44, name: "حمص باللحمة", category: "sandwiches", price: DEFAULT_PRICE, image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638163692501259138" },
    { id: 45, name: "كبده دجاج", category: "sandwiches", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/small/f2/f2ac07baa8c0e0bcf3a2322d983a3fdb_w750_h500.jpg" },
    { id: 46, name: "كبده غنم", category: "sandwiches", price: DEFAULT_PRICE, image: "https://tse4.mm.bing.net/th/id/OIP.TtoPRA1hL40IBqUdMf0otAHaEL?r=0&pid=Api&h=220&P=0" },
    { id: 47, name: "مفركة", category: "sandwiches", price: DEFAULT_PRICE, image: "https://img-global.cpcdn.com/recipes/778aa9cffd18f06c/1200x630cq80/photo.jpg" },
    { id: 49, name: "نقانق", category: "sandwiches", price: DEFAULT_PRICE, image: "https://images.deliveryhero.io/image/hungerstation/product/image/143002?width=1440&quality=75" },
    { id: 50, name: "بيض", category: "sandwiches", price: DEFAULT_PRICE, image: "https://img-global.cpcdn.com/recipes/25366135812107f2/1200x630cq70/photo.jpg" },
    { id: 52, name: "لبنه مع سنيورة", category: "sandwiches", price: DEFAULT_PRICE, image: "https://tse3.mm.bing.net/th/id/OIP.cSIx9k2yHTLdWpufMsORBgHaE8?r=0&pid=Api&h=220&P=0" },

    // السلطات
    { id: 54, name: "تبولة", category: "salads", price: DEFAULT_PRICE, image: "https://tse4.mm.bing.net/th/id/OIP.AzqcCBCjzNE5tJMICLvMxAHaFt?r=0&pid=Api&h=220&P=0" },
    { id: 55, name: "جرجير", category: "salads", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.dJfQVBmE21zGf24kXnErQwHaD4?r=0&pid=Api&h=220&P=0" },
    { id: 56, name: "فتوش", category: "salads", price: DEFAULT_PRICE, image: "https://kitchen.sayidaty.net/uploads/small/b3/b37d14c228c1f4120a3d0cf35e6ada70_w750_h500.jpg" },
    { id: 57, name: "سلطة بطحينية", category: "salads", price: DEFAULT_PRICE, image: "https://www.edarabia.com/ar/wp-content/uploads/2021/03/how-prepare-tahini-salad-6-ways-make-different-tahini-salads-suit-tastes.jpg" },
    { id: 58, name: "سلطة فلاحية", category: "salads", price: DEFAULT_PRICE, image: "https://hsaa.hsobjects.com/h/menuitems/images/000/451/234/9e3d059888c4ecfe1d20ba763516d4a2-size1200.jpg" },

    // المشروبات
    { id: 60, name: "عصير برتقال طبيعي", category: "drinks", price: DEFAULT_PRICE, image: "https://tse3.mm.bing.net/th/id/OIP.mopwKoDkyQF8Yos4zPaGNgHaE8?r=0&pid=Api&h=220&P=0" },
    { id: 61, name: "عصير ليمون", category: "drinks", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.bl3aoR3nqynxQoIbGl2h3QHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 62, name: "عصير ليمون مع نعنع", category: "drinks", price: DEFAULT_PRICE, image: "https://d26e3f10zvrezp.cloudfront.net/Gallery/0f332df3-fef5-408a-a5f1-ab3636a389e1-1024x1024.webp" },
    { id: 63, name: "عيران", category: "drinks", price: DEFAULT_PRICE, image: "https://tse1.mm.bing.net/th/id/OIP.4gpofrEoadCByoQ55bS7lQHaLE?r=0&pid=Api&h=220&P=0" },
    { id: 64, name: "مياه معدنية", category: "drinks", price: DEFAULT_PRICE, image: "https://tse3.mm.bing.net/th/id/OIP.DizxIp69B7in6Tv_KHnedQHaEK?r=0&pid=Api&h=220&P=0" },
    { id: 65, name: "مشروبات غازية", category: "drinks", price: DEFAULT_PRICE, image: "https://www.atyabtabkha.com/tachyon/sites/2/2023/06/sof-drink-3.gif?fit=1024%2C630" },
    { id: 66, name: "قهوة", category: "drinks", price: DEFAULT_PRICE, image: "https://tse4.mm.bing.net/th/id/OIP.UyaeQN31o_pXnC2s15nONwHaHa?r=0&pid=Api&h=220&P=0" }
];

let cart = [];

// ==========================================
// 3. عرض العناصر والفلترة
// ==========================================
function displayMenuItems(items) {
    const container = document.getElementById("menuContainer");
    if (!container) return;
    
    container.innerHTML = "";

    items.forEach(item => {
        const imgSrc = (item.image && item.image.trim() !== "") ? item.image : DEFAULT_IMAGE;

        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${imgSrc}" alt="${item.name}" class="item-img" loading="lazy" onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';">
            </div>
            <div class="card-body">
                <h3>${item.name}</h3>
                <div class="card-footer-row">
                    <span class="item-price">${item.price.toFixed(2)} د.أ</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">إضافة +</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(category, event) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenuItems(filtered);
    }
}

// ==========================================
// 4. إدارة السلة
// ==========================================
function addToCart(id) {
    const item = menuItems.find(prod => prod.id === id);
    const cartItem = cart.find(prod => prod.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
}

function changeQuantity(id, change) {
    const cartItem = cart.find(prod => prod.id === id);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(prod => prod.id !== id);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cartItemsContainer");
    const cartCount = document.getElementById("cartCount");
    const totalAmount = document.getElementById("totalAmount");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-msg">السلة فارغة حالياً</p>`;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;

            const cartRow = document.createElement("div");
            cartRow.className = "cart-item";
            cartRow.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${itemTotal.toFixed(2)} د.أ</span>
                </div>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartContainer.appendChild(cartRow);
        });
    }

    if (cartCount) cartCount.textContent = count;
    if (totalAmount) totalAmount.textContent = `${total.toFixed(2)} د.أ`;
}

function toggleCart() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.classList.toggle("active");
}

function handlePaymentChange() {
    const paymentSelect = document.getElementById("paymentMethod");
    const cliqNotice = document.getElementById("cliqNotice");

    if (!paymentSelect || !cliqNotice) return;

    if (paymentSelect.value === "cliq") {
        cliqNotice.style.display = "block";
    } else {
        cliqNotice.style.display = "none";
    }
}

// دالة نسخ رقم CliQ الكامل من الخلفية
function copyCliqNumber() {
    const cliqNumElem = document.getElementById("cliqNum");
    const fullNumber = cliqNumElem ? (cliqNumElem.getAttribute("data-full-num") || CLIQ_NUMBER) : CLIQ_NUMBER;

    navigator.clipboard.writeText(fullNumber).then(() => {
        alert("تم نسخ رقم CliQ بنجاح!");
    }).catch(() => {
        alert("رقم التحويل هو: " + fullNumber);
    });
}

// ==========================================
// 5. إرسال الطلب عبر الواتساب
// ==========================================
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("السلة فارغة! يرجى اختيار المنتجات أولاً.");
        return;
    }

    const paymentSelect = document.getElementById("paymentMethod");
    let selectedPaymentText = "نقداً (عند الاستلام)";
    let isCliq = false;

    if (paymentSelect && paymentSelect.selectedIndex !== -1) {
        selectedPaymentText = paymentSelect.options[paymentSelect.selectedIndex].text;
        if (paymentSelect.value === "cliq") {
            isCliq = true;
        }
    }

    let message = "*تفاصيل الطلب:*\n";

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name} (عدد: ${item.quantity}) - ${itemTotal.toFixed(2)} د.أ\n`;
    });

    message += `\n💰 *المجموع الكلي:* ${total.toFixed(2)} د.أ\n`;
    message += `💳 *طريقة الدفع:* ${selectedPaymentText}\n\n`;

    if (isCliq) {
        message += "📌 *ملاحظة:* تم اختيار الدفع عبر CliQ. (يرجى إرفاق صورة وصل التحويل هنا لتأكيد الطلب/الحجز).\n";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}

// ==========================================
// 6. تهيئة البحث والمشروع
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const filtered = menuItems.filter(item => item.name.toLowerCase().includes(searchTerm));
            displayMenuItems(filtered);
        });
    }

    displayMenuItems(menuItems);
});