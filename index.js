const input = document.getElementById('input');

function addingEventListener() {
  input.addEventListener('click', function(clickAlert) {
    alert('I was clicked!');
  })
}

addingEventListener(input);

// could also write this as:

// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);
// -- saves function clickAlert instead of using anonymous funciton so that we can reuse clickAlert for several items in HTML
