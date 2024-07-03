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

   
