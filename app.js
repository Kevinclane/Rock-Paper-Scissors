let options = ["Rock", "Paper", "scissor"]

let win = 0
let draw = 0
let loss = 0

function button(option) {
  let user = ""
  if (option == "Rock") {
    user = "Rock"
  } else if (option == "Paper") {
    user = "Paper"
  } else if (option == "scissor") {
    user = "scissor"
  }
  compare(user)
}


function compPick() {
  let rng = Math.random()
  if (rng >= 0 && rng < .333) {
    return "Rock"
  } else if (rng >= .333 && rng < .666) {
    return "Paper"
  } return "scissor"
}

function compare(user) {
  let userPick = user
  let comp = compPick()
  let result = ""
  //USER = ROCK
  if (user == "Rock") {
    if (comp == "Rock") {
      result = "Draw"
    } else if (comp == "Paper") {
      result = "Loss"
    } else if (comp == "scissor") {
      result = "Win"
    }
    //USER = PAPER
  } else if (user == "Paper") {
    if (comp == "Rock") {
      result = "Win"
    } else if (comp == "Paper") {
      result = "Draw"
    } else if (comp == "scissor") {
      result = "Loss"
    }
    //USER = scissor
  } else if (user == "scissor") {
    if (comp == "Rock") {
      result = "Loss"
    } else if (comp == "Paper") {
      result = "Win"
    } else if (comp == "scissor") {
      result = "Draw"
    }
  }
  displayResults(result)
  resultColor(result)
  counter(result)
}

function displayResults(result) {
  let elem = document.getElementById("results")
  elem.innerHTML = `${result}`
}

function counter(result) {

  let elem = document.getElementById("stats")
  if (result == "Win") {
    win++
  } else if (result == "Draw") {
    draw++
  } else if (result == "Loss") {
    loss++
  }
  elem.innerHTML = `Wins: ${win}  Draws: ${draw}  Losses: ${loss}`
}

function resultColor(result) {
  let elem = document.getElementById("results")
  if (result == "Win") {
    elem.classList.add("win")
    elem.classList.remove("draw")
    elem.classList.remove("loss")
  } else if (result == "Draw") {
    elem.classList.add("draw")
    elem.classList.remove("win")
    elem.classList.remove("loss")
  } else if (result == "Loss") {
    elem.classList.add("loss")
    elem.classList.remove("win")
    elem.classList.remove("draw")
  }
}