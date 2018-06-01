window.onload = function() {
  // Initialize background color
  $("body").css("background-color", getDate());
  // Every second, update the time displayed and get the associated color
  // Set the background to that color
  setInterval(function(){
    let color = getDate();
    $("body").css("background-color", color)
  }, 1000);
};
// function that sets the time every second and returns a hex value
// hex value is built from the current time
function getDate() {
  const d = new Date();
  const time = d.toLocaleTimeString()
  $("#content").text(time);
  let nums = time.split(':');
  let color = 0;
  nums.map(function(e) {
    color += e.substring(0,2).toString(16);
  });
  return '#' + color;
}