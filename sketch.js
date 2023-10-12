let m_Timer = 25 * 60;
let m_Timer2 = 1 * 60;
let backgroundImage;
let startButton;
let stopButton;
let timer = false;
let timer2 = true;
let coinCount = 0;
let coinInterval;
let gotchiPointsImage;
let tamagotchiImage1;
let tamagotchiImage2;
let tamagotchiImage3;
let tamagotchiImage4;
let tamagotchiImage5;
let concentratedImage;

function preload() {
  gotchiPointsImage = loadImage("GotchiPoints.png");
  tamagotchiImage1 = loadImage("1.png");
  tamagotchiImage2 = loadImage("2.png");
  tamagotchiImage3 = loadImage("3.png");
  tamagotchiImage4 = loadImage("4.png");
  tamagotchiImage5 = loadImage("5.png");
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

  if (m_Timer2 <= 0) {
    m_Timer2 = 0;
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

  textSize(20);
  text(m_Timer2, 50, 50);

  if (m_Timer2 >= 50) {
    image(tamagotchiImage2, 650, 200, 210, 210);
  } else if (m_Timer2 >= 40) {
    image(tamagotchiImage3, 645, 196, 210, 210);
  } else if (m_Timer2 >= 30) {
    image(tamagotchiImage4, 650, 200, 196, 196);
  } else if (m_Timer2 < 30) {
    image(tamagotchiImage5, 650, 200, 196, 196);
  }

  if (timer == true) {
    image(tamagotchiImage1, 654, 202, 200, 200);
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

  buttonBuy1 = createButton("Bread 10 Coins");
  buttonBuy1.position(500, 250);
  buttonBuy1.size(75, 35);
  buttonBuy1.mousePressed(onBuyPressed1);

  buttonBuy2 = createButton("Soup 25 Coins");
  buttonBuy2.position(500, 290);
  buttonBuy2.size(75, 35);
  buttonBuy2.mousePressed(onBuyPressed2);

  buttonBuy3 = createButton("Pizza 50 Coins");
  buttonBuy3.position(500, 330);
  buttonBuy3.size(75, 35);
  buttonBuy3.mousePressed(onBuyPressed3);

  buttonBuy4 = createButton("Sushi 100 Coins");
  buttonBuy4.position(500, 370);
  buttonBuy4.size(75, 35);
  buttonBuy4.mousePressed(onBuyPressed4);
}

function onStartPressed() {
  timer = true;
  coinInterval = setInterval(addCoin, 60 * 10); // make 60 * 1000 for 1 coin per minute
}

function onStopPressed() {
  timer = false;
  clearInterval(coinInterval);
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

function onBuyPressed1() {
  if (coinCount >= 10) {
    coinCount -= 10;
    m_Timer2 += 10;
  }
}

function onBuyPressed2() {
  if (coinCount >= 25) {
    coinCount -= 25;
    m_Timer2 += 25;
  }
}

function onBuyPressed3() {
  if (coinCount >= 50) {
    coinCount -= 50;
    m_Timer2 += 40;
  }
}

function onBuyPressed4() {
  if (coinCount >= 100) {
    coinCount -= 100;
    m_Timer2 += 60;
  }
}

function addCoin() {
  if (timer && m_Timer > 0) {
    coinCount++;
  }
}
