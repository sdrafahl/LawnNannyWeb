import React from 'react';
import PropTypes from 'prop-types';
import { Form, Header, Input, Button, Segment, Checkbox } from 'semantic-ui-react';
import { Requests } from '../pages/pipeline/jsonRequests';
import { statekeys } from '../../helpers/Common';
import Styles from '../../styles/DynamicForm';
import InlineError from './InlineError';

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  onSubmit = (event) => {
    const data = {};
    let counter = 0;
    Requests.Requests[this.props.requestType].fields.forEach((element) => {
      switch (element.type) {
        case 'radio':
          data[element.id] = {};
          element.options.forEach((option) => {
            data[element.id][option] = {
              entry: event.target[counter].checked,
              validation: element.validation,
              id: element.id,
            };
          });
          break;
        case 'checkbox':
          data[element.id] = {
            entry: event.target[counter].checked,
            validation: element.validation,
            id: element.id,
          };
          break;
        default:
          data[element.id] = {
            entry: event.target[counter].value,
            validation: element.validation,
            id: element.id,
          };
          break;
      }
      counter += 1;
    });
    if (!this.validateAndSetStateErrorsForDisplay(data)) {
      this.props.setRequestInformation(data);
    }
  }

   validateAndSetStateErrorsForDisplay = (data) => {
     const errors = {};
     data.forEach((validationEntryObject) => {
       switch (validationEntryObject.validation) {
         case 'requiredText':
           if (!validationEntryObject.entry.trim().length) {
             errors[validationEntryObject.id] = 'Empty Text Box';
           }
           break;
         case 'requiredRadio':
           if (Object.values(validationEntryObject.entry).some((value => value))) {
             errors[validationEntryObject.id] = 'Radio Button Not Selected';
           }
           break;
         default:
       }
     });
     this.setState({ errors });
     return !Object.keys(errors).length;
   }

   handleChange = (e, { value }) => {
     const state = this.state;
     state.radio = value;
     this.setState(state);
   }

  addAstricks = (lengthOfValidation) => {
    if (lengthOfValidation) {
      return ' * ';
    }
    return '';
  }

  renderRadioButtons = (field) => {
    const radioButtons = field.map(option => (
      <Form.Radio
        label={option}
        value={option}
        onChange={this.handleChange}
        checked={this.state.radio === option}
      />
    ));
    return radioButtons;
  }

  renderFormFromJson = (requestType, errors) => {
    const requests = Requests.Requests[requestType];
    const formUI = requests.fields.map((field) => {
      switch (field.type) {
        case 'text':
          return (
            <Form.Field>
              <label htmlFor={field.id}>
                {this.addAstricks(field.validation.length) + field.name }
              </label>
              <Input id={field.id} />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'dropDown':
          return (
            <Form.Dropdown>
              label={this.addAstricks(field.validation.length) + field.name }
              placeholder={field.placeholder}
              options={statekeys}
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Dropdown>
          );

        case 'textArea':
          return (
            <Form.TextArea>
              label={this.addAstricks(field.validation.length) + field.name }
              placeholder={field.placeholder}
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.TextArea>
          );

        case 'checkbox':
          return (
            <Form.Field>
              <Checkbox
                label={this.addAstricks(field.validation.length) + field.placeholder}
                name={field.name}
                value="true"
              />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );

        case 'radio':
          return (
            <label htmlFor={field.id}> {this.addAstricks(field.validation.length) + field.name }
              <Form.Group id={field.id} inline>
                {this.renderRadioButtons(field.options)}
                {errors[field.id] && <InlineError text={errors[field.id]} />}
              </Form.Group>
            </label>
          );

        default:
          return (
            <Form.Field>
              <label htmlFor={field.id}>
                {this.addAstricks(field.validation.length) + field.name }
              </label>
              <Input id={field.id} />
              {errors[field.id] && <InlineError text={errors[field.id]} />}
            </Form.Field>
          );
      }
    });
    return formUI;
  };

  render() {
    return (
      <Segment padded>
        <Header size="large">{this.props.requestType}</Header>
        <Form onSubmit={this.onSubmit}>
          <Segment style={Styles.segment}>
            {this.renderFormFromJson(this.props.requestType, this.state.errors)}
          </Segment>
          <Segment style={Styles.segment}>
            <Button type="submit" fluid positive size="large">
                  Continue
            </Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

DynamicForm.propTypes = {
  requestType: PropTypes.string.isRequired,
  setRequestInformation: PropTypes.func.isRequired,
};

export default DynamicForm;
