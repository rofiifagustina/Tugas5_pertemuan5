const modal = document.getElementById('modal');
const toggleBtn = document.getElementById('ButtonModal');
const closeBtn = document.getElementById('tutupModal');

toggleBtn.addEventListener('click', () => {
    modal.classList.toggle('lihat');
});


closeBtn.addEventListener('click', () => {
    modal.classList.remove('lihat');
});

