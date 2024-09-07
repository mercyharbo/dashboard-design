'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import LoadingSpinner from '@/components/loading'

/* The `const account` is creating an object with two properties: `amount` and `coin`. */
const account = {
  amount: 5750,
  coin: 0o004765670, // This is an octal number
}

export default function Wallet() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)

  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
 used to fetch data from an API and update the component's state. */
  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=100'
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '0fe76b3fcemsh9aa3e0e31f4e360p1c009djsna483432dbf84',
          'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const data = await response.json() // Use .json() instead of .text()
        setCoins(data.data)

        if (!Array.isArray(data)) {
          throw new Error('Data is not an array')
        }

        // const dataArray = Object.values(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false) // Set loading to false regardless of success or failure
      }
    }

    // Call the fetchData function somewhere in your component or lifecycle
    fetchData()
  }, [])

  /* The code `if (loading) return <p className=''>Loading...</p>` is checking if the `loading` state
  is true. If it is true, it will return a paragraph element with the text "Loading...". This is
  used to display a loading message while the data is being fetched from the API. */
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <main
      className=' flex flex-col justify-start items-start gap-10 w-full laptop:px-10 laptop:py-5 tablet:px-10 tablet:pb-[10rem] 
    mobile:px-5 mobile:pb-[10rem] '
    >
      <header
        className='bg-primary text-black rounded-2xl flex flex-row justify-between items-start flex-wrap gap-5 laptop:w-full laptop:p-10 tablet:p-10
       tablet:w-full mobile:w-full mobile:p-5 '
      >
        <div className='flex flex-col justify-start items-start gap-3'>
          <span className='text-base capitalize '>current balance</span>
          <h1 className='capitalize font-bold laptop:text-5xl tablet:text-4xl mobile:text-4xl '>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(account.amount)}
          </h1>
          <span className='text-sm '>
            {account.coin.toLocaleString('en-US', {
              style: 'currency',
              currency: 'BTC',
            })}{' '}
          </span>
        </div>

        <div className='flex justify-start items-center gap-5 flex-wrap'>
          <Link
            href='/fund'
            className='py-3 px-5 rounded-xl bg-themeColor text-white capitalize'
          >
            fund
          </Link>
          <Link
            href='/withdraw'
            className='py-3 px-5 rounded-xl bg-themeColor text-white capitalize'
          >
            withdraw
          </Link>
        </div>
      </header>

      {/* <header
        className='flex w-full laptop:flex-row laptop:justify-start laptop:items-start laptop:gap-10 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-10
       mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-10 '
      >
       

        <div className='laptop:h-[200px] tablet:h-[500px] mobile:h-[280px] w-[100%] pt-10'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray='1 0'
                vertical={false}
                stroke='#00000080'
              />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line type='monotone' dataKey='uv' stroke='#cbfb45ff' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </header> */}

      <div className='overflow-x-auto scrollbar-hide w-full '>
        <table className=' min-w-full bg-clip-border '>
          <thead className='h-[4rem] border-b border-lightgrey '>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                #
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Coin Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                1h %
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                24h %
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                7d %
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Market Cap
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Volume(24h)
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Circulating Supply
              </th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin, index) => {
              return (
                <tr
                  key={coin.id}
                  className='even:bg-lightgrey cursor-pointer h-[4rem]'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900'>{index + 1}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{coin.name}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>
                      {parseFloat(coin.price_usd).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div
                      className={`text-sm font-medium ${
                        coin.percent_change_1h.startsWith('-')
                          ? 'text-[red] '
                          : 'text-[#16c685] '
                      }`}
                    >
                      {coin.percent_change_1h}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div
                      className={`text-sm font-medium ${
                        coin.percent_change_24h.startsWith('-')
                          ? 'text-[red] '
                          : 'text-[#16c685] '
                      }`}
                    >
                      {coin.percent_change_24h}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div
                      className={`text-sm font-medium ${
                        coin.percent_change_7d.startsWith('-')
                          ? 'text-[red] '
                          : 'text-[#16c685] '
                      }`}
                    >
                      {coin.percent_change_7d}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>
                      {' '}
                      {parseFloat(coin.market_cap_usd).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{coin.volume24}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{coin.csupply}</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
