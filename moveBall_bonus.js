
var isDebug = true;

var velocityX = Math.random() * 20;
var velocityY = Math.random() * 20;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');

// YOUR CODE 
// ----------------
var reverseDirectionX = () => {
  velocityX *= -1;
}
var reverseDirectionY = () => {
  velocityY *= -1;
}
var ballWidth = parseFloat(ball.style.width);
var ballHeight = parseFloat(ball.style.height);
var move2d = () => {
  // TODO we want the ball to move within the screen
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;

  let ballBoundaryRightPos = positionX + ballWidth;
  let ballBoundaryLeftPos = positionX - ballWidth * 2;

  let ballBoundaryTopPos = positionY - ballHeight * 2;
  let ballBoundaryBottomPos = positionY + ballHeight;

  if (isDebug) {
    console.log("ballBoundaryRightPos is " + ballBoundaryRightPos);
    console.log("ballBoundaryTopPos is " + ballBoundaryTopPos);
  }
  // edge detection of the right boundary
  if (ballBoundaryRightPos > canvasWidth || ballBoundaryLeftPos <= 0) {
    velocityX = Math.floor(velocityX, 5);
    positionX = canvasWidth / 2;
    reverseDirectionX();
    if (isDebug) {
      console.log('velocity direction X is reversed');
    }
  }
  if (ballBoundaryBottomPos > canvasHeight || ballBoundaryTopPos <= 0) {
    velocityY = Math.floor(velocityY, 5);
    positionY = canvasHeight / 2;
    reverseDirectionY();
    if (isDebug) {
      console.log('velocity direction Y is reversed');
    }
  }
  velocityX = Math.round(Math.random() * 50, 2);
  velocityY = Math.round(Math.random() * 50, 2);

  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

  if (isDebug) {
    console.log("velocityX = " + velocityX);
    console.log("velocityY = " + velocityY);
  }

  ball.style.left = positionX;
  ball.style.top = positionY;


  console.log("ball posX = " + positionX);
  console.log("ball posY = " + positionY);

}


console.log(setInterval(move2d, 1000));
