var numberToOrdinal = (n )  => {
  let res = '';  
  if (n === 0) return res = String(n)
  
  var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
}