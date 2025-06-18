addEventListener('DOMContentLoaded' , () => {
    const btn = document.createElemnt('button');
    btn.textContent = 'Add Item' ;

    document.body.appendChild(btn);

    btn.addEventListener('Click,' () => {
        console.log('Button clicked! ')
    });

    const list = document.createElement('ul');
    document.body.appendChild(list);

    const entry = document.createElement('li');
    entry.textContent 
});
