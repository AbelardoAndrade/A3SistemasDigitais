document.addEventListener('DOMContentLoaded', () => {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const inputC = document.getElementById('inputC');
    const statusText = document.getElementById('statusText');
    const statusCircle = document.querySelector('#gateStatus .status-circle');
    const statusSvgText = document.querySelector('#gateStatus .status-text');
    const tableBodyRows = document.querySelectorAll('#truthTable tbody tr'); // Get all rows in the table body

    // Function to calculate the output S based on inputs A, B, C
    function calculateOutput(a, b, c) {
        // Based on the simplified expression: S = BC + A(B XOR C)
        // In boolean logic: S = (B AND C) OR (A AND (B XOR C))
        // XOR is true if B is different from C (B !== C)
        return (b && c) || (a && (b !== c));
    }

    // Function to update the display based on the output and highlight the table row
    function updateDisplay() {
        const a = inputA.checked;
        const b = inputB.checked;
        const c = inputC.checked;

        const outputS = calculateOutput(a, b, c);

        // Update text status
        if (outputS) {
            statusText.textContent = 'Cancela: ABERTA';
            statusText.classList.remove('text-danger');
            statusText.classList.add('text-success');
        } else {
            statusText.textContent = 'Cancela: FECHADA';
            statusText.classList.remove('text-success');
            statusText.classList.add('text-danger');
        }

        // Update SVG indicator color and text
        statusCircle.classList.remove('open', 'closed');
        statusSvgText.classList.remove('open-text', 'closed-text');

        if (outputS) {
            statusCircle.classList.add('open');
            statusSvgText.classList.add('open-text');
            statusSvgText.textContent = 'ABERTA'; // Use Portuguese text in SVG
        } else {
             statusCircle.classList.add('closed');
             statusSvgText.classList.add('closed-text');
             statusSvgText.textContent = 'FECHADA'; // Use Portuguese text in SVG
        }

        // Update truth table highlighting
        const currentState = `${a ? 1 : 0}${b ? 1 : 0}${c ? 1 : 0}`; // Create string like "011" or "100"

        tableBodyRows.forEach(row => {
            const rowData = `${row.children[0].textContent}${row.children[1].textContent}${row.children[2].textContent}`; // Get A, B, C text from the first 3 cells
            row.classList.remove('table-info', 'current-row-highlight'); // Remove previous highlight classes

            if (rowData === currentState) {
                row.classList.add('table-info', 'current-row-highlight'); // Add highlight class to the matching row
            }
        });
    }

    // Add event listeners to the switches
    inputA.addEventListener('change', updateDisplay);
    inputB.addEventListener('change', updateDisplay);
    inputC.addEventListener('change', updateDisplay);

    // Initial display update
    updateDisplay();

    // Show summary modal on page load
    const summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'));
    summaryModal.show();
});