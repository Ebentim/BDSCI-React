import ReactPlayer from "react-player/lazy";
import { NavButtons } from "../Assets/next";
import { useState } from "react";
import One from "../quizes/One";
import "../styles/general.css";
import image66 from "../Assets/images/image66.png";
import image56 from "../Assets/images/image56.png";
import image57 from "../Assets/images/image57.png";
import image1 from "../Assets/images/image1.jpg";
import image24 from "../Assets/images/image24.jpg";
import image38 from "../Assets/images/image38.png";
const sections = {
  sectionOne: "License to Drive A Privilege",
  sectionTwo: "Operating a Motor Vehicle is a Serious Responsibility",
  sectionThree: "Obey the Literal Interpretation of Everyday Laws",
  sectionFour: "Common Courtesy is a Key to Safety",
  sectionFive: "The Importance of Driver Education",
  sectionSix: "History of the Automobile",
  quiz: "Section One Quiz",
};

export default function ChapterOne() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuiz = () => {
    !showQuiz ? setShowQuiz(true) : setShowQuiz(false);
  };
  const ToQuiz = () => {
    return (
      <NavButtons classname={"nextButton"} onclick={handleQuiz}>
        Take Unit Quiz
      </NavButtons>
    );
  };
  return (
    <>
      <div className="courseBody" id="one">
        <h3 className=" bold unitHeading">
          Unit One: Driving is Your Responsibility
        </h3>
        {!showQuiz ? (
          <div className="courseContentContainer">
            <div className="courseOutline">
              <ul className="sectionList">
                {Object.entries(sections).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <a href={`#${key}`}>{value}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="CourseContents">
                <h4 className="sectionHeading" id="sectionOne">
                  Section 1.1: License to Drive A Privilege
                </h4>
                <p className="sectionQuote">
                  With great freedom comes great responsibility. Driving is not
                  just a privilege; it's a responsibility we owe to ourselves
                  and others.
                </p>
                <h5 className="sectionSubheading">
                  A. What your Driver License Means to You
                </h5>
                <p className="sectionQuote">
                  A driver's license opens the door of new opportunities and
                  freedoms, but it also comes with the weight of responsibility.
                </p>
                <p className="courseText">
                  A driver's license holds more significance than a mere card;
                  it represents freedom and the ability to rely on oneself. It
                  empowers you to venture out and travel autonomously. Beyond
                  its implications, a driver's license can broaden future
                  employment options, opening access to jobs and entrepreneurial
                  endeavors. Furthermore, it cultivates responsibility and
                  self-assurance, evidence of your capacity to manage a vehicle
                  and nurturing a heightened sense of independence.
                </p>
                <ReactPlayer
                  url="https://www.youtube.com/embed/NLWlZdaEoMY"
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 0,
                      },
                    },
                  }}
                  controls={0}
                  className="courseVideo"
                />
                <h5 className="sectionSubheading">
                  B. What Your Driver License Means to Others
                </h5>
                <p className="sectionQuote">
                  Your driver's license is not just about you; it represents
                  your commitment to ensuring the safety and welfare of others
                  on the road.
                </p>
                <p className="courseText">
                  A driver's license represents not only your driving ability
                  but also your commitment to road safety. Responsible driving,
                  characterized by avoiding risky behaviors like impaired
                  driving and sudden maneuvers, is crucial for the well-being of
                  everyone on the road, including pedestrians and cyclists. By
                  adhering to road rules, showing courtesy, and maintaining a
                  safe distance, you contribute to a safer road environment.
                  Others trust that you will drive lawfully, courteously, and
                  without impairment. For minors, parents or guardians bear
                  financial responsibility, emphasizing the importance of safe
                  driving. Passengers entrust their safety to you, assuming that
                  your possession of a driver's license signifies your
                  commitment to their well-being.
                </p>
                <h4 className="sectionHeading" id="sectionTwo">
                  Section 1.2. Operating a Motor Vehicle is a Serious
                  Responsibility
                </h4>
                <img
                  src={image66}
                  alt="driving a car is a significant responsibility"
                  className="courseImage"
                />
                <p className="sectionQuote">
                  A motor vehicle, if mishandled, can become as dangerous as any
                  weapon. It is crucial to recognize the power it holds and
                  exercise responsible control.
                </p>
                <p className="courseText">
                  When not operated responsibly, the potential dangers of a
                  motor vehicle are numerous and can have severe consequences.
                  In this Section, we will explore three critical aspects of
                  responsible vehicle operation: understanding that a motor
                  vehicle is a weapon, the inherent dangers of improper
                  operation, and the significance of parking responsibly to
                  prevent runaways.
                </p>
                <h5 className="sectionSubheading">
                  A. A Motor Vehicle is a Weapon
                </h5>
                <img
                  src={image56}
                  alt="NHTSA estimates that 42,795 people died in motor traffic clashes in 2022"
                  className="courseImage"
                />
                <p className="courseText">
                  When we think of weapons, firearms often come to mind.
                  However, it is essential to acknowledge that a motor vehicle
                  has the potential to be just as dangerous when not operated
                  responsibly. A motor vehicle, weighing thousands of pounds and
                  capable of high speeds, possesses the power to cause
                  significant harm if mishandled.
                </p>
                <p className="courseText">
                  <span className="bold">Consider this:</span> A firearm in the
                  hands of an untrained or reckless individual can lead to
                  accidental injuries or even fatalities. Similarly, a motor
                  vehicle operated irresponsibly can have devastating
                  consequences. The acceleration, momentum, and force behind a
                  vehicle make it capable of causing severe damage and loss of
                  life. Responsible vehicle operation involves recognizing this
                  potential and approaching driving with a mindset of safety,
                  respect, and accountability.
                </p>
                <h5 className="sectionSubheading">
                  B. As Dangerous as A Loaded Gun if Not Properly Operated
                </h5>
                <p className="courseText">
                  Imagine a loaded gun in the hands of someone who lacks proper
                  knowledge, training, or respect for its potential danger. The
                  same analogy applies to operating a motor vehicle. If not
                  handled with care, a car can become just as lethal as a loaded
                  gun.
                </p>
                <h6 className="sectionSubheading">
                  The Range of Reckless Driving
                </h6>
                <p className="courseText">
                  Improper operation includes reckless driving, excessive
                  speeding, running red lights, or engaging in distracted
                  driving. Each of these actions increases the risk of
                  accidents, injuries, and fatalities.
                </p>
                <h6 className="sectionSubheading">
                  Alarming Fatalities Statistics
                </h6>
                <p className="courseText">
                  The National Highway Traffic Safety Administration (NHTSA)
                  estimated that 42,795 people died in motor vehicle traffic
                  crashes in 2022. This represents a marginal decrease of about
                  0.3 % as compared to 42,939 fatalities reported to have
                  occurred in 2021.
                </p>
                <h6 className="sectionSubheading">
                  Shifting Trend of Fatalities
                </h6>
                <p className="courseText">
                  The fourth quarter of 2022 represents the third straight
                  quarterly decline in fatalities after 7 consecutive quarters
                  of year-to-year increases in fatalities, beginning with the
                  third quarter of 2020. Preliminary data reported by the
                  Federal Highway Administration (FHWA) show that vehicle miles
                  traveled (VMT) in 2022 increased by about 29.3 billion miles,
                  or about a 0.9 % increase. The fatality rate for 2022
                  decreased to 1.35 fatalities per 100 million VMT, down from
                  the reported rate of 1.37 fatalities per 100 million VMT in
                  2021.
                </p>
                <p className="courseText">
                  To ensure safe and responsible driving, you must commit to
                  adopting defensive driving techniques. This includes
                  maintaining a safe following distance, observing speed limits,
                  using turn signals, and being vigilant for potential hazards
                  on the road. By doing so, drivers reduce the likelihood of
                  accidents and protect themselves and others from the potential
                  dangers of a motor vehicle.
                </p>
                <h5 className="sectionSubheading">C. Parking Responsibly</h5>
                <p className="courseText">
                  Parking is an essential aspect of driver responsibility.
                  Improperly parked vehicles can lead to runaways, where
                  unsecured vehicles roll uncontrollably and cause accidents,
                  property damage, or injuries. <br />
                  To avoid such incidents, it is important to park vehicles
                  properly and take necessary precautions. This includes
                  engaging the parking brake, turning the wheels appropriately
                  when parked on a slope, and ensuring that the vehicle is in
                  the correct gear (park or neutral). By following these simple
                  yet vital steps, you can prevent potential runaways and
                  minimize risks to yourself and others.
                </p>
                <iframe
                  title="parking Video"
                  src="https://drive.google.com/file/d/1peXhbaZh15VuklXWjCTgrxbaiYkUO6mX/preview"
                  allow="autoplay"
                  className="courseVideo"
                ></iframe>
                <h4 className="sectionHeading" id="sectionThree">
                  Section 1.3: Obey the Literal Interpretation of Everyday Laws
                </h4>
                <p className="courseText">
                  Respecting the rules of the road is more than just compliance;
                  it's a commitment to safeguarding lives and fostering a
                  culture of responsible driving. Every law we follow paves the
                  way for a safer journey on the open road.
                </p>
                <p className="sectionQuote">
                  In traffic, the smallest actions have significant
                  consequences. Obeying the law means protecting yourself and
                  others
                </p>
                <h5 className="sectionSubheading">
                  A. Why Completely stop at stop signs?
                </h5>
                <img
                  src={image57}
                  alt="traffic signs"
                  className="courseImage"
                />
                <p className="courseText">
                  Stop signs play a crucial role in regulating traffic flow and
                  ensuring the safety of all road users. It is essential to
                  understand the purpose of stop signs and the importance of
                  coming to a complete stop, as well as the potential risks
                  associated with rolling stops or failure to stop.
                </p>
                <h5 className="sectionSubheading">
                  Purpose of Stop Signs and the Importance of Coming to a
                  Complete Stop
                </h5>
                <p className="courseText">
                  Stop signs are strategically placed at intersections or other
                  locations where it is necessary to control the right-of-way.
                  Their primary purpose is to ensure safe and orderly traffic
                  movement by requiring drivers to come to a complete stop
                  before proceeding. Stop signs are there for a reason. Coming
                  to a complete stop ensures enough time to assess the situation
                  and proceed safely. Coming to a complete stop at a stop sign
                  serves multiple crucial purposes. It allows you to thoroughly
                  assess the current traffic situation, allowing you to identify
                  potential hazards and determine the appropriate right-of-way.
                  This assessment is essential for safe decision-making at
                  intersections. Additionally, stop signs indicate the
                  requirement to yield the right-of-way. This means that you
                  should give priority to vehicles or pedestrians who have
                  already entered the intersection or possess the legal
                  entitlement to proceed. Moreover, the act of stopping at a
                  stop sign significantly contributes to enhanced visibility. By
                  coming to a halt, your vehicle becomes more visible to others
                  on the road, such as fellow drivers, pedestrians, and
                  cyclists.{" "}
                </p>
                <h6 className="sectionSubheading">
                  Potential Risks Associated with Rolling Stops or Failure to
                  Stop
                </h6>
                <p className="courseText">
                  Rolling stops occur when drivers fail to come to a complete
                  stop at a stop sign. Instead, they slow down or briefly pause
                  without fully halting. Rolling stops pose significant risks
                  and can lead to:
                </p>
                <ol type="a" className="orderedList">
                  <li className="courseText">
                    <span className="bold">Collisions: </span>Failing to stop
                    completely at a stop sign increases the likelihood of
                    collisions with other vehicles, pedestrians, or cyclists who
                    have the right-of-way.
                  </li>
                  <li className="courseText">
                    {" "}
                    <span className="bold">Reduced Reaction Time: </span>
                    Rolling stops limit the driver's ability to react promptly
                    to unexpected situations, such as oncoming traffic or
                    pedestrians crossing the intersection.
                  </li>
                  <li className="courseText">
                    <span className="bold">Legal Consequences: </span>Rolling
                    stops violate traffic laws and can result in traffic
                    citations, fines, and potential increases in insurance
                    premiums. Repeat offenders may face more severe penalties.
                  </li>
                  <li className="courseText">
                    <span className="bold">Safety Culture:</span> Engaging in
                    rolling stops or failing to stop completely undermines the
                    road safety culture and contributes to a disregard for
                    traffic laws.
                  </li>
                </ol>
                <h6 className="sectionSubheading"> Other Traffic Signs: </h6>
                <ol type="a" className="orderedList">
                  <li className="courseText">
                    <span className="bold">Right-of-Way:</span> Understanding
                    right-of-way rules is vital for safe and efficient traffic
                    flow. Drivers must yield the right-of-way to pedestrians,
                    cyclists, or vehicles that have the lawful right to proceed.
                  </li>
                  <li className="courseText">
                    <span className="bold">Speed Limits:</span> Speed limits are
                    established to ensure safe driving conditions. Adhering to
                    speed limits helps maintain control of the vehicle, reduces
                    the risk of accidents, and allows sufficient time to react
                    to changing conditions.
                  </li>
                  <li className="courseText">
                    <span className="bold">Signaling and Turning:</span>{" "}
                    Signaling indicates the driver's intention to change lanes,
                    make a turn or stop. Proper use of turn signals alerts other
                    road users, allowing them to anticipate the driver's actions
                    and navigate safely.
                  </li>
                </ol>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=cYdZZdtdsMw"
                  className="courseVideo"
                  controls
                />
                <h5 className="sectionSubheading">B. What Does Yield Mean?</h5>
                <p className="coursetext">
                  Yielding is more than just a courtesy; it's a crucial aspect
                  of responsible driving that promotes road order and safety.
                </p>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=xmNYLKYcdrw"
                  className="courseVideo"
                  controls
                />
                <h5 className="sectionSubheading">Significance of Yielding</h5>
                <ol type="a" className="orderedList">
                  <li className="courseText">
                    <span className="bold">Prevent Collisions:</span> Yielding
                    allows us to avoid conflicts with other vehicles or
                    pedestrians. By giving the right-of-way when required, we
                    reduce the risk of collisions and potential injuries.
                  </li>
                  <li className="courseText">
                    <span className="bold">Promote Safety:</span> Yielding
                    promotes safety by allowing all road users to navigate
                    intersections and merge points without disruption. It allows
                    everyone to make their intended movements with reduced risks
                    of accidents.
                  </li>
                  <li className="courseText">
                    <span className="bold">Maintain Traffic Flow:</span> Proper
                    yielding ensures the efficient flow of traffic. When drivers
                    yield when necessary, it minimizes congestion and allows for
                    a more organized and smoother driving experience for
                    everyone on the road.
                  </li>
                </ol>
                <p className="courseText">
                  Yielding is not just a legal requirement; it's a fundamental
                  principle of responsible driving.
                </p>
                <h4 className="sectionHeading" id="sectionFour">
                  Section 1.4 Common Courtesy is a Key to Safety
                </h4>
                <p className="courseText">
                  Embarking on the road is a shared adventure where safety is
                  paramount. In this journey, a small yet impactful tool,
                  “common courtesy”, becomes the linchpin for safeguarding all
                  travelers. Comparable to saying "please" and "thank you,"
                  practicing courtesy on the road, like yielding the right of
                  way or using turn signals, ensures a harmonious flow of
                  movement.
                </p>
                <h5 className="sectionSubheading">
                  A. The Road is Shared by All Drivers
                </h5>
                <p className="sectionQuote">
                  The roadway is a shared space where we all coexist. Practicing
                  common courtesy ensures a harmonious and safe driving
                  experience for everyone.
                </p>
                <p className="courseText">
                  The road is a shared space for pedestrians, cyclists, drivers,
                  and individuals with disabilities. Respecting pedestrians,
                  giving space to cyclists, and providing accessible
                  infrastructure create a safer, inclusive environment.
                </p>
                <h6 className="sectionSubheading">Not all are easily seen</h6>
                <div className="courseImageContainer">
                  <img src={image1} alt="children crossing the street" />
                  <img src={image24} alt="a biker in the side mirror" />
                </div>
                <p className="courseText">
                  While navigating the roads, you must recognize that not
                  everything is immediately visible. This is especially true for
                  vulnerable road users like children and bikers. These
                  individuals can easily find themselves in a driver's blind
                  spot—an area where they remain unseen, putting them at risk.
                  You must be aware of these blind spots, particularly when
                  making turns or changing lanes. <br /> Being considerate and
                  respectful towards others on the road offers numerous
                  benefits.
                </p>
                <p className="courseText">
                  It enhances safety for everyone involved. By yielding to
                  pedestrians at crosswalks, giving them the right of way, and
                  maintaining a safe distance when passing cyclists, drivers can
                  significantly reduce the likelihood of accidents and ensure
                  the well-being of all road users.
                </p>
                <p className="courseText">
                  Adopting courteous driving behaviors reduces stress and
                  minimizes conflicts on the road. Staying calm and refraining
                  from honking or tailgating, even in congested traffic
                  situations, creates a more pleasant and positive driving
                  atmosphere.
                </p>
                <p className="courseText">
                  Considerate driving contributes to efficient traffic flow.
                  Using turn signals to indicate lane changes or intentions and
                  allowing vehicles to merge smoothly when entering the freeway
                  prevent unnecessary congestion, improving overall traffic
                  efficiency.
                </p>
                <p className="courseText">
                  Engaging in considerate driving practices sets an example for
                  others, particularly new or inexperienced drivers. By
                  following traffic rules and regulations, avoiding
                  distractions, and maintaining proper lane discipline,
                  experienced drivers can influence others to adopt similar
                  responsible driving practices.
                </p>
                <p className="courseText">
                  Practicing courteous driving behaviors brings personal
                  satisfaction and fulfillment. Allowing others to go ahead in a
                  congested traffic situation, even if it means waiting a little
                  longer, can provide a sense of being a responsible member of
                  the driving community.
                </p>
                <h5 className="sectionSubheading">
                  B. Courtesy Makes Order Out of Chaos
                </h5>
                <p className="sectionQuote">
                  n the traffic chaos, courtesy acts as the glue that holds
                  everything together, transforming potential chaos into a
                  well-organized and safe environment.
                </p>
                <p className="courseText">
                  Practicing courtesy and following etiquette promotes a
                  positive driving environment and contributes to a more
                  efficient traffic flow. When drivers exhibit courteous
                  behavior on the road, it helps to reduce conflicts, improve
                  communication, and enhance overall traffic coordination.
                </p>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=oEiYmMAkioU"
                  controls
                  className="courseVideo"
                />
                <h5 className="sectionSubheading">
                  C. Common COurtesy is a key to Safety
                </h5>
                <p className="sectionQuote">
                  Courtesy is the language of the road; by treating others with
                  respect, we can foster a culture of safety and harmony on our
                  roads
                </p>
                <p className="courseText">
                  Treating other drivers with respect and following the Golden
                  Rule of driving is essential for fostering a safer and more
                  harmonious driving culture. By practicing empathy and
                  patience, we can create a positive impact on our own driving
                  experiences and those of others on the road.
                </p>
                <h6 className="sectionSubheading">
                  The Golden Rule of Driving
                </h6>
                <p className="sectionQuote">
                  Extend to fellow drivers the respect and consideration you
                  desire for yourself. Simple acts of kindness can greatly
                  contribute to cultivating a safer driving culture.
                </p>
                <p className="courseText">
                  The Golden Rule, "Treat others as you would like to be
                  treated," applies to driving as well. It means extending the
                  same courtesy and consideration to fellow drivers that we
                  would expect from them. This principle forms the foundation of
                  respectful and responsible driving behavior.
                </p>
                <h6 className="sectionSubheading">Importance of Empathy</h6>
                <p className="sectionQuote">
                  Empathy is the fuel that drives understanding and compassion
                  on the road. Put yourself in others' shoes, and let kindness
                  and consideration guide your every turn.
                </p>
                <p className="courseText">
                  Empathy is a fundamental aspect of human interaction, and it
                  plays a crucial role in promoting a safe and harmonious
                  driving environment. It involves a deeper understanding of the
                  experiences, emotions, and needs of other drivers. When we
                  apply empathy on the road, we are essentially putting
                  ourselves in the shoes of other drivers and attempting to
                  understand their perspectives and challenges. It goes beyond
                  simply following rules and regulations.
                </p>
                <p className="courseText">
                  Empathy on the road starts with understanding the diverse
                  perspectives of other drivers. Each driver brings their unique
                  experiences, concerns, and objectives. By recognizing this, we
                  become more patient and tolerant when encountering different
                  driving behaviors. Furthermore, empathy involves acknowledging
                  the wide range of emotions that driving can evoke, such as
                  frustration, stress, or anxiety. An empathetic driver remains
                  calm and considerate, understanding how emotions can influence
                  others' behaviors on the road. Prioritizing safety and being
                  accommodating to the varied needs of drivers create a
                  supportive and cooperative driving atmosphere, fostering
                  fairness, respect, and a positive driving experience for all.
                </p>
                <h6 className="sectionSubheading">Cultivate Patience</h6>
                <p className="courseText">
                  To be patient on the road means to remain calm in challenging
                  situations, such as heavy traffic or slow-moving vehicles.
                  Patient drivers are less likely to engage in aggressive
                  behaviors or make risky maneuvers, reducing the chances of
                  accidents and road rage incidents.
                </p>
                <h6 className="sectionSubheading">Respect the Right-of-Way</h6>
                <p className="courseText">
                  Respecting the right-of-way is a fundamental aspect of
                  treating other drivers with respect. It involves understanding
                  and adhering to the rules and regulations that determine who
                  has the priority to proceed in different traffic situations.
                </p>
                <p className="courseText">
                  Yielding when necessary means giving up your right to proceed
                  to allow another driver, pedestrian, or cyclist to do so. This
                  can occur in various scenarios such as intersections,
                  crosswalks, roundabouts, or when merging with traffic.
                </p>
                <p className="courseText">
                  By yielding when required, you avoid conflicts and potential
                  collisions that can arise from competing for the right-of-way.
                  It helps maintain a harmonious traffic flow, reducing
                  congestion and frustration for everyone on the road.
                  Respecting the right-of-way also promotes predictability, as
                  drivers can anticipate the actions of others and make informed
                  decisions accordingly.
                </p>
                <p className="courseText">
                  Allowing others to merge or change lanes is another aspect of
                  respecting the right of way. When drivers signal their
                  intention to join or change lanes, it is vital to create a
                  safe gap and accommodate their movement. It allows for
                  smoother traffic transitions and reduces the risk of accidents
                  or disruptions
                </p>
                <h6 className="sectionSubheading">Respectful Interactions</h6>
                <p className="sectionQuote">
                  Respectful interactions between drivers are crucial for
                  fostering a positive driving environment.
                </p>
                <p className="courseText">
                  Consistently using turn signals is an effective way for
                  drivers to communicate their intentions, promoting a
                  predictable traffic flow and minimizing sudden lane changes.
                  Allowing others to merge seamlessly demonstrates fairness and
                  cooperation, preventing congestion and aggressive behaviors.
                  Yielding to pedestrians not only upholds legal requirements
                  but also prioritizes safety and encourages sustainable
                  transportation choices.
                </p>
                <p className="courseText">
                  These courteous actions have a positive effect, fostering a
                  culture of mutual respect among drivers. When you experience
                  considerate behavior, you are more inclined to reciprocate it,
                  leading to safer roads and reduced conflicts.
                </p>
                <h4 className="sectionHeading" id="sectionFive">
                  Section 1.5. The importance of Driver Education
                </h4>
                <p className="sectionQuote">
                  Driver education is the compass that guides us toward safer
                  roads, empowering us with the knowledge and skills to navigate
                  any challenge.
                </p>
                <h6 className="sectionSubheading">
                  Enhances Safety of Drivers and Pedestrians
                </h6>
                <p className="sectionQuote">
                  Driver education equips individuals with the knowledge,
                  skills, and attitudes necessary for safe navigation on the
                  roads, ensuring their safety as well as the safety of others
                </p>
                <p className="courseText">
                  Driver education programs play an important role in equipping
                  individuals with the knowledge, skills, and attitudes
                  necessary for safe and responsible driving. These programs
                  cover a wide range of topics, including traffic laws, road
                  signs, defensive driving techniques, practical training, and
                  cultivating positive attitudes.
                </p>
                <p className="courseText">
                  Understanding traffic laws is a key focus of driver education.
                  Participants gain a thorough understanding of the legal
                  framework governing traffic, which encompasses speed limits,
                  right-of-way rules, and the meanings of various traffic signs.
                  This knowledge enables drivers to make informed decisions,
                  reducing the likelihood of accidents caused by non-compliance.
                </p>
                <p className="courseText">
                  Road signs are another crucial component covered in driver
                  education. Participants become familiar with the different
                  signs, their shapes, colors, and symbols, enhancing their
                  ability to interpret and respond correctly to the information
                  conveyed on the road. This familiarity minimizes confusion and
                  potential hazards, contributing to safer navigation.
                </p>
                <p className="courseText">
                  Road signs are another crucial component covered in driver
                  education. Participants become familiar with the different
                  signs, their shapes, colors, and symbols, enhancing their
                  ability to interpret and respond correctly to the information
                  conveyed on the road. This familiarity minimizes confusion and
                  potential hazards, contributing to safer navigation.
                </p>
                <p className="courseText">
                  Practical training is an essential aspect of driver education.
                  It allows participants to apply theoretical knowledge in
                  real-world scenarios, gaining hands-on experience in various
                  driving situations. Through guided practice, individuals
                  develop essential skills such as vehicle control, maneuvering,
                  and hazard perception. This practical aspect enhances their
                  competence and confidence on the road, preparing them for the
                  challenges they may face.
                </p>
                <p className="courseText">
                  Beyond technical skills, driver education also emphasizes the
                  importance of cultivating positive attitudes and responsible
                  behavior. Participants are encouraged to adopt a courteous,
                  patient, and cooperative approach to driving, fostering a
                  culture of respect and consideration. This promotes safer road
                  interactions, reduces instances of road rage and aggressive
                  driving, and creates a more harmonious driving environment for
                  all road users.
                </p>
                <h6 className="sectionSubheading">
                  Lessens the Possibility of Costly, Injurious, and Sometimes
                  Deadly Accidents
                </h6>
                <p className="courseText">
                  Driver education programs are essential for accident
                  prevention as they offer comprehensive training and practical
                  experience, going beyond teaching basic road rules to develop
                  crucial skills in identifying and responding to potential
                  dangers. Defensive driving as a key focus, educates learners
                  on maintaining a safe following distance and effectively
                  scanning the road for hazards, enabling proactive accident
                  avoidance. Practical training provides hands-on experience,
                  improving skills in safe vehicle operation and boosting
                  confidence in various traffic scenarios.
                </p>
                <p className="courseText">
                  Driver education also emphasizes responsible and attentive
                  driving, teaching learners to avoid distractions and the
                  dangers of impaired driving. The impact of driver education in
                  reducing accidents is significant, with lower crash rates
                  among program completers. By equipping individuals with
                  knowledge, skills, and responsible attitudes, driver education
                  programs help preserve resources and protect lives on the
                  road. Investing in driver education is a proactive measure
                  that ensures safety and benefits individuals and society as a
                  whole.
                </p>
                <h4 className="sectionHeading" id="sectionSix">
                  Section 1.6. History of the Automobile
                </h4>
                <p className="sectionQuote">
                  The automobile has witnessed a remarkable journey, from its
                  humble beginnings to its transformative impact on society,
                  shaping the way we live, work, and travel
                </p>
                <h5 className="sectionSubheading">
                  A. Development of the Automobile
                </h5>
                <img
                  src={image38}
                  alt="Ford T model and Volkswagen car models"
                  className="courseImage"
                />
                <p className="courseText">
                  The history of automobiles traces back to a series of
                  remarkable developments that shaped the way we travel and live
                  today. This journey can be divided into several pivotal eras,
                  each marked by propulsion methods and vehicle design.
                </p>
                <h5 className="sectionSubheading">
                  Sociological Changes Caused by the Automobile
                </h5>
                <p className="courseText">
                  The advent of the automobile brought about profound social
                  changes, transforming how people interacted, lived, and moved
                  within their communities.
                </p>
                <p className="courseText">
                  With increased freedom and mobility, the automobile altered
                  social interactions. Carpooling and road trips became new
                  avenues for meeting people and maintaining relationships
                  across distances became more feasible.
                </p>
                <p className="courseText">
                  The growth of suburbs and exurbs is fueled by the automobile,
                  which allows people to live farther from city centers without
                  sacrificing access to employment and services. This shift led
                  to a more dispersed population and a decline in reliance on
                  public transportation.
                </p>
                <p className="courseText">
                  The automobile granted individuals unparalleled personal
                  mobility, enabling them to explore new places and experiences.
                  This interconnectedness fostered a more diverse range of
                  experiences, contributing to a richer, interconnected world.
                </p>
                <h5 className="sectionSubheading">
                  Economic Conditions Created in Part by the Automobile
                </h5>
                <p className="courseText">
                  The rise of the automobile industry has had a profound impact
                  on economies worldwide, generating employment opportunities,
                  contributing to economic growth, and fostering interdependence
                  with other sectors.
                </p>
                <p className="courseText">
                  The automotive industry emerged as a major source of
                  employment, both directly and indirectly. With millions of
                  people employed across various sectors, this industry plays a
                  critical role in global job markets.
                </p>
                <p className="courseText">
                  The automotive sector's contributions to economic growth are
                  undeniable. Countries with a thriving automotive industry see
                  a notable boost to their GDP, with numerous ancillary
                  businesses benefiting from this growth.
                </p>
                <p className="courseText">
                  The automobile industry's influence extends beyond its
                  borders, fostering symbiotic relationships with industries
                  like oil and gas, steel, and retail.
                </p>
                <h5 className="sectionSubheading">
                  B. The Automobile and the Future
                </h5>
                <p className="courseText">
                  As we stand at the dawn of the 21st century, the automobile
                  faces new challenges and opportunities that will define its
                  trajectory in the coming years. <br /> Innovation and
                  technology play central roles in shaping the future of the
                  automobile:
                </p>
                <p className="courseText">
                  Environmental awareness has spurred the development of
                  eco-friendly alternatives, such as hybrid vehicles, electric
                  vehicles, and cleaner propulsion methods like hydrogen fuel
                  cells and biofuels.
                </p>
                <p className="courseText">
                  Stricter safety regulations have driven advancements in
                  vehicle safety features and autonomous driving technology,
                  aiming to reduce accidents and enhance road safety.
                </p>
                <p className="courseText">
                  The automobile industry's global reach continues to expand,
                  with manufacturers tapping into new markets and creating
                  international collaborations.
                </p>
                <p className="courseText">
                  Digital advancements have led to the emergence of connected
                  vehicles, enabling seamless integration with smart devices and
                  enhancing driving experiences.
                </p>
                <p className="courseText">
                  The future of automobiles holds tremendous promise, but it
                  also demands responsible stewardship. As we move forward,
                  sustainable practices and technological innovation will be
                  vital in ensuring the automobile's enduring impact on society
                  aligns with the ever-changing needs of humanity. The
                  automobile's transformative journey is far from over, and its
                  legacy will continue to shape our lives, connecting us in ways
                  we could have never imagined.
                </p>
              </div>
              {/* course contents ends here */}
              <ToQuiz />
            </div>
          </div>
        ) : (
          <One />
        )}
      </div>
    </>
  );
}
