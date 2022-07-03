
function clickbutton(target) {
  let target_value = target.innerHTML;
  let result = document.getElementById("result");
  let str = ["+","−","*","/",]

  if (target_value == "AC") {
    result.innerHTML = "0";
  }else if(target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  }else {
    if(result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else if (str.includes(result.innerHTML.slice(-1)) == true && str.includes(target_value) == true) {
      result.innerHTML = result.innerHTML.slice(0,-1) + target_value
  } else {
    result.innerHTML += target_value;
    }
  }
}
    



   
  
  
 
