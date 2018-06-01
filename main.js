window.onload = function() {
  getDate();
  setInterval(function(){
    let color = getDate();
    $("body").css("background-color", color)
  }, 1000);
};
function getDate() {
  const d = new Date();
  const time = d.toLocaleTimeString()
  $("#content").text(time);
  let nums = time.split(':');
  let color = 0;
  nums = nums.map(function(e) {
    color += e.substring(0,2).toString(16);
  });
  return '#' + color;
}