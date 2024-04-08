document.addEventListener('DOMContentLoaded', function() {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(function(cardElement) {
        cardElement.addEventListener('click', function() {
            var arr = ["c1", "c2", "c3", "c4"];
           
            var the_other_card = arr.filter(id => id != cardElement.id);
           
            for (var i = 0; i <= 2; i++) {
                document.getElementById(the_other_card[i]).classList.remove('card--active');
            }    
            cardElement.classList.toggle('card--active');
        });
    });
});


window.onload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener('load', function() {
  const logo = document.getElementById('logo-main');
  logo.style.opacity = 1;  
});

