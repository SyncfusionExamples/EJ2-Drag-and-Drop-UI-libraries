import { Draggable, Droppable, DropEventArgs } from '@syncfusion/ej2-base';

let draggable: Draggable = new Draggable(document.getElementById('element1'), {
    clone: false
});
let droppable: Droppable = new Droppable(document.getElementById('droppable'), {
    drop: (e: DropEventArgs) => {
        e.droppedElement.querySelector('.drag-text').textContent = 'Dropped';
    }
});