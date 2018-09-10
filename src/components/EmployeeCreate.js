import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmployeeUpdate, EmployeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreateForm extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.EmployeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};


export default connect(mapStateToProps, { EmployeeUpdate, EmployeeCreate })(EmployeeCreateForm);
