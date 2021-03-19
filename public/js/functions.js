//////////////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript functions for Arquivo.pt ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// starts: menu opening and closing button for top nav left menu button //////////////////////////////////
function openLeftMenuNav() {
  document.getElementById("left-nav").style.cssText = "left:0px;"; 
}
function closeLeftMenuNav() {
  document.getElementById("left-nav").style.cssText = "left:-200px";
}
// ends: menu opening and closing button for top nav left menu button ////////////////////////////////////

// starts: menu opening and closing button for top nav right menu button  ////////////////////////////////

function openOptionstMenuNav() {
  document.getElementById("options-right-nav").style.cssText = "right:0px;"; 
}
function closeOptionsMenuNav() {
  document.getElementById("options-right-nav").style.cssText = "right:-200px";
}
// ends: menu opening and closing button for top nav right menu button ///////////////////////////////////

//////////////////////////////////////////////////
// REPLAY ////////////////////////////////////////
//////////////////////////////////////////////////


// starts: menu opening and closing button for top nav left replay menu button //////////////////////////////////
function openReplayLeftMenuNav() {
  document.getElementById("replay-left-nav").style.cssText = "left:0px;"; 
}
function closeReplayLeftMenuNav() {
  document.getElementById("replay-left-nav").style.cssText = "left:-200px";
}
// ends: menu opening and closing button for top nav left replay menu button ////////////////////////////////////

// starts: menu opening and closing button for top nav right replay menu button /////////////////////////////////
function openReplayRightMenuNav() {
    document.getElementById("replay-right-nav").style.cssText = "right:0px;"; 
}
function closeReplayRightMenuNav() {
    document.getElementById("replay-right-nav").style.cssText = "right:-200px";  
}
// ends: menu opening and closing button for replay top nav right replay menu button 

// starts: copy URL to clipboard on click 
function copyURLToClipboard() {
  var urlCopier = document.createElement('input');
  var text = window.location.href;

  document.body.appendChild(urlCopier);
  urlCopier.value = text;
  urlCopier.select();
  document.execCommand('copy');
  document.body.removeChild(urlCopier);

  alertsMessageIn();
}
// ends: copy URL to clipboard on click 

// starts: alerts messages  

// alert message in
function alertsMessageIn() {
  document.getElementById("alert-container").style.cssText = "top:0;height:47px;opacity:1;transition:0.3s"; 
  setTimeout(alertsMessageOut, 2000); 
}
// alert message out
function alertsMessageOut() {
  document.getElementById("alert-container").style.cssText = "height:0px;opacity:0;transition:0.5s";     
}
// ends: alerts message  /////////////////////////////////////////////////////////////////////////////////

// starts: accordion function ////////////////////////////////////////////////////////////////////////////

// opens accordion
function openAdvancedSearchForm(){
 document.getElementById('accordion').style.display = "block";
 document.getElementById('closeAdvancedSearch').style.display = "block";
return false;
}
// closes accordion
function closeAdvancedSearch(){
 document.getElementById('accordion').style.display = "none";
return false;
}
// ends: accordion function /////////////////////////////////////////////////////////////////////////////

// starts: accordion function ////////////////////////////////////////////////////////////////////////////

// opens replay page on fullscreen
function opensFullScreen() { 
  document.getElementById('replay-in-iframe').style.cssText = "padding: 0;margin:0;width: 100%;position: absolute;z-index: 1;top:0;left:0;height: 100%;0.5s";  
  document.getElementById('fullscreen-mode').style.cssText = "display: inline-block; position: absolute; z-index: 2; top: 0; right: 12px; height: 50px; width: 162px; background-color: transparent; box-shadow: none !important; 0.5s";  

}

// closes replay page on fullscreen
function closesFullScreen() {
  document.getElementById('replay-in-iframe').style.cssText = "padding: 0; margin: 101px 0 0 0; max-width: 100%;  width: inherit; 0.5s";  
  document.getElementById('fullscreen-mode').style.cssText = "display: none; transition: 0.5s";  

}
