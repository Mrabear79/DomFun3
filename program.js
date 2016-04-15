var input = document.querySelector('input');
var ol = document.querySelector('ol');

input.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    var element = document.createElement('li');
    element.innerHTML = input.value
    ol.appendChild(element)
    input.value = ''
  }
});
