import React, { useState } from 'react';
import { CvUploader } from './components';
import { toast } from 'react-hot-toast';
import { useUserProfile, UserProfileData } from '../hooks/useUserProfile';

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import  CopyrightFooter from "../../../common/CopyrightFooter";
import MobileMenu from "../../../common/MobileMenu";

import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
interface ICvHistory {
  id?: string;
  fileName: string;
  fileUrl: string;
  createdAt: string;
}

const CvManagerPage: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [cvUrl, setCvUrl] = useState<string | null>(null);

  const handleCvUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('cv', file);
    
    if (!userData?.id) {
      toast.error('User ID not found');
      return;
    }
    
    formData.append('userId', userData.id.toString());

    try {
      const response = await fetch('http://localhost:5000/api/profile/cv/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload CV');
      }

      const data = await response.json();
      setCvUrl(data.cvUrl);
     // toast.success('CV uploaded successfully');
    } catch (error) {
      console.error('Error uploading CV:', error);
   //  toast.error('Failed to upload CV. Please try again.');
    }
  };

  const handleCvDelete = async (cvId: string) => {
    if (!userData?.id) {
      toast.error('User ID not found');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/profile/cv/${cvId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      if (!response.ok) {
        throw new Error('Failed to delete CV');
      }

      setCvUrl(null);
      toast.success('CV deleted successfully');
    } catch (error) {
      console.error('Error deleting CV:', error);
      toast.error('Failed to delete CV. Please try again.');
    }
  };

  const cvManagerData = {
    id: userData?.id || '',
    profile: {
      cv: userData?.cv ? [{ 
        id: userData.cv,
        fileName: userData.cv.split('/').pop() || '',
        fileUrl: userData.cv,
        createdAt: new Date().toISOString()
      }] : []
    }
  };

  return (
    
    
<div className="page-wrapper dashboard">
<span className="header-span"></span>
{/* <!-- Header Span for hight --> */}

{/*<LoginPopup />
 End Login Popup Modal */}
<MobileMenu />
<Header />
      {/*<DashboardCandidatesHeader />*/}
{/* End Header */}

{/*<MobileMenu />
 End MobileMenu */}

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
    
    <BreadCrumb title="Check your resumes!" />
    {/* Collapsible sidebar button */}

    
      {/* <!-- Dashboard --> */}
    <div className="row">
      <div className="col-lg-12">
        {/* CV Manager Widget */}
        <div className="cv-manager-widget ls-widget">
          <div className="widget-title">
            <h4>CV Manager</h4>
          </div>
          {/* End widget-title */}
          <div className="widget-content">
            <CvUploader 
              onUpload={handleCvUpload} 
              onDelete={handleCvDelete}
              userData={cvManagerData}
            />
          </div>
          {/* End widget-content */}
        </div>
        {/* End CV Manager Widget */}
      </div>
    </div>
    
    </div>

    {/* End .row profile and notificatins */}
  
  {/* End dashboard-outer */}
</section>
{/* <!-- End Dashboard --> */}

<CopyrightFooter />
{/* <!-- End Copyright --> */}
</div>
// End page-wrapper
  );
};

export { CvManagerPage }; 