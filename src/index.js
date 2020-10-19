module.exports = function toReadable (str) {
    let array = ['','one','two','three','four','five','six','seven','eight','nine','twenty','thirty','forty','fifty','sixteen','seventeen','eighteen','nineteen', ]
    let arraySmall = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',]
    let arrayBig = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    let result;
    
    
    let numberChange = String(str);
    let together = numberChange.split(' ');
      console.log(together)
    let number = numberChange.split('');
     console.log(number)
    
     if(str==0){
        let result = "zero";
                   return result;  
    }
    else if(str<10){
      for (let i = 0; i<array.length; i++){
        // console.log(array[number])
      return array[number]
    }
    }  else if (str>=10 && str <20){
      for (let i = number[1]; i<arraySmall.length; i++){
           return arraySmall[i]
      if(number[1] == 0){
        return arraySmall[+(number[0])]
      }
    }
    }
    
    if(str>=20 && str < 100){
    for (let j = number[1]; j<array.length; j++){
              if (number[0]==2){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();
                   return result;  
                    } 
                    else if (number[0]==3){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();
                   return result;  
                    }
                    else if (number[0]==4){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } else if (number[0]==5){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } else if (number[0]==6){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } else if (number[0]==7){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } else if (number[0]==8){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } else if (number[0]==9){
                  let result = (arrayBig[+(number[0])] + " " + array[j]).trim();;
                   return result;  
                    } 
                    
    }
    } 
    else if(str>=100 && str < 1000){
    
    
    
    
    if (number.length===3) {
            if (number[1] === "0") {
                return (array[+number[0]] + " hundred " + array[+number[number.length-1]]).trim();
            } else if ((number[1] === "1")) {
                return (array[+number[0]] + " hundred " + arraySmall[+(number[2])]).trim();
            } else if ((number[2] === "0")) {
                return (array[+number[0]] + " hundred " + arrayBig[+(number[1])]).trim();    
            } 
            else {
            return (array[+number[0]] + " hundred " + arrayBig[+(number[1])]) + " " + array[+number[2]].trim();
            }
    }
    
    
    
    }
}

