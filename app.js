for(var i=0;i<3;i++){
    console.log(i);
  }
  console.log(capilizeAndLowercase("HelLo"));
  console.log(findMiddleIndex("HelLdfdfdfo"));
  console.log(returnFirstHalf("Hello World"));
  function capilizeAndLowercase(words){
    var combo=words.toUpperCase()+words.toLowerCase();
    return combo;
  }
  function findMiddleIndex(words){
    return Math.floor(words.length/2);
  }
  function returnFirstHalf(word){
    return word.slice(0,findMiddleIndex(word));
  }
  console.log(capitalize("hey friends! practice practice practice!"));
  function capitalize(words){
    var words2 = words.split("");
    for(var i=0;i<words2.length-1; i++){
     if(words2[i]==' '){
        words2[i+1]=words2[i+1].toUpperCase();
      }
    }
    words=words2.join("");
    return words;
  }