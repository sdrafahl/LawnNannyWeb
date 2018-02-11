import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Modal, Input, Grid, Button, Form, Checkbox } from 'semantic-ui-react';

import Styles from '../styles/HomePage';
import Actions from '../reducers/Actions'
import { statekeys } from '../helpers/Common' 

export class HomePage extends Component {

	state = { modalOpen: false }

  	handleOpen = () => this.setState({ modalOpen: true })

  	handleClose = () => this.setState({ modalOpen: false })


	renderForm() {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordRepeat,
            address,
            city,
            addressState,
            zipcode,
            setEmail,
            setPassword,
            setFirstName,
            setLastName,
            setPasswordRepeat,
            setAddress,
            setCity,
            setAddressState,
            setZipcode
        } = this.props;
       } 
    render() {
        return (
            <div style={Styles.navbarContainer}>
                <Menu stackable large secondary style={Styles.loginSignupMenu}>
                <Menu.Menu position='right'>
                    <Modal 
                    style={Styles.modal} 
                    size='mini' 
                    trigger={
                        <Menu.Item onClick={this.handleOpen} style={Styles.menuItem}>
                            Login
                        </Menu.Item>
                    } 
                    open={this.state.modalOpen}
        			onClose={this.handleClose} 
        			closeIcon
        			>
                        <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
                        <Modal.Description>
                            <Grid style={Styles.loginGrid}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid icon='user' iconPosition='left' placeholder='Username'/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Input fluid icon='lock' iconPosition='left' placeholder='Password'/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column width={6}>
                                        <Button style={Styles.modalButton} size='large' onClick={this.handleClose}>Login</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Description>
                    </Modal>
                    <Modal 
                      style={Styles.modal}  
                      size='tiny' 
                      trigger={
                          <Menu.Item style={Styles.menuItem} onClick={this.handleOpen}>
                           Sign Up
                          </Menu.Item>
                           	}
                      open={this.state.modalOpen}
        			  onClose={this.handleClose} 
                   	  closeIcon>
                        <Modal.Header style={Styles.modalHeader}>Sign Up!</Modal.Header>
                        <Modal.Description>                 
                          <Form style={Styles.signUpForm}>
                       		 <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='First Name' color='white' placeholder='First Name' onChange='setFirstName'/>
                       		 	<Form.Input fluid label='Last Name' placeholder='Last Name' onChange='setLastName'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='Address' placeholder='Address' onChange='setAddress'/>
                       		 	<Form.Input fluid label='City' placeholder='City' onChange='setCity'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Dropdown fluid label='State' placeholder='State' search selection options={statekeys} onChange='setAddressState'/>
                       		 	<Form.Input fluid label='Zipcode' placeholder='Zipcode' onChange='setZipcode'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='Email' placeholder='Email' onChange='setEmail'/>
                       		 </Form.Group>
                       		  <Form.Group widths='equal'>
                       		 	<Form.Input fluid label='Password' placeholder='Password' onChange='setPassword'/>
                       		 	<Form.Input fluid label='Repeat Password' placeholder='Repeat Password' onChange='setPasswordRepeat'/>
                       		 </Form.Group>
                       		 <Form.Group style={Styles.signUpCheckbox}>
                       		 <Form.Checkbox label='I agree to the Terms and Conditions'/>
                       		 </Form.Group>
                       		 <Form.Group>
                       		 	<Form.Button style={Styles.modalButton} size='large' onClick={this.handleClose}>Submit</Form.Button>
                       		 </Form.Group>
                     	  </Form> 
                        </Modal.Description>
                    </Modal>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setEmail: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setEmail,
                    value
                };

            console.log(Actions);

            dispatch(action);
        },
        setPassword: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setPassword,
                    value
                };

            dispatch(action);
        },
        setFirstName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setFirstName,
                    value
                };

            dispatch(action);
        },
        setLastName: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setLastName,
                    value
                };

            dispatch(action);
        },
        setPasswordRepeat: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setPasswordRepeat,
                    value
                };

            dispatch(action);
        },
        setAddress: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setAddress,
                    value
                };

            dispatch(action);
        },
        setCity: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setCity,
                    value
                };

            dispatch(action);
        },
        setAddressState: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setAddressState,
                    value
                };

            dispatch(action);
        },
        setZipcode: event => {
            const value = event.target.value,
                action = {
                    type: Actions.login.setZipcode,
                    value
                };

            dispatch(action);
        },
    };

}

export default connect(() => {}, mapDispatchToProps)(HomePage);
