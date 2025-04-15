import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Event interface and EventsResponse type here
interface Event {
  status: boolean;
  accepted: boolean;
  related: string;
  _id: string;
  title: string;
  cover: string;
  images: string[];
  type: string;
  description: string;
  url: string;
  content: string;
  slug: string;
  userCreated: string;
  userUpdated: string;
  createdAt: string;
  lastUpdateAt: string;
}

type EventsResponse = [Event[], number];

const Blog = () => {
  const [events, setEvents] = useState<Event[]>([]); // Use the Event interface
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://esprit.tn/uploads"; // Base URL for images

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://esprit.tn/api/events/actualite/esprit/6/0");
        const data: EventsResponse = await response.json();
        setEvents(data[0]); // Access the events array from the response
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <>
      {events.slice(0, 3).map((item) => (
        <div className="news-block col-lg-4 col-md-6 col-sm-12" key={item._id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src={`${baseUrl}/${item.cover}`} alt="blog post" /> {/* Prepend base URL */}
              </figure>
            </div>
            <div className="lower-content">
              <h3>
                <Link to={`/blog-details/${item._id}`}>
                  {item.title}
                </Link>
              </h3>
              <p className="text">{item.description}</p>
              <Link 
                to={`/blog-details/${item._id}`} 
                className="read-more"
                style={{ 
                  color: '#D50000', 
                  transition: 'all 0.3s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#B50000'}
                onMouseOut={(e) => e.currentTarget.style.color = '#D50000'}
              >
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;