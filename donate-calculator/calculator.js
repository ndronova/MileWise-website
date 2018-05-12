// listen for submit
document.getElementById('donation-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display='none';

  // show loading img
  document.getElementById('loading').style.display='block';

  setTimeout(calculateResuts,2000);

  event.preventDefault();
});

// calculating results
function calculateResuts() {
  console.log('ello');

  // grabbing UI variables
  const UIheartRate = document.getElementById('heart-rate');
  const UIage = document.getElementById('age');
  const UIweight = document.getElementById('weight');
  const UItime = document.getElementById('time');

  const UIcalories=document.getElementById('calories');
  const UIdonation = document.getElementById('donation');

  const age=parseFloat(UIage.value);
  const weight=parseFloat(UIweight.value);
  const time=parseFloat(UItime.value);
  const heartRate=parseFloat(UIheartRate.value);

  // compute calories burned
  const calories=((age * 0.2017 + weight * 0.09036) + (heartRate * 0.6309) - 55.0969) * time / 4.184;

  // compute dollars donated
  const donation=calories*0.004;

  // check if result makes sense
  if (calories>0 && calories<4000) {
    UIcalories.value=calories.toFixed(0);
    UIdonation.value=donation.toFixed(0);
    // show results
    document.getElementById('results').style.display='block';
    // hode loader
    document.getElementById('loading').style.display='none';
  } else {
    console.log(calories);
    showError();

     // hide results
     document.getElementById('results').style.display='none';
    // hode loader
    document.getElementById('loading').style.display='none';
  }
// SHOW ERROR MESSAGE
  function showError() {
    document.getElementById('error-msg').style.display="block";
    setTimeout(hideError, 3000);
  }
// HIDE ERROR MESSAGE AFTER 3 SECONDS
  function hideError() {
    document.getElementById('error-msg').style.display="none";
  }


}