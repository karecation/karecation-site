
const PROGRAMS = [
  {
    id: "quick-concierge-consultation",
    name: "Quick Concierge Consultation",
    category: "Starter",
    startPrice: 50,
    duration: "30 mins",
    location: "Online / Seoul",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tagline: "Best first step for new guests.",
    description: "A focused intake session to map your goals, budget, and travel schedule before selecting premium programs.",
    includes: [
      "Goal and concern assessment",
      "Program shortlist recommendation",
      "Travel-day timing guidance"
    ],
    steps: [
      "Share your goals and timeline",
      "Receive curated options",
      "Finalize a practical route"
    ],
    addons: [],
    faq: [
      { q: "Is this refundable?", a: "Full refund up to 7 days before. 50% refund up to 3 days before. No refund after that." },
      { q: "Can I upgrade to full package later?", a: "Yes. This can be credited toward selected premium bundles." }
    ]
  },
  {
    id: "skin-clinic-care",
    name: "Skin Clinic Care",
    category: "Skin",
    startPrice: 380,
    duration: "2 hrs",
    location: "Gangnam, Seoul",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    tagline: "Clinical skin care with concierge guidance.",
    description: "Curated clinic matching and streamlined visit support for global guests seeking visible results.",
    includes: [
      "Skin diagnostics",
      "Treatment planning",
      "Post-care briefing"
    ],
    steps: [
      "Diagnostic consultation",
      "Customized treatment",
      "Aftercare check"
    ],
    addons: [],
    faq: [
      { q: "Is this suitable for sensitive skin?", a: "Yes, protocol is adjusted after diagnosis." }
    ]
  },
  {
    id: "scalp-diagnosis-spa",
    name: "Scalp Diagnosis & Spa",
    category: "Wellness",
    startPrice: 240,
    duration: "2-3 hrs",
    location: "Cheongdam, Seoul",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80",
    tagline: "Calm, restorative scalp wellness.",
    description: "Analysis-first scalp care to improve scalp comfort, root environment, and overall hair condition.",
    includes: [
      "Scalp imaging",
      "Deep cleansing and treatment",
      "Home routine guide"
    ],
    steps: [
      "Scalp scan",
      "Therapy session",
      "Maintenance plan"
    ],
    addons: [],
    faq: [
      { q: "Only for hair-loss cases?", a: "No. It is also popular for stress and balance care." }
    ]
  },
  {
    id: "celebrity-hair-makeup",
    name: "Celebrity Hair & Makeup",
    category: "Styling",
    startPrice: 320,
    duration: "2 hrs",
    location: "Apgujeong, Seoul",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    tagline: "Editorial-grade K-style finish.",
    description: "Premium salon styling for portraits, events, and high-importance travel moments.",
    includes: [
      "Look consultation",
      "Hair design",
      "Full makeup"
    ],
    steps: [
      "Look planning",
      "Hair and makeup session",
      "Final polish"
    ],
    addons: [],
    faq: [
      { q: "Can I request natural style?", a: "Yes. Natural to glam options are available." }
    ]
  },
  {
    id: "premium-hotel-stay",
    name: "Premium Hotel Stay",
    category: "Travel",
    startPrice: 520,
    duration: "1 night+",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Luxury stay synced to your beauty schedule.",
    description: "Hotel planning with itinerary timing support for a smoother multi-program journey.",
    includes: [
      "Hotel matching",
      "Check-in support",
      "Schedule alignment"
    ],
    steps: [
      "Stay preference intake",
      "Hotel proposal",
      "Itinerary confirmation"
    ],
    addons: [],
    faq: [
      { q: "Can this be booked alone?", a: "Yes, though most guests combine it with beauty programs." }
    ]
  },
  {
    id: "pickup-dropoff",
    name: "Pickup & Drop-off",
    category: "Travel",
    startPrice: 120,
    duration: "Half day",
    location: "Seoul",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    tagline: "Private movement, no schedule stress.",
    description: "Airport, hotel, clinic, and salon transfers coordinated for punctual and comfortable movement.",
    includes: [
      "Private driver",
      "Route coordination",
      "Luggage support"
    ],
    steps: [
      "Route intake",
      "Driver dispatch",
      "Real-time adjustments"
    ],
    addons: [],
    faq: [
      { q: "Can I request multiple stops?", a: "Yes, multi-stop routes are supported." }
    ]
  },
  {
    id: "personal-color-consultation",
    name: "Personal Color Consultation",
    category: "Styling",
    startPrice: 180,
    duration: "2 hrs",
    location: "Seongsu, Seoul",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Your palette, clarified and usable.",
    description: "A practical tone session that improves makeup, hair, and wardrobe decisions quickly.",
    includes: [
      "Seasonal diagnosis",
      "Beauty palette card",
      "Shopping guidance"
    ],
    steps: [
      "Color analysis",
      "Tone mapping",
      "Action guide"
    ],
    addons: [],
    faq: [
      { q: "Do I get a report?", a: "Yes, a concise digital summary is included." }
    ]
  }
];

const CATEGORY_ORDER = ["All", "Starter", "Skin", "Wellness", "Styling", "Travel"];
const STORAGE_KEY = "karecation_cart_simple_v1";
const SERVICE_RATE = 0.05;
const BOOKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbw3QYQcz4yEfooj5JHimeEjPhEMiwr9d-thze96WrjQJxzgkjCVRDlG1XG6iM6TJEEU/exec";

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getProgramById(id) {
  return PROGRAMS.find((program) => program.id === id);
}

function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    return raw
      .map((item) => ({
        programId: item.programId,
        travelers: Math.max(1, Math.round(Number(item.travelers) || 1)),
        preferredDate: item.preferredDate || ""
      }))
      .filter((item) => getProgramById(item.programId));
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = readCart().reduce((sum, item) => sum + (Number(item.travelers) || 1), 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
  });
}

function addToCart(programId) {
  const program = getProgramById(programId);
  if (!program) return;

  const cart = readCart();
  const existing = cart.find((item) => item.programId === programId);
  if (existing) {
    existing.travelers += 1;
  } else {
    cart.push({
      programId,
      travelers: 1,
      preferredDate: ""
    });
  }

  saveCart(cart);
  flashMessage(`${program.name} added to cart.`);
}
function removeFromCart(programId) {
  saveCart(readCart().filter((item) => item.programId !== programId));
  renderCartPage();
  renderBookingSummary();
}

function updateCartItem(programId, patch) {
  const next = readCart().map((item) => {
    if (item.programId !== programId) return item;
    return { ...item, ...patch };
  });
  saveCart(next);
  renderCartPage();
  renderBookingSummary();
}

function getCartDetails() {
  return readCart().map((item) => {
    const program = getProgramById(item.programId);
    const travelers = Math.max(1, Number(item.travelers) || 1);
    const unit = program.startPrice;
    const lineTotal = unit * travelers;

    return {
      ...item,
      program,
      travelers,
      unit,
      lineTotal
    };
  });
}

function getCartTotals() {
  const subtotal = getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
  const service = Math.round(subtotal * SERVICE_RATE);
  const total = subtotal + service;
  return { subtotal, service, total };
}

function flashMessage(message, type = "success") {
  const target = document.getElementById("globalFlash");
  if (!target) return;
  target.textContent = message;
  target.className = `status-message ${type}`;
  setTimeout(() => {
    if (target.textContent === message) {
      target.textContent = "";
      target.className = "status-message";
    }
  }, 2000);
}

function setActiveNav() {
  const current = document.body.dataset.page;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === current);
  });
}

function programCard(program) {
  return `
    <article class="program-card">
      <div class="program-card-image">
        <img src="${program.image}" alt="${program.name}" loading="lazy">
      </div>
      <div class="program-card-body">
        <div class="program-meta">
          <span class="badge">${program.category}</span>
          <span class="badge">${program.location}</span>
        </div>
        <h3 class="program-title">${program.name}</h3>
        <p class="program-desc">${program.tagline}</p>
        <div class="program-price">
          <strong>Starting from ${formatPrice(program.startPrice)}</strong>
          <span>${program.duration}</span>
        </div>
        <div class="program-actions">
          <a class="btn btn-secondary" href="program-detail.html?id=${program.id}">Details</a>
          <button class="btn btn-primary" type="button" data-add-to-cart="${program.id}">Add</button>
        </div>
      </div>
    </article>
  `;
}

function renderHomePrograms() {
  const target = document.getElementById("homeFeaturedPrograms");
  if (!target) return;
  const picks = [
    getProgramById("quick-concierge-consultation"),
    getProgramById("skin-clinic-care"),
    getProgramById("celebrity-hair-makeup")
  ].filter(Boolean);
  target.innerHTML = picks.map(programCard).join("");
}

function renderProgramsPage() {
  const grid = document.getElementById("programGrid");
  const filterRoot = document.getElementById("categoryFilters");
  const search = document.getElementById("programSearch");
  const sort = document.getElementById("programSort");
  const activeHolder = document.getElementById("activeCategory");

  if (!grid || !filterRoot || !activeHolder) return;

  filterRoot.innerHTML = CATEGORY_ORDER.map((name, index) => `<button class="chip ${index === 0 ? "active" : ""}" type="button" data-category="${name}">${name}</button>`).join("");

  function paint() {
    const activeCategory = activeHolder.value || "All";
    const keyword = (search?.value || "").trim().toLowerCase();
    const sortValue = sort?.value || "recommended";

    let list = PROGRAMS.filter((program) => {
      const catOk = activeCategory === "All" || program.category === activeCategory;
      const text = `${program.name} ${program.category} ${program.tagline}`.toLowerCase();
      const searchOk = !keyword || text.includes(keyword);
      return catOk && searchOk;
    });

    if (sortValue === "price-asc") list.sort((a, b) => a.startPrice - b.startPrice);
    if (sortValue === "price-desc") list.sort((a, b) => b.startPrice - a.startPrice);

    grid.innerHTML = list.length
      ? list.map(programCard).join("")
      : `<div class="empty-state" style="grid-column: 1/-1;"><h3 class="display">No matching programs</h3><p class="muted" style="margin-top:6px;">Try another keyword or category.</p></div>`;
  }

  filterRoot.addEventListener("click", (event) => {
    const chip = event.target.closest("button[data-category]");
    if (!chip) return;
    activeHolder.value = chip.dataset.category;
    filterRoot.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    chip.classList.add("active");
    paint();
  });

  search?.addEventListener("input", paint);
  sort?.addEventListener("change", paint);
  paint();
}

function renderDetailPage() {
  const name = document.getElementById("pdpName");
  if (!name) return;

  const params = new URLSearchParams(window.location.search);
  const program = getProgramById(params.get("id")) || PROGRAMS[0];

  document.title = `${program.name} | Karecation`;
  document.getElementById("pdpName").textContent = program.name;
  document.getElementById("pdpTagline").textContent = program.tagline;
  document.getElementById("pdpPrice").textContent = `Starting from ${formatPrice(program.startPrice)}`;
  document.getElementById("pdpDuration").textContent = program.duration;
  document.getElementById("pdpCategory").textContent = program.category;
  document.getElementById("pdpLocation").textContent = program.location;
  document.getElementById("pdpDescription").textContent = program.description;

  const image = document.getElementById("pdpImage");
  image.src = program.image;
  image.alt = program.name;

  document.getElementById("pdpIncludes").innerHTML = program.includes.map((item) => `<div class="list-item">${item}</div>`).join("");
  document.getElementById("pdpSteps").innerHTML = program.steps.map((item, idx) => `<div class="list-item"><strong style="display:block; font-size:.72rem; color:#6b5539; margin-bottom:3px; letter-spacing:.08em; text-transform:uppercase;">Step ${idx + 1}</strong>${item}</div>`).join("");
  document.getElementById("pdpAddons").innerHTML = `<div class="list-item">Basic multilingual concierge communication support is included.</div>`;
  document.getElementById("pdpFaq").innerHTML = program.faq.map((item) => `<details class="faq-item"><summary>${item.q}</summary><p>${item.a}</p></details>`).join("");

  document.querySelectorAll("[data-detail-price]").forEach((node) => {
    node.textContent = `Starting from ${formatPrice(program.startPrice)}`;
  });
  document.querySelectorAll("[data-detail-add]").forEach((button) => {
    button.setAttribute("data-add-to-cart", program.id);
  });
}
function renderCartPage() {
  const root = document.getElementById("cartItems");
  if (!root) return;

  const details = getCartDetails();
  const { subtotal, service, total } = getCartTotals();

  if (!details.length) {
    root.innerHTML = `
      <div class="empty-state">
        <h3 class="display">Your cart is empty</h3>
        <p class="muted" style="margin-top:6px;">Start from programs and add what you need.</p>
        <a class="btn btn-primary" href="programs.html" style="margin-top:12px;">Browse Programs</a>
      </div>
    `;
  } else {
    root.innerHTML = details
      .map((item) => {
        return `
          <article class="cart-item">
            <div class="cart-head">
              <div>
                <h3>${item.program.name}</h3>
                <p class="muted" style="font-size:.8rem;">Starting from ${formatPrice(item.program.startPrice)} · ${item.program.duration}</p>
              </div>
              <strong>${formatPrice(item.lineTotal)}</strong>
            </div>
            <div class="cart-controls">
              <label>
                Travelers
                <input type="number" min="1" max="8" data-cart-travelers data-program-id="${item.program.id}" value="${item.travelers}">
              </label>
              <label>
                Preferred date
                <input type="date" data-cart-date data-program-id="${item.program.id}" value="${item.preferredDate}">
              </label>
            </div>
            <p class="muted" style="font-size:.78rem; margin-top:8px;">Includes basic concierge communication support.</p>
            <div style="margin-top:10px;">
              <button class="btn btn-ghost" type="button" data-cart-remove="${item.program.id}">Remove</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const subtotalNode = document.getElementById("cartSubtotal");
  const serviceNode = document.getElementById("cartService");
  const totalNode = document.getElementById("cartTotal");
  if (subtotalNode) subtotalNode.textContent = formatPrice(subtotal);
  if (serviceNode) serviceNode.textContent = formatPrice(service);
  if (totalNode) totalNode.textContent = formatPrice(total);
}

function renderBookingSummary() {
  const root = document.getElementById("bookingSummary");
  if (!root) return;

  const details = getCartDetails();
  const totals = getCartTotals();

  if (!details.length) {
    root.innerHTML = `<div class="empty-state"><h3 class="display">No items in cart</h3><p class="muted" style="margin-top:6px;">Add programs first to send an accurate reservation request.</p></div>`;
  } else {
    root.innerHTML = details
      .map((item) => {
        return `
          <div class="list-item">
            <strong>${item.program.name}</strong>
            <p class="muted" style="font-size:.8rem; margin-top:4px;">
              ${item.travelers} traveler${item.travelers > 1 ? "s" : ""}
              ${item.preferredDate ? ` · ${item.preferredDate}` : ""}
            </p>
            <p style="margin-top:6px; font-weight:600;">${formatPrice(item.lineTotal)}</p>
          </div>
        `;
      })
      .join("");

  }

  const subtotalNode = document.getElementById("bookingSubtotal");
  const serviceNode = document.getElementById("bookingService");
  const totalNode = document.getElementById("bookingTotal");
  if (subtotalNode) subtotalNode.textContent = formatPrice(totals.subtotal);
  if (serviceNode) serviceNode.textContent = formatPrice(totals.service);
  if (totalNode) totalNode.textContent = formatPrice(totals.total);
}

async function sendReservationToSheet(payload) {
  const formBody = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    formBody.append(key, value == null ? "" : String(value));
  });

  // Single primary transport: urlencoded POST in no-cors mode.
  try {
    await fetch(BOOKING_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: formBody.toString()
    });
    return { ok: true, confirmed: false, mode: "no-cors-urlencoded" };
  } catch (primaryError) {
    // Fallback: single hidden form POST.
    await new Promise((resolve, reject) => {
      try {
        const iframeName = "karecation_sheet_target";
        let iframe = document.querySelector(`iframe[name="${iframeName}"]`);
        if (!iframe) {
          iframe = document.createElement("iframe");
          iframe.name = iframeName;
          iframe.style.display = "none";
          document.body.appendChild(iframe);
        }

        const form = document.createElement("form");
        form.method = "POST";
        form.action = BOOKING_ENDPOINT;
        form.target = iframeName;
        form.style.display = "none";

        Object.entries(payload).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value == null ? "" : String(value);
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();

        setTimeout(() => {
          form.remove();
          resolve();
        }, 1500);
      } catch (fallbackError) {
        reject(fallbackError);
      }
    });

    return { ok: true, confirmed: false, mode: "form-fallback" };
  }
}

function bindBookingForm() {
  const form = document.getElementById("bookingForm") || document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("bookingStatus");
    const submitButton = form.querySelector("button[type='submit']");

    const fullName = (form.querySelector("#fullName")?.value || form.querySelector("[name='name']")?.value || "").trim();
    const email = (form.querySelector("#email")?.value || form.querySelector("[name='email']")?.value || "").trim();
    const nationality = (form.querySelector("#nationality")?.value || form.querySelector("[name='nationality']")?.value || "").trim();
    const additionalRequest = (form.querySelector("#requestNote")?.value || form.querySelector("[name='message']")?.value || "").trim();
    const details = getCartDetails();

    if (!fullName || !email || !nationality) {
      status.textContent = "Please fill in name, email, and nationality.";
      status.className = "status-message error";
      return;
    }

    const cartSummary = details.length
      ? details
        .map((item) => `${item.program.name} x${item.travelers}${item.preferredDate ? ` (${item.preferredDate})` : ""}`)
        .join(" | ")
      : "No cart items";

    const payload = {
      // Requested core fields
      "Full Name": fullName,
      Email: email,
      Nationality: nationality,
      "Additional Request": additionalRequest,
      "Cart Summary": cartSummary,
      // Compatibility aliases for different Apps Script parsers
      fullName,
      name: fullName,
      email,
      nationality,
      additionalRequest,
      message: additionalRequest,
      cartSummary,
      submittedAt: new Date().toISOString()
    };

    try {
      if (submitButton) submitButton.disabled = true;
      status.textContent = "Sending reservation request...";
      status.className = "status-message";

      const result = await sendReservationToSheet(payload);
      const isConfirmed = result && result.ok === true && result.confirmed === true;

      if (isConfirmed) {
        status.textContent = "Reservation request submitted. Concierge will contact you within 24 hours.";
        status.className = "status-message success";
      } else {
        status.textContent = "Request sent. Please check your Google Sheet in 5-10 seconds.";
        status.className = "status-message success";
      }
    } catch (error) {
      status.textContent = "Failed to send request. Please try again.";
      status.className = "status-message error";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

function bindGlobalEvents() {
  document.body.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add-to-cart]");
    if (add) addToCart(add.getAttribute("data-add-to-cart"));

    const remove = event.target.closest("[data-cart-remove]");
    if (remove) removeFromCart(remove.getAttribute("data-cart-remove"));
  });

  document.body.addEventListener("change", (event) => {
    const travelers = event.target.closest("[data-cart-travelers]");
    if (travelers) {
      updateCartItem(travelers.getAttribute("data-program-id"), {
        travelers: Math.max(1, Math.round(Number(travelers.value) || 1))
      });
      return;
    }

    const date = event.target.closest("[data-cart-date]");
    if (date) {
      updateCartItem(date.getAttribute("data-program-id"), {
        preferredDate: date.value || ""
      });
      return;
    }
  });
}

function renderFaqPage() {
  const root = document.getElementById("faqList");
  if (!root) return;
  const faq = [
    {
      q: "Do I pay immediately after cart?",
      a: "No. This is a reservation-request flow. We confirm schedule and availability first."
    },
    {
      q: "Will cart options be reflected in booking request?",
      a: "Yes. We send full name, email, nationality, additional request, and cart summary together."
    },
    {
      q: "Can I start small and expand later?",
      a: "Yes. Starter consultation begins at $50~, and you can upgrade to premium programs later."
    },
    {
      q: "Do you support overseas travelers?",
      a: "Yes. The flow is designed for international guests visiting Korea."
    }
  ];
  root.innerHTML = faq.map((item) => `<details class="faq-item"><summary>${item.q}</summary><p>${item.a}</p></details>`).join("");
}

function init() {
  updateCartCount();
  setActiveNav();
  renderHomePrograms();
  renderProgramsPage();
  renderDetailPage();
  renderCartPage();
  renderBookingSummary();
  renderFaqPage();
  bindBookingForm();
  bindGlobalEvents();
}

document.addEventListener("DOMContentLoaded", init);

