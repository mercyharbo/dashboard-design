'use client'

import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import QRCode from 'qrcode.react'

import { BiCopy, BiQuestionMark } from 'react-icons/bi'
import { BsClock, BsExclamationCircle } from 'react-icons/bs'
import useRandomToken from '@/RandomToken'
import QrCodeGenerator from '@/QrCodeGenerator'

// Array containing tab names
const tabs = ['crypto', 'fiat']

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
  { id: 2, network: 'TRC' },
  { id: 3, network: 'TRC20' },
  { id: 4, network: 'RRC20' },
]

export default function Funds() {
  const generateToken = useRandomToken()

  const [token, setToken] = useState(null)
  const [activeTab, setActiveTab] = useState('crypto')
  const [copiedText, setCopiedText] = useState(false)
  const [networkOption, setNetworkOption] = useState('BTC')
  const [selectedOption, setSelectedOption] = useState('')

  const initialTime = 20 * 60 // 20 minutes in seconds
  const [time, setTime] = useState(initialTime) // the stopwatch time state

  const totalBalance = 540058999

  const handleGenerateNewToken = () => {
    const token = generateToken()
    setToken(token)
  }

  useEffect(() => {
    handleGenerateNewToken()
  }, [])

  useEffect(() => {
    // Exit the function if time reaches zero
    if (time <= 0) {
      // You can add a reload or another action here
      alert('Time is up! Reload the page.')
      return
    }

    // Update the time every second
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [time])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(token)
    setCopiedText(true)

    // Clear the copied text after 3 seconds (adjust the timeout duration as needed)
    setTimeout(() => {
      setCopiedText(false)
    }, 2000)
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <main
      className={` flex justify-start items-start gap-10 w-full pb-[5rem] laptop:flex-row laptop:px-10 laptop:pb-10 tablet:px-10 tablet:pb-[10rem] tablet:flex-col mobile:flex-col mobile:px-5 mobile:h-full mobile:pb-[10rem]  `}
    >
      <section className='laptop:w-[70%] tablet:w-full mobile:w-full flex flex-col justify-start items-start gap-5 '>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-xl capitalize '>deposit</h1>
          <button
            type='button'
            className='tooltip bg-[#00000093] p-3 rounded-md relative inline-block '
          >
            <BiQuestionMark />{' '}
            <span className='tooltip-text '>
              This is the detail you want to show
            </span>
          </button>
        </div>

        <div className='tab flex justify-center items-center gap-2 w-[200px] border border-secondary rounded-full p-2 laptop:h-[4rem] tablet:h-[4rem] mobile:h-[4rem] '>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={` h-full w-full rounded-full uppercase text-sm ${
                activeTab === tab
                  ? 'bg-primary text-black'
                  : 'bg-[transparent] '
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'crypto' && (
          <article className='w-full flex flex-col justify-start items-start gap-10'>
            <div className='flex flex-col justify-start items-start gap-10 w-full'>
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
                  <h1 className='capitalize font-medium '>total balance: </h1>
                  <span className='text-sm text-secondary'>
                    {totalBalance.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'BTC',
                    })}
                  </span>
                </div>
              </div>

              <div className='flex flex-col justify-start items-start gap-2 w-full'>
                <div className='flex flex-col justify-start items-start gap-3 w-full relative'>
                  <label
                    htmlFor='coin_address'
                    className='text-sm font-normal capitalize text-secondary '
                  >
                    {selectedOption} Address:
                  </label>{' '}
                  <input
                    type='text'
                    name='coin_address'
                    id='coin_address'
                    value={token}
                    readOnly
                    placeholder='Withdraw Address'
                    className='dark:bg-[#161D26] bg-secondary px-5 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
                  tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px] mobile:pr-[4rem] '
                  />
                  <div className='absolute desktop:top-[3rem] laptop:top-4 tablet:top-[62px] mobile:top-[61px] right-5 '>
                    {copiedText && (
                      <span className='text-sm bg-[#000] py-1 px-2 rounded-md absolute -top-5 right-0 '>
                        Copied
                      </span>
                    )}
                    <button onClick={handleCopyClick} className='text-xl'>
                      <BiCopy />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-start items-start gap-3 w-full'>
              <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
                Tips
              </h1>
              <article className='dark:bg-white bg-secondary p-5 rounded-2xl flex flex-col justify-start items-start gap-5 py-10 text-black '>
                {instruction.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className='flex justify-start items-start gap-2 laptop:text-base tablet:text-xl mobile:text-base'
                    >
                      <span className='bg-primary p-1 rounded-full mt-2 '></span>
                      <p>{item.content}</p>
                    </div>
                  )
                })}
              </article>
            </div>
          </article>
        )}

        {activeTab === 'fiat' && (
          <article className='w-full flex flex-col justify-start items-start gap-10'>
            <div className='flex flex-col justify-start items-start gap-10 w-full'>
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
                  <h1 className='capitalize font-medium '>total balance: </h1>
                  <span className='text-sm text-secondary'>
                    {totalBalance.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'BTC',
                    })}
                  </span>
                </div>
              </div>

              <div className='flex flex-col justify-start items-start gap-2 w-full'>
                <div className='flex flex-col justify-start items-start gap-3 w-full relative'>
                  <label
                    htmlFor='coin_address'
                    className='text-sm font-normal capitalize text-secondary '
                  >
                    {selectedOption} Address:
                  </label>{' '}
                  <input
                    type='text'
                    name='coin_address'
                    id='coin_address'
                    value={token}
                    readOnly
                    placeholder='Withdraw Address'
                    className='dark:bg-[#161D26] bg-secondary px-5 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
                  tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px]'
                  />
                  <div className='absolute desktop:top-[3rem] laptop:top-4 tablet:top-5 mobile:top-4 right-5 '>
                    {copiedText && (
                      <span className='text-sm bg-[#000] py-1 px-2 rounded-md absolute -top-5 right-0 '>
                        Copied
                      </span>
                    )}
                    <button onClick={handleCopyClick} className='text-xl'>
                      <BiCopy />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-start items-start gap-3 w-full'>
              <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
                Tips
              </h1>
              <article className='dark:bg-white bg-secondary p-5 rounded-2xl flex flex-col justify-start items-start gap-5 py-10 text-black '>
                {instruction.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className='flex justify-start items-start gap-2 laptop:text-base tablet:text-xl mobile:text-base'
                    >
                      <span className='bg-primary p-1 rounded-full mt-2 '></span>
                      <p>{item.content}</p>
                    </div>
                  )
                })}
              </article>
            </div>
          </article>
        )}
      </section>

      <section className='flex flex-col justify-start items-start gap-7 laptop:w-[30%] tablet:w-full mobile:w-full '>
        <h1 className='text-xl font-medium'>Deposit network:</h1>
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

        <div className='flex justify-start items-center gap-2'>
          <BsClock />
          <p className='text-[grey] '>
            Avarage arrival time:{' '}
            <span className='text-black dark:text-white'>
              {formatTime(time)}
            </span>
          </p>
        </div>

        <QrCodeGenerator value='www.google.com' size={200} />

        <div className='flex flex-col justify-start items-start gap-5 w-full'>
          <BsExclamationCircle className='text-2xl' />
          <h1 className='font-medium laptop:text-base tablet:text-xl mobile:text-base'>
            Sending only {networkOption} to this addreess!{' '}
          </h1>
          <p className='text-secondary laptop:text-base tablet:text-xl mobile:text-base '>
            Sending coin or token other than {networkOption} to this Address may
            reault in the los of your deposit.
          </p>
        </div>
      </section>
    </main>
  )
}
