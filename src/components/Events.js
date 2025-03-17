import React, { useState } from "react"; 
import { motion } from "framer-motion";

function Events() {
  const [events, setEvents] = useState([
    { title: "Community Prayer", date: "2025-04-10", location: "Church Hall", category: "Religious", description: "A prayer session for all." },
    { title: "Charity Drive", date: "2025-04-15", location: "City Center", category: "Charity", description: "Helping those in need." }
  ]);

  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "Religious", description: "" });

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.category) {
      alert("Please fill all required fields.");
      return;
    }

    // Ensure correct object reference update
    setEvents((prevEvents) => [...prevEvents, { ...newEvent }]);

    // Reset form fields
    setNewEvent({ title: "", date: "", location: "", category: "Religious", description: "" });
  };

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <motion.div
      className="events"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Event Listings</h2>

      <label>Filter by Category:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p>{event.description}</p>
          </motion.div>
        ))}
      </div>

      <h3>Add New Event</h3>
      <form className="event-form">
        <input type="text" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
        <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
        <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <textarea placeholder="Description" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={addEvent}
        >
          Add Event
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Events;
