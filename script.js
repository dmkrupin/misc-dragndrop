const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragstart = (evt) => {
    evt.target.classList.add('hold');
    setTimeout(() => evt.target.classList.add('hide'), 0);
};
const dragend = (evt) => {
    evt.target.className = 'item';
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', (evt) => evt.preventDefault());
    placeholder.addEventListener('dragenter', (evt) => evt.target.classList.add('hovered'));
    placeholder.addEventListener('dragleave', (evt) => evt.target.classList.remove('hovered'));
    placeholder.addEventListener('drop', (evt) => {
        evt.target.append(item);
        evt.target.classList.remove('hovered');
    });
}

