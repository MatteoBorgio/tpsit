function getRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    colors_index = Math.round(Math.random() * colors.length)
    let color = colors[colors_index]
    return color;
}

function changeButtonColor() {
    const button = document.getElementById('myButton');
    button.style.backgroundColor = getRandomColor();
}
