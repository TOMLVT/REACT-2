import Logo from '../../assets/logo.png'
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
const Menu = [
    {
     id : 1,
     name : 'Home',
     link : '/#'
    },
    {
        id : 2,
        name : 'Best Seller',
        link : '/#Services',
       },
];

const DropDownLinks = [
    {
        name : "Top Sellers",
        link : '/#',
    },
    {
        name : "New Arrivals",
        link : '/#',
    },
    {
        name : "Trending Now",
        link : '/#',
    },
]

const NavBar = () => {
  return (
    <>
    <div className="shadow-md w-full bg-white dark:bg-gray-900 duration-200 relative z-40">
      <div className="container py-3 md:py-0">
      <div className='flex justify-between items-center'>

     
       
        {/* logo section */}
            <div>
                <a href="#" className='flex items-center text-2xl sm:text-3xl gap-2'>
                    <img src={Logo} alt="" className='w-10'/>
                    <span className='font-bold'>TOM</span>Store
                </a>
            </div>
       
        {/* Menu section */}
        <div className='flex justify-between items-center gap-2 lg:gap-B'>
        <div>
            <DarkMode/>
        </div>
            <ul className='hidden md:flex gap-4 items-center'>
               {Menu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.link} className='inline-block py-4 px-4 hover:text-primary dark:text-white'>{menu.name}</a>
                        </li>
               ))}
               {/* Simple Dropdown menu */}
               <li className='group relative cursor-pointer'>
                <a href='#' className='flex h-[72px] items-center gap-[2px] dark:text-white'>Quick Links
                    <span>
                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                    </span>
                </a>
                {/*DropDown menu */}
                <div className='absolute -left-9 z-[9999] hidden w-[150px] group-hover:block bg-white dark:bg-gray-800 dark:text-black p-2 shadow-md rounded-md'>
                    <ul>
                        {DropDownLinks.map((link) => (
                            <li key={link.link}>
                                <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:text-white'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
               </li>
            </ul>
            {/* Cart section */}
            <button onClick={() => alert('Cart is empty')}  className='hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full'>
            <FaCartShopping className='text-xl text-black dark:text-white drop-shadow-sm cursor-pointer' />           
            </button>
        </div>
      </div>  
      </div>
    </div>
    </>
  )
}

export default NavBar
