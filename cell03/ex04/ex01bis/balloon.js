$(document).ready(function() {
    let s = 200, i = 0, colors = ['red', 'green', 'blue'];
    const $b = $('#balloon'); // ใช้ selector ของ jQuery

    function update() {
        // ใช้ .css() ในการปรับขนาดและสี
        $b.css({
            'width': s + 'px',
            'height': s + 'px',
            'background-color': colors[i]
        });
    }

    // Event เมื่อคลิกบอลลูน
    $b.click(function() {
        s += 10;
        i = (i + 1) % 3;
        if (s > 420) { 
            s = 200; 
            i = 0; 
        }
        update();
    });

    // Event เมื่อเมาส์ออกจากบอลลูน
    $b.mouseleave(function() {
        if (s > 200) s -= 5;
        i = (i - 1 + 3) % 3;
        update();
    });
});