var count = 0

$('#cat-pic').click(function(e) {
  count += 1;
  document.getElementById('counter').innerHTML = count;
});