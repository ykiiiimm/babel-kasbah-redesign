// ==========================================
// MODULE: internship.js — Application Form Logic
// File uploads, validation, cover letter toggle & confirmation modal
// ==========================================

function initInternshipForm() {
  const form = document.getElementById('internshipForm');
  if (!form) return;

  const filesState = { cv: null, coverLetter: null, certificate: null };

  function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  function setupUploadZone(zoneId, inputId, chipId, stateKey) {
    const zone   = document.getElementById(zoneId);
    const input  = document.getElementById(inputId);
    const chip   = document.getElementById(chipId);
    const errEl  = document.getElementById(zoneId + 'Error');

    if (!zone || !input || !chip) return;

    function handleFile(file) {
      if (!file) return;
      const lang = window.currentLang || 'fr';
      const t = (translations[lang] || translations.fr).internship;

      const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
      if (!isPdf) {
        if (errEl) { errEl.textContent = t.fileFormatInvalid; errEl.classList.add('show'); }
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        if (errEl) { errEl.textContent = t.fileSizeExceeded; errEl.classList.add('show'); }
        return;
      }

      if (errEl) { errEl.textContent = ''; errEl.classList.remove('show'); }
      filesState[stateKey] = file;

      const nameEl = chip.querySelector('.chip-name');
      const sizeEl = chip.querySelector('.chip-size');
      if (nameEl) nameEl.textContent = file.name;
      if (sizeEl) sizeEl.textContent = formatBytes(file.size);

      zone.style.display = 'none';
      chip.classList.add('active');
    }

    input.addEventListener('change', () => {
      if (input.files && input.files[0]) handleFile(input.files[0]);
    });

    ['dragenter', 'dragover'].forEach(ev => zone.addEventListener(ev, e => {
      e.preventDefault(); e.stopPropagation(); zone.classList.add('dragover');
    }));
    ['dragleave', 'drop'].forEach(ev => zone.addEventListener(ev, e => {
      e.preventDefault(); e.stopPropagation(); zone.classList.remove('dragover');
    }));
    zone.addEventListener('drop', e => {
      if (e.dataTransfer && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    });

    const removeBtn = chip.querySelector('.chip-remove');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        filesState[stateKey] = null;
        input.value = '';
        chip.classList.remove('active');
        zone.style.display = 'block';
      });
    }
  }

  setupUploadZone('cvUploadZone',   'cvInput',    'cvPreview',   'cv');
  setupUploadZone('coverUploadZone','coverInput', 'coverPreview','coverLetter');
  setupUploadZone('certUploadZone', 'certInput',  'certPreview', 'certificate');

  // Cover Letter toggle
  const tabUpload       = document.getElementById('coverTabUpload');
  const tabText         = document.getElementById('coverTabText');
  const coverUpWrapper  = document.getElementById('coverUploadWrapper');
  const coverTxtWrapper = document.getElementById('coverTextWrapper');

  if (tabUpload && tabText && coverUpWrapper && coverTxtWrapper) {
    tabUpload.addEventListener('click', () => {
      tabUpload.classList.add('active'); tabText.classList.remove('active');
      coverUpWrapper.style.display = 'block'; coverTxtWrapper.style.display = 'none';
    });
    tabText.addEventListener('click', () => {
      tabText.classList.add('active'); tabUpload.classList.remove('active');
      coverTxtWrapper.style.display = 'block'; coverUpWrapper.style.display = 'none';
    });
  }

  // Set min date to today
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) startDateInput.setAttribute('min', new Date().toISOString().split('T')[0]);

  // Step dot progress (visual feedback as user fills form)
  const sectionFields = [
    ['fullName', 'city', 'email', 'phone'],
    ['school', 'degree', 'yearOfStudy'],
    ['internshipType', 'startDate', 'duration', 'department'],
    [],  // uploads — no simple value check
    ['privacyConsent'],
  ];

  function updateDots() {
    sectionFields.forEach((fields, i) => {
      const dot = document.getElementById('dot' + (i + 1));
      if (!dot) return;
      const done = fields.every(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        if (el.type === 'checkbox') return el.checked;
        return el.value && el.value !== '';
      });
      if (i === 3) { // uploads step
        dot.className = 'step-dot' + (filesState.cv ? ' done' : '');
        return;
      }
      dot.className = 'step-dot' + (done ? ' done' : '');
    });
  }

  form.addEventListener('input', updateDots);
  form.addEventListener('change', updateDots);

  // Form validation & submission
  form.addEventListener('submit', e => {
    e.preventDefault();

    const lang = window.currentLang || 'fr';
    const t = (translations[lang] || translations.fr).internship;
    let hasError = false;

    function check(id, errId, cond) {
      const el  = document.getElementById(id);
      const err = document.getElementById(errId);
      if (cond(el)) {
        el.classList.add('err'); if (err) err.classList.add('show'); hasError = true;
      } else {
        el.classList.remove('err'); if (err) err.classList.remove('show');
      }
    }

    check('fullName',       'errName',     el => !el.value.trim());
    check('city',           'errCity',     el => !el.value.trim());
    check('email',          'errEmail',    el => !el.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
    check('phone',          'errPhone',    el => !el.value.trim() || el.value.trim().length < 7);
    check('school',         'errSchool',   el => !el.value.trim());
    check('degree',         'errDegree',   el => el.selectedIndex <= 0);
    check('yearOfStudy',    'errYear',     el => el.selectedIndex <= 0);
    check('internshipType', 'errType',     el => el.selectedIndex <= 0);
    check('startDate',      'errDate',     el => !el.value);
    check('duration',       'errDuration', el => el.selectedIndex <= 0);
    check('department',     'errDept',     el => el.selectedIndex <= 0);

    // CV required
    const cvZone = document.getElementById('cvUploadZone');
    const cvErr  = document.getElementById('cvUploadZoneError');
    if (!filesState.cv) {
      if (cvErr) { cvErr.textContent = t.fileFormatInvalid; cvErr.classList.add('show'); }
      if (cvZone) cvZone.style.borderColor = 'var(--red)';
      hasError = true;
    } else {
      if (cvErr) cvErr.classList.remove('show');
      if (cvZone) cvZone.style.borderColor = '';
    }

    // Privacy
    const privacyEl  = document.getElementById('privacyConsent');
    const privacyErr = document.getElementById('privacyError');
    if (!privacyEl.checked) {
      if (privacyErr) privacyErr.classList.add('show'); hasError = true;
    } else {
      if (privacyErr) privacyErr.classList.remove('show');
    }

    if (hasError) {
      const firstErr = form.querySelector('.err, .ferror.show');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Submit Form via Google Apps Script Web App (Direct to Gmail & Google Drive)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygz0FsBz-oxaxm0CWbNSuCLrm4CYR4J0bc_JRRVflxatfkYKirDcQFYis1YJeSyP0hrg/exec';
    const btn        = document.getElementById('submitInternshipBtn');
    const btnText    = document.getElementById('submitBtnText');
    const origText   = btnText.textContent;
    const generalErr = document.getElementById('submitGeneralError');

    if (generalErr) {
      generalErr.textContent = '';
      generalErr.classList.remove('show');
    }

    btn.disabled = true;
    btnText.textContent = t.submitting || 'Envoi en cours...';

    const ref = 'BK-STG-2026-' + Math.floor(1000 + Math.random() * 9000);
    const fullNameVal = document.getElementById('fullName').value.trim();
    const cityVal     = document.getElementById('city').value.trim();
    const emailVal    = document.getElementById('email').value.trim();
    const phoneVal    = document.getElementById('phone').value.trim();
    const schoolVal   = document.getElementById('school').value.trim();
    
    const degEl       = document.getElementById('degree');
    const degVal      = degEl.options[degEl.selectedIndex].text;
    const yrEl        = document.getElementById('yearOfStudy');
    const yrVal       = yrEl.options[yrEl.selectedIndex].text;
    const typeEl      = document.getElementById('internshipType');
    const typeVal     = typeEl.options[typeEl.selectedIndex].text;
    const startDateVal= document.getElementById('startDate').value;
    const durEl       = document.getElementById('duration');
    const durVal      = durEl.options[durEl.selectedIndex].text;
    const deptEl      = document.getElementById('department');
    const deptVal     = deptEl.options[deptEl.selectedIndex].text;

    // Helper: convert File to base64
    function fileToBase64(file) {
      return new Promise((resolve) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = () => {
          const parts = reader.result.split(',');
          resolve({
            filename: file.name,
            mimeType: file.type || 'application/pdf',
            base64: parts[1] || ''
          });
        };
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
      });
    }

    Promise.all([
      fileToBase64(filesState.cv),
      fileToBase64(filesState.coverLetter),
      fileToBase64(filesState.certificate)
    ]).then(([cvObj, coverObj, certObj]) => {
      const coverTextWrapper = document.getElementById('coverTextWrapper');
      const coverLetterText  = document.getElementById('coverLetterText');
      const writtenMotivation = (coverTextWrapper && coverTextWrapper.style.display !== 'none' && coverLetterText)
        ? coverLetterText.value.trim()
        : '';

      const payload = {
        ref: ref,
        fullName: fullNameVal,
        city: cityVal,
        email: emailVal,
        phone: phoneVal,
        school: schoolVal,
        degree: degVal,
        yearOfStudy: yrVal,
        internshipType: typeVal,
        startDate: startDateVal,
        duration: durVal,
        department: deptVal,
        coverLetterText: writtenMotivation,
        cv: cvObj,
        coverLetterFile: coverObj,
        certificate: certObj
      };

      return fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
    })
    .then(async response => {
      // Success — show confirmation modal with candidate reference
      document.getElementById('modalRefNumber').textContent       = ref;
      document.getElementById('modalSummaryName').textContent     = fullNameVal;
      document.getElementById('modalSummaryEmail').textContent    = emailVal;
      document.getElementById('modalSummaryDept').textContent     = deptVal;
      document.getElementById('modalSummaryDuration').textContent = durVal;
      document.getElementById('modalSummaryCv').textContent       = filesState.cv ? filesState.cv.name : 'CV.pdf';

      const modal = document.getElementById('internshipModal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      updateDots();
    })
    .catch(err => {
      console.error('Google Script submission error:', err);
      if (generalErr) {
        generalErr.textContent = t.submitError || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
        generalErr.classList.add('show');
        generalErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert(t.submitError || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    })
    .finally(() => {
      btn.disabled = false;
      btnText.textContent = origText;
    });
  });

  // Modal close/reset
  const closeBtn = document.getElementById('modalCloseReset');
  const modal    = document.getElementById('internshipModal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      form.reset();
      const generalErr = document.getElementById('submitGeneralError');
      if (generalErr) { generalErr.textContent = ''; generalErr.classList.remove('show'); }
      filesState.cv = filesState.coverLetter = filesState.certificate = null;
      ['cvPreview','coverPreview','certPreview'].forEach(id => {
        const chip = document.getElementById(id);
        if (chip) chip.classList.remove('active');
      });
      ['cvUploadZone','coverUploadZone','certUploadZone'].forEach(id => {
        const z = document.getElementById(id);
        if (z) z.style.display = 'block';
      });
      updateDots();
      const scroll = document.querySelector('.intern-form-scroll');
      if (scroll) scroll.scrollTop = 0;
    });
  }
}

document.addEventListener('DOMContentLoaded', initInternshipForm);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initInternshipForm();
}
