import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from '../../assets/Logo.png';
import Homepage from "../../pages/Homepage";

const Login = () => {
    document.title = "DumbMerch | Login";
    const navigate = useNavigate();
    const [state, setState] = useState({
        isLogin: false,
        user: {
            email: '',
            password: ''
        }
    });

    // mounting component with useEffect
    useEffect(() => {{
        console.log("Component Login did mount")
    }},[]);

    // did update
    useEffect(() => {
        console.log("Component Login did update")
    }, [state]);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        setState({
            isLogin: true,
            user: {
                email, password
            }
        })
    }


    return(
        <>
            {state.isLogin ? <Homepage /> : 
            ( 
                <>
                    <div className="main" style={{width: '1100px', margin: '20vh auto'}}>
                    <Container>
                        <Row>
                            <Col>
                                <img src={Logo} style={{width: '280px'}} alt="logo" />
                                <h1 style={{marginTop: '20px'}}>Easy, Fast and Reliable</h1>
                                <p style={{color: '#6A6A6A'}}>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                                <div className="btn" style={{}}>
                                
                                <Button variant="danger" style={{
                                padding: '10px 50px',
                                fontSize: '20px', 
                                marginRight: '30px', 
                                marginTop: '20px'}} 
                                onClick={()=> {navigate("/homepage")}}>Login</Button>{' '}
                                
                                <Button variant="dark" style={{padding: '10px 50px', 
                                fontSize: '20px', 
                                marginTop: '20px'}} 
                                onClick={()=> {navigate("/register")}}>Register</Button>{' '}
                                </div>
                            </Col>
                            <Col>
                                <div className="login" 
                                style={{
                                    // border: '1px solid red',
                                    padding: '30px',
                                    margin: '30px 0',
                                    height: '340px',
                                    fontWeight: '900px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(18, 15, 15)'}}>
                                    <h2 style={{backgroundColor: 'rgba(18, 15, 15)'}}>Login</h2>

                                <form style={{ backgroundColor: 'rgba(18, 15, 15)'}} 
                                onSubmit={handleOnSubmit}
                                >
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email" 
                                            style={{backgroundColor: 'rgba(210, 210, 210, 0.25)', 
                                            color: 'white'}}
                                            // onChange={handleOnChange}
                                            // value={state.value}
                                        name="email"></input>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" id="password" placeholder="Password" 
                                            style={{backgroundColor: 'rgba(210, 210, 210, 0.25)', color: 'white'}}
                                            // onChange={handleOnChange}
                                            // value={state.value}
                                        name="password"></input>
                                    </div>
                                    <Button variant="danger" 
                                    style={{
                                    padding: '10px 50px', 
                                    fontSize: '20px', 
                                    width: '100%', 
                                    marginTop: '30px'}} type="submit" 
                                    // onClick={()=> {navigate("/homepage")}} 
                                    // onChange={handleOnChange}
                                    >Login</Button>{' '}
                                </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </>
            )}
        </>
    )
};

export default Login;