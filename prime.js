function checkprime (num){
  let factors=0;
  for (let i=0;i<=num-1;i++){
    if(num%i==0){
      factors++;
    }
  }
  if (factor=2){
    console.log(num,"is prime");
  }else {
    console.log(num,"is not a prime");
  }
}
checkprime (17);