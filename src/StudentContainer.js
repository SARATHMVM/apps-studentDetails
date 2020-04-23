import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class StudentContainer extends Component
{
  constructor(props){
    super(props)
    {
      //this.state = { checked: false }
      this.setState({checked: false})
    }  
  }

  
    renderTableData() {
        return this.props.studentDetails.map((customer, index) => {
           const { id, name, sex, grade } = customer
           return ( 
             <tr key={index}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{sex}</td>
                 <td>{grade}</td>
                 <input name='sas' checked={this.props.checked} type='checkbox'/>
              </tr>
           )
        })
      }
    
    render(){
        return(
            <table id='customers' className="customerTable"> 
            { this.props.loading ? null : <thead className="customerBody">
                       <tr>
                           <th>ID</th>
                           <th>NAME</th>  
                           <th>SEX</th>
                           <th>PHONE</th>
                           <th>CHECKBOX</th>
                       </tr>
            </thead>
            }
            <tbody className="customerBody">
               { this.props.loading ? <div>...loading</div>: this.renderTableData() }
            </tbody>
          </table> 
        )
    }
}

const mapStateToProps =(state) => {
    return {
      loading: state.loading,
      studentDetails : state.studentDetails,
      selectedStudent : state.selectedStudent
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      updateStudentDetails: (studentDetails) => dispatch({type:'UPDATESTUDENTDETAILS',value:studentDetails})
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(StudentContainer);