import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import { useState } from "react";
import './style/Calculator.css';
import './style/Button.css';
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
var stringMath = require('string-math');

function Calculator()
{
    const [calcule, displayCalcule] = useState("");
    const [result, setResult] = useState("");

    const display = (value)=>
    {
        const buttonList = ['0','1','2','3','4','5','6','7','8','9','=','+','-','/','*','.','(',')','C','Enter','Backspace']

        if (buttonList.includes(value))
        {
            console.log(calcule);
        switch(value) {
            case '=':
                if(calcule !== "")
                {
                    setResult(() => stringMath(calcule).toString());
                }
                break;
            case 'Enter':
                if(calcule !== "")
                {
                    setResult(() => stringMath(calcule).toString());
                }
                break;
            case 'C':
                displayCalcule("");
                setResult("");
                break;
            case 'Backspace':
                return displayCalcule((calcule) => calcule.slice(0, -1));
            default:
                return displayCalcule((calcule) => calcule + value + "");
            }
        }
    }

    return <section className="calculatrice" tabIndex="0" onKeyDown={(e)=>display((e.key.toString()))}>
            <BeautifulScreen calcule={calcule} result={result}/>
            <section className="numberPad">
                <AmazingNumberButton display={display} />
                <OperatorButton display={display}/>
                <EqualButton display={display}/>
            </section>
            </section>
}

export default Calculator