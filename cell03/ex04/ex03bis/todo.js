const setCookie = (n, v) => document.cookie = `${n}=${encodeURIComponent(JSON.stringify(v))};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
const getCookie = (n) => {
    let m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)'));
    return m ? JSON.parse(decodeURIComponent(m[2])) : [];
}

$(document).ready(function() {
    const oldTasks = getCookie("todo");
    for (let i = oldTasks.length - 1; i >= 0; i--) {
        addTask(oldTasks[i], true);
    }
    
    $('#newBtn').click(function() {
        let t = prompt("New Task:");
        if (t && t.trim()) {
            addTask(t.trim(), true);
            save();
        }
    });

    function addTask(text, isNew) {
        let $div = $('<div>').text(text);
        
        $div.click(function() {
            if (confirm("Remove?")) {
                $(this).remove(); 
                save();   
            }
        });

        const $list = $('#ft_list');
        if (isNew) {
            $list.prepend($div);
        } else {
            $list.append($div);
        }
    }

    function save() {
        let tasks = $('#ft_list').children().map(function() {
            return $(this).text();
        }).get(); 
        
        setCookie("todo", tasks);
    }
});