export default function StackedCardsLayout({ children }: any) {
  return (
    <ul role='list' className='space-y-8 mt-12'>
      {children?.map((item: any) => (
        <li
          key={item.id}
          className='overflow-hidden bg-white  py-4 shadow border-t sm:rounded-md '
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
