var sas = [];
var d = 5;
nextmas(3);
setTimeout(upd, 300);
upd();

nextmas(20);
setTimeout(upd, 1000);
upd();
prev.onclick = function () {
  if (d == 4){
    console.log(d);
    prevmas(10);

    setTimeout(upd, 1000);
  }
    d -= 1;
    upd();
}
next.onclick = function () {
    if (d == sas.length - 3){
      nextmas(10);
      console.log(d);
      setTimeout(upd, 1000);
    }
    d += 1;
    upd();
}



function nextmas(num) {
  list = document.getElementById("qwer");

  for (var i = 0; i < num; i++){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://picsum.photos/400/172', true);
  xhr.responseType = 'blob';

  xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = this.response;
    sas.push(window.URL.createObjectURL(blob));

  }
  };

  xhr.send();

}

}

function prevmas(num) {
  list = document.getElementById("qwer");
  for (var i = 0; i < num; i++){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://picsum.photos/400/172', true);
  xhr.responseType = 'blob';

  xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = this.response;
    sas.unshift(window.URL.createObjectURL(blob));



  }
  };

  xhr.send();

}
d += 10;
}


function upd() {
console.log(d);
rigthimg.src = sas[d + 1];
midimg.src = sas[d];
leftimg.src = sas[d - 1];

}
