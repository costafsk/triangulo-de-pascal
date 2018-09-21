document.addEventListener('DOMContentLoaded', init());

function init() {
  let triangle = new Array(0);
  let line = new Array(0);

  const button = document.querySelector('.create');

  button.addEventListener('click', function(event) {
    event.preventDefault();

    const number = document.querySelector('input').value;

    for (let i=0; i<number; i++) {
      if (triangle.length === 0) {
        line.push(1);
      } else if (triangle.length === 1) {
        line = [1, 1];
      } else {
        line.push(1);
        for (let j=0; j<triangle.length -1; j++) {
          line.push(triangle[i-1][j] + triangle[i-1][j+1]);
        }
        line.push(1);
      }
      triangle.push(line);
      line = new Array(0);
    }
    createTriangle(triangle);
  });

  const createTriangle = function (lines) {
    let count = 1;
    const tbody = document.querySelector('tbody');
    for (const line of lines) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.style.backgroundColor = ' #ff5050';
      td.textContent = '#' + count;
      td.style.width = '1%';    
      tr.appendChild(td);
      for (const column of line) {
        const td = document.createElement('td');
        td.textContent = column;
        tr.appendChild(td);
      }
      count++;
      tbody.appendChild(tr)
    }
    const content = document.querySelector('.container');
    const buttonReload = document.createElement('button');
    const p = document.createElement('p');
    p.classList.add('text-white');
    p.textContent = 'Para gerar outro triangulo deve-se atualizar a página.';
    buttonReload.classList.add('btn', 'btn-outline-success', 'w-100', 'mt-1', 'mb-5');
    buttonReload.textContent = 'Atualizar página';

    content.appendChild(p);
    content.appendChild(buttonReload);

    buttonReload.addEventListener('click', function(event) {
      event.preventDefault();
      location.reload();
    });

  }
}
