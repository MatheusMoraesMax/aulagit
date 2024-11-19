let contador = 1;

function salvar(){
    let nome = document.getElementById('n').value;
    nome= nome + " " + document.getElementById('sn').value;
    let email = document.getElementById('e').value;
    let tbody = document.querySelector('table tbody');
    let linha = document.createElement('tr');
    let colid = document.createElement('td');
    let colnome = document.createElement('td');
    let colEmail = document.createElement('td');
    contador++;
    colid.innerHTML = contador;
    colnome.innerHTML = nome;
    colEmail.innerHTML = email;

    linha.appendChild(colid);
    linha.appendChild(colnome);
    linha.appendChild(colEmail);
    tbody.appendChild(linha);
}