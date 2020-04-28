//----------------------------------------
// preparationを非表示にする関数
//----------------------------------------
const hidePreparation = () => {
    const preparationElem = document.getElementById('preparation');
    preparationElem.style.display = 'none';
}

//----------------------------------------
// quizを非表示にする関数
//----------------------------------------
const hideQuiz = () => {
    const quizElem = document.getElementById('quiz');
    quizElem.style.display = 'none';
}

//----------------------------------------
// resultを非表示にする関数
//----------------------------------------
const hideResult = () => {
    const resultElem = document.getElementById(`result`);
    resultElem.style.display = 'none';
}

//----------------------------------------
// preparationを表示する関数
//----------------------------------------
const displayPreparation = () => {
    //preparation要素の表示
    const preparationElem = document.getElementById('preparation');
    preparationElem.style.display = '';

    //それ以外を非表示
    hideQuiz();
    hideResult();
}

//----------------------------------------
// quizを表示する関数
//----------------------------------------
const displayQuiz = (quizInstance, quizNum) => {
    //quiz要素の表示
    const quizElem = document.getElementById('quiz');
    quizElem.style.display = '';

    //それ以外を非表示
    hidePreparation();
    hideResult();

    //要素を取得
    const titleElem = document.getElementById('title');
    const categoryElem = document.getElementById('category');
    const difficultyElem = document.getElementById('difficulty');
    const questionElem = document.getElementById('question');
    const answersElem = document.getElementById('answers');

    console.log(quizInstance);
    console.log(quizNum);
    //タイトルをセット
    titleElem.innerHTML = quizNum;
    //カテゴリーをセット
    categoryElem.innerHTML = quizInstance.getCategory(quizNum);
    //難易度をセット
    difficultyElem.innerHTML = quizInstance.getDifficulty(quizNum);
    //問題文をセット
    questionElem.innerHTML = quizInstance.getQuestion(quizNum);

    //解答選択肢をセット
    answersElem.textContent = '';
    const answers = quizInstance.getAnswers(quizNum);
    answers.forEach(answer => {
        const answerElem = document.createElement('p');

        //解答ボタンの生成
        const answerBtn = document.createElement('button');
        answerBtn.innerHTML = answer;
        answerBtn.addEventListener('click', () => {
            quizInstance.countCorrectAnswersNum(quizNum, answer);

            const numOfQuiz = quizInstance.getNumOfQuiz();
            if (quizNum === numOfQuiz) {
                displayResult(quizInstance.getCorrectAnswersNum());
            }
            else {
                displayQuiz(quizInstance, quizNum + 1);
            }
        });

        //要素に追加
        answerElem.appendChild(answerBtn);
        answersElem.appendChild(answerElem);
    });
}

//----------------------------------------
// resultを表示する関数
//----------------------------------------
const displayResult = correctAnswersNum => {
    //result要素を表示
    const resultElem = document.getElementById(`result`);
    resultElem.style.display = '';

    //それ以外を非表示
    hidePreparation();
    hideQuiz();

    //正答数をセット
    const correctAnswersNumElem = document.getElementById('correct-answers-num');
    correctAnswersNumElem.innerHTML = correctAnswersNum;
}