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
                  {user?.name} {user?.surname}
                </th>
                <th>{user?.birthDate}</th>
                <th>{user?.phoneNumber}</th>
                <th>{user?.email}</th>
                <th>{user?.companyName}</th>
                <th>{user?.jobType}</th>
                <th>{user?.experience}</th>
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
