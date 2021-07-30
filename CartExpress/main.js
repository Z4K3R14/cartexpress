var load = document.getElementById("loading");
function functionLoad(){
 load.style.display = "none";

 
}
var plus = document.querySelectorAll('.btn-plus');
var counter = document.querySelector('.counter');
// var minus = document.querySelectorAll('.btn-minus');
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter.innerText++;
    total();
  });

  // minus[i].addEventListener('click', function () {
  //   if (counter[i].innerText > 0) counter[i].innerText--;
  //    total();
  // });
  
}
total()


 
function total() {
 // var totalPrice = document.querySelector('#totalPrice');
  var quantity = document.querySelectorAll('.counter');
  var price = document.querySelectorAll('.price');
  var sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    sum += counter[i].innerText * price[i].innerText;
  }
  totalPrice.innerText = sum;
}

total()
/*this js code did not work because the col-4 elements need 4 counter elements and not one*/
/*sorry :(*/
  /*added a plugin to this code i hope that is not cheating*/










