var questiondata = [ {
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the full form of CPU?",
    options:[
        "Computer Processing Unit",
        "Computer Proces Unit",
        "Central Processing Unit",
        "Control Processing Unit",
    ],

    answer:  "Computer Processing Unit",

  }
];

var questions =document.getElementById("questiondata");
var option = document.getElementById("options");
var num = document.getElementById("num")

var questionindex = 0 ;
function questionrender(){
    questions.innerHTML = questiondata[questionindex].questiondata

    options.innerHTML = ""
    for(i=0 ;i<questiondata[questionindex].options.length;i++){
        options.innerHTML += `<div class="col-6 col-sm-4 mt-2 p-2" id="options">
        <button class="btn shadow-lg fixHeight" onclick="check('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')">${questionData[questionIndex].options[i]}</button>
       </div>`
    }
}
console.log(questiondata)


