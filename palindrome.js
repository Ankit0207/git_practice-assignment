  let num=1112111; 
  let rev=0;
   
   let bag=num;
   while(num>0){
       rem=num%10;
       rev=rev*10+rem;
       num=Math.floor(num/10);
   }
   if(bag==rev){
       console.log("Yes");
   }else{
       console.log("No");
   }