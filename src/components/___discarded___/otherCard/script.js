var move = function(e) {
    if (e.which != 1) return false;
  
    document.querySelector('.card--front').toggleClass('card--front--flip');
    document.querySelector('.card--back').toggleClass('card--back--flip');
  };
  
  

  
  document.addEventListener('mousemove', move, false);