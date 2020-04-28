class Quiz {
    constructor(quizData) {
        this._quizzes = quizData.results;
        this._correctAnswersNum = 0;
    }

    getNumOfQuiz() {
        return this._quizzes.length;
    }

    getCategory(index) {
        return this._quizzes[index - 1].category;
    }

    getDifficulty(index) {
        return this._quizzes[index - 1].difficulty;
    }

    getQuestion(index) {
        return this._quizzes[index - 1].question;
    }

    getAnswers(index) {
        const correctAnswer = this._quizzes[index - 1].correct_answer;
        const incorrectAnswers = this._quizzes[index - 1].incorrect_answers;

        const answers = incorrectAnswers.slice();
        answers.push(correctAnswer);

        //answersをシャッフル
        for (let i = answers.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[rand]] = [answers[rand], answers[i]];
        }

        return answers;
    }

    countCorrectAnswersNum(index, selectedAnswer) {
        const correctAnswer = this._quizzes[index - 1].correct_answer;
        if (selectedAnswer === correctAnswer) this._correctAnswersNum++;
    }

    getCorrectAnswersNum() {
        return this._correctAnswersNum;
    }
}