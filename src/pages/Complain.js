import NavbarHome from "../components/Navbar/NavbarHome";
import Client1 from "../assets/Client1.png";
import Client2 from "../assets/Client2.png"
import FAQ from "../assets/FAQ2.jpg";

const Complain = () => {
    const style = {
        main: {
            // border: '1px solid red',
            width: '1500px',
            height: '100vh',
            display: 'flex',
            padding: '10px',
            margin: ' auto',
            justifyContent: 'space-between'
        },
        wrapperChat: {
            display: 'flex',
            // border: '1px solid red',
            margin: '10px 0',
            padding: '10px'
        },
        containerChat: {
            // border: '1px solid',
            width: '70%',
            margin: '0 auto'
        },
        chatBoxText: {
            // border: '1px solid red',
            display: 'flex'
        }
    }

    document.title = "DumbMerch | Complain";

    return(
        <>
            <NavbarHome />
            <div className="main" style={style.main}>
            
                <div className="cardChat" style={{borderRight: '1px solid #6A6A6A', paddingRight: '10vh'}}>
                    <div className="wrapperChat" style={style.wrapperChat}>
                        <img src={Client1} style={{width: '50px', height: '50px', marginTop: '8px'}} alt="client1" />
                        <div className="chatText" style={{margin: '8px 0 0 10px'}}>
                            <h5>egi_lol</h5>
                            <h6>Hello Admin, I need Your Help</h6>
                        </div>    
                    </div>


                    <div className="wrapperChat" style={style.wrapperChat}>
                        <img src={Client2} style={{width: '50px', height: '50px', marginTop: '8px'}} alt="client2" />
                        <div className="chatText" style={{margin: '8px 0 0 10px'}}>
                            <h5>beach_lover</h5>
                            <h6>Hello Admin, I need Your Help</h6>
                        </div>    
                    </div>
                    <br />
                </div>
                
                
                <div className="containerChat" style={style.containerChat}>
                    <div className="chatBox" style={{ marginTop: '70vh'}}>
                        <div className="chatBoxText" style={style.chatBoxText}>
                            <img src={Client1} style={{width: '50px', height: '50px', marginTop: '8px'}} alt="client1" />
                            <h6 style={{backgroundColor: '#6A6A6A', padding: '10px', borderRadius: '5px', margin: '10px 0 10px 10px'}}>Hello Admin, I need your help</h6>
                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Send Message" style={{backgroundColor: '#ABABAB', marginTop: '10px' }}></input>
                    </div> 
                </div>
                <a href="/FAQ"><img src={FAQ} style={{width: '50px', height: '50px', }} alt="faqImage" /></a>
                
            </div>
        </>
    )
};

export default Complain;