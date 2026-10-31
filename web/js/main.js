/**
 * Trang Anh AI — Main JavaScript Bundle (Vanilla, Ultra-lightweight < 2KB)
 * Optimized for Core Web Vitals (FID / INP < 50ms)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('header.site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-mobile');

  if (menuToggle && menuMobile) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      if (isExpanded) {
        menuMobile.classList.add('open');
      } else {
        menuMobile.classList.remove('open');
      }
    };

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking nav links inside mobile menu
    const navLinks = menuMobile.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (menuMobile.classList.contains('open') && !header.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // 3. Form handling for Audit consultation (#audit)
  const auditForm = document.getElementById('audit-form');
  const successAlert = document.getElementById('audit-success');

  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('f-name');
      const phoneInput = document.getElementById('f-phone');
      const bizInput = document.getElementById('f-biz');
      const deptInput = document.getElementById('f-dept');
      const submitBtn = auditForm.querySelector('.form-submit-btn');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const biz = bizInput ? bizInput.value.trim() : '';
      const dept = deptInput ? deptInput.value : '';

      // Phone validation (simple Vietnam phone format)
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
        alert('Vui lòng nhập đúng số điện thoại di động (10 chữ số) để chuyên gia Trang Anh AI liên hệ gửi báo cáo.');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Button state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Đang gửi thông tin...</span>';
      }

      // Store in localStorage for audit persistence
      const leadData = {
        name,
        phone,
        biz,
        dept,
        createdAt: new Date().toISOString()
      };

      try {
        const storedLeads = JSON.parse(localStorage.getItem('tranganh_leads') || '[]');
        storedLeads.push(leadData);
        localStorage.setItem('tranganh_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Simulate instantaneous processing & display success
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>✓ Đã đăng ký thành công</span>';
        }
        if (successAlert) {
          successAlert.classList.add('show');
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        auditForm.reset();
      }, 500);
    });
  }
});
