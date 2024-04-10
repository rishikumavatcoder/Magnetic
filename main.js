const container = document.body;
const totalBoxes = 300;
const boxes = [];

for (let i =1; i <= totalBoxes; i++){
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    boxes.push(box);
}

//Mousemove event to rotate divs towards cursor
document.addEventListener('mousemove', (event) => {
    const {clientX, clientY} = event;

    boxes.forEach((box) =>{
        const boxRect = box.getBoundingClientRect();
        const boxCenterX = boxRect.left + boxRect.width / 2;
        const boxCenterY = boxRect.top + boxRect.height / 2;

        const deltaX = clientX - boxCenterX;
        const deltaY = clientY - boxCenterY;

        const angle = Math.atan2(deltaY,deltaX) * (180 / Math.PI);

        box.style.tra
        box.style.transform = `rotate(${angle}deg)`; // Corrected line
    })
})