return(
    <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.age}</p>
        <hr></hr>
    </div>
)
//////////////////////////////////////////
// if condition
if(item.count > 8){
    return(
        <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <hr></hr>
        </div>
    )
   }else{
       return(
           <div> Don't have any result</div>
       )
   }
//other syntax if condititon
   return item.count > 5 ?(
    <div key={item.id}>
         <p>{item.id}</p>
         <p>{item.name}</p>
         <p>{item.age}</p>
         <hr></hr>
    </div>
  ):null