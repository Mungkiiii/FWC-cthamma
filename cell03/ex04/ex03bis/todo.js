const setCookie = (n, v) => document.cookie = `${n}=${encodeURIComponent(JSON.stringify(v))};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
const getCookie = (n) => {
    let m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)'));
    return m ? JSON.parse(decodeURIComponent(m[2])) : [];
}
$(document).ready(function() {
    const oldTasks = getCookie("todo");
    $.each(oldTasks, function(index, text) {
        addTask(text, false);
    });  
    $('#newBtn').click(function() {
        let t = prompt("New Task:");
        if (t && t.trim()) {
            addTask(t, true);
            save();
        }
    });

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
    isNew ? $list.prepend($div) : $list.append($div);
}
function save() {
    let tasks = $('#ft_list').children().map(function() {
        return $(this).text();
    }).get(); 
    
    setCookie("todo", tasks);
}