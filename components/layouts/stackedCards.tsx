import { v4 as uuidv4 } from 'uuid'

export default function StackedCardsLayout({ children }: any) {
  return (
    <ul role='list' className='space-y-8 mt-12'>
      {children?.map((item: any) => (
        <li
          key={uuidv4()}
          className='overflow-hidden bg-white  py-4 shadow sm:rounded-md '
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
