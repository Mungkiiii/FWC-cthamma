function isValidNumber(str) {
    return /^\d+$/.test(str.trim());
}

function calculate() {
    const leftStr = document.getElementById('left-op').value;
    const rightStr = document.getElementById('right-op').value;
    const op = document.getElementById('operator').value;

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

document.getElementById('btn-submit').addEventListener('click', calculate);

setInterval(() => {
    alert('Please, use me...');
}, 30000);