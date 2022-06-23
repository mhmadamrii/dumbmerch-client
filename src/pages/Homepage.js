import NavbarHome from "../components/Navbar/NavbarHome";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import { useEffect } from "react";

const Homepage = () => {

    useEffect(() => {
        console.log("Component Homepage did mount")
        return () => {
            console.log("Component Homepage will unmount")
        }
    }, []);

    const style = {
        container: {
            // border: '1px solid red',
            margin: '10vh auto',
            width: '1500px'
        },

        cards: {
            // border: '1px solid blue',
            height: '410px',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '5px',
        },
        
        cardsImg: {
            margin: '10px',
            backgroundColor: '#212121',
        },

        cardText: {
            // border: '1px solid',
            padding: '10px',
            backgroundColor: '#212121'
        }

    }
    document.title = "DumbMerch | Homepage";
    return(
        <>
            <NavbarHome />
            <div style={style.container}>
                <h3 style={{color: '#F74D4D', padding: '10px'}}>Product</h3>
                <div style={style.cards}>

                    {/* cards image */}
                    <div style={style.cardsImg}>
                        <a href="/detail-product">
                            <img src={Product1} alt="product1 (mouse)" />
                        </a>
                        <div style={style.cardText}>
                            <h2 style={{color: '#F74D4D', backgroundColor: '#212121'}}>Mouse</h2>
                            <p style={{backgroundColor: '#212121'}}>Rp.500.000</p>
                            <p style={{backgroundColor: '#212121'}}>stock: 600</p>
                        </div>
                    </div>

                    <div style={style.cardsImg}>
                        <a href="/detail-product">
                            <img src={Product2} alt="product2 (mouse)" />
                        </a>
                        <div style={style.cardText}>
                            <h2 style={{color: '#F74D4D', backgroundColor: '#212121'}}>Keyboard</h2>
                            <p style={{backgroundColor: '#212121'}}>Rp.700.000</p>
                            <p style={{backgroundColor: '#212121'}}>stock: 600</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Homepage;