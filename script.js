function calculateGrade(percentage) {
    // Check if input is a number
    if (typeof percentage !== "number" || isNaN(percentage)) {
        return "F";
    }

    // Round to nearest integer
    let score = Math.round(percentage);

    // If negative, return F
    if (score < 0) return "F";

    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Taking input from user
const percentage = parseFloat(prompt("Enter Percentage:"));
alert(calculateGrade(percentage));
