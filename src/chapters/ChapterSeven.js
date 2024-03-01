export default function ChapterSeven() {
  const sections = {
    sectionOne: "Urban Driving",
    sectionTwo: "Freeway Driving",
    sectionThree: "Driving on Open Highway",
    sectionFour: "Passing",
    sectionFive: "Hazardous Conditions",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Seven: Differences in Urban and Rural Driving
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
              highlighting the significance of reducing speed to gain more time
              for critical actions such as observing road details, predicting
              potential hazards, reacting promptly, and executing decisions to
              avoid dangerous situations.
            </p>
            <h5 className="sectionSubheading">A. Reducing Speed</h5>
            <p className="courseText">Reducing speed allows More Time to: </p>
            <p className="courseText">
              <span className="bold">
                See Details and Identify Their Meaning:{" "}
              </span>
              In urban driving environments, such as cities or densely populated
              areas, reducing speed allows drivers to see and process more
              details on the road. Complex road networks, various signs, traffic
              signals, and pedestrians are typical features of urban areas.
              Slowing down enables drivers to pay closer attention to road
              signs, markings, and potential risks.
            </p>
            <p className="courseText">
              <span className="bold">
                Analyze Information and Predict What Might Happen:{" "}
              </span>
              Urban driving demands constant vigilance and quick
              decision-making. Lowering speed provides more time for drivers to
              analyze traffic flow, predict other drivers' actions, and
              anticipate potential hazards. This is crucial on busy city
              streets, where traffic conditions change rapidly.
            </p>
            <p className="courseText">
              <span className="bold">React: </span>Urban driving often involves
              frequent stops, starts, and lane changes. By driving at an
              appropriate speed, drivers can react promptly to changing traffic
              patterns, sudden braking by the vehicle ahead, or unexpected
              pedestrian movements.
            </p>
            <p className="courseText">
              <span className="bold">
                Execute Decisions or Avoid Dangerous Situations:{" "}
              </span>
              At lower speeds, drivers have better control over their vehicles
              and can execute their decisions with precision. Additionally,
              reducing speed provides more time to avoid dangerous situations,
              such as aggressive drivers, sudden lane closures, or obstacles on
              the road.
            </p>
            <h5 className="sectionSubheading">B. Looking Ahead of Traffic</h5>
            <p className="courseText">
              When driving in any environment, including urban areas, it is
              essential to look ahead of traffic to anticipate potential hazards
              and make informed decisions. By adopting proactive habits, drivers
              can enhance safety and minimize the risk of accidents.{" "}
            </p>
            <p className="courseText">
              <span className="bold">Look Ahead for Traffic Hazards: </span>
              Constantly scanning the road ahead allows drivers to identify and
              anticipate potential hazards. This includes watching for vehicles
              that might suddenly change lanes, pedestrians crossing the road,
              cyclists, or unexpected obstacles on the pavement. By being
              vigilant and predicting potential dangers, drivers can react
              swiftly and adjust their driving accordingly.
            </p>
            <p className="courseText">
              <span className="bold">Leave Enough Distance to Maneuver: </span>
              Maintaining an appropriate following distance from the vehicle
              ahead is crucial for urban driving safety. A safe following
              distance allows drivers to maneuver and respond to sudden stops or
              emergencies without causing collisions. The "Three-Second Rule" is
              a helpful guideline: ensure that there is at least a three-second
              gap between your vehicle and the one in front.
            </p>
            <p className="courseText">
              <span className="bold">Look Ahead for Signal Changes: </span>
              Observing traffic signals ahead can provide valuable insights into
              upcoming changes in traffic patterns. Being attentive to traffic
              lights and road signs enables drivers to prepare for potential
              stops, turns, or lane merges. Anticipating signal changes allows
              for smooth, uninterrupted flow and reduces the likelihood of
              last-minute maneuvers.
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
                <span className="bold">Next to Parked Cars: </span>When driving
                next to parked cars, be prepared for the possibility of a door
                opening or a pedestrian stepping out suddenly. Covering the
                brake allows you to react swiftly if someone unexpectedly
                emerges from between parked vehicles.
              </li>
              <li className="courseText">
                <span className="bold">
                  When You See Brake Lights of Other Cars:{" "}
                </span>
                If you notice brake lights of the vehicle ahead, covering the
                brake can help you anticipate potential slowdowns or stops. It
                allows you to be ready to respond quickly to the actions of the
                driver in front of you.
              </li>
              <li className="courseText">
                <span className="bold">Approaching Signal Lights: </span>As you
                approach signal lights, be prepared for changes in traffic flow.
                Covering the brake ensures that you can promptly adjust your
                speed to match the changing signal lights and avoid sudden
                stops.
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
              caution and adherence to traffic rules to ensure the safety of all
              road users.
            </p>
            <p className="courseText">
              <span className="bold">
                Passing Over the Centerline of Travel:{" "}
              </span>
              Passing over the centerline of travel, which separates opposing
              lanes of traffic, is generally not allowed in city driving. In
              urban areas, roads are often narrower, and there may be limited
              visibility around curves or intersections. Passing over the
              centerline can lead to head-on collisions, especially when traffic
              comes from the opposite direction. Such actions can be dangerous
              and are likely to result in severe accidents and injuries.
            </p>
            <p className="courseText">
              In urban environments, drivers should only pass other vehicles
              when it is safe and legal to do so. This typically means waiting
              for designated passing zones, such as dashed lines, and ensuring
              there is enough visibility and space to overtake without
              endangering other road users.
            </p>
            <p className="courseText">
              <span className="bold">Passing in or Near an Intersection: </span>
              Passing in or near an intersection is highly discouraged and, in
              many cases, prohibited by traffic laws. Intersections are critical
              points on the road where vehicles from different directions
              converge, and pedestrian crossings may also be present. Attempting
              to pass other vehicles in this vicinity increases the risk of
              collisions, especially when drivers are making turns or crossing
              paths.
            </p>
            <p className="courseText">
              Passing near an intersection can obstruct the view of other
              drivers, making it challenging for them to predict your movements
              and potentially leading to confusion and accidents. It is crucial
              to exercise extreme caution and patience when approaching and
              navigating through intersections, allowing sufficient time for
              other vehicles and pedestrians to clear the area before
              proceeding.
            </p>
            <h5 className="sectionSubheading">E. Lane Choice</h5>
            <p className="courseText">
              Selecting the right lane is critical to safe and efficient driving
              in urban and rural areas. Making informed decisions about lane
              choice contributes to smooth traffic flow and reduces the risk of
              accidents.{" "}
            </p>
            <p className="courseText">
              <span className="bold">Choose a Lane Appropriate for Use: </span>
              Selecting a lane that matches your intended use is essential for
              safe driving. In urban environments, roads often have multiple
              lanes designated for different purposes, such as through lanes,
              turning lanes, and carpool lanes. Take a moment to think about
              your destination and the route you need to take before changing
              lanes or beginning your trip.
            </p>
            <p className="courseText">
              Put your car in the right lane, for instance, if you are about to
              turn right. Use the appropriate through lane if you need to
              proceed straight ahead. The use of turning lanes as through lanes
              should be avoided, as it may confuse other motorists and raise the
              possibility of collisions.
            </p>
            <p className="courseText">
              <span className="bold">
                Unless turning, choose a less congested lane:{" "}
              </span>
              When driving in urban areas, taking a less congested lane is best.
              Less congested lanes typically provide smoother traffic flow and
              reduce the likelihood of unexpected stops or delays. However, if
              you intend to make a turn at an upcoming intersection, it is best
              to position yourself in the lane designated for your intended
              turn.
            </p>
            <p className="courseText">
              Changing lanes frequently in heavily congested traffic can be
              dangerous and disrupt traffic flow. Choose your lane wisely based
              on your intended route, and try to stay in it until you need to
              change.{" "}
            </p>
            <h5 className="sectionSubheading">F. Vehicle Position</h5>
            <p className="courseText">
              Proper vehicle positioning is crucial for safe and efficient
              driving on the road. It helps drivers maintain awareness, prevent
              accidents, and ensure smooth traffic flow.{" "}
            </p>
            <p className="courseText">
              <span className="bold">
                Keep Up with Traffic Speed While Remaining Within Legal Limits:{" "}
              </span>
              When driving in urban areas, it is essential to maintain a speed
              consistent with the flow of traffic, while also adhering to the
              posted speed limits. Driving too slowly can create hazards, as
              other vehicles may not expect slower-moving traffic. Conversely,
              driving too fast can lead to unsafe conditions and increase the
              likelihood of accidents. Striking the right balance between
              keeping up with traffic and obeying speed limits is essential for
              safe driving.
            </p>
            <p className="courseText">
              <span className="bold">Avoid Other Drivers' Blind Spots: </span>Be
              aware of other drivers' blind spots and avoid lingering in these
              areas. Blind spots are the areas around a vehicle where the
              driver's view is obstructed, making it challenging for them to see
              your vehicle. Stay out of blind spots to reduce the risk of
              collisions, especially when changing lanes or merging into
              traffic.
            </p>
            <p className="courseText">
              <span className="bold">
                Avoid Letting Another Driver Drive in Your Blind Spot:{" "}
              </span>
              In addition to avoiding other drivers' blind spots, be mindful of
              your vehicle's blind spots. Adjust your mirrors properly to
              minimize blind spots, and always check your blind spots by
              physically turning your head before changing lanes or making
              maneuvers. Avoid lingering in other drivers' blind spots, as they
              may not be aware of your presence and could inadvertently cause an
              accident.
            </p>
            <p className="courseText">
              <span className="bold">Avoid Side-by-Side Driving: </span>Driving
              side-by-side with another vehicle for an extended period is not
              recommended, especially in urban areas with heavy traffic. This
              practice can lead to traffic congestion and prevent other vehicles
              from passing or merging smoothly. If possible, maintain a safe
              following distance from the vehicle ahead and avoid driving
              directly alongside another vehicle.
            </p>
            <p className="courseText">
              <span className="bold">Avoid driving in groups or packs: </span>
              Driving in groups or packs close to other vehicles can cause
              traffic congestion and reduce the ability to react quickly to
              changes in traffic conditions. Maintain a safe distance from other
              vehicles, leaving enough room for sudden stops or lane changes.
              This practice improves safety and makes driving more comfortable
              and stress-free.
            </p>
            <h5 className="sectionSubheading">G. Choosing a Safe Route</h5>
            <p className="courseText">
              Selecting a safe route is a crucial aspect of responsible driving,
              as it directly impacts the driver's safety and the efficiency of
              the journey. In this section, we will explore three factors to
              consider when choosing a safe route:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Time of Day and Traffic Density: </span>The
              time of day and traffic density significantly influence the safety
              and duration of a journey. During peak traffic hours, such as rush
              hour, major roads and highways may experience heavy congestion,
              leading to slower traffic and increased stress for drivers. In
              such cases, taking alternate routes or traveling during less
              congested times can help avoid traffic jams and lower the risk of
              an accident.
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
              through or side streets. Through streets, typically main roads and
              highways, offer direct routes to your destination but may also
              have higher traffic volume and faster speeds. Side streets, on the
              other hand, often have lower traffic density, lower speeds, and
              fewer distractions.
            </p>
            <p className="courseText">
              When traveling in urban areas, taking side streets can provide a
              more relaxed driving experience along with better visibility of
              pedestrians and potential hazards. However, through streets may be
              preferable for long-distance travel or when you need to get
              somewhere quickly.{" "}
            </p>
            <p className="courseText">
              <span className="bold">One-way versus two-way streets: </span>
              One-way and two-way streets present different driving challenges.
              One-way streets may have fewer conflicting traffic movements,
              lowering the risk of a head-on collision, but they necessitate
              drivers paying attention to road signs and navigating complex
              intersections.
            </p>
            <p className="courseText">
              Two-way streets have traffic moving in opposite directions, and
              drivers must exercise caution, especially at intersections and
              when overtaking other vehicles. Understanding how traffic flows on
              one-way and two-way streets and anticipating potential conflicts
              is crucial for choosing the safest route.{" "}
            </p>
            <h5 className="sectionSubheading">
              H. Interacting at Intersections
            </h5>
            <p className="courseText">
              Intersections are critical points on the road where multiple paths
              of traffic intersect. Interacting safely at intersections is
              essential for drivers to navigate through traffic efficiently and
              avoid potential accidents. In this section, we will discuss the
              various aspects of interacting at intersections and the skills
              required for crossing, turning, and signaling:
            </p>
            <p className="courseText">
              <span className="bold">Identifying an Intersection: </span>
              Intersections can be categorized into two types:
            </p>
            <ol className="orderedList">
              <li className="courseText">
                <span className="bold">Controlled - Signs or Signals: </span>
                Controlled intersections are equipped with traffic signs or
                signals to regulate traffic flow. Drivers must obey these signs
                and signals, which provide instructions on when to proceed,
                stop, or yield the right-of-way.
              </li>
            </ol>
            <p className="courseText">
              <span className="bold">Uncontrolled - No Signs or Signals: </span>
              Uncontrolled intersections lack traffic signs or signals. Drivers
              are required to use caution, yield the right-of-way as necessary,
              and proceed with care when entering such intersections.
            </p>
            <p className="courseText">
              <span className="bold">
                Skills Required for Crossing and Turning:{" "}
              </span>
              When crossing or turning at intersections, drivers need to possess
              the following skills:
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
                <span className="bold">Choosing a Traffic Gap or Space: </span>
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
                <span className="bold">Scan for Hazards: </span>Pay attention to
                other vehicles, pedestrians, and bicycles in the intersection to
                avoid potential conflicts during the left turn.
              </li>
              <li className="courseText">
                <span className="bold">Vehicle Position: </span>Position your
                vehicle correctly before and after the turn, ensuring you are in
                the proper lane and maintaining an appropriate turning radius.
              </li>
              <li className="courseText">
                <span className="bold">When View is Blocked: </span>If your view
                is blocked, exercise extra caution and proceed only when you are
                confident it is safe to do so.
              </li>
            </ol>
            <p className="courseText">
              <span className="bold">
                Right Turns - Protected and Unprotected:{" "}
              </span>
              When making right turns at intersections, drivers should consider
              the following:
            </p>
            <ol className="orderedList">
              <li className="courseText">
                <span className="bold">Scan for Hazards: </span>Be vigilant for
                other vehicles, pedestrians, and bicycles to ensure a safe right
                turn.
              </li>
              <li className="courseText">
                <span className="bold">
                  {" "}
                  Check for Controlled Lanes and Signals:{" "}
                </span>
                Verify the presence of designated lanes and signals for right
                turns, following their guidance.
              </li>
              <li className="courseText">
                <span className="bold">Vehicle Position: </span> Position your
                vehicle correctly before and after the turn, staying in the
                appropriate lane.
              </li>
              <li className="courseText">
                <span className="bold">When View is Blocked: </span>Exercise
                caution when your view is obstructed and only proceed when it is
                safe.
              </li>
              <li className="courseText">
                <span className="bold">Use of Bike Lane for Turns:</span>Avoid
                using the bike lane for turns unless specifically designated for
                such movements.
              </li>
            </ol>
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
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
