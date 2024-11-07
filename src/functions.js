function display_json(url, elementid){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById(elementid).textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function display_xml(url, elementid){
fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById(elementid).textContent = data;
    })
    .catch(error => console.error('Error fetching JSON:', error));
}