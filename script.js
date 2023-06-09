const body = document.body;

const wordElement = document.getElementById("word");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");

const formchangeElement = document.getElementById("formchange");

const bgforwordElement = document.getElementById("bgforword");

const artistElement = document.getElementById("artist");
const artiststartElement = document.getElementById("artiststart");
const artistchangeElement = document.getElementById("artistchange");
// const formElement = document.getElementById("form");

const inputprintElement = document.getElementById("inputprint");
const resetElement = document.getElementById("reset");

const ModeElement = document.getElementById("Mode");
const levelElement = document.getElementById("level");

const ModedropdownElement = document.getElementById("Modedropdown");
const leveldropdownElement = document.getElementById("leveldropdown");

const modecurrentElement = document.getElementById("modecurrent");
const levelcurrentElement = document.getElementById("levelcurrent");
const ArtistcurrentElement = document.getElementById("Artistcurrent");

const CMElement = document.getElementById("CM");
const SMElement = document.getElementById("SM");
const UMElement = document.getElementById("UM");

const CMstartElement = document.getElementById("CMstart");
const SMstartElement = document.getElementById("SMstart");
const UMstartElement = document.getElementById("UMstart");

const hardElement = document.getElementById("hard");
const interElement = document.getElementById("inter");
const easyElement = document.getElementById("easy");

const hardstartElement = document.getElementById("hardstart");
const interstartElement = document.getElementById("interstart");
const easystartElement = document.getElementById("easystart");

const notsaveElement = document.getElementById("notsave");
// const savedataElement = document.getElementById("savedata");
const backElement = document.getElementById("back");

const massageforchangeElement = document.getElementById("massageforchange");
const focusElement = document.getElementById("focus");

const settingElement = document.getElementById("setting");
const NavsettingLeftElement = document.getElementById("NavsettingLeft");

const savedataElement = document.getElementById("savedata");
const btnforformElement = document.getElementById("btnforform");

const settingStartElement = document.getElementById("settingStart");
const savedatastartElement = document.getElementById("savedatastart");

const inputfornoneElement = document.getElementById("inputfornone");
const historyfornoneElement = document.getElementById("historyfornone");
const gamefornoneElement = document.getElementById("gamefornone");
const detailscoreElement = document.getElementById("detailscore");

const historywordElement = document.getElementById("historyword");
const startinthreeElement = document.getElementById("startinthree");

const ClearElement = document.getElementById("Clear");

const openwordhistoryElement = document.getElementById("openwordhistory");
const datahistoryElement = document.getElementById("datahistory");

const scoreMaxCMElement = document.getElementById("scoreMaxCM");
const scoreMaxSMElement = document.getElementById("scoreMaxSM");
const scoreMaxUMElement = document.getElementById("scoreMaxUM");

const scordMaxLevelCMElement = document.getElementById("scordMaxLevelCM");
const scordMaxLevelSMElement = document.getElementById("scordMaxLevelSM");
const scordMaxLevelUMElement = document.getElementById("scordMaxLevelUM");

const statisticsElement = document.getElementById("statistics");
const fornavscoreElement = document.getElementById("fornavscore");
const closedhistoryElement = document.getElementById("closedhistory");

const statisticsModeElement = document.getElementById("statisticsMode");
const statisticsModedataElement = document.getElementById("statisticsModedata");
const statisticsCMElement = document.getElementById("statisticsCM");
const statisticsSMElement = document.getElementById("statisticsSM");
const statisticsUMElement = document.getElementById("statisticsUM");

const NavleftforsettingElement = document.getElementById("Navleftforsetting");

const endgameElement = document.getElementById("endgame");

const scoreEndElement = document.getElementById("scoreEnd");
const LevelEndElement = document.getElementById("LevelEnd");
const ModeEndElement = document.getElementById("ModeEnd");

const closeendElement = document.getElementById("closeend");
const startgameElement = document.getElementById("startgame");

let historyarray = localStorage.getItem("history");
let selectmode = localStorage.getItem("mode");
let selectlevel = localStorage.getItem("level");
let premusic = localStorage.getItem("music");
let scoreCMh = localStorage.getItem("scoreCMh");
let scoreSMh = localStorage.getItem("scoreSMh");
let scoreUMh = localStorage.getItem("scoreUMh");
let scoreCMi = localStorage.getItem("scoreCMi");
let scoreSMi = localStorage.getItem("scoreSMi");
let scoreUMi = localStorage.getItem("scoreUMi");
let scoreCMe = localStorage.getItem("scoreCMe");
let scoreSMe = localStorage.getItem("scoreSMe");
let scoreUMe = localStorage.getItem("scoreUMe");
let three = 3;
let datamusicwords;
let resultword;
let timeCal;
let timethree;
let preSelectmode;
let preSelectlevel;
let historyALL;
let TrueFalse;
let reultCM;
let reultSM;
let reultUM;
let statisticscolorMode;

let scoreCM = [];
let scoreSM = [];
let scoreUM = [];

function statisticsopen() {
  statisticsModeElement.classList.toggle("none");
}

function openforMode() {
  detailscoreElement.classList.add("rightfor20vw");
  fornavscoreElement.classList.add("widthdiff");
  statisticsModedataElement.classList.add("fadeinRi");
  displayhistosyformode(1, 0, 0);
}

function updatestatistics() {
  scoreCM = pushscore(scoreCMh, scoreCMi, scoreCMe);
  scoreSM = pushscore(scoreSMh, scoreSMi, scoreSMe);
  scoreUM = pushscore(scoreUMh, scoreUMi, scoreUMe);
  reultCM = more(scoreCMh, scoreCMi, scoreCMe);
  reultSM = more(scoreSMh, scoreSMi, scoreSMe);
  reultUM = more(scoreUMh, scoreUMi, scoreUMe);
  scordMaxLevelCMElement.innerHTML = displaylevel(reultCM);
  scordMaxLevelSMElement.innerHTML = displaylevel(reultSM);
  scordMaxLevelUMElement.innerHTML = displaylevel(reultUM);
  Max();
}

function displaylevel(level) {
  if (level == "none") {
    answer = "The player has never played this mode.";
  } else if (level == "Hard") {
    answer = "Level : Hard Level";
  } else if (level == "Inter") {
    answer = "Level : Intermediate Level";
  } else {
    answer = "Level : Easy Level";
  }
  return answer;
}

function more(scoreMh, scoreMi, scoreMe) {
  let hard;
  let inter;
  let easy;
  let result;
  if (scoreMh) {
    typeof scoreMh !== "number"
      ? (hard = Math.max(...scoreMh.split(",").map((element) => +element)))
      : (hard = scoreMh);
  }

  if (scoreMi) {
    typeof scoreMi !== "number"
      ? (inter = Math.max(...scoreMi.split(",").map((element) => +element)))
      : (inter = scoreMi);
  }
  if (scoreMe) {
    typeof scoreMe !== "number"
      ? (easy = Math.max(...scoreMe.split(",").map((element) => +element)))
      : (easy = scoreMe);
  }
  if (hard !== undefined || inter !== undefined || easy !== undefined) {
    if (hard == undefined) {
      hard = 0;
    }
    if (inter == undefined) {
      inter = 0;
    }
    if (easy == undefined) {
      easy = 0;
    }
    if (hard > inter) {
      if (hard > easy || hard == easy) {
        result = "Hard";
      } else if (hard < easy) {
        result = "Easy";
      }
    } else {
      if (inter < easy) {
        result = "Easy";
      } else if (hard == inter) {
        result = "Hard";
      } else {
        result = "Inter";
      }
    }
  } else {
    if (hard !== undefined) {
      result = "Hard";
    } else if (inter !== undefined) {
      result = "Inter";
    } else if (easy !== undefined) {
      result = "Easy";
    } else {
      result = "none";
    }
  }
  return result;
}

function openNavsetting() {
  NavsettingLeftElement.classList.remove("fadeleft");
  NavsettingLeftElement.classList.add("nav");
  savedataElement.classList.add("boxmode");
  inputprintElement.classList.remove("index");
  artistElement.focus();
}

function pushscore(scoreMh, scoreMi, scoreMe) {
  let scoreM = [];

  if (scoreMh) {
    typeof scoreMh !== "number"
      ? scoreM.push(...scoreMh.split(","))
      : scoreM.push(scoreMh);
  }

  if (scoreMi) {
    typeof scoreMi !== "number"
      ? scoreM.push(...scoreMi.split(","))
      : scoreM.push(scoreMi);
  }
  if (scoreMe) {
    typeof scoreMe !== "number"
      ? scoreM.push(...scoreMe.split(","))
      : scoreM.push(scoreMe);
  }
  return scoreM;
}

function Max() {
  let scoreCMfordisplay = Math.max(...scoreCM);
  let scoreSMfordisplay = Math.max(...scoreSM);
  let scoreUMfordisplay = Math.max(...scoreUM);

  scoreMaxCMElement.innerText = `Maximum score: ${
    scoreCMfordisplay !== -Infinity ? `${scoreCMfordisplay}` : "0"
  } points`;
  scoreMaxSMElement.innerText = `Maximum score: ${
    scoreSMfordisplay !== -Infinity ? `${scoreSMfordisplay}` : "0"
  } points`;
  scoreMaxUMElement.innerText = `Maximum score: ${
    scoreUMfordisplay !== -Infinity ? `${scoreUMfordisplay}` : "0"
  } points`;
}

function forCMSMUM(score, mode, level) {
  statisticsModedata.innerHTML += `<div class='stylescore-mode'>
      Mode : ${mode}<br>
      Level : ${level}<br>
      Score : ${score}
      </div>`;
}

function telllevelscore(level) {
  if (statisticscolorMode == "purple") {
    statisticsModedata.innerHTML += `
    <div class='colorMode imgbg-purple'><h4 class='on'>${level}</h4></div>`;
  } else if (statisticscolorMode == "blue") {
    statisticsModedata.innerHTML += `
    <div class='colorMode imgbg-blue'><h4 class='on'>${level}</h4></div>`;
  } else {
    statisticsModedata.innerHTML += `
    <div class='colorMode imgbg-yellow'><h4 class='on'>${level}</h4></div>`;
  }
}

function displayhistosyformode(CM, SM) {
  let level;
  let mode;
  statisticsModedata.innerHTML = "";

  if (CM) {
    mode = "Challenge Mode";

    if (scoreCMh) {
      level = "Hard Level";
      telllevelscore(level);
      typeof scoreCMh !== "number"
        ? scoreCMh.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreCMh, mode, level);
    } else {
      level = "Hard Level";
      telllevelscore(level);
    }
    if (scoreCMi) {
      level = "Intermediate Level";
      telllevelscore(level);
      typeof scoreCMi !== "number"
        ? scoreCMi.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreCMi, mode, level);
    } else {
      level = "Intermediate Level";
      telllevelscore(level);
    }
    if (scoreCMe) {
      level = "Easy level";
      telllevelscore(level);
      typeof scoreCMe !== "number"
        ? scoreCMe.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreCMe, mode, level);
    } else {
      level = "Easy level";
      telllevelscore(level);
    }
  } else if (SM) {
    if (scoreSMh) {
      level = "Hard Level";
      telllevelscore(level);
      typeof scoreSMh !== "number"
        ? scoreSMh.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreSMh, mode, level);
    } else {
      level = "Hard Level";
      telllevelscore(level);
    }
    if (scoreSMi) {
      level = "Intermediate Level";
      telllevelscore(level);
      typeof scoreSMi !== "number"
        ? scoreSMi.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreSMi, mode, level);
    } else {
      level = "Intermediate Level";
      telllevelscore(level);
    }
    if (scoreSMe) {
      level = "Easy Level";
      telllevelscore(level);
      typeof scoreSMe !== "number"
        ? scoreSMe.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreSMe, mode, level);
    } else {
      level = "Easy Level";
      telllevelscore(level);
    }
  } else {
    mode = "Ultimate Mode";
    if (scoreUMh) {
      level = "Hard Level";
      telllevelscore(level);
      typeof scoreUMh !== "number"
        ? scoreUMh.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreUMh, mode, level);
    } else {
      level = "Hard Level";
      telllevelscore(level);
    }
    if (scoreUMi) {
      level = "Intermediate Level";
      telllevelscore(level);
      typeof scoreUMi !== "number"
        ? scoreUMi.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreUMi, mode, level);
    } else {
      level = "Intermediate Level";
      telllevelscore(level);
    }
    if (scoreUMe) {
      level = "Easy Level";
      telllevelscore(level);
      typeof scoreUMe !== "number"
        ? scoreUMe.split(",").forEach((score) => forCMSMUM(score, mode, level))
        : forCMSMUM(scoreUMe, mode, level);
    } else {
      level = "Easy Level";
      telllevelscore(level);
    }
  }
}

function dataopenhistory() {
  inputprintElement.classList.remove("index");
  resetElement.classList.remove("index");
  datahistoryElement.classList.remove("none");
  TrueFalse = true;
  historyfunction();
}

function settingEnd() {
  ModeEndElement.innerHTML = `<strong>${selectmode}</strong>`;
  LevelEndElement.innerHTML = `<strong>${selectlevel}</strong>`;
  scoreEndElement.innerHTML = `<strong>${score}</strong>`;
  endgameElement.classList.remove("none");
}

function difftime() {
  time--;
  timeElement.innerText = `${time} Second`;
  if (time == 0) {
    clearInterval(timeCal);
    timeElement.innerText = `End the game.`;
    settingEnd();
    if (selectmode == "Challenge") {
      if (selectlevel == "Hard") {
        scoreCMh ? (scoreCMh += `,${score}`) : (scoreCMh = score);
        localStorage.setItem("scoreCMh", scoreCMh);
      } else if (selectlevel == "Intermediate") {
        scoreCMi ? (scoreCMi += `,${score}`) : (scoreCMi = score);
        localStorage.setItem("scoreCMi", scoreCMi);
      } else {
        scoreCMe ? (scoreCMe += `,${score}`) : (scoreCMe = score);
        localStorage.setItem("scoreCMe", scoreCMe);
      }
    } else if (selectmode == "Survival") {
      if (selectlevel == "Hard") {
        scoreSMh ? (scoreSMh += `,${score}`) : (scoreSMh = score);
        localStorage.setItem("scoreSMh", scoreSMh);
      } else if (selectlevel == "Intermediate") {
        scoreSMi ? (scoreSMi += `,${score}`) : (scoreSMi = score);
        localStorage.setItem("scoreSMi", scoreSMi);
      } else {
        scoreSMe ? (scoreSMe += `,${score}`) : (scoreSMe = score);
        localStorage.setItem("scoreSMe", scoreSMe);
      }
    } else {
      if (selectlevel == "Hard") {
        scoreUMh ? (scoreUMh += `,${score}`) : (scoreUMh = score);
        localStorage.setItem("scoreUMh", scoreUMh);
      } else if (selectlevel == "Intermediate") {
        scoreUMi ? (scoreUMi += `,${score}`) : (scoreUMi = score);
        localStorage.setItem("scoreUMi", scoreUMi);
      } else {
        scoreUMe ? (scoreUMe += `,${score}`) : (scoreUMe = score);
        localStorage.setItem("scoreUMe", scoreUMe);
      }
    }
    updatestatistics();
  }
}

function historyfunction() {
  if (historyarray) {
    historyALL = historyarray.split(",");
  } else {
    historyALL = historyarray;
  }
  if (historyALL) {
    displayhistosy(historyALL);
  }
}

function backGomian() {
  datahistoryElement.classList.add("none");
  closedhistoryElement.classList.remove("none");
  inputprintElement.classList.add("index");
  resetElement.classList.add("index");
}

function displayhistosy() {
  if (!TrueFalse) {
    historywordElement.classList.remove("none");
    historyALL.forEach((element) => {
      const listDataElement = document.createElement("li");
      listDataElement.innerHTML += `${element}`;
      listDataElement.classList.add("list-style");
      historywordElement.append(listDataElement);
    });
  } else {
    datahistoryElement.innerHTML = `
    <dutton onclick="backGomian()" id="backfromhistory">
    <img class="size" src="/img/rewind-button.png" 
    title='Go back to the previous page.'
    alt="Go back to the previous page.">
</dutton>`;
    historyALL.forEach((element) => {
      itemdataElement = document.createElement("div");
      itemdataElement.innerHTML += `${element}`;
      itemdataElement.classList.add("list-style");
      datahistoryElement.append(itemdataElement);
    });
  }
}

function historyfunctionfordisplay(resultword) {
  const listDataElement = document.createElement("li");
  listDataElement.innerHTML += `${resultword}`;
  listDataElement.classList.add("list-style");
  historywordElement.append(listDataElement);
  historyarray
    ? (historyarray += `,${resultword}`)
    : (historyarray = resultword);
  localStorage.setItem("history", historyarray);
}

function randomWord() {
  if (datamusicwords) {
    let len = datamusicwords.length + 1;
    resultword = datamusicwords[Math.floor(Math.random() * len)];
    if (resultword) {
      wordElement.innerText = `${resultword}`;
      historyfunctionfordisplay(resultword);
    } else {
      randomWord();
    }
  }
}

function cheakWord(event) {
  if (event.target.value == resultword) {
    event.target.value = "";
    scoreElement.innerHTML = `score : ${++score}`;
    if (selectmode == "Survival") {
      if (selectlevel == "Hard") {
        time = 3;
      } else if (selectlevel == "Intermediate") {
        time = 5;
      } else {
        time = 7;
      }
    }
    if (selectmode == "Ultimate") {
      if (selectlevel == "Hard") {
        time += 4;
      } else if (selectlevel == "Intermediate") {
        time += 8;
      } else {
        time += 12;
      }
    }
    randomWord();
  }
}

function timethreeforwait() {
  startinthreeElement.innerText = `The game will start in ${--three} seconds.`;
  if (three == -1) {
    clearInterval(timethree);
    startinthree.classList.add("none");
    three = 3;
    historywordElement.classList.remove("none");
    setGameStart();
  }
}

async function waitready() {
  if (play == "play") {
    historywordElement.classList.add("none");
    wordElement.innerHTML =
      '<img class="image" src="img/loading-bar.png" alt="">';
    await loaddatamusic();
    score = 0;
    scoreElement.innerHTML = `score : 0`;
    reultModeandLevel();
    timeElement.innerText = `${time} Second`;
    startinthree.classList.remove("none");
    startinthreeElement.innerText = `The game will start in ${three} seconds.`;
    timethree = setInterval(timethreeforwait, "1000");
    play = "notplay";
    localStorage.setItem("play", play);
  }
}

function setGameStart() {
  randomWord();
  timeCal = setInterval(difftime, 1000);
}

async function loaddatamusic() {
  if (artistElement.value) {
    premusic = artistElement.value;
  } else {
    artistElement.value = premusic;
  }
  localStorage.setItem("music", premusic);
  history = [];
  let data = await fetch(
    `https://api.lyrics.ovh/suggest/${artistElement.value}`
  );
  data = await data.json();
  if (data.error) {
    changemusic();
  } else if (data.data.length !== 0) {
    datamusic(data.data);
  } else {
    changemusic();
  }
}

function changemusic() {
  massageforchangeElement.classList.remove("none");
}

function datamusic(data) {
  datamusicwords = [];
  data.map((element) => {
    let title = element.title;
    datamusicwords.push(title);
  });
}

function nonefordropdown() {
  notsaveElement.classList.add("none");
  savedataElement.classList.add("none");
  backElement.classList.remove("none");
}
function settingback() {
  backElement.classList.add("none");
  notsaveElement.classList.remove("none");
  savedataElement.classList.remove("none");
  ModedropdownElement.classList.add("none");
  leveldropdownElement.classList.add("none");
}

function reultModeandLevel() {
  if (selectmode == "Challenge") {
    if (selectlevel == "Hard") {
      time = 30;
    } else if (selectlevel == "Intermediate") {
      time = 60;
    } else {
      time = 120;
    }
  } else {
    if (selectlevel == "Hard") {
      time = 3;
    } else if (selectlevel == "Intermediate") {
      time = 5;
    } else {
      time = 7;
    }
  }
}

function closesetting() {
  NavsettingLeftElement.classList.remove("nav");
  NavsettingLeft.classList.add("fadeleft");
}

function detaildatacurrent() {
  modecurrentElement.innerText = `Mode : ${selectmode}`;
  levelcurrentElement.innerText = `Level : ${selectlevel}`;
  if (artistElement.value) {
    ArtistcurrentElement.innerText = `Artist : ${artistElement.value}`;
  } else {
    ArtistcurrentElement.innerText = `Artist : ${premusic}`;
  }
}

function callallneed() {
  selectcolorMode();
  selectcolorLevel();
  detaildatacurrent();
  historyfunction();
  updatestatistics();
}

function selectcolorMode() {
  CMElement.classList.remove("selectModeLevel");
  SMElement.classList.remove("selectModeLevel");
  UMElement.classList.remove("selectModeLevel");
  if (selectmode == "Challenge") {
    CMElement.classList.add("selectModeLevel");
  } else if (selectmode == "Survival") {
    SMElement.classList.add("selectModeLevel");
  } else {
    UMElement.classList.add("selectModeLevel");
  }
}

function selectcolorLevel() {
  hardElement.classList.remove("selectModeLevel");
  interElement.classList.remove("selectModeLevel");
  easyElement.classList.remove("selectModeLevel");
  if (selectlevel == "Hard") {
    hardElement.classList.add("selectModeLevel");
  } else if (selectlevel == "Intermediate") {
    interElement.classList.add("selectModeLevel");
  } else {
    easyElement.classList.add("selectModeLevel");
  }
}

function openSettingStart() {
  if (
    selectmode == "null" ||
    selectlevel == "null" ||
    premusic == "null" ||
    selectmode == null ||
    selectlevel == null ||
    premusic == null ||
    selectmode == "" ||
    selectlevel == "" ||
    premusic == "" ||
    !selectmode ||
    !selectlevel ||
    !premusic
  ) {
    settingStartElement.classList.remove("none");
    inputfornoneElement.classList.add("none");
    historyfornoneElement.classList.add("none");
    gamefornoneElement.classList.add("none");
    detailscoreElement.classList.add("none");
  }
}

function save() {
  detaildatacurrent();
  closesetting();
  if (
    artistElement.value &&
    artistElement.value !== "null" &&
    artistElement.value !== null
  ) {
    premusic = artistElement.value;
  }
  localStorage.setItem("music", premusic);
  localStorage.setItem("mode", selectmode);
  localStorage.setItem("level", selectlevel);
}

function closesettingstart() {
  settingStartElement.classList.add("none");
  inputfornoneElement.classList.remove("none");
  historyfornoneElement.classList.remove("none");
  gamefornoneElement.classList.remove("none");
  detailscoreElement.classList.remove("none");
}

function formodeAndLevelSelect() {
  selectcolorMode();
  selectcolorLevel();
  savedataElement.classList.remove("boxmode");

  if (
    selectmode !== "null" &&
    selectlevel !== "null" &&
    selectmode !== null &&
    selectlevel !== null &&
    selectmode !== "" &&
    selectlevel !== "" &&
    selectmode &&
    selectlevel &&
    artiststartElement.value
  ) {
    savedatastartElement.classList.remove("boxmode");
  }
}

function removetheme() {
  datahistoryElement.classList.remove("imgbg-purple");
  body.classList.remove("imgbg-purple");
  resetElement.classList.remove("imgbg-purplenonehover");
  NavleftforsettingElement.classList.remove("imgbg-purplenonehover");
  bgforwordElement.classList.remove("imgbg-purplenonehover");
  datahistoryElement.classList.remove("imgbg-blue");
  body.classList.remove("imgbg-blue");
  resetElement.classList.remove("imgbg-bluenonehover");
  NavleftforsettingElement.classList.remove("imgbg-bluenonehover");
  bgforwordElement.classList.remove("imgbg-bluenonehover");
  datahistoryElement.classList.remove("imgbg-yellow");
  body.classList.remove("imgbg-yellow");
  resetElement.classList.remove("imgbg-yellownonehover");
  NavleftforsettingElement.classList.remove("imgbg-yellownonehover");
  bgforwordElement.classList.remove("imgbg-yellownonehover");
}

function CMtheme() {
  if (selectmode == "Challenge") {
    CMthemewait();
  }
}

function CMthemewait() {
  datahistoryElement.classList.add("imgbg-purple");
  body.classList.add("imgbg-purple");
  resetElement.classList.add("imgbg-purplenonehover");
  NavleftforsettingElement.classList.add("imgbg-purplenonehover");
  bgforwordElement.classList.add("imgbg-purplenonehover");
  closeendElement.classList.add("imgpeople-purple");
  startgameElement.classList.add("imgbg-purple");
}

function SMtheme() {
  if (selectmode == "Survival") {
    SMthemewait();
  }
}

function SMthemewait() {
  datahistoryElement.classList.add("imgbg-blue");
  body.classList.add("imgbg-blue");
  resetElement.classList.add("imgbg-bluenonehover");
  NavleftforsettingElement.classList.add("imgbg-bluenonehover");
  bgforwordElement.classList.add("imgbg-bluenonehover");
  closeendElement.classList.add("imgpeople-blue");
  startgameElement.classList.add("imgbg-blue");
}

function UMthemewait() {
  datahistoryElement.classList.add("imgbg-yellow");
  body.classList.add("imgbg-yellow");
  resetElement.classList.add("imgbg-yellownonehover");
  NavleftforsettingElement.classList.add("imgbg-yellownonehover");
  bgforwordElement.classList.add("imgbg-yellownonehover");
  closeendElement.classList.add("imgpeople-yellow");
  startgameElement.classList.add("imgbg-yellow");
}
function UMtheme() {
  if (selectmode == "Ultimate") {
    UMthemewait();
  }
}

function CMfunction() {
  removetheme();
  CMthemewait();
  preSelectmode = selectmode;
  selectmode = "Challenge";
  formodeAndLevelSelect();
}

function SMfunction() {
  removetheme();
  SMthemewait();
  preSelectmode = selectmode;
  selectmode = "Survival";
  formodeAndLevelSelect();
}

function UMfunction() {
  removetheme();
  UMthemewait();
  preSelectmode = selectmode;
  selectmode = "Ultimate";
  formodeAndLevelSelect();
}

function Hardfunction() {
  preSelectlevel = selectlevel;
  selectlevel = "Hard";
  formodeAndLevelSelect();
}

function interfunction() {
  preSelectlevel = selectlevel;
  selectlevel = "Intermediate";
  formodeAndLevelSelect();
}

function easyfunction() {
  preSelectlevel = selectlevel;
  selectlevel = "Easy";
  formodeAndLevelSelect();
}

function closehistoryscore() {
  inputprintElement.classList.remove("none");
  resetElement.classList.remove("none");
  detailscoreElement.classList.remove("rightfor20vw");
  fornavscoreElement.classList.remove("widthdiff");
  statisticsModedataElement.classList.remove("fadeinRi");
  statisticsSMElement.classList.remove("clickforopen");
  statisticsCMElement.classList.remove("clickforopen");
  statisticsUMElement.classList.remove("clickforopen");
  closedhistoryElement.classList.add("fadeleft");
  closedhistoryElement.classList.add("opacityZero");
  Navleftforsetting.classList.remove("Navleftforscore");
}

let play = localStorage.getItem("play");

function reLoadepage() {
  play = "play";
  localStorage.setItem("play", play);
  location.reload();
}

inputprintElement.addEventListener("input", (event) => cheakWord(event));
ClearElement.addEventListener("click", () => (history = []));
resetElement.addEventListener("click", reLoadepage);

CMElement.addEventListener("click", () => CMfunction());
SMElement.addEventListener("click", () => SMfunction());
UMElement.addEventListener("click", () => UMfunction());
hardElement.addEventListener("click", () => Hardfunction());
interElement.addEventListener("click", () => interfunction());
easyElement.addEventListener("click", () => easyfunction());

CMstartElement.addEventListener("click", () => CMfunction());
SMstartElement.addEventListener("click", () => SMfunction());
UMstartElement.addEventListener("click", () => UMfunction());
hardstartElement.addEventListener("click", () => Hardfunction());
interstartElement.addEventListener("click", () => interfunction());
easystartElement.addEventListener("click", () => easyfunction());

savedatastartElement.addEventListener("click", () => {
  premusic = artiststartElement.value;
  if (
    selectmode !== "null" &&
    selectlevel !== "null" &&
    premusic !== "null" &&
    selectmode !== null &&
    selectlevel !== null &&
    premusic !== null &&
    selectmode !== "" &&
    selectlevel !== "" &&
    premusic !== "" &&
    selectmode &&
    selectlevel &&
    premusic
  ) {
    closesettingstart();
    save();
    callallneed();
    inputprintElement.focus();
    play = "play";
    waitready();
  }
});

savedataElement.addEventListener("click", () => {
  save();
  inputprintElement.classList.add("index");
});
backElement.addEventListener("click", () => {
  settingback();
});
notsaveElement.addEventListener("click", () => {
  preSelectmode ? (selectmode = preSelectmode) : selectmode;
  preSelectlevel ? (selectlevel = preSelectlevel) : selectlevel;
  artistElement.vale = premusic;
  removetheme();
  CMtheme();
  SMtheme();
  UMtheme();
  selectcolorMode();
  selectcolorLevel();
  inputprintElement.classList.add("index");
  closesetting();
});
ModeElement.addEventListener("click", () => {
  nonefordropdown();
  leveldropdownElement.classList.add("none");
  ModedropdownElement.classList.remove("none");
});
levelElement.addEventListener("click", () => {
  nonefordropdown();
  ModedropdownElement.classList.add("none");
  leveldropdownElement.classList.remove("none");
});

artiststartElement.addEventListener("input", formodeAndLevelSelect);
artistElement.addEventListener("input", formodeAndLevelSelect);
openwordhistoryElement.addEventListener("click", dataopenhistory);

statisticsElement.addEventListener("click", statisticsopen);

function removethemefornavri() {
  closedhistoryElement.classList.remove("imgpeople-purple");
  closedhistoryElement.classList.remove("imgpeople-blue");
  closedhistoryElement.classList.remove("imgpeople-yellow");
}
//CM SM UM
statisticsCMElement.addEventListener("click", () => {
  removethemefornavri();
  statisticscolorMode = "purple";
  closedhistoryElement.classList.add("imgpeople-purple");
  openforMode();
  displayhistosyformode(1, 0);
  inputprintElement.classList.add("none");
  resetElement.classList.add("none");
  Navleftforsetting.classList.add("Navleftforscore");
  statisticsSMElement.classList.remove("clickforopen");
  statisticsUMElement.classList.remove("clickforopen");
  statisticsCMElement.classList.add("clickforopen");
  closedhistoryElement.classList.remove("fadeleft");
  closedhistoryElement.classList.remove("opacityZero");
});
statisticsSMElement.addEventListener("click", () => {
  removethemefornavri();
  statisticscolorMode = "blue";
  closedhistoryElement.classList.add("imgpeople-blue");
  openforMode();
  displayhistosyformode(0, 1);
  inputprintElement.classList.add("none");
  resetElement.classList.add("none");
  Navleftforsetting.classList.add("Navleftforscore");
  statisticsUMElement.classList.remove("clickforopen");
  statisticsCMElement.classList.remove("clickforopen");
  statisticsSMElement.classList.add("clickforopen");
  closedhistoryElement.classList.remove("fadeleft");
  closedhistoryElement.classList.remove("opacityZero");
});
statisticsUMElement.addEventListener("click", () => {
  removethemefornavri();
  statisticscolorMode = "yellow";
  closedhistoryElement.classList.add("imgpeople-yellow");
  openforMode();
  displayhistosyformode(0, 0); //CM SM
  inputprintElement.classList.add("none");
  resetElement.classList.add("none");
  Navleftforsetting.classList.add("Navleftforscore");
  statisticsSMElement.classList.remove("clickforopen");
  statisticsCMElement.classList.remove("clickforopen");
  statisticsUMElement.classList.add("clickforopen");
  closedhistoryElement.classList.remove("fadeleft");
  closedhistoryElement.classList.remove("opacityZero");
});

closedhistoryElement.addEventListener("click", closehistoryscore);

ClearElement.addEventListener("click", () => {
  historyALL = "";
  historyarray = "";
  localStorage.setItem("history", "");
  historyword.innerText = "";
  datahistoryElement.innerHTML = `
    <dutton onclick="backGomian()" id="backfromhistory">
    <img class="size" src="/img/rewind-button.png" 
    alt="Go back to the previous page.">
</dutton>`;
});

settingElement.addEventListener("click", openNavsetting);
focusElement.addEventListener("click", () => artistElement.focus());

formchangeElement.addEventListener("submit", (element) => {
  element.preventDefault();
  premusic = artistchangeElement.value;
  artistElement.value = "";
  loaddatamusic();
  reLoadepage();
});

closeendElement.addEventListener("click", () =>
  endgameElement.classList.add("none")
);
startgameElement.addEventListener("click", reLoadepage);

openSettingStart();
callallneed();
CMtheme();
SMtheme();
UMtheme();
waitready();
