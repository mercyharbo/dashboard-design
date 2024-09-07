'use client'

import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js'

import 'chartjs-adapter-date-fns'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
)

import LoadingSpinner from '@/components/loading'
import Activities from '@/components/activities'

export default function Dashboard() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [chartData, setChartData] = useState({})
  const [markets, setMarkets] = useState([])

  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
 used to fetch data from an API and update the component's state. */
  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/?start=0&limit=4'
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
        {
          params: {
            vs_currency: 'usd',
            days: '7',
          },
        }
      )

      const prices = result.data.prices.map((price) => ({
        x: new Date(price[0]),
        y: price[1],
      }))

      setChartData({
        datasets: [
          {
            label: 'Bitcoin Price',
            data: prices,
            borderColor: '#13947f',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 3,
            pointRadius: 0,
            tension: 0.1,
          },
        ],
      })
    }

    const fetchMarkets = async () => {
      const result = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )

      const markets = result.data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        total_volume: coin.total_volume,
        price_change_percentage_24h: coin.price_change_percentage_24h,
      }))

      setMarkets(markets)
    }

    fetchMarkets()
    fetchData()
  }, [])

  /* The code `if (loading) return <p className=''>Loading...</p>` is checking if the `loading` state
  is true. If it is true, it will return a paragraph element with the text "Loading...". This is
  used to display a loading message while the data is being fetched from the API. */
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <main className='grid grid-cols-1 gap-10 w-full px-5 py-10 desktop:px-10'>
      <div className='flex justify-start items-start w-full gap-5 desktop:w-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
        {coins?.slice(0, 4)?.map((item) => {
          const formattedBalance = parseFloat(item.price_usd).toLocaleString(
            'en-US',
            {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )

          return (
            <h1
              key={item.id}
              className='flex flex-col justify-center items-start gap-5 border border-primary rounded-xl p-3 snap-start h-[150px] w-[200px] laptop:h-auto'
            >
              <h4>{item.symbol}</h4>
              <span className='laptop:text-3xl tablet:text-3xl mobile:text-2xl font-semibold'>
                {formattedBalance}
              </span>

              <div className='flex justify-between items-center gap-2 w-full'>
                <div
                  className={`flex flex-col justify-start items-start gap-1 text-sm ${
                    item.percent_change_1h < 0 ? 'text-danger' : 'text-primary'
                  }`}
                >
                  <span className='text-[grey]'>1H</span>
                  {item.percent_change_1h}%
                </div>

                <div
                  className={`flex flex-col justify-start items-start gap-1 text-sm ${
                    item.percent_change_24h < 0 ? 'text-danger' : 'text-primary'
                  }`}
                >
                  <span className='text-[grey]'>24H</span>
                  {item.percent_change_24h}%
                </div>

                <div
                  className={`flex flex-col justify-start items-start gap-1 text-sm ${
                    item.percent_change_7d < 0 ? 'text-danger' : 'text-primary'
                  }`}
                >
                  <span className='text-[grey]'>7D</span>
                  {item.percent_change_7d}%
                </div>
              </div>
            </h1>
          )
        })}
      </div>

      <Activities />

      <div className='max-w-full h-full mobile:h-[300px] tablet:h-[400px] desktop:h-[400px] '>
        <Line
          data={chartData}
          options={{
            // responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
              },
              y: {
                beginAtZero: false,
              },
            },
          }}
        />
      </div>
    </main>
  )
}
