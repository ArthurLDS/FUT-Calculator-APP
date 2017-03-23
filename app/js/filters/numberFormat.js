angular.module("futCalculatorApp").filter("numberFormat", function(){
  return function(input, sizeStringGroup, separator){
    input = input.toString();

    if(input.length<=3) return input;
    if(!separator) separator = ".";
    if(!sizeStringGroup) sizeStringGroup = 3;

    let stringFormatted = "";
    let count = 0;
    let lastChar = 0;

    for(let i=input.length-1; i>=0; i--){
      if(count === sizeStringGroup-1){
        count = 0;
        stringFormatted = stringFormatted ? input.substring(i, i+ sizeStringGroup) +  separator + stringFormatted :
                                            input.substring(i, i+ sizeStringGroup);
        lastChar = i;
      }
      else
        count++;
    }
    if(stringFormatted.split(".").join("").length === input.length){
      return stringFormatted;
    }
    return input.substring(0, lastChar) + separator + stringFormatted;
  };
});
