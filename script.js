    // Script Marca do Veículo
    var select = document.getElementById("car_brand");

    // Ordena Ordem Alfabetica
    var options = Array.from(select.options);
    options.sort(function(a, b) {
        return a.text.localeCompare(b.text);
    });

    // Clear the select element
    select.innerHTML = "";

    // Add the sorted options back to the select element
    options.forEach(function(option) {
        select.appendChild(option);
    });
    // Obtenha referências para os elementos de seleção
