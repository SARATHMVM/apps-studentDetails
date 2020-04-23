import React, {Fragment,Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import StudentContainer from './StudentContainer';
import SelectedStudentContainer from './SelectedStudentContainer';
import { Button } from '@material-ui/core';



class App extends Component {

  async componentDidMount()
  {
    this.props.getStudent();
  }
  onClickHandler = () => {
    var studentDetails = this.props.studentDetails;
    var data = [];
    var items = document.getElementsByName('sas')
    var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
          data.push(this.props.studentDetails[i]);
        }
        fetch('http://sarath.free.beeceptor.com/studentSelected', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        this.props.getSelectedStudent(data);
        console.log(data);
  }
  render() {
    return (  
    <Fragment> 
      <button color="secondary" variant="outlined" onClick={this.onClickHandler.bind(this)}>BULK UPLOAD...</button>
      <table>
      <div className="tableHeading">All Student details:</div>
        <StudentContainer/>
      <div className="tableHeading">All Selected Student:</div>
        <SelectedStudentContainer/>
      </table>
    </Fragment>
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
    getStudent: () => dispatch({type:"GETSTUDENT"}),
    getSelectedStudent: (data)=> dispatch({type:"GETSELECTEDSTUDENT",value:data}),
    updateStudentDetails: (studentDetails) => dispatch({type:'UPDATESTUDENTDETAILS',value:studentDetails})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);