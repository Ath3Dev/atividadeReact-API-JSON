import { Link } from 'react-router-dom'
import { RandomProducts } from '../components/RandomProducts'
import singleSeater from '../assets/img/pageHome/singleSeater.svg'
import sideTable from '../assets/img/pageHome/sideTable.svg'
import sideCouch from '../assets/img/pageHome/sideCouch.svg'
import asgaardCouch from '../assets/img/pageHome/asgaardCouch.svg'
import '../assets/css/Home.css'

export function Home() {
    return (
        <main>
            <div className="yellow-bg">
                <div className="text">
                    <h1>Rocket single seater</h1>
                    <div className="button1">
                        <Link to="/shop" className="button">View More</Link>
                        <hr />
                    </div>
                </div>
                <div className="img">
                    <img src={singleSeater} alt="Single Seater img/svg" />
                </div>
            </div>
            <div className="grey-bg">
                <div className="cornerFurniture">
                    <img src={sideTable} alt="" />
                    <div className="viewMore">
                        <Link to="/shop" className="button">View More</Link>
                        <hr />
                    </div>
                </div>
                <div className="cornerFurniture">
                    <img src={sideCouch} alt="" />
                    <div className="viewMore">
                        <Link to="/shop" className="button">View More</Link>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="topPicks">
                <div className="text">
                    <h1>Top Picks For You</h1>
                    <h6>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h6>
                </div>
                <RandomProducts />
                <div className="viewMore">
                    <Link to="/shop" className="button">View More</Link>
                    <hr />
                </div>
            </div>

            <div className="arrivals">
                <div className="img">
                    <img src={asgaardCouch} alt="" />
                </div>
                <div className="text">
                    <h3>New Arrivals</h3>
                    <h1>Asgaard Sofa</h1>
                    <button>Order Now</button>
                </div>
            </div>

        </main>

    )
}