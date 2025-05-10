import React, { useState } from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import Education from './components/Education';
import Experiences from './components/Experiences';
import SkillsMultiple from './components/SkillsMultiple';
import { parseCV } from '../../../services/cv-parser.service';
import { toast, Toaster } from 'react-hot-toast';

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import  CopyrightFooter from "../../../common/CopyrightFooter";
import MobileMenu from "../../../common/MobileMenu";

import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
import ResumeForm, { AddCV } from './components';
import Seo from '../../../common/Seo';

const MyResumePage: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [isParsingCV, setIsParsingCV] = useState(false);
  const [parsingFeedback, setParsingFeedback] = useState<{ 
    type: 'success' | 'error' | 'info'; 
    message: string 
  } | null>(null);
  const [showParsedData, setShowParsedData] = useState(false);
  const [parsedData, setParsedData] = useState<any>(null);

  const handleCVUpload = async (file: File) => {
    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'text/csv',
      'text/html',
      'text/xml',
      'application/rtf'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a PDF, DOCX, or text-based file (TXT, CSV, HTML, XML, RTF).');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB.');
      return;
    }

    try {
      setIsParsingCV(true);
      // Show parsing status message
      toast.loading(`Parsing your ${
        file.type === 'application/pdf' ? 'PDF' : 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? 'DOCX' : 
        'text-based'} CV...`);

      // Parse CV using backend service
      const parsedData = await parseCV(file);
      
      // Show the parsed data modal
      setShowParsedData(true);
      setParsedData(parsedData);

      // Dismiss the loading toast
      toast.dismiss();
      toast.success('CV parsed successfully!');

    } catch (error) {
      console.error('Error parsing CV:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to parse CV. Please try again or update manually.');
    } finally {
      setIsParsingCV(false);
    }
  };

  return (
    <div className="page-wrapper dashboard">
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px 24px',
            fontSize: '16px',
            maxWidth: '400px',
            minWidth: '300px'
          },
          success: {
            duration: 3000,
            style: {
              background: '#22c55e',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#22c55e',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
          loading: {
            style: {
              background: '#363636',
              color: '#fff',
              padding: '16px 24px',
              fontSize: '16px',
              maxWidth: '400px',
              minWidth: '300px'
            },
          },
        }}
      />
      <Seo pageTitle="My Resume" />
      {/* <!-- Header Span for hight --> */}    

      {/*<LoginPopup />
       End Login Popup Modal */}

      <Header />
      {/*<DashboardCandidatesHeader />*/}
      {/* End Header */}

      {/*<MobileMenu />
       End MobileMenu */}
      <MobileMenu />
      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          {/* breadCrumb */}

          <MenuToggler />
          <div
              style={{
                height: "55px", // Adjust this to match your header's height
              }}
            ></div>
          <BreadCrumb title="My Resume!" />
          {/* Collapsible sidebar button */}

          {/* End .row top card block */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Resume</h4>
                  </div>
                  
                  <div className="widget-content">
                    <AddCV 
                      onUpload={handleCVUpload} 
                      isLoading={isParsingCV} 
                      showParsedData={showParsedData}
                      setShowParsedData={setShowParsedData}
                      parsedData={parsedData}
                      setParsedData={setParsedData}
                    />
                  </div>
                  <div className="widget-content">
                    <Education />
                    <div className="mt-5">
                      <Experiences />
                    </div>
                    <div className="mt-5">
                      <SkillsMultiple />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export { MyResumePage }; 