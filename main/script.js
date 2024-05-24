document.getElementById('flipButton').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    coin.textContent = '?'; // Reset to question mark
    coin.style.animation = 'none'; // Reset animation
    void coin.offsetWidth; // Trigger reflow
    coin.style.animation = 'flip 2s forwards'; // Increase animation duration

    setTimeout(function() {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        coin.textContent = result;
    }, 2000); // Match the duration of the animation
});