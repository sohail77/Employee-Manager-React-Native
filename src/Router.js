import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEditForm from './components/EmployeeEditForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Login' initial />
      </Scene>
      <Scene key='main'>
        <Scene
        onRight={() => Actions.employeeCreate()}
        rightTitle='Add'
        key='employeeList'
        component={EmployeeList}
        title='Employee'
        initial
        />
        <Scene key='employeeCreate' component={EmployeeCreate} title='Add Employee' />
        <Scene key='employeeEdit' component={EmployeeEditForm} title='Edit Employee' />

      </Scene>
    </Router>
  );
};
export default RouterComponent;
