// joke button

const button = document.querySelector('button');

// joke button click

button.addEventListener('click', async () => {
    
    // adding sound effect on click
    
    const audio = new Audio('audio/click.mp3');
    
    audio.play();
    
    // getting joke para
    
    const joke = document.querySelector('p');
    
    // fetching api
    
    const getAPI = async () => {
        
        try {
            
            // show rotating dots before fetching
            
            joke.innerHTML = `

                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                <span class="dot dot3"></span>

            `;
            
            joke.classList.add('show');
            
            // getting joke by API
            
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            
            // converting joke into json
            
            const data = await response.json();
            
            console.log(data);

            // show joke in the paragraph
            
            const fullJoke = `${data.setup} ${data.punchline}`;
            joke.textContent = fullJoke;
            joke.classList.add('joke-animate');

            // save joke in localStorage
            localStorage.setItem('lastJoke', fullJoke);
            
        } catch (error) {
            
            // converting error into message
            
            joke.innerHTML = 'Something wrent wrong <i class="ri-error-warning-line"></i>';

            console.log(error.message);
            
        }
    };
    
    getAPI();
    
});

// Load last joke from localStorage on page load

window.addEventListener('DOMContentLoaded', () => {
    
    const joke = document.querySelector('p');
    
    const lastJoke = localStorage.getItem('lastJoke');
    
    if (lastJoke) {
        
        joke.textContent = lastJoke;
        joke.classList.add('show', 'joke-animate');
        
    }
    
});
