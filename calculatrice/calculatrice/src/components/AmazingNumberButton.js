function AmazingNumberButton(props)
  {
    const buttonList = ['9','8','7','6','5','4','3','2','1','0'];
    
      return (buttonList.map((number) => (
        <button className="numbers" key={number} onClick={()=>{props.display(number)}}>{number}</button>
      )))
  }


export default AmazingNumberButton