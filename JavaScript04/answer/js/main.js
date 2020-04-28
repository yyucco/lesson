(() => {
    //準備画面を表示
    displayPreparation();

    //クイズデータの読み込み
    fetch(`https://opentdb.com/api.php?amount=10`)
        .then(res => res.json())
        .then(quizData => {
            //インスタンス化
            const quiz = new Quiz(quizData);

            //クイズの表示
            displayQuiz(quiz, 1);
        })
})();











