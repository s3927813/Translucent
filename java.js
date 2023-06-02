//To make the clip move on mouseover
var pos = document.documentElement;
pos.addEventListener('mouseover', e => {
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
})






//super new to java so this is honestly just a heck ton of experimenting and following tutorials.
//relevant references and tutorials: 
// https://www.youtube.com/watch?v=b13NSWyQ0tw, 

//these are the drag javascript I tried to attach to the mask which did not end up working

//const mask = document.getElementById('');
    //let isDragging = false;
    //let startPosition = { x: 0, y: 0 };

    //mask.addEventListener('mousedown', startDrag);
    //mask.addEventListener('touchstart', startDrag);
    //document.addEventListener('mouseup', endDrag);
    //document.addEventListener('touchend', endDrag);
    //document.addEventListener('mousemove', drag);
    //document.addEventListener('touchmove', drag);

    //function startDrag(e) {
      //isDragging = true;
      //startPosition.x = e.clientX || e.touches[0].clientX;
      //startPosition.y = e.clientY || e.touches[0].clientY;
      //e.preventDefault();
    //}

    //function endDrag() {
      //isDragging = false;
    //}

    //function drag(e) {
      //if (!isDragging) return;
      //const currentPosition = {
        //x: e.clientX || e.touches[0].clientX,
        //y: e.clientY || e.touches[0].clientY
     // };
      //const deltaX = currentPosition.x - startPosition.x;
      //const deltaY = currentPosition.y - startPosition.y;
      //const maskRect = mask.getBoundingClientRect();
      //const newX = maskRect.left + deltaX;
      //const newY = maskRect.top + deltaY;
      //mask.style.left = `${newX}px`;
      //mask.style.top = `${newY}px`;
      //startPosition.x = currentPosition.x;
      //startPosition.y = currentPosition.y;
      //e.preventDefault();
    //}