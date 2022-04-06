import { useState } from 'react';
import { HiMenuAlt4} from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/MetaMask.png';

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav id='Home' className='w-full flex md:justify-center justify-between items-center '>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <a href="#">
                    <img src={logo} alt="logo" className='w-28 cursor-pointer p-5' />
                </a>
            </div>

            <ul className='text-white text-2xl md:flex hidden list-none flex-row justify-between items-center flex-initial ml-4'>
                {['Home', 'Services', 'Transactions', 'Info'].map( (item, index) => (
                    <a href={`#${item}`} className='hover:opacity-80'>
                        <NavbarItem key={ item + index } title={item}/>
                    </a>
                ))}
            </ul>
                    
            <div className='flex relative'>
            {!toggleMenu && (
                <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
                <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
            {toggleMenu && (
            <ul
                className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                <li className='text-xl w-full my-2 cursor-pointer'>
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />  
                </li>
                {['Home', 'Services', 'Transactions', 'Contact'].map( (item, index) => (
                    <a href={`#${item}`} className='text-xl mt-2 hover:opacity-80'>
                        <NavbarItem key={ item + index } title={item}/>
                    </a>
                ))}
            </ul>
                )}
            </div>
        </nav> 
    ) 
}

export default Navbar