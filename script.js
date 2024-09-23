document.addEventListener('DOMContentLoaded', function() {
    const removeButton = document.getElementById('removeButton');
    
    if (removeButton) {
        removeButton.addEventListener('click', function() {
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
    } else {
        console.error('Remove button not found');
    }
});
