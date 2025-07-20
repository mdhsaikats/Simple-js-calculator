document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        const value = this.textContent;

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});