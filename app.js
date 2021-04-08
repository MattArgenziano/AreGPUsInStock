const quipBtn = document.getElementById('quip-btn');
const quip = document.getElementById('quip');
let loader = document.querySelector('.loader');
const quips = ['No!', 'No, and they never will be.', 'Yes! Just kidding.', 'No, ask again later.', 'NO.', 'Nope!', 'Close, but no.', 'Check again in 6 months.', 'Check again in a year!'];


quipBtn.addEventListener('click', function(){
    loader.style.visibility = 'visible';
    quip.style.visibility = 'hidden';
    setTimeout(() => {
        loader.style.visibility = 'hidden';
        quip.style.visibility = 'visible';
        quip.textContent = quips[Math.floor(Math.random() * quips.length)];
    }, 2000);
});