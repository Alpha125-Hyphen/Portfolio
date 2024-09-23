const downloadBtn = document.getElementById('downloadBtn');
const progressBar = document.getElementById('progressBar');
const status = document.querySelector('.status');
const downloadingText = document.querySelector('.downloading-text');
const checkmark = document.querySelector('.checkmark');

downloadBtn.addEventListener('click', () => {
    downloadBtn.classList.add('active');
    progressBar.style.width = '100%';
    downloadingText.classList.add('active');

    setTimeout(() => {
        downloadBtn.classList.remove('active');
        progressBar.style.width = '0%';
        downloadingText.classList.remove('active');
        checkmark.classList.add('active');
    }, 3000);
});