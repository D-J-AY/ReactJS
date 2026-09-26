import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeAjTj-hiouv8XBGNJ5E-_SJyjOsmCmaNSGfuSB7CEg&s=10",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZciLmZ88o0cLKtDAqEAvqA1fHAYVb2MXxcJl_VOLRqw&s=10",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpX6LLQ-9ZQ1Cr8B42xUu30zZS3jD_W_qP6m3qHTPWQ&s=10",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDZfQFgkOx0fkvr7xATdrEQfiBSLGMSkLX4C6few5AA&s=10",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZE5iSqzsFHRycciynKoBVfWHyldsyWMtj7G2eRKK3A&s=10",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Remote, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2WwEvTUHVPlvyQ2-TnGqUOloNMydpv5M9-73YQvjHg&s=10",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDnHxaiWDSP12X4w_hN3tSE4JkgLTt6wfJDED8D8IOg&s=10",
      companyName: "Salesforce",
      datePosted: "10 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rU25mnV4mfWqCgV9Y5sjKIfwb2HSKpXAYYJsPLAqCg&s=10",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$46/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ-iMr1Rh88nreHgPIpCPPZq6PAqszvTAbrEx2QrQow&s=10",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Software Engineer - AI",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRU8k5s2sFfPHovcao5kOVrd9qH7eblKbXc_MXt6WGg&s=10",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Cloud Software Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Mumbai, India"
    }
  ];
  
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card  company={elem.companyName} post={elem.post} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} logo={elem.brandLogo} datePosted={elem.datePosted} location = {elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App