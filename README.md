# EJ2 Drag and Drop UI libraries

The seed contains Essential JS 2 drag and drop ui libraries for preview and all common settings are preconfigured.

# Drag and Drop

Drag and Drop is supported through two libraries. Those are [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/). Draggable makes DOM to be dragged using mouse or touch gestures and Droppable mark required DOM as droppable zone.

## Installing

We can get all the Essential JS 2 components in a single npm package [`ej2-base`](https://www.npmjs.com/package/@syncfusion/ej2-base).

We already configure the required packages in the `package.json` file.

You can run the below command to install all dependent packages related to this seed project.

```
npm install
```

## Initializing draggable

You can make any element draggable by passing the element to Draggable constructor. Refer the following code snippet to enable draggable for DOM element.

 ```typescript
 import {Draggable} from  '@syncfusion/ej2-base';

 let dragElement: HTMLElement = document.getElementById('element1');
 let draggable:Draggable = new Draggable(dragElement,{clone: false});
 ```

## Creating droppable zone

You can convert any DOM element as a droppable zone, which accepts the draggable elements. Refer the following code snippet to enable droppable zone.

 ```typescript
 import { Droppable} from  '@syncfusion/ej2-base';

 let droppable: Droppable = new Droppable(document.getElementById('droppable'));
 ```

## Defining drop action

To define drop action set [`drop`](../api/base/droppable#drop) callback function during droppable object creation. You can get details of dropped element through dropped element property in event argument. Refer the following code snippet to use basic drag and drop action.

 ```typescript
 import { Draggable, Droppable, DropEventArgs } from '@syncfusion/ej2-base';

let draggable: Draggable = new Draggable(document.getElementById('element1'), {
    clone: false
});
let droppable: Droppable = new Droppable(document.getElementById('droppable'), {
    drop: (e: DropEventArgs) => {
        e.droppedElement.querySelector('.drag-text').textContent = 'Dropped';
    }
});
 ```

## Running

The application is configured with `browser-sync`, so it will serve the web application in your default browser.

We used `webpack` to bundle the source file, before running the application in browser.

You can use the below npm script to run the web application.

```
npm run start
```

## Resources

You can also refer the below resources to know more details about Essential JS 2 components.

* [Pure JS Demos](http://ej2.syncfusion.com/demos/)
* [Pure JS Documentation](https://ej2.syncfusion.com/documentation/common/drag-and-drop/)
