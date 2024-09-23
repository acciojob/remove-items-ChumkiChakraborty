//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', function() {
    const selectElement = document.getElementById('colorSelect');
    const selectedValue = selectElement.value;

    // Remove the selected option from the dropdown
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.remove(i);
            break; // Exit loop after removing
        }
    }
});
