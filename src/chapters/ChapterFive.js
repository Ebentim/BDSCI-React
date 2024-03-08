import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Five from "../quizes/Five";
const sections = {
  sectionOne: "Provisional Driver License",
  sectionTwo: "Automobile Ownership and Registration",
  sectionThree: "Traffic Laws for Pedestrian and Drivers",
  sectionFour: "Automobile Equipment",
  sectionFive: "Civil Liability and Financial Responsibility",
  sectionSix: "Criminal Offenses",
};

export default function ChapterFive() {
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
        Unit Five: California Vehicle Code and Rules of the Road
      </h3>
      {!showQuiz ? (
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
              <p className="courseText">
                The California Vehicle Code (CVC) encompasses an extensive range
                of regulations governing the operation of vehicles on public
                roads within the state. It covers areas such as licensing and
                registration, traffic rules, vehicle equipment, and maintenance,
                traffic violations and penalties, pedestrian safety, special
                vehicles and situations, driver responsibilities, and driver
                education. The CVC sets forth rules for obtaining driver's
                licenses, adhering to traffic signals and signs, maintaining
                vehicle safety, yielding to pedestrians, and addressing specific
                scenarios like adverse weather conditions. It's a comprehensive
                legal framework crucial for ensuring safe and lawful driving
                practices throughout California.
              </p>
              <h4 className="sectionHeading" id="sectionOne">
                Section 5.1 Provisional Driver License
              </h4>
              <p className="courseText">
                <span className="bold">Applications (12800 CVC):</span> The
                process of obtaining a provisional driver license begins with
                submitting a completed application to the Driver's License and
                Identification Card Services department, which is a part of the
                California DMV. The application typically requires personal
                information, proof of identity, and payment of the required
                fees.
              </p>
              <p className="courseText">
                <span className="bold">Fee (14900 CVC):</span> To obtain a
                provisional driver license, applicants are required to pay the
                prescribed fee. The fee covers administrative costs associated
                with processing the application and issuing the license.
              </p>
              <p className="courseText">
                <span className="bold">Examination (12803 CVC): </span>As part
                of the provisional driver license application process, you must
                undergo a written knowledge test and a practical driving test.
                These examinations assess your understanding of traffic laws,
                rules of the road, and their ability to safely operate a motor
                vehicle.
              </p>
              <p className="courseText">
                <span className="bold">Temporary license (12509 CVC): </span>
                Upon successfully completing the application process, you may
                receive a temporary driver license. This temporary license
                allows you to legally drive while waiting for your permanent
                provisional driver license to be processed and issued.
              </p>
              <p className="courseText">
                <span className="bold">Instruction permit (12509 CVC): </span>{" "}
                Before obtaining a provisional driver license, you may be
                required to hold an instruction permit. An instruction permit
                allows new drivers to practice driving under the supervision of
                a licensed adult who meets the specified requirements.
              </p>
              <p className="courseText">
                <span className="bold">
                  Provisional driver license (12814.6 CVC):
                </span>
                If you are a minor and you meet all the necessary requirements
                and successfully pass the examinations, you will be issued a
                provisional driver license. This license is issued to drivers
                who are under 18 years old and it comes with certain
                restrictions and conditions.
              </p>
              <p className="courseText">
                <span className="bold">
                  Provisional driver license restrictions (12814.6(b) CVC):
                </span>{" "}
                These restrictions include:
              </p>
              <ul>
                <li className="courseText">
                  <span className="bold">Age Requirement:</span> To obtain a
                  provisional instruction permit, you must be at least 15 1/2
                  but under 18 years old.
                </li>
                <li className="courseText">
                  <span className="bold">Limitations on Driving Hours: </span>
                  Provisional driver license holders are restricted from driving
                  between 11 p.m. and 5 a.m. unless accompanied by a licensed
                  driver over 25 years old.
                </li>
                <li className="courseText">
                  <span className="bold">Passenger Restrictions: </span>During
                  the first 12 months of holding a provisional driver license,
                  you are prohibited from having any passengers under 20 years
                  old in your car unless accompanied by a licensed driver over
                  25 years old or a licensed or certified driving instructor.
                </li>
                <li className="courseText">
                  <span className="bold">Duration of Restrictions: </span>These
                  restrictions last for 12 months or until you turn 18,
                  whichever comes first. In addition to these restrictions, you
                  must also comply with a zero-tolerance policy regarding
                  alcohol or drugs while driving. This means that you must not
                  have any measurable amount of alcohol or drugs in your system
                  while operating a vehicle.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Renewal (12814, 12816 CVC): </span>
                Provisional driver licenses are issued for a limited period of
                12 months. Before the expiration date, drivers must renew their
                licenses by submitting a renewal application and paying the
                required fees. Renewal processes may also include retesting or
                meeting certain criteria.
              </p>
              <p className="courseText">
                <span className="bold">
                  Restricted license (12813, 13360, 14603 CVC) and Medical
                  Conditions:
                </span>{" "}
                In certain situations, you may be eligible for a restricted
                driver license. Restricted licenses are issued when specific
                conditions, such as medical conditions or DUI offenses, require
                limitations on driving privileges. These licenses allow drivers
                to drive under restricted circumstances and conditions. Medical
                conditions that can lead to the suspension or revocation of a
                driver's license by the California DMV include Alzheimer's
                disease, Other forms of dementia, Severe vision problems,
                Epilepsy, Sleep disorders, and Diabetes If you are diagnosed
                with any of these medical conditions or any other condition that
                may affect your ability to drive safely, it is crucial for them
                to take the following steps:
              </p>
              <ul>
                <li className="courseText">
                  <span className="bold">Inform the DMV:</span> you should
                  inform the Department of Motor Vehicles (DMV) about your
                  medical condition. This can be done by submitting the
                  necessary medical information to the DMV.
                </li>
                <li className="courseText">
                  <span className="bold">Provide Medical Information: </span>You
                  need to provide the DMV with relevant medical information
                  related to your condition. This ensures that the DMV is aware
                  of your condition and can make an informed decision regarding
                  your driving privileges.
                </li>
                <li className="courseText">
                  <span className="bold">Evaluation by the DMV:</span>The DMV
                  will evaluate the provided medical information and determine
                  if any restrictions or limitations need to be imposed on your
                  driving privileges.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Issuance of a Restricted License:{" "}
                  </span>
                  If the DMV determines that a restricted license is
                  appropriate, they will issue a license with specific
                  conditions and limitations tailored to the medical condition.
                  These conditions may include restrictions on driving during
                  certain hours, driving only within a specific geographic area,
                  or requiring additional medical evaluations.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">
                  Student license (12650, 12653 CVC):
                </span>{" "}
                Some states may offer student licenses to individuals who are
                enrolled in an approved driver education program. Student
                licenses allow students to practice driving while receiving
                instruction from a licensed driving instructor.
              </p>
              <p className="courseText">
                <span className="bold">
                  Non-resident drivers (12502-12505 CVC):
                </span>{" "}
                Non-resident drivers temporarily residing in California may need
                to obtain a provisional driver license to drive within the
                state. The specific requirements for non-resident drivers can
                vary but generally involve providing necessary documentation and
                meeting California's driving standards. Californians who can
                prove their current legal presence in the United States with
                accepted identity documents are eligible to receive a REAL ID
                driver license or identification (DL/ID) card. If someone
                becomes a California resident, they must obtain a California
                driver license within 10 days.
              </p>
              <p className="courseText">
                In California, a junior permit is available for young
                Californians who are 14 years old but less than 18 years old and
                can show that a hardship forces them to drive alone due to
                family illness, school, work or family enterprise. To apply for
                a Junior Permit, you must fill out the application form DL 120.
                The first milestone on the road to getting your California
                driver’s license (DL) is to obtain your provisional instruction
                permit, sometimes called a “learner’s permit.” This is for
                people who are learning to drive and working on the requirements
                to get a DL.
              </p>
              <p className="courseText">
                <span className="bold">
                  Possession of license (12951 CVC):{" "}
                </span>{" "}
                It is a legal requirement for drivers to possess their valid
                driver license while operating a motor vehicle. Drivers must
                carry their provisional driver license at all times while
                driving and present it upon request by law enforcement officers
                or other authorized personnel.
              </p>
              <h4 className="sectionHeading" id="sectionTwo">
                Section 5.2. Automobile Ownership and Registration
              </h4>
              <p className="courseText">
                <span className="bold">Automobile ownership (4450 CVC): </span>
                Automobile ownership refers to the legal possession and
                responsibility of a motor vehicle. It involves being the
                registered owner of the vehicle and having the necessary
                documentation to prove ownership, such as a title or bill of
                sale.
              </p>
              <p className="courseText">
                <span className="bold">
                  Registration of motor vehicles (4000, 4601, 4602, 4607 CVC):{" "}
                </span>
                The registration of motor vehicles is a process that involves
                registering a vehicle with the appropriate government authority,
                typically the Department of Motor Vehicles (DMV). It requires
                submitting the necessary documents, such as proof of ownership,
                proof of insurance, and payment of registration fees. This
                process ensures that the vehicle is officially recognized by the
                state and is legally allowed to be operated on public roads.
              </p>
              <p className="courseText">
                <span className="bold">
                  Change of address (4159, 4160 CVC):{" "}
                </span>{" "}
                When an individual changes their residential address, they are
                required to update their vehicle registration records. This
                involves notifying the DMV of the new address within a specified
                timeframe of 10 days. Failure to update the address may result
                in delays in receiving important documents, such as registration
                renewal notices or vehicle-related correspondence.
              </p>
              <p className="courseText">
                <span className="bold">Change of motor (4161, 4163 CVC): </span>
                If there are any changes made to the vehicle's engine or motor,
                such as an engine swap or replacement, it is necessary to inform
                the DMV. This ensures that the vehicle's records accurately
                reflect the updated information, including the new motor
                details.
              </p>
              <h5 className="sectionSubheading">Notification Requirement: </h5>
              <ol type="i" className="orderedList">
                <li>
                  When a new engine or motor is installed in a registered
                  vehicle, the vehicle owner is typically required to notify the
                  DMV within 10 days.
                </li>
                <li>
                  This notification is done by completing a form provided by the
                  DMV, which includes detailed information about the installed
                  engine or motor, such as identifying numbers and the date of
                  installation.
                </li>
              </ol>
              <h5 className="sectionSubheading">Required Documentation:</h5>
              <ol type="i" className="orderedList">
                <li>
                  Along with the notification form, the owner must submit the
                  vehicle's certificate of ownership and registration card.
                </li>
                <li>
                  Evidence of ownership for the new or used engine or motor must
                  also be provided.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Vehicle Identification Number (VIN):
              </h5>
              <ol type="i" className="orderedList">
                <li>
                  Upon receiving the notification and required documents, the
                  DMV assigns a unique vehicle identification number (VIN) to
                  the vehicle.
                </li>
                <li>
                  This VIN becomes the official identifier for the vehicle once
                  it is affixed to the vehicle as authorized.
                </li>
                <li>
                  Motorcycles or motor-driven cycles registered under motor
                  numbers are exempt from this requirement.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Inspection for Motorcycle Engine Case Replacement:
              </h5>
              <ol type="i" className="orderedList">
                <li>
                  In the case of replacing an engine case for a motorcycle, the
                  DMV requests an inspection by the California Highway Patrol
                  (CHP) to verify the motorcycle's identity.
                </li>
                <li>
                  If the replacement engine case bears the same identifying
                  numbers as the original one, the owner must destroy the
                  original engine case, and the CHP verifies the proof of
                  destruction.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Exception for Owners of Three or More Motor Vehicles:
              </h5>
              <ol type="i" className="orderedList">
                <li>
                  Section 9257 provides an exception to the notification
                  requirement and fee payment for owners of three or more motor
                  vehicles.
                </li>
                <li>
                  These owners are not obligated to notify the DMV or pay the
                  fee when transferring or installing motor vehicle engines or
                  motors within their owned vehicles, as long as the vehicles
                  are not sold, transferred, or otherwise disposed of by the
                  owner.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  Display of registration (4454 CVC):{" "}
                </span>
                Motor vehicle owners are required to display the current and
                valid registration certificate or registration sticker on their
                vehicle. This provides evidence that the vehicle is properly
                registered and allows law enforcement officers to verify the
                vehicle's compliance with registration requirements.
              </p>
              <p className="courseText">
                <span className="bold">
                  Display of license plates (4460, 5200-5203 CVC):
                </span>{" "}
                License plates, which contain a unique combination of numbers
                and letters, are issued to registered vehicles. It is mandatory
                to securely attach the license plates to the front and rear of
                the vehicle. This allows for easy identification of the vehicle
                by law enforcement and other authorities.
              </p>
              <h4 className="sectionHeading" id="sectionThree">
                Section 5.3. Traffic Laws for Pedestrians and Drivers
              </h4>
              <h5 className="sectionSubheading">
                Pedestrians' rights and duties
              </h5>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  <span className="bold">
                    Right of way at crosswalk (21950 CVC):{" "}
                  </span>
                  Pedestrians have the right of way when crossing at marked or
                  unmarked crosswalks. Drivers must yield to pedestrians and
                  allow them to safely cross the road.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Vehicles stopped for pedestrians (21951 CVC):{" "}
                  </span>
                  When a vehicle has stopped at a marked or unmarked crosswalk
                  to allow a pedestrian to cross, other drivers approaching from
                  behind must also stop and wait until the pedestrian has safely
                  crossed.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Right of way on sidewalk (21952 CVC):{" "}
                  </span>
                  Pedestrians always have the right of way on sidewalks. Drivers
                  must yield to pedestrians and avoid driving on sidewalks,
                  unless it is necessary for authorized purposes.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Tunnel or overhead crossing (21953 CVC):
                  </span>{" "}
                  Pedestrians must use designated tunnels or overhead crossings
                  where provided when crossing a roadway. It is important to
                  follow any posted signs or signals indicating the proper use
                  of these crossings.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Crossing at other than crosswalk (21954 CVC):
                  </span>{" "}
                  If there is no marked or unmarked crosswalk available,
                  pedestrians should cross the road at a right angle to the
                  nearest curb or at a designated pedestrian crossing.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Crossing between controlled intersections (21955 CVC):
                  </span>{" "}
                  Pedestrians should cross the road between controlled
                  intersections only when it is safe to do so and without
                  interfering with the flow of traffic.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Pedestrian on roadway (21956 CVC):
                  </span>{" "}
                  Pedestrians should avoid walking along roadways when sidewalks
                  are available. If walking on the road is necessary,
                  pedestrians should walk on the left side facing traffic.
                </li>
                <li className="courseText">
                  <span className="bold"> Hitchhiking (21957 CVC):</span>{" "}
                  Hitchhiking, or soliciting rides from passing vehicles, is
                  prohibited on roadways.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Skiing and tobogganing on roadway (21959 CVC):
                  </span>{" "}
                  Skiing or tobogganing on roadways is not allowed, as it poses
                  a risk to the safety of both pedestrians and drivers.
                </li>
                <li className="courseText">
                  <span className="bold">Freeways (21960 CVC):</span>{" "}
                  Pedestrians, including hitchhikers, are prohibited from
                  entering or walking on freeways.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Local regulation of pedestrians (21961 CVC):
                  </span>{" "}
                  Local authorities may establish additional regulations or
                  ordinances pertaining to pedestrian rights and duties, as long
                  as they are consistent with state traffic laws.
                </li>
              </ol>
              <h5 className="sectionSubheading">Basic Laws for Drivers</h5>
              <p className="courseText">
                <span className="bold">Speeding (22349-22352): </span>The
                California Vehicle Code, Section 22356 establishes that the
                maximum speed limit on highways is 65 miles per hour unless a
                different speed limit is posted. However, on two-lane, undivided
                highways, the speed limit is generally set at 55 miles per hour,
                unless otherwise indicated based on an engineering and traffic
                survey. The Legislature aims to ensure appropriate signage for
                the 55 miles-per-hour speed limit on affected two-lane,
                undivided highways, including signs at county boundaries and
                other suitable locations.
              </p>
              <p className="courseText">
                In regards to the basic speed law, as outlined in Section 22352
                of the California Vehicle Code, the speed of a vehicle within
                the specified limits or as authorized by the code is considered
                lawful, unless proven to be in violation of the basic speed law.
                Exceeding the prima facie speed limits stated in Section 22352
                is considered prima facie unlawful, unless the defendant can
                provide competent evidence demonstrating that the speed did not
                violate the basic speed law at the specific time, place, and
                under the prevailing conditions. <br />
                The prima facie speed limits are further defined as follows:
              </p>
              <ul>
                <li className="courseText">
                  A speed limit of fifteen miles per hour is applicable when
                  crossing a railway grade crossing without a clear view or when
                  approaching an intersection without a clear view of the
                  intersection or traffic.
                </li>
                <li className="courseText">
                  A speed limit of twenty-five miles per hour applies in
                  business or residence districts, when passing a school
                  building or grounds, or when passing a senior center or
                  facility primarily used by senior citizens.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Red means “Stop” (21453):</span> The
                California Vehicle Code specifies that, when a driver encounters
                a steady circular red signal, they must come to a complete stop
                at the marked limit line. If there is no limit line, the driver
                must stop before entering the crosswalk or the intersection
                itself. The driver must remain stopped until they receive an
                indication to proceed, with an exception mentioned in
                subdivision (b)
              </p>
              <p className="courseText">
                Subdivision (b) states that after stopping at a steady circular
                red signal, drivers may make a right turn or a left turn from a
                one-way street onto another one-way street, unless there is a
                sign prohibiting the turn. However, the driver must yield the
                right-of-way to pedestrians in adjacent crosswalks and to any
                approaching vehicle that poses an immediate hazard. The driver
                should continue yielding to the approaching vehicle until it is
                safe to proceed.
              </p>
              <p className="courseText">
                If a driver is facing a steady red arrow signal, they are not
                allowed to enter the intersection for the indicated movement.
                The driver must stop at a marked limit line, or if there is
                none, before entering the crosswalk or the intersection. The
                driver must remain stopped until they receive an indication that
                permits movement.
              </p>
              <p className="courseText">
                In the case of pedestrians, unless directed by a pedestrian
                control signal, a pedestrian facing a steady circular red or red
                arrow signal must not enter the roadway.
              </p>
              <p className="courseText">
                <span className="bold">Right of Way (21800-21806): </span>
              </p>
              <h6 className="sectionSubheading">
                a. When approaching an intersection:
              </h6>
              <ul>
                <li className="courseText">
                  A driver must yield the right-of-way to vehicles that have
                  entered the intersection from a different highway.
                </li>
                <li className="courseText">
                  If two vehicles enter an intersection at the same time, the
                  driver on the left must yield to the driver on the immediate
                  right, except when the left-turning vehicle is on a
                  terminating highway.
                </li>
                <li className="courseText">
                  If stop signs control the intersection from all directions,
                  the driver on the left must yield to the driver on the
                  immediate right.
                </li>
                <li className="courseText">
                  If the traffic control signals are inoperative, the driver
                  must stop, exercise caution, and proceed when safe to do so.
                </li>
                <li className="courseText">
                  These rules do not apply at intersections controlled by
                  traffic signals, yield signs, or when vehicles are approaching
                  each other from opposite directions with one intending to make
                  a left turn.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                b. When making a left turn or U-turn:
              </h6>
              <ul>
                <li className="courseText">
                  The driver must yield the right-of-way to approaching vehicles
                  that pose a hazard.
                </li>
                <li className="courseText">
                  After yielding, the driver can proceed to turn left or
                  complete the U-turn, and other approaching vehicles must yield
                  the right-of-way.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                c. At stop sign-controlled intersections:
              </h6>
              <ul>
                <li className="courseText">
                  The driver must stop, yield the right-of-way to vehicles from
                  another highway or those constituting an immediate hazard, and
                  proceed when safe.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                d. At yield right-of-way sign-controlled intersections:
              </h6>
              <ul>
                <li className="courseText">
                  The driver must yield the right-of-way to vehicles that have
                  entered the intersection or are approaching closely enough to
                  pose an immediate hazard, and proceed when safe.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                e. When entering or crossing a highway from any public or
                private property, or an alley:
              </h6>
              <ul>
                <li className="courseText">
                  The driver must yield the right-of-way to approaching traffic
                  that poses an immediate hazard and proceed when safe.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                f. At designated equestrian crossings:
              </h6>
              <ul>
                <li className="courseText">
                  Drivers must yield the right-of-way to horseback riders, but
                  riders also have a duty to exercise due care for their own
                  safety.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                g. When an authorized emergency vehicle with sirens and red
                lights approaches:
              </h6>
              <ul>
                <li className="courseText">
                  Surrounding traffic must yield the right-of-way by driving to
                  the right-hand edge or curb of the highway and stopping until
                  the emergency vehicle has passed.
                </li>
                <li className="courseText">
                  Streetcar operators and pedestrians should also yield to the
                  emergency vehicle and proceed to the nearest curb or place of
                  safety.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Unsafe lane changes (21658 CVC): </span>
                When a roadway is divided into multiple marked lanes for one-way
                traffic, vehicles should be driven within a single lane as much
                as possible, and drivers must obey official signs directing
                slow-moving traffic or allocating specific lanes for traffic
                moving in the same direction.
              </p>
              <p className="courseText">
                <span className="bold">Left turns and turns (21801 CVC):</span>{" "}
                When intending to make a left turn or U-turn, the driver must
                yield the right-of-way to approaching vehicles from the opposite
                direction that could pose a hazard during the turning movement.
                After yielding and signaling as required, the driver may proceed
                with the left turn or U-turn, and drivers approaching the
                intersection or entrance from the opposite direction must yield
                the right-of-way to the turning vehicle.
              </p>
              <p className="courseText">
                <span className="bold">
                  Following too closely (21703 CVC):{" "}
                </span>
                Drivers must maintain a reasonable and prudent distance between
                their vehicle and the one in front, considering the speed,
                traffic, and condition of the roadway.
              </p>
              <p className="courseText">
                <span className="bold">Slow-moving vehicles (21654 CVC): </span>{" "}
                Drivers traveling at a speed slower than the normal flow of
                traffic must drive in the right-hand lane or as close to the
                right-hand edge or curb as possible, except when overtaking or
                preparing for a left turn. Failure to do so is considered
                evidence of a violation. The Department of Transportation and
                local authorities have the authority to place signs directing
                slow-moving traffic to use the right-hand lane, except for
                passing or turning.
              </p>
              <h5 className="sectionSubheading">Other Important Laws</h5>
              <p className="courseText">
                <span className="bold">Signaling (20107-20111 CVC):</span> Two
                important laws for drivers in California are Vehicle Code §
                22107 CVC and Vehicle Code § 22111 CVC, which relate to safe
                lane changes and proper signaling.
              </p>
              <p className="courseText">
                <span className="bold">a. Vehicle Code § 22107 CVC:</span> This
                law prohibits unsafe lane changes. Drivers are required to
                change lanes only when it is safe to do so and after signaling.
                Violating this law is considered an infraction and can result in
                a fine of $238.00 plus court costs. Additionally, one point is
                assessed on the driver's DMV driving record for failing to
                signal.
              </p>
              <p className="courseText">
                <span className="bold">Vehicle Code § 22111 CVC: </span>This law
                mandates the use of proper hand signals when changing lanes or
                making turns. Drivers must use hand signals in accordance with
                this law to indicate their intent to change lanes or make a
                turn. Failing to comply with this law can result in two
                penalties: a fine of $238.00 and one point assessed on the
                driver's DMV driving record.
              </p>
              <h5 className="sectionSubheading">
                Overtaking and passing (21750-21755 CVC)
              </h5>
              <ul>
                <li className="courseText">
                  Drivers must pass on the left side of the roadway at a safe
                  distance without interfering with the safe operation of the
                  overtaken vehicle.
                </li>
                <li className="courseText">
                  On a two-lane highway, drivers should ensure clear visibility
                  and absence of oncoming traffic before passing on the left.
                </li>
                <li className="courseText">
                  Driving to the left side of the roadway is prohibited in
                  certain situations, such as when approaching curves or grades
                  with obstructed views.
                </li>
                <li className="courseText">
                  The driver of an overtaken vehicle must safely move to the
                  right side of the highway to allow the overtaking vehicle to
                  pass.
                </li>
                <li className="courseText">
                  The overtaken vehicle should not increase its speed until it
                  is completely passed by the overtaking vehicle.
                </li>
                <li className="courseText">
                  Passing on the right is permitted under specific conditions,
                  such as when the overtaken vehicle is making a left turn or on
                  a one-way street.
                </li>
                <li className="courseText">
                  Overtaking and passing on the right should be done safely
                  without leaving the paved or main-traveled portion of the
                  roadway.
                </li>
              </ul>
              <h5 className="sectionSubheading">
                Turning movements into or out of traffic (22100-22105 CVC)
              </h5>
              <h6 className="sectionSubheading">a. Right Turns:</h6>
              <p className="courseText">To make a right turn</p>
              <ul>
                <li className="courseText">
                  Drive close to the right edge of the road. If a designated
                  right turn lane is available, enter at the opening.
                  Additionally, you’re allowed to drive in a bike lane within
                  200 feet of the turn, but always check for bicyclists in your
                  blind spots.
                </li>
                <li className="courseText">
                  Watch for pedestrians, bicyclists, or motorcyclists between
                  your vehicle and the curb.
                </li>
                <li className="courseText">
                  Start signaling about 100 feet before the turn.
                </li>
                <li className="courseText">
                  Look over your right shoulder and reduce your speed.
                </li>
                <li className="courseText">
                  {" "}
                  Stop behind the limit line. If there is no limit line, stop
                  before you enter the crosswalk. If there is no crosswalk, stop
                  before you enter the intersection.{" "}
                </li>
                <li className="courseText">
                  Look both ways (left-right-left) and turn when it is safe.
                </li>
                <li className="courseText">
                  Complete your turn in the right lane. Do not turn wide into
                  another lane.
                </li>
              </ul>
              <h6 className="sectionSubheading">b. Left Turns:</h6>
              <ul>
                <li className="courseText">
                  Approach the turn as close as possible to the left-hand edge
                  of the left lane or portion of the roadway.
                </li>
                <li className="courseText">
                  Complete the turn in a lane available for traffic moving in
                  the intended direction.
                </li>
                <li className="courseText">
                  Exceptions apply for left turns at intersections with specific
                  lane configurations.
                </li>
              </ul>
              <h6 className="sectionSubheading">c. U-turns:</h6>
              <ul>
                <li className="courseText">
                  Generally prohibited at intersections controlled by traffic
                  signals
                </li>
                <li className="courseText">
                  Allowed only from the far left lane of traffic in the
                  direction of travel.
                </li>
                <li className="courseText">
                  U-turn regulations may vary in business districts, residence
                  districts, and near fire station entrances.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                d. Authority to Regulate Turns:
              </h6>
              <ul>
                <li className="courseText">
                  The Department of Transportation or local authorities have the
                  authority to regulate or prohibit turning movements at
                  intersections.
                </li>
                <li className="courseText">
                  This is done through the use of official traffic control
                  devices and signs.
                </li>
              </ul>
              <h6 className="sectionSubheading">
                e. Prohibition of U-turns on Highways:
              </h6>
              <ul>
                <li className="courseText">
                  U-turns on highways are prohibited if there is not an
                  unobstructed view for 200 feet in both directions.
                </li>
              </ul>
              <h5 className="sectionSubheading">
                Stopping, standing or parking (22500, 22502, 22504, CVC)
              </h5>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  Stopping, parking, or leaving a vehicle is generally
                  prohibited in specific locations unless necessary to avoid
                  traffic conflicts or comply with the directions of a peace
                  officer or traffic control device.
                </li>
                <li className="courseText">
                  Prohibited locations include intersections, crosswalks (with
                  exceptions for buses and taxis), safety zones, fire station
                  driveways, public or private driveways, sidewalks (with
                  exceptions for electric carts), street or highway excavations
                  or obstructions, and the roadway side of parked vehicles.
                </li>
                <li className="courseText">
                  Parking regulations differ for different types of roads, such
                  as one-way or two-way roadways, and may require parallel
                  parking with specified distances from curbs.
                </li>
                <li className="courseText">
                  Commercial vehicles may have variations from parking
                  requirements if necessary for loading or unloading, but not in
                  the opposite direction of traffic flow.
                </li>
                <li className="courseText">
                  Local authorities may enact ordinances to prohibit commercial
                  vehicles from parking more than 18 inches from the curb in
                  business districts, with appropriate signage.
                </li>
                <li className="courseText">
                  Certain vehicles, such as those of public utilities or engaged
                  in repair or maintenance activities, may be exempt from
                  parking regulations.
                </li>
                <li className="courseText">
                  U-turns are generally prohibited in front of fire station
                  entrances and where there is insufficient visibility or in
                  certain designated areas.
                </li>
                <li className="courseText">
                  The City of Long Beach has a pilot program allowing left-hand
                  parallel parking on specific residential streets, subject to
                  certain conditions and reporting requirements.
                </li>
                <li className="courseText">
                  When designating school bus stops, clear visibility and
                  adequate signage must be ensured, and stops should not be
                  located on divided or multiple-lane highways unless traffic is
                  controlled.
                </li>
                <li className="courseText">
                  In unincorporated areas, vehicles should be parked off the
                  roadway whenever practicable, leaving an unobstructed width
                  for other vehicles to pass and ensuring clear visibility.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Traffic signs, signals, and road markings (21450-21462 CVC)
              </h5>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  Drivers must come to a complete stop at stop signs before
                  entering an intersection. If there is a limit line or
                  crosswalk, the stop should be made at or before these
                  markings.
                </li>
                <li className="courseText">
                  At railroad grade crossings, drivers must stop before crossing
                  the first track or entrance and proceed only when it is safe
                  to do so. It is also prohibited to go through or around a
                  closed crossing gate.
                </li>
                <li className="courseText">
                  Certain vehicles, such as buses, school buses, and vehicles
                  carrying hazardous materials, have specific requirements for
                  approaching and crossing railroad grade crossings.
                </li>
                <li className="courseText">
                  Local authorities have the power to place stop signs at any
                  location on a highway where it would enhance traffic safety.
                </li>
                <li className="courseText">
                  Failure to stop at a railroad grade crossing as required shall
                  not be attributed to passengers for hire in the vehicle.
                </li>
                <li className="courseText">
                  Drivers must stop when meeting or overtaking a school bus that
                  is loading or unloading children and display flashing red
                  lights and a stop signal arm. Exceptions apply on divided or
                  multiple-lane highways.
                </li>
                <li className="courseText">
                  A person who violates the school bus stop requirement may be
                  reported by the bus driver, resulting in a warning letter
                  issued by the local law enforcement agency.
                </li>
                <li className="courseText">
                  Penalties for violating the school bus stop requirement
                  include fines and potential suspension of the driver's
                  license.
                </li>
                <li className="courseText">
                  Vending from a commercial vehicle on a street in a residential
                  district requires the vehicle to come to a complete stop and
                  lawfully park adjacent to the curb.
                </li>
                <li className="courseText">
                  Additional regulations governing the type and manner of
                  vending from vehicles on streets may be adopted by local
                  authorities.
                </li>
                <li className="courseText">
                  Ice cream trucks engaged in vending in residential areas must
                  be equipped with signs warning of children crossing. They are
                  prohibited from vending under certain conditions, such as on
                  streets with high speed limits or within a certain distance of
                  an intersection with a high-speed opposing highway.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Stopping at streetcar or bus loading zones (21756 CVC)
              </h5>
              <p className="courseText">
                When a driver is overtaking an interurban electric or streetcar
                that is stopped or about to stop for passenger boarding or
                alighting:
              </p>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  The driver must stop their vehicle behind the nearest running
                  board or door of the car.
                </li>
                <li className="courseText">
                  The driver must remain standing until all passengers have
                  boarded or alighted and reached a place of safety.
                </li>
                <li className="courseText">
                  Exceptions to stopping are allowed in certain situations such
                  as mentioned below.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Exceptions to stopping requirement:
              </h5>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  If a safety zone has been established or at a controlled
                  intersection, a vehicle can pass the interurban electric or
                  streetcar without stopping.
                </li>
                <li className="courseText">
                  The vehicle must proceed at a speed not exceeding 10 miles per
                  hour and exercise caution for pedestrian safety.
                </li>
                <li className="courseText">
                  When a trolley coach or bus has stopped at a safety zone to
                  receive or discharge passengers:
                </li>
                <li className="courseText">
                  A vehicle can pass the trolley coach or bus at a speed not
                  exceeding 10 miles per hour.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Stopping when school buses are loading or unloading (22454 CVC){" "}
              </h5>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  When approaching or overtaking a school bus from either
                  direction that is stopped for loading or unloading school
                  children and displays flashing red lights and a stop signal
                  arm:
                  <ol type="i">
                    <li className="courseText">
                      The driver of any vehicle must come to a stop before
                      passing the school bus.
                    </li>
                    <li className="courseText">
                      The vehicle cannot proceed past the school bus until the
                      flashing red lights and stop signal arm cease operation.
                    </li>
                  </ol>
                </li>
                <li className="courseText">
                  On a divided highway or multiple-lane highway, the driver does
                  not need to stop when meeting or passing a school bus on the
                  other roadway.
                </li>
                <li className="courseText">
                  A multiple-lane highway refers to a highway with two or more
                  lanes of travel in each direction.
                </li>
                <li className="courseText">
                  If a driver is observed overtaking a school bus in violation
                  of the above rules and the school bus driver witnesses the
                  violation:
                  <ol type="i">
                    <li className="courseText">
                      The school bus driver can report the violation within 24
                      hours to the local law enforcement agency, providing the
                      vehicle license plate number, description, and the time
                      and place of the violation.
                    </li>
                    <li className="courseText">
                      The law enforcement agency will issue a warning letter to
                      the registered owner of the vehicle.
                    </li>
                    <li className="courseText">
                      The warning letter does not go on the driver's record, but
                      other penalties may still apply.
                    </li>
                  </ol>
                </li>
                <li className="courseText">
                  This section also applies to roadways on private property.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Other special stops (22450-22452 CVC)
              </h5>
              <ol type="1" className="orderedList">
                <li className="courseText">
                  When approaching a stop sign at an intersection, drivers must
                  come to a complete stop at the limit line or before entering
                  the crosswalk if there is no limit line. If there is no
                  crosswalk, the stop should be made at the entrance to the
                  intersecting roadway.
                </li>
                <li className="courseText">
                  At railroad grade crossings, drivers must stop at the limit
                  line or before crossing the first track or entrance to the
                  crossing.
                </li>
                <li className="courseText">
                  Local authorities have the power to install stop signs at
                  locations where they would enhance traffic safety.
                </li>
                <li className="courseText">
                  When approaching a railroad or rail transit grade crossing,
                  drivers and pedestrians must stop at least 15 feet from the
                  nearest rail and wait until it is safe to proceed. It is
                  prohibited to cross a closed railroad or rail transit crossing
                  gate.
                </li>
                <li className="courseText">
                  Certain vehicles, such as buses, trucks carrying employees,
                  school buses, and vehicles transporting hazardous materials,
                  have specific requirements at railroad grade crossings,
                  including stopping and checking for approaching trains.
                </li>
                <li className="courseText">
                  Other commercial vehicles must approach railroad grade
                  crossings at a speed that allows them to stop before reaching
                  the nearest rail and must exercise caution before crossing.
                </li>
                <li className="courseText">
                  There are exceptions to the requirement to stop at railroad
                  crossings in certain situations, such as when tracks run along
                  a roadway in a business or residence district, when directed
                  by a traffic officer or traffic control signal, or when
                  authorized by specific signs or exemptions.
                </li>
                <li className="courseText">
                  The Department of Transportation or local authorities can
                  place official railroad crossing stop-exempt signs.
                </li>
                <li className="courseText">
                  School buses and school pupil activity buses transporting
                  school pupils are subject to additional regulations at
                  railroad grade crossings.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Duty to stop, give reasonable assistance, and report accidents
                (20001-20006, 20008, 20009 CVC){" "}
              </h5>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">
                    Drivers involved in accidents must stop at the scene:
                  </span>
                  If a driver is involved in an accident in California, whether
                  it results in injury, death, or property damage, they are
                  legally required to stop at the scene of the accident.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Drivers must provide their information:
                  </span>
                  When involved in an accident, drivers are mandated to provide
                  their identification and contact information to the other
                  parties involved. This includes their name, address, and
                  vehicle registration number.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Drivers must offer reasonable assistance:
                  </span>{" "}
                  In addition to providing their information, drivers are also
                  expected to offer reasonable assistance to any injured
                  individuals at the accident scene. This may include calling
                  for emergency medical services or providing basic first aid,
                  if necessary.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Accidents must be reported to authorities:
                  </span>{" "}
                  It is a legal obligation for drivers to report the accident to
                  the appropriate authorities. In California, this typically
                  involves contacting local law enforcement or the California
                  Highway Patrol to inform them about the incident.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Alternative identification is accepted:
                  </span>
                  If a driver does not have their driver's license in their
                  possession at the time of the accident, they are still
                  required to provide valid identification. Acceptable forms of
                  identification include any other official document that can
                  establish their identity.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Supplementary reports may be requested :{" "}
                  </span>
                  The California Highway Patrol has the authority to request
                  additional reports from drivers, vehicle owners, or witnesses
                  involved in the accident if deemed necessary. These
                  supplemental reports may be required to provide further
                  details or clarify any discrepancies in the initial accident
                  report.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Non-compliance can lead to criminal penalties :{" "}
                  </span>
                  Failure to comply with these legal requirements can have
                  serious consequences. Drivers who do not stop at the scene,
                  provide information, or report the accident can face criminal
                  penalties, which may include imprisonment and fines.
                </li>
              </ol>
              <h5 className="sectionSubheading">Bicycles (21200-21212 CVC)</h5>
              <ol className="orderedList">
                <li className="courseText">
                  Bicyclists have the same rights and responsibilities as motor
                  vehicle drivers and must obey traffic laws, including those
                  related to driving under the influence.
                </li>
                <li className="courseText">
                  {" "}
                  Peace officers on bicycles are exempt from certain provisions
                  of the code while performing their duties but must prioritize
                  safety.
                </li>
                <li className="courseText">
                  Bicycles must have brakes, handlebars at a reasonable height,
                  and a size that allows the rider to safely stop, support, and
                  restart the bicycle.
                </li>
                <li className="courseText">
                  {" "}
                  During nighttime riding, bicycles must be equipped with
                  lights, reflectors, and reflective material for visibility.
                </li>
                <li className="courseText">
                  Bicyclists are generally required to ride as close as
                  practicable to the right-hand curb or edge of the roadway,
                  except in specific situations such as overtaking, turning, or
                  to avoid hazardous conditions.
                </li>
                <li className="courseText">
                  Motor vehicles are prohibited from driving in bicycle lanes,
                  except for certain circumstances.
                </li>
                <li className="courseText">
                  Bicyclists are encouraged to use designated bicycle lanes when
                  available but may leave the lane when necessary.
                </li>
                <li className="courseText">
                  Bicyclists are encouraged to use designated bicycle lanes when
                  available but may leave the lane when necessary.
                </li>
                <li className="courseText">
                  It is illegal to attach a bicycle or oneself to a streetcar or
                  vehicle on the roadway.
                </li>
                <li className="courseText">
                  Proper parking of bicycles and avoiding obstruction of
                  pedestrian traffic is required.
                </li>
                <li className="courseText">
                  Individuals under 18 years old must wear a properly fitted and
                  fastened bicycle helmet while operating a bicycle,
                  non-motorized scooter, skateboard, or in-line/roller skates.
                </li>
                <li className="courseText">
                  Violations may result in fines, with a portion of the fines
                  allocated to bicycle safety education and helmet programs.
                </li>
                <li className="courseText">
                  Local authorities have the power to regulate bicycle
                  registration, parking, and operation on pedestrian or bicycle
                  facilities.
                </li>
                <li className="courseText">
                  Local authorities may establish separated bicycle lanes and
                  regulate bicycle use on specific paths or trails.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Motorcycles (25451, 25650, 27802, 12804 CVC)
              </h5>
              <h6 className="sectionSubheading">
                Acetylene headlamp regulation:
              </h6>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  A motorcycle with a single acetylene headlamp is compliant if
                  it has a clear plane glass front, a bright six-inch spherical
                  mirror, and a standard acetylene burner.
                </li>
                <li className="courseText">
                  The headlamp must provide sufficient light to reveal objects
                  on the roadway within 115 feet.
                </li>
              </ol>
              <h6 className="sectionSubheading">
                Headlamp requirement during darkness
              </h6>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  Motorcycles must have at least one and no more than two
                  lighted headlamps during periods of darkness.
                </li>
                <li className="courseText">
                  The headlamps must meet the specifications and limitations
                  outlined in the Vehicle Code.
                </li>
              </ol>
              <h6 className="sectionSubheading">Safety helmet regulations</h6>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  The Department of Motor Vehicles establishes regulations for
                  safety helmets used by motorcycle and motorized bicycle
                  drivers and passengers.
                </li>
                <li className="courseText">
                  The regulations aim to ensure safety and may include
                  compliance with the federal motor vehicle safety standard for
                  helmets (Federal Motor Vehicle Safety Standard No. 218).
                </li>
                <li className="courseText">
                  Helmets sold must be labeled according to the federal
                  standard, certifying their conformity to applicable safety
                  standards.
                </li>
                <li className="courseText">
                  It is illegal to sell or offer for sale any safety helmet for
                  motorcycle or motorized bicycle use that does not meet the
                  requirements established by the Department of Motor Vehicles.
                </li>
              </ol>
              <h4 className="sectionHeading" id="sectionFour">
                Section 5.4. AUTOMOBILE EQUIPMENT
              </h4>
              <h5 className="sectionSubheading">Brakes (26450, 26451, CVC)</h5>
              <ul>
                <li className="courseText">
                  Every motor vehicle, except motorcycles, must have a service
                  brake system and a parking brake system.
                </li>
                <li className="courseText">
                  The service brake system and the parking brake system should
                  be applied separately.
                </li>
                <li className="courseText">
                  If the two systems are connected, they must be constructed in
                  a way that the failure of any single part, except for drums,
                  brake shoes, or other mechanical parts of the wheel brake
                  assemblies, does not result in the motor vehicle being without
                  operative brakes.
                </li>
                <li className="courseText">
                  The parking brake system has specific requirements:
                  <ol type="i">
                    <li className="courseText">
                      {" "}
                      It should be capable of holding the vehicle stationary on
                      any grade, regardless of loading conditions, on a surface
                      free from snow, ice, or loose material.
                    </li>
                    <li className="courseText">
                      The parking brake should be able to lock the braked wheels
                      to the limit of traction.
                    </li>
                    <li className="courseText">
                      The parking brake can be applied through the driver's
                      muscular efforts, spring action, or other isolated energy
                      dedicated exclusively for the operation of the parking
                      brake or a combination parking brake and emergency
                      stopping system.
                    </li>
                    <li className="courseText">
                      The parking brake should be held in the applied position
                      solely through mechanical means.
                    </li>
                  </ol>
                </li>
              </ul>
              <h5 className="sectionSubheading">
                Lights (280, 24250, 24251, 24400, 24600-24603, 24950-24953 CVC){" "}
              </h5>
              <ul>
                <li className="courseText">
                  During darkness, vehicles must be equipped with appropriate
                  lighting equipment.
                </li>
                <li className="courseText">
                  Lighting equipment should render a person or vehicle visible
                  within specified distances and under normal atmospheric
                  conditions.
                </li>
                <li className="courseText">
                  Motor vehicles (excluding motorcycles) must have at least two
                  headlamps positioned above or in advance of the front axle.
                  These headlamps should be operational during darkness or
                  inclement weather.
                </li>
                <li className="courseText">
                  Taillamps, mounted on the rear of vehicles, must be red in
                  color and visible from specific distances. The number,
                  placement, and height of tail lamps are regulated.
                </li>
                <li className="courseText">
                  The rear license plate must be illuminated with a white light,
                  allowing it to be clearly legible from a distance of 50 feet
                  to the rear.
                </li>
                <li className="courseText">
                  Red fog tail lamps may be used in addition to the required
                  taillamps during conditions of reduced visibility.
                </li>
                <li className="courseText">
                  Vehicles should be equipped with stop lamps on the rear,
                  meeting certain requirements regarding number, placement,
                  color, visibility, and activation.
                </li>
                <li className="courseText">
                  When towing a trailer coach or camp trailer, the vehicle
                  combination must have a lamp-type turn signal system.
                </li>
                <li className="courseText">
                  Different types of vehicles, such as motor trucks, truck
                  tractors, buses, passenger vehicles, trailers, semi-trailers,
                  and motorcycles, have specific requirements for their
                  lamp-type turn signal systems.
                </li>
                <li className="courseText">
                  Turn signal lamps should be visible and understandable from
                  specified distances depending on the size of the vehicle.
                </li>
                <li className="courseText">
                  Turn signal systems should project flashing white or amber
                  lights to the front and flashing red or amber lights to the
                  rear. Side-mounted and supplemental rear turn signal lamps
                  have certain conditions for their usage.
                </li>
              </ul>
              <h5 className="sectionSubheading">1. Horn (27000-27001 CVC)</h5>
              <h6 className="sectionSubheading">
                a. Horns on motor vehicles:{" "}
              </h6>
              <ol type="a" className="orderedList">
                <li className="courseText">
                  Motor vehicles must have a horn in good working order.
                </li>
                <li className="courseText">
                  The horn should be capable of emitting sound audible from a
                  distance of at least 200 feet.
                </li>
                <li className="courseText">
                  The horn should not produce unreasonably loud or harsh sounds,
                  except for authorized emergency vehicles that may use air
                  horns alongside sirens.
                </li>
                <li className="courseText">
                  The horn should only be used by the driver when necessary for
                  safe operation and not for any other purpose, except as part
                  of a theft alarm system.
                </li>
              </ol>
              <h5 className="sectionSubheading">2. Refuse or garbage trucks</h5>
              <ol className="orderedList">
                <li className="courseText">
                  Refuse or garbage trucks must have an automatic backup audible
                  alarm that sounds when reversing.
                </li>
                <li className="courseText">
                  The alarm should be audible from a distance of at least 100
                  feet.
                </li>
                <li className="courseText">
                  Alternatively, they can be equipped with a backup device that
                  applies the service brake upon contact with obstructions.
                </li>
                <li className="courseText">
                  Certain refuse or garbage trucks purchased after January 1,
                  2010, should have a functioning camera to assist the driver's
                  view behind the truck.
                </li>
              </ol>
              <h5 className="courseText">c. Construction vehicles:</h5>
              <ol className="orderedList">
                <li className="courseText">
                  Construction vehicles with a gross vehicle weight rating over
                  14,000 pounds, operating at or transporting materials to and
                  from construction or mining sites, must have an automatic
                  backup audible alarm.
                </li>
                <li className="courseText">
                  The alarm should be audible from a distance of at least 200
                  feet.
                </li>
                <li className="courseText">
                  This includes vehicles designed to transport construction or
                  industrial materials, concrete mixers, water tank trucks,
                  cranes, and certain trailers pulled by tractors.
                </li>
              </ol>
              <h5 className="sectionSubheading">Muffler (425, 27150 CVC)</h5>
              <p className="courseText">
                A muffler is defined as a device that reduces noise by using
                chambers, baffle plates, or other mechanical designs to receive
                exhaust gas from an internal combustion engine.
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  Every registered motor vehicle must be equipped with an
                  adequate muffler that is in constant operation and properly
                  maintained to prevent excessive or unusual noise. No muffler
                  or exhaust system should have a cutout, bypass, or similar
                  device.
                </li>
                <li className="courseText">
                  {" "}
                  Passenger vehicles operated off the highways (excluding
                  off-highway motor vehicles subject to identification) must
                  also have an adequate muffler that is constantly operational
                  and properly maintained, meeting the requirements of Article
                  2.5. No cutout, bypass, or similar device should be present.
                </li>
                <li className="courseText">
                  These regulations do not apply to passenger vehicles being
                  operated off the highways in organized racing or competitive
                  events sanctioned by recognized bodies or permitted by local
                  authorities.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Fenders and mudguards (27600 CVC)
              </h5>
              <p className="courseText">
                1. Motor vehicles with three or more wheels, trailers, and
                semitrailers must be equipped with fenders, covers, or devices
                (such as flaps or splash aprons) that effectively minimize the
                spray or splash of water or mud to the rear of the vehicle.
              </p>
              <p className="courseText">
                2. The fenders, covers, or devices, as well as the body of the
                vehicle or its attachments, must provide adequate protection.
              </p>
              <p className="courseText">
                3. All such equipment or the body and attachments must be at
                least as wide as the tire tread.
              </p>
              <p className="courseText">
                4. There are exemptions to this requirement for certain
                vehicles: <br />
                (a) Vehicles exempt from registration. <br />
                (b) Trailers and semitrailers with an unladen weight of under
                <br />
                1,500 pounds. (c) Vehicles manufactured and first registered
                prior to January 1, 1971, with an unladen weight of under 1,500
                pounds.
              </p>
              <h5 className="sectionSubheading">Rearview mirror (26709 CVC)</h5>
              <h6 className="sectionSubheading">
                General Mirror Requirements:{" "}
              </h6>
              <ol className="orderedList">
                <li className="courseText">
                  Every motor vehicle registered in a foreign jurisdiction and
                  every motorcycle subject to registration in California must
                  have at least one mirror that allows the driver to view the
                  highway for a distance of at least 200 feet behind the
                  vehicle.
                </li>
                <li className="courseText">
                  Every motor vehicle subject to registration in California,
                  excluding motorcycles, must have a minimum of two mirrors,
                  including one on the left-hand side.
                </li>
              </ol>
              <h6 className="sectionSubheading">Additional Mirror</h6>
              <p className="courseText">
                The following types of motor vehicles, subject to registration,
                must have mirrors on both the left- and right-hand sides of the
                vehicle that provide a view of the highway for a distance of at
                least 200 feet behind the vehicle: <br />
                a. Motor vehicles constructed or loaded in a way that obstructs
                the driver's view to the rear. <br /> b. Motor vehicles towing
                another vehicle or carrying a load that obstructs the driver's
                view to the rear. <br /> c. Buses or trolley coaches.
              </p>
              <h6 className="sectionSubheading">
                Exemption for Passenger Vehicles:{" "}
              </h6>
              <p className="courseText">
                The requirements in additional mirror requirements do not apply
                to passenger vehicles when the obstruction to the driver's view
                consists of passengers.
              </p>
              <h6 className="sectionSubheading">
                Windshield and wipers (26700, 26701, 26703-26710 CVC)
              </h6>

              <p className="courseText">
                <span className="bold">1. Windshield and Mirrors:</span>
                <br />
                (a) Motor vehicles must have adequate windshields. <br /> (b)
                Every passenger vehicle, except motorcycles, must have an
                adequate windshield and two mirrors. <br />
                (c) Windshields should be made of safety glazing material.{" "}
                <br /> (d) The use of red, blue, or amber translucent
                aftermarket material is prohibited. <br /> (e) Windshield wipers
                are mandatory and must be in good working condition.
              </p>
              <p className="courseText">
                <span className="bold">2. Sun Screening Devices:</span> Sun
                screening devices on side windows must meet specific
                requirements.
              </p>
              <p className="courseText">
                <span className="bold">3. Obstruction of View:</span> Objects or
                materials that obstruct the driver's view through the windshield
                or side windows are prohibited.
              </p>
              <p className="courseText">
                <span className="bold">
                  4. Window Tinting and Glazing Restrictions:
                </span>{" "}
                Federal, state, and local agency vehicles used by peace officers
                may have exemptions to window tinting or glazing restrictions.
              </p>
              <p className="courseText">
                <span className="bold">
                  5. Rearview Mirror and Side Mirrors:
                </span>{" "}
                Any motor vehicle operated on the highway must have a
                functioning rearview mirror.
              </p>
              <p className="courseText">
                <span className="bold">
                  6. Defective Windshields and Rear Windows:
                </span>
                Operating a vehicle with a defective windshield or rear window
                that impairs vision is unlawful.
                <br /> Drivers may be directed to rectify the issue within 48
                hours.
              </p>
              <h5 className="sectionSubheading">
                Seat belts (27302, 27304, 27315 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">1. Seatbelt Requirements:</span>
                <br />
                (a) Seatbelts and their attachments must comply with established
                requirements when sold or offered for sale.
                <br />
                (b) Vehicles used in driver training must be equipped with
                seatbelts that meet department requirements. <br />
                (c) It is unlawful for drivers or passengers to operate or ride
                in driver training vehicles without properly utilizing the
                installed seatbelts.
              </p>
              <p className="courseText">
                <span className="bold">2. Mandatory Seatbelt Law:</span>
                <br />
                (a) The code establishes a mandatory seatbelt law to reduce
                highway fatalities and injuries. <br />
                (b) Drivers and passengers aged 16 and over must be properly
                restrained with safety belts. <br />
                (c) "Properly restrained by a safety belt" includes specific
                positioning of the lap and shoulder portions of the belt.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. Seatbelt Requirements for Operators:
                </span>
                Operators of limousines, taxicabs, and authorized emergency
                vehicles must ensure that passengers are properly restrained.
              </p>
              <p className="courseText">
                <span className="bold">4. Maintenance and Compliance: </span>
                Vehicle owners, including taxicabs and limousines, must maintain
                functional safety belts that conform to federal motor vehicle
                safety standards.
              </p>
              <p className="courseText">
                <span className="bold">5. Exemptions: </span>Exemptions are
                provided for individuals with certain physical or medical
                conditions, public employees in authorized emergency vehicles,
                and passengers in sleeper berths.
              </p>
              <p className="courseText">
                <span className="bold">6. Violations and Civil Actions: </span>{" "}
                <br /> (a) Violations of seatbelt requirements are considered
                infractions, subject to fines and the option of attending a
                traffic violator school. <br /> (b) A violation of seatbelt
                requirements does not establish negligence as a matter of law in
                civil actions.
              </p>
              <p className="courseText">
                <span className="bold">
                  7. Federal Standards and Manufacturer Compliance:
                </span>
                <br />
                (a) The code includes provisions related to federal standards
                for manual and automatic restraint systems in motor vehicles and
                compliance requirements for manufacturers. <br /> (b) Certain
                exemptions are provided for individuals engaged in specific
                activities such as newspaper delivery or solid waste collection.
                <br /> (c) Some provisions of the code may become inoperative if
                the federal requirement for automatic restraints is rescinded.
              </p>
              <h5 className="sectionSubheading">
                Somg control devices (27156 CVC)
              </h5>
              <p className="courseText">
                1. It is prohibited to operate or leave standing on a highway a
                motor vehicle that is a gross polluter, as defined in the Health
                and Safety Code.
              </p>
              <p className="courseText">
                2. Motor vehicles required to be equipped with motor vehicle
                pollution control devices must have the required devices
                correctly installed and in operating condition.
              </p>
              <p className="courseText">
                3. It is illegal to disconnect, modify, or alter any required
                motor vehicle pollution control device.
              </p>
              <p className="courseText">
                4. The installation, sale, offer for sale, or advertisement of
                any device or mechanism that alters or modifies the original
                design or performance of a required motor vehicle pollution
                control device is prohibited.
              </p>
              <p className="courseText">
                5. Willful violation of this section results in the imposition
                of the maximum fine without the possibility of suspension.
              </p>
              <p className="courseText">
                6. If a traffic officer notifies a person that their vehicle
                lacks the required certified motor vehicle pollution control
                device, the person can only operate the vehicle to return it to
                their residence, place of business, or a garage until the device
                is properly installed.
              </p>
              <p className="courseText">
                7. Proof of correction or exemption must be presented in
                response to a notice to appear or complaint issued for a
                violation of this section.
              </p>
              <p className="courseText">
                8. Certain alterations, modifications, or devices may be
                exempted by the State Air Resources Board if they do not reduce
                the effectiveness of a required pollution control device or
                result in emissions that comply with applicable state or federal
                standards.
              </p>
              <p className="courseText">
                9. Aftermarket and performance parts with valid State Air
                Resources Board Executive Orders may be sold and installed when
                a motorcycle is transferred to an ultimate purchaser.
              </p>
              <p className="courseText">
                10. The section applies to motor vehicles of the United States
                or its agencies as authorized by federal law.
              </p>
              <h4 className="sectionHeading" id="sectionFive">
                Section 5.5 Civil Liability and Financial Responsibility
              </h4>
              <h5 className="sectionSubheading">
                Financial responsibility (16250, 16251, 16370-16374 CVC)
              </h5>
              <p className="courseText">
                1. "Judgment" is defined as a final judgment by a court against
                a person as a defendant. <br />
                2. "Cause of action" refers to legal actions for property damage
                exceeding $1,000, bodily injury, or death resulting from motor
                vehicle operation, excluding certain statutory liability cases.
                <br />
                3. The Department of Motor Vehicles (DMV) has the authority to
                suspend a person's driving privilege if they receive a certified
                copy of a judgment indicating non-payment for 30 days.
                <br />
                4. Actions brought under Section 116.880 of the Code of Civil
                Procedure are not governed by Chapter 2 of Division 7, except as
                specified in Section 16370.5.
                <br />
                5. A fee of up to $20 is required for processing documents and
                issuing suspension orders related to judgments filed with the
                DMV.
                <br />
                6. The suspension of driving privileges remains in effect until
                the judgment debtor provides proof of financial responsibility,
                satisfies the judgment, or meets the requirements outlined in
                the relevant chapter of the Vehicle Code, with exemptions as
                provided in Section 16375.
                <br />
                7. A judgment creditor can request certified copies of judgments
                and certificates of facts from the court, subject to specific
                conditions and fees.
                <br />
                8. If a judgment debtor fails to satisfy a subsequent judgment
                within 15 days after it becomes final, following the
                satisfaction of a previous judgment and providing proof of
                financial responsibility, the DMV will suspend their driver's
                license again.
              </p>
              <h6 className="sectionSubheading">
                Proof of ability to respond in case of damages (16430, 16431,
                16433-16435 CVC)
              </h6>
              <p className="courseText">
                <span className="bold">1. Minimum Amounts: </span> Proof of
                financial responsibility is required for owning or operating a
                motor vehicle involving personal injury or death. The minimum
                amounts for proof of financial responsibility are: <br />
                (a) $15,000 for personal injury or death of one person <br />
                (b) $30,000 for personal injury or death of multiple persons in
                a single accident <br />
                (c) $5,000 for property damage exceeding $1,000 in a single
                accident
              </p>
              <p className="courseText">
                <span className="bold">2. Acceptable Proof: </span>Written
                certificates issued by an authorized insurance carrier are an
                acceptable method of providing proof. The certificates must
                demonstrate the existence of a motor vehicle liability policy,
                an automobile liability policy, or any other liability policy
                that meets the necessary requirements. The Department of Motor
                Vehicles generally accepts these certificates as satisfactory
                proof, with some exceptions specified in the code.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. Revoked, Suspended, or Restricted License:
                </span>
                If a person's driver's license has been revoked, suspended, or
                restricted under specific sections of the code, the Department
                of Motor Vehicles may require certificates covering all
                registered vehicles before the license can be reinstated. This
                requirement does not apply if the vehicles are in storage and
                the license plates and registration cards have been surrendered
                to the department.
              </p>
              <p className="courseText">
                <span className="bold">4. Residents of Other States: </span>{" "}
                Residents of other states can provide proof of financial
                responsibility from an authorized insurance company in their
                state if it meets California's minimum coverage limits.
              </p>
              <p className="courseText">
                <span className="bold">5. Moving to California: </span>If a
                person moves to California while still required to maintain
                proof of financial responsibility, their driver's license will
                not be issued or returned until they provide written
                certificates that meet the minimum coverage limit requirements
                and cover the necessary period.
              </p>
              <p className="courseText">
                <span className="bold">6. Canceled Liability Policy:</span> If a
                liability policy mentioned in a certificate is canceled, the
                certificate must state that the department will be notified
                within 10 days of the final cancellation. The coverage provided
                by the policy does not extend beyond the date stated in the
                cancellation notice.
              </p>
              <p className="courseText">
                <span className="bold">7. Bond: </span>Another method of
                providing proof of financial responsibility is through a bond.
                The bond must be conditioned to pay the specified amount and
                allow the state to obtain judgment in favor of any holder of a
                final judgment resulting from property damage or personal injury
                caused by the person's motor vehicle.
              </p>
              <p className="courseText">
                <span className="bold">8. Deposit: </span>Proof of financial
                responsibility can also be given by depositing $35,000, as
                outlined in Section 16054.2. However, the department will not
                accept the deposit if any prior judgment against the person
                related to damages from operating a motor vehicle remains
                unpaid.
              </p>
              <p className="courseText">
                9. Compliance with these requirements is essential for
                maintaining proper coverage and fulfilling legal obligations in
                motor vehicle-related incidents in California.
              </p>
              <h5 className="sectionSubheading">
                Failure to report accident to DMV (16000-16002, 16004, 16005,
                40833 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">1. Reporting Requirement: </span>Drivers
                involved in an accident on a street or highway, or in a
                reportable off-highway accident resulting in property damage
                over $1,000, bodily injury, or death, must report the accident
                to the Department of Motor Vehicles (DMV) within 10 days, using
                an approved form.
              </p>
              <p className="courseText">
                <span className="bold">2. Exemptions: </span>The reporting
                requirement does not apply if the vehicle involved is owned or
                leased by the United States, the state, another state, or a
                local agency.
              </p>
              <p className="courseText">
                <span className="bold">3. Reporting Timeframe:</span> If no
                party involved in an accident reports it to the DMV within one
                year, the DMV is not obligated to file a report, and certain
                driver's license suspension requirements do not apply.
              </p>
              <p className="courseText">
                <span className="bold">
                  4. Definition of Reportable Off-Highway Accident:
                </span>
                A "reportable off-highway accident" refers to an accident that
                occurs off the street or highway, involves a registered vehicle,
                and results in property damage over $1,000, bodily injury, or
                death. It excludes accidents where only the driver's or owner's
                property is damaged.
              </p>
              <p className="courseText">
                <span className="bold">5. Uninsured Motor Vehicle: </span>An
                "uninsured motor vehicle" is a vehicle without the required
                financial responsibility as mandated by Section 16021.
              </p>
              <p className="courseText">
                <span className="bold">
                  6. Fraudulent Acts by Insurance Agent or Broker:
                </span>
                If a driver's failure to prove financial responsibility is due
                to fraudulent acts by an insurance agent or broker, the DMV will
                terminate any suspension action if the driver provides
                documentation of the fraud and proof of current financial
                responsibility meeting the requirements.
              </p>
              <p className="courseText">
                <span className="bold">7. Driverless Runaway Vehicle: </span>In
                the case of a driverless runaway vehicle parked with the
                registered owner's permission, the registered owner is
                considered the driver for reporting purposes.
              </p>
              <p className="courseText">
                <span className="bold">8. Reporting to Employer: </span>If a
                driver is operating a motor vehicle with the employer's
                permission, the driver must report the accident to their
                employer within five days, and the employer must transmit a
                report to the DMV within 10 days. Exceptions apply if certain
                conditions are met, such as having a certificate of insurance or
                bond on file with the DMV.
              </p>
              <p className="courseText">
                <span className="bold">9. Driving Privilege Suspension: </span>
                The DMV may suspend a person's driving privilege if they fail to
                report an accident, and the suspension remains in effect until
                the report is received or evidence of financial responsibility
                is provided.
              </p>
              <p className="courseText">
                <span className="bold">
                  10. Confidentiality of Accident Reports:
                </span>
                Accident reports are confidential but may be disclosed upon
                request to individuals with a proper interest, such as involved
                parties, law enforcement agencies, and courts.
              </p>
              <p className="courseText">
                <span className="bold">
                  11. Inadmissibility of Reports in Lawsuits:
                </span>{" "}
                The report, DMV actions, findings, and security filed should not
                be referenced as evidence of negligence or due care in a lawsuit
                seeking damages.
              </p>
              <h5 className="sectionSubheading">
                Suspension of driving privileges (16070-16072 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">
                  1. Failure to provide proof of financial responsibility after
                  an accident:
                </span>
                If a driver involved in an accident fails to provide proof of
                financial responsibility as required by the California
                Department of Motor Vehicles (DMV), their driving privilege will
                be suspended.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Nonresidents are also subject to suspension:
                </span>
                The DMV will suspend the driving privilege of both residents and
                nonresidents if they fail to provide evidence of financial
                responsibility at the time of the accident.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. 30-day notice of intent to suspend:
                </span>
                The suspension occurs 30 days after the DMV sends a notice of
                intent to suspend, unless the driver establishes proof of
                financial responsibility with the DMV before that date.
              </p>
              <p className="courseText">
                <span className="bold">4. Right to request a hearing:</span> The
                driver has the right to request a hearing regarding the
                suspension.
              </p>
              <p className="courseText">
                <span className="bold">
                  5. Suspension due to out-of-state suspension:
                </span>{" "}
                The DMV will also suspend the driving privilege of a person if
                they receive notice from another state that their driving
                privilege has been suspended in that state for failure to meet
                financial responsibility provisions, if the grounds for
                suspension would have resulted in a suspension in California.
              </p>
              <p className="courseText">
                <span className="bold">6. Duration of suspension: </span> The
                suspension of the driving privilege due to failure to provide
                proof of financial responsibility lasts for one year from the
                date of the suspension's commencement.
              </p>
              <p className="courseText">
                <span className="bold">7. Termination of suspension:</span> The
                suspension will only be terminated if the person files proof of
                financial responsibility as outlined in Chapter 3 of the code.
                Alternatively, the DMV may restrict a person's driving privilege
                if they provide proof of financial responsibility, pay a penalty
                fee of $250, and restrict their driving to specific situations.
              </p>
              <p className="courseText">
                <span className="bold">
                  8. Restriction of driving privilege:
                </span>{" "}
                The restricted driving privilege allows necessary travel to and
                from work, driving required for employment purposes, or
                transportation of a minor dependent to and from school. The
                restriction remains in effect as long as proof of financial
                responsibility is maintained.
              </p>
              <p className="courseText">
                <span className="bold">
                  9. Termination of suspension after one year:
                </span>{" "}
                If one year has passed since the suspension's commencement and
                the driving privilege is suspended under a different section due
                to a judgment from the accident, the suspension will be
                terminated. However, the DMV may reimpose the suspension if the
                other suspension is later set aside for reasons other than
                satisfying the judgment or providing proof of ability to respond
                in damages.
              </p>
              <p className="courseText">
                <span className="bold">10. Penalty fees and revenue:</span>{" "}
                Penalty fees collected are deposited into the Financial
                Responsibility Penalty Account in the General Fund. Revenue
                remaining on each July 1 reverts to the General Fund.
              </p>
              <p className="courseText">
                <span className="bold">
                  11. Exemption for commercial driver's license (CDL) holders:
                </span>
                These provisions do not apply to holders of commercial driver's
                licenses. CDL holders whose driving privilege is suspended are
                not eligible for a restricted license unless they surrender
                their commercial driver's license and obtain a noncommercial
                Class C or M driver's license.
              </p>
              <h5 className="sectionSubheading">
                Deposit of security required (16020 CVC){" "}
              </h5>
              <p className="courseText">
                <span className="bold">
                  1. Requirement for drivers and owners:
                </span>
                All drivers and owners of a motor vehicle must be able to
                establish and maintain financial responsibility at all times.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Carrying evidence of financial responsibility:
                </span>{" "}
                Drivers and owners must carry evidence of the form of financial
                responsibility in effect for the vehicle.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. Forms of evidence of financial responsibility:
                </span>
                The following are considered evidence of financial
                responsibility: <br />
                (a) Form issued by an insurance company or charitable risk pool,
                as specified by the Department of Motor Vehicles (DMV). <br />
                (b) Certificate of self-insurance or assignment of deposit
                letter if the owner is a self-insurer or depositor. <br />
                (c )Insurance covering note or binder as defined by the
                Insurance Code.
                <br />
                (d) Showing that the vehicle is owned or leased by the United
                States or a public entity.
              </p>
              <p className="courseText">
                <span className="bold">
                  4. Use of electronic reporting system:
                </span>{" "}
                Law enforcement officers and court personnel may obtain evidence
                of financial responsibility from an electronic reporting system,
                when available.
              </p>
              <p className="courseText">
                <span className="bold">
                  5. Additional forms of evidence of financial responsibility:
                </span>{" "}
                Evidence of financial responsibility may also include: <br />{" "}
                (a) Name of the insurance company and policy number if it is
                recorded in the vehicle registration records of the (DMV).{" "}
                <br />
                (b) Identifying motor carrier of property permit number issued
                by the California Highway Patrol for motor carriers of property.{" "}
                <br />
                (c) Identifying number issued by the Public Utilities Commission
                for household goods carriers, passenger stage carriers, or
                transportation charter party carriers.
              </p>
              <p className="courseText">
                <span className="bold">
                  6. Exclusion of suspended carriers:
                </span>{" "}
                If a carrier's identification number is currently suspended by
                the issuing agency for lack or lapse of insurance or other
                financial responsibility, it is not considered evidence of
                financial responsibility.
              </p>
              <h5 className="sectionSubheading">
                Minor’s liability imputed to others (17706-17711 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">
                  1. Consent for a minor's application:
                </span>
                If a person required to sign and verify the application of a
                minor gives written consent, the DMV may accept an application
                signed and verified by the minor and their employer.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Issuance of a restricted driver's license:
                </span>
                The DMV will issue a restricted driver's license to the minor
                for operating vehicles within the scope of their employment,
                unless the employer provides written authorization for an
                unrestricted license.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. No civil liability for providing consent:
                </span>
                The person giving consent but not signing or verifying the
                application is not subject to civil liability merely because of
                providing consent.
              </p>
              <p className="courseText">
                <span className="bold">4. Liability for minor's actions: </span>
                Civil liability arising from a minor's driving a motor vehicle
                on a highway during their minority is imposed upon the person
                who signed and verified the minor's license application. This
                person is jointly and severally liable with the minor for
                damages resulting from the minor's negligent or wrongful acts
                unless the employer authorized the issuance of an unrestricted
                license.
              </p>
              <p className="courseText">
                <span className="bold">5. Liability of parents/guardians:</span>{" "}
                Parents, guardians, or persons having custody of a minor who
                expressly or impliedly permit the minor to drive a motor vehicle
                on a highway are jointly and severally liable with the minor for
                any damages resulting from the minor's negligent or wrongful
                acts.
              </p>
              <p className="courseText">
                <span className="bold">6. Limitation of liability:</span> The
                liability of any person, group of persons collectively, or
                parents/guardians for a minor's acts or omissions is limited.
                The maximum liability is set at $15,000 for injury or death of
                one person, $30,000 for injury or death of all persons, and
                $5,000 for property damage resulting from a single accident.
                However, this limitation does not protect a person from
                liability for punitive damages arising from their own wrongful
                conduct.
              </p>
              <p className="courseText">
                <span className="bold">
                  7. Liability exemption for acting as agent or servant:
                </span>{" "}
                The person who signed the minor's license application is not
                liable for the minor's acts or omissions when the minor is
                acting as the agent or servant of another person.
              </p>
              <p className="courseText">
                <span className="bold">
                  8. Cancellation of the minor's license to relieve liability:
                </span>{" "}
                The person who signed the minor's license application or an
                employer who authorized the license issuance may request the
                cancellation of the minor's license to be relieved from joint
                and other liability. The DMV will cancel the license upon
                receiving a verified application, relieving the person from
                liability for subsequent willful misconduct or negligent
                operation of a motor vehicle by the minor.
              </p>
              <h4 className="sectionHeading" id="sectionSix">
                Section 5.6. Criminal Offenses
              </h4>
              <h6 className="sectionSubheading">
                Negligent operator (12810 CVC)
              </h6>
              <p className="courseText">
                <span className="bold">1. Two-Point Violations:</span> Offenses
                such as failure to stop after an accident, driving under the
                influence (DUI), reckless driving, and driving with a suspended
                license result in a two-point violation.
              </p>
              <p className="courseText">
                <span className="bold">2. One-Point Violations:</span> Other
                traffic convictions related to safe vehicle operation on the
                highway carry a value of one point. This includes traffic
                accidents where the driver is deemed responsible.
              </p>
              <p className="courseText">
                <span className="bold">3. No Violation Points: </span>Certain
                violations, including a conviction of a violation of Section
                27315, using a cell phone while driving, driving with a blood
                alcohol concentration (BAC) above the legal limit, and a
                violation of Section 22526, do not result in violation points.
              </p>
              <p className="courseText">
                <span className="bold">
                  4. Prima Facie Negligent Operator:{" "}
                </span>
                Accumulating four or more points within 12 months, six or more
                points within 24 months, or eight or more points within 36
                months makes a person prima facie presumed to be a negligent
                operator. For class A or class B licensed drivers, the
                thresholds are six or more points within 12 months, eight or
                more points within 24 months, or ten or more points within 36
                months.
              </p>
              <p className="courseText">
                <span className="bold">
                  5. Proof of Financial Responsibility:
                </span>{" "}
                A negligent operator whose driving privilege is suspended or
                revoked may be required by the Department of Motor Vehicles to
                provide proof of financial responsibility for a specified
                period.
              </p>
              <h6 className="sectionSubheading">
                Misdemeanor and felony violations (42000 CVC)
              </h6>
              <p className="courseText">
                Unless a different penalty is expressly provided in the code, a
                person convicted of a felony for a violation of any provision of
                the vehicle code shall be subject to punishment, which includes:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  A fine of not less than one thousand dollars ($1,000) and not
                  more than ten thousand dollars ($10,000), or
                </li>
                <li className="courseText">
                  Imprisonment pursuant to subdivision (h) of Section 1170 of
                  the Penal Code, or
                </li>
                <li className="courseText">
                  Both such fines and imprisonment.
                </li>
              </ol>
              <h6 className="sectionSubheading">
                Speeding and Reckless Driving (23103 CVC)
              </h6>
              <p className="courseText">
                <span className="bold">a. Reckless Driving: </span> Reckless
                driving is defined as operating a vehicle on a highway or in an
                off street parking facility with willful or wanton disregard for
                the safety of persons or property. Conviction for reckless
                driving can result in the following penalties, unless otherwise
                specified: <br /> (a) Imprisonment in a county jail for a
                minimum of five days and a maximum of 90 days.
                <br /> (b) A fine ranging from $145 to $1,000, or both.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Reckless Driving as Substitute for DUI
                </span>
                <br />
                If a defendant pleads guilty or nolo contendere to reckless
                driving as a substitute for an original charge of DUI, the
                prosecution must provide a factual basis for the satisfaction or
                substitution. <br />
                The court must inform the defendant of the consequences of a
                reckless driving conviction and its potential impact on
                subsequent DUI charges. <br />
                A reckless driving conviction involving alcohol or drug
                consumption will be considered a prior offense for determining
                penalties under specific DUI-related sections. <br />
                The court must notify the Department of Motor Vehicles (DMV) of
                each Section 23103 conviction that serves as a prior offense for
                DUI penalties. <br />
                Probation for a reckless driving conviction that is a prior
                offense for DUI penalties requires the defendant to enroll in an
                alcohol and drug education program, with exceptions under
                certain circumstances. <br />
                If a defendant's reckless driving offense occurs within ten
                years of a previous conviction for reckless driving or DUI, the
                court must order participation in a program consisting of at
                least 60 hours of program activities, including education,
                counseling, and interviews. <br />
                Failure to enroll in, participate in, or complete the required
                program may result in the revocation of probation. <br />
                The DMV is mandated to evaluate the effectiveness of the
                programs for treating individuals convicted of reckless driving
                in its annual report to the Legislature.
              </p>
              <h5 className="sectionSubheading">
                Drunk Driving (23101, 23152, 23153 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">a. Driving Under the Influence: </span>It
                is illegal to drive a vehicle while under the influence of any
                alcoholic beverage or with a blood alcohol concentration (BAC)
                of 0.08% or more. <br /> BAC is measured in grams of alcohol per
                100 milliliters of blood or grams of alcohol per 210 liters of
                breath. <br /> If a chemical test taken within three hours of
                driving shows a BAC of 0.08% or higher, it is presumed that the
                person had that BAC at the time of driving.
              </p>
              <p className="courseText">
                <span className="bold">b. DUI Causing Bodily Injury: </span>It
                is unlawful for a person under the influence of any alcoholic
                beverage or with a BAC of 0.08% or more to drive a vehicle and
                cause bodily injury to another person due to violating any other
                law or neglecting any duty while driving. <br />
                The same applies to commercial motor vehicle drivers with a BAC
                of 0.04% or more.
                <br />
                It is also unlawful to drive under the influence of drugs, or a
                combination of alcohol and drugs, and cause bodily injury to
                another person due to violating any other law or neglecting any
                duty while driving.
              </p>
              <h5 className="sectionSubheading">
                Drug violations (23105, 23106, 23152, 23153 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">
                  a. Reckless Driving Causing Bodily Injury:{" "}
                </span>
                If a person is convicted of reckless driving (Section 23103) and
                it causes bodily injury to someone other than the driver, they
                can face punishment, including imprisonment for a period
                specified in the Penal Code, a county jail term of 30 days to
                six months, a fine of $220 to $1,000, or both.
                <br /> This section applies to injuries such as loss of
                consciousness, concussion, bone fracture, protracted loss or
                impairment of bodily function, wound requiring extensive
                suturing, serious disfigurement, brain injury, and paralysis.{" "}
                <br />
                Prosecution under other provisions of law is not precluded or
                prohibited.
              </p>
              <h5 classname="sectionSubheading">
                Theft and malicious mischief (10851-10853 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">a. Vehicle Theft: </span> Unauthorized
                vehicle use, where an individual operates or takes a vehicle
                without the owner’s consent, intending to deprive the owner of
                possession, constitutes a public offense. The penalties for this
                offense include imprisonment, fines, or both. Certain vehicle
                categories may have enhanced penalties for theft. It’s important
                to note that previous consent to use or drive the vehicle does
                not imply consent for subsequent occasions. Repeat offenders may
                be subject to further enhanced penalties.
              </p>
              <p className="courseText">
                <span className="bold">b. Taking Binder Chains : </span>
                Unauthorized taking of binder chains without the owner’s
                consent, with the intent to deprive the owner of possession,
                constitutes a misdemeanor offense. Those found guilty may face
                imprisonment in the county jail for not less than six months, a
                fine of not less than one thousand dollars, or both.
                Importantly, previous consent to take the binder chains does not
                imply consent for subsequent occasions
              </p>
              <p className="courseText">
                <span className="bold">c. Vehicle Tampering: </span>Willfully
                injuring, tampering with, or breaking/removing any part of a
                vehicle without the owner's consent is prohibited.
              </p>
              <p className="courseText">
                <span className="bold">d. Unauthorized Vehicle Entry: </span>
                Unauthorized climbing into or onto a vehicle with the intent to
                commit malicious mischief, as well as manipulating the vehicle's
                mechanisms without proper authorization is prohibited.
                Additionally, setting a vehicle in motion while it is unattended
                and at rest is expressly forbidden.
              </p>
              <h5 className="sectionSubheading">
                Suspension and Revocation of License by Court Procedure
              </h5>
              <h6 className="sectionSubheading">
                Speeding and Reckless Driving (13200 CVC)
              </h6>
              <p className="courseText">
                A court is allowed to suspend the driving privileges of a person
                convicted of certain violations, including those related to
                vehicle speed or reckless driving.
              </p>
              <p className="courseText">
                The duration of the suspension depends on the number of prior
                convictions. <br />A first conviction can result in a suspension
                of up to 30 days. <br />A second conviction can result in a
                suspension of up to 60 days. <br />A third or subsequent
                conviction can result in a suspension of up to six months
              </p>
              <p className="courseText">
                The court has the discretion to determine the length of the
                suspension within these maximum limits.
              </p>
              <p className="courseText">
                The purpose of the suspension is to penalize the person for
                their violations.
              </p>
              <p className="courseText">
                This provision grants the court the authority to suspend driving
                privileges, but it doesn't mandate the Department of Motor
                Vehicles (DMV) to revoke the person's license.
              </p>
              <h6 className="sectionSubheading">
                Driving while intoxicated (13352 CVC)
              </h6>
              <p className="courseText">
                The DMV will suspend or revoke the driving privilege of a person
                upon receiving an abstract of the court record or a report from
                a juvenile court indicating a conviction or finding of a
                violation related to DUI offenses.
              </p>
              <p className="courseText">
                The duration of the suspension or revocation varies based on the
                specific offense and its corresponding penalties.
              </p>
              <p className="courseText">
                Convictions of Section 23152 or 23153, as well as related
                sections, may result in suspensions ranging from six months to
                two years or revocations ranging from three to five years.
              </p>
              <p className="courseText">
                To reinstate driving privileges, individuals must provide proof
                of financial responsibility and successfully complete a
                state-approved driving-under-the-influence program.
              </p>
              <p className="courseText">
                Certain conditions, such as participation in an extended DUI
                program and installation of an ignition interlock device, may be
                required for restricted driving privileges during the suspension
                or revocation period.
              </p>
              <p className="courseText">
                The code addresses specific circumstances for commercial
                driver's license holders and emphasizes the reporting
                responsibilities of juvenile court officials.
              </p>
              <p className="courseText">
                Out-of-state convictions for DUI offenses are considered as
                convictions under California law and can lead to suspensions or
                revocations.
              </p>
              <p className="courseText">
                Non-compliance with program requirements can extend the
                suspension or revocation period until all reinstatement
                requirements are fulfilled.
              </p>
              <h6 className="sectionSubheading">
                Speed in excess of 100 miles per hour (13200.5 CVC)
              </h6>
              <p className="courseText">
                If a person licensed under the California Vehicle Code is
                convicted of a violation of subdivision (b) of Section 22348,
                the court has the authority to suspend the person's privilege to
                operate a motor vehicle for a maximum period of 30 days.
              </p>
              <p className="courseText">
                It should be noted that this provision grants discretionary
                power to the court to impose the suspension, and it is not
                mandatory for the Department of Motor Vehicles (DMV) to revoke
                the driving privilege in such cases.
              </p>
              <h6 className="sectionSubheading">
                Revocation required (13350, 13351, 13355, 13356 CVC)
              </h6>
              <p className="courseText">
                <span className="bold">
                  {" "}
                  a. Revocation of Driving Privilege for Specific Convictions:{" "}
                </span>
                The Department of Motor Vehicles (DMV) must immediately revoke
                the driving privilege of a person upon receiving a certified
                court record showing conviction for certain crimes or offenses,
                including failure to stop after an accident resulting in injury
                or death, felony committed using a motor vehicle, and reckless
                driving causing bodily injury. <br />
                The driving privilege revoked under this section can only be
                reinstated after one year from the date of revocation and upon
                the person providing proof of financial responsibility.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Revocation of Driving Privilege for Manslaughter and
                  Multiple Convictions:{" "}
                </span>
                The DMV must immediately revoke the driving privilege of a
                person upon receiving a certified court record showing
                conviction for certain crimes or offenses, such as manslaughter
                resulting from the operation of a motor vehicle, multiple
                convictions of specified offenses within a 12-month period, or
                causing serious bodily injury. <br />
                The driving privilege revoked under this section can only be
                reinstated after three years from the date of revocation and
                upon the person providing proof of financial responsibility.
              </p>
              <p className="courseText">
                <span className="bold">
                  c. Irrevocable Revocation of Driving Privilege for Felony
                  Violation:{" "}
                </span>
                The DMV must immediately revoke the driving privilege of a
                person upon receiving a certified court record showing
                conviction for a felony violation of Section 245 of the Penal
                Code, where a vehicle was found to be the deadly weapon or
                instrument used in the offense. <br />
                The driving privilege revoked under this section cannot be
                reinstated under any circumstances.
              </p>
              <p className="courseText">
                <span className="bold">
                  d. Suspension of Driving Privilege for Court-Ordered License
                  Suspension :{" "}
                </span>
                The DMV must suspend the driving privilege of a person upon
                receiving a certified court record showing a court-ordered
                suspension of the driver's license under Section 13210.
              </p>
              <p className="courseText">
                <span className="bold">
                  e. Suspension of Driving Privilege for Violation of Section
                  12110:{" "}
                </span>
                The DMV must suspend the driving privilege of a person convicted
                of a violation of Section 12110 for four months (first
                conviction) or one year (second or subsequent conviction within
                seven years of the current conviction).
              </p>
              <p className="courseText">
                <span className="bold">
                  f. Suspension of Driving Privilege for Excessive Speed
                  Offenses:{" "}
                </span>
                The DMV must immediately suspend the driving privilege of a
                person upon receiving a certified court record showing
                conviction or finding of an offense under subdivision (b) of
                Section 22348 (excessive speed), based on certain conditions and
                periods specified in the section.
              </p>
              <h5 className="sectionSubheading">
                Additional grounds for suspension (13201, 13361 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">
                  a. Suspension of Driving Privileges upon Conviction:{" "}
                </span>
                A court has the authority to suspend an individual's privilege
                to operate a motor vehicle for a maximum period of six months
                upon conviction of certain offenses.
              </p>
              <p className="courseText">
                The offenses that may result in a suspension of driving
                privileges include:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  Failure to stop or comply with Section 20002 after being
                  involved in an accident.
                </li>
                <li className="courseText">
                  Reckless driving causing bodily injury under Section 23104 or
                  23105.
                </li>
                <li className="courseText">
                  Failure to stop at a railway grade crossing as required by
                  Section 22452.
                </li>
                <li className="courseText">
                  Evading a peace officer in violation of Section 2800.1 or
                  2800.2, or evading in violation of Section 2800.3 if the
                  person's license is not revoked for that violation.
                </li>
                <li className="courseText">
                  Knowingly causing or participating in a vehicular collision or
                  accident with the purpose of presenting a false or fraudulent
                  insurance claim.
                  <br />
                  Alternatively, the court may restrict the driving privilege to
                  necessary travel to and from the person's place of employment
                  for a maximum of six months, or within the scope of employment
                  if driving is required for work duties. Proof of financial
                  responsibility is required during the restriction.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  b. Suspension of Driving Privileges Based on Court
                  Convictions:{" "}
                </span>
                The Department of Motor Vehicles (DMV) has the authority to
                suspend an individual's driving privilege upon receiving a
                certified abstract of a court record showing a conviction for
                specific crimes or offenses.
              </p>
              <p className="courseText">
                The offenses that may result in a suspension of driving
                privileges include:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  Failure to stop or comply with the requirements of Section
                  20002 in the event of an accident causing property damage.
                </li>
                <li className="courseText">
                  A second or subsequent conviction of reckless driving.
                </li>
                <li className="courseText">
                  {" "}
                  Manslaughter resulting from the operation of a motor vehicle
                  as provided in paragraph (2) of subdivision (c) of Section 192
                  of the Penal Code.
                </li>
              </ol>
              <p className="courseText">
                In these cases, the DMV is authorized to require proof of
                ability to respond in damages as defined in Section 16430.
              </p>
              <h5 className="sectionSubheading">
                Offenses against licensing laws
              </h5>
              <ol className="orderedList">
                <h5 className="sectionSubheading">
                  Driving with a suspended or revoked license
                </h5>
                <li className="courseText">
                  Violations can result in imprisonment, fines, and longer
                  sentences for habitual traffic offenders.
                </li>
                <li className="courseText">
                  Penalties vary depending on the specific section and whether
                  it is a first offense or subsequent offense within a certain
                  period.
                </li>
                <li className="courseText">
                  Knowledge of the license suspension or revocation is presumed
                  if notice has been given by the Department of Motor Vehicles
                  (DMV) via mail.
                </li>
                <li className="courseText">
                  Impoundment can occur for offenses such as using a vehicle in
                  certain offenses, driving with a suspended license, or
                  DUI-related offenses.
                </li>
                <li className="courseText">
                  Impoundment periods range from 5 days to 30 days.
                </li>
                <li className="courseText">
                  The impounding agency must send a notice to the legal owner
                  within two working days, informing them of the impoundment.
                </li>
                <li className="courseText">
                  The registered and legal owner or their agents have the right
                  to request a storage hearing to determine the validity of the
                  impoundment.
                </li>
                <li className="courseText">
                  Rental car agencies have specific provisions for the release
                  of impounded vehicles.
                </li>
                <li className="courseText">
                  Compliance with impoundment procedures is necessary to avoid
                  liability for the impounding agency.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Driving by an unlicensed minor (12500, 14607 CVC)
              </h5>
              <p className="courseText">
                <span className="bold">
                  a. Requirement for a Valid Driver's License:{" "}
                </span>
                It is illegal to drive a motor vehicle on a highway without a
                valid driver's license, except for those who are expressly
                exempted under the code.
                <br />
                The same applies to driving motorcycles, motor-driven cycles, or
                motorized bicycles on highways, with specific exemptions for
                certain individuals.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Valid Driver's License in Off Street Parking Facilities
                </span>
                It is necessary to hold a valid driver's license of the
                appropriate class or certification to operate a motor vehicle in
                or upon any off street parking facility. <br /> Off Street
                parking facilities include publicly owned and certain privately
                owned facilities open for public use without charging a parking
                fee.
              </p>
              <p className="courseText">
                <span className="bold">
                  c. Restriction on Driving Vehicles for which the Person is Not
                  Licensed:{" "}
                </span>
                It is unlawful to drive a motor vehicle or combination of
                vehicles that is not of a type for which the person is licensed.
              </p>
              <p className="courseText">
                <span className="bold">
                  d. Requirement for Valid License to Permit a Minor to Drive:{" "}
                </span>
                It is prohibited to cause or knowingly permit a child, ward, or
                employee under the age of 18 to drive a motor vehicle on
                highways unless they are licensed under the California Vehicle
                Code.
              </p>
              <p className="courseText">
                <span className="bold">
                  e. Emission Requirements for Motorized Scooters:{" "}
                </span>
                Motorized scooters operated on public streets must be equipped
                with an engine that complies with the applicable State Air
                Resources Board emission requirements.
              </p>
              <h5 className="sectionSubheading">
                Misstatement on driver’s license application (20 CVC): It is
                unlawful to use a false or fictitious name, knowingly make any
                false statement, or knowingly conceal any material fact in any
                document filed with the Department of Motor Vehicles (DMV) or
                the Department of the California Highway Patrol (CHP).
              </h5>
              <h6 className="sectionSubheading">
                Civil liability when signing minor’s application
              </h6>
              <p className="courseText">
                <span className="bold">a. Definition of Minors: </span>
                Individuals under 18 years of age are considered minors under
                the California Vehicle Code.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Requirements for Minors' Driver's License Application
                </span>
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  Both parents' signed and verified application is required if
                  they have custody of the minor.
                </li>
                <li className="courseText">
                  If only one parent has custody, their signature and
                  verification are sufficient.
                </li>
                <li className="courseText">
                  If neither parent or guardian is available, a person with
                  custody of the minor can sign and verify the application.
                </li>
                <li className="courseText">
                  For minors who are dependents or wards of the court, specific
                  individuals can sign and verify the application with proof of
                  financial responsibility.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  c. Spouse and Parent Signature Option:{" "}
                </span>
                A minor's driver's license application can be signed and
                verified by the adult spouse of the minor or the parents of
                either spouse if the minor is married. <br />
                Alternatively, the minor can submit proof of financial
                responsibility.
              </p>
              <p className="courseText">
                <span className="bold">d. Non-Resident Signature Option: </span>
                If the required signatories are not residents of California, a
                person residing in California with custody of the minor can sign
                and verify the application. <br />
                Alternatively, the minor can submit the application accompanied
                by proof of financial responsibility.
              </p>
              <p className="courseText">
                <span className="bold">
                  e. Failure to Maintain Financial Responsibility:{" "}
                </span>
                If a minor with proof of financial responsibility fails to
                maintain it, their license will be immediately canceled by the
                DMV. The minor must provide proof of continued financial
                responsibility or comply with other requirements to reinstate
                their license.
              </p>
              <p className="courseText">
                <span className="bold">
                  f. Application Signed by Minor with Consent:{" "}
                </span>
                The DMV can accept an application signed and verified only by
                the minor, accompanied by proof of financial responsibility, if
                the required signatory gives written consent. The person giving
                consent is not subject to civil liability solely for giving
                consent.
              </p>
              <p className="courseText">
                <span className="bold">
                  g. Application Signed by Minor and Employer with Consent:{" "}
                </span>
                At the DMV, an application signed and verified by the minor and
                their employer can be accepted if the required signatory
                provides written consent. The DMV will issue a restricted
                driver’s license to the minor, unless the employer authorizes an
                unrestricted license in writing. Importantly, the person giving
                consent is not subject to civil liability solely for giving
                consent.
              </p>
              <p className="courseText">
                <span className="bold">h. Civil Liability of Signatory: </span>
                The person who signed and verified the application of a minor
                for a driver's license is jointly and severally liable to the
                minor for damages resulting from the minor's negligent or
                wrongful acts while driving. However, if an employer authorizes
                the issuance of an unrestricted license, the signatory is not
                liable.
              </p>
            </div>
            {/* course contents ends here */}
            <ToQuiz />
          </div>
        </div>
      ) : (
        <Five />
      )}
    </div>
  );
}
