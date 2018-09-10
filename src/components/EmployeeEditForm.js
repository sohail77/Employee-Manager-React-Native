import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import Dialog from 'react-native-dialog';
import { EmployeeUpdate, EmployeeSave, EmployeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';


class EmployeeEditForm extends Component {

  state = { showModel: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.EmployeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.EmployeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your shift is scheduled on ${shift}`);
  }

  onAcceptPress() {
    this.props.EmployeeDelete({ uid: this.props.employee.uid });
  }

  onDeclinePress() {
    this.setState({ showModel: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModel: !this.state.showModel })}>
            Fire Employee
          </Button>
        </CardSection>

        <Dialog.Container
        visible={this.state.showModel}
        >
              <Dialog.Title>Account delete</Dialog.Title>
              <Dialog.Description>
                  Do you want to delete this account? You cannot undo this action.
              </Dialog.Description>
              <Dialog.Button label="Cancel" onPress={this.onDeclinePress.bind(this)} />
              <Dialog.Button label="Delete" onPress={this.onAcceptPress.bind(this)} />
          </Dialog.Container>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};


export default connect(mapStateToProps,
  {
    EmployeeUpdate,
     EmployeeSave,
      EmployeeDelete
  })(EmployeeEditForm);
