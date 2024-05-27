import React, { useState, useEffect } from 'react';

function CurrencyConverter() {  
  const [rates, setRates] = useState(null); // Initialize to null
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = 'ARC71fW3Zk4EOtBnyLj51zwW41qp10X6';
  const baseUrl = `https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`;
  
  module.exports = {
    // Other webpack configurations... 
    resolve: {
      modules: ['node_modules'],
      preferRelative: true 
    }
  };
 
  useEffect(() => {
    fetch(baseUrl + fromCurrency)
      .then(res => res.json())
      .then(data => {
        if (!data || data.result === "error") {
          throw new Error(data["error-type"] || "Unknown API error");
        }
        setRates(data.conversion_rates);
      })        
      .catch(err => {
        setError(err.message);  
        setRates(null); // Ensure it's null if there's an error
      });
  }, [fromCurrency]);

  const convert = () => {
    if (rates && rates[toCurrency]) {
      const rate = rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } else {
      setConvertedAmount(null);
      setError("Conversion rate not available.");
    }
  };
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rates) {
    return <div>Loading or no rates available...</div>;
  }
const data=()=>{
  setConvertedAmount(null);
  setError('[]')
}
//curency convert. 
  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={e => setFromCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select
        value={toCurrency}
        onChange={e => setToCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>
      {convertedAmount !== null && <h2>Converted Amount: {convertedAmount}</h2>}
    </div>
  );
}

export default CurrencyConverter;
