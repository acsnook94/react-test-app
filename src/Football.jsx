export function Football(){
  // const shoot = ()=>{
  //   alert("Great Shot!");
  // }

  const shoot = (a,b)=>{
    alert("a=" + a);
    alert("b.type="+ b.type);
  }

  // function shoot(a){alert(a);}

  return(
    <button onClick={()=>shoot("Goal!", event)}>Take the shot!</button>
    // <button onClick={(event)=>shoot("Goal!", event)}>Take the shot!</button>
  );
}