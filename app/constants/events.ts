export interface EventProps {
    type: "past" | "upcoming" | "ongoing",
    image: string,
    name: string,
    date: string,
    venue: string,
    description?: string
}

const events: EventProps[] = [
  {
    type: "past",
    image: "/images/events/events 1.jpg",
    name: "AI Tech Summit 2023",
    date: "13-Jan-2023",
    venue: "Robo Vision School",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "past",
    image: "/images/events/events 2.jpg",
    name: "AI Innovators Conference 2023",
    date: "20-Feb-2023",
    venue: "Bliss Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "past",
    image: "/images/events/events 3.jpg",
    name: "AI for Good Symposium 2023",
    date: "10-Mar-2023",
    venue: "Harmony Hall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 3.jpg",
    name: "AI Ethics Summit 2023",
    date: "15-Aug-2023",
    venue: "Ethics Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "ongoing",
    image: "/images/events/events 4.jpg",
    name: "AI Startups Expo 2023",
    date: "5-Jul-2023",
    venue: "Innovation Hub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "past",
    image: "/images/events/events 5.jpg",
    name: "AI in Healthcare Symposium 2023",
    date: "10-Jun-2023",
    venue: "MedTech Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "ongoing",
    image: "/images/events/events 6.jpg",
    name: "AI Future Summit 2023",
    date: "2-Jul-2023",
    venue: "Tech Tower",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "ongoing",
    image: "/images/events/events 7.jpg",
    name: "AI Robotics Conference 2023",
    date: "07-Jul-2023",
    venue: "RoboTech Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 8.jpg",
    name: "AI in Finance Forum 2023",
    date: "15-Sep-2023",
    venue: "Finance Plaza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 9.jpg",
    name: "AI Tech Expo 2024",
    date: "13-Jan-2024",
    venue: "Innovate Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 10.jpg",
    name: "AI Innovators Summit 2024",
    date: "20-Feb-2024",
    venue: "Techville Hall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 11.jpg",
    name: "AI Impact Conference 2024",
    date: "10-Mar-2024",
    venue: "Impact Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 12.jpg",
    name: "AI Ethics Symposium 2024",
    date: "15-Apr-2024",
    venue: "Ethics Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 13.jpg",
    name: "AI Startups Expo 2024",
    date: "25-May-2024",
    venue: "Innovation Hub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis aSed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "past",
    image: "/images/events/events 14.jpg",
    name: "AI in Healthcare Symposium 2023",
    date: "10-Jun-2023",
    venue: "MedTech Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 15.jpg",
    name: "AI Future Summit 2024",
    date: "20-Jul-2024",
    venue: "Tech Tower",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "ongoing",
    image: "/images/events/events 16.jpg",
    name: "AI Robotics Conference 2023",
    date: "01-Jul-2023",
    venue: "RoboTech Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 17.jpg",
    name: "AI in Finance Forum 2024",
    date: "15-Sep-2024",
    venue: "Finance Plaza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 18.jpg",
    name: "AI Tech Expo 2025",
    date: "13-Jan-2025",
    venue: "Innovate Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "upcoming",
    image: "/images/events/events 19.jpg",
    name: "AI Innovators Summit 2025",
    date: "20-Feb-2025",
    venue: "Techville Hall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  },
  {
    type: "past",
    image: "/images/events/events 20.jpg",
    name: "AI Impact Conference 2023",
    date: "10-Mar-2023",
    venue: "Impact Center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor eu urna viverra posuere. Nullam sollicitudin pharetra eros, id eleifend lectus convallis a. Sed rhoncus nunc at orci finibus, sit amet placerat justo fringilla."
  }
];

export default events