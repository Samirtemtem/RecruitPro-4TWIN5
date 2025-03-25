const IntroDescriptions = () => {
  return (
    <div
      //className="text-box"
      style={{
        marginTop: "20px",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      //  backgroundColor: "#f9f9f9", // Optional: Add background color for the text box
      //  borderRadius: "8px", // Optional: Rounded corners
      //  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for visual depth
      }}
    >
      <h4
        style={{
          fontSize: "30px",
          fontWeight: "500",
          marginBottom: "31px", // Optional: space below the heading
          color: "#202124", // Optional: Set text color for heading
        }}
      >
        About RECRUIT PRO
      </h4>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "26px",
          marginBottom: "26px",
          color: "#696969", 
        }}
      >
       Recruit Pro is an innovative platform designed to transform the recruitment process by automating hiring tasks and enhancing the experience for both employers and candidates. With Recruit Pro, employers can effortlessly post job listings, manage applications, and track candidates through a streamlined interface, significantly reducing time and effort in recruitment. <br /> <br />

Candidates enjoy a dedicated dashboard that allows real-time monitoring of their application status, providing transparency and keeping them informed throughout their journey. The intuitive design ensures easy navigation for both recruiters and job seekers, making the process more engaging. <br /> <br />

Integrated communication tools facilitate seamless interaction, ensuring important messages and updates are never missed. Additionally, Recruit Pro offers data-driven insights through analytics and reporting, empowering recruiters to make informed decisions based on candidate performance.
      </p>
   
    </div>
  );
};

export default IntroDescriptions;
