# parallax-animation-effect
3D dynamic parallax animation effect on a travelo website

### File: index.html

HTML Updates::
GSAP (GreenSock Animation Platform) to be included before the custom "app.js" file to make sure library is properly loaded for use in "app.js". The custom javascript file, "app.js" is used to animate the parallax and reveal the hidden elements using GSAP.

1. Parallax Data Attributes
All your images are using "data-speedx", "data-speedy", "data-speedz", and "data-rotation" attributes, for the parallax effect. The "app.js" correctly reads and applies these data attributes to the images to achieve the desired movement.

### File: styles.css

CSS Considerations::
Parallax effects often require some "position: fixed" or "position: absolute" on the images and careful manipulation of "z-index" for layering.

CSS Updates::
Calculate width and top positioning for each image based on viewport size, which should work for most screen sizes. However if the images aren't loading as expected or if the effect feels off, check the actual sizes of the images. Sometimes, issues arise if the aspect ratio of the images doesn't align well with the calculations made for "width" and "top" positioning.

1. Parallax Layering
All the images with classes like ".parallax" are using "position: absolute" and have "z-index" values to control the layering, to achieve the parallax effects. Note that, these images are absolutely positioned relative to their nearest positioned ancestor (in this case <main> element) and the z-index will allow them to layer on top of each other properly.

2. Sun Rays and Black Shadow
The elements with class of "sun-rays" and "black-shadow" are set to "z-index: 19" and "z-index: 20" respectively, which means they will appear over the parallax images. However, their positions are hardcoded to the top-right and bottom-right corners of the viewport.

3. Parallax Transition
The ".parallax" class has a "transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);" property, which suggests that when these elements move, there will be a smooth transition.

### File: app.js

1. Parallax Movement
Effectively applying custom data-* attributes (speedx, speedy, and speedz) to control how each element moves in response to mouse movement. The movement is a combination of translateX, translateY, and translateZ, which should give a dynamic 3D parallax effect.

2. Event Listener for "mousemove"
The event listener is used to track the mouse position and update the "x_axis_val", "y_axis_val", and "z_axis_val" values. This is the core of the parallax effect.





