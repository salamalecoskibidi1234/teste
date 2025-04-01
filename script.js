document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    const letter = document.getElementById('letter');
    
    heart.addEventListener('click', function() {
        // Hide the heart
        heart.classList.add('hidden');
        
        // Show the letter
        setTimeout(() => {
            letter.classList.add('visible');
            
            // Open the letter after a short delay
            setTimeout(() => {
                letter.classList.add('open');
            }, 500);
        }, 300);
    });
});
