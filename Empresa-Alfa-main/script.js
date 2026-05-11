// ================================
// NAVEGAÇÃO INTERATIVA (HOME, SOBRE, CONTATO)
// ================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function showPage(id) {
    sections.forEach(sec => sec.style.display = 'none');
    const selected = document.getElementById(id);
    if (selected) {
        selected.style.display = 'block';
    }

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
    });
}

// ================================
// INICIALIZAÇÃO (quando abre o site)
// ================================
function handleHashChange() {
    const id = window.location.hash.replace('#', '') || 'home';
    showPage(id);
}

window.addEventListener('DOMContentLoaded', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

// ================================
// FORMULÁRIO
// ================================
const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
}