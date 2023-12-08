document.getElementById('btnMisturar').addEventListener('click', function () {
    function tratarInput(arr, degraus) {
        arr = arr.toLowerCase();
        if (arr.length == 3) {
            var partes = arr.split('');
            for (var i = 0; i < arr.length; i++) {
                if (!~degraus.indexOf(arr[i])) {
                    alert('Formato errado!');
                    return false;
                }
            }
            arr = [partes[0], partes[0], partes[1], partes[1], partes[2], partes[2]].join('');
        } else if (arr.length == 6) {
            // Nada a fazer
        } else {
            alert('Formato errado!');
            return false;
        }
        return arr;
    }

    var degraus = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var cor1 = document.getElementById('cor1').value.replace('#', '');
    var cor2 = document.getElementById('cor2').value.replace('#', '');

    cor1 = tratarInput(cor1, degraus);
    cor2 = tratarInput(cor2, degraus);

    // realiza a mistura
    var mistura = [];
    for (var i = 0; i < 6; i += 2) {
        mistura[i] = Math.round((parseInt(cor1[i] + cor1[i + 1], 16) + parseInt(cor2[i] + cor2[i + 1], 16)) / 2);
        mistura[i] = (0x1000000 | mistura[i]).toString(16).substring(5);
    }

    mistura = '#' + mistura.join('');
    document.getElementById('cor_misturada').style.backgroundColor = mistura;
});