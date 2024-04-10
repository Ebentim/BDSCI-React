import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Twelve from "../quizes/Twelve";
const sections = {
  sectionOne: "Youthful Risk Taking",
  sectionTwo: "Risk Perception by Young Drivers",
};
export default function ChapterTwelve() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuiz = () => {
    !showQuiz ? setShowQuiz(true) : setShowQuiz(false);
  };
  const ToQuiz = () => {
    return (
      <NavButtons classname={"nextButton toQuiz"} onclick={handleQuiz}>
        Unit Twelve Complete, Take the Quiz
      </NavButtons>
    );
  };

  return (
    <div className="courseBody" id="twelve">
      <h3 className="bold unitHeading">
        Unit Twelve: Risk Taking and Risk Perception of Teenagers
      </h3>
      {showQuiz ? (
        <Twelve />
      ) : (
        <div className="courseContentContainer">
          <div className="courseOutline">
            <ul className="sectionList">
              {Object.entries(sections).map(([key, value]) => (
                <li key={key}>
                  <a href={`#${key}`}>{value}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="courseContents">
              <h4 className="sectionHeading" id="sectionOne">
                Section 12.1. Youthful Risk Taking
              </h4>
              <h5 className="sectionSubheading">A. Feelings of immortality.</h5>
              <p className="courseText">
                As a teenager you may often display a sense of invulnerability,
                believing you are immune to negative outcomes, a phenomenon
                referred to as "adolescent invulnerability" or "personal fable."
                This mindset can lead you to engage in risky behaviors, assuming
                accidents and misfortunes happen to others, not people in your
                age group. The underdeveloped prefrontal cortex during
                adolescence contributes to this perception, affecting your
                ability to assess risks and make sound decisions.
              </p>
              <p className="courseText">
                This mindset poses dangers as you may underestimate the risks of
                speeding, reckless driving, and distracted driving, like texting
                while driving.
              </p>
              <h5 className="sectionSubheading">B. Dangerous behaviors</h5>
              <p className="courseText">
                Teenage drivers are prone to engaging in dangerous behaviors
                that include texting while driving, which diverts their
                attention from the road, and speeding, which impairs their
                ability to react to sudden changes. Reckless driving, drunk or
                impaired driving, and neglecting to wear seat belts also
                contribute to the alarming trend.
              </p>
              <p className="courseText">
                These dangerous behaviors can be attributed to factors such as
                peer pressure, a desire for excitement, and limited experience
                in evaluating risks.
              </p>
              <h5 className="sectionSubheading">C. False Sense of Security</h5>
              <p className="courseText">
                Teenagers' risk-taking behavior can also be influenced by a
                false sense of security stemming from modern vehicle safety
                features. While advancements in automotive technology have
                improved safety, you might overestimate the level of protection
                provided by these features.
              </p>
              <p className="courseText">
                You may believe that safety technologies like airbags, ABS, and
                ESC make them invulnerable to accidents, leading to complacency
                and reckless behavior. This false sense of security can result
                in reduced risk perception and a disregard for other safety
                practices.
              </p>
              <h5 className="sectionSubheading">
                D. High Risk of Accidents When Taking Risk
              </h5>
              <p className="courseText">
                High-risk behaviors, including speeding, distracted driving, and
                driving under the influence, are more prevalent among young
                drivers due to peer influence, thrill-seeking tendencies, and a
                sense of invulnerability. Additionally, their limited driving
                experience makes it difficult to handle unexpected situations
                effectively.
              </p>
              <p className="courseText">
                Distractions, especially from smartphones and social media, pose
                a significant threat to your focus on the road. Moreover, peer
                pressure and intense emotions can lead to reckless behaviors
                behind the wheel.
              </p>
              <h5 className="sectionSubheading">
                E. Showing off for passengers
              </h5>
              <p className="courseText">
                Attempting to impress passengers can lead to distractions inside
                the vehicle, diverting your attention from the road and
                increasing the likelihood of accidents.
              </p>
              <p className="courseText">
                The desire to show off can also contribute to overconfidence,
                reinforcing a false sense of security, you may tend to execute
                risky maneuvers without consequences, overestimating your
                driving abilities. Coupled with your limited driving experience,
                this eagerness to impress can elevate the risks and lead to
                accidents and injuries.{" "}
              </p>
              <h5 className="sectionSubheading">
                F. Lack of Experience and Good Judgment
              </h5>
              <p className="courseText">
                Novice drivers with limited exposure to various road conditions
                and challenging scenarios may struggle to respond appropriately
                to unexpected events. Additionally, their ability to anticipate
                hazards and evaluate risks may be compromised due to the ongoing
                development of the prefrontal cortex responsible for
                decision-making.
              </p>
              <h5 className="sectionSubheading">
                G. Willingness to Take Unnecessary Chances
              </h5>
              <p className="courseText">
                Teenagers, particularly new drivers, often exhibit a higher
                willingness to take unnecessary chances on the road, increasing
                the risk of accidents and injuries. Sensation-seeking behavior
                and the desire to impress peers can drive this risky behavior,
                leading some teenagers to engage in speeding, stunts, or other
                dangerous maneuvers for excitement and acceptance.
              </p>
              <p className="courseText">
                Inexperience and overestimation of their driving skills further
                contribute to their propensity for risk-taking.
              </p>
              <h4 className="sectionHeading">
                Section 12.2. Risk Perception by Young Drivers
              </h4>
              <h5 className="sectionSubheading">
                A. Lack of Perception of Unsafe Conditions
              </h5>
              <p className="courseText">
                A critical factor in risk perception among young drivers is
                their limited ability to recognize and assess potentially unsafe
                driving conditions. Due to factors like limited experience,
                ongoing cognitive development, overconfidence, and external
                distractions, you may struggle to accurately evaluate risks on
                the road.
              </p>
              <p className="courseText">
                Limited driving experience means you may not have encountered
                various road and weather conditions, making it challenging for
                you to identify potential dangers. Additionally, the cognitive
                processes involved in risk perception continue to develop during
                adolescence, influencing your ability to assess risks
                accurately.
              </p>
              <h5 className="sectionSubheading">
                Lack of Maturity on Roads and Highways
              </h5>
              <p className="courseText">
                Immaturity can manifest in various behaviors and decision-making
                processes that contribute to unsafe driving practices.
              </p>
              <p className="courseText">
                Teenagers' developing emotional regulation skills may lead to
                impulsive actions, road rage, or distracted driving due to
                emotional distractions while behind the wheel. Additionally,
                peer influence can exert pressure on young drivers to conform to
                certain behaviors, disregarding traffic rules, or engaging in
                risky driving practices to impress or fit in with their peers.
              </p>
              <p className="courseText">
                The lack of maturity on roads and highways can result in
                aggressive driving, risky maneuvers, and distracted driving,
                increasing the likelihood of accidents.
              </p>
              <h5 className="sectionSubheading">
                C. Use of Higher Speeds, Tailgating, Headlights
              </h5>
              <p className="courseText">
                Seeking excitement, some young drivers may be more prone to
                driving at higher speeds, surpassing speed limits, especially on
                open roads or highways. However, driving at higher speeds
                reduces their ability to react to unexpected situations and
                increases stopping distances, escalating the severity of
                potential accidents.
              </p>
              <p className="courseText">
                Following the vehicle in front too closely is a concerning
                behavior among young drivers. Stemming from impatience or a
                belief that it will prompt other drivers to move out of their
                way, tailgating diminishes the driver's capacity to respond to
                sudden stops by the leading vehicle and can escalate minor
                incidents into more severe collisions.
              </p>
              <p className="courseText">
                Moreover, misuse of headlights, either by failing to use them
                when required (e.g., during low light conditions) or by
                inappropriately using excessively bright high beams is improper.
                Improper headlight use impairs the visibility of other drivers,
                leading to glare and distractions, which can heighten the risk
                of accidents.
              </p>
              <h5 className="sectionSubheading">D. Male vs Female</h5>"
              <p className="courseText">
                While some observed differences may exist, individual driving
                behavior varies significantly based on factors like age,
                experience, culture, and personality.
              </p>
              <p className="courseText">
                Research has suggested that male drivers may have a higher
                willingness to take risks, leading to behaviors like speeding
                and aggressive driving. Young male drivers, especially teenagers
                and those in their early twenties, historically have higher
                crash rates due to their risk-taking tendencies.
              </p>
              <p className="courseText">
                On the other hand, some studies have indicated that female
                drivers may be more prone to distracted driving behaviors, such
                as talking on the phone.
              </p>
              <h5 className="sectionSubheading">
                E. “No One Got Hurt” Attitude
              </h5>
              <p className="courseText">
                This attitude refers to the belief that engaging in risky
                driving behaviors or violating traffic rules is acceptable as
                long as no immediate harm or accident occurs.
              </p>
              <p className="courseText">
                The lack of understanding of consequences, short-term thinking,
                peer influence, and overconfidence contribute to this attitude.
                Drivers may underestimate the risks associated with their
                actions, believing that if they don't cause an accident
                immediately, their behavior is not harmful.
              </p>
              <h5 className="sectionSubheading">
                F. Poor Attitude Toward Life Itself
              </h5>
              <p className="courseText">
                A poor attitude toward life may manifest in various ways while
                driving and can impact road safety.
              </p>
              <p className="courseText">
                Factors contributing to a poor attitude toward life include a
                general disregard for consequences, a lack of empathy, a
                negative outlook, and impulsivity. Drivers with this mindset may
                be more likely to engage in risk-taking behaviors, exhibit
                distracted driving, and make reckless decisions on the road.
              </p>
              <h5 className="sectionSubheading">G. How to Change Attitude.</h5>
              <p className="courseText">
                Changing attitudes, including those related to driving, is a
                valuable journey that requires conscious effort and commitment.
                Begin by being mindful of your current behaviors on the road and
                recognize any negative or risky tendencies. Identify specific
                triggers that lead to undesirable attitudes and proactively
                address them. Stay informed about road safety, traffic laws, and
                the consequences of risky behaviors to reinforce the need for
                positive changes. Set achievable goals and celebrate small
                victories in displaying responsible driving attitudes. Cultivate
                empathy for other road users and aim to treat them with respect
                and consideration. Practice mindfulness while driving to focus
                on the road and your emotions.
              </p>
              <h5 className="sectionSubheading">Pedestrians and Bicycles</h5>
              <p className="courseText">
                You have to respect your rights and put your well-being first on
                the road. You should yield the right of way at crosswalks, pass
                cyclists carefully, use turn signals, and watch out for blind
                spots. You need to slow down in shared areas, pay attention to
                crossing pedestrians, and avoid distractions. These actions are
                essential to avoid accidents with vulnerable road users. You can
                also show patience, courtesy, and anticipation of pedestrian and
                cyclist actions. This can make the traffic environment safer and
                more harmonious for you and everyone else.
              </p>
            </div>
            <ToQuiz />
            {/* course contents ends here */}
          </div>
        </div>
      )}
    </div>
  );
}
