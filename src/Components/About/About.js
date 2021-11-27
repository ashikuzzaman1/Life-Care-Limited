import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './About.css'

const About = () => {
    return (
        <div className="about-field">
            <Menubar/>
            <div className="container about-area">
                <div>
                    {/* about goals area */}
                    <h2><i class="fas fa-bullseye"></i> Our Goals:</h2>
                    <p>Specialist Doctors Bangladesh is an open platform to share reviews, pictures, posts and any kind of suggestions related to doctors and hospitals. It may help other Patients like you to find out the perfect doctor and their beloved family from hassles. Specialist Doctors BD community has no connection with any doctor or any hospital. We can't suggest the best doctors for you but we can offer a list of specialist doctors you are finding for an appointment. Please don't depend on our website completely. consider what else you know. Please join with our Facebook community "Specialist Doctors Bangladesh" to get new updates on Facebook. If you face any kind of difficulties or harassment from any doctors in Bangladesh and want to share with all Bangladeshis, just send us your story. If you have any query or found any dissimilarity between actual information and our website, please leave a comment on the post. You can message us too. For any business query, please send us mail : admin@specialistdoctorsbd.com 
                    </p>
                    {/* about course area */}
                    <h2 className="course-area"><i class="fab fa-discourse"></i> Our Success</h2>
                    <p>
                    HospitalSuccess, as the very name signifies and defines, is built to offer a wide spectrum of services exclusively for hospitals, healthcare centres and clinics all under one roof to minimize costs, maximize revenue, succeed and grow manifold levels.

                    We at HospitalSuccess leveraging our deep experience, cutting edge technology in healthcare industry to empower, transform hospitals with increased visibility, efficiency, productivity to deliver optimized patient care.

                    The core objective of working exclusively for online, offline marketing, branding of hospitals and bringing about a change leading to digital transformation of hospitals is to lead them towards growth path and helping them deliver quality patient care. The management of HospitalSuccess comes with over a decade long marketing and branding experience in top hospitals has provided them an insight into how hospitals work and deliver services to the patients.

                    It is this insightful information that culminated into creating the platform HospitalSuccess, wherein we help small, medium and big hospitals for their offline and digital marketing campaigns, increasing visibility, creating a brand identity and grow manifold levels.

                    Why hospital success
                    HospitalSuccess basically is a full service, full scale, end-to-end hospital marketing Services and staffing Company where we understand the requirements, carry out in-depth study, research and analysis and recommend right fit services, formulate strategic road map implementation plan and execute it to deliver measurable results.

                    At the end of the day, what matters to us is effective, efficient patient care delivered by the hospital, and we walk that extra mile to help the hospitals achieve this objective.
                    </p>
                </div>
                {/* about support area */}
                <div className="row support-area">
                    <div className="col-md-4">
                        <h3><i class="fas fa-hourglass-start"></i> Vision</h3>
                        <p>The Vision of HospitalSuccess is to build world class infrastructure, marketing, technological expertise.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3><i class="fas fa-tags"></i> Mission</h3>
                        <p>The Mission is to create and build a brand identity for         HospitalSuccess as a one stop platform.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3><i class="fas fa-heartbeat"></i> Core Competency</h3>
                        <p>HospitalSuccess core competency lies in the Performance Marketing ,Digital Marketing, Branding.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;