document.addEventListener("DOMContentLoaded", () => {
    const generateTableButton = document.getElementById('generateTable');
    const tableContainer = document.getElementById('tableContainer');
    const inputN = document.getElementById('n');

    generateTableButton.addEventListener('click', () => {
        const n = parseInt(inputN.value);
        const tableHtml = createPythagoreanTable(n);
        tableContainer.innerHTML = tableHtml;
    });

    function createPythagoreanTable(n) {
        var rows = [];
        
        for (let i = 1; i <= n; i++) {
            const row = [];
            for (let j = 1; j <= n; j++) {
                row.push(i*j);
            }
            rows.push(row);
        }

        var table = '<table border="1">\n';
        rows.forEach((row, index) => {
            table += `\t<tr>\n`;
            row.forEach(cell => {
                table += `\t\t<td>${cell}</td>\n`;
            });
            table += `\t</tr>\n`;
        });
        table += '</table>';
        return table;
    }
});

