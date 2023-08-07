document.addEventListener("DOMContentLoaded", function () {
    const solveButton = document.getElementById("solveButton");
    const problemInput = document.getElementById("problemInput");
    const solutionDiv = document.getElementById("solution");

    solveButton.addEventListener("click", function () {
        const problem = problemInput.value;
        const solution = solveMathProblem(problem);
        solutionDiv.textContent = `Solution: ${solution}`;
    });

    function solveMathProblem(problem) {
        // You can implement your own math problem solver logic here
        // For this example, let's just evaluate the math expression using JavaScript's built-in eval function
        try {
            return eval(problem);
        } catch (error) {
            return "Invalid input or problem";
        }
    }
});
