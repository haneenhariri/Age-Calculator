const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalc() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("dataInput").value);
    let month, birthDate, birthYear;
    let details = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();
    
    if (
        details.year > currentYear ||
        (details.year == currentYear && details.month > currentMonth) ||
        (details.year == currentYear && details.month == currentMonth && details.date > currentDate)
    ) {
        alert("not born yet");
        displayResult("-", "-", "-");
        return;
    }
    
    birthYear = currentYear - details.year;
    
    if (currentMonth >= details.month) {
        month = currentMonth - details.month;
    } else {
        birthYear--;
        month = 12 + currentMonth - details.month;
    }
    
    if (currentDate >= details.date) {
        birthDate = currentDate - details.date;
    } else {
        let daysInPreviousMonth = months[currentMonth - 2];
        birthDate = daysInPreviousMonth + currentDate - details.date;
        month--;
        if (month < 0) {
            month = 11;
            birthYear--;
        }
    }
    
    displayResult(birthDate, month, birthYear);
} 

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("day").textContent = bDate;
}
