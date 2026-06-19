// ── Copy email on click ──
const emailBtn = document.getElementById('emailBtn');
const copyHint = document.getElementById('copyHint');

if (emailBtn) {
  const EMAIL = 'contactmattsun@gmail.com';
  let resetTimer;

  function triggerCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      // Tracking GA
      gtag('event', 'click', { event_category: 'contact', event_label: 'email_copy' });

      // Animation
      emailBtn.textContent = '✓ copié !';
      emailBtn.classList.add('copied');
      if (copyHint) copyHint.classList.add('hidden');

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        emailBtn.textContent = EMAIL;
        emailBtn.classList.remove('copied');
        if (copyHint) copyHint.classList.remove('hidden');
      }, 1200); // plus rapide : 1.2s au lieu de 2s
    });
  }

  emailBtn.addEventListener('click', triggerCopy);
  emailBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerCopy(); }
  });
}

// ── Touch press feedback on social buttons ──
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('touchstart', () => btn.style.transform = 'scale(0.97)', { passive: true });
  btn.addEventListener('touchend',   () => btn.style.transform = '',            { passive: true });
});
