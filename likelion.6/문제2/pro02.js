document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    if (name) {
        var greeting = "Hello, " + name;
        document.getElementById("greetingText").innerText = greeting;
        document.getElementById("nameForm").style.display = 'none';
    } else {
        alert("Please enter your name!");
    }
});