function EqualButton(props)
  {
    const buttonList = ['='];
    
      return (buttonList.map((number) => (
        <button className="equal" key={number} onClick={()=>{props.display(number)}}>{number}</button>
      )))
  }


export default EqualButton