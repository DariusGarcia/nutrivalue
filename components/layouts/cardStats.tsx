// const stats = [
//   {
//     name: 'Revenue',
//     value: '$405,091.00',
//     change: '+4.75%',
//     changeType: 'positive',
//   },
//   {
//     name: 'Overdue invoices',
//     value: '$12,787.00',
//     change: '+54.02%',
//     changeType: 'negative',
//   },
//   {
//     name: 'Outstanding invoices',
//     value: '$245,988.00',
//     change: '-1.39%',
//     changeType: 'positive',
//   },
//   {
//     name: 'Expenses',
//     value: '$30,156.00',
//     change: '+10.18%',
//     changeType: 'negative',
//   },
// ]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function CardStats({ stats }: any) {
  return (
    <div className='flex flex-row'>
      <dl className='mx-auto grid grid-cols-2  '>
        <div
          key={stats.CHOCDF}
          className='flex flex-row items-baseline justify-between md:gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 '
        >
          <div>
            <dt className='text-sm font-medium leading-6 text-gray-500'>
              Cals
            </dt>
            <dd className='text-gray-700 text-xs font-medium'>
              {stats.ENERC_KCAL}
            </dd>
          </div>
        </div>
      </dl>
      <dl className='mx-auto '>
        <div
          key={stats.CHOCDF}
          className='flex flex-row items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 '
        >
          <div>
            <dt className='text-sm font-medium leading-6 text-gray-500'>
              Carbs
            </dt>
            <dd className='text-gray-700 text-xs font-medium'>
              {stats.CHOCDF}
            </dd>
          </div>
        </div>
      </dl>
      <dl className='mx-auto '>
        <div
          key={stats.CHOCDF}
          className='flex flex-row items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 '
        >
          <div>
            <dt className='text-sm font-medium leading-6 text-gray-500'>
              Protein
            </dt>
            <dd className='text-gray-700 text-xs font-medium'>
              {stats.PROCNT}
            </dd>
          </div>
        </div>
      </dl>
      <dl className='mx-auto '>
        <div
          key={stats.CHOCDF}
          className='flex flex-row items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 '
        >
          <div>
            <dt className='text-sm font-medium leading-6 text-gray-500'>
              Fats
            </dt>
            <dd className='text-gray-700 text-xs font-medium'>{stats.FAT}</dd>
          </div>
        </div>
      </dl>
    </div>
  )
}
