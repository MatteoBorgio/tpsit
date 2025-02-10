function illuminate_button() {
    const buttons = document.getElementsByClassName("btn");
    const random_index = Math.floor(Math.random() * buttons.length);
    buttons[random_index].style.backgroundColor = "lightblue";
}

function gradual_illuminations() {
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length + 1; i++) {
        setInterval(illuminate_button, 1000); 
    }
}
gradual_illuminations();

