$(document).ready(function() {
    let s = 200, i = 0, colors = ['red', 'green', 'blue'];
    const $b = $('#balloon'); 

    function update() {
        $b.css({
            'width': s + 'px',
            'height': s + 'px',
            'background-color': colors[i]
        });
    }

    $b.click(function() {
        s += 10;
        i = (i + 1) % 3;
        if (s > 420) { 
            s = 200; 
            i = 0; 
        }
        update();
    });

    $b.mouseleave(function() {
        if (s > 200) s -= 5;
        i = (i - 1 + 3) % 3;
        update();
    });
});