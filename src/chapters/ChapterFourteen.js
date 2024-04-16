import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Fourteen from "../quizes/Fourteen";

const sections = {
  sectionOne: "Inexperienced vs Immaturity",
};

export default function ChapterEight() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuiz = () => {
    !showQuiz ? setShowQuiz(true) : setShowQuiz(false);
  };
  const ToQuiz = () => {
    return (
      <NavButtons classname={"nextButton toQuiz"} onclick={handleQuiz}>
        Unit Fourteen Complete, Take the Quiz
      </NavButtons>
    );
  };

  return (
    <div className="courseBody" id="fourteen">
      <h3 className="bold unitHeading">Unit Fourteen: Driving Inexperienced</h3>
      {showQuiz ? (
        <Fourteen />
      ) : (
        <div className="courseContentContainer">
          <div className="courseOutline">
            <h4 className="sectionSubheading outlineName">Outline</h4>
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
                Section 14.1. Inexperienced Vs Immaturity
              </h4>
              <h5 className="sectionSubheading">Lack of Skill</h5>
              <p className="courseText">
                The skill level of new or novice drivers may be low due to their
                driving inexperience. This means that they have not encountered
                various driving situations and challenges that can enhance their
                driving abilities. Vehicle control, which includes smooth
                braking, accelerating, and steering, may pose a challenge for
                inexperienced drivers. These basic driving maneuvers require
                time and practice to master. Another aspect that may be
                difficult for novice drivers is maneuvering.
              </p>
              <p className="courseText">
                This involves performing more complex tasks, such as parking,
                lane changes, and navigating intersections. These maneuvers
                demand coordination and spatial awareness, which develop with
                experience. Moreover, defensive driving, which entails
                anticipating and responding to potential hazards on the road,
                may be beyond the capacity of inexperienced drivers. They may
                not have the ability to predict the actions of other drivers and
                react appropriately to prevent accidents.
              </p>
              <p className="courseText">
                Decision-making is a vital skill while driving, but new drivers
                may encounter difficulties in making prompt and effective
                decisions. Their lack of experience may impair their ability to
                evaluate risks and select the best course of action in various
                driving scenarios. Additionally, understanding traffic flow and
                how to merge into traffic smoothly is a crucial skill that
                inexperienced drivers may initially struggle with. Lastly,
                handling adverse weather conditions, such as rain or snow, may
                be especially challenging for novice drivers as they are not
                familiar with how their vehicles respond under such
                circumstances.
              </p>
              <h5 className="sectionSubheading">Lack of Attention</h5>
              <p className="courseText">
                Another significant consequence of driving inexperience is the
                lack of attention among new drivers. Inexperienced drivers often
                struggle to maintain focused attention on the road and may
                become easily distracted by various factors.
              </p>
              <p className="courseText">
                Driving requires the ability to multitask, such as
                simultaneously observing traffic, checking mirrors, signaling,
                and controlling the vehicle. Inexperienced drivers may find it
                challenging to handle multiple tasks simultaneously, leading to
                reduced attention on critical driving elements. Additionally,
                distractions inside and outside the vehicle can divert their
                attention away from driving. Activities such as using mobile
                phones, adjusting the radio, eating, or interacting with
                passengers can be particularly distracting for new drivers.
              </p>
              <p className="courseText">
                Furthermore, new drivers may struggle to maintain situational
                awareness on the road, which means they may fail to notice
                potential hazards, changes in traffic patterns, or signs of
                dangerous driving behaviors from other road users. Learning to
                drive requires significant cognitive effort, and inexperienced
                drivers may become mentally fatigued more quickly, affecting
                their ability to maintain focused attention.
              </p>
              <h5 className="sectionSubheading">
                Maturity Behind the Wheel Comes With Age
              </h5>
              <p className="courseText">
                Maturity behind the wheel often develops with age and
                experience, as people gain more time on the road. With increased
                driving experience and exposure to various situations, drivers
                tend to develop better judgment, decision-making skills, and the
                ability to handle different driving challenges. As they
                encounter different road conditions, weather scenarios, traffic
                patterns, and interactions with other drivers, they learn from
                these experiences and become more adept at making informed
                decisions.
              </p>
              <p className="courseText">
                Driving experience exposes individuals to a variety of
                challenging driving scenarios, including heavy traffic, highway
                driving, adverse weather conditions, and unexpected events.
                Through this exposure, drivers build confidence and
                adaptability, which enables them to handle various situations
                with more ease and composure. They become better equipped to
                assess risks, anticipate potential hazards, and choose
                appropriate actions while driving.
              </p>
              <p className="courseText">
                With increasing age and experience, drivers often exhibit
                reduced risk-taking behavior. Younger, less experienced drivers
                may be more prone to engage in risky driving behaviors, such as
                speeding or tailgating. As drivers mature, they tend to become
                more cautious and less likely to engage in such risky behaviors,
                prioritizing safety on the road.
              </p>
              <p className="courseText">
                Emotional control and patience also improve with the driving
                experience. More seasoned drivers develop better emotional
                maturity, enabling them to handle stressful situations on the
                road with greater composure and level-headedness. This emotional
                growth contributes to safer driving practices and the ability to
                respond calmly to challenging driving scenarios.
              </p>
              <h5 className="sectionSubheading">Work on Improving Skills</h5>
              <p className="courseText">
                Continuous improvement and refinement of driving skills are
                essential for all drivers, regardless of their level of
                experience. One effective way to boost driving proficiency is by
                participating in refresher courses or defensive driving
                programs. These courses offer valuable insights into safe
                driving practices and help drivers stay up-to-date with the
                latest traffic rules and regulations. Learning from experienced
                instructors and reviewing driving fundamentals can reinforce
                good habits and address any areas of weakness.
              </p>
              <p className="courseText">
                Defensive driving fosters a proactive and cautious approach to
                minimize risks and protect all road users. Practicing in various
                environments, including different weather conditions, heavy
                traffic, rural roads, and highways, equips individuals to handle
                an array of challenges. Each experience adds to the driver's
                knowledge base, empowering them to make better decisions on the
                road.
              </p>
              <h5 className="sectionSubheading">Improper Braking</h5>
              <p className="courseText">
                Common problems associated with improper braking include hard
                braking, late braking, and braking while turning. Hard braking
                is when excessive force is applied on the brake pedal, it can
                lead to skidding and rear-end collisions, especially on slippery
                surfaces. Late braking reduces reaction time and increases the
                likelihood of colliding with the vehicle ahead. Braking while
                turning can cause loss of control, particularly on slippery
                roads.
              </p>
              <p className="courseText">
                When braking, smoothly apply pressure to the brake pedal.
                Anticipate stops and maintain a safe following distance to
                prevent sudden stops and allow ample time to slow down.
              </p>
              <h5 className="sectionSubheading">
                Overreacting and Over-Steering
              </h5>
              <p className="courseText">
                Overreacting and over-steering often stem from a lack of
                experience, panic, or improper responses to unexpected driving
                situations. Drivers should practice maintaining a calm and
                composed demeanor while driving, avoiding overreacting to
                situations that do not warrant excessive responses. Staying
                focused on the road and anticipating potential hazards helps
                drivers make controlled and deliberate actions.
              </p>
              <h5 className="sectionSubheading">Handling Skids</h5>
              <p className="courseText">
                Skids occur when tires lose traction with the road surface,
                causing the vehicle to slide in a direction different from the
                intended path. Two main types of skids are front-wheel skids and
                rear-wheel skids. For front-wheel skids, drivers should ease off
                the accelerator, steer gently in the direction of the skid, and
                gradually straighten the steering wheel as traction is regained.
                In rear-wheel skids, drivers should steer gently in the opposite
                direction of the skid to bring the front of the vehicle back in
                line.
              </p>
              <h5 className="sectionSubheading">In Car Distractions</h5>
              <p className="courseText">
                Apart from cell phone-related distractions, other factors can
                divert a driver's attention from the road. Fiddling with CDs or
                music playlists, smoking, engaging with passengers, grooming
                activities, and handling various objects are common in-car
                distractions that can lead to visual, cognitive, and physical
                impairments while driving.
              </p>
              <h5 className="sectionSubheading">
                Adjusting Driving to Fit Weather and Road Condition
              </h5>
              <p className="courseText">
                Different weather conditions, such as fog, rain, and snow, can
                create challenging driving situations that require drivers to
                adapt their behavior and techniques.
              </p>
              <p className="courseText">
                In foggy conditions, reducing speed, using low beams, increasing
                following distance, and listening carefully for other vehicles
                are essential adjustments to improve safety. Fog reduces
                visibility significantly, and driving at high speeds can be
                dangerous.
              </p>
              <p className="courseText">
                In rainy conditions, reducing speed to avoid hydroplaning,
                increasing following distance, using headlights, and being
                cautious of puddles are essential adjustments. Rain can make
                roads slippery, reducing tire traction and visibility.
              </p>
              <p className="courseText">
                In snowy conditions, driving slowly, increasing following
                distance, accelerating and decelerating gradually, clearing
                windows and mirrors, and using winter tires are vital
                adjustments. Snow-covered roads can be challenging for traction
                and vehicle control.
              </p>
              <h5 className="sectionSubheading">
                Predicting Other Drivers' Reaction
              </h5>
              <p className="courseText">
                Three techniques that aid in predicting other drivers' actions
                are the 3-second rule, scanning the road, and effectively using
                mirrors.
              </p>
              <p className="courseText">
                The 3-second rule helps maintain a safe following distance,
                allowing you enough time to react if the vehicle ahead suddenly
                stops or encounters a hazard. It prevents rear-end collisions
                and helps observe the behavior of the driver in front
                effectively.
              </p>
              <p className="courseText">
                Scanning the road involves continuously observing the traffic
                environment around your vehicle, including the road ahead,
                rearview mirror, side mirrors, and blind spots. It helps you
                predict other drivers' actions and identify potential risks in
                advance, allowing you to react promptly to sudden changes and
                make informed decisions for safety.
              </p>
              <p className="courseText">
                Using mirrors is crucial for staying aware of vehicles around
                you. Regularly checking your rearview and side mirrors helps
                monitor traffic behind you, identify approaching vehicles, and
                predict potential lane changes or merging actions of other
                drivers. It also assists in making safe lane changes and
                decisions while maintaining awareness of your surroundings.
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
