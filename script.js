function addMeasurement() {
    const container = document.getElementById('measurements-container');
    const div = document.createElement('div');
    div.className = 'measurement';
    div.innerHTML = `
        <select class="m-name" onchange="toggleCustomInput(this)">
            <option value="">Select measurement type...</option>
            <option value="Bust/Chest">Bust/Chest</option>
            <option value="Waist">Waist</option>
            <option value="Hip">Hip</option>
            <option value="Shoulder Width">Shoulder Width</option>
            <option value="Sleeve Length">Sleeve Length</option>
            <option value="Arm Length">Arm Length</option>
            <option value="Neck">Neck</option>
            <option value="Inseam">Inseam</option>
            <option value="Outseam">Outseam</option>
            <option value="Rise">Rise</option>
            <option value="Thigh">Thigh</option>
            <option value="Custom">Custom (type below)</option>
        </select>
        <input type="text" placeholder="Custom measurement name" class="m-custom" style="display: none;">
        <input type="number" placeholder="Value" class="m-value">
        <button type="button" class="remove-btn" onclick="removeMeasurement(this)" title="Remove measurement">×</button>
    `;
    container.appendChild(div);
}

function toggleCustomInput(select) {
    const customInput = select.parentElement.querySelector('.m-custom');
    if (select.value === 'Custom') {
        customInput.style.display = 'block';
        customInput.focus();
    } else {
        customInput.style.display = 'none';
        customInput.value = '';
    }
}

function removeMeasurement(button) {
    button.parentElement.remove();
}

function gradePattern() {
    const nameSelects = document.querySelectorAll('.m-name');
    const customInputs = document.querySelectorAll('.m-custom');
    const values = document.querySelectorAll('.m-value');
    const factor = parseFloat(document.getElementById('factor').value) / 100 + 1;

    const newMeasurements = {};
    for (let i = 0; i < nameSelects.length; i++) {
        let name;
        if (nameSelects[i].value === 'Custom') {
            name = customInputs[i].value.trim();
        } else {
            name = nameSelects[i].value.trim();
        }
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

