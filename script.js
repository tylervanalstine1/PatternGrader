function gradePattern() {
    const measurements = {
        bust: parseFloat(document.getElementById('bust').value),
        waist: parseFloat(document.getElementById('waist').value),
        hip: parseFloat(document.getElementById('hip').value),
        sleeve: parseFloat(document.getElementById('sleeve').value),
        neck: parseFloat(document.getElementById('neck').value)
    };

    const factor = parseFloat(document.getElementById('factor').value) / 100 + 1;

    const newMeasurements = {};
    for (const key in measurements) {
        newMeasurements[key] = (measurements[key] * factor).toFixed(2);
    }

    const tbody = document.querySelector('#result-table tbody');
    tbody.innerHTML = '';
    for (const key in newMeasurements) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${key.charAt(0).toUpperCase() + key.slice(1)}</td><td>${newMeasurements[key]}</td>`;
        tbody.appendChild(row);
    }
}
