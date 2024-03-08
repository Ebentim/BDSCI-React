import { NavButtons } from "../Assets/next";
import { useState } from "react";
import Three from "../quizes/Three";

const sections = {
  sectionOne: "Natural Laws and Driving an Automobile",
  sectionTwo: "The Force of Gravity",
  sectionThree: "Inertial and Energy",
  sectionFour: "The Forces of Friction",
  sectionFive: "Centripetal and Centrifugal Force",
  sectionSix: "Force of Impact",
};
export default function ChapterThree() {
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
    <div className="courseBody" id="three">
      <h3 className="bold unitHeading">
        Unit Three: Natural Forces Affecting the Driver
      </h3>
      {showQuiz ? (
        <Three />
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
              <h4 className="sectionHeading" id="sectionTwo">
                Section 3.2. The force of gravity
              </h4>
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
              <h4 className="sectionHeading" id="sectionThree">
                Section 3.3. Inertia and Energy
              </h4>
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
              <h4 className="sectionHeading" id="sectionFour">
                Section 3.4 The Force of Friction
              </h4>
              <iframe
                src="https://drive.google.com/file/d/1hEDCl58bB5k6_EXXkK5KiqhsbwxL_7Hk/preview"
                allow="autoplay"
                className="courseVideo"
                title="The force of friction"
              ></iframe>
              <p className="courseText">
                Friction is the force that resists the movement or sliding of
                one surface over another. It occurs when two objects come into
                contact and rub against each other, creating resistance that
                opposes their relative motion.
              </p>
              <h5 className="sectionSubheading">
                Friction in starting, moving, and Turning
              </h5>
              <p className="courseText">
                <span className="bold">
                  Friction between the tires and the road:{" "}
                </span>
                The friction between the tires and the road surface is crucial
                for starting, moving, and turning a vehicle. Adequate tire grip
                and traction enable the tires to propel the vehicle forward,
                maintain control during maneuvers, and facilitate responsive
                steering.
              </p>
              <p className="courseText">
                <span className="bold">
                  The friction of the engaged clutch:{" "}
                </span>
                In vehicles with manual transmissions, the clutch engages and
                disengages the engine's power to the transmission. Friction
                between the clutch plate and the flywheel allows for a smooth
                transfer of power and control over the vehicle's acceleration
                and speed.
              </p>
              <p className="bold">Friction in stopping</p>
              <p className="courseText">
                <span className="bold">Between the brake lining and drum:</span>{" "}
                When the brakes are applied, friction is generated between the
                brake lining (pads or shoes) and the brake drum or rotor. This
                friction converts the kinetic energy of the moving vehicle into
                heat energy, ultimately resulting in the vehicle's deceleration
                or stopping.
              </p>
              <p className="courseText">
                <span className="bold">Between the tires and the road:</span>{" "}
                The friction between the tires and the road surface is crucial
                for effective braking. It allows the tires to grip the road,
                providing the necessary traction for the braking system to slow
                down or stop the vehicle safely.
              </p>
              <h5 className="sectionSubheading">
                Road, brake, and tire conditions affecting the amount of
                friction:
              </h5>
              <p className="courseText">
                Various factors can influence the amount of friction present:
              </p>
              <ul>
                <li className="courseText">
                  <span className="bold">Road surface conditions:</span> Wet,
                  icy, or slippery surfaces reduce tire grip and increase the
                  likelihood of skidding or sliding due to reduced friction.
                </li>
                <li className="courseText">
                  <span className="bold">Brake condition:</span> Worn brake
                  linings or insufficient brake fluid can diminish the friction
                  between the braking components, resulting in longer stopping
                  distances and reduced braking effectiveness.
                </li>
                <li className="courseText">
                  <span className="bold">Tire condition:</span> Worn or
                  improperly inflated tires can reduce the friction between the
                  tires and the road, compromising traction and control.
                </li>
              </ul>
              <h5 className="sectionSubheading">
                Excessive wear due to friction
              </h5>
              <p className="courseText">
                <span className="bold">
                  Tires - traction secured by the tread of the tire and road
                  surface:
                </span>{" "}
                Friction between the tire tread and the road surface provides
                traction and stability. However, excessive friction can lead to
                tire wear. Regular inspection and maintenance of tire tread
                depth, proper inflation, and rotation help ensure optimal
                friction for safe driving.
              </p>
              <p className="courseText">
                <span className="bold">
                  Moving parts of the automobile other than tires:
                </span>{" "}
                Friction between moving parts, such as engine components,
                transmission gears, and suspension parts, can generate heat and
                wear over time. Proper lubrication and maintenance help minimize
                friction, reducing wear and improving overall vehicle
                performance.
              </p>
              <h5 className="sectionSubheading">
                Friction reduction through lubrication
              </h5>
              <p className="courseText">
                Lubrication is used to reduce friction between moving parts. By
                introducing a lubricating substance, such as oil or grease, to
                the contacting surfaces, it forms a thin film that separates
                them, minimizing direct surface-to-surface contact. This reduces
                friction, heat generation, and wear, promoting smoother
                operation and prolonging the lifespan of the components.
              </p>
              <h4 className="sectionHeading" id="sectionFive">
                Section 3.5: Centrifugal and Centripetal Force
              </h4>
              <p className="courseText">
                Centrifugal force (not a real force) is the reaction to the
                centripetal force, which is the force that keeps an object
                moving in a curved path and prevents it from moving in a
                straight line. It is necessary to hold an object at a fixed
                point in a rotating frame, such as a vehicle negotiating a
                curve.
              </p>
              <h5 className="sectionSubheading">
                Means of affecting centrifugal force
              </h5>
              <p className="courseText">
                When cornering, a bicycle or motorcycle leans toward the inside.
                This action helps to counterbalance the outward force and
                maintain stability while turning.
              </p>
              <h5 className="sectionSubheading">
                Means of affecting centripetal force:
              </h5>
              <ol>
                <p className="courseText">
                  <span className="bold">
                    Reduce speed before entering a curve:
                  </span>{" "}
                  By reducing speed, the centripetal force required to negotiate
                  the curve decreases, making it easier to maintain control and
                  stability.
                </p>
                <p className="courseText">
                  <span className="bold">Build banked curves:</span> Banked
                  curves are sloped or angled surfaces that are designed to
                  provide an additional upward force that assists in
                  counteracting the centrifugal force, allowing vehicles to
                  navigate the curve more safely.
                </p>
                <p className="courseText">
                  <span className="bold">
                    Brake gradually and gently, if braking is needed while
                    cornering
                  </span>{" "}
                  Sudden or harsh braking while cornering can disrupt the
                  balance between centripetal and centrifugal forces,
                  potentially leading to loss of control. Gradual and gentle
                  braking helps maintain stability and control while negotiating
                  a curve.
                </p>
              </ol>
              <h4 className="sectionHeading" id="sectionSix">
                Section 3.6. Force of Impact
              </h4>
              <iframe
                src="https://drive.google.com/file/d/1TKybHhHDjy5-vc862FrLDBAd1epSW1QU/preview"
                title="Force of impact"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <h5 className="sectionSubheading">
                The force of impact in a collision is determined by several
                factors:
              </h5>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  <span className="bold">Kinetic energy: </span>The force of
                  impact is directly influenced by the kinetic energy of the
                  vehicles involved, which depends on their speed and mass.
                  Greater speed or larger mass results in higher kinetic energy
                  and, consequently, a stronger force of impact.
                </li>
                <li className="courseText">
                  <span className="bold">Vehicle characteristics: </span>Vehicle
                  characteristics such as body rigidity and the presence of
                  "crush zones" affect the force of impact. A rigid vehicle
                  structure and well-designed crumple zones can absorb and
                  dissipate the energy of impact, reducing the force experienced
                  by the vehicle occupants.
                </li>
                <li className="courseText">
                  The force of impact also depends on the characteristics of the
                  object with which the vehicle collides. The relative speed,
                  mass, and rigidity of both objects influence the resulting
                  force upon impact.
                </li>
              </ol>
            </div>
            <ToQuiz />
            {/* course Contents ends here */}
          </div>
        </div>
      )}
    </div>
  );
}
