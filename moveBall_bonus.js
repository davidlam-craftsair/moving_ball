var isDebug = true;

var velocityX = Math.random() * 100 * getRandomSign();
var velocityY = Math.random() * 100 * getRandomSign();

function getRandomSign() {
  if (Math.random() > 0.5) {
    return 1;
  }
  else {
    return -1;
  }
}
var ball = document.getElementById('ball');

var ballBoundaryRightPos;
var ballBoundaryLeftPos;
var ballBoundaryTopPos;
var ballBoundaryBottomPos;

var generateRandomPos = function(minVal, maxVal) {
  var length = maxVal - minVal;
  return minVal + Math.Round(Math.random * length);
}

function getInitialPositionX() {
  canvasWidth = parseInt(window.innerWidth);
  return canvasWidth / 2;
}

function getInitialPositionY() {
  canvasHeight = parseInt(window.innerHeight);
  return canvasHeight / 2;
}

var positionX = getInitialPositionY();
var positionY = getInitialPositionY();

var ballWidth = parseFloat(ball.style.width);
var ballHeight = parseFloat(ball.style.height);

reportBallStatus();

// YOUR CODE 
// ----------------

function reverseVelocityX() {
  velocityX *= -1;
}
function reverseVelocityY() {
  velocityY *= -1;
}
function getCanvasRightEdgeX() {
  return parseInt(window.innerWidth);
}
function getCanvasTopEdgeY() {
  return 0;
}
function getCanvasBottomEdgeY() {
  return parseInt(window.innerHeight);
}
function getCanvasLeftEdgeX() {
  return 0;
}
function getBallBoundaryRightPos() {
  return positionX + getBallWidth();
}
function getBallWidth() {
  return parseInt(ball.style.width);
}
function getBallHeight() {
  return parseInt(ball.style.height);
}
function getBallBoundaryLeftPos() {
  return positionX - getBallWidth();
}
function getBallBoundaryRightPos() {
  return positionX + getBallWidth();
}
function getBallBoundaryTopPos() {
  return positionY - getBallHeight();
}
function getBallBoundaryBottomPos() {
  return positionY + getBallHeight();
}
function respondToBallTouchVerticalEdge() {
  if (getBallBoundaryLeftPos() <= getCanvasLeftEdgeX() || getBallBoundaryRightPos() >= getCanvasRightEdgeX()) {
    reverseVelocityX();
  }
}
function respondToBallTouchHorizontalEdge() {
  if (getBallBoundaryTopPos() <= getCanvasTopEdgeY() || getBallBoundaryBottomPos() >= getCanvasBottomEdgeY()) {
    reverseVelocityY();
  }
}

function reportBallStatus() {

  console.log("Ball status as follows:");
  console.log("\tPosX = " + positionX.toFixed(2));
  console.log("\tPosY = " + positionY.toFixed(2));
  console.log("\tBoundaryRightPos is " + getBallBoundaryRightPos().toFixed(2));
  console.log("\tBoundaryLeftPos is " + getBallBoundaryLeftPos().toFixed(2));
  console.log("\tBoundaryTopPos is " + getBallBoundaryTopPos().toFixed(2));
  console.log("\tBoundaryBottomPos is " + getBallBoundaryBottomPos().toFixed(2));

  console.log(`\tvelocityX = ${velocityX.toFixed(2)}`);
  console.log("\tvelocityY = " + velocityY.toFixed(2));
}
var move2d = () => {
  // TODO we want the ball to move within the screen

  positionX = positionX + velocityX;
  positionY = positionY + velocityY;

  // Set ball to position
  ball.style.left = positionX;
  ball.style.top = positionY;

  // edge detection 
  respondToBallTouchVerticalEdge();
  respondToBallTouchHorizontalEdge();

  reportBallStatus();
}

function resetPos() {
  ball.style.left = 0 + 'px';
  ball.style.right = 0 + 'px';
}

function resetVelocity() {
  velocityX = 0;
  velocityY = 0;
}

ball.style.left = positionX;
ball.style.top = positionY;
ball.style.visibility = 'visible';
console.log(setInterval(move2d, 100));
