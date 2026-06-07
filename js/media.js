// Auto-resize all caption textareas
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

document.querySelectorAll('.dash-textarea').forEach(ta => {
  autoResize(ta);
  ta.addEventListener('input', () => autoResize(ta));
});

// Per-row Post Now buttons — visual feedback only (demo)
document.querySelectorAll('.campaign-post-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Posted!';
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 2500);
  });
});

// Publish All
const publishBtn = document.getElementById('btn-publish-all');
if (publishBtn) {
  publishBtn.addEventListener('click', () => {
    const orig = publishBtn.innerHTML;
    publishBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> All Published!';
    publishBtn.disabled = true;
    setTimeout(() => { publishBtn.innerHTML = orig; publishBtn.disabled = false; }, 2500);
  });
}
