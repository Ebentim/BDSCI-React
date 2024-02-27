import { useState } from "react";
import { NavButtons } from "../Assets/next";
export default function ChapterFive() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Provisional Driver License",
    sectionTwo: "Automobile Ownership and Registration",
    sectionThree: "Traffic Laws for Pedestrian and Drivers",
    sectionFour: "Automobile Equipment",
    sectionFive: "Civil Liability and Financial Responsibility",
    sectionSix: "Criminal Offenses",
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
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Five: California Vehicle Code and Rules of the Road
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
              <ul>
                <li className="courseText">
                  Approach and complete the turn as close as possible to the
                  right-hand curb or edge of the roadway.
                </li>
                <li className="courseText">
                  Exceptions apply in specific conditions like multiple lanes or
                  designated turning lanes.
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
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
              <p className="courseText">
                <span className="bold"></span>
              </p>
            </div>
          )}
          <NextButton />
        </div>
      </div>
    </div>
  );
}
