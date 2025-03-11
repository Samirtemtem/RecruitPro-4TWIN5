import jobCatContent from "../../common/data/job-catergories";

const JobCategorie = () => {
  return (
    <>
      {jobCatContent.map((item) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box" style={{ 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            border: '1px solid #f0f0f0',
            transition: 'all 0.3s ease' 
          }}>
            <div className="content">
              <span className={`icon ${item.icon}`} style={{ color: '#D50000' }}></span>
              <h4>
                <a 
                  href="/job-list/job-list-v1" 
                  style={{ color: '#333', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#D50000'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                >
                  {item.catTitle}
                </a>
              </h4>
              <p style={{ color: '#777' }}>({item.jobNumber} open positions)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie;
