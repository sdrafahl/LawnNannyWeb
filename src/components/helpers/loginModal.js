import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button } from 'semantic-ui-react';
import { loginJsonForm } from '../pages/pipeline/jsonForms/loginForm';
import Styles from '../../styles/helpers/navBar';
import DynamicComponent from '../helpers/DynamicForm';

export const loginModal = props => (
  <Modal
    style={Styles.modal}
    size="mini"
    trigger={
      <Menu.Item style={Styles.menuItem}>
        <Button size={props.size} fluid={props.fluid} style={props.loginButton}>
          Login
        </Button>
      </Menu.Item>
    }
    closeIcon
  >
    <Modal.Header style={Styles.modalHeader}>Welcome Back!</Modal.Header>
    <Modal.Description>
      <DynamicComponent
        jsonForm={() => loginJsonForm}
        setRequest={props.login}
        form={'Login'}
        route={() => {}}
      />
    </Modal.Description>
  </Modal>
);
export default loginModal;
