
function startGeneration() {
    intervalID = setInterval(loop, 1000);
    function loop() {
        const node = document.getElementById("section");
        const clone = node.cloneNode(true);
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        node.style.backgroundColor = randomColor;
        document.body.appendChild(clone);   
    }
}

function stopGeneration() {
    clearInterval(intervalID);
}

function remove(element){
    element.parentElement.remove();
}