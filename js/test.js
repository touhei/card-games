function init() {
    var canvas = document.getElementById('game');
    
    if (canvas.getContext) {
        var context = canvas.getContext("2d");

        context.fillRect(50, 50, 100, 100);
    }
    else {
        alert("not canvas")
    }
}
