import Bar from "../components/Bar";
import "../styles/general.css";
export default function Instruction() {
  return (
    <main>
      <section className="instruction-container">
        <p className="courseText">
          This course is designed to equip you with the knowledge and skills you
          need to become a safe and responsible driver. To complete the course
          successfully, please follow these instructions carefully:
        </p>
        <h4 className="sectionSubheading">Online Presence and Timing</h4>
        <p className="courseText">
          While it's crucial to stay active on the platform during the course,
          you are welcome to take short breaks for rest or relaxation. Your
          progress and timer will automatically resume from the exact point you
          paused when you return.
        </p>
        <p className="courseText">
          The course is structured into 15 units, each covering an essential
          aspect of driving safety and responsibility.
        </p>
        <p className="courseText">
          Each unit is further divided into sections and a concluding quiz.
        </p>
        <h4 className="sectionSubheading">Quizzes and Grading</h4>
        <p className="courseText">
          Each quiz has 10 questions and requires a passing score of 80%.
        </p>
        <p className="courseText">
          If you fail a quiz, you are encouraged to review the corresponding
          course content before retaking it. You have unlimited attempts on each
          quiz.
        </p>
        <p className="courseText">
          There is a final graded quiz at the end of the course, which
          contributes significantly to your overall grade.
        </p>
        <h4 className="sectionSubheading">Course Completion Checklist</h4>
        <p className="courseText">Study each unit and complete all sections</p>
        <p className="courseText">
          Pass all quizzes with a score of at least 80%.
        </p>
        <p className="courseText">
          Successfully complete the final graded quiz.
        </p>
        <h4 className="sectionSubheading">
          Increase your comprehension by reviewing the information, taking
          notes, and reflecting on your learning.
        </h4>
        <p className="courseText">
          Don't hesitate to revisit sections if you require clarification or
          feel unsure about any topic.
        </p>
        <p className="courseText">
          Utilize the resources provided, such as videos, diagrams, and
          interactive elements, to enhance your understanding.
        </p>
        <p className="courseText">
          <span className="bold">Remember:</span> Safety on the road is
          paramount, and this course is a stepping stone towards achieving that
          goal. Take your time, learn effectively, and utilize the breaks to
          ensure you retain the knowledge best!
        </p>
        <h4 className="sectionSubheading">Course Units</h4>
        <Bar />
      </section>
    </main>
  );
}
