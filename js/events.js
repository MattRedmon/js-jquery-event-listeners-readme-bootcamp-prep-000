//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(document).on('load', function() {
    $('image').addClass('tasty');
  })
}




$(document).ready(function(){

getIt();

frameIt();




});
