// FAQ accordion
document.querySelectorAll('.faq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section-head, .tile, .step, .channel, .price-card, .act, .why__stat').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// File upload feedback
document.querySelectorAll('.field__upload input').forEach(input => {
  input.addEventListener('change', (e) => {
    const n = e.target.files.length;
    const txt = e.target.closest('.field__upload').querySelector('.field__upload-text');
    txt.innerHTML = '<strong>' + n + ' file' + (n === 1 ? '' : 's') + ' selected</strong>Ready to send';
  });
});

document.querySelectorAll('.tile video').forEach(v => {
  v.addEventListener('ended', () => { v.currentTime = 0; v.play(); });
});

// Video modal
const modal = document.createElement('div');
modal.id = 'video-modal';
modal.innerHTML = '<div class="vmodal__backdrop"></div><div class="vmodal__box"><button class="vmodal__close">&#x2715;</button><video class="vmodal__video" controls playsinline></video></div>';
document.body.appendChild(modal);

const modalVideo = modal.querySelector('.vmodal__video');

function openModal(src) {
  modalVideo.src = src;
  modal.classList.add('open');
  modalVideo.play();
}

function closeModal() {
  modal.classList.remove('open');
  modalVideo.pause();
  modalVideo.src = '';
}

modal.querySelector('.vmodal__backdrop').addEventListener('click', closeModal);
modal.querySelector('.vmodal__close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.tile__play').forEach(btn => {
  btn.addEventListener('click', () => {
    const tile = btn.closest('.tile');
    const video = tile.querySelector('video');
    if (video) openModal(video.currentSrc || video.querySelector('source').src);
  });
});

// Brief form submission
const briefForm = document.getElementById('brief-form');
if (briefForm) {
  briefForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = briefForm.querySelector('[type="submit"]');
    const msg = document.getElementById('form-msg');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    msg.style.display = 'none';

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(briefForm) });
      const data = await res.json();
      if (data.success) {
        briefForm.reset();
        msg.style.display = 'block';
        msg.style.color = 'var(--green, #2a9d60)';
        msg.textContent = 'Brief received. We\'ll be in touch within one working day.';
        btn.textContent = 'Sent';
      } else {
        throw new Error(data.message || 'Submission failed.');
      }
    } catch (err) {
      msg.style.display = 'block';
      msg.style.color = 'var(--pink)';
      msg.textContent = err.message || 'Something went wrong. Please try again.';
      btn.disabled = false;
      btn.innerHTML = 'Send my brief <span class="btn__arrow">→</span>';
    }
  });
}