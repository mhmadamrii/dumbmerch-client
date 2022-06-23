import NavbarHome from "../components/Navbar/NavbarHome";
import { Table, Button } from "react-bootstrap";

const Category = () => {
    const style = {
        main: {
            // border: '1px solid red',
            width: '1500px',
            margin: '10vh auto',
            padding: '10px'
        }
    }

    document.title = "DumbMerch | Product";
    return(
        <>
            <NavbarHome />
            <div className="main" style={style.main}>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td class="col-2">Mouse.jpg</td>
                        <td class="2">Mouse</td>
                        <td class="col-2">Lorem Ipsum Mouse...</td>
                        <td class="col-2">500.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td class="col-2">Keyboard.jpg</td>
                        <td class="2">Keyboard</td>
                        <td class="col-2">Lorem Ipsum Keyboard...</td>
                        <td class="col-2">500.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                    <td>3</td>
                        <td class="col-2">Bag.jpg</td>
                        <td class="2">Bag</td>
                        <td class="col-2">Lorem Ipsum Bag...</td>
                        <td class="col-2">300.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                    <td>4</td>
                        <td class="col-2">Stationary.jpg</td>
                        <td class="2">Stationary</td>
                        <td class="col-2">Lorem Ipsum Stationary...</td>
                        <td class="col-2">25.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                    <td>5</td>
                        <td class="col-2">Doll.jpg</td>
                        <td class="col-2">Doll</td>
                        <td class="col-2">Lorem Ipsum Doll...</td>
                        <td class="col-2">123.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                    <td>6</td>
                        <td class="col-2">Pillow.jpg</td>
                        <td class="2">Pillow</td>
                        <td class="col-2">Lorem Ipsum Pillow...</td>
                        <td class="col-2">300.000 </td>
                        <td class="col-2">600</td>
                        <td class="col-5"> 
                        <Button variant="success" style={{padding: '5px 30px'}}>Edit</Button>{' '}
                        <Button variant="danger" style={{padding: '5px 30px'}}>Delete</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </>
    )
};

export default Category;