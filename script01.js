// document.addEventListener('DOMContentLoaded', function() {
//     const addButton = document.getElementById('plus');
//     const deleteButton = document.getElementById('delet');
//     const listBox = document.getElementById('list-box');
//     const doneCount = document.getElementById('done');
//     const inputField = document.createElement('input');
//     const items = [];

//     addButton.addEventListener('click', function() {
//         inputField.type = 'text';
//         inputField.placeholder = '할 일을 입력하세요';
//         listBox.appendChild(inputField);
//         inputField.focus();

//         inputField.addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 const task = inputField.value.trim();
//                 if (task !== '') {
//                     items.push(task);
//                     updateList();
//                     inputField.value = '';
//                 }
//             }
//         });
//     });

//     deleteButton.addEventListener('click', function() {
//         if (items.length > 0) {
//             items.pop();
//             updateList();
//         }
//     });

//     function updateList() {
//         listBox.innerHTML = '';
//         items.forEach(function(item, index) {
//             const listItem = document.createElement('p');
//             listItem.textContent = `${index + 1}. ${item}`;
//             listBox.appendChild(listItem);
//         });
//         doneCount.textContent = items.length;
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('plus');
    const deleteButton = document.getElementById('delet');
    const listBox = document.getElementById('list-box');
    const doneCount = document.getElementById('done');

    addButton.addEventListener('click', function() {
        console.log('Add button clicked'); // 디버깅용 메시지
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = '할 일을 입력하세요';
        listBox.appendChild(inputField);
        inputField.focus();

        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const task = inputField.value.trim();
                if (task !== '') {
                    const listItem = document.createElement('p');
                    listItem.textContent = task;
                    listBox.appendChild(listItem);
                    doneCount.textContent = listBox.querySelectorAll('p').length;
                    inputField.remove();
                }
            }
        });
    });

    deleteButton.addEventListener('click', function() {
        console.log('Delete button clicked'); // 디버깅용 메시지
        const lastItem = listBox.querySelector('p:last-child');
        if (lastItem) {
            lastItem.remove();
            doneCount.textContent = listBox.querySelectorAll('p').length;
        }
    });
});
