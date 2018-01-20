function revStr(myStr){
  var newStr=""; 
  for(var i=myStr.length-1;i>=0;i--){
      newStr+=myStr[i];
  }
  alert(newStr);
}



myStr="Trainspotting";

revStr(myStr);
