import guy1 from "../Images/guy1.png";
import guy2 from "../Images/guy2.png";
import lady from "../Images/lady-red.png";

const data = [
    {
        id: 1,
        image: guy1,
        name: "Jason Mammoa",
        title: "Project Manager at Google",
        rating: Array(5).fill(null),
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
    },
    {
        id: 2,
        image: guy2,
        name: "Chris Hemsworth",
        title: "Data Scientist at Amazon",
        rating: Array(5).fill(null),
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 3,
        image: lady,
        name: "Emily Blunt",
        title: "Software Engineer at Microsoft",
        rating: Array(5).fill(null),
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];

export default data;
