function plus() {
    var num1, num2;

    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    document.getElementById('answer').value = num1 + num2;
}

function minus() {
    var num1, num2;

    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    document.getElementById('answer').value = num1 - num2;
}

function mul() {
    var num1, num2;

    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    document.getElementById('answer').value = num1 * num2;
}

function division() {
    var num1, num2;

    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    document.getElementById('answer').value = num1 / num2;
}

function clearResult() {
    document.getElementById('num1').value = null;
    document.getElementById('num2').value = null;
    document.getElementById('answer').value = null;
    window.location.reload(true);
}

function showMore() {
    var clc_but = document.getElementById('calc-buttons');
    document.getElementById('second-num').parentNode.removeChild(document.getElementById('second-num'));

    var pow_but = document.createElement('button');
    pow_but.className = 'pow-but act-but';
    pow_but.innerHTML = '^2';
    pow_but.addEventListener("click", pow);

    var sqrt_but = document.createElement('button');
    sqrt_but.className = 'pow-but act-but';
    sqrt_but.innerHTML = 'sqrt';
    sqrt_but.addEventListener("click", sqrt);

    clc_but.appendChild(pow_but);
    clc_but.appendChild(sqrt_but);

}

function pow() {
    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    console.log(num1);
    document.getElementById('answer').value = Math.pow(num1, 2);
}

function sqrt() {
    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    console.log(num1);
    document.getElementById('answer').value = Math.sqrt(num1);
}