import './App.css';
import ExchangeInput from "./component/input/exchangeInput";
import React, {useState, useEffect} from "react";
import BasicSelect from "./component/input/select";

const currentData = 'https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI'

function App() {
    const [amountOne, setAmountOne] = useState(1);
    const [amountTwo, setAmountTwo] = useState(1);
    const [currencyOne, setCurrencyOne] = useState('USD');
    const [currencyTwo, setCurrencyTwo] = useState('EUR');
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(currentData)
            .then(res => res.json())
            .then(data => setData(data.rates))
    }, []);

    useEffect(() =>{
        if(!!data){
            handleAmountOneChange(1)
        }
    },[data])

    const  format = (number) => {
        return number.toFixed(4)
    }

    const handleAmountOneChange = (amountOne) => {
        setAmountTwo(format(amountOne * data[currencyTwo] / data[currencyOne]));
        setAmountOne(amountOne);
    }

    const handleCurrencyOneChange = (currencyOne) => {
        setAmountTwo(format(amountOne * data[currencyTwo] / data[currencyOne]));
        setCurrencyOne(currencyOne)
    }

    const handleAmountTwoChange = (amountTwo) => {
        setAmountOne(format(amountTwo * data[currencyOne] / data[currencyTwo]));
        setAmountTwo(amountTwo);
    }

    const handleCurrencyTwoChange = (currencyTwo) => {
        setAmountOne(format(amountTwo * data[currencyOne] / data[currencyTwo]));
        setCurrencyTwo(currencyTwo)
    }


    return (
        <div className="App">
            <h1>World Currency Converter</h1>
            <div className={'test'}>
            <BasicSelect
                currencies={Object.keys(data)}
                amount={amountOne}
                currency={currencyOne}
                onAmountChange={handleAmountOneChange}
                onCurrencyChange={handleCurrencyOneChange}
            />
            <BasicSelect
                currencies={Object.keys(data)}
                amount={amountTwo}
                currency={currencyTwo}
                onAmountChange={handleAmountTwoChange}
                onCurrencyChange={handleCurrencyTwoChange}
            />
            </div>
        </div>
    );
}

export default App;
