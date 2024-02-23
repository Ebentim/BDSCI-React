import { useState } from "react";
import { NavButtons } from "../Assets/next";

export default function ChapterThree() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Natural Laws and Driving an Automobile",
    sectionTwo: "The Force of Gravity",
    sectionThree: "Inertial and Energy",
    sectionFour: "The Forces of Friction",
    sectionFive: "Centripetal and Centrifugal Force",
    sectionSix: "Force of Impact",
  };

  const handleClick = () => (content ? setContent(false) : setContent(true));

  const NextButton = () => {
    return (
      <NavButtons onclick={handleClick} classname="nextButton">
        {!content ? "continue to Lesson" : "Understand Purpose"}
      </NavButtons>
    );
  };
  return (
    <div className="courseBody" id="three">
      <h3 className="bold unitHeading">
        Unit Three: Natural Forces Affecting the Driver
      </h3>
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
          {!content ? (
            <p className="purpose">
              <span className="bold">Purpose:</span> Replace with the purpose of
              the section
            </p>
          ) : (
            <div className="courseContents">
              <h4 className="sectionHeading" id="sectionOne">
                Section 3.1. Natural Laws and Driving an Automobile
              </h4>
              <h5 className="sectionSubheading">
                A. How natural forces affects the movement of an automobile
              </h5>
              <p className="courseText">
                Natural laws, such as friction and gravity influence the
                movement and safety of cars on the road. Friction is the force
                that resists the motion of objects in contact, and it allows the
                tires to grip the road and provide traction for acceleration,
                deceleration, and maneuvering. When the road conditions are wet
                or icy, the friction is low, and the vehicle can lose control,
                skid, or slide. Gravity is the force that pulls objects toward
                the Earth, affecting how the car moves on slopes or inclines.
                Driving uphill requires more power and engine strength to
                overcome gravity while driving downhill requires proper braking
                techniques to prevent gravity from increasing the speed of the
                vehicle.
              </p>
              <h6 className="sectionSubheading">
                Natural laws enforce themselves
              </h6>
              <p className="courseText">
                Natural laws are self-enforcing, meaning that they have built-in
                consequences that occur automatically when they are disregarded
                or misjudged. For instance, if a driver fails to consider the
                force of friction and drives at high speeds on a wet or slippery
                road, the consequences can be severe. Reduced traction due to
                inadequate friction can lead to loss of control, causing the
                vehicle to skid or hydroplane, putting the driver, passengers,
                and others on the road at risk.
              </p>
              <p className="courseText">
                Likewise, misjudging the force of gravity can have dire
                consequences. Failing to take into account the impact of gravity
                when driving downhill, for example, can result in the vehicle
                gaining excessive speed, making it challenging to stop or
                maintain control. Disregarding gravity's resistance when driving
                uphill without appropriate power or gear selection can lead to
                engine strain or even stalling, posing safety hazards.
              </p>
              <h6 className="sectionSubheading">
                Accidents caused by misjudging natural forces
              </h6>
              <p className="bold">Skidding and loss of control</p>
              <p className="courseText">
                Wet, icy, or slippery road conditions, sharp turns, or sudden
                maneuvers, can cause the vehicle to lose traction and skid or
                slide. This can be prevented by reducing speed, maintaining good
                tire condition, and avoiding abrupt steering inputs.
              </p>
              <p className="bold">Rollover Accidents</p>
              <p className="courseText">
                The vehicle can overturn or rollover due to high-speed curves, a
                high center of gravity, or lateral forces. The driver can
                prevent this by adhering to posted speed limits, reducing speed
                before entering curves, and avoiding sudden lane changes.
              </p>
              <p className="bold">Rear-end collisions</p>
              <p className="courseText">
                You can collide with the vehicle ahead if you fail to maintain a
                safe following distance or rear-end another vehicle at
                intersections or traffic congestion if you underestimate the
                braking time. To prevent this, keep a safe following distance,
                anticipate traffic changes, and avoid distractions while
                driving.
              </p>
              <p className="bold">Run-off Road Accidents</p>
              <p className="courseText">
                The driver can veer off the road while misjudging the force of
                gravity on a downhill slope, or drift off the road while
                overestimating vehicle control during turns. The driver can
                prevent this by using lower gears to control speed downhill,
                avoiding sudden braking, and maintaining focus on the road.
              </p>
              <p className="bold">Overcorrection Accidents</p>
              <p className="courseText">
                The driver can swerve across lanes after overreacting to a skid
                or sudden maneuver or collide with other vehicles or objects
                while attempting to regain control. The driver can prevent this
                by maintaining a firm grip on the steering wheel, steering
                smoothly to correct the vehicle’s position, and avoiding panic
                reactions.
              </p>
              <h5 className="sectionSubheading" id="sectionTwo">
                Section 3.2. The force of gravity
              </h5>
              <iframe
                title="Gravity"
                src="https://drive.google.com/file/d/16Z7Cb7FXgQhRpeRjTOr3t9R8Veg77RAM/preview"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <p className="courseText">
                Gravity is defined as the force that pulls objects toward the
                center of the Earth. In the context of driving, gravity plays a
                significant role in the movement of automobiles.{" "}
              </p>
              <p className="bold">
                Low gears and overcoming gravity while driving uphill and
                downhill
              </p>
              <p className="courseText">
                When driving uphill, gravity acts as resistance, making it more
                challenging for a vehicle to ascend. To overcome this
                resistance, drivers can utilize low gears, such as the lower
                gears in a manual transmission or the "L" or "2" gear in an
                automatic transmission. By downshifting to a lower gear, the
                engine can generate more power, allowing the vehicle to climb
                the incline more effectively. This helps prevent the engine from
                straining and potentially stalling.
              </p>
              <p className="courseText">
                Conversely, when driving downhill, gravity can cause the vehicle
                to gain excessive speed, posing a risk to control. To manage
                this, drivers can use low gear as well. Engaging a lower gear
                while descending helps control the vehicle's speed by utilizing
                engine braking. This reduces the need for constant application
                of the brakes, preventing them from overheating and potentially
                losing effectiveness. By using low gears judiciously, drivers
                can maintain control and stability while driving on inclines.
              </p>
              <p className="bold">
                Use of gears, brakes, and wheel blocks in parking on inclines
              </p>
              <p className="courseText">
                When parking on inclines, gravity poses additional challenges.
                To prevent the vehicle from rolling downhill, drivers should
                utilize various tools and techniques, including:
              </p>
              <p className="courseText">
                <span className="bold">Gears:</span> When parking on an incline,
                engaging the parking brake and leaving the vehicle in gear
                (usually the first or reverse gear for manual transmissions, or
                "P" for automatic transmissions) adds an extra layer of
                security. This prevents the vehicle from rolling freely, as the
                engine and transmission resistance help hold it in place.
              </p>
              <p className="courseText">
                <span className="bold">Brakes:</span> The parking brake or
                emergency brake should always be engaged when parking on
                inclines, regardless of whether the vehicle is in gear. This
                provides an additional mechanical restraint against gravity and
                helps prevent unintended movement.
              </p>
              <p className="courseText">
                <span className="bold">Wheel blocks:</span> In situations where
                the incline is particularly steep or for added precaution,
                placing wheel blocks or chocks behind the wheels can provide
                extra stability. Wheel blocks are wedges or blocks placed
                against the tires to prevent the vehicle from rolling.{" "}
              </p>
              <h5 className="sectionSubheading">
                Section 3.3. Inertia and Energy
              </h5>
              <iframe
                title="inertial"
                src="https://drive.google.com/file/d/1mr2xf5l6ompDMARt7a_BmBV766lsL3bO/preview"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <h5 className="bold">A. Inertial</h5>
              <p className="courseText">
                Inertia is the property inherent in matter that, if an object is
                at rest, it tends to remain at rest, and if an object is in
                motion, it tends to stay in motion unless acted upon by an
                external force. This fundamental law of physics highlights the
                tendency of objects to maintain their current state until
                influenced by an outside factor.
              </p>
              <p className="bold">
                Counteracting inertia's effects with seat belts
              </p>
              <p className="courseText">
                Seat belts are essential safety devices designed to counteract
                the effects of inertia in the event of sudden deceleration or a
                collision. When a vehicle rapidly slows down or stops, the
                occupants inside it tend to continue moving at the original
                speed due to inertia. Seat belts apply restraining forces to
                occupants, helping to minimize the risk of injury by preventing
                them from colliding with the vehicle's interior or being ejected
                from the vehicle.
              </p>
              <h5 className="sectionSubheading">B. Potential Energy</h5>
              <p className="courseText">
                Potential energy refers to the energy possessed by an object due
                to its position or form. It represents the ability of an object
                to do work based on its stored energy, which can be released or
                converted into other forms of energy. Examples of potential
                energy related to driving include a car parked on a hill, where
                the elevated position of the car grants it potential energy and
                a battery that holds potential energy in the chemical form.
              </p>
              <h5 className="sectionSubheading">C. kinetic Energy</h5>
              <p className="courseText">
                Kinetic energy is the energy possessed by a moving object due to
                its motion. It depends on the object's mass and velocity. The
                faster an object moves or the more massive it is, the greater
                its kinetic energy. Kinetic energy is a key factor in driving
                dynamics and collisions.
              </p>
              <iframe
                title="kinetic Energy"
                src="https://drive.google.com/file/d/1PUzDoiiStAL8Y27Qe5uUF2knUgGzXtwX/preview"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <p className="bold">Effects of kinetic energy on driving</p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">
                    Doubling speed quadruples kinetic energy:
                  </span>{" "}
                  Kinetic energy increases exponentially with speed. When the
                  speed of a vehicle doubles, its kinetic energy quadruples,
                  highlighting the substantial impact that speed has on the
                  energy associated with the moving vehicle
                </li>
                <li className="courseText">
                  <span className="bold">
                    The force of gravity decreases the effect of kinetic energy
                    as a car moves uphill:{" "}
                  </span>
                  When a vehicle moves uphill against gravity, the force of
                  gravity acts as resistance, reducing the effect of kinetic
                  energy. This resistance requires the vehicle's engine to work
                  harder to overcome gravity's pull
                </li>
                <li className="courseText">
                  <span className="bold">
                    The force of gravity increases the effect of kinetic energy
                    as a car moves downhill:
                  </span>
                  When a vehicle moves downhill, the force of gravity aids the
                  vehicle's motion, increasing the effect of kinetic energy. The
                  vehicle gains speed more rapidly due to the additional
                  gravitational force, requiring the driver to manage and
                  control the increased energy.
                </li>
                <li className="courseText">
                  <span className="bold">
                    A moving automobile can be stopped by applying the brakes,
                    thus transferring kinetic energy into heat energy:
                  </span>
                  When brakes are applied to a moving vehicle, the friction
                  between the brake system and the wheels converts the vehicle's
                  kinetic energy into heat energy. This process allows the
                  vehicle to slow down and eventually come to a stop.
                </li>
                <li className="courseText">
                  <span className="bold">
                    In a collision, kinetic energy is dissipated into energy and
                    heat:
                  </span>{" "}
                  During a collision, the kinetic energy of the vehicles
                  involved is transferred and dissipated as energy and heat. The
                  severity of the collision is directly related to the amount of
                  kinetic energy involved, emphasizing the importance of
                  managing speed and maintaining control to minimize the impact
                  of collisions.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Section 3.4 The Force of Friction
              </h5>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
              <p className="courseText"></p>
            </div>
          )}
          <NextButton />
        </div>
      </div>
    </div>
  );
}
