m = 0;
var y;

function start() {
    y = setInterval(run, 100);

    function run() {
        if (m == 1650) {
            clearInterval(y);
            m = 0;
        } else {
            m += 10;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';

        }
    }
}

function stop() {
    clearInterval(y);
}