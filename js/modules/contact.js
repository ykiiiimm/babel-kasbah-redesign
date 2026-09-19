// ==========================================
// MODULE: contact.js — Form Validation & WhatsApp Submission
// ==========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || 'Non précisé';
    const phone = document.getElementById('contactPhone')?.value.trim() || 'Non précisé';
    const subject = document.getElementById('contactSubject')?.value.trim() || 'Demande';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    const t = translations[currentLang]?.whatsappTemplate || translations.fr.whatsappTemplate;

    const text = `${t.header}\n\n` +
      `*${t.name}:* ${name}\n` +
      `*${t.phone}:* ${phone}\n` +
      `*${t.subject}:* ${subject}\n` +
      `*${t.message}:* ${message}`;

    const targetPhone = '212775210035'; // 0775210035
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;

    const submitBtn = document.getElementById('contactSubmit');
    if (submitBtn) {
      const originalHtml = submitBtn.innerHTML;
      const sendingText = translations[currentLang]?.contact?.formSending || 'Ouverture WhatsApp...';
      submitBtn.innerHTML = `${sendingText} <span>✓</span>`;
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
      }, 2500);
    }

    window.open(whatsappUrl, '_blank');
  });
}