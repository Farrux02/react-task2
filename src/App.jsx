import { useState, useEffect } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import axios from "axios";
import JobType from "./components/JobType";

function App() {
  const [users, setUsers] = useState([]);
  const [jobTypes, setJobType] = useState([]);

  const initialValues = {
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
    companyName: "",
    jobType: "",
    experience: "",
  };

  const [values, setValues] = useState(initialValues);

  const getUsers = () => {
    axios
      .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJobType = () => {
    axios
    .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types")
    .then(res => setJobType(res.data))
    .catch((err) => {
      console.log(err);
    });
  }

  const clearValues = () => {
    setValues(initialValues);
  }

  const deleteJobType = (id) => {
    axios
    .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types/${id}`)
    .then(res => getJobType())
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getUsers();
    getJobType();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users/${id}`) // ! Hardoyim ham id bolib kelmaydi
      .then((res) => {
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...values,
    };
    axios
      .post("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/users", formData)
      .catch((err) => console.log("err", err))
      .finally(() => {
        getUsers();
        clearValues();
      });
  };

  const addJobType = (e) => {
    e.preventDefault();
    console.log('addJobType');

    const optionData = {
      label: values.jobType
    }

    axios.post("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/types", optionData)
    .catch(err => console.log(err))
    .finally(() => {
      getJobType();
      clearValues();
    })
  }

  return (
    <>
      <Form onSubmit={onSubmit} values={values} setValues={setValues} addJobType={addJobType} jobTypes={jobTypes} clearValues={clearValues}/>
      <UsersList users={users} deleteUser={deleteUser} />
      <JobType deleteJobType={deleteJobType} jobTypes={jobTypes}/>
    </>
  );
}

export default App;
