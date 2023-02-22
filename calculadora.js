const res = document.querySelector("p.resposta");

function calcular() {
    res.textContent = eval(res.textContent);
}

function funcionalidades(param) {
    if (param == 'AC') {
        res.textContent = '0';
    }

    if (param == 'porc') {
        res.textContent = res.textContent + '%';
    }
    
    if (param == 'pot') {
        res.textContent = res.textContent + '**';
    }

    if (param == 'soma') {
        res.textContent = res.textContent + '+';
    }
    
    if (param == 'sub') {
        res.textContent = res.textContent + '-';
    }
    
    if (param == 'mult') {
        res.textContent = res.textContent + '*';
    }
    
    if (param == 'div') {
        res.textContent = res.textContent + '/';
    }

    if (param == 'point') {
        res.textContent = res.textContent + '.';
    }

    if (param == 'del') {
        if (res.textContent.length > 1) {
            res.textContent = res.textContent.slice(0, -1);
        }else {
            res.textContent = res.textContent.replace(/^\d/gi, '0')
        }
    }

    if (param == '0') {
        if (res.textContent == '0') {
            res.textContent = '0';
        }else {
            res.textContent = res.textContent + '0';
        }
    }

    if (param == '1') {
        if (res.textContent == '0') {
            res.textContent = '1';
        }else {
            res.textContent = res.textContent + '1';
        }
    }

    if (param == '2') {
        if (res.textContent == '0') {
            res.textContent = '2';
        }else {
            res.textContent = res.textContent + '2';
        }
    }

    if (param == '3') {
        if (res.textContent == '0') {
            res.textContent = '3';
        }else {
            res.textContent = res.textContent + '3';
        }
    }

    if (param == '4') {
        if (res.textContent == '0') {
            res.textContent = '4';
        }else {
            res.textContent = res.textContent + '4';
        }
    }

    if (param == '5') {
        if (res.textContent == '0') {
            res.textContent = '5';
        }else {
            res.textContent = res.textContent + '5';
        }
    }

    if (param == '6') {
        if (res.textContent == '0') {
            res.textContent = '6';
        }else {
            res.textContent = res.textContent + '6';
        }
    }

    if (param == '7') {
        if (res.textContent == '0') {
            res.textContent = '7';
        }else {
            res.textContent = res.textContent + '7';
        }
    }

    if (param == '8') {
        if (res.textContent == '0') {
            res.textContent = '8';
        }else {
            res.textContent = res.textContent + '8';
        }
    }

    if (param == '9') {
        if (res.textContent == '0') {
            res.textContent = '9';
        }else {
            res.textContent = res.textContent + '9';
        }
    }
}

