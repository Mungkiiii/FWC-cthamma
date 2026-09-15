$(document).ready(function() {
    function isValidNumber(str) {
        return /^\d+$/.test(str.trim());
    }

    function calculate() {
        const leftStr = $('#left-op').val();
        const rightStr = $('#right-op').val();
        const op = $('#operator').val();

        if (!isValidNumber(leftStr) || !isValidNumber(rightStr)) {
            alert('Error :(');
            return;
        }

        const left = parseInt(leftStr, 10);
        const right = parseInt(rightStr, 10);

        if ((op === '/' || op === '%') && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (op) {
            case '+': result = left + right; break;
            case '-': result = left - right; break;
            case '*': result = left * right; break;
            case '/': result = left / right; break;
            case '%': result = left % right; break;
        }

        alert(result);
        console.log(result);
    }

    $('#btn-submit').click(calculate);

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});