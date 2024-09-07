import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function Activities() {
  const transactions = [
    {
      id: 'eth',
      name: 'Ethereum Purchased',
      amountCrypto: '0.0154 ETH',
      amountUSD: '$100.00',
      status: 'Pending',
      date: 'February 21, 2021',
    },
    {
      id: 'btc1',
      name: 'Bitcoin Purchased',
      amountCrypto: '0.3 BTC',
      amountUSD: '$30.00',
      status: 'Completed',
      date: 'February 14, 2021',
    },
    {
      id: 'btc2',
      name: 'Bitcoin Purchased',
      amountCrypto: '0.0025 BTC',
      amountUSD: '$80.50',
      status: 'Completed',
      date: 'January 14, 2021',
    },
    {
      id: 'btc3',
      name: 'Bitcoin Purchased',
      amountCrypto: '0.0025 BTC',
      amountUSD: '$80.50',
      status: 'Completed',
      date: 'January 14, 2021',
    },
    {
      id: 'btc4',
      name: 'Bitcoin Purchased',
      amountCrypto: '0.0025 BTC',
      amountUSD: '$80.50',
      status: 'Completed',
      date: 'January 14, 2021',
    },
  ]

  return (
    <div className='flex flex-col justify-start items-start gap-5 w-full '>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-2xl font-semibold'>ACTIVITY</h2>
        <Link
          href='#more-activity'
          className='text-primary flex items-center gap-2'
        >
          More Activity <BsArrowRight />{' '}
        </Link>
      </div>

      <div className='overflow-x-auto snap-x snap-mandatory w-full h-[200px] py-5 scrollbar-hide'>
        <table className='min-w-full bg-primary text-white rounded-xl'>
          <thead>
            <tr>
              <th className='py-2 px-4 text-[#dcd7d7]'>Transaction</th>
              <th className='py-2 px-4 text-[#dcd7d7]'>Amount (Crypto)</th>
              <th className='py-2 px-4 text-[#dcd7d7]'>Amount (USD)</th>
              <th className='py-2 px-4 text-[#dcd7d7]'>Status</th>
              <th className='py-2 px-4 text-[#dcd7d7]'>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className='snap-start text-sm odd:bg-[#eceaea56]'
              >
                <td className='py-2 px-4'>{transaction.name}</td>
                <td className='py-2 px-4'>{transaction.amountCrypto}</td>
                <td className='py-2 px-4'>{transaction.amountUSD}</td>
                <td
                  className={`py-2 px-4 ${
                    transaction.status === 'Pending'
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  {transaction.status}
                </td>
                <td className='py-2 px-4'>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
