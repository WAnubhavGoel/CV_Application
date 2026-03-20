import {useState} from 'react';
import {defData} from './components/data';
import {GeneralInformation} from './components/GeneralInformation';
import {EducationalExperience} from './components/EducationExperience';
import {WorkExperience} from './components/WorkExperience';
import './App.css';
function App() {
  const [data, setData] = useState(defData);
  const [activeIndex, setActiveIndex] = useState(0);
  function handleGeneralInfoUpdate(newData) {
    setData({...data, general_information: newData});
  }
  function handleEducationInfoUpdate(newData) {
    setData({...data, education: newData});
  }
  function handleWorkInfoUpdate(newData) {
    setData({...data, work_experience: newData});
  }
  return (
    <div className="container">
      <div className="left">
        <GeneralInformation
          data={data.general_information}
          onSubmit={handleGeneralInfoUpdate}
          isActive={activeIndex === 0}
          onShow={(el) => {
            setActiveIndex(el);
          }}
        ></GeneralInformation>
        <EducationalExperience
          data={data.education}
          onSubmit={handleEducationInfoUpdate}
          isActive={activeIndex === 1}
          onShow={(el) => {
            setActiveIndex(el);
          }}
        ></EducationalExperience>
        <WorkExperience
          data={data.work_experience}
          onSubmit={handleWorkInfoUpdate}
          isActive={activeIndex === 2}
          onShow={(el) => {
            setActiveIndex(el);
          }}
        ></WorkExperience>
      </div>
      <div className="right"></div>
    </div>
  );
}
export {App};
