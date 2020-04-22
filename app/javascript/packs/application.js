// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
window.onload = function(){
    function drag(x){
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        x.onmousedown = dragMouseDown;

    
        function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.movementX;
        pos4 = e.movementY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = Number(x.style.left.replace("px", "")) +e.movementX;
        pos2 = Number(x.style.top.replace("px", "")) + e.movementY;
        // set the element's new position:
        x.style.top = (pos2) + "px";
        x.style.position = "absolute";
        x.style.left = (pos1) + "px";
        }
    
        function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        }
    }


    const stickies = document.getElementsByClassName("sticky");
    for (t of stickies){
        console.log("dragging");
        t.addEventListener('mousedown', drag(this))
    }
}