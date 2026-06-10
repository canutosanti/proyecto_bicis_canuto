document.addEventListener('DOMContentLoaded', function () {
  // Manejo de los paneles desplegables (Acordeón de Categorías)
  const categoryToggles = document.querySelectorAll('.category-toggle');
  
  categoryToggles.forEach((btn) => {
    btn.addEventListener('click', function () {
      const cat = this.closest('.category');
      const open = cat.classList.contains('open');
      
      // Cierra todos los paneles que puedan estar abiertos en ese momento
      document.querySelectorAll('.category.open').forEach((c) => c.classList.remove('open'));
      
      // Si el panel que se tocó no estaba abierto, lo abre
      if (!open) {
        cat.classList.add('open');
      }
    });
  });
});