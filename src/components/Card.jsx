import logo from "../assets/images/visa-logo.png"

export default function Card({card}) {
    return(
        <div className="Card">
            <div className="Card__front">
                <img src={logo} alt="visa"/>
                <div>
                    <p className="Card__number">{card.number}</p>
                    <div className="Card__front--info">
                        <p>{card.name}</p>
                        <div className="Card__front--date">
                            <p>{card.mounth}/</p>
                            <p>{card.year}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Card__back">
                <p className="Card__back--cvc">{card.cvc}</p>
            </div>
        </div>
    )
}