
const form = document.getElementById("survey-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("number").value;
    const role = document.getElementById("dropdown").value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');

    if (name === "" || email === "" || role === "" || !satisfaction) {
        alert("Please fill in all required fields.");
        return;
    }

    if (age !== "" && (age < 16 || age > 60)) {
        alert("Please enter an age between 16 and 60.");
        return;
    }

    const improvements = document.querySelectorAll(
        'input[name="improvements"]:checked'
    );

    const selectedImprovements = [];

    improvements.forEach(function(item) {
        selectedImprovements.push(item.value);
    });

    alert("Thank you, " + name + "! Your survey has been submitted successfully.");

    form.reset();
});
