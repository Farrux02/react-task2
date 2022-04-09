import './usersList.css';

const UsersList = ({ users, deleteUser }) => {
  return (
    <section className="section users-list-section">
      <div className="div-heading">
        <h1>User Lists</h1>
      </div>
      <div className="form-wrapper__content">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Full name</th>
              <th>Date of birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Job Type</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?.uuid}>
                <th>{++index}</th>
                <th>
                  {user?.user_infos.firstName} {user?.user_infos.lastName}
                </th>
                <th>{user?.user_infos.dob}</th>
                <th>{user?.user_infos.phone_number}</th>
                <th>{user?.user_infos.email}</th>
                <th>{user?.work_area.company_name}</th>
                <th>{user?.work_area.job_type}</th>
                <th>{user?.work_area.experience}</th>
                <th>
                  <button 
                  className='del-btn'
                  onClick={() =>
                      deleteUser(user?.uuid)
                    }
                  ></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="container">
            <div className="item"></div>
        </div> */}
      </div>
    </section>
  );
};

export default UsersList;
