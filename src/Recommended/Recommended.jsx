import './recommended.css'
import Button from '../component/Button'

function Recommended({ handleClick }) {
    return (
        <>
            <div>
                <h2 className='recommended-title'>Recommended</h2>
                <div className="recommended-flex">
                    <Button onclickHandler={handleClick} value="" title="All Products" />
                    <Button onclickHandler={handleClick} value="Nike" title="Nike" />
                    <Button onclickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Button onclickHandler={handleClick} value="Puma" title="Puma" />
                    <Button onclickHandler={handleClick} value="Vans" title="Vans" />
                </div>
            </div>
        </>
    )
}

export default Recommended