// ==========================================================================
// VYORA ("SHOP-CREATE-CELEBRATE") - Product Catalog & Interactive Store Engine
// ==========================================================================

// 👉 YOUR 10-DIGIT WHATSAPP NUMBER:
const CIY_WHATSAPP_NUMBER = "919491396383"; 

// 👉 YOUR UPI DETAILS:
const CIY_UPI_ID = "7842161638@ibl";
const CIY_UPI_NAME = "VYORA";

// 👉 YOUR GOOGLE APPS SCRIPT WEB APP URL (Using Executable Endpoint):
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzHfZ1iBj5eNPNeZi_hBTSLijoKjAnsFTbd0m54dS5fFxYAhYDdD9M2w4ezQJjI5vFVUg/exec";

const defaultStarterProducts = [
  // 1. ARTWORKS: BOTTLE ART
  {
    id: "art_bottle_1",
    title: "Vintage Fairy Floral Glow Bottle",
    mainCategory: "artwork",
    mainCategoryName: "Art Works",
    subCategory: "bottle_art",
    subCategoryName: "Bottle Art",
    originalPrice: "₹1,500",
    discountPrice: "₹1,199",
    discountBadge: "20% OFF",
    description: "Hand-painted frosted glass bottle detailed with acrylic wild florals, sealed with waterproof glossy resin varnish, and pre-fitted with warm LED cork fairy lights.",
    highlights: [
      "Waterproof acrylic with anti-scratch clear varnish",
      "Includes replaceable warm-white cork LED light string",
      "Crafted on sturdy upcycled 750ml glass bottle",
      "Triple-layer bubble cushion doorstep shipping"
    ],
    customizable: true,
    customOptions: [],
    images: [
      "images/bottle1.jpg"
    ],
    video: ""
  },
  {
    id: "art_bottle_2",
    title: "Golden Mandala Silhouette Bottle",
    mainCategory: "artwork",
    mainCategoryName: "Art Works",
    subCategory: "bottle_art",
    subCategoryName: "Bottle Art",
    originalPrice: "₹1,400",
    discountPrice: "₹1,050",
    discountBadge: "25% OFF",
    description: "Intricate metallic gold dot-mandala artwork hand-drawn on an obsidian black matte bottle with battery-operated amber interior lighting.",
    highlights: [
      "Precision handmade dot-mandala geometry",
      "Deep matte black finish with metallic gold accents",
      "Warm night-lamp illumination effect",
      "Dust-resistant protective finish"
    ],
    customizable: true,
    customOptions: [],
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },

  // 2. ARTWORKS: RESIN CREATIONS
  {
    id: "art_resin_1",
    title: "Ocean Wave Resin Coasters (Set of 4)",
    mainCategory: "artwork",
    mainCategoryName: "Art Works",
    subCategory: "resin_art",
    subCategoryName: "Resin Art",
    originalPrice: "₹1,200",
    discountPrice: "₹850",
    discountBadge: "29% OFF",
    description: "Hand-poured 3D turquoise ocean waves with real white sea-foam effect on treated wood. Scratch-proof, heat-tolerant, and water-resistant.",
    highlights: [
      "Set of 4 round coasters (4-inch diameter)",
      "High-gloss crystal clear epoxy resin finish",
      "Heat resistant up to 75°C for hot mugs and cups",
      "Cork-backed base to prevent table scratches"
    ],
    customizable: true,
    customOptions: [],
    images: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },
  {
    id: "art_resin_2",
    title: "Bespoke Dried Floral Preservation Resin Clock",
    mainCategory: "artwork",
    mainCategoryName: "Art Works",
    subCategory: "resin_art",
    subCategoryName: "Resin Art",
    originalPrice: "₹2,800",
    discountPrice: "₹2,199",
    discountBadge: "21% OFF",
    description: "A 12-inch functional wall clock embedded with real preserved botanical flowers, gold-leaf flakes, and silent quartz movement.",
    highlights: [
      "Real dried florals suspended in crystal resin",
      "Ultra-silent quartz clock machine with gold hands",
      "12-inch diameter statement wall decor piece",
      "Ready to hang with rear hook pre-installed"
    ],
    customizable: true,
    customOptions: [],
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },

  // 3. GOURMET BAKERY: READYMADE COOKIES
  {
    id: "bake_cookie_ready_1",
    title: "Signature Double Dark Choco-Chunk Cookies (Pack of 6)",
    mainCategory: "bakery",
    mainCategoryName: "Gourmet Bakery",
    subCategory: "cookies",
    subCategoryName: "Readymade Cookies",
    originalPrice: "₹480",
    discountPrice: "₹360",
    discountBadge: "25% OFF",
    description: "Classic rich cocoa cookies loaded with molten dark chocolate chunks and sea-salt flakes. Crispy golden edges with a soft, fudgy center.",
    highlights: [
      "Ready to eat — fresh batch baked daily",
      "100% Eggless recipe using pure butter",
      "Packed with 55% cocoa dark chocolate chunks",
      "Individually sealed in food-grade foil pouch"
    ],
    customizable: false,
    customOptions: [],
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },
  {
    id: "bake_cookie_ready_2",
    title: "Caramel Butter & Roasted Pecan Crunch Cookies (Pack of 6)",
    mainCategory: "bakery",
    mainCategoryName: "Gourmet Bakery",
    subCategory: "cookies",
    subCategoryName: "Readymade Cookies",
    originalPrice: "₹520",
    discountPrice: "₹399",
    discountBadge: "23% OFF",
    description: "Traditional golden brown butter cookies packed with slow-caramelized toffee bits and crunchy roasted pecans.",
    highlights: [
      "Melt-in-mouth buttery crumb texture",
      "Generously topped with roasted crunchy pecans",
      "Zero preservatives, artificial essences, or palm oil",
      "Airtight travel-safe tin packaging"
    ],
    customizable: false,
    customOptions: [],
    images: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },

  // 4. GOURMET BAKERY: CUSTOMIZED COOKIES
  {
    id: "bake_cookie_custom_1",
    title: "Build-Your-Own Artisanal Nut Cookie Box (Box of 8)",
    mainCategory: "bakery",
    mainCategoryName: "Gourmet Bakery",
    subCategory: "cookies",
    subCategoryName: "Custom Cookies",
    originalPrice: "₹699",
    discountPrice: "₹520",
    discountBadge: "25% OFF",
    description: "You choose the nuts and toppings, and our home studio bakes them fresh just for you! Select from roasted almonds, cashews, walnuts, pistachios, or dark choco-chips.",
    highlights: [
      "Freshly baked on-demand within 4 hours of order",
      "Pick your favorite nut mix below before ordering",
      "Generously packed with whole roasted premium nuts",
      "100% Eggless, pure butter, vacuum tin-sealed"
    ],
    customizable: true,
    customOptions: [
      "Roasted Californian Almonds",
      "Crunchy Goan Cashews",
      "Crisp Brain Walnuts",
      "Green Pistachio Slivers",
      "Dark Choco-Chips",
      "Toasted White Sesame & Honey"
    ],
    images: [
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  },

  // 5. GOURMET BAKERY: HANDMADE CHOCOLATES
  {
    id: "bake_choco_1",
    title: "Bespoke Nut & Cranberry Dark Chocolate Slab (250g)",
    mainCategory: "bakery",
    mainCategoryName: "Gourmet Bakery",
    subCategory: "chocolates",
    subCategoryName: "Custom Chocolates",
    originalPrice: "₹650",
    discountPrice: "₹490",
    discountBadge: "25% OFF",
    description: "Artisanal slab crafted with 55% rich cocoa, hand-tempered and loaded with customer-selected roasted dry fruits and chewy dried cranberries.",
    highlights: [
      "Tempered in small batches with zero hydrogenated fats",
      "Loaded with dry fruits according to customer choice",
      "Delivered in protective chill-insulated packaging",
      "Gift-ready ribbon box with your personalized note"
    ],
    customizable: true,
    customOptions: [
      "Whole Roasted Almonds",
      "Salted Caramelized Cashews",
      "Roasted Hazelnut Crunch",
      "Tangy Dried Cranberries",
      "Flaky Sea Salt & Cocoa Nibs"
    ],
    images: [
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80"
    ],
    video: ""
  }
];

const CATALOG_SYNC_KEY = "vyora_catalog_v25_app_ready";

function getProducts() {
  const currentKey = localStorage.getItem("ciy_sync_stamp");
  let stored = JSON.parse(localStorage.getItem('ciy_products') || 'null');

  if (!stored || currentKey !== CATALOG_SYNC_KEY) {
    localStorage.setItem('ciy_products', JSON.stringify(defaultStarterProducts));
    localStorage.setItem('ciy_sync_stamp', CATALOG_SYNC_KEY);
    return defaultStarterProducts;
  }
  return stored;
}

let activeFilter = 'all';

function renderProductGrid() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  const products = getProducts();
  productGrid.innerHTML = '';

  const filtered = products.filter(p => {
    if (activeFilter === 'all') return true;
    return p.subCategory === activeFilter || p.mainCategory === activeFilter;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#888;">No creations found under this category.</div>`;
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'art-card';
    const mainImg = (prod.images && prod.images.length > 0) ? prod.images[0] : 'images/logo1.png';

   card.innerHTML = `
      <div class="img-wrapper">
        <span class="card-badge">${prod.customizable ? '✨ Custom Choice' : 'Handmade'}</span>
        <img src="${mainImg}" alt="${prod.title}" onerror="this.src='images/logo1.png'">
      </div>
      <div class="art-info">
        <div class="category-labels">
          <span class="cat-label">${prod.mainCategoryName || prod.mainCategory}</span>
          <span class="subcat-label">• ${prod.subCategoryName || prod.subCategory}</span>
        </div>
        <h3>${prod.title}</h3>
        
        <!-- 👇 STAR RATING & HANDCRAFTED BADGE 👇 -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin: 6px 0 8px 0; font-size: 0.75rem;">
          <span style="display: inline-flex; align-items: center; gap: 4px; color: #d97706; font-weight: 700; background: #fffbeb; padding: 2px 7px; border-radius: 6px; border: 1px solid #fef3c7;">
            ★ 4.9 <span style="color: #6b7280; font-weight: 500;">(42)</span>
          </span>
          <span style="color: #059669; font-weight: 600; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 3px;">
            ✓ Handcrafted to Order
          </span>
        </div>
        <!-- 👆 END OF RATING BADGE 👆 -->

        <div class="price-box">
          <span class="discount-price">${prod.discountPrice}</span>
          <span class="original-price">${prod.originalPrice}</span>
          <span class="discount-badge">${prod.discountBadge}</span>
        </div>
        <button type="button" class="view-details-btn">View Details & Customise</button>
      </div>
    `;

    card.querySelector('.view-details-btn').addEventListener('click', () => openQuickView(prod));
    card.querySelector('.img-wrapper').addEventListener('click', () => openQuickView(prod));
    productGrid.appendChild(card);
  });
}

// Quick View Modal
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const detailMainImg = document.getElementById('detailMainImg');
const thumbnailRow = document.getElementById('thumbnailRow');
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailOriginalPrice = document.getElementById('detailOriginalPrice');
const detailDiscountPrice = document.getElementById('detailDiscountPrice');
const detailBadge = document.getElementById('detailBadge');
const detailDesc = document.getElementById('detailDesc');

const nutToppingWrapper = document.getElementById('nutToppingWrapper');
const artCustomWrapper = document.getElementById('artCustomWrapper');
const customOptionsContainer = document.getElementById('customOptionsContainer');
const customPersonalNote = document.getElementById('customPersonalNote');
const liveSummaryText = document.getElementById('liveSummaryText');

let currentActiveProduct = null;
let selectedCustomChoices = [];

function openQuickView(prod) {
  currentActiveProduct = prod; 
  selectedCustomChoices = [];

  if (detailCategory) detailCategory.textContent = `${prod.mainCategoryName} • ${prod.subCategoryName}`;
  if (detailTitle) detailTitle.textContent = prod.title;
  if (detailOriginalPrice) detailOriginalPrice.textContent = prod.originalPrice;
  if (detailDiscountPrice) detailDiscountPrice.textContent = prod.discountPrice;
  if (detailBadge) detailBadge.textContent = prod.discountBadge;
  if (detailDesc) detailDesc.textContent = prod.description;
  if (customPersonalNote) customPersonalNote.value = '';
  updateCareGuideForProduct(prod); // (or whatever variable name your product has, like 'product' or 'item')

  if (detailMainImg) {
    detailMainImg.src = (prod.images && prod.images.length > 0) ? prod.images[0] : 'images/logo1.png';
  }

  if (thumbnailRow) {
    thumbnailRow.innerHTML = '';
    if (prod.images) {
      prod.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `thumb-img ${index === 0 ? 'active' : ''}`;
        thumb.addEventListener('click', () => {
          if (detailMainImg) detailMainImg.src = imgSrc;
          document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
        thumbnailRow.appendChild(thumb);
      });
    }
  }

  if (prod.mainCategory === 'bakery') {
    if (nutToppingWrapper) nutToppingWrapper.style.display = 'block';
    if (artCustomWrapper) artCustomWrapper.style.display = 'none';

    if (customOptionsContainer) {
      customOptionsContainer.innerHTML = '';
      const optionsList = (prod.customOptions && prod.customOptions.length > 0)
        ? prod.customOptions
        : ["Roasted Almonds", "Crunchy Cashews", "Californian Walnuts", "Pistachio Slivers", "Dark Choco-Chips"];

      optionsList.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'custom-chip-label';
        label.innerHTML = `<input type="checkbox" value="${opt}"> <span>+ ${opt}</span>`;
        label.querySelector('input').addEventListener('change', (e) => {
          if (e.target.checked) selectedCustomChoices.push(opt);
          else selectedCustomChoices = selectedCustomChoices.filter(x => x !== opt);
          updateLiveCustomSummary();
        });
        customOptionsContainer.appendChild(label);
      });
    }
  } else {
    if (nutToppingWrapper) nutToppingWrapper.style.display = 'none';
    if (artCustomWrapper) artCustomWrapper.style.display = 'block';
  }

  updateLiveCustomSummary();
  if (productModal) productModal.classList.add('active');
}

function updateLiveCustomSummary() {
  if (!liveSummaryText) return;
  const personalNote = customPersonalNote ? customPersonalNote.value.trim() : '';
  let parts = [];

  if (currentActiveProduct && currentActiveProduct.mainCategory === 'bakery') {
    if (selectedCustomChoices.length > 0) parts.push(`Nuts: ${selectedCustomChoices.join(', ')}`);
    else parts.push('Standard Chef Recipe');
  } else {
    const selectedLight = document.querySelector('input[name="artLightGlow"]:checked');
    if (selectedLight) parts.push(`Light: ${selectedLight.value}`);
  }

  if (personalNote) parts.push(`Note: "${personalNote}"`);
  liveSummaryText.textContent = parts.join(' | ');
}

if (customPersonalNote) customPersonalNote.addEventListener('input', updateLiveCustomSummary);
document.querySelectorAll('input[name="artLightGlow"]').forEach(radio => {
  radio.addEventListener('change', updateLiveCustomSummary);
});

if (closeProductModal) {
  closeProductModal.addEventListener('click', () => {
    productModal.classList.remove('active');
  });
}

// GPS Current Location
const btnGetLocation = document.getElementById('btnGetLocation');
const locationNotice = document.getElementById('locationNotice');
const custStreet = document.getElementById('custStreet');
const custCity = document.getElementById('custCity');
const custPincode = document.getElementById('custPincode');
const custGpsMapLink = document.getElementById('custGpsMapLink');

if (btnGetLocation) {
  btnGetLocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Please type your address manually.");
      return;
    }

    btnGetLocation.textContent = "⏳ Finding you...";
    btnGetLocation.disabled = true;

    if (locationNotice) {
      locationNotice.style.display = 'block';
      locationNotice.style.background = '#e0f2fe';
      locationNotice.style.color = '#0369a1';
      locationNotice.textContent = "🛰️ Accessing GPS satellite coordinates... Please allow permission if prompted.";
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const mapsUrl = `https://maps.google.com/?q=${lat},${lon}`;
        if (custGpsMapLink) custGpsMapLink.value = mapsUrl;

        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
          const data = await response.json();

          if (data && data.address) {
            const addr = data.address;
            const road = addr.road || addr.suburb || addr.neighbourhood || addr.residential || '';
            const city = addr.city || addr.town || addr.village || addr.county || '';
            const postcode = addr.postcode || '';

            if (custStreet && road) custStreet.value = `${road}, Near GPS Pin`;
            else if (custStreet && !custStreet.value) custStreet.value = `Near GPS Pin Location`;

            if (custCity && city) custCity.value = city;
            if (custPincode && postcode) custPincode.value = postcode;

            if (locationNotice) {
              locationNotice.style.background = '#dcfce7';
              locationNotice.style.color = '#15803d';
              locationNotice.innerHTML = `✅ <strong>Location Captured!</strong> Address & PIN pre-filled.`;
            }
          }
        } catch (err) {
          if (locationNotice) {
            locationNotice.style.background = '#dcfce7';
            locationNotice.style.color = '#15803d';
            locationNotice.innerHTML = `✅ <strong>GPS Pin Locked!</strong> Coordinates recorded.`;
          }
        }

        btnGetLocation.textContent = "📍 Location Saved";
        btnGetLocation.style.background = "#dcfce7";
        btnGetLocation.style.color = "#15803d";
        btnGetLocation.disabled = false;
      },
      (error) => {
        btnGetLocation.textContent = "📍 Use Current Location";
        btnGetLocation.disabled = false;
        if (locationNotice) {
          locationNotice.style.display = 'block';
          locationNotice.style.background = '#fee2e2';
          locationNotice.style.color = '#dc2626';
          locationNotice.textContent = "Location access was denied or timed out. Please enter address manually.";
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

// Checkout Engine
const openCheckoutModalBtn = document.getElementById('openCheckoutModalBtn');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const checkoutFormView = document.getElementById('checkoutFormView');
const paymentVerifyingView = document.getElementById('paymentVerifyingView');
const orderSuccessView = document.getElementById('orderSuccessView');
const receiptContent = document.getElementById('receiptContent');
const sendWhatsAppReceiptBtn = document.getElementById('sendWhatsAppReceiptBtn');
const trackThisOrderNowBtn = document.getElementById('trackThisOrderNowBtn');

const modalArtTitle = document.getElementById('modalArtTitle');
const modalArtCategory = document.getElementById('modalArtCategory');
const modalArtPrice = document.getElementById('modalArtPrice');
const modalCustomChoicePreview = document.getElementById('modalCustomChoicePreview');

const deliveryZoneSelect = document.getElementById('deliveryZoneSelect');
const summaryItemPrice = document.getElementById('summaryItemPrice');
const summaryDeliveryFee = document.getElementById('summaryDeliveryFee');
const summaryGrandTotal = document.getElementById('summaryGrandTotal');

const checkoutUpiPanel = document.getElementById('checkoutUpiPanel');
const formUpiQrImg = document.getElementById('formUpiQrImg');
const mainSubmitOrderBtn = document.getElementById('mainSubmitOrderBtn');

let lastPlacedOrderData = null;
let currentCalculatedTotal = 0;
let isAwaitingUpiReturn = false;
let pendingOrderDraft = null;
let desktopFallbackTimer = null;

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function recalculateCheckoutTotals() {
  if (!currentActiveProduct) return;

  const itemPriceNum = parseInt((currentActiveProduct.discountPrice || '0').replace(/[^0-9]/g, '')) || 0;
  const deliveryFeeNum = parseInt(deliveryZoneSelect ? deliveryZoneSelect.value : '70') || 0;
  const selectedOption = deliveryZoneSelect ? deliveryZoneSelect.options[deliveryZoneSelect.selectedIndex] : null;
  const zoneName = selectedOption ? (selectedOption.getAttribute('data-name') || 'Courier') : 'Courier';

  // Check if Gift Wrap (+₹50) is selected
  const giftWrapCheck = document.getElementById('giftWrapCheck');
  const giftWrapFee = (giftWrapCheck && giftWrapCheck.checked) ? 50 : 0;

  // Include giftWrapFee in the total
  currentCalculatedTotal = itemPriceNum + deliveryFeeNum + giftWrapFee;

  if (summaryItemPrice) summaryItemPrice.textContent = `₹${itemPriceNum.toLocaleString('en-IN')}`;
  if (summaryDeliveryFee) summaryDeliveryFee.textContent = deliveryFeeNum === 0 ? 'FREE' : `+₹${deliveryFeeNum}`;
  if (summaryGrandTotal) summaryGrandTotal.textContent = `₹${currentCalculatedTotal.toLocaleString('en-IN')}`;
  if (modalArtPrice) modalArtPrice.textContent = `₹${currentCalculatedTotal.toLocaleString('en-IN')}`;

  const tempOrderRef = "VY-" + Math.floor(100000 + Math.random() * 900000);
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(CIY_UPI_ID)}&pn=${encodeURIComponent(CIY_UPI_NAME)}&am=${currentCalculatedTotal}&cu=INR&tn=${encodeURIComponent(tempOrderRef)}`;

  if (formUpiQrImg) {
    formUpiQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(upiDeepLink)}`;
  }
}

if (deliveryZoneSelect) {
  deliveryZoneSelect.addEventListener('change', recalculateCheckoutTotals);
}

// Toggle Payment view: Lock submit button on UPI; enable only on COD
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    const isUpi = e.target.value === 'UPI Online';
    if (isUpi) {
      if (checkoutUpiPanel) checkoutUpiPanel.style.display = 'block';
      if (mainSubmitOrderBtn) {
        // Disable and hide manual submit button so user MUST pay through UPI
        mainSubmitOrderBtn.style.display = 'none';
        mainSubmitOrderBtn.disabled = true;
      }
      recalculateCheckoutTotals();
    } else {
      if (checkoutUpiPanel) checkoutUpiPanel.style.display = 'none';
      if (mainSubmitOrderBtn) {
        // Re-enable and show submit button for COD
        mainSubmitOrderBtn.style.display = 'block';
        mainSubmitOrderBtn.disabled = false;
        mainSubmitOrderBtn.textContent = 'Confirm & Place Order (Cash on Delivery) 🛍️';
        mainSubmitOrderBtn.style.background = 'linear-gradient(135deg, #ff3366, #ff758c)';
      }
    }
  });
});

function collectCurrentOrderData(paymentMode) {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const street = document.getElementById('custStreet').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const pincode = document.getElementById('custPincode').value.trim();
  const mapLink = custGpsMapLink ? custGpsMapLink.value : '';

  const orderId = "VY-" + Math.floor(100000 + Math.random() * 900000);
  const categoryInfo = `${currentActiveProduct.mainCategoryName} (${currentActiveProduct.subCategoryName})`;
  const customBlueprint = liveSummaryText ? liveSummaryText.textContent : 'Standard Configuration';
  const note = customPersonalNote ? customPersonalNote.value.trim() : 'None';
  const customMessageInput = document.getElementById('orderCustomMessage');
  const customOrderText = customMessageInput ? customMessageInput.value.trim() : '';
  const customPhotoData = (typeof customerAttachedPhotoBase64 !== 'undefined') ? customerAttachedPhotoBase64 : '';
  const isGiftWrap = document.getElementById('giftWrapCheck') ? document.getElementById('giftWrapCheck').checked : false;
  const giftWrapFeeNum = isGiftWrap ? 50 : 0;
  const fullAddress = `${street}, ${city} - ${pincode}`;

  const itemPriceNum = parseInt((currentActiveProduct.discountPrice || '0').replace(/[^0-9]/g, '')) || 0;
  const deliveryFeeNum = parseInt(deliveryZoneSelect ? deliveryZoneSelect.value : '70') || 0;
  const selectedOption = deliveryZoneSelect ? deliveryZoneSelect.options[deliveryZoneSelect.selectedIndex] : null;
  const zoneName = selectedOption ? (selectedOption.getAttribute('data-name') || 'Courier') : 'Courier';

  return {
    orderId: orderId,
    status: 'Pending',
    customDeliveryDate: '',
    item: currentActiveProduct.title,
    category: categoryInfo,
    customSelection: customBlueprint,
    specialNotes: note,
    itemPrice: `₹${itemPriceNum}`,
    deliveryFee: `₹${deliveryFeeNum}`,
    deliveryZone: zoneName,
    price: `₹${currentCalculatedTotal}`,
    customerName: name,
    phone: phone,
    address: fullAddress,
    googleMapsLink: mapLink,
    payment: paymentMode,
    orderDate: new Date().toLocaleDateString('en-IN')
  };
}

function validateShippingForm() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const street = document.getElementById('custStreet').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const pincode = document.getElementById('custPincode').value.trim();

  if (!name || !phone || !street || !city || !pincode) {
    alert("Please fill in your complete shipping address and 10-digit mobile number!");
    return false;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile phone number.");
    return false;
  }
  return true;
}

function syncOrderToGoogleSheet(orderData) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) return;

  fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  }).catch(err => console.error("Error syncing to Google Sheet:", err));
}
function finalizeAndShowReceipt(orderData) {
  clearTimeout(desktopFallbackTimer);
  lastPlacedOrderData = orderData;

  const existingOrders = JSON.parse(localStorage.getItem('ciy_orders') || '[]');
  existingOrders.push(orderData);
  localStorage.setItem('ciy_orders', JSON.stringify(existingOrders));

  syncOrderToGoogleSheet(orderData);

  const successHeading = document.getElementById('successHeading');
  const successSubtext = document.getElementById('successSubtext');

  if (orderData.payment && orderData.payment.includes('UPI')) {
    if (successHeading) successHeading.textContent = "Payment Verified & Order Confirmed! 🎉";
    if (successSubtext) successSubtext.textContent = "Thank you! Your payment was received and our artisan has begun preparation.";
  } else {
    if (successHeading) successHeading.textContent = "Order Confirmed (Cash on Delivery)! 🛍️";
    if (successSubtext) successSubtext.textContent = "We've received your order. Please keep the exact cash or UPI ready at delivery.";
  }

  const mapLinkSnippet = orderData.googleMapsLink ? 
    `<p><strong>📍 GPS Location Pin:</strong> <a href="${orderData.googleMapsLink}" target="_blank" style="color:#0284c7; text-decoration:underline;">View on Google Maps</a></p>` : '';

  // Generate WhatsApp routing link
  const waUrl = typeof generateWhatsAppOrderUrl === 'function' ? generateWhatsAppOrderUrl(orderData) : '#';

  if (receiptContent) {
    receiptContent.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid #e5e7eb; padding-bottom:6px;">
        <span><strong>Order ID:</strong> ${orderData.orderId}</span>
        <span style="color:#059669; font-weight:700;">${(orderData.payment && orderData.payment.includes('UPI')) ? '🟢 PAID' : '🟡 COD CONFIRMED'}</span>
      </div>
      <p><strong>Item:</strong> ${orderData.item || orderData.categoryInfo || 'Product'}</p>
      <p><strong>Customization:</strong> ${orderData.customOrderText || orderData.customSelection || 'Standard'}</p>
      <p><strong>Gift Wrap:</strong> ${orderData.giftWrap ? 'Yes (+₹50)' : 'No'}</p>
      <p><strong>Item Cost:</strong> ${orderData.itemPrice}</p>
      <p><strong>Delivery Fee:</strong> ${orderData.deliveryFee} (${orderData.deliveryZone || 'Standard'})</p>
      <p style="font-size:1rem; font-weight:700; color:#059669;"><strong>Grand Total:</strong> ${orderData.price || orderData.totalPrice || ''}</p>
      <p><strong>Payment Status:</strong> ${orderData.payment || orderData.paymentMode || 'COD'}</p>
      <p><strong>Deliver To:</strong> ${orderData.customerName || orderData.name}, ${orderData.phone}</p>
      <p><strong>Address:</strong> ${orderData.address}</p>
      ${mapLinkSnippet}

      <!-- 👇 WHATSAPP ACTION BUTTON 👇 -->
      <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed #d1d5db; text-align: center;">
        <a href="${waUrl}" target="_blank" 
           style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 18px; border-radius: 25px; font-weight: 700; font-size: 0.92rem; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);">
          <span>💬</span> Send Order Details to WhatsApp
        </a>
        <small style="display: block; color: #6b7280; font-size: 0.74rem; margin-top: 6px;">
          Tap to send address confirmation & high-res reference photos.
        </small>
      </div>
    `;
  }

  if (checkoutFormView) checkoutFormView.style.display = 'none';
  if (paymentVerifyingView) paymentVerifyingView.style.display = 'none';
  if (orderSuccessView) orderSuccessView.style.display = 'block';

  const orderFormEl = document.getElementById('orderForm');
  if (orderFormEl) orderFormEl.reset();
  if (custGpsMapLink) custGpsMapLink.value = '';
  if (locationNotice) locationNotice.style.display = 'none';
  if (btnGetLocation) {
    btnGetLocation.textContent = "📍 Use Current Location";
    btnGetLocation.style.background = "#e0f2fe";
    btnGetLocation.style.color = "#0284c7";
  }

  isAwaitingUpiReturn = false;
  pendingOrderDraft = null;
  setTimeout(() => {
    openWhatsAppOrder(orderData);
  }, 1200);
}

// ==========================================================================
// ⚡ AUTOMATIC UPI PAYMENT LAUNCH & INSTANT RECEIPT GENERATION
// ==========================================================================

function triggerDirectUpiPayment(appName) {
  if (!validateShippingForm()) return;

  // Prepare pending order draft
  pendingOrderDraft = collectCurrentOrderData(`Paid via ${appName}`);

  const cleanAmount = currentCalculatedTotal;
  const note = encodeURIComponent(`Order ${pendingOrderDraft.orderId}`);
  const payee = encodeURIComponent(CIY_UPI_NAME);
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(CIY_UPI_ID)}&pn=${payee}&am=${cleanAmount}&cu=INR&tn=${note}`;

  isAwaitingUpiReturn = true;

  // Switch to verification animation screen
  if (checkoutFormView) checkoutFormView.style.display = 'none';
  if (paymentVerifyingView) {
    paymentVerifyingView.style.display = 'block';
    const h3 = paymentVerifyingView.querySelector('h3');
    const p = paymentVerifyingView.querySelector('p');
    if (h3) h3.textContent = "Processing UPI Payment...";
    if (p) p.textContent = "Please complete the transaction in your UPI app. Your confirmation receipt will load automatically.";
  }

  // Fallback safety timeout if user cancels or takes longer than 2.5 minutes
  clearTimeout(desktopFallbackTimer);
  desktopFallbackTimer = setTimeout(() => {
    if (isAwaitingUpiReturn) {
      if (checkoutFormView) checkoutFormView.style.display = 'block';
      if (paymentVerifyingView) paymentVerifyingView.style.display = 'none';
      isAwaitingUpiReturn = false;
      alert("Payment window timed out. If money was debited, please contact us on WhatsApp with your transaction screenshot!");
    }
  }, 150000);

  // Launch customer's chosen UPI app
  window.location.href = upiDeepLink;
}

// Attach listener to all UPI app buttons (PhonePe, GPay, Paytm, Any UPI)
// ==========================================================================
// ⚡ AUTOMATIC UPI APP REDIRECT & PAYMENT CONFIRMATION / FAILURE HANDLER
// ==========================================================================

function showPaymentToast(msg) {
  const toast = document.getElementById('paymentStatusToast');
  const toastMsg = document.getElementById('paymentStatusToastMsg');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = msg;
  toast.style.display = 'flex';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 4500);
}

function triggerDirectUpiPayment(appName) {
  if (!validateShippingForm()) return;

  pendingOrderDraft = collectCurrentOrderData(`Paid via ${appName}`);

  const cleanAmount = currentCalculatedTotal;
  const note = encodeURIComponent(`Order ${pendingOrderDraft.orderId}`);
  const payee = encodeURIComponent(CIY_UPI_NAME);
  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(CIY_UPI_ID)}&pn=${payee}&am=${cleanAmount}&cu=INR&tn=${note}`;

  isAwaitingUpiReturn = true;

  if (checkoutFormView) checkoutFormView.style.display = 'none';
  if (paymentVerifyingView) {
    paymentVerifyingView.style.display = 'block';
    const h3 = paymentVerifyingView.querySelector('h3');
    const p = paymentVerifyingView.querySelector('p');
    if (h3) h3.textContent = "Connecting to " + appName + "...";
    if (p) p.textContent = "Please complete your payment in the app. Your receipt will generate upon return.";
  }

  // Launch the UPI app
  window.location.href = upiDeepLink;
}

// Hook all UPI buttons
document.querySelectorAll('.direct-upi-trigger-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const appName = btn.getAttribute('data-app') || 'UPI App';
    triggerDirectUpiPayment(appName);
  });
});

// Automatic return detection when customer switches back to the website
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && isAwaitingUpiReturn && pendingOrderDraft) {
    isAwaitingUpiReturn = false;

    // Small delay to let the browser stabilize
    setTimeout(() => {
      // Check with the customer if their UPI app confirmed the payment
      const isConfirmed = confirm(
        `💳 Payment Verification for Order ${pendingOrderDraft.orderId}:\n\n` +
        `Did your UPI transaction complete successfully for ₹${currentCalculatedTotal}?`
      );

      if (isConfirmed) {
        // Payment Succeeded -> Generate and show invoice receipt
        finalizeAndShowReceipt(pendingOrderDraft);
      } else {
        // Payment Failed or User Cancelled -> Return to checkout & show floating alert
        if (paymentVerifyingView) paymentVerifyingView.style.display = 'none';
        if (checkoutFormView) checkoutFormView.style.display = 'block';
        showPaymentToast("⚠️ Payment was cancelled or failed. Please retry or choose Cash on Delivery.");
      }
    }, 600);
  }
});

// COD Submit Handler
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateShippingForm()) return;

    const payInput = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = payInput ? payInput.value : 'COD';

    if (paymentMethod === 'UPI Online') {
      alert("Please tap one of the UPI buttons (PhonePe / GPay / Paytm) to pay.");
      return;
    }

    const codOrder = collectCurrentOrderData('Cash on Delivery (COD)');
    finalizeAndShowReceipt(codOrder);
  });
}

if (openCheckoutModalBtn) {
  openCheckoutModalBtn.addEventListener('click', () => {
    if (!currentActiveProduct) return;

    if (productModal) productModal.classList.remove('active');
    if (checkoutFormView) checkoutFormView.style.display = 'block';
    if (paymentVerifyingView) paymentVerifyingView.style.display = 'none';
    if (orderSuccessView) orderSuccessView.style.display = 'none';

    if (modalArtTitle) modalArtTitle.textContent = currentActiveProduct.title;
    if (modalArtCategory) modalArtCategory.textContent = `${currentActiveProduct.mainCategoryName} • ${currentActiveProduct.subCategoryName}`;

    const blueprint = liveSummaryText ? liveSummaryText.textContent : 'Standard Configuration';
    if (modalCustomChoicePreview) modalCustomChoicePreview.textContent = `Custom Choices: ${blueprint}`;

    const codRadio = document.querySelector('input[name="paymentMethod"][value="COD"]');
    if (codRadio) codRadio.checked = true;
    if (checkoutUpiPanel) checkoutUpiPanel.style.display = 'none';
    if (mainSubmitOrderBtn) {
      mainSubmitOrderBtn.style.display = 'block';
      mainSubmitOrderBtn.disabled = false;
      mainSubmitOrderBtn.textContent = 'Confirm & Place Order (Cash on Delivery) 🛍️';
      mainSubmitOrderBtn.style.background = 'linear-gradient(135deg, #ff3366, #ff758c)';
    }

    recalculateCheckoutTotals();
    if (orderModal) orderModal.classList.add('active');
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    if (orderModal) orderModal.classList.remove('active');
  });
}

if (sendWhatsAppReceiptBtn) {
  sendWhatsAppReceiptBtn.addEventListener('click', () => {
    if (!lastPlacedOrderData) return;
    const o = lastPlacedOrderData;

    let msg = `*🛍️ ORDER RECEIPT - VYORA STUDIO*\n`;
    msg += `------------------------------------\n`;
    msg += `🆔 *Order ID:* ${o.orderId}\n`;
    msg += `📌 *Item:* ${o.item}\n`;
    msg += `✨ *Custom Choices:* ${o.customSelection}\n`;
    msg += `💵 *Item Price:* ${o.itemPrice}\n`;
    msg += `🚚 *Delivery Fee (${o.deliveryZone}):* ${o.deliveryFee}\n`;
    msg += `💰 *Grand Total:* ${o.price}\n`;
    msg += `💳 *Payment Mode:* ${o.payment}\n`;
    msg += `📦 *Deliver To:* ${o.customerName}, ${o.phone}\n`;
    msg += `🏠 *Address:* ${o.address}\n`;
    if (o.googleMapsLink) msg += `📍 *Google Maps Pin:* ${o.googleMapsLink}\n`;
    msg += `------------------------------------\n`;
    msg += `Hi! I placed this order through your website checkout. Please let me know the dispatch schedule!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CIY_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  });
}

if (trackThisOrderNowBtn) {
  trackThisOrderNowBtn.addEventListener('click', () => {
    if (orderModal) orderModal.classList.remove('active');
    if (lastPlacedOrderData) openOrderTrackerWithQuery(lastPlacedOrderData.orderId);
  });
}

const whatsappChatOnlyBtn = document.getElementById('whatsappChatOnlyBtn');
if (whatsappChatOnlyBtn) {
  whatsappChatOnlyBtn.addEventListener('click', () => {
    if (!currentActiveProduct) return;
    const categoryInfo = `${currentActiveProduct.mainCategoryName} (${currentActiveProduct.subCategoryName})`;
    const customBlueprint = liveSummaryText ? liveSummaryText.textContent : 'Standard Design';
    const note = customPersonalNote ? customPersonalNote.value.trim() : '';

    let msg = `*Hi VYORA!* 🎨🍪\n\n`;
    msg += `I was looking at this creation on your website:\n\n`;
    msg += `📌 *Product:* ${currentActiveProduct.title}\n`;
    msg += `🏷️ *Category:* ${categoryInfo}\n`;
    msg += `💰 *Listed Price:* ${currentActiveProduct.discountPrice}\n`;
    msg += `✨ *My Custom Idea:* ${customBlueprint}\n`;
    if (note) msg += `✍️ *Note:* "${note}"\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${CIY_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  });
}

// Order Tracker
const customerTrackModal = document.getElementById('customerTrackModal');
const openTrackModalBtn = document.getElementById('openTrackModalBtn');
const heroTrackBtn = document.getElementById('heroTrackBtn');
const closeTrackModal = document.getElementById('closeTrackModal');
const trackInputQuery = document.getElementById('trackInputQuery');
const searchTrackBtn = document.getElementById('searchTrackBtn');
const trackErrorMsg = document.getElementById('trackErrorMsg');
const trackResultContainer = document.getElementById('trackResultContainer');

function openCustomerTrackModal() {
  if (trackErrorMsg) trackErrorMsg.style.display = 'none';
  if (trackResultContainer) trackResultContainer.style.display = 'none';
  if (trackInputQuery) trackInputQuery.value = '';
  if (customerTrackModal) customerTrackModal.classList.add('active');
}

if (openTrackModalBtn) openTrackModalBtn.addEventListener('click', openCustomerTrackModal);
if (heroTrackBtn) heroTrackBtn.addEventListener('click', openCustomerTrackModal);

if (closeTrackModal) {
  closeTrackModal.addEventListener('click', () => {
    if (customerTrackModal) customerTrackModal.classList.remove('active');
  });
}

function openOrderTrackerWithQuery(queryId) {
  openCustomerTrackModal();
  if (trackInputQuery) trackInputQuery.value = queryId;
  executeOrderTrack(queryId);
}

function executeOrderTrack(query) {
  const q = (query || (trackInputQuery ? trackInputQuery.value : '')).trim().toLowerCase();
  if (!q) return;

  const orders = JSON.parse(localStorage.getItem('ciy_orders') || '[]');
  const matched = orders.slice().reverse().find(o => 
    (o.orderId && o.orderId.toLowerCase() === q) || 
    (o.phone && o.phone.replace(/[^0-9]/g, '') === q.replace(/[^0-9]/g, ''))
  );

  if (!matched) {
    if (trackErrorMsg) trackErrorMsg.style.display = 'block';
    if (trackResultContainer) trackResultContainer.style.display = 'none';
    return;
  }

  if (trackErrorMsg) trackErrorMsg.style.display = 'none';

  const status = matched.status || 'Pending';
  let stageText = "Order Received & Verified";
  if (status === 'Crafting') stageText = "Artisan is Crafting / Baking Your Order";
  else if (status === 'Shipped') stageText = "Dispatched via Safe Courier";
  else if (status === 'Delivered') stageText = "Delivered to Doorstep";

  const mapLinkTrackSnippet = matched.googleMapsLink ? 
    `<p><strong>Doorstep Pin:</strong> <a href="${matched.googleMapsLink}" target="_blank" style="color:#0284c7; font-weight:600;">📍 Open Navigation Map</a></p>` : '';

  trackResultContainer.innerHTML = `
    <div style="background:#fff8f9; border:1px solid #ffd6e0; border-radius:14px; padding:16px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        <span style="font-weight:700; color:#ff3366;">${matched.orderId}</span>
        <span style="font-weight:700; color:#059669;">${matched.price}</span>
      </div>
      <div style="text-align:center; padding:8px; background:#fff; border-radius:8px; font-size:0.85rem; font-weight:700; color:#22223b; margin-bottom:12px;">
        Stage: ${stageText}
      </div>
      <div style="font-size:0.85rem; line-height:1.6; color:#4a5568;">
        <p><strong>Item:</strong> ${matched.item}</p>
        <p><strong>Customization:</strong> ${matched.customSelection}</p>
        <p><strong>Deliver To:</strong> ${matched.customerName} (${matched.phone})</p>
        <p><strong>Address:</strong> ${matched.address}</p>
        ${mapLinkTrackSnippet}
      </div>
    </div>
  `;

  trackResultContainer.style.display = 'block';
}

if (searchTrackBtn) searchTrackBtn.addEventListener('click', () => executeOrderTrack());
if (trackInputQuery) {
  trackInputQuery.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executeOrderTrack();
  });
}

// Mobile Drawer & Bubbles
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNavDrawer = document.getElementById('mobileNavDrawer');
const mobileTrackOrderLink = document.getElementById('mobileTrackOrderLink');
const mobileBottomTrackBtn = document.getElementById('mobileBottomTrackBtn');

if (mobileNavToggle && mobileNavDrawer) {
  mobileNavToggle.addEventListener('click', () => {
    mobileNavDrawer.classList.toggle('active');
  });

  mobileNavDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
    });
  });
}

if (mobileTrackOrderLink) {
  mobileTrackOrderLink.addEventListener('click', () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    openCustomerTrackModal();
  });
}

if (mobileBottomTrackBtn) {
  mobileBottomTrackBtn.addEventListener('click', openCustomerTrackModal);
}

// Auto wire Floating WhatsApp button
const floatingBtn = document.getElementById('floatingWhatsAppBtn');
if (floatingBtn) {
  const defaultMsg = encodeURIComponent("Hi VYORA! I am browsing your website and had a few questions about a custom order.");
  floatingBtn.href = `https://wa.me/${CIY_WHATSAPP_NUMBER}?text=${defaultMsg}`;
}

const categoryBubbles = document.querySelectorAll('.category-bubble-card');
const currentCategoryHeading = document.getElementById('currentCategoryHeading');

categoryBubbles.forEach(bubble => {
  bubble.addEventListener('click', () => {
    categoryBubbles.forEach(b => b.classList.remove('active'));
    bubble.classList.add('active');

    activeFilter = bubble.getAttribute('data-category-filter');
    const label = bubble.querySelector('.bubble-label') ? bubble.querySelector('.bubble-label').textContent : 'Collection';

    if (currentCategoryHeading) {
      currentCategoryHeading.textContent = activeFilter === 'all' ? 'All Handcrafted Creations' : `${label} Collection`;
    }

    renderProductGrid();
  });
});

// Fullscreen Logo Enlarge Handler
const brandLogoThumb = document.getElementById('brandLogoThumb');
const logoFullscreenModal = document.getElementById('logoFullscreenModal');

if (brandLogoThumb && logoFullscreenModal) {
  brandLogoThumb.addEventListener('click', (e) => {
    e.stopPropagation();
    logoFullscreenModal.classList.add('active');
  });

  logoFullscreenModal.addEventListener('click', () => {
    logoFullscreenModal.classList.remove('active');
  });
}

// --- PWA INSTALL BANNER & SERVICE WORKER CONTROLLER ---
let deferredInstallPrompt = null;
const pwaBanner = document.getElementById('pwaInstallBanner');
const btnInstallPwa = document.getElementById('btnInstallPwa');
const btnClosePwaBanner = document.getElementById('btnClosePwaBanner');

// 1. Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('VYORA SW Registered:', reg.scope))
      .catch((err) => console.log('VYORA SW Registration failed:', err));
  });
}

// 2. Listen for Chrome Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;

  // Show banner only if the user hasn't dismissed it this session
  if (pwaBanner && !sessionStorage.getItem('vyora_pwa_dismissed')) {
    pwaBanner.style.display = 'flex';
  }
});

// 3. When Customer Taps "Install"
if (btnInstallPwa) {
  btnInstallPwa.addEventListener('click', async () => {
    if (!deferredInstallPrompt) {
      alert("To install VYORA:\n• On Android Chrome: Tap ⋮ (top-right menu) > 'Add to Home screen'\n• On iPhone Safari: Tap Share (⎋) > 'Add to Home Screen'");
      return;
    }

    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;

    if (outcome === 'accepted') {
      if (pwaBanner) pwaBanner.style.display = 'none';
    }
    deferredInstallPrompt = null;
  });
}

// 4. When Customer Taps the "×" Close Button
if (btnClosePwaBanner) {
  btnClosePwaBanner.addEventListener('click', () => {
    if (pwaBanner) pwaBanner.style.display = 'none';
    sessionStorage.setItem('vyora_pwa_dismissed', 'true');
  });
}

// 5. Auto-hide if already installed
window.addEventListener('appinstalled', () => {
  if (pwaBanner) pwaBanner.style.display = 'none';
  deferredInstallPrompt = null;
});
// URL Check
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const directOrderId = urlParams.get('order');
  const directTrackId = urlParams.get('track');
  const customNotesFromChat = urlParams.get('notes');

  if (directTrackId) {
    openOrderTrackerWithQuery(directTrackId);
    return;
  }

  if (directOrderId) {
    const products = getProducts();
    const targetProduct = products.find(p => p.id === directOrderId);

    if (targetProduct) {
      currentActiveProduct = targetProduct;

      if (modalArtTitle) modalArtTitle.textContent = targetProduct.title;
      if (modalArtCategory) modalArtCategory.textContent = `${targetProduct.mainCategoryName} • ${targetProduct.subCategoryName}`;

      const agreedCustomization = customNotesFromChat ? decodeURIComponent(customNotesFromChat) : 'Customized via WhatsApp Chat';
      if (modalCustomChoicePreview) modalCustomChoicePreview.textContent = `Agreed: ${agreedCustomization}`;
      if (liveSummaryText) liveSummaryText.textContent = agreedCustomization;

      recalculateCheckoutTotals();

      if (checkoutFormView) checkoutFormView.style.display = 'block';
      if (paymentVerifyingView) paymentVerifyingView.style.display = 'none';
      if (orderSuccessView) orderSuccessView.style.display = 'none';
      if (orderModal) orderModal.classList.add('active');
    }
  }
});

// Admin shortcut (Triple click brand text stack)
const brandLogoBlock = document.querySelector('.brand-logo');
let logoClickCount = 0;
let logoClickTimer = null;

if (brandLogoBlock) {
  brandLogoBlock.addEventListener('click', (e) => {
    if (e.target.id === 'brandLogoThumb') return;
    e.preventDefault();
    logoClickCount++;
    clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 1500);
    if (logoClickCount >= 3) {
      window.location.href = 'admin.html';
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
    window.location.href = 'admin.html';
  }
});

// Run Initial Bootstrap
renderProductGrid();
// ==========================================================================
// ⭐ CUSTOMER REVIEW SUBMISSION & DISPLAY SYSTEM
// ==========================================================================

const defaultStarterReviews = [
  {
    author: "Aruna V.",
    stars: 5,
    item: "Custom Walnut Cookies",
    comment: "Ordered customized dark chocolate walnut cookies. Packed with whole nuts in every single bite, perfectly balanced sweetness!",
    date: "2 days ago"
  },
  {
    author: "Karthik R.",
    stars: 5,
    item: "Floral Fairy Bottle Art",
    comment: "The warm fairy light floral bottle art arrived securely packed without a scratch. Looks magical on our nightstand!",
    date: "1 week ago"
  },
  {
    author: "Sneha P.",
    stars: 5,
    item: "Ocean Wave Resin Coasters",
    comment: "The glassy 3D water finish on these coasters is stunning. Everyone who visits asks where I bought them.",
    date: "2 weeks ago"
  }
];

function getStoredReviews() {
  const stored = localStorage.getItem('vyora_customer_reviews');
  if (!stored) {
    localStorage.setItem('vyora_customer_reviews', JSON.stringify(defaultStarterReviews));
    return defaultStarterReviews;
  }
  return JSON.parse(stored);
}

function renderReviews() {
  const container = document.getElementById('reviewsDisplayGrid');
  if (!container) return;

  const reviews = getStoredReviews();
  container.innerHTML = '';

  reviews.forEach(rev => {
    const card = document.createElement('div');
    card.style.cssText = "background: #fff; padding: 20px; border-radius: 14px; border: 1px solid #edf2f7; box-shadow: 0 4px 15px rgba(0,0,0,0.03); display: flex; flex-direction: column;";

    const starsHtml = '★'.repeat(rev.stars) + '☆'.repeat(5 - rev.stars);
    const itemTag = rev.item ? `<span style="font-size: 0.72rem; background: #fff0f3; color: #ff3366; font-weight: 700; padding: 2px 8px; border-radius: 6px; margin-bottom: 8px; display: inline-block;">${rev.item}</span>` : '';

    card.innerHTML = `
      <div style="color: #f59e0b; font-size: 1.1rem; margin-bottom: 6px;">${starsHtml}</div>
      ${itemTag}
      <p style="font-size: 0.88rem; color: #4a5568; line-height: 1.5; margin-bottom: 12px; flex-grow: 1;">"${rev.comment}"</p>
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid #f7fafc; padding-top: 8px;">
        <strong style="font-size: 0.84rem; color: #22223b;">${rev.author}</strong>
        <span style="font-size: 0.74rem; color: #a0aec0;">${rev.date || 'Verified Buyer'}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Interactive Review Form Handlers
const toggleReviewFormBtn = document.getElementById('toggleReviewFormBtn');
const reviewSubmissionForm = document.getElementById('reviewSubmissionForm');
const cancelReviewBtn = document.getElementById('cancelReviewBtn');
const starRatingPicker = document.getElementById('starRatingPicker');
const reviewStarValue = document.getElementById('reviewStarValue');

if (toggleReviewFormBtn && reviewSubmissionForm) {
  toggleReviewFormBtn.addEventListener('click', () => {
    const isHidden = reviewSubmissionForm.style.display === 'none';
    reviewSubmissionForm.style.display = isHidden ? 'block' : 'none';
    toggleReviewFormBtn.textContent = isHidden ? '▲ Close Form' : '✍️ Write a Review';
  });
}

if (cancelReviewBtn && reviewSubmissionForm && toggleReviewFormBtn) {
  cancelReviewBtn.addEventListener('click', () => {
    reviewSubmissionForm.style.display = 'none';
    toggleReviewFormBtn.textContent = '✍️ Write a Review';
  });
}

// Dynamic Star Selector
if (starRatingPicker && reviewStarValue) {
  const stars = starRatingPicker.querySelectorAll('span');
  stars.forEach(s => {
    s.addEventListener('click', () => {
      const selected = parseInt(s.getAttribute('data-star'));
      reviewStarValue.value = selected;
      stars.forEach(st => {
        const val = parseInt(st.getAttribute('data-star'));
        st.style.color = val <= selected ? '#f59e0b' : '#d1d5db';
      });
    });
  });
}

// Form Submission
if (reviewSubmissionForm) {
  reviewSubmissionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reviewAuthor').value.trim();
    const item = document.getElementById('reviewItemPurchased').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();
    const stars = parseInt(reviewStarValue.value) || 5;

    if (!name || !comment) return;

    const newReview = {
      author: name,
      stars: stars,
      item: item,
      comment: comment,
      date: "Just now"
    };

    const existing = getStoredReviews();
    existing.unshift(newReview); // Put newest review at top
    localStorage.setItem('vyora_customer_reviews', JSON.stringify(existing));

    renderReviews();
    reviewSubmissionForm.reset();
    reviewSubmissionForm.style.display = 'none';
    if (toggleReviewFormBtn) toggleReviewFormBtn.textContent = '✍️ Write a Review';

    alert("✨ Thank you! Your review has been added to our storefront.");
  });
}

// Initial Render
renderReviews();
// ==========================================================================
// 🎟️ STOREFRONT PROMO CODE ENGINE (SYNCED WITH ADMIN)
// ==========================================================================

function getStorePromoSettings() {
  const saved = localStorage.getItem('vyora_promo_settings');
  if (saved) return JSON.parse(saved);
  return {
    enabled: true,
    code: "VYORA10",
    type: "percent",
    value: 10,
    label: "10% OFF on your entire order"
  };
}

let activeAppliedPromo = null;

function syncStorePromoVisibility() {
  const settings = getStorePromoSettings();
  const couponContainer = document.querySelector('.coupon-box') || document.getElementById('couponBoxSection');
  const surpriseOfferPill = document.getElementById('surpriseOfferPill');

  if (couponContainer) {
    couponContainer.style.display = settings.enabled ? 'block' : 'none';
  }

  if (surpriseOfferPill) {
    surpriseOfferPill.style.display = settings.enabled ? 'flex' : 'none';
  }
}

function applyStorePromo(inputCode) {
  const settings = getStorePromoSettings();
  const feedback = document.getElementById('couponFeedback');
  const discountRow = document.getElementById('discountRow');

  if (!settings.enabled) {
    if (feedback) {
      feedback.textContent = "No promotional campaigns are currently active.";
      feedback.style.color = "#dc2626";
      feedback.style.display = "block";
    }
    return;
  }

  const cleanInput = (inputCode || "").trim().toUpperCase();

  if (!cleanInput) {
    if (feedback) {
      feedback.textContent = "Please enter a coupon code.";
      feedback.style.color = "#dc2626";
      feedback.style.display = "block";
    }
    return;
  }

  if (cleanInput !== settings.code.toUpperCase()) {
    if (feedback) {
      feedback.textContent = "Invalid or expired promo code.";
      feedback.style.color = "#dc2626";
      feedback.style.display = "block";
    }
    activeAppliedPromo = null;
    if (discountRow) discountRow.style.display = "none";
    return;
  }

  activeAppliedPromo = settings;
  if (feedback) {
    feedback.textContent = `Applied: ${settings.label}!`;
    feedback.style.color = "#059669";
    feedback.style.display = "block";
  }

  calculateCheckoutDiscount();
}

function calculateCheckoutDiscount() {
  const discountRow = document.getElementById('discountRow');
  const discountDisplay = document.getElementById('discountValueDisplay');
  const grandTotalEl = document.getElementById('checkoutFinalTotal') || document.getElementById('cartGrandTotal');

  if (!grandTotalEl) return;

  let baseAmount = parseInt(grandTotalEl.getAttribute('data-base-price') || grandTotalEl.textContent.replace(/[^0-9]/g, '')) || 0;
  if (!grandTotalEl.hasAttribute('data-base-price')) {
    grandTotalEl.setAttribute('data-base-price', baseAmount);
  } else {
    baseAmount = parseInt(grandTotalEl.getAttribute('data-base-price'));
  }

  let discountAmount = 0;
  if (activeAppliedPromo) {
    if (activeAppliedPromo.type === 'percent') {
      discountAmount = Math.round((baseAmount * activeAppliedPromo.value) / 100);
    } else if (activeAppliedPromo.type === 'flat') {
      discountAmount = activeAppliedPromo.value;
    }
  }

  const finalPayable = Math.max(0, baseAmount - discountAmount);

  if (discountRow && discountDisplay) {
    if (discountAmount > 0) {
      discountDisplay.textContent = `-₹${discountAmount}`;
      discountRow.style.display = "flex";
    } else {
      discountRow.style.display = "none";
    }
  }

  grandTotalEl.textContent = `₹${finalPayable}`;
}

// ==========================================================================
// 🎟️ INTERACTIVE VOUCHER POPUP & AUTO-APPLY CONTROLLER
// ==========================================================================

const surpriseOfferPill = document.getElementById('surpriseOfferPill');
const voucherModalOverlay = document.getElementById('voucherModalOverlay');
const closeVoucherModalBtn = document.getElementById('closeVoucherModalBtn');
const voucherModalCodeDisplay = document.getElementById('voucherModalCodeDisplay');
const voucherModalTagline = document.getElementById('voucherModalTagline');
const applyVoucherAutoBtn = document.getElementById('applyVoucherAutoBtn');
const voucherCopiedToast = document.getElementById('voucherCopiedToast');
const couponInput = document.getElementById('couponInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');

// 1. Open Voucher Modal on Tap
if (surpriseOfferPill) {
  surpriseOfferPill.addEventListener('click', (e) => {
    e.stopPropagation();
    const settings = getStorePromoSettings();

    // If disabled in admin panel, do nothing
    if (!settings.enabled) return;

    if (voucherModalCodeDisplay) voucherModalCodeDisplay.textContent = settings.code;
    if (voucherModalTagline) voucherModalTagline.textContent = settings.label || `Get ${settings.value}% off your handcrafted creations!`;
    if (voucherCopiedToast) voucherCopiedToast.style.display = 'none';

    if (voucherModalOverlay) {
      voucherModalOverlay.style.display = 'flex';
    }
  });
}

// 2. Close Modal Handlers
if (closeVoucherModalBtn && voucherModalOverlay) {
  closeVoucherModalBtn.addEventListener('click', () => {
    voucherModalOverlay.style.display = 'none';
  });

  voucherModalOverlay.addEventListener('click', (e) => {
    if (e.target === voucherModalOverlay) {
      voucherModalOverlay.style.display = 'none';
    }
  });
}

// 3. Auto-Copy and Auto-Apply into Checkout
if (applyVoucherAutoBtn) {
  applyVoucherAutoBtn.addEventListener('click', () => {
    const settings = getStorePromoSettings();
    
    // Copy code to phone clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(settings.code).catch(() => {});
    }

    // Auto-fill into checkout promo input
    if (couponInput) {
      couponInput.value = settings.code;
    }

    // Automatically trigger calculation if customer is already in checkout
    applyStorePromo(settings.code);

    if (voucherCopiedToast) {
      voucherCopiedToast.style.display = 'block';
    }

    // Close modal automatically after 1 second
    setTimeout(() => {
      if (voucherModalOverlay) voucherModalOverlay.style.display = 'none';
    }, 1100);
  });
}

// 4. Regular Promo Input Box Listener (Inside Checkout)
if (applyCouponBtn && couponInput) {
  applyCouponBtn.addEventListener('click', () => {
    applyStorePromo(couponInput.value);
  });
}

// Check promo visibility whenever storefront loads
syncStorePromoVisibility();
// --- CUSTOMIZATION & PHOTO UPLOAD HELPERS ---
let customerAttachedPhotoBase64 = "";
let giftWrapPrice = 0;

// Preview & Convert customer uploaded image to Base64
function previewCustomerUploadedImage(input) {
  const file = input.files && input.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert("Image is larger than 5MB. Please choose a smaller photo or share it via WhatsApp.");
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      customerAttachedPhotoBase64 = e.target.result;
      const previewImg = document.getElementById('photoPreviewImg');
      const container = document.getElementById('photoPreviewContainer');
      if (previewImg && container) {
        previewImg.src = customerAttachedPhotoBase64;
        container.style.display = 'block';
      }
    };
    reader.readAsDataURL(file);
  }
}

// Toggle +₹50 Gift wrap in total calculation
function toggleGiftWrapPrice(checkbox) {
  recalculateCheckoutTotals();
  giftWrapPrice = checkbox.checked ? 50 : 0;
  if (typeof updateOrderTotal === 'function') {
    updateOrderTotal();
  }
}
// --- LIVE WHATSAPP ORDER ROUTING ---
const VYORA_WHATSAPP_NUMBER = "919491396383"; // 👈 Replace with your 10-digit WhatsApp number (with 91 prefix)

function generateWhatsAppOrderUrl(order) {
  const customNote = order.customOrderText || order.customMessage || order.note || 'None';
  const wrapText = order.giftWrap ? 'Yes (+₹50)' : 'No';
  const totalAmount = order.totalPrice || order.itemPrice || '';

  const messageText = 
`🛍️ *NEW ORDER - VYORA STUDIO*
━━━━━━━━━━━━━━━━━━
🆔 *Order ID:* ${order.orderId || 'VYORA'}
📅 *Date:* ${order.orderDate || new Date().toLocaleDateString('en-IN')}

👤 *CUSTOMER DETAILS:*
• *Name:* ${order.name || order.customerName || 'N/A'}
• *Phone:* ${order.phone || order.customerPhone || 'N/A'}
• *Address:* ${order.address || 'N/A'}

📦 *ORDER SPECIFICATIONS:*
• *Product:* ${order.categoryInfo || order.itemsSummary || 'Handcrafted Art'}
• *Customization Note:* ${customNote}
• *Gift Packaging:* ${wrapText}

💰 *PAYMENT & BILLING:*
• *Total Payable:* ₹${totalAmount}
• *Payment Mode:* ${order.paymentMode || order.paymentMethod || 'Online / COD'}

${order.customPhoto ? '📸 *Photo Uploaded:* Yes (I will also attach high-res photo in this chat)' : ''}
━━━━━━━━━━━━━━━━━━
_Please confirm my order and share dispatch updates here!_`;

  return `https://wa.me/${VYORA_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

function openWhatsAppOrder(order) {
  const url = generateWhatsAppOrderUrl(order);
  window.open(url, '_blank');
}
// Function to swap care tips dynamically depending on item category
function updateCareGuideForProduct(product) {
  const guideContainer = document.getElementById('dynamicCareGuideContent');
  if (!guideContainer || !product) return;

  const category = (product.mainCategoryName || product.mainCategory || product.category || '').toLowerCase();

  if (category.includes('bottle') || category.includes('glow')) {
    guideContainer.innerHTML = `
      <ul style="padding-left: 18px; margin: 0; font-size: 0.8rem; line-height: 1.5;">
        <li>Sealed with waterproof clear protective resin varnish.</li>
        <li>Wipe glass gently with a damp microfiber cloth. Do not soak in boiling water.</li>
        <li>Replaceable warm-white LED batteries are fitted into the cork top.</li>
      </ul>
    `;
  } else if (category.includes('resin') || category.includes('clock')) {
    guideContainer.innerHTML = `
      <ul style="padding-left: 18px; margin: 0; font-size: 0.8rem; line-height: 1.5;">
        <li>Keep away from prolonged, intense direct sunlight to maintain crystal clarity.</li>
        <li>Dust lightly with a dry microfiber cloth or soft duster.</li>
        <li>Water-resistant surface; avoid harsh alcohol-based sprays.</li>
      </ul>
    `;
  } else {
    guideContainer.innerHTML = `
      <ul style="padding-left: 18px; margin: 0; font-size: 0.8rem; line-height: 1.5;">
        <li>Freshly prepared and sealed right before dispatch.</li>
        <li>Store in an airtight jar in a cool, dry place away from humidity.</li>
        <li>Best enjoyed within 14–20 days of delivery.</li>
      </ul>
    `;
  }
}
// --- PWA INSTALL BANNER & SERVICE WORKER REGISTRATION ---
let deferredPrompt = null;
const pwaBanner = document.getElementById('pwaInstallBanner') || document.querySelector('.install-banner');
const btnInstallApp = document.getElementById('btnInstallApp') || document.querySelector('.install-banner button');

// 1. Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('VYORA SW Registered successfully:', reg.scope))
      .catch((err) => console.log('VYORA SW Registration failed:', err));
  });
}

// 2. Capture Chrome Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent mini-infobar from appearing automatically
  e.preventDefault();
  deferredPrompt = e;

  // Make sure top banner is visible
  if (pwaBanner) {
    pwaBanner.style.display = 'flex';
  }
});

// 3. Trigger Native Install Dialog on Button Click
if (btnInstallApp) {
  btnInstallApp.addEventListener('click', async () => {
    if (!deferredPrompt) {
      alert("To install VYORA:\n• On Android Chrome: Tap the top-right 3 dots ⋮ > 'Add to Home screen'\n• On iPhone Safari: Tap the Share icon ⎋ > 'Add to Home Screen'");
      return;
    }

    // Show native prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User installed VYORA to home screen');
      if (pwaBanner) pwaBanner.style.display = 'none';
    }
    deferredPrompt = null;
  });
}

// 4. Hide Banner Once Installed
window.addEventListener('appinstalled', () => {
  console.log('VYORA successfully installed');
  if (pwaBanner) pwaBanner.style.display = 'none';
  deferredPrompt = null;
});