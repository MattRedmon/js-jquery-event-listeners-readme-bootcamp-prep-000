//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(document).on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function() {
    
  })
}



$(document).ready(function(){

getIt();

frameIt();

pressIt();



});
