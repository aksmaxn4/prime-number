import { useState } from 'react';

const IsPrimeNumber = () => {


    const [number, setNumber] = useState(1);
    const [inscription, setInscription] = useState('Check')

    const handleChange = (event) => {
        setNumber(event.target.value);
    }

    const handleClick = () => {
        if(isNaN(number) || number < 0 || number === ''){
            setInscription('Enter a positive integer');
            return;
        }
        if(number == 0 || number == 1){
            setInscription('Not Prime \u2717');
            return;
        }
        for(let i = 2, s = Math.sqrt(number); i <= s; i++){
            if(number % i === 0){
                setInscription('Not Prime \u2717');
                return;
            }
        }
        setInscription('Prime \u2713')
    }



  return (
    <div className="is-prime">
            <label htmlFor="number-input">Enter a non-negative integer</label>        
            <input type="text" 
                    id="number-input"
                    className="check-prime-number" 
                    name='username'
                    autocomplete="off" 
                    onChange={handleChange}
                    value={number}/>
            <button className={inscription === 'Prime \u2713' ? 'check-prime-number green' : 
            inscription === 'Not Prime \u2717' ? 'check-prime-number red' : 'check-prime-number'}
                    onClick={handleClick}>
                {inscription}
            </button>
    </div>
  )
}

export default IsPrimeNumber