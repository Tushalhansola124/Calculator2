const ButtonContainer=({clickbtn})=>{
  
  const btnItems=[
    'C',
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    '+',
    '-',
    '*',
    '/',
    '%',
    '.',
    '=',

]
  return (

    <div className='btnContainer'>
              {btnItems.map((items)=>(
                  <button   
                  onClick={()=>clickbtn(items)}
                  key={items} className='btn'>{items}</button>
              ))}
      
      </div>
  );
}
export default ButtonContainer;