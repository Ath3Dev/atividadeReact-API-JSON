import './style.css'
export function Banner() {
    return (
        <div className="banner">
            <div className="delivery">
                <h1>Free Delivery</h1>
                <h4>For all oders over $50, consectetur adipim scing elit.</h4>
            </div>
            <div className="daysreturn">
                <h1>90 Days Return</h1>
                <h4>If goods have problems, consectetur adipim scing elit.</h4>
            </div>
            <div className="securepayment">
                <h1>Secure Payment</h1>
                <h4>100% secure payment, consectetur adipim scing elit.</h4>
            </div>
        </div>
    )
}