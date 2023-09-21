document.addEventListener("DOMContentLoaded", function () {
    const solveButton = document.getElementById("solveButton");
    const problemInput = document.getElementById("problemInput");
    const solutionDiv = document.getElementById("solution");
    const conversationArea = document.getElementById("conversationArea");

    solveButton.addEventListener("click", function () {
        const input = problemInput.value;
        if (input.endsWith("?")) {
            // If the input ends with a question mark, treat it as a question.
            addQuestionToConversation(input);
            const answer = answerQuestion(input);
            addAnswerToConversation(answer);
        } else {
            // Otherwise, treat it as a math problem.
            addQuestionToConversation(input);
            const solution = solveMathProblem(input);
            addAnswerToConversation(`Solution: ${solution}`);
        }
    });

    function answerQuestion(question) {
        // Simple predefined set of responses for sample questions.
        const questionLower = question.toLowerCase();
        if (questionLower.includes("who") && questionLower.includes("you")) {
            return "I am a bot that can answer questions and solve math problems.";
        } else if (questionLower.includes("how") && questionLower.includes("are") && questionLower.includes("you")) {
            return "I'm just a computer program, so I don't have feelings, but I'm here to help!";
        } else {
            return "I don't know the answer to that question.";
        }
    }

    function solveMathProblem(problem) {
        try {
            // Use JavaScript's built-in eval function to solve math problems.
            const solution = eval(problem);
            if (isNaN(solution)) {
                return "Invalid math expression.";
            }
            return solution;
        } catch (error) {
            return "Error: " + error.message;
        }
    }

    function addQuestionToConversation(question) {
        const questionMessage = document.createElement("div");
        questionMessage.classList.add("message", "question");
        questionMessage.textContent = `You: ${question}`;
        conversationArea.appendChild(questionMessage);
    }

    function addAnswerToConversation(answer) {
        const answerMessage = document.createElement("div");
        answerMessage.classList.add("message", "answer");
        answerMessage.textContent = `Bot: ${answer}`;
        conversationArea.appendChild(answerMessage);
    }
});
