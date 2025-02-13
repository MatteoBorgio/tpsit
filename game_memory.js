let illuminated_buttons = [];
function illuminate_button() {
    const buttons = document.getElementsByClassName("btn");
    const random_index = Math.floor(Math.random() * buttons.length);
    const button = buttons[random_index];
    for (let btn of buttons) {
        btn.style.backgroundColor = ""; 
    }
    button.style.backgroundColor = "lightblue";
    if (!illuminated_buttons.includes(button)) {
        illuminated_buttons.push(button);
    }
}

function reset_buttons() {
    const buttons = document.getElementsByClassName("btn");
    for (let btn of buttons) {
        btn.style.backgroundColor = ""; 
    }
}

function gradual_illuminations(count) {
    illuminated_buttons = []; 
    let illuminatedCount = 0;
    const interval = setInterval(() => {
        if (illuminatedCount < count) {
            illuminate_button();
            illuminatedCount++;
        } else {
            reset_buttons(); 
            clearInterval(interval);
        }
    }, 1000);
}


