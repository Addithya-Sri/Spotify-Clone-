document.addEventListener('DOMContentLoaded', function() {
    // Toggle play/pause button
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });

    // Like button toggle
    const likeBtn = document.querySelector('.song-like i');
    likeBtn.addEventListener('click', function() {
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas');
            this.style.color = '#1DB954';
        } else {
            this.classList.remove('fas');
            this.classList.add('far');
            this.style.color = '#b3b3b3';
        }
    });

    // Update progress bar as time passes (simulated)
    const progress = document.querySelector('.progress');
    let progressWidth = 0;
    const progressInterval = setInterval(() => {
        if (progressWidth >= 100) {
            clearInterval(progressInterval);
        } else {
            progressWidth += 0.5;
            progress.style.width = `${progressWidth}%`;
            
            // Update current time (simulated)
            const currentTime = document.querySelector('.time:first-child');
            const seconds = Math.floor((progressWidth / 100) * 167); // Song length 2:47 = 167 seconds
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            currentTime.textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
        }
    }, 1000);

    // Click on progress bar to seek
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.addEventListener('click', function(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const percentage = (clickX / width) * 100;
        progress.style.width = `${percentage}%`;
        progressWidth = percentage;
        
        // Update current time based on click position
        const seconds = Math.floor((percentage / 100) * 167);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.querySelector('.time:first-child').textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.card-img');
            img.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.card-img');
            img.style.transform = 'scale(1)';
        });
    });

    // Grid item hover effects
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.opacity = '0.9';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
});