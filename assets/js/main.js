/**
 * COURIER & PARCEL DELIVERY SERVICES — MAIN JAVASCRIPT
 * TSCG Technologies Portfolio Demonstration
 * Strict Vanilla JavaScript (No Frameworks or External Libraries)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initActiveNav();
  initBackToTop();
  initTrackingDemo();
  initProjectFilters();
  initProjectModal();
  initNetworkVisual();
  initFaqAccordion();
  initBookingForm();
  initBulkEnquiryForm();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   2. MOBILE HAMBURGER MENU
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-menu-drawer');
  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Close when clicking nav links
  const links = drawer.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu();
    }
  });
}

/* ==========================================================================
   3. ACTIVE NAVIGATION HIGHLIGHT
   ========================================================================== */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/* ==========================================================================
   4. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   5. SHIPMENT TRACKING DEMO (DEMO123456)
   ========================================================================== */
function initTrackingDemo() {
  const trackBtn = document.getElementById('trackingBtn');
  const trackInput = document.getElementById('trackingInput');
  const resultPanel = document.getElementById('trackingResult');
  const errorAlert = document.getElementById('trackingError');
  const presetBtn = document.getElementById('presetDemoBtn');

  if (!trackBtn || !trackInput) return;

  const runTracking = () => {
    const code = trackInput.value.trim().toUpperCase();

    if (!code) {
      if (errorAlert) {
        errorAlert.textContent = 'Please enter a shipment reference number to simulate tracking.';
        errorAlert.classList.add('active');
      }
      if (resultPanel) resultPanel.classList.remove('active');
      return;
    }

    if (code === 'DEMO123456') {
      if (errorAlert) errorAlert.classList.remove('active');
      if (resultPanel) {
        resultPanel.classList.add('active');
        // Scroll into view if needed
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } else {
      if (resultPanel) resultPanel.classList.remove('active');
      if (errorAlert) {
        errorAlert.textContent = 'Demo tracking is available only for the sample reference DEMO123456.';
        errorAlert.classList.add('active');
      }
    }
  };

  trackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    runTracking();
  });

  trackInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runTracking();
    }
  });

  if (presetBtn) {
    presetBtn.addEventListener('click', () => {
      trackInput.value = 'DEMO123456';
      runTracking();
    });
  }
}

/* ==========================================================================
   6. PROJECT FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. PROJECT DETAIL MODAL
   ========================================================================== */
const projectData = {
  'p1': {
    title: 'Express Document Delivery Concept',
    category: 'Document Courier',
    image: 'images/courier-project-express.jpeg',
    alt: 'Express Document Delivery Milestone',
    description: 'An illustrative end-to-end urgent legal and financial document transit workflow featuring tamper-evident packaging, point-to-point transit tracking, and simulated biometric proof of delivery.',
    steps: [
      'Encrypted digital booking created by enterprise customer',
      'Dedicated field courier assigned within 15 minutes',
      'Barcode-authenticated sealed folder handover',
      'Direct route transfer with zero intermediate hub stops',
      'Simulated dual-signature electronic delivery acknowledgment'
    ]
  },
  'p2': {
    title: 'Downtown Urban Parcel Delivery',
    category: 'Express Delivery',
    image: 'images/courier-project-urban.jpeg',
    alt: 'Downtown Urban Same-Day Parcel Route',
    description: 'Demonstrating an eco-friendly urban micro-hub distribution framework utilizing electric delivery vans and optimized multi-drop last-mile routing for fast commercial center deliveries.',
    steps: [
      'Inbound parcels consolidated at metropolitan fringe terminal',
      'Automated dynamic routing based on real-time traffic heuristics',
      'Electric van deployment for zero-emission inner-city drops',
      'Customer SMS notification with 1-hour simulated delivery window',
      'Safe-drop photo verification recorded in demo portal'
    ]
  },
  'p3': {
    title: 'E-commerce Order Dispatch Ingestion',
    category: 'E-commerce',
    image: 'images/courier-project-ecommerce.jpeg',
    alt: 'Peak E-commerce Parcel Ingestion & Dispatch',
    description: 'A scalable bulk ingestion framework engineered for online retail brands during promotional peaks, demonstrating high-speed parcel scanning, weight verification, and automated sorting.',
    steps: [
      'Direct warehouse conveyor loading from seller packing line',
      'High-speed optical 2D barcode scanning and dimensional checks',
      'Dynamic sorting into zonal transport consolidation cages',
      'Linehaul dispatch scheduling with tracking visibility',
      'Predictive delivery milestones reflected in simulated buyer timeline'
    ]
  },
  'p4': {
    title: 'Retail Store Local Distribution Network',
    category: 'Business Delivery',
    image: 'images/courier-project-retail.jpeg',
    alt: 'Multi-Store Retail Distribution System',
    description: 'Illustrative omnichannel retail parcel transfer coordinating store-to-door customer dispatches and inter-outlet stock balancing with clear handover accountability.',
    steps: [
      'Store inventory dispatch request triggered via demo dashboard',
      'Standardized protective retail carton pickup',
      'Cross-dock sorting at local distribution node',
      'Same-evening residential or storefront drop-off',
      'Item-level receipt confirmation and inventory closure'
    ]
  },
  'p5': {
    title: 'Corporate Inter-Office Document Movement',
    category: 'Document Courier',
    image: 'images/courier-project-corporate.jpeg',
    alt: 'Inter-Office Scheduled Courier Network',
    description: 'A scheduled courier circuit designed for corporate offices, law firms, and administrative headquarters requiring consistent daily document collection and delivery cycles.',
    steps: [
      'Scheduled morning and afternoon mailroom sweeps',
      'Secure lockbox container transfer between corporate branches',
      'Barcoded manifest tracking for sensitive audit trails',
      'Desk-level receipt verification by authorized staff',
      'Daily consolidated shipment activity reporting'
    ]
  },
  'p6': {
    title: 'Industrial Bulk Dispatch & Barcoding',
    category: 'Bulk Parcel Dispatch',
    image: 'images/courier-project-bulk-pickup.jpeg',
    alt: 'Industrial Bulk Dispatch & Barcoding',
    description: 'Simulated high-volume parcel dispatch operation managing heavy carton volumes with palletized staging, digital manifests, and dedicated carrier coordination.',
    steps: [
      'Palletized carton staging at enterprise loading bays',
      'Digital manifest reconciliation with shipment item counts',
      'Heavy-duty transport vehicle loading and cargo securing',
      'Transit route telemetry monitoring simulation',
      'Bulk delivery handover with consolidated proof of receipt'
    ]
  },
  'p7': {
    title: 'Reverse Logistics & Customer Return Verification',
    category: 'E-commerce',
    image: 'images/courier-project-reverse.jpeg',
    alt: 'E-commerce Return Pickup & Verification',
    description: 'A customer-centric reverse pickup model demonstrating doorstep inspection, condition assessment, barcode re-labeling, and swift restitution back to seller inventory.',
    steps: [
      'Return authorization registered by consumer',
      'Pickup agent doorstep visual condition check',
      'Tamper-evident return bag sealing with fresh return label',
      'Consolidation at regional return hub',
      'Swift merchant warehouse restocking delivery'
    ]
  },
  'p8': {
    title: 'Regional Hub Last-Mile Connectivity',
    category: 'Express Delivery',
    image: 'images/courier-project-local-network.jpeg',
    alt: 'Local Hub Last-Mile Connectivity',
    description: 'Demonstrating seamless arterial-to-feeder transit synchronizing linehaul express arrivals with localized suburban courier distribution fleets.',
    steps: [
      'Early-morning linehaul container arrival at primary sorting hub',
      'Automated parcel decanting onto high-speed distribution ring',
      'Sub-route allocation to last-mile delivery professionals',
      'Driver vehicle loading and package departure scan',
      'Real-time delivery progress updates on customer tracking interface'
    ]
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!modal) return;

  const modalImg = document.getElementById('modalImg');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSteps = document.getElementById('modalSteps');

  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = data.alt;
    }
    if (modalTag) modalTag.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.description;

    if (modalSteps) {
      modalSteps.innerHTML = '';
      data.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        modalSteps.appendChild(li);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = btn.getAttribute('data-project-id');
      openModal(pid);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. INTERACTIVE DELIVERY NETWORK VISUAL
   ========================================================================== */
function initNetworkVisual() {
  const nodes = document.querySelectorAll('.network-node-group');
  const nodeTitle = document.getElementById('activeNodeTitle');
  const nodeDesc = document.getElementById('activeNodeDesc');
  const nodeMetric = document.getElementById('activeNodeMetric');

  if (!nodes.length || !nodeTitle) return;

  const nodeInfo = {
    'pickup': {
      title: 'Node 1: Customer Pickup Point',
      desc: 'Origin point where sender parcel is inspected, weighed, and barcoded by the local courier agent.',
      metric: 'Average Pickup Time: 45 Minutes (Simulated)'
    },
    'sorting': {
      title: 'Node 2: Automated Sorting Facility',
      desc: 'Regional hub equipped with optical conveyor scanners to organize parcels by postal destination zone.',
      metric: 'Throughput Capacity: 2,400 Parcels/Hour (Simulated)'
    },
    'transit': {
      title: 'Node 3: High-Speed Transit Hub',
      desc: 'Arterial cross-dock facility connecting linehaul delivery fleets and regional overnight express corridors.',
      metric: 'Active Transit Corridors: 14 Routes (Simulated)'
    },
    'delivery': {
      title: 'Node 4: Local Delivery Distribution Centre',
      desc: 'Suburban last-mile hub staging parcels onto optimized delivery routes for courier vans.',
      metric: 'Route Optimization Rate: 98.4% (Simulated)'
    },
    'destination': {
      title: 'Node 5: Final Receiver Destination',
      desc: 'Recipient doorstep or corporate mailroom where package handover and digital proof of delivery are finalized.',
      metric: 'First-Attempt Handover Rate: 96.8% (Simulated)'
    }
  };

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.getAttribute('data-node-key');
      const data = nodeInfo[key];
      if (data) {
        nodeTitle.textContent = data.title;
        nodeDesc.textContent = data.desc;
        if (nodeMetric) nodeMetric.textContent = data.metric;

        // Visual highlight
        nodes.forEach(n => n.classList.remove('selected'));
        node.classList.add('selected');
      }
    });
  });
}

/* ==========================================================================
   9. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items
      faqItems.forEach(other => {
        other.classList.remove('active');
        const b = other.querySelector('.faq-button');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   10. COURIER BOOKING FORM VALIDATION & DEMO SUBMISSION
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('courierBookingForm');
  const modal = document.getElementById('bookingConfirmationModal');
  const closeBtn = document.getElementById('bookingModalCloseBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Helper: validate required text field
    const validateField = (id, condition, errorMsg) => {
      const el = document.getElementById(id);
      const err = document.getElementById(`${id}Error`);
      if (!el) return true;

      const passed = condition(el.value.trim());
      if (!passed) {
        el.classList.add('error');
        if (err) {
          err.textContent = errorMsg;
          err.classList.add('visible');
        }
        return false;
      } else {
        el.classList.remove('error');
        if (err) err.classList.remove('visible');
        return true;
      }
    };

    // Regex checks
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pinRegex = /^[0-9]{6}$/;

    // Sender validations
    if (!validateField('senderName', val => val.length >= 2, 'Please enter sender full name')) isValid = false;
    if (!validateField('senderPhone', val => phoneRegex.test(val), 'Please enter valid 10-digit phone number')) isValid = false;
    if (!validateField('senderEmail', val => emailRegex.test(val), 'Please enter valid email address')) isValid = false;
    if (!validateField('pickupAddress', val => val.length >= 8, 'Please enter complete pickup address')) isValid = false;
    if (!validateField('pickupPin', val => pinRegex.test(val), 'Please enter 6-digit PIN code')) isValid = false;

    // Receiver validations
    if (!validateField('receiverName', val => val.length >= 2, 'Please enter receiver name')) isValid = false;
    if (!validateField('receiverPhone', val => phoneRegex.test(val), 'Please enter valid 10-digit receiver phone')) isValid = false;
    if (!validateField('deliveryAddress', val => val.length >= 8, 'Please enter complete delivery address')) isValid = false;
    if (!validateField('deliveryPin', val => pinRegex.test(val), 'Please enter 6-digit delivery PIN code')) isValid = false;

    // Parcel validations
    if (!validateField('parcelCategory', val => val !== '', 'Please select a parcel category')) isValid = false;
    if (!validateField('packageWeight', val => parseFloat(val) > 0, 'Enter valid weight in kg')) isValid = false;
    if (!validateField('packageQuantity', val => parseInt(val) >= 1, 'Quantity must be at least 1')) isValid = false;
    if (!validateField('serviceOption', val => val !== '', 'Please select a delivery service')) isValid = false;
    if (!validateField('pickupDate', val => val !== '', 'Please select preferred pickup date')) isValid = false;

    if (!isValid) {
      const firstError = form.querySelector('.form-control.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Submit simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Processing Demo Request...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      form.reset();
    }, 900);
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ==========================================================================
   11. BULK ENQUIRY FORM VALIDATION
   ========================================================================== */
function initBulkEnquiryForm() {
  const form = document.getElementById('bulkEnquiryForm');
  const alertBox = document.getElementById('bulkFormSuccessAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const company = document.getElementById('bulkCompany');
    const contact = document.getElementById('bulkContact');
    const phone = document.getElementById('bulkPhone');
    const email = document.getElementById('bulkEmail');

    if (!company.value.trim() || !contact.value.trim() || !phone.value.trim() || !email.value.trim()) {
      alert('Please fill out all required business fields.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Business Enquiry...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Business Enquiry';
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    }, 800);
  });
}
