// click.js
// __________________________________________________

// Variables


// Functions

const headerTooltip = () => {
    const tooltip = document.querySelector('.js--header-tooltip');
    const tooltipTriger = document.querySelector('.js--header-tooltip-triger');

    tooltipTriger.addEventListener('click', () => {
        tooltip.dataset.visibility == 'hidden' ? tooltip.dataset.visibility = 'visible' : tooltip.dataset.visibility = 'hidden';
    })
}

export default headerTooltip;