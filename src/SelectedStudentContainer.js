import React, { Component } from 'react';
import './App.css';
import updateAddress from './Action';
import {connect} from 'react-redux';


class SelectedStudentContainer extends Component
{
  fetchCustomerAddress(){
    var myObject = this.props.selectedStudent;
    //var address = Object.entries(myObject);

    if(myObject){
        return myObject.map((myval,index)=>{
            const { id, name, sex, grade } = myval
               return ( 
                 <tr key={index} onClick = {this.props.updateAddress.bind(this,myObject)}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>{sex}</td>
                     <td>{grade}</td>
                  </tr>
               )
        })
    }
    else
    {
      return <div>Student selected does not valid...</div>
    }
    }
    
    render(){
        debugger;
        return(
            <table id='adress' className="addressTable">
            <thead className="customerBody">
            { this.props.loadingStudent ? null:
                         <tr>
                             <th>ID</th>
                             <th>NAME</th>
                             <th>SEX</th>
                             <th>GRADE</th>
                         </tr>}
              </thead>
              <tbody className="addressBody">
                 { this.props.loadingStudent ? <div>...Click on Specific student checkbox and upload to get printed here</div>: this.fetchCustomerAddress()}
              </tbody>
              </table>
        )
    }
}

const mapStateToProps =(state) => {
    return {
      loading: state.loading,
      customerDetails : state.customerDetails,
      address : state.address,
      addressFlag : state.addressFlag,
      loadingStudent : state.loadingStudent,
      selectedStudent : state.selectedStudent
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        getCustomer: (data) => dispatch({type:"GETCUSTOMER",value:data}),
        getSelectedStudent: ()=> dispatch({type:"GETSELECTEDSTUDENT"}),
        updateAddress: (address) => dispatch({type:'UPDATEADDRESS',value:address}),
        updatecustomerDetails: (customerDetails) => dispatch({type:'UPDATECUSTOMERDETAILS',value:customerDetails})
        }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SelectedStudentContainer);