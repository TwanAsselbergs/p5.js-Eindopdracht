let m_Timer = 25 * 60;
let m_Timer2 = 1 * 500;
let backgroundImage;
let startButton;
let stopButton;
let timer = false;
let timer2 = true;
let coinCount = 10;
let coinInterval;
let gotchiPointsImage;
let tamagotchiImage1;
let tamagotchiImage2;
let tamagotchiImage3;
let tamagotchiImage4;
let tamagotchiImage5;
let breadImage;
let soupImage;
let pizzaImage;
let showSoup = false;
let showBread = false;
let showPizza = false;
let reward = false;

function preload() {
  gotchiPointsImage = loadImage("GotchiPoints.png");
  tamagotchiImage1 = loadImage("1.png");
  tamagotchiImage2 = loadImage("2.png");
  tamagotchiImage3 = loadImage("3.png");
  tamagotchiImage4 = loadImage("4.png");
  tamagotchiImage5 = loadImage("5.png");
  breadImage = loadImage("Bread.png");
  soupImage = loadImage("Soup.png");
  pizzaImage = loadImage("Pizza.png");
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

  buttonBuySoup = createButton("");
  buttonBuySoup.style("background-color", "transparent");
  buttonBuySoup.style("border", "none");
  buttonBuySoup.position(530, 275);
  buttonBuySoup.size(40, 40);
  buttonBuySoup.mousePressed(onBuySoupPressed);
  buttonBuySoup.hide();

  buttonBuyBread = createButton("");
  buttonBuyBread.style("background-color", "transparent");
  buttonBuyBread.style("border", "none");
  buttonBuyBread.position(530, 320);
  buttonBuyBread.size(40, 40);
  buttonBuyBread.mousePressed(onBuyBreadPressed);
  buttonBuyBread.hide();

  buttonBuyPizza = createButton("");
  buttonBuyPizza.style("background-color", "transparent");
  buttonBuyPizza.style("border", "none");
  buttonBuyPizza.position(530, 365);
  buttonBuyPizza.size(40, 40);
  buttonBuyPizza.mousePressed(onBuyPizzaPressed);
  buttonBuyPizza.hide();
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

  if (m_Timer <= 0 && reward == false) {
    m_Timer2 += 250;
    reward = true;
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
  text(round(m_Timer2), 855, 195);

  if (m_Timer2 >= 400) {
    image(tamagotchiImage2, 650, 180, 210, 210);
  } else if (m_Timer2 >= 250) {
    image(tamagotchiImage3, 645, 176, 215, 215);
  } else if (m_Timer2 >= 150) {
    image(tamagotchiImage4, 650, 180, 196, 196);
  } else if (m_Timer2 < 50) {
    image(tamagotchiImage5, 650, 185, 196, 196);
  }

  if (timer == true) {
    image(tamagotchiImage1, 654, 182, 200, 200);
  }

  storeItem("timer", m_Timer);
  storeItem("timer2", m_Timer2);
  storeItem("coinCount", coinCount);

  strokeWeight(3);

  startButton = createButton("Start");
  startButton.position(560, 490);
  startButton.size(75, 35);
  startButton.style("background-color", "white");
  startButton.style("font-size", "15px");
  startButton.style("border-radius", "100%");
  startButton.style("font-weight", "bold");
  startButton.mousePressed(onStartPressed);

  stopButton = createButton("Stop");
  stopButton.position(860, 490);
  stopButton.size(75, 35);
  stopButton.style("background-color", "white");
  stopButton.style("font-size", "15px");
  stopButton.style("border-radius", "100%");
  stopButton.style("font-weight", "bold");
  stopButton.mousePressed(onStopPressed);

  buttonPlus5 = createButton("+ 5");
  buttonPlus5.position(610, 540);
  buttonPlus5.size(75, 35);
  buttonPlus5.style("background-color", "white");
  buttonPlus5.style("font-size", "15px");
  buttonPlus5.style("border-radius", "100%");
  buttonPlus5.style("font-weight", "bold");
  buttonPlus5.mousePressed(onPlus5Pressed);

  buttonPlus10 = createButton("+ 10");
  buttonPlus10.position(810, 540);
  buttonPlus10.size(75, 35);
  buttonPlus10.style("background-color", "white");
  buttonPlus10.style("font-size", "15px");
  buttonPlus10.style("border-radius", "100%");
  buttonPlus10.style("font-weight", "bold");
  buttonPlus10.mousePressed(onPlus10Pressed);

  buttonReset0 = createButton("0");
  buttonReset0.position(660, 590);
  buttonReset0.size(75, 35);
  buttonReset0.style("background-color", "white");
  buttonReset0.style("font-size", "15px");
  buttonReset0.style("border-radius", "100%");
  buttonReset0.style("font-weight", "bold");
  buttonReset0.mousePressed(onEndPressed);

  buttonReset25 = createButton("25");
  buttonReset25.position(760, 590);
  buttonReset25.size(75, 35);
  buttonReset25.style("background-color", "white");
  buttonReset25.style("font-size", "15px");
  buttonReset25.style("border-radius", "100%");
  buttonReset25.style("font-weight", "bold");
  buttonReset25.mousePressed(onResetPressed);

  buttonShop = createButton("Shop");
  buttonShop.position(515, 215);
  buttonShop.size(75, 35);
  buttonShop.style("background-color", "white");
  buttonShop.style("font-size", "15px");
  buttonShop.style("border-radius", "100%");
  buttonShop.style("font-weight", "bold");
  buttonShop.mousePressed(onShopPressed);

  if (showShop == true) {
    fill(255, 255, 255);
    rect(513, 260, 75, 150, 20);

    image(soupImage, 527, 275, 35, 35);
    image(breadImage, 527, 320, 35, 35);
    image(pizzaImage, 525, 365, 40, 40);

    fill(0);
    textSize(13);
    text("10", 565, 282);
    text("25", 565, 324);
    text("50", 565, 374);

    buttonShopClose = createButton("Close");
    buttonShopClose.position(515, 215);
    buttonShopClose.size(75, 35);
    buttonShopClose.style("background-color", "white");
    buttonShopClose.style("font-size", "15px");
    buttonShopClose.style("border-radius", "100%");
    buttonShopClose.style("font-weight", "bold");
    buttonShopClose.mousePressed(onShopClosePressed);

    buttonBuySoup.show();
    buttonBuyBread.show();
    buttonBuyPizza.show();
  }

  if (showSoup == true) {
    image(soupImage, 660, 355, 55, 55);
    setTimeout(() => {
      showSoup = false;
    }, 10 * 1000);
  }
  if (showBread == true) {
    image(breadImage, 730, 360, 50, 50);
    setTimeout(() => {
      showBread = false;
    }, 25 * 1000);
  }
  if (showPizza == true) {
    image(pizzaImage, 780, 355, 60, 60);
    setTimeout(() => {
      showPizza = false;
    }, 50 * 1000);
  }
}

function onStartPressed() {
  timer = true;
  coinInterval = setInterval(addCoin, 10 * 1000);
}

function onStopPressed() {
  timer = false;
  // m_Timer2 -= 500;
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
  m_Timer = 1 * 5;
}

function onBuySoupPressed() {
  if (coinCount >= 10) {
    coinCount -= 10;
    m_Timer2 += 100;
    showSoup = true;
  }
}

function onBuyBreadPressed() {
  if (coinCount >= 25) {
    coinCount -= 25;
    m_Timer2 += 250;
    showBread = true;
  }
}

function onBuyPizzaPressed() {
  if (coinCount >= 50) {
    coinCount -= 50;
    m_Timer2 += 500;
    showPizza = true;
  }
}

function addCoin() {
  if (timer && m_Timer > 0) {
    coinCount++;
  }
}

function onShopPressed() {
  showShop = true;
}

function onShopClosePressed() {
  buttonBuySoup.hide();
  buttonBuyBread.hide();
  buttonBuyPizza.hide();
  showShop = false;
}

if ((showShop = false)) {
  showShop = false;
}
