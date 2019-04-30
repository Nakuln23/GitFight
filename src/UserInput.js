import React, {Component} from 'react';
import './App.css'
import {Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {fetchUserRepo1,fetchUserRepo2} from './Axios';
import ProfileTable from './ProfileTable'

class UserInput extends React.Component{

    state = {
        user1 : null,
        user2: null,
        user1Profile : '',
        user2Profile : '' ,
        loading: false
    }

   inputHandler = input =>(e) => {
       this.setState({
          [input] : e.target.value
            // user1 : e.target.value,
            // user2: e.target.value
       })
   }

   handleSubmit = (e) => {
    e.preventDefault();

    fetchUserRepo1(this.state.user1).then((res)=> this.setState({user1Profile: res}));
    fetchUserRepo2(this.state.user2).then((res)=> this.setState({user2Profile: res}));
    this.setState({user1 : " ", user2 : " " , loading: true})
   }

    render() {
          
      return (
            <div>
              <Container>
    {!this.state.loading ? <Form onSubmit={this.handleSubmit}>
             <Row form>
              <Col md={6}>
               <FormGroup>
                 <Label for="Github Username">User 1</Label>
                 <Input type="text" name="user1" value= {this.state.user1} placeholder="Github Username"
                 onChange={this.inputHandler("user1")}/>
               </FormGroup>
              </Col>
             <Col md={6}>
              <FormGroup>
                <Label for="Github Username">User 2</Label>
                <Input type="text" name="user2" value={this.state.user2} placeholder="Github Username" 
                onChange={this.inputHandler("user2")}/>
              </FormGroup>
             </Col>
            </Row>
            <div className="text-center">
              <Button type = "submit" className="mt-2">Compare</Button>
            </div>
         </Form>
         :
        <div>
         {!this.state.user1Profile && !this.state.user1Profile ? null : 
            (<ProfileTable username1={this.state.user1Profile} username2={this.state.user2Profile}/>)} 
        </div>
}
           </Container>
          </div>
         )
    }
}

             
              
 

export default UserInput;
