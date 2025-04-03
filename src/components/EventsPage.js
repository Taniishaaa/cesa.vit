import React from "react";
import { motion } from "framer-motion";
import "../styles/Events.css"; // Create a separate CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

const events = [
  {
    id: 1,
    title: "Code Gauntlet",
    date: "7 APRIL 2025",
    time: "4 PM - 6 PM",
    location: "M408, M409, M411",
    imageUrl: "/images/code_gaunlet.png",
    registrationUrl: "https://forms.gle/UUmTrECzLTnCkn8L6",
  },
  {
    id: 2,
    title: "The Cryptic Chase",
    date: "8 APRIL 2025",
    time: "4 PM - 6 PM",
    location: "M206, M207, M208",
    imageUrl: "/images/cryptic_chase.png",
    registrationUrl: "https://forms.gle/3MEqSdn4tapWei5b6",

  },
  {
    id: 3,
    title: "Brain Byte Battle",
    date: "9 APRIL 2025",
    time: "4 PM - 6 PM",
    location: "M307, M308, M309",
    imageUrl: "/images/brain_byte_battle.png",
    registrationUrl: "https://forms.gle/dZPCnwwH8BYt5RH16",
  },
  {
    id: 4,
    title: "Retro Code",
    date: "10 APRIL 2025",
    time: "4 PM - 6 PM",
    location: "M308, M310, M312",
    imageUrl: "/images/retro_code.png",
    registrationUrl: "https://forms.gle/aCrc8yD5Kpgytpzn8",
    
  },
  {
    id: 5,
    title: "Vision Vanguard",
    date: "11 APRIL",
    time: "4 PM - 6 PM",
    location: "ONLINE MODE",
    imageUrl: "/images/vision_vanguard.png",
    registrationUrl: "https://forms.gle/g15CG3W18ujpGH6Q8",
  },
];

const EventsPage = () => {
  return (
    <div style={{ width: "100vw" }}>
      < Header/>
      <div className="events-page">
        <motion.h1
          className="events-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Upcoming Events
        </motion.h1>
        <p className="events-subtitle">
          Register And Unleash Your Talent – Join Our Tech Events & Shine!
        </p>
        <div className="events-container">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 0, 128, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)",
              }}
            >
              <div className="event-image-container">
                <img src={event.imageUrl} alt={event.title} className="event-image" />
              </div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-details">
                📅 {event.date} | ⏰ {event.time} | 📍 {event.location}
              </p>
              <motion.button
                className="register-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EventsPage;
