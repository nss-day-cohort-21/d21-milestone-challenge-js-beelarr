/**
 * Created by beelarr on 7/18/17.
 */

let tree_button = document.querySelector('#tree_grow');
let char_input = document.querySelector('#char');
let height_input = document.querySelector('#height');
let tree = {};
// console.log(char_input);



function make_tree (height, char) {
    height = height_input.value;
    height *= 2;
    char = char_input.value.toString();
    for (var i = 0; i <= height; i++) {
        if ((i % 2) !== 0){
            // console.log(height)
        console.log(' '.repeat([(height-[i])]/2), char.repeat([i]))
        }
    }
}





tree_button.addEventListener('click', function () {
    make_tree(height_input, char)
});



