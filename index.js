function theBeatlesPlay(musicians,instruments){
  var array=[];
  for(let i = musicians.length;i>0;i--){
    array.push('${musicians[musicians.length-i]} plays ${instruments[instruments.length-i]}');
  }
}
