var count1 = 0
var count2 = 0

var name1 = "Bob";
var name2 = "Dylan";

document.getElementById('name1').innerHTML = name1;
document.getElementById('name2').innerHTML = name2;


$('#cat-pic1').click(function(e) {
  count1 += 1;
  document.getElementById('counter1').innerHTML = count1;
});

$('#cat-pic2').click(function(e) {
  count2 += 1;
  document.getElementById('counter2').innerHTML = count2;
});