import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png" 
                alt=""/>

                <div className="home__row">
                    <Product
                        id="12321341" 
                        title="Nintendo Switch™ w/ Neon Blue & Neon Red Joy-Con™ + Mario Kart™ 8 Deluxe (Full Game Download) + 3 Month Nintendo Switch Online Individual Membership"
                        price={209.60}
                        image="https://images-na.ssl-images-amazon.com/images/I/81j0j3yvQVL._SL1500_.jpg"
                        rating={5}/>

                    <Product 
                        id="3254354345"
                        title="Samsung Flat 82-Inch 4K 8 Series UHD Smart TV with HDR and Alexa Compatibility - 2019 Model"
                        price={1099.70}
                        image="https://images-na.ssl-images-amazon.com/images/I/91r0Iqby0QL._AC_SL1500_.jpg"
                        rating={5}/>
                </div>

                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Audio-Technica ATHM50XBT Wireless Bluetooth Over-Ear Headphones, Black"
                        price={179.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81d3fB4VeDL._AC_SL1500_.jpg"
                        rating={5}/>
                    <Product 
                        id="23445930"
                        title="Numark Party Mix | Complete DJ Controller Set for Serato DJ with 2 Decks, Party Lights, Headphone Output, Performance Pads and Crossfader / Mixer"
                        price={119.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81eR5VzjExL._AC_SL1500_.jpg"
                        rating={4}/>
                    <Product 
                        id="49538094"
                        title="PlayStation 5 Console with Ultra HD Blu-Ray Disc Drive"
                        price={509.60}
                        image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
                        rating={5}/>
                </div>

                <div className="home__row">
                    <Product 
                        id="90829332"
                        title="Samsung Galaxy S20+ Plus 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage"
                        price={119.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61b295Soc9L._AC_SL1275_.jpg"
                        rating={5}/>
                    <Product 
                        id="90829378"
                        title="Apple iPhone 11 Pro, 64GB, Midnight Green"
                        price={779.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61vflt1U5gL._AC_SL1024_.jpg"
                        rating={5}/>
                    <Product 
                        id="90829312"
                        title="Xiaomi Redmi Note 9 Pro 128GB + 6GB RAM, 6.67, FHD+ DotDisplay, 64MP AI Quad Camera"
                        price={284.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/61VTwVvavNL._AC_SL1000_.jpg"
                        rating={5}/>
                    <Product 
                        id="90829399"
                        title="Huawei P30 Pro Dual/Hybrid-SIM 128GB 4G/LTE Smartphone (Breathing Crystal)"
                        price={836.60}
                        image="https://images-na.ssl-images-amazon.com/images/I/81cF90OkW3L._AC_SL1500_.jpg"
                        rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
