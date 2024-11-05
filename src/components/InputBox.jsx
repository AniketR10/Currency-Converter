import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrChange,
    currOptions = [],
    selectedCurr = "usd",
    amtDisabled = false,
    currDisabled = false,
    className = "",
}) {

    const id = useId()
   
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            id={id}
            type="number"
                className='outline-none w-full bg-transparent py-1.5'
                placeholder='Amount'
                disabled = {amtDisabled}
                value={amount}
                onChange={(e) => {
                    if(e.target.value < 0){
                       onAmtChange && onAmtChange(0)
                    }
                    else{
                        onAmtChange && onAmtChange(e.target.value == '' ? '' : Number(e.target.value))
                    }
                   
                  }
                }
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value = {selectedCurr}
        onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
        disabled = {currDisabled}
        >
            {currOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox


