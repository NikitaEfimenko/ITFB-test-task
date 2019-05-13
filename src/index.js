var array = [];
var d = 1;
//list = document.getElementById("qwer");

for(var p = 0; p <= 2; p++){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://picsum.photos/400/172', true);
  xhr.responseType = 'blob';
xhr.onload = function() {
    if (this.status == 200) {
        var blob = this.response;
        array.push(window.URL.createObjectURL(blob));

    }
}
xhr.send();
}


function changeimg() {
     // console.log(array);
     // console.log(array[3]);
    right_picture.src = array[d + 1];
    mid_picture.src = array[d];
    left_picture.src = array[d - 1];

}

setTimeout(changeimg, 1000);

slider_right.onclick = sliderRight;

function sliderRight(){
  d++;
  //console.log(d);
  if (d+1 == array.length){
    console.log(d);
    console.log(array.length);
  for(var pp = 0; pp <= 9; pp++){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://picsum.photos/400/172', true);
    xhr.responseType = 'blob';
  xhr.onload = function() {
      if (this.status == 200) {
          var blob = this.response;
          array.push(window.URL.createObjectURL(blob));

      };
  };
  xhr.send();
};
setTimeout(changeimg, 1000);// время подгрузки картинки в конце массива(подгон)
}
else{
  changeimg();
}
}


slider_left.onclick = sliderLeft;

    function sliderLeft(){
      d--;
      //console.log(d);
      if (d == 0){
        console.log(array.length);
        console.log(d);
      for(var pp = 0; pp <= 9; pp++){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://picsum.photos/400/172', true);
        xhr.responseType = 'blob';
      xhr.onload = function() {
          if (this.status == 200) {
              var blob = this.response;
              array.unshift(window.URL.createObjectURL(blob));

          };
      };
      xhr.send();
    };
    d=9;
    setTimeout(changeimg, 1000);// время подгрузки картинки в конце массива(подгон)
    }
    else{
      changeimg();
    }
    }
