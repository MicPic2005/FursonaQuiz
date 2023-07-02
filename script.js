let submit = document.querySelector(".submit");
let results = document.querySelector(".results");
let message = document.querySelector(".message");

submit.onclick = function(){
  var score = 0;
  var q1 = document.fursonaQuiz.question1.value;
  var q2 = document.fursonaQuiz.question2.value;
  var q3 = document.fursonaQuiz.question3.value;
  var q4 = document.fursonaQuiz.question4.value;
  var q5 = document.fursonaQuiz.question5.value;
  
  if(q1 == "excited") {score += 1}
  if(q1 == "chill") {score += 2}
  if(q1 == "shy") {score += 3}
  if(q1 == "annoyed") {score += 4}

  if(q2 == "video games") {score += 1}
  if(q2 == "sleep") {score += 4}
  if(q2 == "art") {score += 3}
  if(q2 == "outdoors") {score += 2}

  if(q3 == "zootopia") {score += 2}
  if(q3 == "sing") {score += 1}
  if(q3 == "the bad guys") {score += 3}
  if(q3 == "puss in boots") {score += 4}

  if(q4 == "dog treats") {score += 1}
  if(q4 == "mice") {score += 2}
  if(q4 == "berries") {score += 3}
  if(q4 == "cow") {score += 4}

  if(q5 == "summer") {score += 1}
  if(q5 == "winter") {score += 4}
  if(q5 == "spring") {score += 2}
  if(q5 == "fall") {score += 3}
  console.log(score);
  let userName = document.querySelector(".userName").value;

  results.style.display = "block";
  if(score >= 5 && score <= 7) {
    message.innerHTML = "Your fursona is " + userName + " the dog!";
    document.querySelector(".dog").style.display = "block";
  } else if (score >= 8 && score <= 10) {
    message.innerHTML = "Your fursona is " + userName + " the wolf!";
    document.querySelector(".wolf").style.display = "block";
  } else if (score >= 11 && score <= 14) {
    message.innerHTML = "Your fursona is " + userName + " the fox!";
    document.querySelector(".fox").style.display = "block";
  } else if (score >= 15 && score <= 17) {
    message.innerHTML = "Your fursona is " + userName + " the cat!";
    document.querySelector(".cat").style.display = "block";
  } else if (score >= 18 && score <= 20) {
    message.innerHTML = "Your fursona is " + userName + " the dragon!";
    document.querySelector(".dragon").style.display = "block";
  }
  
}

