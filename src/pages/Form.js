import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyEditor from "../components/draftjs/RichTextEditor";
import "../assets/css/resumeForm.css";

const Form = (props) => {
  const [notOkay, setNotOkay] = useState([]);

  const notify = () =>
    toast.error("Please check all fields!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const changer = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitter = (e) => {
    e.preventDefault();
    const result = validator();
    if (result.length === 0) {
      console.log(data);
      navigate("/child-component", { state: { parameter: [data] } });
    } else {
      notify();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  //Function that sets TextUtils data
  const texter = (rData) => {
    setData({ ...data, [rData.id]: rData.data });
  };

  //For the skills data in the form of AOO
  const [skillsData, setSkillsData] = useState([]);

  const [skills, setSkills] = useState([0, 1, 2]); // or any other array of skill IDs

  const skillChanger = (event, skillId) => {
    const updatedSkillsData = [...skillsData]; // create a copy of the array
    updatedSkillsData[skillId] = { skillId, value: event.target.value };
    setSkillsData(updatedSkillsData);
    setData({
      ...data,
      skills: updatedSkillsData,
    });
  };

  //For the skills data in the form of AOO
  const [languageData, setLanguageData] = useState([]);

  const [language, setLanguage] = useState([0, 1]); // or any other array of skill IDs

  const languageChanger = (event, languageId) => {
    const updatedLanguageData = [...languageData]; // create a copy of the array
    updatedLanguageData[languageId] = { languageId, value: event.target.value };
    setLanguageData(updatedLanguageData);
    setData({
      ...data,
      language: updatedLanguageData,
    });
  };

  // For the work data in the form of AOO
  const [workData, setWorkData] = useState([]);

  const [work, setWork] = useState([0]);

  const workChanger = (event, workId) => {
    const updatedWorkData = [...workData]; // create a copy of the array
    updatedWorkData[workId] = {
      workId,
      ...updatedWorkData[workId],
      [event.target.name]: event.target.value,
    };

    setWorkData(updatedWorkData);
    setData({
      ...data,
      work: updatedWorkData,
    });
  };

  // For the project data in the form of AOO
  const [projectData, setprojectData] = useState([]);

  const [project, setProject] = useState([0]);

  const projectChanger = (event, projectId) => {
    const updatedProjectData = [...projectData]; // create a copy of the array
    updatedProjectData[projectId] = {
      projectId,
      ...updatedProjectData[projectId],
      [event.target.name]: event.target.value,
    };

    setprojectData(updatedProjectData);
    setData({
      ...data,
      project: updatedProjectData,
    });
  };

  const validator = () => {
    let re = {
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phone: /^\+?\d+$/,
    };
    let result = [];
    if (!(data && data.name && data.name.length > 2)) {
      result.push("name");
    }
    if (!(data && data.address && data.address.length > 5)) {
      result.push("address");
    }
    if (
      !(
        data &&
        data.phone &&
        data.phone.length > 9 &&
        re.phone.test(data.phone)
      )
    ) {
      result.push("phone");
    }
    if (!(data && data.email && re.email.test(data.email))) {
      result.push("email");
    }
    if (!(data && data.career && data.career.length > 20)) {
      result.push("career");
    }
    if (!(data && data.about && data.about.length > 20)) {
      result.push("about");
    }
    if (!(data && data.education && data.education.length > 8)) {
      result.push("education");
    }
    if (!(data && data.job_profile && data.job_profile.length > 10)) {
      result.push("job_profile");
    }
    setNotOkay(result);
    return result;
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={submitter} className="mb-5">
        <div className="form__header">
          <h1>Build Your Resume</h1>
          <p>Enter the fields below to generate an html resume</p>
        </div>
        <h2>Personal Details</h2>
        <div className="form-group">
          <label
            htmlFor="name"
            className={`${notOkay.includes("name") ? "text-red-600" : ""}`}
          >
            Full Name <span>*</span>
          </label>
          <textarea
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            onChange={changer}
          />
          <div id="name__error" className="error"></div>
        </div>
        <div className="form-group">
          <label
            htmlFor="address"
            className={`${notOkay.includes("address") ? "text-red-600" : ""}`}
          >
            Address <span>*</span>
          </label>
          <textarea
            type="text"
            name="address"
            id="address"
            placeholder="Your addressline (must be atlease 10 characters long)"
            onChange={changer}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="phone"
            className={`${notOkay.includes("phone") ? "text-red-600" : ""}`}
          >
            Phone <span>*</span>
          </label>
          <textarea
            type="number"
            name="phone"
            id="phone"
            placeholder="Your mobile number (*Including country code)"
            onChange={changer}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className={`${notOkay.includes("email") ? "text-red-600" : ""}`}
          >
            Email <span>*</span>
          </label>
          <textarea
            type="text"
            name="email"
            id="email"
            placeholder="example@mail.com"
            onChange={changer}
          />
          <div id="email__error" className="error"></div>
        </div>
        <div className="form-group">
          <label
            htmlFor="about"
            className={`${notOkay.includes("about") ? "text-red-600" : ""}`}
          >
            About You <span>*</span>
          </label>
          <textarea
            name="about"
            id="about"
            placeholder="About you (should be atlease 20 characters long)"
            onChange={changer}
          ></textarea>
        </div>
        <div className="form-group">
          <label
            htmlFor="career"
            className={`${notOkay.includes("career") ? "text-red-600" : ""}`}
          >
            Career Objectives <span>*</span>
          </label>
          <textarea
            name="career"
            id="career"
            placeholder="Your goals (should be atlease 20 characters long)"
            onChange={changer}
          ></textarea>
        </div>
        <div className="form-group">
          <label
            htmlFor="profile"
            className={`${
              notOkay.includes("job_profile") ? "text-red-600" : ""
            }`}
          >
            Profile <span>*</span>
          </label>
          <textarea
            name="job_profile"
            id="job_profile"
            placeholder="Job profile (EX- React developer) (should be atlease 5 characters long)"
            onChange={changer}
          ></textarea>
        </div>
        <div className="line-break"></div>

        <div className="form-group">
          <label>languages</label>
          <div className="flex pt-5  my-5 flex-wrap justify-between">
            {language.map((languageId) => (
              <React.Fragment key={languageId}>
                <label
                  htmlFor={`language-${languageId}`}
                  className="text-purple-600"
                >
                  language {languageId + 1}
                </label>
                <textarea
                  type="text"
                  name={`language-${languageId}`}
                  id={`language-${languageId}`}
                  onChange={(event) => languageChanger(event, languageId)}
                />
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={() => {
              setLanguage(language.concat(language.length));
            }}
            type="button"
            className="rounded-md text-white p-2 bg-purple-600 border-none mb-2"
          >
            Add more
          </button>
        </div>
        <div className="line-break"></div>

        <div className="form-group">
          <label
            htmlFor="education"
            className={`${notOkay.includes("education") ? "text-red-600" : ""}`}
          >
            Education <span>*</span>
          </label>
          <MyEditor id="education" operation={texter} className="rounded-md" />
        </div>
        <div className="line-break"></div>

        <div className="form-group">
          <label>Skills</label>
          <div className="flex pt-5 my-5 flex-wrap justify-between">
            {skills.map((skillId) => (
              <React.Fragment key={skillId}>
                <label htmlFor={`skill-${skillId}`} className="text-purple-600">
                  Skill {skillId + 1}
                </label>
                <textarea
                  type="text"
                  name={`skill-${skillId}`}
                  id={`skill-${skillId}`}
                  onChange={(event) => skillChanger(event, skillId)}
                />
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={() => {
              setSkills(skills.concat(skills.length));
            }}
            type="button"
            className="rounded-md text-white p-2 bg-purple-600 border-none mb-2"
          >
            Add more
          </button>
        </div>
        <div className="line-break"></div>
        <div className="form-group">
          <label htmlFor="project">Projects</label>
          {project.map((i) => {
            return (
              <React.Fragment key={i}>
                <div className="flex pt-5 my-5  flex-wrap justify-between">
                  <div className="w-full">
                    <label
                      className="pb-2 text-purple-600"
                      htmlFor={`job-number`}
                    >{`Project ${i + 1}`}</label>
                    <label htmlFor={`project-title`}>Project title</label>
                    <textarea
                      name={`project-title`}
                      id={`project-title`}
                      onChange={(event) => projectChanger(event, i)}
                    ></textarea>
                  </div>
                  <div className="se-date">
                    <label htmlFor={`project-start`}>Start Date</label>
                    <input
                      type="date"
                      name={`project-start`}
                      id={`project-start`}
                      onChange={(event) => projectChanger(event, i)}
                    />
                  </div>
                  <div className="se-date">
                    <label htmlFor={`project-end`}>End Date</label>
                    <input
                      type="date"
                      name={`project-end`}
                      id={`project-end`}
                      onChange={(event) => projectChanger(event, i)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor={`project-details`}>Project Details</label>
                    <textarea
                      name={`project-details`}
                      id={`project-details`}
                      onChange={(event) => projectChanger(event, i)}
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <label htmlFor={`project-url`}>Project URL</label>
                    <textarea
                      name={`project-url`}
                      id={`project-url`}
                      onChange={(event) => projectChanger(event, i)}
                    ></textarea>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          <button
            onClick={() => setProject(project.concat(project.length))}
            type="button"
            className="rounded-md text-white p-2 bg-purple-600 border-none mb-2"
          >
            Add more
          </button>
        </div>
        <div className="line-break"></div>

        <div className="form-group">
          <label htmlFor="job">Past job</label>
          {work.map((i) => {
            return (
              <React.Fragment key={i}>
                <div className="flex pt-5  my-5 flex-wrap justify-between">
                  <div className="w-full">
                    <label
                      className="pb-2 text-purple-600"
                      htmlFor={`job-number`}
                    >{`Work ${i + 1}`}</label>
                    <label htmlFor={`job-title`}>Job designation</label>
                    <textarea
                      name={`job-title`}
                      id={`job-title`}
                      onChange={(event) => workChanger(event, i)}
                    ></textarea>
                  </div>
                  <div className="se-date">
                    <label htmlFor={`job-start`}>Start Date</label>
                    <input
                      type="date"
                      name="job-start"
                      id="job-start"
                      onChange={(event) => workChanger(event, i)}
                    />
                  </div>
                  <div className="se-date">
                    <label htmlFor={`project-end`}>End Date</label>
                    <input
                      type="date"
                      name="job-end"
                      id="job-end"
                      onChange={(event) => workChanger(event, i)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor={`work-place`}>Company name</label>
                    <textarea
                      name={`work-place`}
                      id={`work-place`}
                      onChange={(event) => workChanger(event, i)}
                    ></textarea>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          <button
            onClick={() => {
              setWork(work.concat(work.length));
            }}
            type="button"
            className="rounded-md text-white p-2 bg-purple-600 border-none mb-2"
          >
            Add more
          </button>
        </div>
        <div className="line-break"></div>
        <div className="form-group">
          <label htmlFor="references">References</label>
          <textarea
            name="references"
            id="references"
            onChange={changer}
          ></textarea>
        </div>
        <div className="line-break"></div>
        <div className="flex justify-center">
          <input type="submit" value="Generate Resume" id="create-resume" />
        </div>
      </form>
    </>
  );
};

export default Form;
