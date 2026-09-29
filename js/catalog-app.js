/**
 * Noor Layers.mfg - Interactive B2B Product Catalog Controller
 */

(function () {
  let activeCategory = 'All';
  let searchQuery = '';
  let catalogItems = window.NOOR_CATALOG || [];

  const CATEGORIES = [
    { name: 'All', label: 'All Products', icon: 'grid_view' },
    { name: 'Jackets', label: 'Jackets', icon: 'apparel' },
    { name: 'Hoodies', label: 'Hoodies', icon: 'checkroom' },
    { name: 'Sportswear', label: 'Sportswear', icon: 'fitness_center' },
    { name: 'T-Shirts', label: 'T-Shirts', icon: 'dry_cleaning' },
    { name: 'Tracksuits', label: 'Tracksuits', icon: 'sprint' },
    { name: 'Custom Products', label: 'Custom Products', icon: 'auto_fix_high' },
    { name: 'Other', label: 'Factory & Facilities', icon: 'precision_manufacturing' }
  ];

  function getCategoryCount(catName) {
    if (catName === 'All') return catalogItems.length;
    return catalogItems.filter(item => item.category === catName).length;
  }

  function renderCategoryTabs() {
    const tabsContainer = document.getElementById('catalog-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = CATEGORIES.map(cat => {
      const count = getCategoryCount(cat.name);
      const isActive = activeCategory === cat.name;
      const activeClass = isActive
        ? 'bg-secondary text-on-secondary-fixed border-secondary shadow-md font-bold'
        : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border-outline-variant/40';

      return `
        <button type="button" data-category="${cat.name}" class="catalog-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-none border text-xs uppercase tracking-wider transition-all duration-200 ${activeClass}">
          <span class="material-symbols-outlined text-[16px]">${cat.icon}</span>
          <span>${cat.label}</span>
          <span class="px-1.5 py-0.2 bg-black/25 text-[10px] rounded-full font-mono">${count}</span>
        </button>
      `;
    }).join('');

    // Attach listeners
    tabsContainer.querySelectorAll('.catalog-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        activeCategory = this.getAttribute('data-category');
        renderCategoryTabs();
        renderProductsGrid();
      });
    });
  }

  function filterItems() {
    return catalogItems.filter(item => {
      const matchCat = (activeCategory === 'All') || (item.category === activeCategory);
      if (!matchCat) return false;

      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.tag && item.tag.toLowerCase().includes(q))
      );
    });
  }

  function renderProductsGrid() {
    const grid = document.getElementById('catalog-grid');
    const countDisplay = document.getElementById('catalog-count-display');
    if (!grid) return;

    const items = filterItems();
    if (countDisplay) {
      countDisplay.innerText = `Showing ${items.length} of ${catalogItems.length} Products`;
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-surface-container-low border border-outline-variant/30 p-8">
          <span class="material-symbols-outlined text-outline text-5xl mb-2">search_off</span>
          <h4 class="text-on-surface text-lg font-bold uppercase mb-1">No Matching Products Found</h4>
          <p class="text-on-surface-variant text-sm max-w-md mx-auto mb-4">Try clearing your search query or selecting a different category from above.</p>
          <button type="button" id="reset-catalog-filter" class="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-catalog-filter');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'All';
          searchQuery = '';
          const searchInput = document.getElementById('catalog-search-input');
          if (searchInput) searchInput.value = '';
          renderCategoryTabs();
          renderProductsGrid();
        });
      }
      return;
    }

    grid.innerHTML = items.map((item, idx) => {
      const isFacility = item.category === 'Other';
      const actionText = isFacility ? 'Inquire Facility Spec' : 'Inquire This Spec';

      return `
        <div class="bg-surface-container-lowest flex flex-col justify-between group hover:border-secondary/60 border border-outline-variant/30 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden">
          <div>
            <!-- Image Card Box -->
            <div class="relative w-full h-72 sm:h-80 overflow-hidden bg-surface-container-highest cursor-pointer catalog-img-card" data-idx="${idx}" data-img="${item.image}" data-name="${item.name}">
              <img 
                src="${item.image}" 
                alt="${item.name}" 
                loading="lazy" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onerror="this.src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span class="inline-flex items-center gap-1.5 text-xs text-secondary bg-surface-container-lowest/90 px-3 py-1 font-mono uppercase tracking-wider backdrop-blur-sm border border-secondary/30">
                  <span class="material-symbols-outlined text-[14px]">visibility</span> Click to Enlarge
                </span>
              </div>
              <div class="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-0.5 text-secondary font-mono text-xs font-bold uppercase tracking-wider border border-secondary/20">
                ${item.tag || item.category}
              </div>
              <div class="absolute top-3 right-3 bg-surface-container-high/90 text-on-surface-variant font-mono text-[11px] px-2 py-0.5 uppercase tracking-wider border border-outline-variant/30">
                ${item.moq ? 'MOQ: ' + item.moq : item.id}
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between text-[11px] font-mono text-secondary">
                <span>${item.id}</span>
                <span class="text-on-surface-variant uppercase">${item.category}</span>
              </div>
              <h3 class="font-bold text-base uppercase text-on-surface group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                ${item.name}
              </h3>
              <p class="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                ${item.description}
              </p>
            </div>
          </div>

          <!-- Bottom Button -->
          <div class="p-5 pt-0">
            <button 
              type="button" 
              class="w-full bg-surface-container-high hover:bg-secondary hover:text-on-secondary-fixed text-on-surface font-mono text-xs uppercase py-2.5 px-4 text-center block transition-all duration-200 font-bold border border-outline-variant/40 hover:border-secondary flex items-center justify-center gap-2 catalog-inquire-btn"
              data-product-name="${item.name}"
              data-category="${item.category}"
            >
              <span>${actionText}</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach Inquire button events
    grid.querySelectorAll('.catalog-inquire-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const prodName = this.getAttribute('data-product-name');
        const prodCat = this.getAttribute('data-category');
        selectProductForInquiry(prodName, prodCat);
      });
    });

    // Attach Image Lightbox events
    grid.querySelectorAll('.catalog-img-card').forEach(box => {
      box.addEventListener('click', function () {
        const imgSrc = this.getAttribute('data-img');
        const imgName = this.getAttribute('data-name');
        openLightbox(imgSrc, imgName);
      });
    });
  }

  function selectProductForInquiry(prodName, prodCat) {
    const quoteSection = document.getElementById('quote-section');
    const selectBox = document.getElementById('targetCategory');
    const messageBox = document.getElementById('projectBrief');

    if (selectBox) {
      let matched = false;
      for (let i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].text.toLowerCase().includes(prodCat.toLowerCase()) ||
            selectBox.options[i].value.toLowerCase().includes(prodCat.toLowerCase())) {
          selectBox.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched && selectBox.options.length > 0) {
        selectBox.selectedIndex = 0;
      }
    }

    if (messageBox) {
      const existingText = messageBox.value.trim();
      const specLine = `[Inquiry for: ${prodName} (${prodCat})]`;
      if (!existingText.includes(specLine)) {
        messageBox.value = `${specLine}\n` + (existingText ? existingText : "We are looking to order custom units based on this specification. Please share your factory pricing, sample lead time, and minimum order requirements.");
      }
    }

    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      const fullName = document.getElementById('fullName');
      if (fullName) setTimeout(() => fullName.focus(), 600);
    }
  }

  function openLightbox(imgSrc, title) {
    let modal = document.getElementById('catalog-lightbox-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'catalog-lightbox-modal';
      modal.className = 'fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300';
      modal.innerHTML = `
        <div class="relative max-w-4xl w-full bg-surface-container-lowest border border-outline-variant/40 shadow-2xl p-4 md:p-6 overflow-hidden max-h-[90vh] flex flex-col">
          <div class="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
            <h4 id="lightbox-title" class="font-bold text-on-surface text-base uppercase font-mono truncate pr-4"></h4>
            <button type="button" id="lightbox-close" class="text-on-surface-variant hover:text-secondary p-1">
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <div class="flex-1 overflow-auto flex items-center justify-center bg-black/40 min-h-[300px]">
            <img id="lightbox-img" src="" alt="" class="max-h-[65vh] max-w-full object-contain mx-auto" />
          </div>
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant/30 mt-4">
            <span class="text-xs text-on-surface-variant font-mono">Noor Layers.mfg • Sialkot Export Manufacturing</span>
            <button type="button" id="lightbox-inquire" class="px-5 py-2 bg-secondary text-on-secondary-fixed text-xs font-bold uppercase font-mono tracking-wider hover:bg-secondary-fixed transition-colors">
              Inquire This Product
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('#lightbox-close').addEventListener('click', closeLightbox);
      modal.addEventListener('click', e => {
        if (e.target === modal) closeLightbox();
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
      });
    }

    const img = modal.querySelector('#lightbox-img');
    const headerTitle = modal.querySelector('#lightbox-title');
    const inquireBtn = modal.querySelector('#lightbox-inquire');

    img.src = imgSrc;
    headerTitle.innerText = title;

    inquireBtn.onclick = () => {
      closeLightbox();
      selectProductForInquiry(title, 'Catalog Item');
    };

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }

  function closeLightbox() {
    const modal = document.getElementById('catalog-lightbox-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function init() {
    renderCategoryTabs();
    renderProductsGrid();

    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        searchQuery = e.target.value.trim();
        renderProductsGrid();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
