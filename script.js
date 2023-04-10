const questions = [
    {
        question: "もしかして犬かも？と思ったら診断してみよう！",
        answers: [
          { text: "診断を開始", points: 0 },
        ],
      },
    {
        question: "あなたは目が細いと思いますか",
        answers: [
          { text: "ぱっちり二重", points: 1 },
          { text: "一重だけどぱっちり", points: 2 },
          { text: "ふつう", points: 3 },
          { text: "ほそい", points: 5 },
        ],
      },
      {
        question: "四足歩行で歩いたことがありますか",
        answers: [
          { text: "ない", points: 1 },
          { text: "一回だけある", points: 2 },
          { text: "数回ある", points: 3 },
          { text: "何回かある", points: 4 },
        ],
      },
      {
        question: "ドックフードを見ると興奮しますか？",
        answers: [
          { text: "しない", points: 1 },
          { text: "少しだけする", points: 3 },
          { text: "かなりする", points: 4 },
          { text: "すごくする", points: 5 },
        ],
      },
      {
        question: "メスの犬を見て興奮しますか？",
        answers: [
          { text: "しない", points: 1 },
          { text: "少しだけする", points: 4 },
          { text: "かなりする", points: 5 },
          { text: "すごくする", points: 6 },
        ],
      },
    {
      question: "あなたは犬に似てると馬鹿にされたことがありますか？",
      answers: [
        { text: "ない", points: 0 },
        { text: "１回だけある", points: 1 },
        { text: "数回ある", points: 2 },
        { text: "何回もある", points: 5 },
      ],
    },
    // 他の質問を追加
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion(question) {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `<h2>${question.question}</h2>`;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.onclick = function () {
        score += answer.points;
        nextQuestion();
      };
      quizDiv.appendChild(button);
    });
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      showQuestion(questions[currentQuestion]);
      currentQuestion++;
    } else {
      document.getElementById("resultButton").style.display = "block";
    }
  }
  
  function showResult() {
    const quizDiv = document.getElementById("quiz");
    let resultText = "";
    if (score <= 5) {
      resultText = "あなたは犬ではありません。";
      } else if (score <= 10) {
        resultText = "あなたは犬の可能性があります。";
      } else if (score <= 16) {
        resultText = "あなたは犬の可能性が高いです！";
      } else if (score <= 24) {
        resultText = "あなたは犬です！";
      } else {
        resultText = "あなたは犬確定です！すごい！！";
      }
    
      quizDiv.innerHTML = `<h2>診断結果: ${resultText}</h2>`;
    }
    
    nextQuestion();
