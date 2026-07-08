/* Plotnest Africa Realty — shared logic */

const properties = [
  {
    id: 1,
    title: 'Prime ¼ Acre Plot in Karen',
    location: 'Karen',
    county: 'Nairobi',
    price: 12500000,
    type: 'Land',
    status: 'For Sale',
    size: '0.25 acres',
    bedrooms: null,
    bathrooms: null,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'A premium ¼ acre plot in the serene Karen neighborhood, ideal for a private family home. The land has a ready title deed, water and electricity on-site, and is accessible via an all-weather tarmac road. Gated-community feel with mature trees.',
    features: [
      'Ready title deed',
      'Water & electricity on site',
      'Tarmac road access',
      'Gated community setting',
      'Green leafy environment'
    ],
    agent: { name: 'Grace Muthoni', phone: '+254 712 345 678', email: 'grace@plotnest.co.ke' }
  },
  {
    id: 2,
    title: '3-Bedroom Villa in Runda',
    location: 'Runda',
    county: 'Kiambu',
    price: 35000000,
    type: 'Residential',
    status: 'For Sale',
    size: '0.5 acres',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Elegant 3-bedroom villa sitting on half an acre in the prestigious Runda estate. Open-plan living spaces, a modern kitchen, manicured garden, and secure parking for up to four vehicles.',
    features: [
      'All ensuite master bedroom',
      'Modern fitted kitchen',
      'Spacious garden',
      'Parking for 4 cars',
      '24-hour security'
    ],
    agent: { name: 'James Otieno', phone: '+254 723 456 789', email: 'james@plotnest.co.ke' }
  },
  {
    id: 3,
    title: 'Commercial Plot on Mombasa Road',
    location: 'Mombasa Road',
    county: 'Machakos',
    price: 8500000,
    type: 'Commercial Land',
    status: 'For Sale',
    size: '0.125 acres',
    bedrooms: null,
    bathrooms: null,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Strategically positioned commercial plot along the busy Mombasa Road corridor. High vehicular and foot traffic, suitable for shops, showrooms, or a service station.',
    features: [
      'High traffic frontage',
      'Approved commercial plans',
      'Flat terrain',
      'Water & power available',
      'Easy access to Nairobi–Mombasa highway'
    ],
    agent: { name: 'Amina Hassan', phone: '+254 734 567 890', email: 'amina@plotnest.co.ke' }
  },
  {
    id: 4,
    title: 'Modern Studio Apartment in Kilimani',
    location: 'Kilimani',
    county: 'Nairobi',
    price: 6500000,
    type: 'Apartment',
    status: 'For Sale',
    size: '45 m²',
    bedrooms: 1,
    bathrooms: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3a10e0e9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3a10e0e9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'A compact, stylish studio apartment in the heart of Kilimani, minutes from Yaya Centre and Valley Arcade. Perfect for young professionals or investors looking for rental income.',
    features: [
      'Gym & rooftop terrace',
      'Reserved parking',
      '24-hour security',
      'Backup generator',
      'Close to shopping & restaurants'
    ],
    agent: { name: 'Grace Muthoni', phone: '+254 712 345 678', email: 'grace@plotnest.co.ke' }
  },
  {
    id: 5,
    title: '5-Acre Farmland Near Mt. Kenya',
    location: 'Nanyuki',
    county: 'Laikipia',
    price: 7000000,
    type: 'Land/Farm',
    status: 'For Sale',
    size: '5 acres',
    bedrooms: null,
    bathrooms: null,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Scenic 5-acre farmland in Nanyuki with breathtaking views of Mt. Kenya. Fertile agricultural soil, a functional borehole, and partial perimeter fencing make it ideal for farming or a countryside retreat.',
    features: [
      'Borehole with fresh water',
      'Fertile soil',
      'Perimeter fencing',
      'Scenic Mt. Kenya views',
      'Accessible murram road'
    ],
    agent: { name: 'Peter Kariuki', phone: '+254 745 678 901', email: 'peter@plotnest.co.ke' }
  },
  {
    id: 6,
    title: '4-Bedroom Maisonette in Kitisuru',
    location: 'Kitisuru',
    county: 'Nairobi',
    price: 42000000,
    type: 'Residential',
    status: 'For Sale',
    size: '0.4 acres',
    bedrooms: 4,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Luxury 4-bedroom maisonette in the leafy suburb of Kitisuru. It features a private swimming pool, DSQ, solar water heating, and smart-home integrations for modern living.',
    features: [
      'Private swimming pool',
      'DSQ with separate entrance',
      'Solar water heating',
      'Smart home features',
      'Ample garden & parking'
    ],
    agent: { name: 'James Otieno', phone: '+254 723 456 789', email: 'james@plotnest.co.ke' }
  },
  {
    id: 7,
    title: '1-Acre Plot in Thika',
    location: 'Thika',
    county: 'Kiambu',
    price: 5500000,
    type: 'Land',
    status: 'For Sale',
    size: '1 acre',
    bedrooms: null,
    bathrooms: null,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'Affordable 1-acre plot near Thika Greens. Red soil, gentle slope, and murram road access make it perfect for a residential home or small-scale farming.',
    features: [
      'Ready title deed',
      'Red soil / gentle slope',
      'Murram road access',
      'Near Thika Greens',
      'Water & electricity nearby'
    ],
    agent: { name: 'Amina Hassan', phone: '+254 734 567 890', email: 'amina@plotnest.co.ke' }
  },
  {
    id: 8,
    title: 'Gated Community Plot in Nakuru',
    location: 'Nakuru',
    county: 'Nakuru',
    price: 3200000,
    type: 'Land',
    status: 'For Sale',
    size: '0.05 acres (50x100)',
    bedrooms: null,
    bathrooms: null,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80'
    ],
    description:
      'An affordable 50x100 plot inside a controlled gated community in Nakuru. Ideal for a starter family home with controlled development guidelines.',
    features: [
      'Controlled development',
      'Water & electricity on site',
      'Ready individual title',
      'Security-controlled access',
      'Community amenities nearby'
    ],
    agent: { name: 'Peter Kariuki', phone: '+254 745 678 901', email: 'peter@plotnest.co.ke' }
  }
];

function formatPrice(price) {
  return 'KES ' + price.toLocaleString('en-KE');
}

function propertyCard(p) {
  const meta = [
    p.size ? `<span class="inline-flex items-center gap-1 text-sm text-stone-600"><i data-lucide="move" class="w-4 h-4"></i>${p.size}</span>` : '',
    p.bedrooms ? `<span class="inline-flex items-center gap-1 text-sm text-stone-600"><i data-lucide="bed-double" class="w-4 h-4"></i>${p.bedrooms} Bed</span>` : '',
    p.bathrooms ? `<span class="inline-flex items-center gap-1 text-sm text-stone-600"><i data-lucide="bath" class="w-4 h-4"></i>${p.bathrooms} Bath</span>` : ''
  ]
    .filter(Boolean)
    .join('<span class="text-stone-300">|</span>');

  return `
    <article class="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg transition card-zoom">
      <a href="./property.html?id=${p.id}" class="block relative h-56 overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy">
        <span class="absolute top-4 left-4 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">${p.status}</span>
        <span class="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-green-800 text-xs font-semibold px-3 py-1 rounded-full">${p.type}</span>
      </a>
      <div class="p-5">
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="text-lg font-semibold text-stone-800 group-hover:text-green-700 transition line-clamp-2">${p.title}</h3>
        </div>
        <p class="text-sm text-stone-500 mb-3 inline-flex items-center gap-1"><i data-lucide="map-pin" class="w-4 h-4"></i>${p.location}, ${p.county}</p>
        <div class="flex flex-wrap items-center gap-2 mb-4">${meta}</div>
        <div class="flex items-center justify-between pt-4 border-t border-stone-100">
          <span class="text-xl font-bold text-green-800">${formatPrice(p.price)}</span>
          <a href="./property.html?id=${p.id}" class="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700">View details <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured(container, limit = 4) {
  if (!container) return;
  container.innerHTML = properties.slice(0, limit).map(propertyCard).join('');
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
}

function renderListings(container, filter = {}) {
  if (!container) return 0;
  const filtered = properties.filter((p) => {
    const matchesSearch = !filter.search ||
      `${p.title} ${p.location} ${p.county}`.toLowerCase().includes(filter.search.toLowerCase());
    const matchesType = !filter.type || p.type === filter.type;
    const matchesCounty = !filter.county || p.county === filter.county;
    const matchesMin = !filter.min || p.price >= Number(filter.min);
    const matchesMax = !filter.max || p.price <= Number(filter.max);
    return matchesSearch && matchesType && matchesCounty && matchesMin && matchesMax;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-stone-300 mb-4"></i>
        <h3 class="text-lg font-semibold text-stone-700">No properties found</h3>
        <p class="text-stone-500">Try adjusting your filters.</p>
      </div>`;
  } else {
    container.innerHTML = filtered.map(propertyCard).join('');
  }
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  return filtered.length;
}

function renderPropertyDetail() {
  const container = document.getElementById('property-detail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const p = properties.find((x) => x.id === id);

  if (!p) {
    container.innerHTML = `<div class="max-w-4xl mx-auto py-20 text-center"><h2 class="text-2xl font-bold text-stone-800">Property not found</h2><p class="text-stone-500 mt-2">The listing you are looking for does not exist.</p></div>`;
    return;
  }

  document.title = `${p.title} | Plotnest Africa Realty`;

  const meta = [
    p.size ? `<span class="inline-flex items-center gap-2 text-stone-600"><i data-lucide="move" class="w-5 h-5 text-green-700"></i>${p.size}</span>` : '',
    p.bedrooms ? `<span class="inline-flex items-center gap-2 text-stone-600"><i data-lucide="bed-double" class="w-5 h-5 text-green-700"></i>${p.bedrooms} Bedrooms</span>` : '',
    p.bathrooms ? `<span class="inline-flex items-center gap-2 text-stone-600"><i data-lucide="bath" class="w-5 h-5 text-green-700"></i>${p.bathrooms} Bathrooms</span>` : ''
  ].filter(Boolean).join('');

  const gallery = p.gallery
    .map((src, idx) => `<img src="${src}" alt="${p.title} - image ${idx + 1}" class="w-full h-80 object-cover rounded-2xl ${idx === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : ''}" loading="lazy">`)
    .join('');

  const features = p.features.map((f) => `<li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-5 h-5 text-green-600 mt-0.5"></i><span class="text-stone-700">${f}</span></li>`).join('');

  container.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <nav class="text-sm text-stone-500 mb-6">
        <a href="./index.html" class="hover:text-green-700">Home</a>
        <span class="mx-2">/</span>
        <a href="./listings.html" class="hover:text-green-700">Listings</a>
        <span class="mx-2">/</span>
        <span class="text-stone-800">${p.title}</span>
      </nav>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">${gallery}</div>
          <h1 class="text-3xl md:text-4xl font-bold text-stone-900 mb-2">${p.title}</h1>
          <p class="text-stone-500 mb-4 inline-flex items-center gap-2"><i data-lucide="map-pin" class="w-5 h-5"></i>${p.location}, ${p.county}</p>
          <div class="flex flex-wrap gap-6 mb-6">${meta}</div>
          <div class="prose max-w-none text-stone-700 leading-relaxed mb-8">
            <p>${p.description}</p>
          </div>
          <h2 class="text-xl font-bold text-stone-900 mb-4">Features</h2>
          <ul class="grid sm:grid-cols-2 gap-3 mb-10">${features}</ul>
        </div>

        <aside class="space-y-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
            <p class="text-sm text-stone-500 mb-1">Price</p>
            <p class="text-3xl font-bold text-green-800 mb-6">${formatPrice(p.price)}</p>
            <a href="https://wa.me/${p.agent.phone.replace(/\s+/g, '')}" target="_blank" rel="noopener" class="w-full inline-flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition mb-3">
              <i data-lucide="message-circle" class="w-5 h-5"></i> Enquire on WhatsApp
            </a>
            <a href="tel:${p.agent.phone.replace(/\s+/g, '')}" class="w-full inline-flex justify-center items-center gap-2 bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 font-semibold py-3 px-6 rounded-xl transition">
              <i data-lucide="phone" class="w-5 h-5"></i> Call Agent
            </a>
            <div class="mt-6 pt-6 border-t border-stone-100">
              <p class="text-sm text-stone-500 mb-1">Listed by</p>
              <p class="font-semibold text-stone-800">${p.agent.name}</p>
              <p class="text-sm text-stone-600">${p.agent.phone}</p>
              <p class="text-sm text-stone-600">${p.agent.email}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden-menu');
    menu.classList.toggle('hidden');
    const icon = btn.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', menu.classList.contains('hidden') ? 'menu' : 'x');
      lucide.createIcons();
    }
  });
}

function initListingsFilter() {
  const form = document.getElementById('filter-form');
  const container = document.getElementById('listings-grid');
  if (!form || !container) return;

  const search = document.getElementById('filter-search');
  const type = document.getElementById('filter-type');
  const county = document.getElementById('filter-county');
  const min = document.getElementById('filter-min');
  const max = document.getElementById('filter-max');
  const count = document.getElementById('results-count');

  const params = new URLSearchParams(window.location.search);
  if (search && params.has('search')) search.value = params.get('search');
  if (type && params.has('type')) type.value = params.get('type');
  if (county && params.has('county')) county.value = params.get('county');
  if (min && params.has('min')) min.value = params.get('min');
  if (max && params.has('max')) max.value = params.get('max');

  function applyFilters() {
    const filter = {
      search: search?.value || '',
      type: type?.value || '',
      county: county?.value || '',
      min: min?.value || '',
      max: max?.value || ''
    };
    const found = renderListings(container, filter);
    if (count) count.textContent = `${found} properties found`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilters();
  });

  [search, type, county, min, max].forEach((el) => {
    if (el) el.addEventListener('input', applyFilters);
  });

  applyFilters();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Message sent!';
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

function highlightCurrentNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach((link) => {
    const href = link.getAttribute('href').replace('./', '');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('text-green-700', 'font-semibold');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  initMobileMenu();
  highlightCurrentNav();

  const featured = document.getElementById('featured-grid');
  if (featured) renderFeatured(featured, 4);

  initListingsFilter();
  renderPropertyDetail();
  initContactForm();
});
