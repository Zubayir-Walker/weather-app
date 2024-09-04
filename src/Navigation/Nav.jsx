import './nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CiShoppingCart } from "react-icons/ci";

function Nav({handleInputChange}) {
    return (
        <div>
            <nav className="nav-container">
                <input type="text" className='search-input' onChange={handleInputChange} placeholder='Enter your Shoes...' />
                <div className="profile-container">
                    <a href="#">
                        <FiHeart className='nav-icons' />
                    </a>
                    <a href="#">
                        <CiShoppingCart className='nav-icons' />
                    </a>
                    <a href="#">
                        <AiOutlineUserAdd className='nav-icons' />
                    </a>
                </div>
            </nav>

        </div>
    )
}

export default Nav