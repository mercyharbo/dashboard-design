'use client'

import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'

// Array containing cryptocurrency objects with id, name, and type
const cryptoCoins = [
  { id: 1, name: 'Bitcoin', type: 'BTC' },
  { id: 2, name: 'Ethereum', type: 'ETH' },
  { id: 3, name: 'Binance Coin', type: 'BNB' },
  { id: 4, name: 'Cardano', type: 'ADA' },
  { id: 5, name: 'Solana', type: 'SOL' },
  { id: 6, name: 'Ripple', type: 'XRP' },
  { id: 7, name: 'Polkadot', type: 'DOT' },
  { id: 8, name: 'Dogecoin', type: 'DOGE' },
  { id: 9, name: 'Avalanche', type: 'AVAX' },
  { id: 10, name: 'Chainlink', type: 'LINK' },
]

const instruction = [
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const networkType = [
  { id: 1, network: 'BTC' },
  { id: 2, network: 'BEPS' },
  { id: 3, network: 'TRC20' },
  { id: 4, network: 'RRC20' },
]

let totalBalance = 540058999

export default function Withdrawal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [networkOption, setNetworkOption] = useState('BTC')

  const [selectedOption, setSelectedOption] = useState('')
  const [amount, setAmount] = useState('')

  const handleMaxClick = () => {
    setAmount(totalBalance)
    totalBalance = 0
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const coinType = formData.get('coinType')
    const withdrawAddress = formData.get('withdraw_address')
    const amount = formData.get('amount')

    const data = {
      coinType,
      withdraw_address: withdrawAddress,
      amount,
    }

    console.log(data)
    setIsModalOpen(true)

    // Your further logic for form submission...
  }

  return (
    <main
      className='overflow-y-auto flex justify-start items-start gap-10 w-full laptop:px-10 laptop:pb-10 laptop:flex-row tablet:px-10 tablet:pb-[10rem] tablet:flex-col
    mobile:px-10 mobile:pb-[10rem] mobile:flex-col '
    >
      <section className='laptop:w-[70%] tablet:w-full mobile:w-full flex flex-col justify-start items-start gap-5 '>
        <h1 className='text-xl capitalize font-medium laptop:text-base tablet:text-xl mobile:text-base '>
          withdrawal
        </h1>

        <article className='w-full flex flex-col justify-start items-start gap-10'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-start items-start gap-10 w-full'
          >
            <div className='flex flex-col justify-start items-start gap-2 w-full relative'>
              <div className='flex flex-col justify-start items-start gap-3 w-full  relative '>
                <label
                  htmlFor='coinType'
                  className='text-sm font-normal capitalize text-secondary '
                >
                  coin:
                </label>
                <select
                  id='coinType'
                  name='coinType'
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className='dark:bg-[#161D26] bg-secondary px-5 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
                  tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px]'
                >
                  <option value=''>Select a coin </option>
                  {cryptoCoins.map((coin) => {
                    return (
                      <option key={coin.id} value={coin.type}>
                        {coin.name}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div className='flex justify-start items-center gap-2 py-3'>
                <h1 className='capitalize font-medium'>total balance: </h1>
                <span className='text-sm text-secondary'>
                  {totalBalance.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'BTC',
                  })}
                </span>
              </div>
            </div>

            <div className='flex flex-col justify-start items-start gap-3 w-full'>
              <h1 className=' font-medium'>Withdraw network:</h1>
              <div className='flex justify-center items-center gap-2 bg-secondary dark:bg-[#161D26] rounded-lg w-full p-2 h-[4rem] '>
                {networkType.map((option) => {
                  return (
                    <button
                      type='button'
                      key={option.id}
                      onClick={() => setNetworkOption(option.network)}
                      className={`w-full h-full hover:bg-primary hover:text-black hover:rounded-lg ${
                        networkOption === option.network
                          ? 'bg-primary text-black rounded-lg'
                          : ''
                      } `}
                    >
                      {option.network}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className='flex flex-col justify-start items-start gap-7 w-full'>
              <div className='flex flex-col justify-start items-start gap-3 w-full'>
                <input
                  type='text'
                  name='withdraw_address'
                  id='withdraw_address'
                  placeholder='Withdraw Address'
                  className='dark:bg-[#161D26] dark:placeholder:text-secondary bg-secondary placeholder:text-black px-5 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
                  tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px]'
                />
              </div>

              <div className='relative w-full'>
                <input
                  type='text'
                  name='amount'
                  id='amount'
                  placeholder='Amount'
                  value={amount}
                  onChange={handleAmountChange}
                  className='dark:bg-[#161D26] dark:placeholder:text-secondary bg-secondary placeholder:text-black px-5 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
                  tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px]'
                />
                <button
                  type='button'
                  className='absolute laptop:top-4 mobile:top-6 right-4 text-primary'
                  onClick={handleMaxClick}
                >
                  Max
                </button>
              </div>
            </div>

            <div
              className='flex w-full laptop:flex-row laptop:justify-between laptop:items-center tablet:justify-between tablet:items-center tablet:flex-row 
              mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-5'
            >
              <p className='text-[grey]'>
                Transaction fee:{' '}
                <span className='dark:text-white text-black'>0.0005</span>
              </p>
              <button
                type='submit'
                className='capitalize bg-primary p-5 rounded-2xl flex justify-center items-center gap-2 text-black laptop:h-[3rem] laptop:w-auto 
                  laptop:text-base tablet:text-xl tablet:h-[4rem] tablet:w-auto mobile:w-full mobile:h-[4rem] mobile:text-base '
              >
                proceed withdrawal <BiChevronRight className='text-3xl' />
              </button>
            </div>
          </form>

          {/* This is withdraw instruction section */}
          <div className='flex flex-col justify-start items-start gap-3'>
            <h1 className=''>Tips</h1>
            <div className='flex flex-col justify-start items-start gap-3'>
              <article className='dark:bg-white bg-secondary p-5 rounded-2xl flex flex-col justify-start items-start gap-5 py-10  '>
                {instruction.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className='flex justify-start items-start gap-2 text-black'
                    >
                      <span className='bg-primary rounded-full mt-2 h-2 w-2 p-1 '></span>
                      <p className='laptop:text-base tablet:text-xl mobile:text-base'>
                        {item.content}
                      </p>
                    </div>
                  )
                })}
              </article>
            </div>
          </div>
        </article>
      </section>

      {/* This is withdraw instruction section */}
      {/* <section className='flex flex-col justify-start items-start gap-7 laptop:w-[30%] tablet:w-full mobile:w-full '>
       

        <div className='flex flex-col justify-start items-start gap-5 w-full'>
          <BsExclamationCircle className='text-2xl' />
          <h1 className='font-semibold laptop:text-base tablet:text-xl mobile:text-base'>
            Sending only {networkOption} to this addreess!{' '}
          </h1>
          <p className='text-[grey] laptop:text-base tablet:text-xl mobile:text-base '>
            Sending coin or token other than {networkOption} to this Address may
            reault in the los of your deposit.
          </p>
        </div>
      </section> */}

      {isModalOpen && (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            className='fixed top-0 left-0 z-10 h-screen w-full bg-[#0000008e] dark:dark:bg-[#ffffff76]'
          ></div>
          <article className='fixed inset-0 z-20 flex flex-col items-center justify-center'>
            <div
              className='laptop:w-[50%] tablet:w-[90%] mobile:w-[90%] h-[50%] rounded-2xl shadow-2xl p-5 flex flex-col justify-center items-center gap-5 
          bg-white dark:bg-themeColor'
            >
              <h1 className='laptop:text-5xl tablet:text-4xl mobile:text-3xl font-semibold capitalize'>
                Completed
              </h1>
              <p className='laptop:text-xl laptop:w-[70%] tablet:w-full tablet:text-xl mobile:text-base mobile:w-full text-center '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button
                type='button'
                onClick={() => setIsModalOpen(false)}
                className='bg-primary text-black h-[4rem] px-10 rounded-xl capitalize'
              >
                Close
              </button>
            </div>
          </article>
        </>
      )}
    </main>
  )
}
