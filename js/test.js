function init() {
    document.write("test001");

    var canvas = document.getElementById('game');
    
    if (canvas.getContext) {
        document.write("test002")
    }
}
