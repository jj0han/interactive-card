export default function Info({handleChange, handleSubmit}) {
    return(
        <form className="Info">
            <label className="Info__label" htmlFor="Info__name">CARDHOLDER NAME <input className="Info__inputs" placeholder="e.g. Jane Appleseed" type="text" name="name" id="Info__name" onChange={handleChange}/></label>
            <label className="Info__label" htmlFor="Info__number">CARD NUMBER <input className="Info__inputs" placeholder="e.g. 1234 5678 9123 0000" type="text" name="number" id="Info__number" onChange={handleChange}/></label>
            <div className="Info__line">
                <div className="Info__date">
                    <label>EXP. DATE (MM/YY)</label>
                    <div>
                        <input className="Info__date--inputs Info__inputs" placeholder="MM" type="text" name="mounth" onChange={handleChange}/>
                        <input className="Info__date--inputs Info__inputs" placeholder="YY" type="text" name="year" onChange={handleChange}/>
                    </div>
                </div>
                <div className="Info__cvc">
                    <label className="" htmlFor="Info__cvc">CVC</label>
                    <input className="Info__inputs" placeholder="e.g. 123" type="text" name="cvc" id="Info__cvc" onChange={handleChange}/>
                </div>
            </div>
            <button className="Info__btn" onClick={handleSubmit}>Confirm</button>
        </form>
    )
}