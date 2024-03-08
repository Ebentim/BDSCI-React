import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Ten from "../quizes/Ten";

const sections = {
  sectionOne: "Drugs",
  sectionThree: "Avoiding Driving while Intoxicated",
  sectionFour: "Avoiding the Intoxicated Driver",
};

export default function ChapterTen() {
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
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Ten: Effects of Alcohol and Drugs
      </h3>
      {showQuiz ? (
        <Ten />
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
                Section 10.1 Alcohol
              </h4>
              <h5 className="sectionSubheading">A. What is alcohol?</h5>
              <p className="courseText">
                Alcohol is classified as a depressant drug that affects the
                entire nervous system. A typical alcoholic drink contains about
                three-fifths of an ounce of alcohol. The amount of alcohol in
                different types of drinks may vary, but generally, one beer, one
                glass of wine, and one shot of distilled spirits contain about
                the same amount of alcohol.
              </p>
              <p className="courseText">
                When alcohol is ingested, around 5% is directly absorbed by the
                mouth and throat, while the remaining 95% is absorbed through
                the digestive system. Unlike some substances, alcohol cannot be
                stored in the body's tissues for later use.
              </p>
              <p className="courseText">
                The body eliminates alcohol through various processes, with less
                than 10% being eliminated through excretion and evaporation via
                the kidneys, lungs, and skin. Around two to five percent of
                alcohol is excreted unchanged through sweat and urine. The
                majority, approximately 90%, is metabolized by the liver through
                oxidation. The liver breaks down alcohol into simpler compounds
                and eliminates it from the body. On average, the liver
                metabolizes about one standard drink per hour.
              </p>
              <p className="courseText">
                Excessive alcohol consumption can have harmful effects on the
                body, impairing cognitive functions, coordination, and judgment,
                which can lead to dangerous situations, including impaired
                driving. Responsible alcohol consumption, along with awareness
                of legal limits and safety guidelines, is crucial to ensuring
                personal safety and the safety of others.
              </p>
              <h5 className="sectionSubheading">
                B. How Alcohol Affects Driving Ability
              </h5>
              <iframe
                src="https://drive.google.com/file/d/11ulkIJ9FQ2J00I5Keq58uX9X4-s-fBOM/preview"
                title="drinking and driving"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <p className="courseText">
                <span className="bold">Judgment: </span>Depth perception is the
                ability to accurately judge the distance and relative positions
                of objects in one's surroundings. However, alcohol affects the
                brain's visual processing centers, leading to distorted
                perceptions of distance and space. This impairment can have
                serious consequences for drivers, as they may misjudge the
                distance between their vehicle and other objects on the road,
                such as cars, pedestrians, or obstacles.
              </p>
              <p className="courseText">
                For example, impaired depth perception may cause a driver to
                underestimate the distance between their vehicle and the one in
                front of them, leading to following too closely and increasing
                the risk of a rear-end collision. Additionally, gauging the
                timing and distance required for maneuvers like merging into
                traffic or making turns becomes challenging, potentially leading
                to erratic driving behavior and higher chances of accidents.
              </p>
              <p className="courseText">
                Moreover, alcohol reduces inhibitions and impairs judgment,
                leading to increased risk-taking behavior while driving.
                Intoxicated drivers are more likely to engage in reckless
                behaviors, such as attempting unsafe passes, ignoring traffic
                signals, or exceeding speed limits. Their impaired judgment may
                lead to poor decision-making in hazardous situations, further
                elevating the risk of accidents and injuries.
              </p>
              <p className="courseText">
                The combination of impaired depth perception and increased
                risk-taking tendencies creates a dangerous scenario on the road.
                Intoxicated drivers may attempt risky maneuvers without
                accurately assessing the potential consequences, posing
                significant dangers to themselves and others. It is crucial to
                emphasize the importance of never driving under the influence of
                alcohol to ensure road safety for all.
              </p>
              <p className="courseText">
                <span className="bold">Awareness: </span>Alcohol impairs a
                driver's ability to scan their environment effectively. Instead
                of keeping their focus on the road ahead and being aware of
                their surroundings, impaired drivers may fixate on a single
                point, leading to reduced awareness of potential hazards or
                obstacles in their peripheral vision. This limited scanning
                ability can increase the risk of colliding with objects or other
                vehicles that the driver fails to notice.
              </p>
              <p className="courseText">
                Impaired drivers have difficulty performing multiple tasks
                simultaneously. Driving safely requires the ability to process
                various stimuli at once, such as monitoring traffic signals,
                checking mirrors, and anticipating potential hazards. Alcohol
                hampers the brain's multitasking capabilities, making it
                challenging for the driver to respond quickly to changing road
                conditions and hazards.
              </p>
              <p className="courseText">
                Alcohol can cause forgetfulness and lapses in attention, leading
                to drivers neglecting essential safety measures. Impaired
                drivers may forget to turn on their headlights or may fail to
                dim their bright lights for oncoming traffic at night. These
                lapses in attentiveness can reduce their visibility and
                compromise the safety of other road users.
              </p>
              <p className="courseText">
                One of the most apparent signs of an impaired driver is their
                erratic and unpredictable driving behavior. Intoxicated drivers
                may travel at inconsistent speeds, make sudden and unanticipated
                lane changes, miss stop signs or traffic signals, and commit
                other serious driving errors. These blunders can create
                dangerous situations for themselves and others on the road.
              </p>
              <p className="courseText">
                Overall, alcohol's impact on awareness can lead to dangerous
                driving behaviors, reduced ability to multitask, and an
                increased likelihood of traffic violations. Impaired drivers
                often exhibit erratic driving patterns, making it challenging
                for other road users to anticipate their actions and respond
                appropriately. To avoid accidents and promote road safety, it is
                essential to refrain from driving under the influence of alcohol
                and to encourage responsible alternatives when alcohol is
                involved.
              </p>
              <p className="courseText">
                <span className="bold">Vision: </span>Alcohol slows down the
                eyes' ability to adjust to varying light levels. As a result,
                when transitioning from well-lit areas to darker sections of the
                road, or vice versa, an impaired driver's eyes may take longer
                to adapt. This slow adjustment can lead to temporary blindness
                or reduced visibility, making it challenging to identify
                hazards, pedestrians, or obstacles in the roadway.
              </p>
              <p className="courseText">
                Alcohol affects the eye muscles responsible for lateral eye
                movement, leading to a phenomenon known as tunnel vision. In
                this state, the driver's field of view becomes restricted, and
                they may primarily focus on what is directly in front of them,
                neglecting peripheral vision. Tunnel vision reduces the driver's
                ability to detect hazards from the sides, increasing the risk of
                colliding with objects or other vehicles coming from the
                periphery.
              </p>
              <p className="courseText">
                These visual impairments can have severe consequences on the
                driver's ability to safely operate a vehicle. With slow light
                adjustment, the driver may fail to notice pedestrians, cyclists,
                or obstacles in poorly lit areas or during transitions between
                different light conditions. Tunnel vision limits the driver's
                situational awareness, reducing their ability to anticipate and
                react to sudden changes or hazards on the road. It is crucial to
                avoid driving under the influence of alcohol to ensure clear and
                unimpaired vision, allowing for safe navigation of the roadways
                and the protection of oneself and others.
              </p>
              <p className="courseText">
                <span className="bold">Reaction Time: </span>Alcohol affects the
                central nervous system, which plays a crucial role in processing
                information and transmitting signals for quick responses. When
                under the influence, a driver's reaction time is significantly
                slowed, making it challenging to respond to known threats, such
                as a car suddenly stopping in front of an unexpected pedestrian
                crossing the road. This delay can lead to collisions or the
                inability to avoid accidents.
              </p>
              <p className="courseText">
                Impaired drivers face difficulties in quickly processing and
                analyzing information from their surroundings. This affects
                their ability to make timely decisions when faced with rapidly
                changing traffic conditions, such as avoiding a collision with
                another vehicle or navigating through complex intersections. The
                delay in decision-making can have serious consequences and
                increase the likelihood of accidents.
              </p>
              <p className="courseText">
                Alcohol's effect on the nervous system can also impact basic
                reflexes, such as quickly removing a foot from the accelerator
                to brake or steering away from an obstacle. These slowed
                reflexes make it challenging for the driver to respond promptly
                to unexpected situations, leading to a higher risk of accidents.
                It is essential to avoid driving under the influence of alcohol
                to ensure quick and effective reactions to potential dangers on
                the road, ensuring the safety of oneself and others.
              </p>
              <h5 className="sectionSubheading">C. Alcohol and Accidents</h5>
              <h5 className="sectionSubheading">
                Alcohol is Involved in About 40% of all Fatal Highway Accidents.
              </h5>
              <p className="courseText">
                According to the National Highway Traffic Safety Administration
                (NHTSA), about 30% of all traffic crash fatalities in the United
                States involve drunk drivers (with BACs of .08 g/dL or higher).
                In 2020, there were 11,654 people killed in these preventable
                crashes. On average over the 10 years from 2011-2020, about
                10,500 people died every year in drunk-driving crashes. Every
                day, 30 people in the United States die in car crashes with an
                alcohol-impaired driver. This is one death every 50 minutes.
              </p>
              <p className="sectionQuote">
                A young driver with an ABC of only .02 to .05 percent is at
                least seven times more likely to be killed in an accident than a
                sober driver.
              </p>
              <p className="courseText">
                When a young driver's blood alcohol concentration (BAC) falls
                within the range of 0.02 to 0.05 percent, their risk of being
                killed in a collision increases significantly compared to a
                sober driver. This heightened risk is influenced by several
                factors.
              </p>
              <p className="courseText">
                Alcohol impairs cognitive abilities, such as judgment,
                attention, and decision-making. Even at lower BAC levels, a
                young driver's ability to process information and make
                appropriate choices is compromised, leading to poor driving
                decisions
              </p>
              <p className="courseText">
                Additionally, alcohol reduces vision and coordination. Young
                drivers may struggle to accurately assess distances and perceive
                potential hazards on the road due to impaired visual acuity and
                depth perception. Their coordination may also be affected,
                impacting their ability to control the vehicle effectively.
              </p>
              <p className="courseText">
                Moreover, alcohol slows down a young driver's reaction time.
                Responding promptly to sudden changes in traffic or road
                conditions becomes challenging, increasing the risk of
                accidents.
              </p>
              <p className="courseText">
                Furthermore, young drivers may become overconfident under the
                influence of alcohol. This overconfidence can lead them to take
                unnecessary risks and engage in reckless behaviors, further
                raising the likelihood of accidents.
              </p>
              <p className="courseText">
                Furthermore, young drivers are already at a higher risk of
                accidents due to their limited driving experience. When alcohol
                is involved, their driving skills are further compromised,
                amplifying the risk of collisions.
              </p>
              <p className="sectionQuote">
                The same driver with an ABC of 12% is 90 times more likely to be
                killed.
              </p>
              <p className="courseText">
                The combination of these impairments significantly elevates the
                risk of fatal accidents. At 0.12% BAC, a driver's ability to
                safely operate a vehicle is severely compromised, making them a
                danger to themselves and others on the road.
              </p>
              <p className="courseText">
                It is crucial to understand that any amount of alcohol in the
                bloodstream can impair driving abilities to some extent. Even at
                lower BAC levels, such as 0.08%, which is the legal limit in
                many places, a driver's reaction time, judgment, and
                coordination are still negatively affected.
              </p>
              <h5 className="sectionSubheading">D. Alcohol and the Law</h5>
              <p className="courseText">
                In California, a blood alcohol concentration (BAC) of .08% is
                considered the legal threshold for driving under the influence
                (DUI). If a driver's BAC is measured at or above .08%, they can
                be arrested and charged with DUI, leading to legal penalties and
                the potential loss of driving privileges. Additionally, drivers
                under the legal drinking age, typically under 21, are subject to
                a much lower BAC limit of .01%, with severe penalties, including
                license suspension, for any detectable alcohol in their system.
                California follows implied consent laws, requiring drivers to
                submit to chemical tests if lawfully arrested on suspicion of
                DUI, and admin per se laws, resulting in automatic license
                suspension for driving with a BAC at or above the legal limit.
                The state treats DUI offenses seriously, implementing stringent
                penalties to deter impaired driving and prioritize road safety.
              </p>
              <h4 className="sectionHeading" id="sectionTwo">
                Section 10.2. Drugs
              </h4>
              <h5 className="sectionSubheading">
                A. Over-the-counter (Non-prescription Drugs)
              </h5>
              <p className="courseText">
                Over-the-counter (OTC) drugs refer to medications that can be
                purchased without a prescription. While they are generally
                considered safe when used as directed, certain OTC drugs can
                have side effects that may impair driving abilities. For
                example, some OTC cold and allergy medicines contain
                antihistamines, which can cause drowsiness as a side effect.
                These medications are commonly used to alleviate symptoms such
                as sneezing, a runny nose, and itchy eyes. However, their drowsy
                effects can negatively impact a driver's alertness, reaction
                time, and overall driving performance.
              </p>
              <p className="courseText">
                Certain OTC cough syrups and liquid medications may contain
                alcohol as one of their ingredients. While the alcohol content
                in these medications is typically low, it can still have an
                impact on driving ability, especially when combined with other
                substances. Alcohol can impair coordination, reaction time, and
                judgment, making it unsafe to drive after consuming products
                with alcohol content, even if they are not intended for
                recreational use. It is crucial for you to carefully read the
                labels of OTC medications, paying attention to any warnings or
                cautions related to driving or operating machinery. If a
                medication has the potential to cause drowsiness or contains
                alcohol, it is best to avoid driving until the effects have worn
                off. If you are unsure about the safety of driving while taking
                OTC medications, you should consult with a healthcare
                professional or pharmacist for guidance. Remember, impaired
                driving, whether due to alcohol, prescription drugs, or OTC
                medications, poses a significant risk to the driver, passengers,
                and others on the road.{" "}
              </p>
              <h5 className="sectionSubheading">B. Prescription Drugs</h5>
              <p className="courseText">
                Prescription drugs can have significant effects on a person's
                ability to drive safely, especially narcotics like codeine,
                Demerol, and other painkillers. These drugs are powerful
                pain-relievers and are commonly prescribed to manage moderate to
                severe pain. However, they can also cause several side effects
                that can impair a person's driving ability.
              </p>
              <p className="courseText">
                Narcotics such as codeine and Demerol are central nervous system
                depressants, meaning they slow down brain activity and can
                induce a state of drowsiness and stupor. Another concerning side
                effect of narcotics is the false sense of well-being they may
                produce, leading to overconfidence and impaired judgment. Poor
                coordination is yet another side effect of narcotics, hindering
                a driver's ability to control the vehicle effectively.
              </p>
              <p className="courseText">
                Depressants, including sleeping pills, tranquilizers, and
                barbiturates, can also impair driving ability. They can cause
                drowsiness, falling asleep uncontrollably, slowed reactions, and
                poor coordination.
              </p>
              <p className="courseText">
                Medical marijuana, containing THC, is also a depressant and can
                affect perception, coordination, attention, and reaction times.
                Driving under the influence of medical marijuana is illegal in
                many jurisdictions, including California.
              </p>
              <p className="courseText">
                Stimulants like amphetamines and certain diet pills can have
                significant impairing effects on driving ability. These drugs
                can induce false feelings of well-being, lack of concentration,
                aggressiveness, impaired decision-making, and physical effects.
                Driving under the influence of stimulants is illegal and poses
                serious risks.
              </p>
              <p className="courseText">
                Overall, prioritizing road safety and responsible driving
                behavior is crucial. If there are concerns about the impact of
                medications on driving ability, discussing them with a
                healthcare provider is essential to exploring alternative
                treatment options or making necessary adjustments to ensure road
                safety.
              </p>
              <h5 className="sectionSubheading">C. Illegal Drugs</h5>
              <p className="courseText">
                Marijuana, also known as cannabis, is an illegal drug that has
                psychoactive effects on the brain and body. When used, marijuana
                can significantly impair a person's ability to drive safely,
                posing a serious risk to road safety. Some of the effects of
                marijuana on driving ability include drowsiness, distorted
                perception, impaired coordination, reduced concentration, and
                slowed pupil response. These effects can lead to decreased
                alertness, delayed reactions, difficulty judging distances and
                speeds, and challenges in controlling the vehicle properly. It
                is crucial to note that even small amounts of marijuana can
                impair driving ability and increase the risk of accidents. In
                California, driving under the influence of marijuana is illegal,
                and law enforcement officers are trained to detect signs of drug
                impairment.
              </p>
              <p className="courseText">
                Narcotics, such as heroin, are powerful and highly addictive
                illegal drugs that have severe and dangerous effects on
                individuals' physical and mental health. When used, heroin can
                lead to a state of extreme sedation and can significantly impair
                a person's ability to function, including driving safely. Some
                of the effects of heroin on driving ability include stupor, slow
                reaction time, visual distortion, impaired motor skills, and
                altered consciousness. These impairments can make drivers unable
                to react quickly to sudden changes in traffic, cause visual
                disturbances that hinder safe driving, and lead to poor control
                over the vehicle. Additionally, the risk of overdose and death
                associated with heroin use makes driving under its influence
                incredibly hazardous and life-threatening. Driving under the
                influence of heroin is illegal, and the consequences can be
                severe, including legal penalties and serious risks to the
                driver, passengers, and others on the road.
              </p>
              <p className="courseText">
                Stimulants, including amphetamines, cocaine, and "pep" pills,
                are powerful psychoactive substances that act on the central
                nervous system to increase alertness, attention, and energy
                levels. While prescription stimulants can be used for medical
                purposes, illegal stimulants are not approved for medical use
                and are associated with severe health risks. When individuals
                misuse or abuse stimulants, the effects on their driving ability
                can be profoundly dangerous. Stimulant use can lead to intense
                effects on the body, impaired judgment, reduced reaction time,
                altered perception, emotional instability, and addiction. The
                heightened awareness and false sense of alertness caused by
                stimulants can lead to overconfidence and risky driving
                behaviors, while impaired coordination and concentration can
                make it challenging to respond quickly and safely to traffic
                situations. Driving under the influence of stimulants is illegal
                in California, and law enforcement officers are vigilant in
                detecting and apprehending impaired drivers.
              </p>
              <p className="courseText">
                Hallucinogens are another class of drugs that can significantly
                impair driving ability and pose grave risks to road safety. The
                induction of hallucinations and vision distortions can lead to
                inaccurate perceptions of the road environment, making it
                difficult for drivers to recognize traffic signs, signals, and
                other vehicles. Impaired judgment, disorientation, and altered
                thinking processes can result in poor decision-making while
                driving, jeopardizing the safety of the driver and other road
                users. Drivers under the influence of hallucinogens may
                experience emotional instability and sudden mood swings, further
                distracting them from focusing on driving safely. Flashbacks,
                which are unpredictable recurrences of hallucinogenic
                experiences, can occur while driving, leading to dangerous and
                unpredictable driving behaviors. Driving under the influence of
                hallucinogens is highly dangerous and illegal, with severe legal
                consequences awaiting those caught engaging in such behavior. To
                ensure road safety, drivers must never drive under the influence
                of hallucinogens or any other substances that impair driving
                abilities.
              </p>
              <h5 className="sectionSubheading">D. Drugs and the Law</h5>
              <p className="courseText">
                Driving under the influence of drugs (DUID) is a serious offense
                in California. Whether it's illegal drugs or certain
                prescription medications, operating a motor vehicle while
                impaired can have severe consequences. Drugs like marijuana,
                cocaine, heroin, methamphetamine, and others are strictly
                prohibited while driving, with no specified permissible levels.
                Even trace amounts of illegal drugs in a driver's system can
                lead to charges of driving while intoxicated.
              </p>
              <p className="courseText">
                Prescription drugs can also impair driving ability, and drivers
                can face legal repercussions if found operating a vehicle while
                adversely affected by these medications. Drugs such as
                sedatives, tranquilizers, opioid painkillers, and certain
                antidepressants can cause drowsiness, reduced reaction times,
                and impaired motor skills, making driving unsafe.
              </p>
              <p className="courseText">
                When law enforcement officers suspect a driver of being impaired
                by drugs, they may conduct field sobriety tests to assess
                physical and cognitive abilities. These tests, like walking in a
                straight line or standing on one leg, can be used as evidence in
                court.
              </p>
              <p className="courseText">
                Legal consequences for DUID can include fines, license
                suspension, mandatory drug education programs, probation, and
                even jail time, especially for repeat offenses or cases
                involving injuries or fatalities.
              </p>
              <p className="courseText">
                If you are taking prescription medications that could affect
                your ability to drive safely, you should consult your healthcare
                provider about potential side effects and whether it is safe to
                operate a vehicle while on the medication. Additionally, you
                should never operate a vehicle under the influence of illegal
                drugs or any substances that could impair your driving
                abilities. Prioritizing road safety and responsible driving can
                help protect oneself and others on the road, ensuring safer
                driving conditions for everyone.
              </p>
              <h4 className="sectionHeading" id="sectionFour">
                Section 5.3. Avoiding Driving While Intoxicated
              </h4>
              <p className="courseText">
                Avoiding driving while intoxicated is of paramount importance
                for ensuring road safety and personal well-being. Abstinence
                from alcohol and drugs while driving is the most effective and
                responsible choice, as it empowers you to retain full control
                over your vehicle and make clear and rational decisions on the
                road. Even small amounts of alcohol or drugs can impair
                judgment, reaction time, and coordination, leading to
                potentially devastating consequences.
              </p>
              <p className="courseText">
                By choosing abstinence, you protect not only yourself but also
                your passengers and other road users. It is crucial to recognize
                that driving under the influence is not only illegal but also
                poses significant risks to everyone's safety.
              </p>
              <p className="courseText">
                Opting for public transportation or a taxi when alcohol or drugs
                are involved provides a safe and reliable means of travel.
                Professional drivers in public transportation and taxi services
                are trained to operate vehicles safely, reducing the risk of
                accidents due to impairment.
              </p>
              <p className="courseText">
                Appointing a designated driver when attending social events
                involving alcohol is a responsible choice. This individual
                agrees to remain sober for the evening and takes responsibility
                for driving others home safely. Having a designated driver
                ensures that everyone can enjoy the event without compromising
                their safety on the road.
              </p>
              <p className="courseText">
                If unsure about your ability to drive safely after consuming
                alcohol or drugs, it is best to stay where you are and wait
                until sober enough to drive.
              </p>
              <p className="courseText">
                When consuming alcohol or drugs at home, it is essential to
                drink responsibly and plan for any guests. Setting limits on
                alcohol consumption and offering guests the option to stay
                overnight if they overindulge promotes a safer environment and
                responsible drinking practices.
              </p>
              <h4 className="sectionHeading" id="sectionFour">
                Section 5.4. Avoiding the intoxicated driver
              </h4>
              <p className="courseText">
                Driving under the influence (DUI) poses a significant risk,
                particularly during the late evening and early morning hours
                between 10:00 P.M. and 2:00 A.M. These hours coincide with peak
                social activities and nightlife, leading to increased alcohol
                consumption and a higher likelihood of encountering intoxicated
                drivers on the road. As people go out to restaurants, bars,
                clubs, parties, and other entertainment venues during this time,
                the chances of encountering impaired drivers rise substantially.
                Understanding this time frame's elevated risk can help you
                remain vigilant and take necessary precautions to avoid
                potential accidents caused by intoxicated individuals.
              </p>
              <p className="courseText">
                Impaired drivers may display erratic speed control, fluctuating
                between unreasonably fast and slow speeds. Such unpredictable
                behavior increases the risk of accidents and endangers other
                road users. Additionally, intoxicated drivers may make excessive
                lane changes without signaling, making it challenging for nearby
                motorists to anticipate their maneuvers. Overshooting or
                disregarding traffic signals and weaving within their lane are
                also common signs of impaired driving. Nighttime driving
                presents further challenges due to reduced visibility, making it
                crucial for drivers to remain alert and cautious during peak DUI
                hours.
              </p>
              <p className="courseText">
                To avoid potential dangers associated with intoxicated drivers,
                you should take proactive measures to ensure your safety and the
                safety of others on the road. Maintain a safe distance from
                potentially impaired drivers, as it allows adequate time to
                react to sudden maneuvers or erratic behavior. If you suspect
                encountering an intoxicated driver, it may be prudent to pull
                over to the side of the road for a brief moment to create a safe
                distance. Additionally, reporting suspected impaired drivers to
                the appropriate authorities can prevent potential accidents and
                contribute to a safer driving environment.
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
