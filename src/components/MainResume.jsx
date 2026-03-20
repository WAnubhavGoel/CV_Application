import {format} from 'date-fns';
import profilePic from '../images/profile-CDvb9xS2.jpg';
export function MainResume({data}) {
  const {general_information, education, work_experience} = data;

  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="header-info">
          <h1 className="name">{general_information.name}</h1>
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">
                {general_information.phone_number}
              </span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email:</span>
              <span className="contact-value">{general_information.email}</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Address:</span>
              <span className="contact-value">
                {general_information.address}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-section">
        <h2 className="section-title">OBJECTIVE</h2>
        <hr className="section-divider" />
        <p className="objective-text">{general_information.objective}</p>
      </div>
      <div className="resume-section">
        <h2 className="section-title">EDUCATION</h2>
        <hr className="section-divider" />
        <div className="experience-item">
          <div className="date-column">
            {education.start_date &&
              format(new Date(education.start_date), 'dd-MMM-yyyy')}
            {(education.start_date || education.end_date) && ' - '}
            {education.end_date &&
              format(new Date(education.end_date), 'dd-MMM-yyyy')}
          </div>
          <div className="details-column">
            <h3 className="institution">
              {education.school_name}
              {education.city ? `, ${education.city}` : ''}
              {education.country ? `, ${education.country}` : ''}
            </h3>
            <p className="degree">
              {education.degree}{' '}
              {education.major ? `in ${education.major}` : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">WORK EXPERIENCE</h2>
        <hr className="section-divider" />
        <div className="experience-item">
          <div className="date-column">
            {work_experience.start_date &&
              format(new Date(work_experience.start_date), 'dd-MMM-yyyy')}{' '}
            {work_experience.start_date || work_experience.end_date ? '-' : ''}{' '}
            {work_experience.end_date &&
              format(new Date(work_experience.end_date), 'dd-MMM-yyyy')}
          </div>
          <div className="details-column">
            <h3 className="institution">{work_experience.company_name}</h3>
            <p className="degree">{work_experience.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
