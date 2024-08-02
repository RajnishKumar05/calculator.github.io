document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            handleButtonClick(value);
            gsap.fromTo(button, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
        });
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            expression = '';
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = 'Error';
            }
        } else {
            expression += value;
        }
        display.innerText = expression;
    }
});
