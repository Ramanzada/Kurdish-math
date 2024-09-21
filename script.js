function checkAnswer() {
    const answer = document.getElementById("answer").value;
    const response = document.getElementById("response");

    if (answer === "1") {
        response.textContent = "Her Biji!";
        response.style.color = "green";
    } else {
        response.textContent = "Qezalqort!";
        response.style.color = "red";
    }
}
