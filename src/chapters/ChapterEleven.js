import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Eleven from "../quizes/Eleven";

import bikes from "../Assets/images/image42.png";
import helmet from "../Assets/images/image63.png";
import gloves from "../Assets/images/image8.png";
import inspect from "../Assets/images/image31.png";
import boot from "../Assets/images/image47.png";
import jacket from "../Assets/images/image35.png";

const sections = {
  sectionOne: "Sharing the Road with Motorcycles",
  sectionTwo: "Riding a Motorcycle",
  sectionThree: "Riding as a Passenger on a Motorbike",
};

export default function ChapterEleven() {
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
      <h3 className="bold unitHeading">Unit Eleven: Motorcycle Safety</h3>
      {showQuiz ? (
        <Eleven />
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
                Section 11.1. Sharing the Road with Motorcycles
              </h4>
              <h5 className="sectionSuheading">
                A. Motorcycles are harder to see
              </h5>
              <img
                src={bikes}
                alt="group of bikers on a bike"
                className="courseImage"
              />
              <p className="courseText">
                Motorcycles are a common sight on roads, especially during
                warmer months. However, due to their smaller size and narrower
                profile compared to cars, motorcycles can be harder to see,
                leading to potential risks for both motorcyclists and other
                drivers.
              </p>
              <p className="courseText">
                One of the primary difficulties when sharing the road with
                motorcycles is their reduced visibility. As a driver, you need
                to be mindful of the blind spots around your vehicle.
                Motorcycles can easily fall into these blind spots, making them
                virtually invisible in the mirrors. To mitigate this risk, it is
                essential to adjust your side mirrors correctly to minimize
                blind spots and consistently check them before changing lanes or
                making turns. Incorporating shoulder checks into your driving
                habits can provide an extra layer of safety, as physically
                turning your head allows you to see any vehicles, including
                motorcycles, that might not be visible through mirrors alone.
              </p>
              <p className="courseText">
                Apart from blind spots, motorcycles can also be obscured by
                other traffic, especially in congested or heavy traffic
                conditions. As a driver, it is your responsibility to remain
                alert and practice defensive driving. By maintaining a safe
                following distance from the vehicle in front, we can have a
                clear view of the road ahead, including motorcycles. This
                additional space also allows motorcyclists to maneuver safely
                without feeling crowded by other vehicles.
              </p>
              <p className="courseText">
                Intersections are critical areas where extra caution is
                necessary. Motorcycles may approach intersections more quickly
                than cars, making their movements less predictable. Before
                making a left turn or turning on red lights, it's crucial to
                double-check for approaching motorcycles and ensure they have
                enough time to clear the intersection safely. Being patient and
                allowing motorcycles to proceed first when appropriate can
                prevent potential collisions.
              </p>
              <p className="courseText">
                Providing enough space for motorcycles is crucial to their
                safety. Motorcycles can stop more quickly than cars due to their
                lighter weight. Therefore, leaving a generous following distance
                is essential. Tailgating motorcycles is not only risky but also
                intimidating for motorcyclists. Keeping a safe following
                distance gives both drivers and motorcyclists ample reaction
                time and helps create a safer road environment for everyone.
              </p>
              <h5 className="sectionSubheading">
                B. Motorcycles are harder to steer in emergencies and are
                committed to their previously chosen path.
              </h5>
              <p className="courseText">
                Unlike cars, which have four wheels providing stability,
                motorcycles have only two wheels, making them inherently less
                stable and more challenging to control in certain circumstances.
              </p>
              <p className="courseText">
                One critical characteristic of motorcycles is their commitment
                to their chosen path. Cars change direction by turning the
                steering wheel, motorcycles steer by leaning. Once a motorcycle
                is leaned into a turn, it becomes challenging to change its path
                abruptly without causing a loss of control. This is known as
                "countersteering," where the rider applies slight pressure in
                the opposite direction they want to turn, causing the motorcycle
                to lean in the desired direction. Once the lean is initiated,
                the motorcycle is committed to the curve it's taking, and sudden
                changes can lead to accidents.
              </p>
              <p className="courseText">
                In emergencies, such as encountering unexpected obstacles or
                hazards on the road, motorcycles require more skill and finesse
                to navigate safely. For instance, if a car suddenly swerves into
                the path of an approaching motorcycle, the motorcyclist may not
                have enough time or space to avoid a collision. In such cases,
                other drivers need to be attentive and avoid making sudden
                maneuvers that could jeopardize the safety of motorcyclists.
              </p>
              <p className="courseText">
                Moreover, braking on a motorcycle is different from braking in a
                car. Motorcycles have separate front and rear brakes, and during
                emergency braking, a significant portion of the stopping power
                comes from the front brake. However, applying too much front
                brake suddenly can cause the motorcycle's front wheel to lock
                up, leading to a dangerous situation known as a "front-wheel
                skid."
              </p>
              <p className="courseText">
                To address these challenges, motorcyclists undergo training to
                enhance their riding skills, including emergency maneuvers and
                proper braking techniques. It is essential to be aware of
                motorcycles' limitations and give them enough space on the road.
                Avoid tailgating motorcycles and provide extra following
                distance to account for their potentially slower stopping
                ability.
              </p>
              <h5 className="sectionSubheading">
                C. Be aware that cyclists must make a major adjustment in speed
                when
              </h5>
              <p className="courseText">
                <span className="bold">
                  a. Encountering a storm drain, gravel surface, or pothole:{" "}
                </span>
                When cycling, cyclists must make major adjustments in speed to
                safely navigate hazards like storm drains, gravel surfaces, or
                potholes. For instance, hitting a pothole at high speed could
                lead to loss of control and accidents. When approaching a storm
                drain or gravel surface, slowing down is crucial to maintain
                stability and avoid skidding. Additionally, cyclists needs to
                maintain a straight path when riding over these hazards to
                reduce the risk of accidents.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Driving on a rain-slick road or through a puddle:{" "}
                </span>
                Wet roads significantly reduce the traction between the tires
                and the road surface, increasing the likelihood of skidding and
                losing control. When cycling on a rain-slick road or through
                puddles, cyclists must reduce their speed to minimize the risk
                of hydroplaning. Hydroplaning occurs when a thin layer of water
                accumulates between the tires and the road surface, causing the
                tires to lose contact with the road. Lowering speed helps
                improve traction and gives cyclists more control over their
                bikes.
              </p>
              <p className="courseText">
                <span className="bold">c. Rain and/or wind is strong: </span>
                Cycling in strong rain and wind can be particularly challenging
                and dangerous. Strong wind gusts can push cyclists off course,
                while heavy rain reduces visibility and makes the road surface
                slippery. In such conditions, cyclists must make significant
                adjustments to their speed and consider taking shelter if the
                weather becomes too severe. Slowing down and maintaining a firm
                grip on the handlebars is crucial to staying in control of the
                bicycle during gusty conditions.
              </p>
              <h5 className="sectionSubheading">
                D. Be on the Watch for Careless Motorcyclists
              </h5>
              <p className="courseText">
                Motorcyclists are vulnerable road users, lacking the protective
                structure of enclosed vehicles. Be cautious and attentive around
                motorcyclists to avoid collisions and potential injuries. Their
                exposure during accidents can lead to severe harm, making it
                crucial for you to take extra care when sharing the road with
                them.
              </p>
              <p className="courseText">
                Collisions involving motorcycles often result in more severe
                injuries or fatalities compared to accidents involving only
                cars. Without the protection of airbags or seat belts,
                motorcyclists are at greater risk of direct impact during a
                crash. Even at lower speeds, accidents with motorcycles can have
                life-altering consequences.
              </p>
              <h5 className="sectionSubheading">
                E. Beware of Motorcyclists Splitting Lanes
              </h5>
              <p className="courseText">
                Lane splitting is a practice where motorcyclists ride between
                lanes of slow-moving or stopped traffic, often seen in congested
                conditions. While its legality varies by region, drivers must
                remain aware of this maneuver to ensure road safety and prevent
                potential accidents.
              </p>
              <p className="courseText">
                The unexpected presence of lane-splitting motorcyclists can
                catch drivers off guard, particularly if they are not accustomed
                to this practice. Motorcycles can swiftly emerge between cars,
                requiring drivers to be vigilant and cautious to avoid
                collisions. Both drivers and motorcyclists face reduced reaction
                time during lane splitting, emphasizing the need for
                attentiveness and quick responses to sudden movements or lane
                changes.
              </p>
              <p className="courseText">
                Motorcycles' narrower profile allows them to fit between lanes,
                but the limited clearance leaves little room for error. Any
                abrupt movements by either drivers or motorcyclists can lead to
                dangerous situations. Additionally, lane-splitting motorcyclists
                might be partially obscured by other vehicles, making them
                harder to spot in busy traffic. Therefore, you must exercise
                careful observation and remain attentive to your surroundings.
              </p>
              <h4 className="sectionHeading" id="sectionTwo">
                Section 11. 2. Riding a Motorcycle
              </h4>
              <h5 className="sectionSubheading">
                A. Wear Proper Lightly Colored Riding Apparel
              </h5>
              <p className="courseText">
                When riding a motorcycle, wearing the right gear is of utmost
                importance to ensure your safety and protection on the road.
                Unlike car drivers, motorcyclists are more exposed to potential
                hazards, making appropriate riding apparel essential for
                minimizing the risk of injury in case of an accident. Let's
                explore the significance of specific riding gear:
              </p>
              <h6 className="sectionSubheading">Proper fitting helmet</h6>
              <img src={helmet} alt="an helmet" className="courseImage" />
              <p className="courseText">
                The helmet is the most critical piece of protective equipment
                for a motorcyclist. It provides vital head protection in the
                event of a crash or collision. When selecting a helmet, it's
                crucial to ensure it fits properly and adheres to safety
                standards. A well-fitted helmet that covers the entire head and
                has a secure chin strap helps prevent it from coming off during
                an accident. Helmets should meet safety standards set by
                relevant authorities to ensure their effectiveness in
                safeguarding the rider's head.
              </p>
              <h6 className="sectionSubheading">Heavy jacket and gloves</h6>
              <div className="courseImageContainer">
                <img
                  src={jacket}
                  alt="a leather jacket"
                  className="courseImage"
                />
                <img
                  src={gloves}
                  alt="a pair of leather gloves"
                  className="courseImage"
                />
              </div>
              <p className="courseText">
                Wearing a heavy jacket, preferably made of leather or durable
                textile material, is essential for protecting against abrasions
                and road rash in case of a fall or slide. Leather, in
                particular, offers excellent abrasion resistance and helps
                reduce injuries during accidents. Some jackets come with
                built-in padding or armor in critical areas, such as the
                shoulders and elbows, providing additional protection.
                Additionally, wearing gloves made of leather or other robust
                materials safeguards the hands and fingers from injury and road
                debris.
              </p>
              <h6 className="sectionSubheading">
                Leather boots that cover ankles
              </h6>
              <img
                src={boot}
                alt="a leather booth that covers the ankle"
                className="courseImage"
              />
              <p className="courseText">
                Proper footwear offers protection against foot and ankle
                injuries while providing better grip and stability when
                operating the motorcycle. Sturdy materials like leather or
                reinforced textiles help shield the feet from potential impacts
                and road hazards.
              </p>
              <h56 className="sectionSubheading">
                Lightly colored riding apparel
              </h56>
              <p className="courseText">
                Opting for lightly colored riding apparel enhances visibility,
                especially during low-light conditions or adverse weather.
                Bright or reflective elements on helmets, jackets, and boots
                make motorcyclists more visible to other road users, reducing
                the risk of accidents caused by limited visibility.
              </p>
              <h5 className="sectionSubheading">B. Pre-ride Inspection</h5>
              <img
                className="courseImage"
                src={inspect}
                alt="a biker inspecting his bike"
              />
              <p className="courseText">
                Performing a pre-ride inspection is a crucial routine for every
                motorcyclist to ensure their motorcycle is in proper working
                condition and safe for the road. A thorough inspection helps
                identify any potential issues or maintenance needs, reducing the
                risk of accidents caused by mechanical failures. Here are the
                key components to check during a pre-ride inspection:
              </p>
              <p className="courseText">
                <span className="bold">Tires: </span>Check the tires for good
                tread depth, as adequate tread provides better traction and
                stability on the road. Tires with worn-out tread may lead to
                reduced grip and increased chances of skidding, especially on
                wet or slippery surfaces. Additionally, inspect the tires for
                signs of dryness or cracking, which can compromise their
                integrity and safety.
              </p>
              <p className="courseText">
                <span className="bold">Rims and Spokes: </span>Ensure the rims
                and spokes are in good condition. Damaged or bent rims can
                affect the tire's balance and lead to handling issues. Broken or
                loose spokes should be addressed promptly, as they can
                compromise the structural integrity of the wheel.
              </p>
              <p className="courseText">
                <span className="bold">
                  Brakes, Clutch, and Associated Controls and Cables:{" "}
                </span>
                Test the brakes and clutch to ensure they are working correctly
                and engaging smoothly. Check the brake pads for wear and make
                sure the brake cables and clutch cables are not frayed, kinked,
                or excessively loose. Properly functioning controls and cables
                are essential for responsive and safe riding.
              </p>
              <p className="courseText">
                <span className="bold">Gas or Oil Leaks: </span>Inspect the
                motorcycle for any signs of gas or oil leaks. Leaking fluids can
                make the road surface slippery and hazardous, particularly if
                they come into contact with the rear tire. Address any leaks
                promptly to maintain a clean and safe riding experience.
              </p>
              <p className="courseText">
                <span className="bold">Chain: </span>Check the chain tension and
                ensure it has the right amount of play (about one inch of
                movement) when measured at the center of the bottom run. Proper
                chain tension prevents unnecessary wear and tear on the
                drivetrain and ensures smooth power transmission. Additionally,
                ensure the chain is adequately lubricated to prevent excessive
                wear and noise.
              </p>
              <p className="courseText">
                <span className="bold">
                  Horn, Headlight, and Turn Signals:{" "}
                </span>
                Test the horn, headlight, and turn signals to ensure they are
                all functioning correctly. These components are crucial for
                communication with other road users and maintaining visibility
                on the road, especially during low-light conditions or adverse
                weather.
              </p>
              <h5 className="sectionSubheading">C. Ride Defensively</h5>
              <p className="courseText">
                Riding defensively is a fundamental practice for motorcyclists
                to ensure their safety on the road. Motorcycles are more
                vulnerable than cars, and being proactive and alert can help
                prevent accidents. Here are some essential points to keep in
                mind when riding defensively:
              </p>
              <p className="courseText">
                <span className="bold">Don’t expect to be seen: </span>It is
                essential to assume that other drivers may not see you,
                especially in busy traffic or challenging visibility conditions.
                Always ride with the mindset that you might be overlooked, and
                be prepared to take evasive actions if necessary. Being cautious
                and defensive can help you anticipate and avoid potential
                hazards caused by other drivers' lack of awareness.
              </p>
              <p className="courseText">
                <span className="bold">
                  Be aware of the road surface at all times, especially when
                  cornering:{" "}
                </span>
                The road surface can vary, and it's essential to stay vigilant
                for potential hazards, such as potholes, gravel, or oil spills.
                When cornering, be especially attentive to the road's condition,
                as traction is crucial for maintaining control and stability.
                Reduce speed and approach corners with caution, especially in
                unfamiliar or poorly maintained areas.
              </p>
              <p className="courseText">
                <span className="bold">
                  Use the front and rear brakes for everything but leisurely
                  stops:{" "}
                </span>
                Mastering brake control is essential for safe riding. In
                emergencies, using both the front and rear brakes together can
                provide maximum stopping power. However, during leisurely stops,
                use the rear brake gently to maintain balance. Practice proper
                braking techniques to develop muscle memory and enhance your
                ability to respond quickly in critical situations.
              </p>
              <p className="courseText">
                When in traffic, follow the path of the left rear wheel of the
                car ahead: <span className="bold"></span>Positioning is
                essential for staying visible and maintaining a safe distance
                from other vehicles. Following the path of the left rear wheel
                of the car ahead gives you a better view of the road ahead and
                increases your visibility to drivers in front of you.
                Maintaining a safe following distance allows you more time to
                react to sudden stops or changes in traffic flow.
              </p>
              <p className="courseText">
                <span className="bold">
                  Allow for sluggish handling when carrying a passenger:{" "}
                </span>
                Carrying a passenger changes the dynamics of the motorcycle. The
                additional weight can affect handling, braking, and
                acceleration. When riding with a passenger, adjust your riding
                style to accommodate the changes in handling characteristics.
                Allow for more time and distance to stop, and be mindful of the
                passenger's comfort and safety.
              </p>
              <h4 className="sectionHeading" id="sectionThree">
                Section 11.3. Riding as a Passenger on a Motorbike
              </h4>
              <p className="courseText">
                Riding as a passenger on a motorcycle requires certain
                responsibilities to ensure both your safety and the safety of
                the rider. You play a role in contributing to a safe riding
                experience. Here are the key responsibilities for motorcycle
                passengers:
              </p>
              <p className="courseText">
                <span className="bold">
                  Insist on a properly fitting helmet:{" "}
                </span>
                Your safety as a passenger is of utmost importance, and wearing
                a helmet is crucial to protect your head in the event of an
                accident. Insist on using a properly fitting helmet that meets
                safety standards and is secured with the chin strap. A
                well-fitted helmet provides the best protection and reduces the
                risk of head injuries.
              </p>
              <p className="courseText">
                <span className="bold">
                  Follow guidelines on apparel if possible:{" "}
                </span>
                Whenever possible, follow the guidelines for proper riding
                apparel mentioned earlier. Wearing appropriate riding gear,
                including a heavy jacket, gloves, and sturdy footwear, enhances
                your safety and protection during the ride.
              </p>
              <p className="courseText">
                <span className="bold">Lean with the driver in turns: </span>
                Motorcycles lean into turns to maintain balance and navigate
                curves smoothly. As a passenger, it's essential to lean in the
                same direction as the driver during turns. Leaning with the
                motorcycle helps maintain stability and minimizes any potential
                imbalance. Keep your body relaxed and follow the driver's lead
                in leaning into turns.
              </p>
              <p className="courseText">
                <span className="bold">
                  Keep your feet on the passenger pegs at all times:{" "}
                </span>
                Motorcycle pegs are specifically designed for passengers to rest
                their feet. Keeping your feet on the passenger pegs provides you
                with a secure and stable position during the ride. Avoid
                dangling your feet or placing them on the ground while the
                motorcycle is in motion, as it can be hazardous and cause loss
                of balance.
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
