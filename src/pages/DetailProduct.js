import NavbarHome from "../components/Navbar/NavbarHome";
import Product1 from "../assets/Product1.png";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const DetailProduct = () => {
    // const navigate = useNavigate();
    const style = {
        container: {
            // border: '1px solid red',
            display: 'flex',
            width: '1200px',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px',
            margin: '10vh auto'
        },
        mainRight: {
            width: '550px',
            overflow: 'auto',
            // border: '1px solid',
            padding: '10px'
        }
    }

    document.title = "DumbMerch | Detail-product"
    return(
        <>
            <NavbarHome />
            <div className="container" style={style.container}>
                <div className="main-left">
                    <img src={Product1} style={{width: '440px', height: '550px'}} alt="Product1" />
                </div>
                <div className="main-right" style={style.mainRight}>
                    <h1 style={{color: '#F74D4D'}}>Mouse</h1>
                    <p>Stock: 600</p>
                    <ul>
                        <li>Wireless Mouse</li>
                        <li>Konektivitas wireless 2.4 GHz</li>
                        <li>Jarak wireless hingga 10m</li>
                        <li>Plug and Play</li>
                        <li>Baterai tahan hingga 12 bulan</li>
                    </ul>
                    <p>Mouse wirelss Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). Mendukung sistem operasi Windows 7, 8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
                    <span style={{color: '#F74D4D', float: 'right'}}>Rp 300.900</span>
                    <div className="d-grid gap-2" style={{marginTop: '50px'}}>
                        <Button variant="danger" size="lg">Buy</Button> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default DetailProduct;