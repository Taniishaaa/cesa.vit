import React from "react";
import "../styles/TeamPage.css";
import Header from "./Header";
import Footer from "./Footer";

const Avatar = ({ src, alt }) => <img className="avatar" src={src} alt={alt} />;

const Card = ({ children }) => <div className="card">{children}</div>;

const CardContent = ({ children }) => <div className="card-content">{children}</div>;

const teamMembers = [
  { name: "MRS. SUJA JAYACHANDRAN", role: "CONVENOR", image: "/images/convenor.jpeg", department: "Convenors" },
  { name: "MRS. SNEHAL ANDHARE", role: "CO-CONVENOR", image: "/images/convenor2.jpg", department: "Convenors" },
  { name: "SIDDHI", role: "CHAIRPERSON", image: "/images/1.png", department: "Executives" },
  { name: "MANPREET", role: "GENERAL SECRETARY", image: "/images/2.png", department: "Executives" },
  { name: "SHRAVANI", role: "VICE CHAIRPERSON", image: "/images/3.png", department: "Executives" },
  { name: "SREEJITH", role: "HEAD", image: "/images/10.png", department: "Technical" },
  { name: "TANISHA", role: "CO-HEAD", image: "/images/11.png", department: "Technical" },
  { name: "ARYAN", role: "HEAD", image: "/images/4.png", department: "Events" },
  { name: "BHAVESH", role: "CO-HEAD", image: "/images/5.png", department: "Events" },
  { name: "AKSHADA", role: "HEAD", image: "/images/6.png", department: "Creatives" },
  { name: "DIKSHA", role: "CO-HEAD", image: "/images/7.png", department: "Creatives" },
  { name: "ZAYD", role: "HEAD", image: "/images/8.png", department: "Publicity" },
  { name: "SHRUTI", role: "CO-HEAD", image: "/images/9.png", department: "Publicity" },
  { name: "APURVA", role: "HEAD", image: "/images/12.png", department: "Media" },
  { name: "ISHA", role: "CO-HEAD", image: "/images/13.png", department: "Media" },
  { name: "TANISHA", role: "HEAD", image: "/images/14.png", department: "Documentation" },
  { name: "PRASHI", role: "CO-HEAD", image: "/images/15.png", department: "Documentation" },
];

const TeamPage = () => {
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {});

  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <div className="team-container">
        <h1 className="team-title">MEET THE TEAM</h1>
        {Object.entries(groupedMembers).map(([department, members], index) => (
          <div key={index}>
            <h2 className="department-title">{department}</h2>
            <div className="team-row">
              {members.map((member, idx) => (
                <Card key={idx}>
                  <CardContent>
                    <Avatar src={member.image} alt={member.name} />
                    <h2 className="member-name">{member.name}</h2>
                    <p className="member-role">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;