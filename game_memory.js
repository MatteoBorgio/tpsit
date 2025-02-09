function getRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const colors_index = Math.floor(Math.random() * colors.length); 
    let color = colors[colors_index];
    return color;
}

function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = getRandomColor();
}
