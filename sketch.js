let m_Timer = 25 * 60;
let backgroundImage;
let startButton;
let stopButton;
let timer = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = loadImage("Tamagotchi.jpg");
  m_Timer = getItem("timer");
}

function draw() {
  background(backgroundImage);

  if (timer) {
    m_Timer -= deltaTime / 1000;
  }

  if (m_Timer <= 0) {
    m_Timer = 0;
  }

  fill("pink");
  ellipse(750, 340, 575, 675);
  // rect(350, 50, 900, 600, 20);
  // rect(150, 50, 550, 600, 20);
  rect(674, 412, 150, 75, 20);
  rect(600, 125, 300, 250, 20);
  textSize(55);

  fill(255, 255, 255);
  textSize(40);
  textFont("Georgia");
  textStyle(BOLD);
  text("Tamagotchi", 625, 100);

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
    text(minutesString + ":" + secondsString, 687, 460);
  } else {
    fill(0);
    textSize(35);
    text(minutesString + ":" + secondsString, 697, 460);
  }

  storeItem("timer", m_Timer);

  strokeWeight(3);

  startButton = createButton("Start");
  startButton.position(560, 450);
  startButton.size(75, 35);
  startButton.style("font-size", "10px");
  startButton.style("border-radius", "50%");
  startButton.style("font-weight", "bold");
  startButton.mousePressed(onStartPressed);

  stopButton = createButton("Stop");
  stopButton.position(860, 450);
  stopButton.size(75, 35);
  stopButton.style("font-size", "10px");
  stopButton.style("border-radius", "50%");
  stopButton.style("font-weight", "bold");
  stopButton.mousePressed(onStopPressed);

  buttonPlus5 = createButton("+ 5");
  buttonPlus5.position(610, 500);
  buttonPlus5.size(75, 35);
  buttonPlus5.style("font-size", "10px");
  buttonPlus5.style("border-radius", "50%");
  buttonPlus5.style("font-weight", "bold");
  buttonPlus5.mousePressed(onPlus5Pressed);

  buttonPlus10 = createButton("+ 10");
  buttonPlus10.position(810, 500);
  buttonPlus10.size(75, 35);
  buttonPlus10.style("font-size", "10px");
  buttonPlus10.style("border-radius", "50%");
  buttonPlus10.style("font-weight", "bold");
  buttonPlus10.mousePressed(onPlus10Pressed);

  buttonReset0 = createButton("0");
  buttonReset0.position(660, 550);
  buttonReset0.size(75, 35);
  buttonReset0.style("font-size", "10px");
  buttonReset0.style("border-radius", "50%");
  buttonReset0.style("font-weight", "bold");
  buttonReset0.mousePressed(onEndPressed);

  buttonReset25 = createButton("25");
  buttonReset25.position(760, 550);
  buttonReset25.size(75, 35);
  buttonReset25.style("font-size", "10px");
  buttonReset25.style("border-radius", "50%");
  buttonReset25.style("font-weight", "bold");
  buttonReset25.mousePressed(onResetPressed);

  if (m_Timer <= 0) {
    textSize(20);
    text("Game over!", 640, 400);
  }
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
