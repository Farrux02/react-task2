import FormInput from "../FormInput";
import "./form.css";

const Form = ({
  onSubmit,
  values,
  setValues,
  addJobType,
  jobTypes,
  clearValues,
}) => {

  return (
    <>
      <section className="section">
        <div>
          <form onSubmit={onSubmit}>
            <div className="users-info">
              <div className="div-heading">
                <h1>User's Info</h1>
              </div>
              <div className="form-wrapper__content">
                <FormInput
                  label="Name"
                  name="firstname"
                  type="text"
                  placeholder="Введите имя"
                  required
                  value={values.name}
                  handleChange={(e) =>
                    setValues({  ...values, name: e.target.value })
                  }
                  pattern="^[a-zA-Z]{3,15}$"
                  errorMessage="Name is required, must be at least 3 characters and must not contain numbers"
                />
                <FormInput
                  label="Surname"
                  name="surname"
                  placeholder="Введите фамилию"
                  type="text"
                  required
                  value={values.surname}
                  handleChange={(e) =>
                    setValues({ ...values, surname: e.target.value })
                  }
                  pattern="^[a-zA-Z]{3,15}$"
                  errorMessage="Surname is required, must be at least 3 characters and must not contain numbers"
                />
                <FormInput
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="Введите номер телефона"
                  type="number"
                  required
                  value={values.phoneNumber}
                  errorMessage="Phone number is required"
                  handleChange={(e) =>
                    setValues({ ...values, phoneNumber: e.target.value })
                  }
                />
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Введите электронную почту"
                  type="email"
                  required
                  value={values.email}
                  handleChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  pattern={
                    "^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
                  }
                  errorMessage="Email is required, adn must contain @"
                />
                <FormInput
                  label="Date of birth"
                  name="birthDate"
                  placeholder="Выберите дату рождения"
                  type="date"
                  required
                  value={values.birthDate}
                  handleChange={(e) =>
                    setValues({ ...values, birthDate: e.target.value })
                  }
                  errorMessage="Date of birth is required"
                />
              </div>
            </div>
            <div className="mini-wrapper">
              <div className="div-heading">
                <h1>Work Details</h1>
              </div>
              <div className="form-wrapper__content">
                <FormInput
                  label="Company Name"
                  name="companyName"
                  placeholder="Введите название компании"
                  type="text"
                  required
                  value={values.companyName}
                  handleChange={(e) =>
                    setValues({ ...values, companyName: e.target.value })
                  }
                  errorMessage="Company name is required"
                />
                <div className="select-flex">
                  <div>
                    <label htmlFor="jobType">Job Type</label>
                    <select
                      name="jobType"
                      id="jobType"
                      value={values.jobType}
                      onChange={(e) => {
                        setValues({ ...values, jobType: e.target.value });
                      }}
                    >
                      <option value="">Select job type</option>
                      {jobTypes?.map((jobType) => (
                        <option key={jobType?.id} value={jobType?.label}>
                          {jobType?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience">Experience</label>
                    <select
                      name="experience"
                      id="experience"
                      value={values.experience}
                      onChange={(e) =>
                        setValues({ ...values, experience: e.target.value })
                      }
                    >
                      <option value="">Select experience</option>
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <a href="https://github.com/Farrux02/react-task2.git" className="repo-link">Repo</a>
              <button className="cancel" onClick={() => clearValues()}>
                Отменить
              </button>
              <button className="save" type="submit">
                Сохранить
              </button>
            </div>
          </form>
          <form onSubmit={addJobType}>
            <div className="mini-wrapper job-type">
              <div className="div-heading">
                <h1>Job Type</h1>
              </div>
              <div className="form-wrapper__content">
                <FormInput
                  label="Label"
                  name="company"
                  type="text"
                  required
                  placeholder='Add job type'
                  value={values.jobType}
                  handleChange={(e) =>
                    setValues({ ...values, jobType: e.target.value })
                  }
                />
                <button
                  className="cancel"
                  type="button"
                  onClick={() => clearValues()}
                >
                  Отменить
                </button>
                <button className="save" type="submit">
                  Сохранить
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
