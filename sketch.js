let m_Timer = 25 * 60;
let m_Timer2 = 1 * 60;
let backgroundImage;
let startButton;
let stopButton;
let timer = false;
let timer2 = true;
let coinCount = 0;
let gotchiPointsImage;

function preload() {
  gotchiPointsImage = loadImage("GotchiPoints.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = loadImage("TamagotchiBackground.jpg");
  m_Timer = getItem("timer");
  m_Timer2 = getItem("timer2");
  coinCount = getItem("coinCount");

  if (coinCount == null) {
    coinCount = 0;
  }

  setInterval(addCoin, 60 * 100);
}

function draw() {
  background(backgroundImage);

  if (timer) {
    m_Timer -= deltaTime / 1000;
  }

  if (m_Timer <= 0) {
    m_Timer = 0;
  }

  if (timer2) {
    m_Timer2 -= deltaTime / 1000;
  }

  fill(255, 192, 203);
  ellipse(750, 60, 100, 100);
  fill(255, 255, 255);
  ellipse(750, 50, 50, 50);
  fill(255, 192, 203);
  ellipse(750, 380, 575, 675);
  rect(674, 452, 150, 75, 20);
  fill(0, 255, 255);
  rect(600, 165, 300, 250, 20);
  textSize(55);

  fill(255, 255, 255);
  textSize(40);
  textFont("Georgia");
  textStyle(BOLD);
  text("Tamagotchi", 625, 140);
  textSize(20);
  text("®", 870, 120);

  fill(0);
  textSize(20);
  text(coinCount, 645, 195);
  image(gotchiPointsImage, 610, 175, 30, 30);

  let minutes = floor(m_Timer / 60);
  let seconds = floor(m_Timer % 60);
  let minutesString = minutes;
  let secondsString = seconds;

  if (minutes < 10) {
    minutesString = "0" + minutes;
  }

  if (seconds < 10) {
    secondsString = "0" + seconds;
  }

  if (m_Timer >= 100 * 60) {
    fill(0);
    textSize(35);
    text(minutesString + ":" + secondsString, 687, 500);
  } else {
    fill(0);
    textSize(35);
    text(minutesString + ":" + secondsString, 697, 500);
  }

  storeItem("timer", m_Timer);
  storeItem("timer2", m_Timer2);
  storeItem("coinCount", coinCount);

  strokeWeight(3);

  startButton = createButton("Start");
  startButton.position(560, 490);
  startButton.size(75, 35);
  startButton.style("font-size", "15px");
  startButton.style("border-radius", "100%");
  startButton.style("font-weight", "bold");
  startButton.mousePressed(onStartPressed);

  stopButton = createButton("Stop");
  stopButton.position(860, 490);
  stopButton.size(75, 35);
  stopButton.style("font-size", "15px");
  stopButton.style("border-radius", "100%");
  stopButton.style("font-weight", "bold");
  stopButton.mousePressed(onStopPressed);

  buttonPlus5 = createButton("+ 5");
  buttonPlus5.position(610, 540);
  buttonPlus5.size(75, 35);
  buttonPlus5.style("font-size", "15px");
  buttonPlus5.style("border-radius", "100%");
  buttonPlus5.style("font-weight", "bold");
  buttonPlus5.mousePressed(onPlus5Pressed);

  buttonPlus10 = createButton("+ 10");
  buttonPlus10.position(810, 540);
  buttonPlus10.size(75, 35);
  buttonPlus10.style("font-size", "15px");
  buttonPlus10.style("border-radius", "100%");
  buttonPlus10.style("font-weight", "bold");
  buttonPlus10.mousePressed(onPlus10Pressed);

  buttonReset0 = createButton("0");
  buttonReset0.position(660, 590);
  buttonReset0.size(75, 35);
  buttonReset0.style("font-size", "15px");
  buttonReset0.style("border-radius", "100%");
  buttonReset0.style("font-weight", "bold");
  buttonReset0.mousePressed(onEndPressed);

  buttonReset25 = createButton("25");
  buttonReset25.position(760, 590);
  buttonReset25.size(75, 35);
  buttonReset25.style("font-size", "15px");
  buttonReset25.style("border-radius", "100%");
  buttonReset25.style("font-weight", "bold");
  buttonReset25.mousePressed(onResetPressed);

  // if (m_Timer <= 0) {
  //   textSize(20);
  //   text("Game over!", 689, 440);
  // }
}

function onStartPressed() {
  timer = true;
}

function onStopPressed() {
  timer = false;
}

function onPlus5Pressed() {
  if (m_Timer > 0) {
    m_Timer += 5 * 60;
  }
}

function onPlus10Pressed() {
  if (m_Timer > 0) {
    m_Timer += 10 * 60;
  }
}

function onEndPressed() {
  m_Timer = 0;
}

function onResetPressed() {
  m_Timer = 25 * 60;
}

function addCoin() {
  if (m_Timer > 0) {
    coinCount++;
  }
}
