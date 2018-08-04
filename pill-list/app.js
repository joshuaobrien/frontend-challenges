const pillList = document.querySelector('.pill-list');
const pillInput = document.querySelector('#pill-input');

loadEventListeners();

function loadEventListeners() {
    pillInput.addEventListener('keydown', processInputKeydown)
}

function processInputKeydown(e) {
    switch(e.code) {
        case 'Space':
            addItem(e);
            break;
        case 'Enter':
            addItem(e);
            break;
        case 'Backspace':
            deleteMostRecentItem(e);
            break;
    }
}

function deleteMostRecentItem(e) {
    if (pillInput.value !== '') {
        return;
    }
    
    const pills = pillList.getElementsByClassName('pill');

    if (pills.length > 0) {
        pills[pills.length - 1].remove();
    }
}

function addItem(e) {
    if (!isValidKey(e) || pillInput.value === '') {
        console.log(e.code === 'Space');
        return;
    }

    const pill = document.querySelector('#pill-item');
    const pillClone = document.importNode(pill.content, true);

    const pillEmail = pillClone.querySelector('.pill-email');
    pillEmail.innerText = pillInput.value;

    const pillDelete = pillClone.querySelector('.pill-delete');
    pillDelete.innerText = '🗙';

    pillList.insertBefore(pillClone, pillInput);

    pillInput.value = '';

    e.preventDefault();
}

function isValidKey(e) {
    return e.code === 'Space' || e.code === 'Enter';
}