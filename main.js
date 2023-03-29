function getRecords() {
    let tables = [...document.getElementsByClassName('tbl_product')];
    let headers = [...tables.splice(0, 1)[0].getElementsByTagName('th')].map(header => header.innerText);
    let records = tables.map(table => [...table.getElementsByTagName('tr')]).flat().map(row => {
        let cols = [...row.getElementsByTagName('td')];
        let record = {};
        for (let i = 0; i < cols.length; ++i) {
            record[headers[i]] = cols[i].innerText;
        }
        return record;
    });
    return [headers, records];
}

function downloadString(string, type, filename) {
    let blob = new Blob([string], { type });
    let a = document.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [type, a.download, a.href].join(':');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
        URL.revokeObjectURL(a.href);
    }, 1500);
}

function downloadRecords() {
    let tables = [...document.getElementsByClassName('tbl_product')];
    let headers = [...tables.splice(0, 1)[0].getElementsByTagName('th')].map(header => header.innerText);
    let records = tables.map(table => [...table.getElementsByTagName('tr')]).flat().map(row => [...row.getElementsByTagName('td')].map(col => col.innerText));
    let string = headers.join(',');
    string = `${string}\n${records.map(record => record.join(',')).join('\n')}`
    downloadString(string, 'text/csv', 'records.csv');
}