buttonArray = [];
buttonArray.push(document.getElementById('button1'));
buttonArray.push(document.getElementById('button2'));
buttonArray.push(document.getElementById('button3'));
buttonArray.push(document.getElementById('button4'));
buttonArray.push(document.getElementById('button5'));
buttonArray.push(document.getElementById('button6'));
buttonArray.push(document.getElementById('button7'));
buttonArray.push(document.getElementById('button8'));
buttonArray.push(document.getElementById('button9'));
buttonArray.push(document.getElementById('button10'));
var nextButton = document.getElementById('nextButton');
var buttonExistArray = [1, 1, 1, 1, 1,  1, 1, 1, 1, 1];
var buttonClickedArray = [0, 0, 0, 0, 0,  0, 0, 0, 0, 0];

for (var i=0; i<10; i++) {
  button = buttonArray[i];
  button.addEventListener('click', function () {
    var index = findIndex(this);
    if (buttonExistArray[index] === 1) {
      if (buttonClickedArray[index] === 1) { // Unclick
        buttonClickedArray[index] = 0;
        buttonArray[index].style.backgroundColor = '#fcdf03';
      }
      else { // Click
        buttonClickedArray[index] = 1;
        buttonArray[index].style.backgroundColor = '#ffecad';
      }
    }
    console.log(buttonClickedArray);
    console.log(this.style.backgroundColor);
  });
}

nextButton.addEventListener('click', function () {
  var retVal = checkValidity(buttonClickedArray);
  if (retVal === 1) { // Valid input
    for (var i=0; i<10; i++) {
      var clicked = buttonClickedArray[i];
      if (clicked === 1) {
        buttonExistArray[i] = 1;
        buttonArray[i].style.backgroundColor = '#f2f2f2';
      }
      buttonClickedArray[i] = 0; // Clear data
    }
  }
  else { // Invalid Input
    alert("Invalid move.");
  }
});


function checkValidity(array) {
  // Don't need existArray (If we init them to non-click)
  if (array[0] === 1) {
    if ( (array[4] === 1) || (array[7] === 1) || (array[8] === 1) ) {
      return 0;
    }
    if ( ((array[1] === 1) || (array[3] === 1) || (array[6] === 1)) && ((array[2] === 1) || (array[5] === 1) || (array[9] === 1)) ) {
      return 0;
    }
    if ( (array[1] === 0) && ((array[3] === 1) || (array[6] === 1)) ) {
      return 0;
    }
    if ( (array[3] === 0) && (array[6] === 1) ) {
      return 0;
    }
    if ( (array[2] === 0) && ((array[5] === 1) || (array[9] === 1)) ) {
      return 0;
    }
    if ( (array[5] === 0) && (array[9] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[1] === 1) {
    // 0 is off
    if ( array[7] === 1 ) {
      return 0;
    }
    if ( (array[2] === 1) && ((array[3] === 1) || (array[6] === 1)) ) {
      return 0;
    }
    if ( (array[2] === 1) && ((array[4] === 1) || (array[8] === 1)) ) {
      return 0;
    }
    if ( ((array[3] === 1) || (array[6] === 1)) && ((array[4] === 1) || (array[8] === 1)) ) {
      return 0;
    }
    if ( (array[3] === 0) && (array[6] === 1) ) {
      return 0;
    }
    if ( (array[4] === 0) && (array[8] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[2] === 1) {
    if ( (array[3] === 1) || (array[6] === 1) || (array[8] === 1) ) {
      return 0;
    }
    if ( ((array[4] === 1) || (array[7] === 1)) && ((array[5] === 1) || (array[9] === 1)) ) {
      return 0;
    }
    if ( (array[4] === 0) && (array[7] === 1) ) {
      return 0;
    }
    if ( (array[5] === 0) && (array[9] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[3] === 1) {
    if ( (array[8] === 1) || (array[9] === 1) ) {
      return 0;
    }
    if ( (array[6] === 1) && (array[7] === 1) ) {
      return 0;
    }
    if ( (array[6] === 1) && ((array[4] === 1) || (array[5] === 1)) ) {
      return 0;
    }
    if ( (array[7] === 1) && ((array[4] === 1) || (array[5] === 1)) ) {
      return 0;
    }
    if ( (array[4] === 0) && (array[5] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[4] === 1) {
    if ( (array[6] === 1) || (array[9] === 1) ) {
      return 0;
    }
    if ( (array[5] === 1) && (array[7] === 1) ) {
      return 0;
    }
    if ( (array[5] === 1) && (array[8] === 1) ) {
      return 0;
    }
    if ( (array[7] === 1) && (array[8] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[5] === 1) {
    if ( (array[6] === 1) || (array[7] === 1) ) {
      return 0;
    }
    if ( (array[8] === 1) && (array[9] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[6] === 1) {
    if ( (array[7] === 0) && ((array[8] === 1) || (array[9] === 1)) ) {
      return 0;
    }
    if ( (array[8] === 0) && (array[9] === 1) ) {
      return 0;
    }
    return 1;
  }

  else if (array[7] === 1) {
    if ( (array[8] === 0) && (array[9] === 1) ) {
      return 0;
    }
    return 1;
  }

  else {
    return 1;
  }
}

function findIndex(button) {
  for (var i=0; i<10; i++) {
    if (button === buttonArray[i]) {
      return i;
    }
  }
}
