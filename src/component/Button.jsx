function Button({onclickHandler, value, title}) {
    return (
        <div>
            <button onClick={onclickHandler} value={value} className="btns">{title}</button>
        </div>
    )
}

export default Button