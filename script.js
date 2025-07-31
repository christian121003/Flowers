onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
    function createPetal() {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      
      // Random size between 10-25px
      const size = Math.random() * 15 + 10;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      
      // Random position
      petal.style.left = Math.random() * 100 + 'vw';
      
      // Random animation duration (5-10s)
      petal.style.animationDuration = Math.random() * 5 + 5 + 's';
      
      // Random delay
      petal.style.animationDelay = Math.random() * 5 + 's';
      
      // Random opacity
      petal.style.opacity = Math.random() * 0.7 + 0.3;
      
      document.body.appendChild(petal);
      
      // Remove petal after animation completes
      setTimeout(() => {
        petal.remove();
      }, 10000);
    }
    
    // Create initial petals
    for(let i = 0; i < 30; i++) {
      setTimeout(createPetal, i * 300);
    }
    
    // Continue creating petals periodically
    setInterval(createPetal, 500);
  });