import { BaseCardColor, IconName } from "design-system";

interface CardData {
    color: BaseCardColor;
    iconName: IconName;
    data: {
        title: string;
        text: string;
    };
}

export const data: CardData[] = [
    {
        color: "green-light",
        iconName: "clipboard-list",
        data: {
            title: "Simple Project Management",
            text: "Seamlessly manage every aspect of your projects from ideation to execution. Projectify brings everything you need under one virtual roof."
        }
    },
    {
        color: "sunglow-light",
        iconName: "members",
        data: {
            title: "Effortless Collaboration",
            text: "Break down silos and enhance team collaboration with our intuitive features. Ensure your team stays connected and projects stay on track."
        }
    },
    {
        color: "primary-light",
        iconName: "user-check",
        data: {
            title: "User-Friendly Interface",
            text: "Embrace a sleek, user-friendly design that prioritizes a seamless user experience. Focus on what truly matters – your projects!"
        }
    },
    {
        color: "red-light",
        iconName: "clock-heart",
        data: {
            title: "Flexible Workflows",
            text: "Tailor Projectify to your unique needs. Our customizable workflows adapt to your project's specific requirements, giving the flexibility to succees."
        }
    },
    {
        color: "blue-light",
        iconName: "document-chart",
        data: {
            title: "Insightful Analytics",
            text: "Harness the power of data with our comprehensive analytics suite. Gain valuable insights into project performance for informed decisions."
        }
    },
    {
        color: "purple-light",
        iconName: "clock-check",
        data: {
            title: "Automated Task Reminders",
            text: "Never miss a deadline again! Projectify's automated task reminders keep your team on track, ensuring that crucial milestones are met."
        }
    }
];
