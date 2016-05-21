 // array of classes for randomly changing the background color
 var backgroundColors = ['yellow','blanchedalmond','darkseagreen','orchid','slategray','yellowgreen','thistle','tomato','tan'];
 var targetElements = ['content','circle-1','circle-2','circle-3'];

function randomColor() {

    for (var i =0; i < targetElements.length; i+= 1) {
        var currentTargetElement = targetElements[i];
        if (currentTargetElement === 'content') {
           document.getElementById(currentTargetElement).className = backgroundColors [Math.floor (Math.random() * backgroundColors.length)];
        } else {
           document.getElementById(currentTargetElement).className = backgroundColors [Math.floor (Math.random() * backgroundColors.length)] + ' circle';
        }
    }
}
    // remove classes from target 'posts' Id

    /*  document.getElementById("content").className = "";*/
    // current class variable
    /*var color='#';
    var letters= ['00ffff','ffe4c4','0000FF','FFFF00','FFFFFF']
    color += letters [Math.floor (Math.random() * letters.length)];
    document.getElementById('posts').style.background = color;

    document.getElementById("whatever").className = "";
     */

