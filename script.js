// Music control functionality
let isPlaying = true;

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicIcon = document.getElementById('musicIcon');
    
    if (isPlaying) {
        audio.pause();
        musicIcon.textContent = '🔇';
        isPlaying = false;
    } else {
        audio.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicIcon.textContent = '🎵';
        isPlaying = true;
    }
}

// Handle autoplay restrictions
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    
    // Try to play audio when page loads
    audio.play().catch(e => {
        console.log('Autoplay blocked by browser. User interaction required.');
        // Show a notification or button to start music
        showMusicPrompt();
    });
    
    // Add event listener for volume control
    audio.volume = 0.3; // Set default volume to 30%
});

function showMusicPrompt() {
    // Create a subtle prompt for user to enable music
    const prompt = document.createElement('div');
    prompt.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(139, 69, 19, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        text-align: center;
        z-index: 1000;
        font-family: Georgia, serif;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    
    prompt.innerHTML = `
        <p>Klik untuk memutar musik latar</p>
        <button onclick="enableMusic(); this.parentElement.remove();" style="
            background: #d4af37;
            color: #8b4513;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 0.5rem;
        ">Putar Musik</button>
    `;
    
    document.body.appendChild(prompt);
}

function enableMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(e => {
        console.log('Failed to play audio:', e);
    });
}

// Add floating animation to circles
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        // Add random delay to each circle's animation
        const delay = Math.random() * 2;
        circle.style.animationDelay = `-${delay}s`;
        
        // Add click event for image preview
        circle.addEventListener('click', function() {
            const img = this.querySelector('img');
            showImagePreview(img.src, img.alt);
        });
    });
});

function showImagePreview(src, alt) {
    // Create modal for image preview
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    });
}

// Add some diary interactivity
document.addEventListener('DOMContentLoaded', function() {
    const diaryBook = document.querySelector('.diary-book');
    
    // Add subtle page turn effect on hover
    diaryBook.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(0deg) scale(1.02)';
    });
    
    diaryBook.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(-1deg) scale(1)';
    });
});

// Update date to current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.querySelector('.diary-date');
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = currentDate.toLocaleDateString('id-ID', options);
    dateElement.textContent = formattedDate;
});