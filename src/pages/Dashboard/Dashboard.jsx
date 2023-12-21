import { faBuildingUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import empData from "../../assets/data/employeesData.json"
import "./dashboard.css"


const Dashboard = () => {
  const [fullProfile, setFullProfile] = useState(false);
  const [empID, setEmpId] = useState(0);
  const [empProfile, setEmpProfile] = useState([empData.employees[empID] || ""])

  const clickHandler = (index) => {
    setFullProfile(!fullProfile);
    setEmpId(index);
  }

  return (
    <div className='dashboard-container'>
      <div className='sidebar'>
        <FontAwesomeIcon icon={ faBuildingUser } className='fontawesome'></FontAwesomeIcon>
      </div>
      <div className='main'>
        { empData.employees.map((emp, index) => (
          <Card key={ `emp.userName${index}` } className='profile' >
            <Image src={ require('../../assets/images/profile-icon.jpg') } onClick={ () => { clickHandler(emp.EmpID) } } style={ { width: '50px', height: '50px' } } ui={ false } />
            <Card.Content className='profile-desc' onClick={ () => { clickHandler(emp.EmpID) } } >
              <Card.Header>{ emp.fullName }</Card.Header>
              <Card.Meta onClick={ () => { clickHandler(emp.EmpID) } } >
                <span onClick={ () => { clickHandler(emp.EmpID) } } className='date'>Joined in { emp.doj }</span>
              </Card.Meta>
              <Card.Description onClick={ () => { clickHandler(emp.EmpID) } } >
                <span onClick={ () => { clickHandler(emp.EmpID) } } className='role'>{ emp.role }</span>
              </Card.Description>
            </Card.Content>
          </Card>
        )) }
        { fullProfile && (
          <div className='popup'>
            <Card className='full-profile' >
              <div className='full-profile-img'>
                <Image src={ require('../../assets/images/profile-icon.jpg') } onClick={ () => { clickHandler(empProfile[0].EmpID) } } style={ { width: '50px', height: '50px' } } ui={ false } />
              </div>
              <div className='full-profile-content'>
                <Card.Content className='profile-desc' onClick={ () => { clickHandler(empProfile[0].EmpID) } } >
                  <Card.Header>{ empProfile[0].fullName }</Card.Header>
                  <Card.Meta onClick={ () => { clickHandler(empProfile[0].EmpID) } } >
                    <span onClick={ () => { clickHandler(empProfile[0].EmpID) } } className='date'>Joined in { empProfile[0].doj }</span>
                  </Card.Meta>
                  <Card.Description onClick={ () => { clickHandler(empProfile[0].EmpID) } } >
                    <span onClick={ () => { clickHandler(empProfile[0].EmpID) } } className='role'>{ empProfile[0].role }</span>
                  </Card.Description>
                </Card.Content>
              </div>
            </Card>
          </div>
        ) }
      </div>
    </div>
  )
}

export default Dashboard