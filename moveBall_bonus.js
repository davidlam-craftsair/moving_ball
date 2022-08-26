
var isDebug = true;

var velocityX = Math.random() * 100;
var velocityY = Math.random() * 100;
var ball = document.getElementById('ball');
var generateRandomPos = function(minVal, maxVal) {
  var length = maxVal - minVal;
  return minVal + Math.Round(Math.random * length);
}
var positionX = parseInt(ball.style.left) + parseInt(ball.style.width) / 2;
var positionY = parseInt(ball.style.top) + parseInt(ball.style.height) / 2;

var ballBoundaryRightPos = positionX + ballWidth;
var ballBoundaryLeftPos = positionX - ballWidth * 2;

var ballBoundaryTopPos = positionY - ballHeight * 2;
var ballBoundaryBottomPos = positionY + ballHeight;

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
function onBallTouchEdgeBallBounceBack() {
  var rebounceVelocityX = -velocityX;
  var rebounceVelocityY = -velocityY;
  velocityX = rebounceVelocityX;
  velocityY = rebounceVelocityY;
  if (isDebug) {
    console.log('The ball should be bounced back');
  }
}
function checkIfBallTouchEdge() {
  let canvasWidth = parseInt(window.innerWidth);
  let canvasHeight = parseInt(window.innerHeight);
  return ((ballBoundaryRightPos >= canvasWidth || ballBoundaryLeftPos <= 0)
    || (ballBoundaryLeftPos <= canvasWidth || ballBoundaryRightPos >= 0)) || (ballBoundaryTopPos <= 0 || ballBoundaryBottomPos >= canvasHeight));
}
function reportBallStatus() {

  console.log("Ball status as follows:");
  console.log("\tPosX = " + positionX);
  console.log("\tPosY = " + positionY);
  console.log("\tBoundaryRightPos is " + ballBoundaryRightPos);
  console.log("\tBoundaryLeftPos is " + ballBoundaryLeftPos);
  console.log("\tBoundaryTopPos is " + ballBoundaryTopPos);
  console.log("\tBoundaryBottomPos is " + ballBoundaryBottomPos);

  console.log("\tvelocityX = " + velocityX);
  console.log("\tvelocityY = " + velocityY);
}
var move2d = () => {
  // TODO we want the ball to move within the screen

  // edge detection 
  if (checkIfBallTouchEdge()) {
    onBallTouchEdgeBallBounceBack(velocityX, velocityY);
  }

  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

  // Set ball to position
  ball.style.left = positionX;
  ball.style.top = positionY;

  reportBallStatus();

}


console.log(setInterval(move2d, 1000));
