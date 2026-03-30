function calculateAttendance() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;

    let percentage = (attended / total) * 100;
    let status = "";

    if (percentage >= 75) {
        status = "Good";
    } else if (percentage >= 50) {
        status = "Average";
    } else {
        status = "Low";
    }

    document.getElementById("result").innerHTML =
        "Attendance: " + percentage.toFixed(2) + "% - " + status;
}
