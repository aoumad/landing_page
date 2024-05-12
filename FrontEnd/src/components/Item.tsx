import React from 'react'

function Item({items, title}: {items: any, title: string}) {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {items.map((item: any) => (
            <li key={item.name}>
                <a
                className='text-gray-400 hover:text-[#40b18d] duration-300 text-sm cursor-pointer leading-6'
                href={item.link}
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
  );
};

export default Item