const countValue=document.querySelector('#number');
 const increment=()=>{
    //get value from UI
  let value=parseInt(countValue.innerText);
  //update the value
  value=value+1;
  //set the value into UI
  countValue.innerText=value;
 };
 const decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
 };