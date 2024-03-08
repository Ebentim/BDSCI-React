import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Seven from "../quizes/Seven";

const sections = {
  sectionOne: "Urban Driving",
  sectionTwo: "Freeway Driving",
  sectionThree: "Driving on Open Highway",
  sectionFour: "Passing",
  sectionFive: "Hazardous Conditions",
};

export default function ChapterSeven() {
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
        Unit Seven: Differences in Urban and Rural Driving
      </h3>
      {showQuiz ? (
        <Seven />
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
              <p className="courseText">
                Driving in urban and rural areas poses unique challenges for
                motorists. Urban driving involves navigating through densely
                populated cities and towns with complex road networks, heavy
                traffic, and numerous pedestrians. On the other hand, rural
                driving takes place in less populated regions with open
                landscapes, winding roads, and reduced traffic density. In this
                unit, we will explore the contrasts between urban and rural
                driving, focusing on the distinct characteristics and strategies
                required for each environment.
              </p>
              <h4 className="sectionHeading" id="sectionOne">
                Section 7.1. Urban driving
              </h4>
              <p className="courseText">
                Urban driving demands alertness, quick decision-making, and
                adaptability as drivers traverse busy city streets, encounter
                numerous traffic signals, and interact with pedestrians. In this
                section, we will delve into the intricacies of urban driving,
                highlighting the significance of reducing speed to gain more
                time for critical actions such as observing road details,
                predicting potential hazards, reacting promptly, and executing
                decisions to avoid dangerous situations.
              </p>
              <h5 className="sectionSubheading">A. Reducing Speed</h5>
              <p className="courseText">Reducing speed allows More Time to: </p>
              <p className="courseText">
                <span className="bold">
                  See Details and Identify Their Meaning:{" "}
                </span>
                In urban driving environments, such as cities or densely
                populated areas, reducing speed allows drivers to see and
                process more details on the road. Complex road networks, various
                signs, traffic signals, and pedestrians are typical features of
                urban areas. Slowing down enables drivers to pay closer
                attention to road signs, markings, and potential risks.
              </p>
              <p className="courseText">
                <span className="bold">
                  Analyze Information and Predict What Might Happen:{" "}
                </span>
                Urban driving demands constant vigilance and quick
                decision-making. Lowering speed provides more time for drivers
                to analyze traffic flow, predict other drivers' actions, and
                anticipate potential hazards. This is crucial on busy city
                streets, where traffic conditions change rapidly.
              </p>
              <p className="courseText">
                <span className="bold">React: </span>Urban driving often
                involves frequent stops, starts, and lane changes. By driving at
                an appropriate speed, drivers can react promptly to changing
                traffic patterns, sudden braking by the vehicle ahead, or
                unexpected pedestrian movements.
              </p>
              <p className="courseText">
                <span className="bold">
                  Execute Decisions or Avoid Dangerous Situations:{" "}
                </span>
                At lower speeds, drivers have better control over their vehicles
                and can execute their decisions with precision. Additionally,
                reducing speed provides more time to avoid dangerous situations,
                such as aggressive drivers, sudden lane closures, or obstacles
                on the road.
              </p>
              <h5 className="sectionSubheading">B. Looking Ahead of Traffic</h5>
              <p className="courseText">
                When driving in any environment, including urban areas, it is
                essential to look ahead of traffic to anticipate potential
                hazards and make informed decisions. By adopting proactive
                habits, drivers can enhance safety and minimize the risk of
                accidents.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Look Ahead for Traffic Hazards: </span>
                Constantly scanning the road ahead allows drivers to identify
                and anticipate potential hazards. This includes watching for
                vehicles that might suddenly change lanes, pedestrians crossing
                the road, cyclists, or unexpected obstacles on the pavement. By
                being vigilant and predicting potential dangers, drivers can
                react swiftly and adjust their driving accordingly.
              </p>
              <p className="courseText">
                <span className="bold">
                  Leave Enough Distance to Maneuver:{" "}
                </span>
                Maintaining an appropriate following distance from the vehicle
                ahead is crucial for urban driving safety. A safe following
                distance allows drivers to maneuver and respond to sudden stops
                or emergencies without causing collisions. The "Three-Second
                Rule" is a helpful guideline: ensure that there is at least a
                three-second gap between your vehicle and the one in front.
              </p>
              <p className="courseText">
                <span className="bold">Look Ahead for Signal Changes: </span>
                Observing traffic signals ahead can provide valuable insights
                into upcoming changes in traffic patterns. Being attentive to
                traffic lights and road signs enables drivers to prepare for
                potential stops, turns, or lane merges. Anticipating signal
                changes allows for smooth, uninterrupted flow and reduces the
                likelihood of last-minute maneuvers.
              </p>
              <h5 className="sectionSubheading">
                C. Covering the Brake, Not Riding It
              </h5>
              <p className="courseText">
                Covering the brake (having your foot close to the brake pedal
                without applying pressure) is an essential defensive driving
                technique that can significantly enhance your ability to respond
                quickly to potential hazards.
              </p>
              <p className="courseText">
                <span className="bold">
                  Slow for Reduced Stopping Distances:{" "}
                </span>
                Reducing your speed in urban areas allows for shorter stopping
                distances, giving you more time to react to sudden changes in
                traffic flow or unexpected obstacles. Slowing down when
                approaching potential hazards, intersections, or congested areas
                enables you to have better control over your vehicle and respond
                promptly if needed.
              </p>
              <p className="courseText">
                <span className="bold">
                  Situations in Which the Brake Pedal Should Be Covered:{" "}
                </span>
                Covering the brake pedal is particularly important in certain
                scenarios where unexpected stops or evasive maneuvers might be
                necessary. These situations include:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Next to Parked Cars: </span>When
                  driving next to parked cars, be prepared for the possibility
                  of a door opening or a pedestrian stepping out suddenly.
                  Covering the brake allows you to react swiftly if someone
                  unexpectedly emerges from between parked vehicles.
                </li>
                <li className="courseText">
                  <span className="bold">
                    When You See Brake Lights of Other Cars:{" "}
                  </span>
                  If you notice brake lights of the vehicle ahead, covering the
                  brake can help you anticipate potential slowdowns or stops. It
                  allows you to be ready to respond quickly to the actions of
                  the driver in front of you.
                </li>
                <li className="courseText">
                  <span className="bold">Approaching Signal Lights: </span>As
                  you approach signal lights, be prepared for changes in traffic
                  flow. Covering the brake ensures that you can promptly adjust
                  your speed to match the changing signal lights and avoid
                  sudden stops.
                </li>
              </ol>
              <p className="courseText">
                By covering the brake in these situations, you are adopting a
                defensive driving approach that enhances your ability to react
                promptly and prevent accidents. It also demonstrates responsible
                driving behavior, which is crucial in urban environments where
                traffic conditions can be unpredictable.
              </p>
              <h5 className="sectionSubheading">D. City Passing</h5>
              <p className="courseText">
                Passing other vehicles in a city environment requires extra
                caution and adherence to traffic rules to ensure the safety of
                all road users.
              </p>
              <p className="courseText">
                <span className="bold">
                  Passing Over the Centerline of Travel:{" "}
                </span>
                Passing over the centerline of travel, which separates opposing
                lanes of traffic, is generally not allowed in city driving. In
                urban areas, roads are often narrower, and there may be limited
                visibility around curves or intersections. Passing over the
                centerline can lead to head-on collisions, especially when
                traffic comes from the opposite direction. Such actions can be
                dangerous and are likely to result in severe accidents and
                injuries.
              </p>
              <p className="courseText">
                In urban environments, drivers should only pass other vehicles
                when it is safe and legal to do so. This typically means waiting
                for designated passing zones, such as dashed lines, and ensuring
                there is enough visibility and space to overtake without
                endangering other road users.
              </p>
              <p className="courseText">
                <span className="bold">
                  Passing in or Near an Intersection:{" "}
                </span>
                Passing in or near an intersection is highly discouraged and, in
                many cases, prohibited by traffic laws. Intersections are
                critical points on the road where vehicles from different
                directions converge, and pedestrian crossings may also be
                present. Attempting to pass other vehicles in this vicinity
                increases the risk of collisions, especially when drivers are
                making turns or crossing paths.
              </p>
              <p className="courseText">
                Passing near an intersection can obstruct the view of other
                drivers, making it challenging for them to predict your
                movements and potentially leading to confusion and accidents. It
                is crucial to exercise extreme caution and patience when
                approaching and navigating through intersections, allowing
                sufficient time for other vehicles and pedestrians to clear the
                area before proceeding.
              </p>
              <h5 className="sectionSubheading">E. Lane Choice</h5>
              <p className="courseText">
                Selecting the right lane is critical to safe and efficient
                driving in urban and rural areas. Making informed decisions
                about lane choice contributes to smooth traffic flow and reduces
                the risk of accidents.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Choose a Lane Appropriate for Use:{" "}
                </span>
                Selecting a lane that matches your intended use is essential for
                safe driving. In urban environments, roads often have multiple
                lanes designated for different purposes, such as through lanes,
                turning lanes, and carpool lanes. Take a moment to think about
                your destination and the route you need to take before changing
                lanes or beginning your trip.
              </p>
              <p className="courseText">
                Put your car in the right lane, for instance, if you are about
                to turn right. Use the appropriate through lane if you need to
                proceed straight ahead. The use of turning lanes as through
                lanes should be avoided, as it may confuse other motorists and
                raise the possibility of collisions.
              </p>
              <p className="courseText">
                <span className="bold">
                  Unless turning, choose a less congested lane:{" "}
                </span>
                When driving in urban areas, taking a less congested lane is
                best. Less congested lanes typically provide smoother traffic
                flow and reduce the likelihood of unexpected stops or delays.
                However, if you intend to make a turn at an upcoming
                intersection, it is best to position yourself in the lane
                designated for your intended turn.
              </p>
              <p className="courseText">
                Changing lanes frequently in heavily congested traffic can be
                dangerous and disrupt traffic flow. Choose your lane wisely
                based on your intended route, and try to stay in it until you
                need to change.{" "}
              </p>
              <h5 className="sectionSubheading">F. Vehicle Position</h5>
              <p className="courseText">
                Proper vehicle positioning is crucial for safe and efficient
                driving on the road. It helps drivers maintain awareness,
                prevent accidents, and ensure smooth traffic flow.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Keep Up with Traffic Speed While Remaining Within Legal
                  Limits:{" "}
                </span>
                When driving in urban areas, it is essential to maintain a speed
                consistent with the flow of traffic, while also adhering to the
                posted speed limits. Driving too slowly can create hazards, as
                other vehicles may not expect slower-moving traffic. Conversely,
                driving too fast can lead to unsafe conditions and increase the
                likelihood of accidents. Striking the right balance between
                keeping up with traffic and obeying speed limits is essential
                for safe driving.
              </p>
              <p className="courseText">
                <span className="bold">Avoid Other Drivers' Blind Spots: </span>
                Be aware of other drivers' blind spots and avoid lingering in
                these areas. Blind spots are the areas around a vehicle where
                the driver's view is obstructed, making it challenging for them
                to see your vehicle. Stay out of blind spots to reduce the risk
                of collisions, especially when changing lanes or merging into
                traffic.
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Letting Another Driver Drive in Your Blind Spot:{" "}
                </span>
                In addition to avoiding other drivers' blind spots, be mindful
                of your vehicle's blind spots. Adjust your mirrors properly to
                minimize blind spots, and always check your blind spots by
                physically turning your head before changing lanes or making
                maneuvers. Avoid lingering in other drivers' blind spots, as
                they may not be aware of your presence and could inadvertently
                cause an accident.
              </p>
              <p className="courseText">
                <span className="bold">Avoid Side-by-Side Driving: </span>
                Driving side-by-side with another vehicle for an extended period
                is not recommended, especially in urban areas with heavy
                traffic. This practice can lead to traffic congestion and
                prevent other vehicles from passing or merging smoothly. If
                possible, maintain a safe following distance from the vehicle
                ahead and avoid driving directly alongside another vehicle.
              </p>
              <p className="courseText">
                <span className="bold">Avoid driving in groups or packs: </span>
                Driving in groups or packs close to other vehicles can cause
                traffic congestion and reduce the ability to react quickly to
                changes in traffic conditions. Maintain a safe distance from
                other vehicles, leaving enough room for sudden stops or lane
                changes. This practice improves safety and makes driving more
                comfortable and stress-free.
              </p>
              <h5 className="sectionSubheading">G. Choosing a Safe Route</h5>
              <p className="courseText">
                Selecting a safe route is a crucial aspect of responsible
                driving, as it directly impacts the driver's safety and the
                efficiency of the journey. In this section, we will explore
                three factors to consider when choosing a safe route:{" "}
              </p>
              <p className="courseText">
                <span className="bold">Time of Day and Traffic Density: </span>
                The time of day and traffic density significantly influence the
                safety and duration of a journey. During peak traffic hours,
                such as rush hour, major roads and highways may experience heavy
                congestion, leading to slower traffic and increased stress for
                drivers. In such cases, taking alternate routes or traveling
                during less congested times can help avoid traffic jams and
                lower the risk of an accident.
              </p>
              <p className="courseText">
                Additionally, some areas may be more dangerous during certain
                times of the day due to low visibility or higher pedestrian
                activity. Being conscious of these factors and adjusting your
                route if necessary can enhance travel safety.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Through Streets vs. Side Streets: </span>
                When planning your route, consider whether it is better to use
                through or side streets. Through streets, typically main roads
                and highways, offer direct routes to your destination but may
                also have higher traffic volume and faster speeds. Side streets,
                on the other hand, often have lower traffic density, lower
                speeds, and fewer distractions.
              </p>
              <p className="courseText">
                When traveling in urban areas, taking side streets can provide a
                more relaxed driving experience along with better visibility of
                pedestrians and potential hazards. However, through streets may
                be preferable for long-distance travel or when you need to get
                somewhere quickly.{" "}
              </p>
              <p className="courseText">
                <span className="bold">One-way versus two-way streets: </span>
                One-way and two-way streets present different driving
                challenges. One-way streets may have fewer conflicting traffic
                movements, lowering the risk of a head-on collision, but they
                necessitate drivers paying attention to road signs and
                navigating complex intersections.
              </p>
              <p className="courseText">
                Two-way streets have traffic moving in opposite directions, and
                drivers must exercise caution, especially at intersections and
                when overtaking other vehicles. Understanding how traffic flows
                on one-way and two-way streets and anticipating potential
                conflicts is crucial for choosing the safest route.{" "}
              </p>
              <h5 className="sectionSubheading">
                H. Interacting at Intersections
              </h5>
              <p className="courseText">
                Intersections are critical points on the road where multiple
                paths of traffic intersect. Interacting safely at intersections
                is essential for drivers to navigate through traffic efficiently
                and avoid potential accidents. In this section, we will discuss
                the various aspects of interacting at intersections and the
                skills required for crossing, turning, and signaling:
              </p>
              <p className="courseText">
                <span className="bold">Identifying an Intersection: </span>
                Intersections can be categorized into two types:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Controlled - Signs or Signals: </span>
                  Controlled intersections are equipped with traffic signs or
                  signals to regulate traffic flow. Drivers must obey these
                  signs and signals, which provide instructions on when to
                  proceed, stop, or yield the right-of-way.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  Uncontrolled - No Signs or Signals:{" "}
                </span>
                Uncontrolled intersections lack traffic signs or signals.
                Drivers are required to use caution, yield the right-of-way as
                necessary, and proceed with care when entering such
                intersections.
              </p>
              <p className="courseText">
                <span className="bold">
                  Skills Required for Crossing and Turning:{" "}
                </span>
                When crossing or turning at intersections, drivers need to
                possess the following skills:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Judging Maneuvering Time: </span>
                  Assessing the speed and distance of other vehicles is crucial
                  for safely crossing or turning at intersections. Drivers must
                  accurately gauge the available gaps in traffic to avoid
                  potential collisions.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Choosing a Traffic Gap or Space:{" "}
                  </span>
                  Selecting an appropriate gap in traffic or waiting for
                  sufficient space to enter or cross traffic safely is vital for
                  smooth intersection maneuvers.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  Left Turns - Protected and Unprotected:{" "}
                </span>
                When making left turns at intersections, drivers should consider
                the following:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Scan for Hazards: </span>Pay attention
                  to other vehicles, pedestrians, and bicycles in the
                  intersection to avoid potential conflicts during the left
                  turn.
                </li>
                <li className="courseText">
                  <span className="bold">Vehicle Position: </span>Position your
                  vehicle correctly before and after the turn, ensuring you are
                  in the proper lane and maintaining an appropriate turning
                  radius.
                </li>
                <li className="courseText">
                  <span className="bold">When View is Blocked: </span>If your
                  view is blocked, exercise extra caution and proceed only when
                  you are confident it is safe to do so.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  Right Turns - Protected and Unprotected:{" "}
                </span>
                When making right turns at intersections, you should:
              </p>
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
              <p className="courseText">
                <span className="bold">U-turns: </span>When considering U-turns
                at intersections, drivers should:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Scan for Hazards: </span>Observe for
                  other vehicles, pedestrians, and bicycles to ensure a safe
                  U-turn.
                </li>
                <li className="courseText">
                  <span className="bold">Check for Prohibitive Signs: </span>
                  Look for signs prohibiting U-turns, which are common at
                  certain intersections.
                </li>
                <li className="courseText">
                  <span className="bold">Vehicle Position: </span> Position your
                  vehicle appropriately before and after the U-turn, ensuring it
                  is safe and legal.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Business vs. Residential District:{" "}
                  </span>
                  Exercise additional caution when making U-turns in business
                  districts, as traffic may be heavier.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">Proceeding Straight: </span>When
                proceeding straight at intersections:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Scan for Hazards: </span>Be attentive
                  to other vehicles, pedestrians, and bicycles to proceed
                  safely.
                </li>
                <li className="courseText">
                  <span className="bold">Cover the Brake Pedal: </span>Covering
                  the brake pedal allows for quick response to sudden changes in
                  traffic.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">Signaling for Turns and Stops: </span>
                Using proper signals is crucial for communicating intentions to
                other road users. Drivers should be aware of the following:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold"> Purpose of Signaling: </span>Signaling
                  alerts other drivers about your intended turns and stops,
                  promoting safe and predictable driving.
                </li>
                <li className="courseText">
                  <span className="bold">Distance Required: </span>Activate turn
                  signals with sufficient notice, typically around 100 feet
                  before turning or changing lanes, depending on traffic
                  conditions.
                </li>
              </ol>
              <h5 className="sectionSubheading">I. Backing Up Safely</h5>
              <p className="courseText">
                Backing up is a critical maneuver that requires extra caution to
                prevent accidents and ensure the safety of pedestrians and other
                road users. In this section, we will discuss essential tips for
                backing up safely:
              </p>
              <p className="courseText">
                <span className="bold">
                  Check Behind the Vehicle for Children and Small Objects:{" "}
                </span>
                Before reversing, it is essential to conduct a thorough check
                around the vehicle, especially in the blind spots behind and to
                the sides. Look for children, pedestrians, cyclists, and any
                small objects that may be obstructing your path. Utilize all
                mirrors and physically turn your head to ensure a comprehensive
                view.
              </p>
              <p className="courseText">
                <span className="bold">
                  Proper Body and Head Position While Steering:{" "}
                </span>
                Maintain proper body and head position while steering to ensure
                better visibility. Sit upright and keep your hands in the
                correct position on the steering wheel (9 and 3 o'clock) to have
                optimal control during the backing process.
              </p>
              <p className="courseText">
                <span className="bold">
                  Speed Control Using Brake and/or Clutch:{" "}
                </span>
                Control your speed using the brake and/or clutch to ensure a
                slow and steady pace while reversing. Avoid rapid acceleration,
                especially when backing up in crowded areas or tight spaces.
              </p>
              <p className="courseText">
                <span className="bold">
                  Backing Around Corners and Sharp Turns:{" "}
                </span>
                When backing around corners or navigating sharp turns, do so
                slowly and with precision. Use your mirrors and look over your
                shoulder to maintain situational awareness and avoid hitting
                objects or curbs.
              </p>
              <p className="courseText">
                <span className="bold">
                  Backing When Body Movement is Constricted:{" "}
                </span>
                Backing in constrained situations can be challenging. Here are
                some tips for safe backing in such conditions:
              </p>
              <p className="courseText">
                <span className="bold">
                  1. Use Mirrors and Passengers to Help Navigate:{" "}
                </span>
                Utilize your mirrors and ask passengers to assist you with
                guidance when necessary. Passengers can provide valuable
                feedback and help you avoid obstacles that may not be
                immediately visible.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Avoid Backing Whenever Possible:{" "}
                </span>
                Whenever possible, try to park in a way that minimizes the need
                for backing. Choose parking spaces or driveways that allow for
                straightforward exits to reduce the risk of potential accidents.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. Find Parking Spaces That Don’t Require Backing:{" "}
                </span>
                Seek parking spaces that enable you to drive forward when
                leaving. Pull-through spaces or spaces at the end of rows can
                provide safer alternatives to backing up.
              </p>
              <h5 className="sectionSubheading">
                J. Special Problems Associated with City Traffic
              </h5>
              <p className="courseText">
                Driving in city traffic can present unique challenges that
                require drivers to be extra vigilant and adaptable.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Parked Cars Obscuring View of Oncoming Traffic:{" "}
                </span>
                Parked cars along the roadside can obstruct the view of oncoming
                traffic, making it challenging to assess the road ahead. To
                mitigate this problem:
              </p>
              <ul id="ul">
                <li className="courseText">
                  Slow down and proceed cautiously when approaching areas with
                  parked cars.
                </li>
                <li className="courseText">
                  Check your mirrors and physically turn your head to look for
                  oncoming vehicles before entering or crossing intersections.
                </li>
                <li className="courseText">
                  Use extra caution when passing parked vehicles, as pedestrians
                  may emerge unexpectedly from between them.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Detours: </span>Detours can redirect
                traffic due to construction or road closures. To navigate
                detours safely:
              </p>
              <ul id="ul">
                <li className="courseText">
                  Pay attention to detour signs and follow the indicated route.
                </li>
                <li className="courseText">
                  Be patient and expect delays, especially during peak traffic
                  hours.
                </li>
                <li className="courseText">
                  Reduce your speed and be prepared for changes in traffic
                  patterns.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">
                  Two-Way Left Turn Center Lane Use:{" "}
                </span>
                Two-way left turn center lanes are designed to facilitate left
                turns for vehicles traveling in both directions. When using this
                lane:
              </p>
              <ul id="ul">
                <li className="courseText">
                  Signal your intention to turn and enter the center lane when
                  it is safe to do so.
                </li>
                <li className="courseText">
                  Yield to oncoming traffic before making your left turn.
                </li>
                <li className="courseText">
                  Only use the center lane for turning; avoid using it as a
                  driving lane.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Turning at Corners: </span>Turning at
                corners in city traffic requires caution and awareness of
                pedestrians, cyclists, and other vehicles. When turning at
                corners:
              </p>
              <ul id="ul">
                <li className="courseText">
                  Slow down and approach the intersection at a controlled speed.
                </li>
                <li className="courseText">
                  Yield to pedestrians and cyclists in crosswalks.
                </li>
                <li className="courseText">
                  Be prepared for sudden stops or unexpected maneuvers from
                  other drivers.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Driving on One-Way Streets: </span>
                Driving on one-way streets involves specific safety
                considerations:
              </p>
              <p className="courseText">
                <span className="bold">1. Identifying: </span>Pay attention to
                signs indicating one-way streets and their direction of travel.
              </p>
              <p className="courseText">
                <span className="bold">2. Entering: </span>Enter one-way streets
                from the correct direction and avoid driving against the traffic
                flow.
              </p>
              <p className="courseText">
                <span className="bold">3. Speed: </span>Adhere to the posted
                speed limits on one-way streets to ensure safety for all road
                users.
              </p>
              <p className="courseText">
                <span className="bold">4. Lane Choice: </span> Select the
                appropriate lane for your intended direction of travel.
              </p>
              <p className="courseText">
                <span className="bold">5. Exiting: </span>Exit one-way streets
                correctly and follow the indicated traffic flow.
              </p>
              <p className="courseText">
                <span className="bold">6. Dealing with Wrong-Way Drivers:</span>
                Be cautious of wrong-way drivers, especially on one-way streets.
                If you encounter a wrong-way driver, slow down, move to the
                right, and signal your intentions to avoid a collision.
                Immediately notify law enforcement about the situation.
              </p>
              <h5 className="sectionHeading" id="sectionTwo">
                Section 7.2. Freeway Driving
              </h5>
              <p className="courseText">
                Freeway driving is an exhilarating experience, offering vast
                stretches of open road, breathtaking scenery, and efficient
                travel. However, it demands a unique set of skills and
                preparation for a safe and enjoyable journey.{" "}
              </p>
              <iframe
                src="https://drive.google.com/file/d/1Z1L7HnpVMH_mjh6gEWGlXzAYGpSgofNu/preview"
                title="freeway driving"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">
                A. Planning a Route in Advance
              </h5>
              <p className="courseText">
                <span className="bold">
                  a. Know How to Read a Map and Use One When Traveling Unknown
                  Routes:{" "}
                </span>
                Before embarking on a freeway trip, familiarize yourself with
                the route using maps or navigation apps. Understanding the
                upcoming interchanges, exits, and merges will help you stay
                confident and aware during the journey.
              </p>
              <p className="courseText">
                <span className="bold">
                  b. Guide Signs Which Indicate Distance and Route Direction:{" "}
                </span>
                On freeways, guide signs provide essential information about
                upcoming exits, distances to destinations, and route directions.
                Pay attention to these signs to make informed decisions and plan
                lane changes in advance.
              </p>
              <p className="courseText">
                <span className="bold">
                  c. Plan Time of Travel to Avoid Unfamiliar or Congested
                  Traffic Situations:
                </span>
                If possible, plan your travel time to avoid peak traffic hours
                and congested areas. Freeway traffic can be particularly heavy
                during rush hours, and avoiding these times will lead to a
                smoother and less stressful driving experience.
              </p>
              <h5 className="sectionSubheading">
                B. Entering the Freeway using Acceleration Lanes
              </h5>
              <p className="courseText">
                Entering the freeway through acceleration lanes demands a
                thorough understanding of the process and a keen awareness of
                surrounding traffic. Mastering this maneuver ensures a safe and
                seamless merge onto the bustling freeway, making your driving
                experience more enjoyable and stress-free. Here's a detailed
                breakdown of each step, with essential tips and insights to
                guide you along the way:{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Be Familiar with Entrance Warning Signs:{" "}
                </span>
                Before approaching the entrance ramp, always be on the lookout
                for entrance warning signs. These signs are strategically placed
                to provide essential information about upcoming freeway access
                points. Pay close attention to the signs, as they will give you
                ample time to prepare for the merge and adjust your speed
                accordingly.
              </p>
              <p className="courseText">
                <span className="bold">Observe Ramp Speed Limit: </span>Once you
                are on the entrance ramp, check for the posted speed limit.
                Adhering to this limit is critical for a successful merger.
                Driving at an appropriate speed ensures you can accelerate
                safely to match the flow of freeway traffic. Remember, the ramp
                speed limit is often lower than the freeway speed limit to allow
                for a smooth transition onto the main road.
              </p>
              <p className="courseText">
                <span className="bold">Check Speed of Freeway Traffic: </span>As
                you merge into the acceleration lane, glance at the speed of
                traffic on the freeway. Observing the flow of vehicles ahead
                helps you gauge the appropriate speed for merging. By matching
                your speed with that of the freeway traffic, you create a
                seamless entry point, reducing the chances of abrupt changes in
                speed and potential hazards.
              </p>
              <p className="courseText">
                <span className="bold">
                  Watch Vehicle Ahead for Sudden Stops:{" "}
                </span>
                Maintaining a safe following distance from the vehicle ahead is
                essential while in the acceleration lane. This buffer zone
                allows you to react promptly if the vehicle in front suddenly
                stops or slows down. A safe following distance gives you ample
                time to adjust your speed or change lanes, ensuring a safe merge
                onto the freeway.
              </p>
              <p className="courseText">
                <span className="bold">Locate a Gap in Traffic: </span> As you
                approach the end of the acceleration lane, scan the freeway for
                an adequate gap in traffic. A suitable space to merge is crucial
                for a smooth and safe entry onto the freeway. Avoid forcing your
                way into tight spots or disrupting the flow of traffic. Instead,
                be patient and wait for a reasonable gap to merge seamlessly.
              </p>
              <p className="courseText">
                <span className="bold">
                  Adjust Speed for Merging onto Freeway:{" "}
                </span>
                Before reaching the end of the acceleration lane, smoothly
                adjust your speed to match that of the freeway traffic. Gradual
                acceleration helps you synchronize with the flow of vehicles,
                creating a harmonious merge without causing sudden changes or
                unexpected maneuvers. This skillful adjustment ensures a
                confident entry onto the freeway.
              </p>
              <p className="courseText">
                <span className="bold">
                  Signal Until Freeway Completely Entered:{" "}
                </span>
                As you merge onto the freeway, maintain your turn signal until
                you have fully entered the freeway lane. Signaling continuously
                is crucial to inform other drivers of your intentions throughout
                the merging process. This courteous and proactive approach
                fosters cooperation and safety among fellow motorists, reducing
                the risk of potential collisions and confusion.
              </p>
              <h5 className="sectionSubheading">
                C. Common Mistakes Made When Using Acceleration Lanes
              </h5>
              <p className="courseText">
                Entering the freeway through acceleration lanes requires
                precision and awareness to execute a smooth merge safely.
                However, certain common mistakes can lead to hazardous
                situations for both you and other drivers. By understanding and
                avoiding these pitfalls, you can confidently navigate the
                acceleration lane.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Sudden Slowing or Stopping: </span>One of
                the most common mistakes drivers make in acceleration lanes is
                sudden slowing or stopping. Abruptly decelerating or coming to a
                stop can catch other drivers by surprise, leading to potential
                rear-end collisions or disruptions in traffic flow. This mistake
                can also confuse merging drivers behind you, making it difficult
                for them to adjust their speed and merge seamlessly onto the
                freeway.
              </p>
              <p className="courseText">
                <span className="bold">Merging at Too Slow a Speed: </span>
                Merging onto the freeway at an excessively slow speed is another
                frequent error observed in acceleration lanes. Driving at a
                speed considerably lower than the flow of traffic poses multiple
                risks. It can create a hazardous situation where you struggle to
                find a suitable gap to merge safely, potentially leading to an
                unsafe entry onto the freeway. Moreover, it hinders the overall
                flow of traffic, causing congestion and frustration among fellow
                drivers.
                <br />
                To avoid these mistakes, follow these tips for a successful
                merge:
              </p>
              <p className="courseText">
                <span className="bold">1. Maintain a Steady Speed: </span>
                Maintain a steady acceleration in the acceleration lane,
                matching your speed with that of the freeway traffic. A smooth
                and consistent speed ensures a seamless entry onto the main
                road.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Use the Full Length of the Lane:{" "}
                </span>
                Make the most of the acceleration lane's length to gain the
                necessary speed for merging. Avoid unnecessary lane changes or
                lane-hopping within the acceleration lane, as this can disrupt
                the flow of traffic and hinder your merge.
              </p>
              <p className="courseText">
                <span className="bold">3. Check for Gaps Early: </span>Start
                looking for a suitable gap in freeway traffic early in the
                acceleration lane. Anticipating the merge and planning ahead
                will give you ample time to adjust your speed and position,
                making the merge more manageable.
              </p>
              <p className="courseText">
                <span className="bold">4. Use Turn Signals: </span>Always signal
                your intent to merge before entering the freeway. Signaling
                communicates your intentions to other drivers, giving them time
                to adjust their speed and create a safe space for your entry.
              </p>
              <p className="courseText">
                <span className="bold">5. Be Confident and Assertive: </span>
                Merge with confidence and assertiveness, but also be cautious
                and attentive to the flow of traffic. A decisive and confident
                merge helps create a smoother transition onto the freeway.
              </p>
              <h5 className="sectionSubheading">
                D. Entering Directly onto the Freeway with No Acceleration Lane
              </h5>
              <p className="courseText">
                In certain situations, you may encounter freeway entrances
                without dedicated acceleration lanes. Although merging directly
                onto the freeway can be challenging, practicing prudence and
                confidence will help you navigate this maneuver safely and
                effectively.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Check for Yield or Merge Signs Before Entering:{" "}
                </span>
                Before attempting to merge onto the freeway, carefully check for
                yield or merge signs at the entrance. These signs provide
                critical information about the traffic flow and right-of-way
                rules at the specific entrance. Yield signs indicate that you
                must give way to oncoming traffic, while merge signs imply that
                you must blend into the traffic flow seamlessly.
              </p>
              <p className="courseText">
                <span className="bold">
                  Wait for a Longer Gap Before Entering:{" "}
                </span>{" "}
                When entering the freeway without an acceleration lane, it's
                essential to exercise patience and wait for a longer gap in
                traffic. Unlike acceleration lanes, which allow you to gain
                speed before merging, you'll need to find a suitable opening to
                enter the freeway safely. Waiting for a more extended gap
                provides you with ample time to accelerate and blend smoothly
                into the traffic stream.
              </p>
              <p className="courseText">
                <span className="bold">
                  Accelerate Sufficiently to Blend into Traffic:{" "}
                </span>{" "}
                Accelerating sufficiently is critical for a successful merge
                onto the freeway. Once you've identified a suitable gap, ensure
                your vehicle reaches an appropriate speed to match the flow of
                traffic. Accelerate smoothly but assertively to merge seamlessly
                without causing disruptions or unexpected changes in speed for
                other drivers.
              </p>
              <h5 className="sectionSubheading">
                E. Special Situations During Freeway Entry
              </h5>
              <p className="courseText">
                Entering the freeway can be more complex when encountering
                special situations that require additional attention and
                understanding. These unique scenarios demand skilled navigation
                to ensure a safe and seamless merge.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Timed Entrance Lights: </span>Some
                freeway entrances are equipped with timed entrance lights, which
                control the flow of merging traffic. When approaching these
                lights, pay attention to the signal's color and adjust your
                speed accordingly. Green indicates it's safe to proceed, while
                red signifies a temporary halt. Yield to the light's
                instructions and merge when the light turns green, ensuring a
                coordinated and orderly entry.
              </p>
              <p className="courseText">
                <span className="bold">Double Merge Lanes: </span>Double merge
                lanes are designed to handle high traffic volumes, allowing two
                lanes of entering vehicles to merge simultaneously. When
                confronted with double merge lanes, carefully follow lane
                markings and traffic signs. Maintain a steady speed, and be
                mindful of other drivers merging alongside you. Cooperation and
                a clear understanding of lane discipline are crucial for a
                smooth and safe merge.
              </p>
              <p className="courseText">
                <span className="bold">Diamond Lanes: </span>Diamond lanes, also
                known as carpool or High Occupancy Vehicle (HOV) lanes, are
                reserved for vehicles carrying multiple occupants. These lanes
                promote carpooling and reduce traffic congestion. If you meet
                the requirements for using diamond lanes, adhere to the
                regulations and lane access times. Respect the purpose of these
                lanes and only use them when eligible, as violators may face
                fines.
              </p>
              <p className="courseText">
                To ensure a safe and smooth merge when entering the freeway, it
                is important to stay informed and familiarize yourself with the
                specific traffic patterns and road signs of the entrance you are
                using. This includes understanding how timed entrance lights,
                double merge lanes, and diamond lanes operate. Following traffic
                signals is crucial, especially when encountering timed entrance
                lights. Obey the signals strictly, waiting patiently when the
                light is red and proceeding with caution when it turns green. By
                adhering to the light's instructions, you contribute to an
                orderly and collision-free entry onto the freeway. When dealing
                with double-merge lanes, it is essential to merge smoothly and
                cooperatively with other drivers. Communicate and cooperate with
                them, merge at an appropriate speed, and maintain your position
                in the designated lane to avoid unnecessary disruptions in
                traffic flow. If you are eligible to use diamond lanes, make
                sure to know the rules and guidelines associated with them.
                Respect the purpose of these lanes and avoid using them if you
                do not meet the requirements. Additionally, planning and
                anticipating special situations before approaching freeway
                entrances will help you navigate these scenarios with confidence
                and ease. By staying informed, following traffic signals,
                merging smoothly and cooperatively, knowing diamond lane rules,
                and planning, you can ensure a safe and successful merge onto
                the freeway.
              </p>
              <h5 className="sectionSubheading">F. Leaving the Freeway</h5>
              <p className="courseText">
                Exiting the freeway demands vigilance and quick decision-making
                to ensure a safe and timely departure. Proper planning and
                awareness of signs and lane changes are crucial for a successful
                exit.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Scan Ahead for Signs Indicating the Desired Exit Lane:{" "}
                </span>
                As you approach your intended exit, keep your focus on the road
                ahead and scan for signs indicating your desired exit lane.
                Freeway signs typically display exit numbers and upcoming exit
                names. Paying close attention to these signs allows you to
                prepare for lane changes in advance, reducing the likelihood of
                last-minute maneuvers.
              </p>
              <p className="courseText">
                <span className="bold">
                  What to Do When an Exit is Missed:{" "}
                </span>
                Sometimes, missing an exit can happen due to distractions, heavy
                traffic, or unfamiliarity with the area. If you realize you've
                missed your intended exit, follow these steps:
              </p>
              <p className="courseText">
                <span className="bold">1. Stay Calm and Safe: </span>Don't panic
                or make sudden movements. Stay focused on safely navigating the
                freeway until you can take the next exit or turn-around point.
              </p>
              <p className="courseText">
                <span className="bold">2. Proceed to the Next Exit: </span>
                Continue driving until the next available exit. Be cautious and
                mindful of other drivers while staying in the appropriate lane.
              </p>
              <p className="courseText">
                <span className="bold">3. Use Navigation or Maps: </span> If you
                have a GPS or smartphone with navigation, use it to find
                alternative routes or the nearest turn-around point.
              </p>
              <p className="courseText">
                <span className="bold">
                  4. Follow Detour Signs (If Present):{" "}
                </span>
                Some freeways may have detour signs that guide drivers to the
                next available exit or alternate route. Follow these signs to
                get back on track.
              </p>
              <p className="courseText">
                <span className="bold">5. Avoid Reckless Moves: </span>Never
                attempt to make sudden U-turns or dangerous maneuvers on the
                freeway. Such actions can lead to accidents and endanger other
                drivers.
              </p>
              <p className="courseText">
                <span className="bold">6. Plan for Future Exits: </span>If your
                destination is still reachable via another exit, plan your route
                accordingly and adjust your travel plans accordingly.
              </p>
              <h5 className="sectionSubheading">G. Exit Lanes</h5>
              <p className="courseText">
                Exit lanes, also known as deceleration lanes, are essential for
                smoothly transitioning from the freeway to surface streets.
                Proper utilization of these lanes ensures a safe and efficient
                exit, benefiting both you and fellow motorists.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Deceleration Lanes Allow Drivers to Safely Reduce Speed:{" "}
                </span>
                Deceleration lanes provide a designated space for drivers to
                gradually reduce their speed in preparation for exiting the
                freeway. As you approach the exit, merge into the deceleration
                lane at a safe speed, allowing ample distance to slow down
                smoothly without disrupting traffic flow on the main freeway
                lanes.
              </p>
              <p className="courseText">
                <span className="bold">
                  Yielding to Other Drivers on Multiple Deceleration Lanes:{" "}
                </span>
                In some cases, freeways may have multiple deceleration lanes for
                different exits. If you are on a multi-lane exit ramp, yield to
                drivers on your left when merging into the deceleration lane. Be
                cautious and patient, allowing merging traffic to find its
                appropriate lane.
              </p>
              <p className="courseText">
                <span className="bold">
                  Adjusting Speed to Posted Limit and/or Sharpness of Curve:{" "}
                </span>
                Upon entering the deceleration lane, adjust your speed to match
                the posted limit for the exit ramp. If the curve is particularly
                sharp, reduce your speed accordingly to maintain control and
                stability. Pay attention to any advisory signs that indicate a
                reduced speed limit for the curve.
              </p>
              <p className="courseText">
                When entering the deceleration lane to exit the freeway, it is
                important to follow these steps for a safe and efficient exit.
                First, signal your intent by using your turn signal well before
                entering the deceleration lane. This allows other drivers to
                adjust their speed and create a safe gap for you to merge. Next,
                maintain a safe following distance from the vehicle in front of
                you to ensure you have enough space to slow down without abrupt
                braking. Before merging, check your blind spots to ensure there
                are no vehicles in your vicinity, reducing the risk of
                collisions during lane changes. Utilize the entire length of the
                deceleration lane to gradually reduce your speed, avoiding
                coming to a complete stop on the freeway. Finally, stay alert
                for traffic signals or stop signs in some exit lanes and follow
                their instructions for a smooth exit. By following these
                guidelines, you can safely navigate the deceleration lane and
                exit the freeway without causing disruptions or endangering
                yourself or other drivers.{" "}
              </p>
              <h5 className="sectionSubheading">H. Choosing Lanes of Travel</h5>
              <p className="courseText">
                Selecting the appropriate lane on freeways is essential for
                maintaining a smooth and safe driving experience. Whether you're
                on a two-lane or multi-lane freeway, making informed decisions
                about lane choice can significantly impact your overall journey.
              </p>
              <p className="courseText">
                <span className="bold">
                  Use of Right and Left Lane on Two-Lane Freeway:{" "}
                </span>
                On a two-lane freeway, the right lane is typically reserved for
                slower-moving traffic and serves as the primary travel lane for
                most drivers. It's essential to use the right lane when driving
                at or near the speed limit. The left lane, often referred to as
                the passing lane, is intended for overtaking slower vehicles. If
                you're passing other traffic or traveling at a higher speed, use
                the left lane, but remember to return to the right lane once
                you've completed your pass.
              </p>
              <p className="courseText">
                <span className="bold">
                  Use of Right, Left, and Center Lanes of Multi-Lane Freeways:{" "}
                </span>
                On multi-lane freeways, the right lane remains the designated
                lane for slower-moving vehicles or those entering/exiting the
                freeway. The center lanes provide a balanced option for
                maintaining a consistent speed, making them suitable for most
                drivers during normal traffic conditions. The leftmost lane(s)
                continue to function as passing lanes, allowing drivers to
                overtake slower traffic. However, it's crucial to avoid staying
                in the left lane unnecessarily to prevent congestion and allow
                for smooth traffic flow.
              </p>
              <p className="courseText">
                <span className="bold">
                  Lane Use and Avoiding Merging Conflicts When Approaching
                  Interchanges:{" "}
                </span>
                When approaching freeway interchanges, exercise extra caution to
                avoid merging conflicts. Be aware of vehicles entering or
                exiting the freeway and adjust your speed and position
                accordingly. If you anticipate merging or lane changes near
                interchanges, signal your intent early and allow ample space for
                other drivers to adjust.
              </p>
              <p className="courseText">
                To drive effectively on multi-lane freeways, it's important to
                keep these tips in mind. First, stay mindful of your
                surroundings by continuously scanning the road ahead and
                checking your mirrors. This helps you stay aware of surrounding
                traffic and make timely decisions about lane changes and
                merging. Second, adjust your speed to match the flow of traffic
                in the chosen lane. Avoid sudden speed changes to maintain a
                steady and safe driving environment. Third, avoid "lane hogging"
                by not lingering in the passing lane. Remember to return to the
                right lane after passing slower vehicles, allowing other drivers
                to overtake as needed. Lastly, anticipate upcoming interchanges
                and exits to prepare for lane changes in advance. By planning,
                you can reduce the need for sudden maneuvers and enhance safety
                on the road.{" "}
              </p>
              <h5 className="sectionSubheading">
                I. Speed Limits and Lane Use
              </h5>
              <p className="courseText">
                Speed limits play a pivotal role in ensuring safe and efficient
                freeway travel. Understanding the various speed limits and how
                they relate to lane use is essential for maintaining a smooth
                flow of traffic and preventing accidents.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Posted Maximum Speed: </span>Posted
                maximum speed limits indicate the fastest legal speed at which
                vehicles can travel on the freeway. These limits are typically
                denoted on roadside signs and vary depending on the region,
                roadway type, and specific freeway segment. It's essential to
                obey the posted maximum speed to ensure safety and prevent
                traffic violations.
              </p>
              <p className="courseText">
                <span className="bold">Minimum Speed: </span>Some freeways may
                have posted minimum speed limits, which specify the lowest speed
                at which vehicles are allowed to travel. Minimum speed limits
                are implemented to maintain a consistent flow of traffic and
                reduce the risk of collisions caused by vehicles moving
                significantly slower than the rest of the traffic. If your
                vehicle cannot maintain the minimum speed, consider using
                alternative routes better suited for slower traffic.
              </p>
              <p className="courseText">
                <span className="bold">Speed for Conditions: </span>While posted
                speed limits offer general guidelines for safe travel, it's
                crucial to adjust your speed according to the prevailing
                conditions. Factors such as weather, visibility, traffic
                density, and road surface conditions may necessitate driving at
                a speed lower than the posted limit. Adapting your speed to the
                specific conditions helps maintain control of your vehicle and
                enhances overall safety.
              </p>
              <p className="courseText">
                <span className="bold">Lane Use for Slower Vehicles: </span>On
                multi-lane freeways, the right lane is typically designated for
                slower-moving vehicles or those entering/exiting the freeway.
                Drivers operating at speeds lower than the prevailing traffic
                should use the right lane to allow faster-moving vehicles to
                pass safely on the left lane. This practice reduces congestion
                and minimizes the risk of collisions resulting from speed
                differentials.
              </p>
              <p className="courseText">
                To drive safely on the freeway, it is important to follow these
                guidelines. First, observe the flow of traffic and adjust your
                speed accordingly to match the prevailing speed within your
                lane. Second, always use your turn signals and check your
                mirrors before changing lanes to ensure there is enough space
                and time for a safe lane change. Third, maintain a safe
                following distance from the vehicle in front of you to allow for
                ample reaction time in case of sudden stops or emergencies.
                Fourth, exercise caution during inclement weather by reducing
                your speed and increasing your following distance. Finally,
                practice defensive driving by staying vigilant, anticipating the
                actions of other drivers, and being prepared to react to
                potential hazards on the road. By following these tips, you can
                ensure a safe and smooth experience while driving on the
                freeway.{" "}
              </p>
              <h5 className="sectionSubheading">
                J. Establishing and Maintaining a Safe Space Cushion
              </h5>
              <p className="courseText">
                A safe space cushion is a critical aspect of defensive driving,
                especially on freeways where traffic moves at higher speeds.
                Maintaining adequate distance between your vehicle and others is
                essential for preventing collisions, allowing for better
                reaction times, and ensuring a smooth and stress-free driving
                experience.{" "}
              </p>
              <iframe
                src="https://drive.google.com/file/d/1rHWpcubgi2pvJaYULU3a0ksMQQ1lFFAt/preview"
                title="Safe cushion"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <p className="courseText">
                A safe space cushion provides numerous benefits for freeway
                driving. Firstly, it increases your reaction time. By having
                sufficient space around your vehicle, you have more time to
                react to sudden changes in traffic flow or potential hazards.
                This extra time can make a significant difference in avoiding
                accidents or collisions. Secondly, maintaining a safe space
                cushion reduces the risk of rear-end collisions. With a larger
                following distance, you have enough room to stop or maneuver
                safely without colliding with the vehicle in front of you. This
                helps to maintain a safer driving environment for both you and
                other drivers on the freeway. Lastly, a safe space cushion
                improves visibility and communication. By creating space around
                your vehicle, you enhance your visibility of the road ahead and
                the surrounding vehicles. Additionally, it allows you to
                communicate your intentions to other drivers through your
                actions and signals, promoting better coordination and reducing
                the likelihood of accidents.{" "}
              </p>
              <p className="courseText">
                To establish a safe space cushion, you can follow the
                three-second rule. Start by picking a fixed reference point,
                such as a sign or tree on the side of the road. When the vehicle
                ahead of you passes this reference point, begin counting: "One
                thousand one, one thousand two, one thousand three." If your
                vehicle reaches the reference point before completing three
                seconds, it means you are following too closely and should
                increase your following distance. Adjust your speed accordingly
                to maintain a minimum three-second gap between your vehicle and
                the one in front of you. This simple technique can help you
                establish a safe space cushion and provide you with the
                necessary time and distance to react to any unexpected
                situations on the freeway. Remember to regularly reassess and
                adjust your following distance based on the speed and traffic
                conditions to ensure your safety.{" "}
              </p>
              <p className="courseText">
                Sometimes, the ideal following distance may vary based on
                factors such as weather, road conditions, and traffic density.
                In adverse conditions, increase your following distance to at
                least four or more seconds to allow for additional reaction time
                and improved traction. While driving, consistently reassess your
                following distance and adjust it as necessary. If another
                vehicle cuts into your space cushion, create a new cushion by
                easing off the accelerator or gently braking. Always prioritize
                safety over aggressive driving.{" "}
              </p>
              <h5 className="sectionSubheading">
                K. Helping Other Drivers Enter or Exit Safely
              </h5>
              <p className="courseText">
                Assisting other drivers as they enter or exit the freeway
                promotes a harmonious driving environment and enhances overall
                safety. By being considerate and proactive, you can contribute
                to smoother traffic flow and reduce the risk of accidents.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Merging Signs Warning of Freeway Entrance:{" "}
                </span>
                When approaching a freeway entrance with merging signs, be
                attentive and prepare to accommodate merging vehicles. These
                signs serve as a heads-up for merging traffic, notifying them of
                the upcoming merge point. Adjust your speed to create a safe
                gap, allowing merging drivers to enter the freeway seamlessly.
              </p>
              <p className="courseText">
                <span className="bold">Adjusting Speed to Open Up a Gap: </span>
                Upon spotting a vehicle trying to enter the freeway, reduce your
                speed gradually to open up a safe gap for them. Slowing down
                provides the merging driver with an opportunity to merge
                smoothly without feeling rushed or pressured.
              </p>
              <p className="courseText">
                <span className="bold">Moving into an Adjacent Lane: </span>If
                you are driving in the left lane and notice a vehicle attempting
                to merge from an on-ramp, consider moving into an adjacent lane,
                if it is safe to do so. Creating space in the right lane allows
                the merging driver a clear path to enter the freeway, reducing
                merging conflicts.
              </p>
              <h5 className="sectionSubheading">L. Freeway Emergencies</h5>
              <p className="courseText">
                Encountering emergencies on the freeway can be unnerving, but
                knowing how to respond calmly and effectively can prevent
                accidents and keep everyone safe.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Steering Around Partial Blockages:{" "}
                </span>
                Partial blockages on the freeway, such as debris or a stalled
                vehicle, require immediate attention. When approaching a partial
                blockage, remain focused and alert. Safely steer around the
                obstruction, keeping a safe distance from other vehicles. Use
                your hazard lights to indicate to other drivers that there's an
                obstruction ahead.
              </p>
              <p className="courseText">
                <span className="bold">
                  Stopping and Warning Drivers to the Rear:{" "}
                </span>
                In situations where you need to stop suddenly on the freeway,
                follow these steps to ensure the safety of all drivers,
                including yourself:
              </p>
              <p className="courseText">
                <span className="bold">1. Brake Gradually: </span>Begin braking
                early and smoothly to alert drivers behind you and reduce the
                risk of rear-end collisions. Avoid slamming on the brakes, as it
                can lead to further accidents.
              </p>
              <p className="courseText">
                <span className="bold">2. Activate Hazard Lights: </span>Turn on
                your hazard lights immediately after coming to a stop. This
                serves as a visual warning to drivers approaching from the rear,
                indicating that there's a stopped vehicle ahead.
              </p>
              <p className="courseText">
                <span className="bold">3. Maintain Visibility: </span>Use your
                vehicle's emergency triangle or roadside flares to enhance your
                vehicle's visibility from a distance. Place them a safe distance
                behind your car, ideally around 200-300 feet away, to give
                oncoming drivers adequate warning.
              </p>
              <p className="courseText">
                <span className="bold">4. Stay in the Vehicle: </span>Unless
                it's absolutely necessary to leave your vehicle for safety
                reasons, remain inside with your seatbelt fastened. Exiting the
                vehicle on a busy freeway can be dangerous.
              </p>
              <p className="courseText">
                <span className="bold">5. Call for Help: </span>Use your phone
                or a roadside emergency assistance service to report the
                situation and request help if needed.
              </p>
              <p className="courseText">
                <span className="bold">6. Stay Calm and Alert: </span> Keep a
                watchful eye on your surroundings and be ready to react to any
                approaching vehicles.
              </p>
              <h5 className="sectionSubheading">M. Handling Breakdowns</h5>
              <p className="courseText">
                Experiencing a breakdown on the freeway can be a stressful and
                potentially dangerous situation. Knowing how to respond
                appropriately and safely can protect you and other drivers on
                the road.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Pull to the Shoulder Whenever Possible
                </span>
              </p>
              <p className="courseText">
                <span className="bold">1. Signaling: </span>As soon as you
                realize your vehicle is experiencing a breakdown, activate your
                turn signal to indicate your intention to move to the shoulder.
                This lets other drivers know that you need to exit the flow of
                traffic.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Shoulder Use and Vehicle Position:{" "}
                </span>
                Carefully steer your vehicle towards the right shoulder of the
                freeway, aiming to position it as far away from the traffic
                lanes as possible. This creates a safe distance between your
                vehicle and passing traffic. If your vehicle is equipped with
                hazard lights, turn them on to increase your visibility.
              </p>
              <p className="courseText">
                <span className="bold">
                  Warn Approaching Traffic with Hazard Lights, Flares, and Other
                  Devices
                </span>
              </p>
              <p className="courseText">
                <span className="bold">1. Hazard Lights: </span>Once your
                vehicle is safely on the shoulder, activate your hazard lights
                immediately. This will alert approaching drivers that your
                vehicle is stationary and help prevent rear-end collisions.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Use of Flares or Warning Triangles:{" "}
                </span>
                If you have access to warning devices like reflective triangles
                or flares, place them behind your vehicle at a safe distance,
                preferably around 200-300 feet away. This provides advanced
                warning to approaching drivers, giving them time to slow down or
                change lanes.
              </p>
              <h5 className="sectionSubheading">
                N. Re-entering the Freeway from the Shoulder
              </h5>
              <p className="courseText">
                Re-entering the freeway from the shoulder requires careful
                execution to merge seamlessly back into traffic. Follow these
                steps to ensure a safe and efficient re-entry:{" "}
              </p>
              <p className="courseText">
                <span className="bold">Signaling:</span> Before merging back
                into the flow of traffic, activate your turn signal to indicate
                your intention to re-enter the freeway. Signaling gives other
                drivers advanced warning of your movement, allowing them to
                adjust their speed and position if necessary.
              </p>
              <p className="courseText">
                <span className="bold">Accelerating on Shoulder: </span>While
                still on the shoulder, gradually accelerate your vehicle to
                match the speed of traffic in the right lane. Ensure you have
                enough space ahead to safely merge and blend with the flow of
                vehicles. Avoid accelerating too quickly, as it may catch other
                drivers off guard.
              </p>
              <h6 className="sectionSubheading">
                Entering into an Adequate Gap:
              </h6>
              <p className="courseText">
                <span className="bold">1. Check Your Blind Spots: </span>Before
                merging, check your mirrors and blind spots to ensure there are
                no vehicles in your intended merging lane.
              </p>
              <p className="courseText">
                <span className="bold">2. Identify an Adequate Gap: </span>Look
                for a suitable gap between vehicles in the right lane. Ideally,
                you want enough space to smoothly merge without disrupting the
                flow of traffic.
              </p>
              <p className="courseText">
                <span className="bold">3. Merging with Caution: </span> When you
                find an appropriate gap, merge smoothly onto the freeway. Be
                attentive to the speed of surrounding vehicles and adjust your
                acceleration accordingly.
              </p>
              <p className="courseText">
                <span className="bold">4. Yield if Necessary: </span>If traffic
                is heavy and there's no immediate gap available, yield to
                traffic in the right lane and wait for a safe opportunity to
                merge.
              </p>
              <h5 className="sectionSubheading">O. Special Freeway Problems</h5>
              <p className="courseText">
                Navigating freeways can sometimes present unique challenges that
                drivers need to be aware of. Two specific issues to be mindful
                of are velocitation and highway hypnosis. Understanding and
                addressing these problems is essential for promoting safety and
                preventing accidents on the freeway:{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Velocitation - Unconsciously Going Too Fast:{" "}
                </span>
                Velocitation, also known as "speed creep," refers to the
                phenomenon where drivers unconsciously increase their speed
                while driving on long, open stretches of freeway. This occurs
                because the brain becomes acclimated to higher speeds, making it
                feel normal. To avoid velocitation:
              </p>
              <p className="courseText">
                <span className="bold">1. Check Speed Regularly: </span>Make a
                habit of checking your speedometer at regular intervals,
                especially on long trips. This helps you maintain awareness of
                your actual speed.
              </p>
              <p className="courseText">
                <span className="bold">2. Use Cruise Control: </span> On long,
                open stretches of freeway with consistent traffic flow, consider
                using your vehicle's cruise control function. This helps
                maintain a steady speed and reduces the risk of velocitation.
              </p>
              <p className="courseText">
                <span className="bold">3. Stay Mindful: </span>Stay mentally
                engaged while driving. Avoid distractions and stay focused on
                the road and traffic conditions.
              </p>
              <p className="courseText">
                <span className="bold">
                  Highway Hypnosis - Avoiding Drowsiness:{" "}
                </span>
                Highway hypnosis, also known as "white line fever," is a
                trance-like state that drivers may experience during long,
                monotonous drives. It can lead to reduced awareness and
                drowsiness, posing significant dangers on the freeway.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1zXzzSA1niLjW-gdSsjYWw6buPaag5Frz/preview"
                title="fightng highway hypnosis"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <p className="courseText">To prevent highway hypnosis: </p>
              <p className="courseText">
                <span className="bold">1. Take Regular Breaks: </span> Plan rest
                stops during long journeys and take breaks at least every two
                hours. Stretch your legs, get some fresh air, and rest your eyes
                to stay alert.
              </p>
              <p className="courseText">
                <span className="bold">2. Stay Hydrated: </span>Dehydration can
                contribute to drowsiness. Keep a bottle of water within reach
                and drink regularly while driving.
              </p>
              <p className="courseText">
                <span className="bold">3. Avoid Fatigue: </span>Ensure you are
                well-rested before embarking on a long drive. Avoid driving
                during your usual sleep hours.
              </p>
              <p className="courseText">
                <span className="bold">4. Listen to Engaging Content: </span>
                Listen to upbeat music, audiobooks, or podcasts to keep your
                mind stimulated and reduce monotony.
              </p>
              <p className="courseText">
                <span className="bold">5. Stay Physically Active: </span>Shift
                your body position regularly and engage in small exercises like
                shoulder rolls to stay awake and attentive.
              </p>
              <p className="courseText">
                <span className="bold">6. Drive with a Companion: </span>If
                possible, have a passenger in the car to engage in conversation
                and share driving responsibilities.
              </p>
              <h5 className="sectionSubheading">P. Navigating Toll Booths</h5>
              <p className="courseText">
                Toll booths are a common feature on many freeways and
                expressways, providing essential funding for road maintenance
                and infrastructure. As a driver, it's crucial to approach toll
                booths safely and efficiently.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Reduced Speed Limits: </span> As you
                approach a toll booth, pay attention to any posted reduced speed
                limits. These limits are typically set to ensure the safety of
                drivers and toll booth operators. Adhering to the reduced speed
                limit allows you to maintain control of your vehicle, especially
                when you may need to stop to pay the toll.
              </p>
              <p className="courseText">
                <span className="bold">Distance Ahead: </span>Maintaining a safe
                distance from the vehicle in front is crucial when approaching a
                toll booth. Leave enough space to allow for smooth deceleration
                and potential stops without the risk of rear-end collisions.
                Keeping a safe distance also gives you adequate time to react to
                any sudden changes in traffic flow.
              </p>
              <p className="courseText">
                <span className="bold">
                  Designated Lane for Special Vehicles:{" "}
                </span>
                Many toll booths have designated lanes for specific types of
                vehicles, such as:
              </p>
              <p className="courseText">
                <span className="bold">1. Cash Lanes: </span>These lanes allow
                drivers to pay tolls with cash. If you intend to pay with cash,
                use these lanes and have the exact amount ready for quicker
                transactions.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Electronic Toll Collection (ETC) Lanes:{" "}
                </span>
                ETC lanes are equipped with transponder readers that
                automatically deduct toll amounts from a linked account. If you
                have an electronic toll tag, use these lanes to benefit from
                faster processing and reduced wait times.
              </p>
              <p className="courseText">
                <span className="bold">3. HOV Lanes: </span> High-occupancy
                vehicle (HOV) lanes are reserved for vehicles carrying a
                specific number of passengers. Carpools, vanpools, and eligible
                vehicles often use these lanes at no charge or reduced toll
                rates.
              </p>
              <p className="courseText">
                <span className="bold">4. Fastrak or Express Lanes:</span>Some
                freeways feature express lanes with varying toll rates depending
                on traffic flow. These lanes usually offer a faster and less
                congested route for drivers willing to pay a higher toll.
              </p>
              <h4 className="sectionHeading" id="sectionThree">
                Section 7.3. Driving on Open Highway
              </h4>
              <h5 className="sectionSubheading">
                A. Identifying and Handling Potential Hazards
              </h5>
              <p className="courseText">
                Driving on open highways can offer scenic views and smoother
                traffic flow, but it also comes with unique challenges. Being
                aware of potential hazards and knowing how to handle them is
                crucial for a safe and enjoyable driving experience. Here are
                some areas of potential hazards and how to approach them:{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Unmarked Farm and Field Driveways:{" "}
                </span>
                Watch out for unmarked farm and field driveways along open
                highways, especially in rural areas. These driveways may not be
                clearly visible from a distance, and vehicles could suddenly
                emerge onto the highway. Approach such areas with caution,
                reduce your speed, and be prepared to stop if necessary.
              </p>
              <p className="courseText">
                <span className="bold">Livestock Crossing Areas: </span>In rural
                regions, livestock crossings are common, especially in
                agricultural zones. Be cautious when driving near open fields
                and pastures. Livestock, such as cows or sheep, might wander
                onto the roadway unexpectedly. Reduce your speed in these areas
                and watch for warning signs indicating potential livestock
                crossings.
              </p>
              <p className="courseText">
                <span className="bold">Rough Road Conditions: </span>Some open
                highways may have rough road conditions, particularly in less
                populated regions. Be attentive to road signs warning of uneven
                surfaces, potholes, or construction zones. Slow down when
                encountering these areas to maintain vehicle control and avoid
                damage to your vehicle.
              </p>
              <p className="courseText">
                <span className="bold">Unmarked Shoulders: </span>On open
                highways, unmarked or poorly marked shoulders can pose hazards.
                These areas lack clear delineation between the roadway and the
                shoulder, making it challenging to determine the appropriate
                lane position. Stay alert and keep a safe distance from the edge
                to avoid accidentally veering off the pavement.
              </p>
              <p className="courseText">
                <span className="bold">Roadside Stands or Gas Stations: </span>
                Approaching roadside stands or gas stations can be risky due to
                vehicles pulling in and out of these areas. Keep an eye out for
                turning vehicles, pedestrians, and cyclists, especially if there
                are no dedicated turn lanes. Slow down when passing these spots
                and yield the right-of-way to vehicles entering the highway.
              </p>
              <h5 className="sectionSubheading">
                B. Interacting with Other Roadway Users on Open Highways
              </h5>
              <p className="courseText">
                Sharing the road with various types of users is an integral part
                of driving on open highways.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1Av-za77UL4KOVOH7KagFtIArDurZYrSF/preview"
                title="communicating effectively with other road users"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">a. Trucks</h5>
              <p className="courseText">
                <span className="bold">
                  1. Maintain Safe Following Distance:{" "}
                </span>
                Trucks have longer stopping distances, so avoid tailgating them.
                Allow at least a four-second following distance to provide ample
                time to react to any sudden changes.
              </p>
              <p className="courseText">
                <span className="bold">2. Pass with Caution: </span>When passing
                a truck, ensure you can see the entire front of the truck in
                your rearview mirror before merging back into their lane. Give
                them enough space to maneuver safely.
              </p>
              <p className="courseText">
                <span className="bold">3. Avoid Blind Spots: </span>Trucks have
                large blind spots, especially on the right side and towards the
                rear. Avoid lingering in these blind spots to ensure the truck
                driver can see you.
              </p>
              <h5 className="sectionSubheading">b. Slow Moving Vehicles</h5>
              <p className="courseText">
                <span className="bold">1. Be Patient: </span>When encountering
                slow-moving vehicles, such as tractors or farm equipment,
                exercise patience. Maintain a safe following distance and wait
                for a suitable opportunity to pass safely.
              </p>
              <p className="courseText">
                <span className="bold">2. Pass with Caution: </span>When passing
                slow-moving vehicles, use your turn signals and check for
                oncoming traffic. Ensure there's enough space ahead to complete
                the pass without rushing.
              </p>
              <p className="courseText">
                <span className="bold">3. Use Passing Lanes: </span>On some open
                highways, passing lanes are designated for overtaking slower
                vehicles. Utilize these lanes when available to pass safely.
              </p>
              <h5 className="sectionSubheading">c. Animals</h5>
              <p className="courseText">
                <span className="bold">1. Reduce Speed: </span>In rural areas
                with potential wildlife crossings, reduce your speed to increase
                reaction time in case an animal darts onto the road.
              </p>
              <p className="courseText">
                <span className="bold">2. Pay Attention to Road Signs: </span>
                Watch for warning signs indicating wildlife crossing areas,
                especially during dawn and dusk when animals are more active.
              </p>
              <p className="courseText">
                <span className="bold">3. Scan the Roadside: </span>Continuously
                scan the roadside for any signs of movement or animal activity.
                Be prepared to stop if an animal is crossing the road.
              </p>
              <h5 className="sectionSubheading">
                C Navigating the Environment on Open Highways
              </h5>
              <p className="courseText">
                Driving on open highways can expose you to various environmental
                challenges, such as curves, hills, mountainous terrain, and
                encounters with other vehicles. Understanding how to handle
                these situations is crucial for maintaining safety and control
                on the road. Here's how to navigate the environment on open
                highways:{" "}
              </p>
              <p className="courseText">
                <span className="bold">a. Curves</span>
              </p>
              <p className="courseText">
                <span className="bold">1. Speed and Braking: </span>Reduce your
                speed before entering curves to maintain control and avoid
                skidding. Apply gentle braking if necessary, but avoid sudden
                and hard braking to prevent loss of control.
              </p>
              <p className="courseText">
                <span className="bold">b. Hills</span>
              </p>
              <p className="courseText">
                <span className="bold">1. Shifting Gears:</span>On uphill
                slopes, downshift to a lower gear to maintain power and prevent
                engine strain. Shift to higher gears on downhill slopes to
                control speed.
              </p>
              <p className="courseText">
                <span className="bold">2. Visibility and Speed: </span>Reduce
                speed when approaching the top of a hill, as visibility may be
                limited. Use your headlights to improve visibility during
                low-light conditions.
              </p>
              <p className="courseText">
                <span className="bold">3. Brake Failure or Overheating: </span>
                To prevent brake failure or overheating when descending steep
                hills, use engine braking and downshifting instead of relying
                solely on brakes.
              </p>
              <p className="courseText">
                <span className="bold">c. Mountain Driving</span>
              </p>
              <p className="courseText">
                <span className="bold">1. Vehicle Condition: </span>Ensure your
                vehicle is in excellent condition before embarking on
                mountainous routes. Check the brakes, tires, and cooling system
                to avoid breakdowns.
              </p>
              <p className="courseText">
                <span className="bold">2. Speed: </span>Adhere to posted speed
                limits and drive at a safe and comfortable speed, considering
                the steep terrain and road conditions.
              </p>
              <p className="courseText">
                <span className="bold">
                  3. Allowing for Other Vehicles to Pass:{" "}
                </span>
                On narrow mountain roads, use turnouts or designated passing
                areas to allow faster vehicles to pass safely.
              </p>
              <h5 className="sectionSubheading">
                Special Problems at High Altitudes
              </h5>
              <p className="courseText">
                <span className="bold">
                  1. Loss of Power for Hill Climbing and Passing:{" "}
                </span>
                At high altitudes, engines may experience reduced power. Allow
                extra time for hill climbs and passing maneuvers.
              </p>
              <p className="courseText">
                <span className="bold">2. Vapor Lock and Overheating: </span>
                High altitudes can contribute to vapor lock in the fuel system
                and engine overheating. Ensure your vehicle's cooling system is
                in good working order.
              </p>
              <h5 className="sectionSubheaading">
                Meeting or Approaching Other Vehicles on Open Roadway
              </h5>
              <p className="courseText">
                <span className="bold">1. Meeting Lines of Cars: </span>When
                meeting lines of cars on two-lane highways, keep to the right
                side of your lane to provide enough space for oncoming traffic.
              </p>
              <p className="courseText">
                <span className="bold">2. Meeting at Hilltops: </span>Reduce
                speed when approaching hilltops to increase visibility and avoid
                unexpected encounters with oncoming vehicles.
              </p>
              <p className="courseText">
                <span className="bold">3. Meeting at Night: </span>Dim your
                headlights when meeting other vehicles at night to avoid
                blinding the drivers.
              </p>
              <p className="courseText">
                <span className="bold">4. Meeting Slow-Moving Vehicles: </span>
                Exercise patience when encountering slow-moving vehicles.
                Maintain a safe following distance and only pass when it is safe
                to do so.
              </p>
              <h5 className="sectionSubheading">
                Handling Road Conditions on Open Highways
              </h5>
              <p className="courseText">
                The condition of the road plays a significant role in ensuring a
                safe and smooth driving experience on open highways. Being
                mindful of road conditions and adapting your driving accordingly
                is crucial for your safety and the safety of others.{" "}
              </p>
              <p className="courseText">
                <span className="bold">1. Rough Roads: </span>Reduce your speed
                when encountering rough roads, such as uneven pavement,
                potholes, or construction zones. Slow down to minimize vehicle
                vibrations and maintain better control. Keep a safe distance
                from other vehicles to avoid potential collisions caused by
                sudden movements on rough surfaces.
              </p>
              <p className="courseText">
                <span className="bold">2. Traction: </span>Maintaining proper
                traction is essential for safe driving. During adverse weather
                conditions, such as rain or snow, reduce your speed to improve
                traction and prevent skidding. Avoid sudden acceleration,
                braking, or steering maneuvers, as they can lead to loss of
                control.
              </p>
              <p className="courseText">
                <span className="bold">3. Width of Road: </span>Be mindful of
                the width of the road, especially on narrow highways. Keep to
                the center of your lane to allow ample space between your
                vehicle and the edge of the road. If you encounter oncoming
                vehicles on narrow roads, slow down and use turnouts if
                available to facilitate passing.
              </p>
              <p className="courseText">
                <span className="bold">4. Field of View: </span>Maintaining a
                clear field of view is crucial for safe driving. Keep your
                windshield, windows, and mirrors clean to maximize visibility.
                Remove any obstructions, such as snow, ice, or condensation,
                that may hinder your view of the road and surrounding traffic.
              </p>
              <p className="courseText">
                <span className="bold">5. Line of Sight: </span>Maintain a clear
                line of sight to anticipate potential hazards. Adjust your seat
                and mirrors to achieve the best possible view of the road. When
                approaching intersections or curves, slow down to have
                sufficient time to react to unexpected situations.
              </p>
              <h4 className="sectionHeading" id="sectionFour">
                Section 7.4 Passing
              </h4>
              <h5 className="sectionSubheading">
                A. Demands of Proper passing
              </h5>
              <p className="courseText">
                Passing other vehicles on open highways requires skill,
                judgment, and quick decision-making. Proper passing is essential
                for maintaining a smooth flow of traffic and ensuring the safety
                of all road users. To execute successful passes, drivers must
                possess good judgment, make rapid decisions, and be familiar
                with their vehicle's performance capabilities.
              </p>
              <h5 className="sectionSubheading">Good Judgement</h5>
              <iframe
                src="https://drive.google.com/file/d/13fw3nQJXiR_NQPZRpoSMz7j81tVacJiV/preview"
                title="passing"
                className="courseVideo"
                allow="autoplay"
              ></iframe>

              <p className="courseText">
                Exercising good judgment is paramount when attempting to pass
                another vehicle. Before initiating a pass, carefully assess the
                following factors:{" "}
              </p>
              <ul id="ul">
                <li className="courseText">
                  <span className="bold">Distance and Speed: </span>Ensure you
                  have enough distance and clear visibility ahead to complete
                  the pass safely without impeding oncoming traffic.
                </li>
                <li className="courseText">
                  <span className="bold">Road Conditions: </span>Consider the
                  road's surface and conditions. Avoid passing on curves, hills,
                  or areas with limited visibility.
                </li>
                <li className="courseText">
                  <span className="bold">Other Traffic: </span>Be mindful of
                  other vehicles on the road. Check for any vehicles approaching
                  from behind or ahead and make sure you have enough time and
                  space to pass without causing disruptions.
                </li>
              </ul>
              <h5 className="sectionSubheading">Rapid Decision Making</h5>
              <p className="courseText">
                Passing situations often demand quick decisions. As you approach
                a slower-moving vehicle, make swift and confident choices based
                on the conditions around you. If you determine that it is safe
                to pass, signal your intention and smoothly move into the
                passing lane. Ensure you can complete the pass without speeding
                excessively and return to your original lane promptly once you
                have overtaken the slower vehicle.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Knowledge of Your Vehicle's Performance Abilities:{" "}
                </span>
                Understanding your vehicle's performance capabilities is crucial
                for executing safe passes. Be familiar with your vehicle's
                acceleration, braking, and handling capabilities. Avoid
                attempting passes if your vehicle's power is inadequate to
                complete the maneuver safely. If you drive a larger vehicle or
                one with limited acceleration, give yourself more time and space
                for passing.
              </p>
              <h5 className="sectionSubheading">
                B. Understanding When Passing is Authorized or Prohibited
              </h5>
              <p className="courseText">
                Passing is a common maneuver on open highways, but it must be
                done safely and legally. Drivers should be aware of situations
                where passing is authorized or prohibited to ensure smooth
                traffic flow and prevent accidents. Here are the different
                scenarios regarding passing:{" "}
              </p>
              <p className="courseText">
                <span className="bold">a. Passing Lanes</span>
              </p>
              <p className="courseText">
                <span className="bold">1. Authorized: </span>Passing lanes are
                designated sections of the road where passing is permitted.
                These lanes are typically marked with signs indicating "Passing
                Lane" or "Keep Right Except to Pass." Drivers can use these
                lanes to overtake slower vehicles without violating traffic
                rules.
              </p>
              <p className="courseText">
                <span className="bold">2. Prohibited: </span> Passing is not
                allowed on regular lanes while driving through a passing lane.
                Once drivers enter a passing lane, they should not pass other
                vehicles already in that lane, as it may lead to unsafe
                conditions and disrupt the flow of traffic.
              </p>
              <p className="courseText">
                <span className="bold">b. Pavement Markings</span>
              </p>
              <p className="courseText">
                <span className="bold">1. Authorized: </span>Some highways have
                dashed or broken pavement markings in the center, indicating
                that passing is allowed. Drivers can use these markings as
                guidance for safe passing maneuvers when it is safe to do so.
              </p>
              <p className="courseText">
                <span className="bold">2. Prohibited: </span>On highways with
                solid yellow or double yellow center lines, passing is generally
                prohibited. Drivers should not attempt to pass other vehicles if
                there is a solid yellow line on their side of the road. The
                solid yellow line indicates that passing is unsafe due to
                limited visibility or increased traffic flow.
              </p>
              <p className="courseText">
                <span className="bold">c. Passing on Right</span>
              </p>
              <p className="courseText">
                <span className="bold">Authorized: </span>Passing on the right
                is permitted in specific situations. When the vehicle ahead is
                making a left turn or signaling a left turn, passing on the
                right is allowed if there is sufficient space and it can be done
                safely without violating traffic rules
              </p>
              <p className="courseText">
                <span className="bold">Prohibited: </span>Passing on the right
                is generally not allowed in situations other than those
                mentioned above. Drivers should not attempt to pass on the right
                when the vehicle ahead is moving straight or making a right
                turn, as it can lead to dangerous conditions and accidents.
              </p>
              <h5 className="sectionSubheading">
                C. Handling Special Passing Situations
              </h5>
              <p className="courseText">
                Passing under certain circumstances requires extra caution and
                consideration to ensure the safety of all road users. These
                special situations demand a heightened awareness of potential
                risks and the need for responsible driving.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Without Sufficient Clearance: </span>
                Avoid attempting to pass if there is insufficient space to do so
                safely. Passing in areas with narrow roadways, tight curves, or
                limited visibility can lead to collisions or endanger oncoming
                traffic. Exercise patience and wait for a clear and suitable
                opportunity to pass without compromising safety.
              </p>
              <p className="courseText">
                <span className="bold">On a Hill: </span>Passing on a hill
                presents unique challenges due to limited visibility. It is
                generally discouraged, as the steep incline can obscure oncoming
                traffic. Only attempt to pass on a hill if there is a clear view
                of the road ahead, and you can safely overtake the slower
                vehicle without impeding other drivers or causing hazardous
                situations.
              </p>
              <p className="courseText">
                <span className="bold">
                  Intersections or Railroad Crossings:{" "}
                </span>
                Passing near intersections or railroad crossings is dangerous
                and illegal. Drivers must never pass a vehicle at or immediately
                before these locations. Passing in these areas can obstruct the
                view of other drivers and pedestrians, leading to potentially
                fatal accidents. Always wait until you have completely cleared
                the intersection or crossing before considering a pass.
              </p>
              <p className="courseText">
                <span className="bold">School Bus: </span>Never pass a school
                bus that is stopped with its flashing red lights activated. In
                all states, it is illegal to pass a school bus loading or
                unloading passengers. The safety of children is of utmost
                importance, and attempting to pass a school bus under these
                conditions poses significant risks.
              </p>
              <p className="courseText">
                <span className="bold">Bridges or Abutments: </span>Avoid
                passing near bridges or abutments, especially when lanes are
                narrowed due to construction or other factors. These areas may
                have reduced clearance, making it unsafe to pass. Always stay in
                your lane and exercise caution when approaching such structures.
              </p>
              <h5 className="sectionSubheading">
                D. Recognizing and Avoiding Dangerous Passing Situations
              </h5>
              <p className="courseText">
                Passing in certain situations can be hazardous and should be
                avoided to ensure the safety of all road users. Recognizing
                potentially dangerous passing scenarios is crucial for making
                responsible decisions and preventing accidents. Here's how to
                handle various dangerous passing situations:
              </p>
              <p className="courseText">
                <span className="bold">Long Line of Cars Ahead: </span>Passing
                when there is a long line of cars ahead is risky and
                impractical. It can lead to unnecessary delays, disrupt the flow
                of traffic, and increase the chances of a collision. Exercise
                patience and wait for a safer opportunity to pass when the
                traffic clears and the road ahead is visible.
              </p>
              <p className="courseText">
                <span className="bold">Intention to Stop or Turn: </span> Avoid
                passing a vehicle that indicates its intention to stop or turn.
                Passing in such situations can lead to abrupt braking or
                unexpected lane changes, creating dangerous conditions for both
                drivers involved and others on the road.
              </p>
              <p className="courseText">
                <span className="bold">Oncoming Car Too Close: </span>If you see
                an oncoming car approaching too closely, it's best to refrain
                from passing. Passing with limited time and space can lead to a
                head-on collision. Always prioritize safety and wait until there
                is enough distance between you and the oncoming vehicle before
                attempting to pass.
              </p>
              <p className="courseText">
                <span className="bold">
                  Car Ahead is at or Near the Speed Limit:{" "}
                </span>{" "}
                Passing a vehicle that is already traveling at or near the speed
                limit may not yield significant time savings and can be unsafe.
                Consider the potential risks and benefits before attempting to
                pass. If the difference in speed is minimal, it might be best to
                maintain your current position behind the vehicle.
              </p>
              <p className="courseText">
                <span className="bold">
                  Maneuver Cannot be Completed Before Reaching a No-Passing
                  Zone:{" "}
                </span>
                Passing when you cannot complete the maneuver before reaching a
                no-passing zone is against traffic laws and endangers everyone
                on the road. Always check for upcoming no-passing zones and plan
                your passes accordingly.
              </p>
              <h5 className="sectionSubheading">
                E. Assessing Passing Potential for Safe Maneuvers
              </h5>
              <p className="courseText">
                Passing requires careful assessment of road conditions, traffic
                patterns, and potential hazards. Before attempting a pass,
                drivers must evaluate passing potential to ensure a safe and
                successful maneuver. Here's how to assess passing potential
                responsibly:{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Identifying a Safe Distance Ahead to Complete Pass:{" "}
                </span>
                Before initiating a pass, identify a clear and sufficient
                distance ahead to complete the maneuver safely. Ensure that
                there is enough space to overtake the slower vehicle without
                disrupting oncoming traffic or forcing other drivers to slow
                down abruptly. A safe distance allows you to execute the pass
                smoothly and return to your lane with ease.
              </p>
              <p className="courseText">
                <span className="bold">
                  Identify an End-of-Pass Gap to Pull Back into Lane:{" "}
                </span>
                As you pass, keep an eye on the traffic in front of the vehicle
                you are overtaking. Identify an appropriate gap ahead where you
                can safely merge back into your lane after completing the pass.
                Miscalculating this gap can lead to dangerous situations, such
                as having to cut off other vehicles or being left in a dangerous
                position on the road.
              </p>
              <p className="courseText">
                <span className="bold">
                  Establish a Safe Response for Hazards:{" "}
                </span>
                Always be prepared for unexpected hazards while passing.
                Identify potential obstacles or changes in road conditions, such
                as oncoming traffic, pedestrians, or animals. Have a safe
                response plan in place to quickly abort the pass if necessary
                and return to your original lane. Being alert and ready to react
                helps prevent accidents and ensures a smooth passing maneuver.
              </p>
              <p className="courseText">
                <span className="bold">Checking for Road Traffic: </span>Check
                for road traffic both ahead and behind you before attempting to
                pass. Assess the current traffic flow and look for any vehicles
                approaching from the rear. Ensure there is enough space and time
                to pass without impeding other drivers or causing hazardous
                situations. If there is heavy traffic, exercise patience and
                wait for a better opportunity to pass.
              </p>
              <h5 className="sectionSubheading">
                F. Steps for Successful Passing
              </h5>
              <p className="courseText">
                Passing requires careful planning and execution to ensure the
                safety of all road users. By following a step-by-step approach,
                drivers can perform passing maneuvers smoothly and responsibly.
                Here are the essential steps for successful passing:{" "}
              </p>
              <p className="courseText">
                <span className="bold">Scan for Hazards: </span>Before
                attempting a pass, thoroughly scan the road for potential
                hazards that may affect the maneuver. Pay particular attention
                to the following:
              </p>
              <p className="courseText">
                <span className="bold">1. Oncoming Vehicles: </span>Check for
                oncoming vehicles in the opposite lane. Ensure that you have
                enough time and space to complete the pass safely without
                endangering yourself or others.
              </p>
              <p className="courseText">
                <span className="bold">
                  2. Vehicles Approaching from the Rear:{" "}
                </span>
                Be aware of vehicles approaching from behind you. Check your
                mirrors and blind spots to identify any fast-approaching
                vehicles that may affect your passing attempt.
              </p>
              <p className="courseText">
                <span className="bold">3. Merging Vehicles: </span>Keep an eye
                out for vehicles merging onto the road from ramps or side
                streets. Ensure that there are no merging vehicles in your path
                before starting the pass.
              </p>
              <p className="courseText">
                <span className="bold">Check for Blind Spots: </span>Before
                changing lanes to pass, always check your blind spots to ensure
                there are no vehicles in your intended path. Blind spots are
                areas around your vehicle that cannot be directly seen through
                your mirrors. Turn your head and glance over your shoulder to
                cover these blind spots effectively.
              </p>
              <p className="courseText">
                <span className="bold">Signal Intent: </span>Signaling your
                intent to pass is crucial for communicating with other drivers
                on the road. Activate your left-turn signal well in advance to
                indicate your intention to move into the passing lane. Clear and
                early signaling allows others to anticipate your actions and
                adjust their driving accordingly.
              </p>
              <p className="courseText">
                <span className="bold">Warn the Driver Ahead: </span>To avoid
                surprising the driver ahead, flash your headlights or use your
                horn gently before initiating the pass. This serves as a
                courteous warning and can prompt the driver ahead to become
                aware of your intention to pass.
              </p>
              <p className="courseText">
                <span className="bold">Obtain a Speed Advantage: </span>To
                execute a successful pass, ensure you have a sufficient speed
                advantage over the vehicle you are overtaking. Accelerate to a
                speed that allows you to complete the pass smoothly and safely
                without excessive speed differences that may lead to hazardous
                situations.
              </p>
              <p className="courseText">
                <span className="bold">Re-check Conditions Ahead: </span>While
                passing, continuously scan the road ahead to identify any
                potential hazards or oncoming traffic. This proactive approach
                helps you anticipate challenges and adjust your passing strategy
                accordingly.
              </p>
              <p className="courseText">
                <span className="bold">Create a Return Space: </span> Maintain a
                sufficient gap ahead of the vehicle you passed, creating a
                cushion for your return to the original lane. This space allows
                you to merge back without causing discomfort to the driver you
                passed or requiring them to adjust their speed.
              </p>
              <p className="courseText">
                <span className="bold">Signal Return: </span>Once you have
                safely overtaken the vehicle, signal your intention to return to
                your original lane using your right-turn signal. This alerts
                drivers behind you of your upcoming lane change and ensures a
                smooth and safe merge back into the right lane.
              </p>
              <h5 className="sectionSubheading">
                G. When Being Passed: How to Respond Safely
              </h5>
              <p className="courseText">
                <span className="bold">
                  When another vehicle is attempting to pass you, it's essential
                  to respond in a way that ensures the safety of both drivers.
                  Here's what to do when you are being passed:
                </span>
              </p>
              <p className="courseText">
                <span className="bold">Maintain Speed: </span>As the driver
                being passed, it's crucial to maintain your current speed and
                avoid any sudden changes in velocity. Consistently maintaining
                your speed helps the passing driver gauge when it's safe to
                return to their lane. Abruptly slowing down or speeding up can
                lead to dangerous situations, so it's essential to be
                predictable and steady.
              </p>
              <p className="courseText">
                <span className="bold">Yield if Required: </span>If the passing
                driver's vehicle is approaching yours with limited space to
                complete the pass safely, it may be necessary to yield and make
                room for them. If conditions allow, move slightly to the right
                within your lane to create more space for the passing vehicle.
                This cooperative action helps facilitate a smoother and safer
                passing maneuver.
              </p>
              <h4 className="sectionHeading" id="sectionFive">
                Section 7.5. Hazardous Conditions
              </h4>
              <h5 className="sectionSubheading">A. Driving in the Fog</h5>
              <p className="courseText">
                Driving in fog can be one of the most challenging and dangerous
                situations on the road. Fog reduces visibility, increasing the
                risk of accidents.{" "}
              </p>
              <iframe
                src="https://drive.google.com/file/d/1yISw5lBOqoWhyRI-xlbdRIyP78SlnpY_/preview"
                title="driving in smog"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">
                Obtaining Maximum Visibility and Reducing Glare
              </h5>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Appropriate Use of Headlights: </span>
                  Use low-beam headlights in foggy conditions. High beams can
                  cause glare, reducing visibility further. Ensure headlights
                  are clean and properly aimed.
                </li>
                <li className="courseText">
                  <span className="bold">Mounting and Use of Fog Lights: </span>
                  If your vehicle is equipped with fog lights, use them along
                  with low-beam headlights. Fog lights are designed to project
                  light closer to the ground, improving visibility in fog.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Windshield Wipers and Defrosters:{" "}
                  </span>
                  Keep windshield wipers in good condition and set to an
                  appropriate speed. Use the defroster to prevent the windshield
                  from fogging up from the inside.
                </li>
              </ol>
              <p className="courseText">
                <span className="bold">
                  Reduce Speed, but Keep Moving when Entering a Fog Bank:{" "}
                </span>
                Gradually reduce speed as you enter a fog bank. Sudden stops can
                lead to rear-end collisions, as other drivers may not see your
                vehicle in time. However, maintain forward movement to prevent
                congestion.
              </p>
              <p className="courseText">
                <span className="bold">
                  Watch for Slow-Moving Vehicles Ahead:{" "}
                </span>
                Maintain a safe following distance and be prepared to encounter
                slow-moving vehicles ahead. Use headlights and fog lights to
                make your vehicle visible to them.
              </p>
              <p className="courseText">
                <span className="bold">
                  Look in the Rearview Mirror for Vehicles Approaching from
                  Rear:{" "}
                </span>
                Periodically check the rearview mirror for vehicles approaching
                from behind. Be cautious when braking and avoid sudden lane
                changes, as other drivers may have limited visibility.
              </p>
              <p className="courseText">
                <span className="bold">
                  Listen for Traffic You Cannot See:{" "}
                </span>
                Use your sense of hearing to listen for approaching vehicles
                that you may not see due to limited visibility. Engine sounds,
                tire noise, and sirens can indicate nearby traffic.
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Crossing Roadways or Passing Long Lines of Cars:{" "}
                </span>
                In foggy conditions, avoid crossing roadways or attempting to
                pass long lines of cars. Unpredictable movements can lead to
                accidents. Stay in your lane and maintain a safe and steady
                speed.
              </p>
              <p className="courseText">
                <span className="bold">
                  Keep Headlights and Taillights Clean:{" "}
                </span>
                Regularly clean your vehicle's headlights and taillights. Dirt
                and debris can reduce their effectiveness, making your vehicle
                less visible to others.
              </p>
              <p className="courseText">
                <span className="bold">
                  Consider Postponing Driving until Conditions Clear:{" "}
                </span>
                If fog is extremely dense and visibility is severely
                compromised, consider postponing your trip until conditions
                improve. Safety should always be the top priority.
              </p>
              <p className="courseText">
                <span className="bold">
                  When Your Vehicle Stalls in the Fog:{" "}
                </span>
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">
                    Move Off Roadway as Quickly as Possible:{" "}
                  </span>
                  If your vehicle stalls in the fog, turn on hazard lights and
                  attempt to move it off the roadway quickly to avoid
                  collisions.
                </li>
                <li className="courseText">
                  <span className="bold">Move Away from the Vehicle: </span>Once
                  off the road, move away from your vehicle to a safe location.
                  Stalled vehicles in dense fog can be difficult for other
                  drivers to see, increasing the risk of accidents.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Restricted Use of Flashers or Flares:{" "}
                  </span>
                  In some cases, using flashers or flares in dense fog can
                  create additional confusion for other drivers. Use them
                  cautiously and only when necessary and safe.
                </li>
              </ol>
              <h5 className="sectionSubheading">B. Driving in the rain</h5>
              <p className="courseText">
                Driving in the rain can be hazardous due to reduced visibility,
                slippery roads, and longer stopping distances. To stay safe
                during wet weather, drivers should follow these detailed
                guidelines:{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Obtain Maximum Visibility with Headlights and Windshield
                  Washers:{" "}
                </span>
                When driving in the rain, visibility is crucial for safe
                navigation. Turn on your vehicle's headlights, even during the
                daytime, to increase your visibility to other drivers and help
                you see the road better. Using low-beam headlights is
                recommended, as high beams can cause glare in rainy conditions.
                Ensure your headlights are properly aimed, and keep them clean
                to enhance their effectiveness.
              </p>
              <p className="courseText">
                Maintain a clear view through the windshield by using functional
                windshield wipers and having enough washer fluid. Wiper blades
                should be in good condition, free of cracks or tears, and should
                be replaced regularly. Adjust the wiper speed according to the
                intensity of the rain to keep the windshield clear of rainwater,
                mud, and debris. Use your vehicle's defrosters to prevent
                fogging on the inside of the windows, which can reduce
                visibility further.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Keep Below Dry Road Speed: </span>Driving
                at an appropriate speed is essential when navigating wet road
                conditions. Wet roads reduce tire traction, making it harder to
                stop quickly or maintain control during maneuvers. Reduce your
                speed below the posted limit and adjust it based on the road's
                condition, traffic density, and visibility.
              </p>
              <p className="courseText">
                Slower speeds allow more time to react to unexpected situations,
                such as hydroplaning or sudden stops by other drivers. Avoid
                tailgating and maintain a safe following distance from the
                vehicle ahead, as stopping distances increase on wet roads.
                Increase your following distance to at least three to four
                seconds, and even more in heavy rain or low visibility
                conditions.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Decrease Speed When Entering a Curve:{" "}
                </span>
                Approaching curves with caution and reducing your speed before
                entering them is crucial on wet roads. Wet surfaces reduce tire
                grip, increasing the risk of skidding or hydroplaning. Reducing
                your speed allows you to maintain control during the turn.
              </p>
              <p className="courseText">
                When approaching a curve, slow down gradually and maintain a
                steady speed throughout the turn. Avoid sudden braking or
                accelerating while in the curve, as this can cause the vehicle
                to lose traction. As you exit the curve, gradually accelerate to
                regain your desired speed.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Stay on Paved Portion of Roadway: </span>
                When driving in the rain, avoid traveling on unpaved shoulders
                or flooded areas of the road. Unpaved surfaces can be unstable
                and may conceal hidden hazards, increasing the risk of getting
                stuck or losing control of the vehicle. Stick to the paved
                portion of the road, which provides better traction for your
                tires.
              </p>
              <p className="courseText">
                Avoid driving through standing water or large puddles, as this
                can lead to hydroplaning. Hydroplaning occurs when a layer of
                water forms between the tires and the road surface, causing the
                vehicle to lose traction. If you encounter a large puddle, slow
                down and drive around it if possible, or proceed cautiously at a
                reduced speed.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Drive in Tracks of Car Ahead: </span>If
                possible, drive in the tracks of the vehicle ahead of you. The
                tracks may displace water, providing slightly better traction
                than untouched areas of the road. However, maintain a safe
                following distance to avoid colliding with the vehicle in front.
              </p>
              <p className="courseText">
                Keep in mind that following too closely to the vehicle ahead can
                lead to reduced visibility due to the spray of water coming from
                their tires. A safe following distance ensures you have a clear
                view of the road ahead and gives you ample time to react to
                sudden changes in traffic conditions.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Allow More of a Space Cushion: </span>
                Increase your following distance to allow for additional
                stopping time on wet roads. Wet conditions increase the time it
                takes for your vehicle to come to a complete stop. A larger
                space cushion provides more reaction time to sudden stops or
                unexpected maneuvers from the vehicle in front.
              </p>
              <p className="courseText">
                Maintain a following distance of at least three to four seconds
                or more, depending on the weather conditions and road surface.
                Avoid tailgating, as it increases the risk of rear-end
                collisions, especially in rainy weather when stopping distances
                are longer.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Avoid Sudden Movements: </span>To
                maintain control of your vehicle in wet conditions, avoid sudden
                movements such as sharp turns, abrupt lane changes, or rapid
                acceleration or deceleration. Sudden movements can cause the
                tires to lose traction, leading to skidding or hydroplaning.
              </p>
              <p className="courseText">
                Drive smoothly and steadily, using gentle steering and braking
                inputs. Gradually accelerate and decelerate to prevent loss of
                traction. Smooth and controlled movements ensure that your
                vehicle maintains grip on the road surface, reducing the risk of
                accidents.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Be Cautious of Hydroplaning: </span>
                Hydroplaning is a significant concern in rainy conditions,
                particularly when water accumulates on the road surface faster
                than it can be dispersed. This results in a layer of water
                between the tires and the road, causing the vehicle to lose
                traction and skid.
              </p>
              <p className="courseText">
                If you experience hydroplaning, remain calm and avoid sudden
                steering or braking inputs. Ease off the gas pedal to reduce
                speed gradually and maintain a steady steering wheel position.
                As your tires regain traction, you will regain control of the
                vehicle. Keep in mind that hydroplaning can occur at speeds as
                low as 30 mph on wet roads, so caution is essential.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Test Your Brakes After Driving Through Puddles:{" "}
                </span>
                When driving through standing water or deep puddles, lightly tap
                your brakes afterward to ensure they are still functioning
                properly. Wet brakes may have reduced effectiveness until they
                dry out. Tapping the brakes helps remove water from the brake
                pads and rotors, ensuring that your vehicle can stop
                effectively.
              </p>
              <p className="courseText">
                Be aware that wet brakes may cause a slight delay in braking
                response, so allow for additional space between your vehicle and
                the one in front. Keep your foot off the brake pedal when
                driving through deep water to avoid potential damage to the
                braking system.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Keep Windows Clear and Use Defrosters:{" "}
                </span>
                Maintaining a clear view of the road and surrounding traffic is
                critical when driving in the rain. Use your vehicle's defrosters
                to prevent fogging on the inside of your windows, which can
                reduce visibility. Set the defroster to the appropriate setting
                for the weather conditions and adjust the airflow as needed.
              </p>
              <p className="courseText">
                Keep your windows clear from rainwater, dirt, and debris to
                ensure maximum visibility. Regularly use your windshield wipers
                and washer fluid to remove rainwater, mud, and other
                obstructions from the windshield. Clear side and rearview
                mirrors are equally important for maintaining awareness of other
                vehicles on the road.{" "}
              </p>
              <h5 className="sectionSubheading">C. Going Through Deep Water</h5>
              <p className="courseText">
                Encountering deep water on the roadway can be a daunting
                challenge for drivers. Proper precautions must be taken to avoid
                damage to the vehicle and ensure the safety of all occupants.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Splashing Water Into the Engine Compartment by
                  Proceeding Slowly:{" "}
                </span>
                When approaching a section of the road with standing water,
                reduce your speed significantly. Slower speeds allow your
                vehicle's tires to displace water effectively, minimizing the
                risk of hydroplaning or loss of traction.
              </p>
              <p className="courseText">
                Maintain a steady and controlled speed while driving through the
                water. Avoid accelerating quickly, as this can cause water to
                splash into the engine compartment. If water enters the engine,
                it can damage sensitive components and lead to engine stall or
                failure.{" "}
              </p>
              <p className="courseText">
                Before driving into the water, gauge its depth if possible. If
                the water level is higher than your vehicle's ground clearance
                or reaches the bottom of the doors, reconsider driving through
                it. If you are uncertain about the depth, it is safer to find an
                alternate route or wait until the water subsides.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Do Not Proceed Through Strong Currents That May Reach the
                  Bottom of the Car:{" "}
                </span>
                Avoid attempting to drive through water with strong currents,
                especially if the water level may reach the bottom of your
                vehicle. Even in seemingly shallow water, strong currents can
                sweep your car off the road, putting you and your passengers at
                great risk.
              </p>
              <p className="courseText">
                In such situations, find a safe location to wait until the water
                recedes or seek an alternative route. Do not underestimate the
                power of water currents, as they can easily overpower your
                vehicle's ability to maintain traction and control.{" "}
              </p>
              <p className="courseText">
                If you encounter a flooded roadway with a strong current, never
                attempt to cross it on foot. Moving water can be deceivingly
                powerful and pose a severe threat to personal safety. Turn
                around and find a safer route or wait for emergency services to
                assist with your safe evacuation.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Listen to the Engine and Avoid High Engine RPMs:{" "}
                </span>
                As you drive through the water, pay close attention to the sound
                of your vehicle's engine. If the engine sounds different or
                struggles, it may be taking in water, and you should immediately
                stop and turn off the engine.
              </p>
              <p className="courseText">
                High engine RPMs can increase the risk of water being sucked
                into the engine's intake, leading to severe engine damage.
                Therefore, avoid revving the engine excessively while driving
                through water.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Maintain a Steady and Straight Course:{" "}
                </span>
                To maintain control and stability while driving through deep
                water, keep a steady and straight course. Avoid sudden steering
                inputs or abrupt maneuvers, which can cause your vehicle to lose
                traction and veer off course.
              </p>
              <p className="courseText">
                Grip the steering wheel firmly and keep your movements gradual
                and controlled. If your vehicle starts to drift or hydroplane,
                resist the urge to overcorrect. Instead, ease off the
                accelerator and steer gently in the direction you want to go.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Check the Brakes After Driving Through Deep Water:{" "}
                </span>
                Once you have successfully navigated through the deep water,
                lightly tap your brakes to test their responsiveness. Wet brakes
                may require a bit more pressure to engage initially, so ensure
                they are functioning properly before resuming normal driving.
              </p>
              <p className="courseText">
                Avoid excessive braking while still in water, as this can reduce
                brake effectiveness. Keep in mind that wet brakes may cause a
                slight delay in response time, so maintain a safe following
                distance from the vehicle ahead.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Inspect the Vehicle After Driving Through Water:{" "}
                </span>
                After driving through deep water, take the time to inspect your
                vehicle for any signs of damage. Look for water inside the
                vehicle, especially on the floorboards or carpeting. Check the
                engine compartment for signs of water intrusion or damage.
              </p>
              <p className="courseText">
                If you suspect that water may have entered sensitive components,
                such as the engine or electrical systems, it is advisable to
                have your vehicle inspected by a qualified mechanic. Water
                damage can lead to costly repairs if not addressed promptly.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Driving Through Flooded Areas in the Dark:{" "}
                </span>
                Driving through deep water is particularly hazardous in low
                light conditions, such as at night. Flooded areas can be
                deceiving in the dark, making it challenging to gauge the
                water's depth and potential hazards.
              </p>
              <p className="courseText">
                If possible, avoid driving through flooded areas at night. If
                you encounter a flooded area during nighttime driving, proceed
                with extreme caution and use your headlights to help gauge the
                water's depth and spot any potential obstacles.{" "}
              </p>
              <h5 className="sectionSubheading">D. Hydroplaning</h5>
              <p className="courseText">
                Hydroplaning is a dangerous phenomenon that occurs when a
                vehicle's tires lose contact with the road surface due to a
                layer of water between the tire and the road. It can lead to a
                loss of control and make driving extremely hazardous.{" "}
              </p>
              <p className="courseText">
                Understanding the factors contributing to hydroplaning and how
                to recover from a skid are essential for every driver's safety.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  A Product of Vehicle Weight, Speed, Tire Width, and Tread
                  Depth:{" "}
                </span>
                Hydroplaning is influenced by several factors, including the
                weight of the vehicle, its speed, the width of the tires, and
                the depth of the tire treads. A lighter vehicle with narrower
                tires and worn-out treads is more susceptible to hydroplaning,
                especially when traveling at higher speeds.
              </p>
              <p className="courseText">
                When water accumulates on the road surface faster than the tires
                can displace it, a thin layer of water builds up under the
                tires, causing them to lose contact with the road. This
                hydroplaning effect reduces the vehicle's traction and steering
                control, making it difficult for the driver to maintain
                direction.{" "}
              </p>
              <p className="courseText">
                To minimize the risk of hydroplaning, ensure your vehicle's
                tires are in good condition and have adequate tread depth.
                Regularly inspect and replace worn-out tires, especially before
                the rainy season. Lowering your speed during wet conditions also
                decreases the likelihood of hydroplaning.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Regain Control by Taking Foot Off Accelerator - Do Not Brake:{" "}
                </span>
                If you find yourself hydroplaning, it is crucial to remain calm
                and follow specific steps to regain control of your vehicle. The
                most critical action to take is to release your foot from the
                accelerator pedal. This action reduces the power to the wheels,
                allowing them to regain traction and reconnect with the road
                surface.
              </p>
              <p className="courseText">
                Resist the temptation to slam on the brakes, as this can
                exacerbate the skid and cause the vehicle to spin out of
                control. Braking while hydroplaning can lead to a complete loss
                of control, making it extremely dangerous.{" "}
              </p>
              <p className="courseText">
                Keep the steering wheel steady and avoid making sudden steering
                movements, as this can further destabilize the vehicle. Instead,
                gently steer in the direction you want to go once the tires
                regain traction.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1_GyikfWlb2JJxNUZa33FORZjbre-sjJc/preview"
                title="bad weather"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">E. Driving in Snow and Ice</h5>
              <p className="courseText">
                Driving in snowy and icy conditions demands extra caution and
                preparation to ensure the safety of both the driver and
                passengers. Snow and ice can significantly reduce traction,
                making the roads slippery and hazardous.{" "}
              </p>
              <iframe
                src="https://drive.google.com/file/d/1mTTmcom6J8Qls4xc33Cz2dEzyOPa4S85/preview"
                title="how to drive in snow and ice"
                className="courseVideo"
                allow="autoplay"
              ></iframe>

              <p className="courseText">
                <span className="bold">
                  Obtain Maximum Visibility with Headlights and Windshield
                  Wipers:{" "}
                </span>
                Before setting off in snowy or icy conditions, ensure your
                vehicle's headlights and taillights are clean and functioning
                properly. Turn on your headlights even during daylight hours to
                increase visibility, as winter weather often reduces natural
                light.
              </p>
              <p className="courseText">
                Keep your windshield clear by using your windshield wipers and
                defrosters effectively. Visibility is crucial in hazardous
                conditions, so regularly check and clean your windshield to
                maintain a clear view of the road.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Maintain Slow, Steady Speed: </span>
                Driving at reduced speeds is essential in snowy and icy
                conditions. Slower speeds allow for better control and reaction
                time, reducing the risk of skidding or losing control of the
                vehicle.
              </p>
              <p className="courseText">
                Avoid sudden acceleration or deceleration, as quick changes in
                speed can cause your tires to lose traction on slippery
                surfaces. Start gently from a stop and apply the brakes
                gradually when coming to a stop.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Reduce Speed in Corners and Shady Areas (Black Ice):{" "}
                </span>
                Approach corners and curves with caution, reducing your speed
                before entering them. Corners can be particularly treacherous in
                icy conditions, so slow down well in advance to maintain
                control.
              </p>
              <p className="courseText">
                Watch out for black ice, a thin, transparent layer of ice that
                forms on road surfaces, often in shaded areas. Black ice is
                challenging to spot and can cause your vehicle to lose traction
                suddenly. Drive slowly and be prepared for the possibility of
                encountering black ice, especially during cold or shady
                conditions.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Maintain a Longer Space Cushion: </span>
                Increase your following distance significantly in snowy and icy
                conditions. The extended space cushion provides you with
                additional time to react to sudden stops or skidding vehicles
                ahead.
              </p>
              <p className="courseText">
                Maintain at least a four to five-second gap between your vehicle
                and the vehicle in front of you. Increase this gap further in
                particularly slippery conditions or when visibility is limited.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Watch for Areas Where Ice Collects:{" "}
                </span>
                Be mindful of areas where ice tends to accumulate, such as
                bridges, overpasses, and shaded spots. These areas freeze more
                quickly and may remain icy even when the rest of the road is
                clear.
              </p>
              <p className="courseText">
                Approach these areas with extra caution, reduce your speed, and
                avoid abrupt maneuvers. Keep a lookout for warning signs that
                indicate icy road conditions.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Turning, Swerving, or Braking Suddenly or Sharply:{" "}
                </span>
                Smooth and gradual movements are essential when driving on snowy
                or icy roads. Avoid sudden or sharp turns, swerving, or braking,
                as these actions can lead to skidding and loss of control.
              </p>
              <p className="courseText">
                Brake gently and evenly to avoid locking up the wheels and
                skidding. If your vehicle starts to skid, steer gently in the
                direction you want to go. Do not oversteer, as this can make the
                skid worse.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Do Not Downshift at Too Fast a Speed:{" "}
                </span>
                Downshifting can be helpful for maintaining control on icy
                roads, but do so at a safe and appropriate speed. Downshifting
                too quickly or aggressively can cause your wheels to lose
                traction, leading to skidding.
              </p>
              <p className="courseText">
                Downshift gradually and carefully when approaching a corner or
                downhill slope. This can help slow your vehicle while
                maintaining traction on slippery surfaces.{" "}
              </p>
              <p className="courseText">
                <span className="bold">When to Use Chains: </span>In extremely
                icy or snowy conditions, tire chains can improve traction and
                help your vehicle maintain control on the road. Chains are
                particularly useful in areas with steep inclines or where snow
                and ice are prevalent.
              </p>
              <p className="courseText">
                Install chains according to the manufacturer's instructions and
                only when conditions require their use. Keep in mind that chains
                should only be used on specific tires and may not be suitable
                for all road surfaces.{" "}
              </p>
              <h5 className="sectionSubheading">F. How to Stop Skidding</h5>
              <p className="courseText">
                Skidding is a frightening experience for any driver, but knowing
                how to respond correctly can help you regain control of your
                vehicle and prevent accidents. When faced with a skid, follow
                these detailed steps to stop skidding and maintain control of
                your vehicle:{" "}
              </p>
              <p className="courseText">
                <span className="bold">Avoid Using Brakes: </span>One of the
                most critical actions to take when skidding is to avoid using
                your brakes, especially if your vehicle is experiencing a skid
                on slippery surfaces like ice or snow. Braking can cause the
                wheels to lock up, making the skid worse and increasing the risk
                of losing control.
              </p>
              <p className="courseText">
                Instead of applying the brakes, focus on regaining traction by
                releasing the brake pedal gently and smoothly. This allows the
                wheels to start turning again and re-establish contact with the
                road surface.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Avoid Oversteering - Keep Front Tires in Line with Intended
                  Path:{" "}
                </span>
                Oversteering occurs when the rear of the vehicle slides out of
                line with the intended path. To counter this, avoid turning the
                steering wheel too sharply or aggressively.
              </p>
              <p className="courseText">
                When skidding, steer smoothly in the direction you want to go
                without overcorrecting. Keeping the front tires aligned with
                your intended path increases the chances of regaining control.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Keep Looking in Your Intended Direction:{" "}
                </span>
                Maintaining visual focus on your intended direction is essential
                during a skid. As the vehicle starts to slide, resist the
                temptation to fixate on obstacles or hazards. Instead, look
                where you want the vehicle to go and steer toward that point.
              </p>
              <p className="courseText">
                Your eyes play a crucial role in steering the vehicle, so
                concentrate on your intended path and use peripheral vision to
                be aware of potential hazards.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Keep Clutch Engaged: </span>For vehicles
                with manual transmissions, keeping the clutch engaged can help
                maintain engine power and improve control during a skid.
                Disengaging the clutch while skidding can cause the wheels to
                lose traction entirely, making it harder to regain control.
              </p>
              <p className="courseText">
                By keeping the clutch engaged, the engine continues to provide
                power to the wheels, which can aid in regaining traction and
                controlling the skid.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Lift Foot from Accelerator Gradually:{" "}
                </span>
                When skidding, gently lift your foot from the accelerator pedal.
                Gradual deceleration helps shift the vehicle's weight forward,
                increasing traction on the front wheels and assisting in
                steering.
              </p>
              <p className="courseText">
                Avoid lifting your foot suddenly, as this can cause the vehicle
                to shift weight to the rear, potentially exacerbating the skid.{" "}
              </p>
              <p className="courseText">
                <span className="bold">
                  Stay Calm and Focus on Regaining Control:{" "}
                </span>
                Skidding can be a nerve-wracking experience, but it's crucial to
                remain calm and focused. Avoid panicking or making sudden, jerky
                movements, as these can make the skid worse.
              </p>
              <p className="courseText">
                Concentrate on applying the correct techniques and remember that
                skids are often short-lived. Once the vehicle regains traction,
                you can steer back into your intended path.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Practice Skid Control Techniques: </span>
                Controlled skid practice can help you become more confident in
                responding to unexpected skidding situations. This must be done
                under the guidance of a professional instructor who can teach
                you the proper techniques and ensure your safety.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1rfMlY3GH1L_biT2zBUrqM9jCbKJKR80w/preview"
                title="how to pull out of a skid"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">G. How to Rock it Out</h5>
              <p className="courseText">
                <span className="bold">
                  Getting stuck in mud, snow, or sand can be frustrating, but
                  there's a technique called "rocking out" that can help you get
                  unstuck and back on the road.
                </span>
              </p>
              <p className="courseText">
                <span className="bold">Start Slowly in Low Gear: </span>When you
                find your vehicle stuck in a challenging surface like mud or
                snow, start by gently pressing the accelerator pedal in low
                gear. Gradually increase the throttle to get the wheels moving
                without spinning excessively.
              </p>
              <p className="courseText">
                Using low gear provides better traction and control, making it
                easier to maintain forward or backward movement.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Shift Rapidly to Reverse: </span>Once
                you've gained some forward momentum, quickly shift into reverse
                gear. This sudden change in direction can help loosen the tires
                from the stuck position.
              </p>
              <p className="courseText">
                <span className="bold">Back Until Wheels Start to Spin: </span>
                As you shift into reverse, gently back up until the wheels start
                to spin or lose traction. This movement will help create a small
                space around the tires, allowing you to gain momentum for the
                next step.
              </p>
              <p className="courseText">
                <span className="bold">Shift Back into Low Gear: </span>After
                the wheels have spun or lost traction in reverse, shift back
                into low gear. This change allows you to move forward again
                while keeping better control of the vehicle.
              </p>
              <p className="courseText">
                <span className="bold">Repeat as Necessary: </span>Continue the
                rocking out process by shifting between low gear and reverse,
                gaining momentum with each shift. Gradually, this back-and-forth
                motion can help you gain enough traction to free your vehicle
                from the stuck position.
              </p>
              <p className="courseText">
                <span className="bold">Traction Aids: </span>If your vehicle
                remains stuck after multiple attempts, you may consider using
                traction aids like sand, gravel, or the floor mats of your car.
                Placing these materials in front of or behind the stuck wheels
                can provide extra grip, helping the tires gain traction and more
                effective forward or backward movement.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1MzvOqlZRt8RktjMbtn8poGdiafaOOECJ/preview"
                title="how to get out of the mud"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <p className="courseText">
                <span className="bold">Avoid Excessive Spinning: </span>While
                rocking out can be an effective technique, avoid excessive
                spinning of the tires. Continuous tire spinning can dig deeper
                holes and worsen the stuck situation. If you notice that your
                vehicle is not making any progress, reassess the situation and
                try different strategies.
              </p>
              <p className="courseText">
                <span className="bold">Seek Assistance If Needed: </span>If you
                find yourself unable to free your vehicle using the rocking out
                method or traction aids, it's essential to avoid further
                attempts that may lead to vehicle damage or worsen the
                situation. In such cases, seek assistance from other drivers, a
                towing service, or roadside assistance professionals.
              </p>
              <h5 className="sectionSubheading">H. Mechanical Failure</h5>
              <p className="courseText">
                Mechanical failures while driving can be alarming, but knowing
                how to respond to these situations can help you stay safe on the
                road. Here's a detailed guide on how to handle common mechanical
                failures:
              </p>
              <p className="courseText">
                <span className="bold">Accelerator Stuck: </span>If your
                accelerator gets stuck, stay calm and act quickly to prevent
                further issues. First, try to lift the accelerator pedal with
                your foot. If that doesn't work, shift the vehicle into neutral
                or park (if you have an automatic transmission) to disengage the
                engine's power. Gradually slow down and pull over to a safe
                location. Turn off the engine, engage the emergency brake, and
                seek assistance from a mechanic.
              </p>
              <p className="courseText">
                <span className="bold">Blowout:</span>A sudden tire blowout can
                cause your vehicle to lose control. Keep a firm grip on the
                steering wheel and avoid slamming on the brakes. Gradually ease
                off the accelerator and maintain a straight path. Once you have
                control, pull over to a safe area and change the tire if
                possible or call for roadside assistance.
              </p>
              <p className="courseText">
                <span className="bold">Brake Failure: </span>Experiencing brake
                failure can be extremely dangerous. If you notice your brakes
                are not responding, try pumping the brake pedal rapidly to build
                up brake pressure. Downshift to lower gears (if you have a
                manual transmission) to slow down the vehicle. Use the parking
                brake gently, if equipped, to help bring the vehicle to a stop.
                Look for an escape route or an open area to safely stop the
                vehicle. Once you've stopped, turn on hazard lights and call for
                emergency assistance.
              </p>
              <p className="courseText">
                <span className="bold">Overheating: </span>If your vehicle's
                engine is overheating, pull over to a safe location and turn off
                the engine immediately. Do not attempt to open the hood until
                the engine cools down. Check the coolant level and add water if
                necessary (if the engine has cooled down). Seek professional
                help to diagnose and fix the cause of overheating before
                resuming your journey.
              </p>
              <p className="courseText">
                <span className="bold">Headlight Failure: </span>If your
                headlights fail while driving at night, stay calm and take the
                following steps:
              </p>
              <ul id="ul">
                <li className="courseText">
                  <span className="bold">
                    Turn on your hazard lights to increase your visibility to
                    other drivers:
                  </span>
                  Reduce your speed and increase the following distance to allow
                  more reaction time.
                </li>
                <li className="courseText">
                  <span className="bold">
                    Use the road's center or side markings to guide your path:
                  </span>
                  Exit the roadway and find a safe place to stop and address the
                  headlight issue.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Power Steering Failure: </span>Losing
                power steering can make the steering wheel feel heavy and
                difficult to turn. Stay focused and use both hands to steer the
                vehicle safely. Slow down and activate your hazard lights. Find
                a safe location to pull over and stop the vehicle. Once stopped,
                turn off the engine and check for any visible issues, such as a
                broken serpentine belt. If necessary, seek professional
                assistance.
              </p>
              <p className="courseText">
                <span className="bold">Regular Vehicle Maintenance: </span>
                Preventing mechanical failures starts with regular vehicle
                maintenance. Follow the manufacturer's recommended service
                schedule, including oil changes, brake inspections, tire
                rotations, and other essential maintenance tasks. Keep an eye on
                warning lights on your dashboard and address any unusual noises
                or performance issues promptly.
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
