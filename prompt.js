function user_input() {
    let input1 = prompt("Enter your name: ")
    let input2 = prompt("Enter your surname: ")
    if (input1 != null && input2 != null) {
    document.getElementById("out1").innerHTML = "Hello, " + input1 + " " + input2 + "!"
}
}
