import { IoBagHandleSharp } from "react-icons/io5";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
    return (
        <div>
            <section className="card">
                <img className='card-img' src={img} alt={title} />
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        {star} {star} {star} {star}
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <IoBagHandleSharp className='bag-icon' />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Card