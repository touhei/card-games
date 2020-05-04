function init() {
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    
    context.fillRect(20, 40, 50, 100);

    context.strokeStyle = 'rgb(0, 0, 0)';
    context.fillStyle = 'rgb(255, 255, 255)';
}
