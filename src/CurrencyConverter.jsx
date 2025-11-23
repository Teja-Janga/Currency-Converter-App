
import React, {useState, useEffect} from "react"
import currencies from './currencies-with-flags.json';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("INR");
    const [to, setTo] = useState("USD");
    const [currencyList, setCurrencyList] = useState([]);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = "YOUR_API_KEY";

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        .then(resp => resp.json())
        .then(data => {
            if (data.supported_codes) {
                setCurrencyList(data.supported_codes);
            } else {
                setError('Unable to load currencies');
            }
        })
        .catch(() => setError("Unable to load currencies"));
    }, []);

    function convert() {
        if (from === to) {
            setResult(amount);
            setError(null);
            return;
        }

        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('API Response:', data);
            const rate = data.conversion_rates ? data.conversion_rates[to] : null;
            if(rate) {
                setResult((amount * rate).toFixed(3));
                setError(null);
            } else {
                setError('Conversion Unavailable');
                setResult(null);
            }
        })
        .catch(() => {
            setError('Network Error!');
            setResult(null);
        });
    }

    function swapCountries() {
        setFrom(to);
        setTo(from);
    }
    const selectedFrom = currencies.find(c => c.code === from);
    const selectedTo = currencies.find(c => c.code === to);

    return (
        <>
            <div className="container">
                <h1>Currency Converter</h1>
                <input type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                />
                <div className="from-to">
                    <div className="from">
                        <label>From &nbsp;</label>
                        {selectedFrom && (
                            <img src={selectedFrom.flag}
                            alt={selectedFrom.code}
                            style={{width:"25px", verticalAlign:"middle", marginRight:"5px"}}
                            />
                        )}
                        <br/>
                        <select value={from} onChange={e => setFrom(e.target.value)}>
                            {currencyList.map(([code]) => {
                                const cur = currencies.find(c => c.code === code);
                                return cur ? (
                                    <option key={cur.code} value={cur.code}>
                                        {cur.code} - {cur.name}
                                    </option>
                                ) : (
                                    <option key={code} value={code}>{code}</option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="swap" onClick={swapCountries}>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>

                    <div className="to">
                        <label>To &nbsp;</label>
                        {selectedTo && (
                            <img src={selectedTo.flag}
                            alt={selectedTo.code}
                            style={{width:"25px", verticalAlign:"middle", marginRight:"5px"}}
                            />
                        )}<br/>
                        
                        <select value={to} onChange={e => setTo(e.target.value)}>
                            {currencyList.map(([code]) => {
                                const cur = currencies.find(c => c.code === code);
                                return cur ? (
                                    <option key={cur.code} value={cur.code}>
                                        {cur.code} - {cur.name}
                                    </option>
                                ) : (
                                    <option key={code} value={code}>{code}</option>
                                );
                                console.log(cur);
                            })}
                        </select>
                    </div>
                </div>
                
                <button onClick={convert}>Get Exchange Rate</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {result !== null && !error && (
                    <p className="result">{amount} {from} = {result} {to}</p>
                )}
            </div>
        </>
    );
}
export default CurrencyConverter
