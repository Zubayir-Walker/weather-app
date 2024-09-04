function Input({handleChange, value, title, name, color}) {
    return (
        <div>
            <label className="sidebar-label-container">
                <input type="radio" name={name} onChange={handleChange} value={value}/>
                <span className="checkmark" style={{backgroundColor: color}}></span>{title}
            </label>
            {/* <label className="sidebar-label-container">
                <input type="radio" name='test' />
                <span className="checkmark"></span>Sneakers
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name='test' />
                <span className="checkmark"></span>Flats
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name='test' />
                <span className="checkmark"></span>Sandals
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name='test' />
                <span className="checkmark"></span>Heels
            </label> */}
        </div>
    )
}

export default Input