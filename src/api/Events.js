/*
 * Example of an event object
 * All of the information needs to be formatted the same way
  {
    date: "June 15",
    time: "9:00 PM",
    location: "Gypsy Sally's (Washington, D.C.)",
  }
 */

module.exports = {
  events: [
    {
      date: "May 22",
      location: "Union Stage",
      details: "Washington, DC",
    },
    {
      date: "May 24",
      location: "SoFar Sounds, NYC",
      details: "Brooklyn, NY",
    },
    {
      date: "June 30",
      location: "DC9",
      details: "Washington, DC",
    },
    {
      date: "",
      location: "",
      details: "",
    },
  ]
};