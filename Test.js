import React from 'react';
import axios from 'axios';
//import {Button} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {Nav,Navbar,NavItem,NavbarBrand} from 'reactstrap';
import cart from './images/cart.jpg';
import warehouse from './images/warehouse.png';
import cartback from './images/cartback.jpg';
import orderStatus from './images/orderStatus.png';
import order from './images/order place.png';
import cart2 from './images/cart2.png';
import './Teststyle.css';
import 'react-responsive-modal/styles.css';
import { Table } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'

class Test extends React.Component{
    constructor(){
        super();
        this.state={"name":"sayantan","roll":64,options:[],
        "category":"","brand":"","quantity":0,cols:[],rows:[],
        open2:false,open:false,open3:false,open4:false,open5:false,"queryID":"",
        "itemID":"","measurement":"","productname":"","newcategory":"" ,"reqID":"","status":"","address":"","mail":"","qitemid":"","qproductname":"",
        "qcategory":"","qbrand":"","qQuantity":"","qmeasurement":"","qsellerid":"","qorderid":"",
    "nstatus":"","nitemId":"","nproductname":"","ncategory":"","nbrand":"","nprice":"","nmeasuremnt":"","nsellerId":"","norderId":"","nquanatity":""   }
        
        this.request = this.request.bind(this);
        this.warehouse=this.warehouse.bind(this);
        
        
    }

    
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

      onOpenModal2 = () => {
        this.setState({ open2: true });
      };
    
      onCloseModal2 = () => {
        this.setState({ open2: false });
      };
      
      onOpenModal3 = (i,itemid,orderId,sellerId,productname,brand,category,quantity,measurement,price,status) => {
        
        

        this.setState({ open3: true });
        this.setState({reqID:i});
        this.setState({nitemId:itemid});
        this.setState({norderId:orderId});
        this.setState({nsellerId:sellerId});
        this.setState({nproductname:productname});
        this.setState({nbrand:brand});
        this.setState({ncategory:category});
        this.setState({nquanatity:quantity});
        this.setState({nmeasuremnt:measurement});
        this.setState({nprice:price});
        this.setState({nstatus:status});


        console.log("id : "+this.state.reqID);
      };
    
      onCloseModal3 = () => {
        this.setState({ open3: false });
      };

      onOpenModal4 = () => {
        this.setState({ open4: true });
        
      };
    
      onCloseModal4 = () => {
        this.setState({ open4: false });
      };

      onOpenModal5 = (s,i,p,c,b,q,m,sid,oid,rid) => {
        this.setState({ open5: true });
        this.setState({status:s});
        this.setState({qitemid:i});
        this.setState({qproductname:p});
        this.setState({qcategory:c});
        this.setState({qbrand:b});
        this.setState({qQuantity:q});
        this.setState({qmeasurement:m});
        this.setState({qsellerid:sid});
        this.setState({qorderid:oid});
        this.setState({queryID:rid})

        
      };
    
      onCloseModal5 = () => {
        this.setState({ open5: false });
      };

     

    componentDidMount=()=>{
        //axios.get(`http://localhost:4000/category`)
        //axios.get(`https://nodeappcodemasters.azurewebsites.net/category`)
        axios.get(`https://nodeappcodemasters.azurewebsites.net/category`)
      .then(res => {
        console.log(res.data[0].category);
        console.log(res.data.length);

        var temp=[];
        for(var i=0;i<res.data.length;i++){
            temp[i]=res.data[i].category;
        }

        this.setState({options:temp});

      }).catch(err=>console.log(err));
     
     
        //console.log("Hello from component mount");
    }

    

    request=(i)=> {
        //console.log(this.state.category+" "+this.state.newcategory+" "+this.state.brand+" "+this.state.quantity+" "+this.state.itemID+" "+this.state.measurement+" "+this.state.productname);
        //https://nodeappcodemasters.azurewebsites.net/logicApps
    
        if(this.state.category==="Others")
        {
            var reqID;
            axios.post(`https://nodeappcodemasters.azurewebsites.net/logicApps`,null,{params:{category:this.state.newcategory,brand:this.state.brand,quantity:this.state.quantity,itemID:this.state.itemID,productname:this.state.productname,measurement:this.state.measurement,address:this.state.address,mail:this.state.mail}})
            .then(res => {
              //console.log("response1 :"+res.json());
              console.log("response2 :"+res);
              reqID=res.data.ID;
              this.onCloseModal();
             
             
              
              
              this.onOpenModal3(reqID,res.data.itemId,res.data.orderId,res.data.sellerId
                ,res.data.productname,res.data.brand,res.data.category,res.data.quantity,res.data.measurement
                ,res.data.price,res.data.status);
            });
              //console.log("Hello from function");
              
        }
        else
        {
            var reqID;
            axios.post(`https://nodeappcodemasters.azurewebsites.net/logicApps`,null,{params:{category:this.state.category,brand:this.state.brand,quantity:this.state.quantity,itemID:this.state.itemID,productname:this.state.productname,measurement:this.state.measurement,address:this.state.address,mail:this.state.mail}})
            .then(res => {
                //console.log("response1 :"+res.json());
                //console.log(res[0]);
                //console.log(res["ID"]);
                //console.log("response2 id :"+res);
                //console.log(JSON.stringify(res));
                //console.log(JSON.stringify(res)[0]);
                //console.log(res.data.ID);
                reqID=res.data.ID;
                this.onCloseModal();
                this.onOpenModal3(reqID,res.data.itemId,res.data.orderId,res.data.sellerId
                    ,res.data.productname,res.data.brand,res.data.category,res.data.quantity,res.data.measurement
                    ,res.data.price,res.data.status);

             });
            //console.log("Hello from function");
            
        }

        /*axios.post(`http://localhost:4000/logicApps`,null,{params:{category:this.state.category,brand:this.state.brand,quantity:this.state.quantity,itemID:this.state.itemID,productname:this.state.productname,measurement:this.state.measurement}})
      .then(res => {
        console.log(res);
      });
        console.log("Hello from function");*/
        
    }

    warehouse=(i)=>{
       
        //https://nodeappcodemasters.azurewebsites.net/warehouse
        axios.get(`https://nodeappcodemasters.azurewebsites.net/warehouse`).then(
            res=>{
                console.log(Object.keys(res.data[0]));
            this.setState({cols:Object.keys(res.data[0])});
            console.log("cols :"+this.state.cols);

            this.setState({rows:res.data});
            console.log(this.state.rows);

            });


    }

    statusCheck=(i)=>{
       
        //https://nodeappcodemasters.azurewebsites.net/warehouse
        axios.post(`https://nodeappcodemasters.azurewebsites.net/status`,null,{params:{queryID:this.state.queryID}}).then(
            res=>{
                /*console.log("response from db :"+JSON.stringify(res));
                console.log("status : "+res.data[0].status);
                console.log("itemID : "+res.data[0].itemID);
                console.log("ProductName : "+res.data[0].ProductName);
                console.log("Category : "+res.data[0].Category);
                console.log("Brand : "+res.data[0].Brand);
                console.log("Quantity : "+res.data[0].Quantity);
                console.log("Measurement : "+res.data[0].Measurement);
                console.log("SellerId : "+res.data[0].SellerId);
                console.log("OrderId : "+res.data[0].OrderId);*/
                




                this.onCloseModal4();
/*                this.onOpenModal5(res.data[0].status,res.data[0].itemID,res.data[0].ProductName,res.data[0].Category,
                    res.data[0].Brand,res.data[0].Quantity,res.data[0].Measurement,res.data[0].SellerId,res.data[0].OrderId );*/


                    this.onOpenModal5(res.data.status,res.data.itemID,res.data.ProductName,res.data.Category,
                        res.data.Brand,res.data.Quantity,res.data.Measurement,res.data.SellerId,res.data.OrderId,res.data.RequestId);
    
            });


    }
    
    


    render(){
       
        return(
        <div>
            <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                           <img src={cart} style={{width:30,height:20}}/>
                           <NavbarBrand>OrderCart</NavbarBrand> 
                         </NavItem>
                    </Nav>
                    
            </Navbar>
            <div className="initial">
                <Row>
                    <Col xs="6">
                        <Jumbotron style={{backgroundColor:"#FAFAFA",textAlign:"left"}}>
                            <h1>Welcome to OrderCart</h1>
                            <Col xs="6">
                            <p>
                                <h5>One stop solution to raise bulk order . Try our services to feel the difference</h5>
                                <img src="https://risingworldtechnologies.com/wp-content/uploads/2019/06/shopping.png"/>
                            </p>
                            </Col>
                            
                        </Jumbotron>
                        
                    </Col>
                    <Col xs="1">
                    </Col>
                    <Col xs="4" style={{paddingTop:60}}>
                        <p>
                        <br/>
                        <br/>
                        <img style={{width:200,height:100}} src="https://i.ya-webdesign.com/images/debris-cloud-png-1.png"/>
                        <img  style={{height:350}} src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-06.png"/>
                        </p>
                    </Col>
                </Row>
            </div>
            {/*<Carousel style={{margin:20}}>
                        <Carousel.Item>
                            <div className="initial">
                                <img style={{opacity:0.8}} src="https://www.technicon.in/images/content/slider-02.jpg"/>
                                
                                
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="initial">
                                <img style={{opacity:0.8}} src="https://meadigitalevents.azurewebsites.net/images/Event/Medium/Event436.jpg"/>
                                <Carousel.Caption>
                                <p>Powered by Azure</p>
                                </Carousel.Caption>
                                
                            </div>
                        </Carousel.Item>
                    </Carousel>*/}
            


            <Modal show={this.state.open5} onHide={this.onCloseModal5}>
                <Modal.Header closeButton>
                <Modal.Title>Current Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        {
                            (this.state.queryID==="Invalid")?(<p>The RequestID is <b>invalid</b></p>):(<p>The current status of <b>requestID : {this.state.queryID}</b> is <b>{this.state.status}</b></p>)

                        }
                            
                            
                            

                        
                       
                        {
                            (this.state.status==="Accepted"||this.state.status==="accepted")?(<ul>
                                <li>ItemID : <b>{this.state.qitemid}</b></li>
                                <li>Product name : <b>{this.state.qproductname}</b></li>
                                <li>Product category :<b>{this.state.qcategory}</b></li>
                                <li>Product brand:<b>{this.state.qbrand}</b></li>
                                <li>Order quantity: <b>{this.state.qQuantity}</b></li>
                                <li>Product Measurement : <b>{this.state.qmeasurement}</b></li>
                                <li>Seller Id :<b>{this.state.qsellerid}</b></li>
                                <li>Order Id  :<b>{this.state.qorderid}</b></li>
                            </ul>):(<p></p>)
                           
                        }
                        {
                             (this.state.status==="Accepted"||this.state.status==="accepted")?"Check your mail box for the acknowledgement copy":(this.state.queryID==="Invalid")?"":"The seller is yet to pick your order"
                        }
                        
                        
                        
                        
                        
    
                       
                        
                        
                        
                        

                        
                    </div>
                </Modal.Body>
               
            </Modal>
            
            <Modal show={this.state.open4} onHide={this.onCloseModal4}>
                <Modal.Header closeButton>
                <Modal.Title>Check Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <Input type="text" placeholder="Enter RequestID" onChange={(event)=>{this.setState({queryID:event.target.value})}} /><br/>
                        <Button className="orderbtn" color="info" onClick={this.statusCheck}>Check</Button>&nbsp;
                        
                    </div>
                </Modal.Body>
               
            </Modal>
            
            <Modal show={this.state.open3} onHide={this.onCloseModal3}>
                <Modal.Header closeButton>
                <Modal.Title>Confirmation!!!!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    {
                        (this.state.nstatus==="Accepted")?
                        (
                        <div className="form">
                            Item is in stock. 
                            <ul>
                                <li>RequestId : <b>{this.state.reqID}</b></li>
                                <li>ItemID : <b>{this.state.nitemId}</b></li>
                                <li>Product name : <b>{this.state.nproductname}</b></li>
                                <li>Product category :<b>{this.state.ncategory}</b></li>
                                <li>Product brand:<b>{this.state.nbrand}</b></li>
                                <li>Order quantity: <b>{this.state.nquanatity}</b></li>
                                <li>Product Measurement : <b>{this.state.nmeasuremnt}</b></li>
                                <li>Seller Id :<b>{this.state.nsellerId}</b></li>
                                <li>Order Id  :<b>{this.state.norderId}</b></li>
                            </ul>
                        </div>):
                        
                        
                        
                        (<div className="form">
                        Order with <b>Request ID : {this.state.reqID}</b> placed successfully .<br/> 
                        You will receive a mail once order is accepted
                        </div>)
                    
                    }
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.onCloseModal3}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal dialogClassName="my-modal2" show={this.state.open} onHide={this.onCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Procurement Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                    <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Brand</Label>
                                        <Input type="text" name="brand" id="brand" placeholder="Enter Brand" onChange={(event)=>{this.setState({brand:event.target.value})}}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Quantity</Label>
                                        <Input type="text" name="quantity" id="quantity" placeholder="Enter Quantity" onChange={(event)=>{this.setState({quantity:event.target.value})}}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="categorySelect">Category</Label>
                                        <Input type="select" name="select" id="categorySelect" onChange={(event)=>{this.setState({category:event.target.value})}}>
                                        <option>Select product category ...</option>
                                        {
                                            this.state.options.map((option,i)=>{return(<option key={i} data={option}>{option}</option>)})
                                        }
                                         <option>Others</option>
                                        </Input>
                                       
                                       {
                                           (this.state.category=="Others")?<br/>:console.log("")
                                       }

                                       {
                                       
                                       

                                       (this.state.category=="Others")?(<div><Input key="newcategory" type="text" name="newcategory" id="newcategory" placeholder="Enter other category" onChange={(event)=>{this.setState({newcategory:event.target.value})}} /></div>):(console.log("hey"))
                                       
                                       }
                                    
                                    </FormGroup>
                                    
                                    <FormGroup>
                                        <Label for="exampleitemID">Item ID</Label>
                                        <Input type="text" name="itemID" id="itemID" placeholder="Enter itemID" onChange={(event)=>{this.setState({itemID:event.target.value})}} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleProductname">Product Name</Label>
                                        <Input type="text" name="Productname" id="Productname" placeholder="Enter product name" onChange={(event)=>{this.setState({productname:event.target.value})}} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleMeasurement">Measurement</Label>
                                        <Input type="text" name="measurement" id="measurement" placeholder="Enter measurement" onChange={(event)=>{this.setState({measurement:event.target.value})}}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleAddress">Shipping Address</Label>
                                        <Input type="text" name="address" id="address" placeholder="Enter shipping address" onChange={(event)=>{this.setState({address:event.target.value})}}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleMail">Mail ID</Label>
                                        <Input type="text" name="mail" id="mail" placeholder="Enter Mail ID" onChange={(event)=>{this.setState({mail:event.target.value})}}/>
                                    </FormGroup>

                                    

                                
                                    <Button className="orderbtn" color="info" onClick={this.request}>Place Order</Button>
                    </Form> 
                    </div> 
                </Modal.Body>
                <Modal.Footer>
                {/*<Button variant="secondary" onClick={this.onCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.onCloseModal}>
                    Save Changes
                </Button>*/}
                </Modal.Footer>
            </Modal>



            <Modal show={this.state.open2} dialogClassName="my-modal" onHide={this.onCloseModal2}>
                <Modal.Header closeButton>
                <Modal.Title dialogClassName="modal-stock">Warehouse Stock</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                    <Carousel>
                      
                        {
                            
                            this.state.rows.map((row,i)=>{
                                
                                var count=Math.floor(i/5)
                                
                                if(Math.floor(i/5) == count){


                                    if(i==this.state.rows.length-1 || (i+1)%5==0){
                                        return(
                                            //console.log("element : "+i)
                                            <Carousel.Item>
                                                <Table striped dark>
                                                    <thead>
                                                        <tr>
                                                            {
                                                                this.state.cols.map((cols,i)=>{return(<th key={i}>{cols}</th>)})
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                           this.state.rows.map((row,i)=>{if(Math.floor(i/5) == count){return(<tr key={i}>{this.state.cols.map((cols,i)=>{return(<td key={i}>{row[cols]}</td>)})}</tr>)} })
                                                    }
                                                    </tbody>

                                                </Table>
                                            </Carousel.Item>
                                        
                                        )

                                        

                                    }

                                    
                                }
                                
                            
                            })
                        }
                    </Carousel>
                    </div>
                    {/*<Carousel>
                        <Carousel.Item>
                            <img
                            
                            src={warehouse}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            
                            src={cartback}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>*/}
                    
                    
                    
                    
                    {/*<Table dark >
                        <thead>
                            <tr>
                                {
                                    this.state.cols.map((cols,i)=>{return(<th key={i}>{cols}</th>)})
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rows.map((row,i)=>{  return(<tr key={i}>{this.state.cols.map((cols,i)=>{return(<td key={i}>{row[cols]}</td>)})}</tr>)  }  )
                            }
                        </tbody>
                        </Table>*/}


                </Modal.Body>
                <Modal.Footer>
                {/*<Button variant="secondary" onClick={this.onCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.onCloseModal}>
                    Save Changes
                </Button>*/}
                </Modal.Footer>
            </Modal>
            

           
               
                                      
                <div className="second" style={{paddingTop:10}}>
                <div className="services" style={{backgroundColor:"#FBF2F2"}}><h1>Services</h1></div>
                <div className="second2">
                        <div className="main-div">
                        <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
               
               
                            <Row className="rows">
                                {/*<Col sm="1"></Col>*/}
                                <Col sm="3">
                                            <Card className="grow">
                                            <CardImg top width="100%" className="img2" src={warehouse} alt="Card image cap" />
                                                <CardBody >
                                                <CardTitle><b>Warehouse Details</b></CardTitle>
                                                <CardSubtitle></CardSubtitle>
                                                <CardText  >Gives consolidated view of the warehouse statistics<br/></CardText>
                                                
                                                <Button className="orderbtn1" color="info" onClick={()=>{this.warehouse();this.onOpenModal2();}}>Check</Button>
                                                </CardBody>
                                            </Card>
                                </Col>
                                <Col sm="1"></Col>
                                <Col sm="3">
                                        <Card className="grow">
                                                <CardImg className="img2"  top width="50%" src={order} alt="Card image cap" />
                                                <CardBody >
                                                    <CardTitle><b>Place Order</b></CardTitle>
                                                    <CardSubtitle></CardSubtitle>
                                                    <CardText >
                                                        Place bulk order as per your requirement.Fill the details.
                                                    </CardText>
                                                    <Button className="orderbtn1" color="info" onClick={this.onOpenModal} >Details</Button>
                                                </CardBody>
                                            </Card>
                                    
                                        
                                </Col>
                                <Col sm="1"></Col>
                                <Col sm="3">
                                    <Card className="grow">
                                        <CardImg className="img2" top width="100%" src={orderStatus} alt="Card image cap" />
                                        <CardBody >
                                            <CardTitle ><b>Order Status</b></CardTitle>
                                            <CardSubtitle></CardSubtitle>
                                            <CardText >
                                                Check the status of the order using the RequestId
                                            </CardText>
                                            <Button className="orderbtn1" color="info" onClick={this.onOpenModal4} >Check</Button>
                                        </CardBody>
                                </Card>
                                
                                    
                                </Col>



                                
                                {/*<Col sm="2"></Col>*/}
                                
                                
                                
                            </Row>
                            </ScrollAnimation>
                        </div>
                        </div>

                </div>
                
            
        </div>
        );
    }
}

export default Test;