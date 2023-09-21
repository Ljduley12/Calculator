document.addEventListener("DOMContentLoaded", function () {
    const solveButton = document.getElementById("solveButton");
    const problemInput = document.getElementById("problemInput");
    const solutionDiv = document.getElementById("solution");
    const conversationArea = document.getElementById("conversationArea");

    solveButton.addEventListener("click", function () {
        const problem = problemInput.value;
        const solution = solveWordProblem(problem);
        solutionDiv.textContent = `Solution: ${solution}`;
        addQuestionToConversation(problem);
        addAnswerToConversation(solution);
    });

    function solveWordProblem(problem) {
        // Convert problem to lowercase for case-insensitive matching
        const problemLower = problem.toLowerCase();

        if (problemLower.includes("sum") || problemLower.includes("addition")) {
            return performOperation(problem, "+");
        } else if (problemLower.includes("difference") || problemLower.includes("subtraction")) {
            return performOperation(problem, "-");
        } else if (problemLower.includes("product") || problemLower.includes("multiply")) {
            return performOperation(problem, "*");
        } else if (problemLower.includes("division") || problemLower.includes("divide")) {
            return performOperation(problem, "/");
        } else {
            return "Unable to solve. Please provide a valid word problem.";
        }
    }

    function performOperation(problem, operator) {
        // Use regular expressions to extract numbers and the operator
        const regex = new RegExp(`(-?\\d+\\.?\\d*)\\s*${operator}\\s*(-?\\d+\\.?\\d*)`);
        const match = problem.match(regex);

        if (match && match.length === 3) {
            const num1 = parseFloat(match[1]);
            const num2 = parseFloat(match[2]);

            switch (operator) {
                case "+":
                    return num1 + num2;
                case "-":
                    return num1 - num2;
                case "*":
                    return num1 * num2;
                case "/":
                    if (num2 === 0) {
                        return "Division by zero is not allowed.";
                    }
                    return num1 / num2;
            }
        }

        return "Unable to solve. Please provide a valid word problem.";
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
