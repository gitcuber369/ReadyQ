import { HoverEffect } from "../ui/Card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Tailored to Perfection: AI Interviews Just for You",
    description:
      "Say goodbye to generic interviews! Our AI adapts questions based on your preferences, ensuring a personalized experience that reflects your unique skills and aspirations. Get ready to shine like never before!",
  },
  {
    title: "Insightful Report Cards",
    description:
      "Dive deep into your performance with our insightful report cards after each interview. Understand your strengths, pinpoint areas for improvement, and track your progress over time. Empower yourself with actionable insights to ace every opportunity.",
  
  },
  {
    title: "24/7 Availability",
    description:
      "Don't let time zones or schedules limit your potential. With our platform's round-the-clock availability, you can practice interviews whenever and wherever it suits you. Whether it's a late-night prep session or an early morning review, we've got you covered.",
  },
  {
    title: "Total Customizability",
    description:
      "Take control of your interview experience with unparalleled customization options. Adjust the difficulty level, choose specific question categories, or even tailor the interview format to match your preferences. Your success story begins with a personalized approach",
  },
];
