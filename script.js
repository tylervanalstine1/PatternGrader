function addMeasurement() {
    const container = document.getElementById('measurements-container');
    const div = document.createElement('div');
    div.className = 'measurement';
    div.innerHTML = `
        <input type="text" placeholder="Measurement Name" class="m-name">
        <input type="number" placeholder="Value" class="m-value">
        <button type="button" onclick="removeMeasurement(this)">Remove</button>
    `;
    container.appendChild(div);
}

function removeMeasurement(button) {
    button.parentElement.remove();
}

function gradePattern() {
    const names = document.querySelectorAll('.m-name');
    const values = document.querySelectorAll('.m-value');
    const factor = parseFloat(document.getElementById('factor').value) / 100 + 1;

    const newMeasurements = {};
    for (let i = 0; i < names.length; i++) {
        const name = names[i].value.trim();
        const value = parseFloat(values[i].value);
        if (name && !isNaN(value)) {
            newMeasurements[name] = (value * factor).toFixed(2);
        }
    }

    const tbody = document.querySelector('#result-table tbody');
    tbody.innerHTML = '';
    for (const key in newMeasurements) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${newMeasurements[key]}</td>`;
        tbody.appendChild(row);
    }
}

