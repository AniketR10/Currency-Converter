import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/Index'

function App() {
  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmt(0)
    setAmt(0)
  }

  const convert = () => {
    setConvertedAmt(amt * currencyInfo[to])
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
   style={{backgroundImage: `url(https://images.pexels.com/photos/128878/the-last-shirt-dollar-bill-20-euro-folded-128878.jpeg?auto=compress&cs=tinysrgb&w=400)`}}
   >
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault(
            convert()
          )
        }}>
          <div className='w-full mb-1'>
            <InputBox
            label =  "from"
            amount = {amt}
            currOptions = {options}
            onCurrChange = {(currency) => setFrom(currency)}
            onAmtChange = {(amt) =>setAmt(amt)}
            selectedCurr = {from}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick ={swap}
            >Swap</button>
          </div>
          <div className='w-full mb-1'>
            <InputBox
            label =  "to"
            amount = {convertedAmt}
            currOptions = {options}
            onCurrChange = {(currency) => setTo(currency)}
            selectedCurr = {to}
            amtDisabled          
            />
          </div>
          <button
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
   </div>
  )
}

export default App
