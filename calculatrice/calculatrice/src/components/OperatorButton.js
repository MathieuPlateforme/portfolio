function OperatorButton(props)
  {
    const buttonList = ['+','-','/','*','.','(',')','C','Backspace'];
    
      return (buttonList.map((number) => (
        <button className="operators" key={number} onClick={()=>{props.display(number)}}>{number}</button>
      )))
  }


export default OperatorButton