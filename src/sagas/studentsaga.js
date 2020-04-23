import  {takeEvery,call,put} from 'redux-saga/effects';

export default function* getStudent()
{
    yield takeEvery("GETSTUDENT",getStudentDetails);
}

function* getStudentDetails()
{
    try{
        const url = "http://www.mocky.io/v2/5ea1732631000067001eeade";
        //const url = "http://sarath.free.beeceptor.com/studentDetails";
        const response = yield fetch(url);
        const studentDetails = yield response.json();
       yield put({type:"UPDATESTUDENTDETAILS",value:studentDetails})
      }
      catch(e){
        console.log("Error while fetching",e);
      }
}