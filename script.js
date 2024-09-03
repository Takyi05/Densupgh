function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('visible')
}

function closeSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.classList.remove('visible')
}
function showPaymentMethod(){
    const paymentMethod=document.querySelector('.paymentType')
    paymentMethod.classList.add('visible')
}
function closePaymentMethod(){
    const paymentMethod=document.querySelector('.paymentType')
    paymentMethod.classList.remove('visible')
}

 let backToTopButton = document.getElementById("backToTop");

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopButton.style.display = "block";
     } else {
         backToTopButton.style.display = "none";
     }
 }

 backToTopButton.addEventListener('click', function() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 });



// JavaScript to control sliding animation for multiple sliders
function moveSlide(step, sliderId) {
    const slider = document.getElementById(sliderId); // Get slider by ID
    const slides = slider.querySelector('.slides'); // Get the slides container
    const totalSlides = slides.children.length; // Total number of slides
    let currentIndex = slider.dataset.currentIndex ? parseInt(slider.dataset.currentIndex) : 0; // Current index

    // Calculate new slide index
    currentIndex += step;

    // Loop back to the beginning or end if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Save the current index
    slider.dataset.currentIndex = currentIndex;

    // Apply the transformation to the slides container
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Initialize both sliders
document.getElementById('slider1').dataset.currentIndex = 0; // Initialize first slider
document.getElementById('slider2').dataset.currentIndex = 0; // Initialize second slider

// Set default positions
moveSlide(0, 'slider1'); // Show the first slide for slider 1
moveSlide(0, 'slider2'); // Show the first slide for slider 2

 


   
