document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (!form) {
    return;
  }

  // Toggle category panels in contact section
  const categoryToggles = document.querySelectorAll('.category-toggle');
  categoryToggles.forEach((btn) => {
    btn.addEventListener('click', function () {
      const cat = this.closest('.category');
      const open = cat.classList.contains('open');
      // close others
      document.querySelectorAll('.category.open').forEach((c) => c.classList.remove('open'));
      if (!open) cat.classList.add('open');
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const message = document.getElementById('mensaje').value.trim();

    if (!message) {
      formMessage.textContent = 'Por favor escribe tu consulta antes de enviar.';
      formMessage.style.color = '#c0392b';
      return;
    }

    formMessage.textContent = 'Gracias, tu mensaje fue enviado. Te contactaremos pronto.';
    formMessage.style.color = '#1f4f5f';
    form.reset();
  });
});
