const parallax_elems = document.querySelectorAll(".parallax");

let x_axis_val = 0;
let y_axis_val = 0;

// how is the cursor from the center of the window tab
window.addEventListener("mousemove", (evt) => {
    //horizontal
    x_axis_val = evt.clientX - (window.innerWidth / 2);

    //vertical
    y_axis_val = evt.clientY - (window.innerHeight / 2);

    parallax_elems.forEach((elem) => {

        //each "elem" layer has its own horizontal speed value (custom attribute) specified on the html element
        let speed_x = elem.dataset.speedx;

        //each "elem" layer has its own vertical speed calue (custom attribute) specified on the html element
        let speed_y = elem.dataset.speedy;

        //each "elem" layer has its own depth speed calue (custom attribute) specified on the html element
        let speed_z = elem.dataset.speedz;

        //css left value of the "elem" layer is less than half of the tab width,
        // if "true" layer is on the left part of the page
        // else layer is on the right part of the page
        let is_in_left = parseFloat(getComputedStyle(elem).left) < (window.innerWidth / 2) ? 1 : -1;

        //depth
        //layers should move towards us (if mouse moves to right) or away from us (if mouse moves  to left)
        //multiplied by 0.1 to slow down
        let z_axis_val = (evt.clientX - parseFloat(getComputedStyle(elem).left)) * is_in_left * 0.1;



        elem.style.transform = `translateX(calc(-50% + ${-x_axis_val * speed_x}px)) translateY(calc(-50% + ${y_axis_val * speed_y}px)) perspective(2300px) translateZ(${z_axis_val * speed_z}px)`;

    });
});