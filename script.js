// ========== Data ==========

        // Product data (change images/titles here for your own products)
        const products = [
            {
                id: 1,
                title: "Paracetamol 500mg",
                desc: "Pain reliever and fever reducer.",
                price: 25,
                //image: ""
            image: "image/Paracetamol.webp"

            },
            {
                id: 2,
                title: "Vitamin C Tablets",
                desc: "Boosts immunity and health.",
                price: 120,
              image: "https://image.made-in-china.com/2f0j00eonhtSYlAvGs/Vitamin-C-Chewable-Tablet-100mg-500mg-Health-Food-Vitamin-Shinepharm.jpg"

           
            },
            {
                id: 3,
                title: "Digital Thermometer",
                desc: "Quick and accurate temperature readings.",
                price: 180,
               image: "https://sidroc.com/wp-content/uploads/2018/07/Rossmax-Digital-Thermometer-TG-380.jpeg"
            
            },
            {
                id: 4,
                title: "Hand Sanitizer",
                desc: "Kills 99.9% germs instantly.",
                price: 60,
                image:"https://i5.walmartimages.com/seo/PURELL-Advanced-Hand-Sanitizer-Naturals-Gel-with-Plant-Based-Alcohol-Citrus-Scent-8-oz-Pump-Bottle_250e7dbf-739d-4ad9-ad15-ab9e5d9533ad.1c1c8aef5bf10f7f0ae0131c48866010.jpeg"
                
            },
            {
                id: 5,
                title: "N95 Face Mask",
                desc: "High protection against airborne particles.",
                price: 35,
                image: "https://m.media-amazon.com/images/I/51-c84F22KL._SL1200_.jpg"
            },
            {
                id: 6,
                title: "Cough Syrup",
                desc: "Soothes sore throat and cough.",
                price: 110,
                image: "https://tse4.mm.bing.net/th/id/OIP.Pr8UjMtRTmR2IxqeOc4j8QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 7,
                title: "Bandage Roll",
                desc: "For wound dressing and support.",
                price: 40,
                image: "https://tse2.mm.bing.net/th/id/OIP.x5iv-CwUVNBo6Ei6f1UeiQHaHR?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 8,
                title: "Antiseptic Cream",
                desc: "Prevents infection in minor cuts.",
                price: 65,
                image: "https://tse1.mm.bing.net/th/id/OIP.4jRDXJcztGJVovHOAMERLAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 9,
                title: "Face Shield",
                desc: "Extra protection for face.",
                price: 85,
                image: "https://m.media-amazon.com/images/S/aplus-media/vc/e56a3e4d-6a4b-48e5-8290-0a7c0ce75ce4.jpg"
            },
            {
                id: 10,
                title: "Steam Inhaler",
                desc: "Relieves nasal congestion.",
                price: 350,
                image: "https://i5.walmartimages.com/asr/c86045e4-5627-402e-9279-aa9c81dbdb33_1.105b2fc84c48bbc50a4b0eb155e0accf.jpeg"
            }
      
            ,
            {
                id: 11,
                title: "Digital Thermometer",
                desc: "Quick and accurate temperature readings.",
                price: 120,
               image: "https://sidroc.com/wp-content/uploads/2018/07/Rossmax-Digital-Thermometer-TG-380.jpeg"
                
            },
            {
                id: 12,
                title: "Vitamin C Tablets",
                desc: "Boosts immunity and overall health.",
                price: 90,
                image: "https://image.made-in-china.com/2f0j00eonhtSYlAvGs/Vitamin-C-Chewable-Tablet-100mg-500mg-Health-Food-Vitamin-Shinepharm.jpg"
            },
            {
                id: 13,
                title: "Blood Pressure Monitor",
                desc: "Track your blood pressure at home.",
                price: 850,
                image: "https://images-na.ssl-images-amazon.com/images/I/81bJhnnmqoL._AC_SL1500_.jpg"
            },
            {
                id: 14,
                title: "Pulse Oximeter",
                desc: "Measures oxygen saturation in blood.",
                price: 450,
                image: "https://tse1.mm.bing.net/th/id/OIP.7KSDR_9SQU3thXdTF2tBDgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 15,
                title: "Pain Relief Spray",
                desc: "Instant relief from muscle pain.",
                price: 130,
                image: "https://i5.walmartimages.com/seo/Biofreeze-Pain-Relief-Spray-for-Back-Knee-Muscle-Joint-and-Arthritis-Pain-3-fl-oz-Menthol_d8ecd9c5-3693-4b6b-b0af-ef502f55a1bd.4b41fcda328403d1eec930d35e034498.jpeg"
            },
            {
                id: 16,
                title: "Allergy Tablets",
                desc: "Fast relief from allergies.",
                price: 75,
                image: "https://th.bing.com/th/id/OIP.dfxrsDdIMzmSdRkOlX3m-wHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 17,
                title: "Glucose Monitor",
                desc: "Monitor your blood sugar levels.",
                price: 950,
                image: "https://tse4.mm.bing.net/th/id/OIP.oshKyCB4-XOH5mcb8LmcZQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 18,
                title: "First Aid Kit",
                desc: "Essential supplies for emergencies.",
                price: 400,
                image: "https://m.media-amazon.com/images/I/71KY6V9LLOL._AC_SL1500_.jpg"
            },
            {
                id: 19,
                title: "Multivitamin Capsules",
                desc: "Daily dose of essential vitamins.",
                price: 180,
                image: "https://tse2.mm.bing.net/th/id/OIP.kRJbw-uxF5YjT0TEE7TRQwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 20,
                title: "Disposable Gloves",
                desc: "Safe and hygienic protection.",
                price: 55,
                image: "https://i5.walmartimages.com/seo/WellBefore-Blue-Nitrile-Disposable-Gloves-Large-100-Ct-Powder-Latex-Free_9b6ca24b-4dcd-4765-96fb-ff0190cf537e.809f746f6868c25c236220665e5d6138.jpeg"
            },
            {
                id: 21,
                title: "Antacid Tablets",
                desc: "Quick relief from acidity.",
                price: 60,
                image: "https://tse2.mm.bing.net/th/id/OIP.8xExQr_EBQWRdGOIIgM4xAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 22,
                title: "Oral Rehydration Salts",
                desc: "Restores body fluids and electrolytes.",
                price: 35,
                image: "https://st-b.medsgo.ph/images/detailed/35/Template_-_cs-cart__9_.png"
            },
            {
                id: 23,
                title: "Nasal Spray",
                desc: "Clears blocked nose instantly.",
                price: 95,
                image: "https://m.media-amazon.com/images/I/81uNfo3SLJL.jpg"
            },
            {
                id: 24,
                title: "Anti-Fungal Cream",
                desc: "Effective treatment for fungal infections.",
                price: 80,
                image: "https://tse2.mm.bing.net/th/id/OIP.o9C70qYD5xU4sSXplPVTTQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 25,
                title: "Eye Drops",
                desc: "Relieves dry and irritated eyes.",
                price: 70,
                image: "https://i5.walmartimages.com/asr/bab62f7d-a7f9-4b0a-98bd-b5156a34c353.28024b593027bc308e52ddea5152d383.jpeg"
            },
            {
                id: 26,
                title: "Cotton Swabs",
                desc: "For gentle cleaning and care.",
                price: 30,
                image: "https://tse1.mm.bing.net/th/id/OIP.qicmyFsWQkjOUeSS_-H0MwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 27,
                title: "Medical Tape",
                desc: "Secure dressings and bandages.",
                price: 45,
                image: "https://th.bing.com/th/id/OIP.7QJd0mUUtOkJdSlRprnSmwHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 28,
                title: "Inhaler",
                desc: "Relief from asthma and breathing issues.",
                price: 220,
                image: "https://tse3.mm.bing.net/th/id/OIP.80t5Y5CNVZVt0BCfcGPSagHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 29,
                title: "Antibacterial Soap",
                desc: "Protects against germs and bacteria.",
                price: 50,
                image: "https://i5.walmartimages.com/seo/Softsoap-Antibacterial-Liquid-Hand-Soap-Crisp-Clean-Scent-Hand-Soap-11-25-oz-Bottle_f65d3089-f43c-4273-86a3-289f9efda5dc.c5b3ba3df47706b43a1759818add9035.jpeg"
            },
            {
                id: 30,
                title: "Cold & Flu Tablets",
                desc: "Fast relief from cold and flu symptoms.",
                price: 100,
                image: "https://tse2.mm.bing.net/th/id/OIP.l3Z_adq2Zv166nuaNKvu9gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            }
        ];

        // ========== User & Cart State ==========
        let user = null; // {name, email, password, phone, address, image}
        let cart = []; // [{id, qty}]
        // ========== Utility ==========
        function setJSON(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        function getJSON(key) {
            const v = localStorage.getItem(key);
            if (!v) return null;
            try { return JSON.parse(v); } catch { return null; }
        }
        function userKey(email) {
            return "medico_user_" + email.toLowerCase();
        }
        function cartKey(email) {
            return "medico_cart_" + email.toLowerCase();
        }
        // ========== Auth ==========
        function openLogin() {
            document.getElementById('login-modal').classList.add('active');
        }
        function closeLogin() {
            document.getElementById('login-modal').classList.remove('active');
        }
        function openRegister() {
            document.getElementById('register-modal').classList.add('active');
        }
        function closeRegister() {
            document.getElementById('register-modal').classList.remove('active');
        }
        function openProfile() {
            if (!user) { openLogin(); return; }
            renderProfile();
            document.getElementById('profile-modal').classList.add('active');
        }
        function closeProfile() {
            document.getElementById('profile-modal').classList.remove('active');
        }
        function logout() {
            user = null;
            cart = [];
            localStorage.removeItem("medico_current_user");
            updateProfileNav();
            updateCartCount();
            showPage('home');
            openLogin();
            closeProfile();
        }
        // ========== Page Navigation ==========
        function showPage(page) {
            ['home','store','about','contact'].forEach(p=>{
                document.getElementById(p+'-page').style.display = (p===page) ? '' : 'none';
            });
        }
        // ========== Product Rendering ==========
        function renderRecommended() {
            const grid = document.getElementById('recommended-products');
            grid.innerHTML = '';
            products.slice(0,4).forEach(prod => {
                grid.appendChild(productCard(prod));
            });
        }
        function renderStore() {
            const grid = document.getElementById('store-products');
            grid.innerHTML = '';
            products.forEach(prod => {
                grid.appendChild(productCard(prod));
            });
        }
        function productCard(prod) {
            const card = document.createElement('div');
            card.className = 'product-card slide-up';
            card.innerHTML = `
                <img src="${prod.image}" alt="${prod.title}">
                <div class="product-title">${prod.title}</div>
                <div class="product-desc">${prod.desc}</div>
                <div class="product-price">₹${prod.price}</div>
                <button class="add-cart-btn" onclick="addToCart(${prod.id})">Add to Cart</button>
            `;
            return card;
        }
        // ========== Cart ==========
        function openCart() {
            if (!user) { openLogin(); return; }
            renderCart();
            document.getElementById('cart-modal').classList.add('active');
        }
        function closeCart() {
            document.getElementById('cart-modal').classList.remove('active');
        }
        function addToCart(id) {
            if (!user) { openLogin(); return; }
            let item = cart.find(c=>c.id===id);
            if (item) item.qty++;
            else cart.push({id, qty:1});
            setJSON(cartKey(user.email), cart);
            updateCartCount();
            // Animation
            document.querySelector('.cart-btn').classList.add('cart-bounce');
            setTimeout(()=>document.querySelector('.cart-btn').classList.remove('cart-bounce'), 400);
        }
        function removeFromCart(id) {
            cart = cart.filter(c=>c.id!==id);
            setJSON(cartKey(user.email), cart);
            renderCart();
            updateCartCount();
        }
        function updateCartCount() {
            document.getElementById('cart-count').textContent = user && cart ? cart.reduce((a,b)=>a+b.qty,0) : 0;
        }
        function renderCart() {
            const itemsDiv = document.getElementById('cart-items');
            itemsDiv.innerHTML = '';
            let total = 0;
            if (!cart || cart.length===0) {
                itemsDiv.innerHTML = '<div style="text-align:center;color:#888;">Cart is empty.</div>';
            } else {
                cart.forEach(item=>{
                    const prod = products.find(p=>p.id===item.id);
                    if (!prod) return;
                    total += prod.price * item.qty;
                    const div = document.createElement('div');
                    div.className = 'cart-item';
                    div.innerHTML = `
                        <img src="${prod.image}" alt="${prod.title}">
                        <div>
                            <div class="cart-item-title">${prod.title}</div>
                            <div class="cart-item-qty">Qty: ${item.qty}</div>
                        </div>
                        <div style="font-weight:600;color:var(--primary);margin-left:auto;">₹${prod.price*item.qty}</div>
                        <button class="cart-item-remove" onclick="removeFromCart(${prod.id})"><i class="fa-solid fa-trash"></i></button>
                    `;
                    itemsDiv.appendChild(div);
                });
            }
            document.getElementById('cart-total').textContent = "Total: ₹" + total;
        }
        // ========== Checkout ==========
        function openCheckout() {
            if (!user) { openLogin(); return; }
            if (!cart || cart.length===0) { alert("Cart is empty!"); return; }
            // Prefill user info
            document.getElementById('checkout-name').value = user.name || '';
            document.getElementById('checkout-phone').value = user.phone || '';
            document.getElementById('checkout-address').value = user.address || '';
            document.getElementById('checkout-payment').value = '';
            document.getElementById('checkout-modal').classList.add('active');
        }
        function closeCheckout() {
            document.getElementById('checkout-modal').classList.remove('active');
        }
        document.getElementById('checkout-form').onsubmit = function(e) {
            e.preventDefault();
            // You can add payment logic here
            alert("Order placed successfully!\nThank you for shopping with Medico.");
            cart = [];
            setJSON(cartKey(user.email), cart);
            updateCartCount();
            closeCheckout();
            closeCart();
        };
        // ========== Login/Register ==========
        document.getElementById('login-form').onsubmit = function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim().toLowerCase();
            const password = document.getElementById('login-password').value;
            const u = getJSON(userKey(email));
            if (!u || u.password !== password) {
                alert("Invalid email or password!");
                return;
            }
            user = u;
            cart = getJSON(cartKey(user.email)) || [];
            setJSON("medico_current_user", user);
            updateProfileNav();
            updateCartCount();
            closeLogin();
            showPage('home');
        };
        document.getElementById('register-form').onsubmit = function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value.trim();
            const email = document.getElementById('register-email').value.trim().toLowerCase();
            const password = document.getElementById('register-password').value;
            const repassword = document.getElementById('register-repassword').value;
            const phone = document.getElementById('register-phone').value.trim();
            const address = document.getElementById('register-address').value.trim();
            if (password !== repassword) {
                alert("Passwords do not match!");
                return;
            }
            if (getJSON(userKey(email))) {
                alert("User already exists!");
                return;
            }
            user = {
                name, email, password, phone, address,
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            };
            setJSON(userKey(email), user);
            cart = [];
            setJSON(cartKey(email), cart);
            setJSON("medico_current_user", user);
            updateProfileNav();
            updateCartCount();
            closeRegister();
            showPage('home');
        };
        // ========== Profile ==========
        function renderProfile() {
            if (!user) return;
            document.getElementById('profile-info').innerHTML = `
                <img src="${user.image}" alt="Profile">
                <div class="profile-field">
                    <label>Name:</label>
                    <input type="text" id="profile-name" value="${user.name}">
                </div>
                <div class="profile-field">
                    <label>Email:</label>
                    <input type="email" id="profile-email" value="${user.email}" disabled>
                </div>
                <div class="profile-field">
                    <label>Phone:</label>
                    <input type="tel" id="profile-phone" value="${user.phone}">
                </div>
                <div class="profile-field">
                    <label>Address:</label>
                    <input type="text" id="profile-address" value="${user.address}">
                </div>
                <div class="profile-field">
                    <label>Image URL:</label>
                    <input type="text" id="profile-image" value="${user.image}">
                </div>
            `;
        }
        function saveProfile() {
            user.name = document.getElementById('profile-name').value.trim();
            user.email = document.getElementById('profile-email').value.trim();
            user.phone = document.getElementById('profile-phone').value.trim();
            user.address = document.getElementById('profile-address').value.trim();
            user.image = document.getElementById('profile-image').value.trim();
            setJSON(userKey(user.email), user);
            setJSON("medico_current_user", user);
            updateProfileNav();
            alert("Profile updated!");
            closeProfile();
        }
        function deleteProfile() {
            if (confirm("Are you sure you want to delete your profile?")) {
                localStorage.removeItem(userKey(user.email));
                localStorage.removeItem(cartKey(user.email));
                user = null;
                cart = [];
                localStorage.removeItem("medico_current_user");
                updateProfileNav();
                updateCartCount();
                closeProfile();
                openLogin();
            }
        }
        function updateProfileNav() {
            const img = document.getElementById('nav-profile-img');
            const name = document.getElementById('nav-profile-name');
            if (user) {
                img.src = user.image;
                name.textContent = user.name.split(' ')[0];
            } else {
                img.src = "https://randomuser.me/api/portraits/men/32.jpg";
                name.textContent = "Profile";
            }
        }
        // ========== On Load ==========
        window.onload = function() {
            // Try to load user
            user = getJSON("medico_current_user");
            if (user) {
                cart = getJSON(cartKey(user.email)) || [];
            }
            renderRecommended();
            renderStore();
            updateCartCount();
            updateProfileNav();
            showPage('home');
            if (!user) openLogin();
        };
        // ========== Modal Close on Outside Click ==========
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) modal.classList.remove('active');
            });
        });