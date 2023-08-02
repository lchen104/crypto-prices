import React from 'react'
import { Link } from 'react-router-dom';

const Currencies = () => {

  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div>
        {

          currencies.map((coin, index) => {
            const { name, symbol }  = coin;
            {/* console.log(index) */}
            return (
                <Link key={index} to={`/price/${symbol}`} >
                    <h1> { name }</h1>
                </Link>
            )
          })  
          
        }
    </div>
  )
}

export default Currencies