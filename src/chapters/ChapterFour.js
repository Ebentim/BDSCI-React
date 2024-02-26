import { useState } from "react";
import { NavButtons } from "../Assets/next";
import ReactPlayer from "react-player";
import trafficsigns from "../Assets/images/image11.png";
import directions from "../Assets/images/image19.png";
import railroadSign from "../Assets/images/image51.jpg";
import schoolBus from "../Assets/images/image41.jpg";
import "../styles/general.css";
export default function ChapterFour() {
  const [content, setContent] = useState(false);
  const sections = {
    sectionOne: "Recognizing Traffic Control Signals",
    sectionTwo: "Purpose and Meaning of Pavement and Curb Markings",
    sectionThree: "Intersections, Crossingss that Require Special Stops",
    sectionFour: "Pictorial Messages",
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
        Unit Four: Signs, Signals, and Highway Markings
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
              <h4 className="sectionHeaading" id="sectionOne">
                Section 4.1. Recognizing Traffic Control Signals
              </h4>
              <img
                src={trafficsigns}
                alt="traffic signs"
                className="courseImage"
              />
              <p className="courseText">
                Traffic control signals are the visual symphony of the streets,
                guiding drivers through intersections and ensuring the smooth
                flow of vehicles. As drivers, it is crucial to recognize and
                understand the significance of these traffic control signals to
                navigate the roads safely
              </p>
              <ReactPlayer
                url="https://youtu.be/oANRoSrG_eY?si=SwpF0q_yKjZ1aMKA"
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
                A. Purpose of traffic controls
              </h5>
              <p className="sectionQuote">
                Traffic controls serve as the silent conductors of the symphony
                of movement, orchestrating the flow of vehicles with precision
                and purpose.
              </p>
              <p className="courseText">
                Traffic control signals play a crucial role in maintaining order
                and safety on the roads. By regulating, warning, providing
                information, and offering guidance, these signals guide drivers
                and promote efficient and safe traffic flow. It is important to
                understand traffic control signals to navigate intersections,
                respond to hazards, and make informed decisions. Let's explore
                the significance of traffic control signals and their various
                functions
              </p>
              <iframe
                src="https://drive.google.com/file/d/1CqPw0gbkhpuxFAa_29p7P1izGiKZQjU5/preview"
                className="courseVideo"
                allow="autoplay"
                title="Traffic Signal Rules"
              ></iframe>
              <h5 className="sectionSubheading">Regulations</h5>
              <p className="courseText">
                Traffic control signals, such as traffic lights and stop signs,
                establish rules for the road. They indicate when to stop,
                proceed, or yield, ensuring orderly movement and reducing the
                risk of collisions. Adhering to these regulations is essential
                for maintaining a smooth and safe traffic flow.
              </p>
              <h5 className="sectionSubheading">Warning</h5>
              <p className="sectionQuote">
                Warnings in the form of flashing lights and signs act as
                vigilant sentinels, alerting drivers to potential dangers and
                calling for caution on the road.
              </p>
              <p className="courseText">
                Traffic control devices like flashing yellow lights,
                construction signs, and temporary barricades serve as warnings.
                They notify drivers of upcoming hazards, such as road work,
                pedestrian crossings, or hazardous road conditions. Being
                attentive to these warnings allows drivers to adjust their
                speed, exercise caution, and stay prepared for potential risks.
              </p>
              <h5 className="sectionSubheading">Information</h5>
              <p className="sectionQuote">
                Road signs and markings stand as silent messengers, conveying
                directions, speed limits, and crucial information to help you
                make informed choices on your journey.
              </p>
              <img
                src={directions}
                alt="Road Sign indication direction to a community"
                className="courseImage direction"
              />
              <p className="courseText">
                Traffic control devices provide valuable information to drivers.
                Road signs indicate directions, distances to destinations, speed
                limits, parking regulations, and more. Clear and visible signage
                assists drivers in navigating unfamiliar areas, making correct
                turns, and ensuring they are on the right route.
              </p>
              <h5 className="sectionSubheading">Guidance</h5>
              <p className="sectionQuote">
                Guidance signals, steer drivers on the right path, directing
                lane changes, merges, and exits with clarity and efficiency.
              </p>
              <p className="courseText">
                Traffic control signals offer guidance to drivers by indicating
                preferred routes, lane usage, or specific actions to be taken.
                Lane markings, arrows, and signs help drivers understand where
                to go, how to merge, which lane to use, and when to exit.
                Adhering to these guidance signals ensures smoother traffic
                flow, minimizes conflicts, and reduces the likelihood of wrong
                maneuvers.
              </p>
              <iframe
                src="https://drive.google.com/file/d/1XjXkrDZwBFfLdB28u_UJiufv233fUvXo/preview"
                allow="autoplay"
                title="Guidance"
                className="courseVideo"
              ></iframe>
              <h5 className="sectionSubheading">
                B. Meaning of Traffic Control Signals
              </h5>
              <p className="courseText">
                Traffic control signals are devices that alternately direct
                traffic to stop and proceed using the colors green, yellow, and
                red. They can be vertical or horizontal, manually, electrically,
                or mechanically operated. They can also be fixed or portable and
                based on fixed time or vehicle actuation. Traffic control
                signals are used to control the flow of vehicular and pedestrian
                traffic, prevent excessive delays, and assign the right-of-way.
              </p>
              <ReactPlayer
                url="https://youtu.be/cYdZZdtdsMw"
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
              <h5 className="sectionSubheading">Traffic lights</h5>
              <p className="sectionQuote">
                The red, yellow, and green lights of traffic signals communicate
                a language of order and safety, dictating the ebb and flow of
                vehicles at intersections
              </p>
              <p className="courseText">
                Traffic lights are the most common form of traffic control
                signals. They consist of red, yellow, and green lights that
                regulate the flow of traffic at intersections and other points
                on the road. Each color has a specific meaning:
              </p>
              <iframe
                src="https://drive.google.com/file/d/1xR1NQ_oEy8OsMejar2TXsLgv4s4FIcTn/preview"
                className="courseVideo"
                title="Traffic Lights"
                allow="autoplay"
              ></iframe>
              <p className="courseText">
                <span className="bolf">Red: </span>Requires vehicles to come to
                a complete stop behind the stop line or at the intersection.
                Drivers must remain stopped until the light changes to green.
              </p>
              <p className="courseText">
                <span className="bolf">Yellow: </span>Indicates that the light
                is about to change from green to red. It serves as a warning for
                drivers to prepare to stop safely, either by stopping if it is
                safe to do so or by proceeding cautiously through the
                intersection.
              </p>
              <p className="courseText">
                <span className="bold">Green: </span>Allows vehicles to proceed
                through the intersection or along the road, but drivers must
                yield to pedestrians and oncoming traffic before proceeding.
              </p>
              <h5 className="sectionSubheading">Arrows</h5>
              <p className="sectionQuote">
                Arrows embedded within traffic lights speak to drivers with
                unequivocal clarity, directing their turns and path through the
                maze of lanes.
              </p>
              <p className="courseText">
                Arrow signals are used in conjunction with traffic lights to
                provide specific instructions for turning or proceeding in a
                particular direction. They can be displayed as green, yellow, or
                red arrows:
              </p>
              <p className="courseText">
                <span className="bold">Green Arrow</span> Allows vehicles to
                turn in the direction indicated by the arrow. Drivers have the
                right of way and can proceed with the turn when it is safe to do
                so.
              </p>
              <p className="courseText">
                <span className="bold">The yellow arrow</span> Warns drivers
                that the green arrow is about to change to red. It advises
                caution and requires drivers to prepare to stop or complete the
                turn, depending on their position.
              </p>
              <p className="courseText">
                <span className="bold">The red arrow </span>Prohibits vehicles
                from making the indicated turn. Drivers must come to a complete
                stop and wait for a green arrow or a green light indicating that
                they can proceed.
              </p>
              <h5 className="sectionSubheading">Flashing Signals</h5>
              <p className="sectionQuote">
                The intermittent bursts of light in flashing signals offer
                cautionary whispers, alerting drivers to potential hazards or
                changes in traffic conditions.
              </p>
              <p className="courseText">
                Flashing signals are used to convey different messages depending
                on their color and the pattern of flashing:
              </p>
              <p className="courseText">
                <span className="bold">Flashing red </span>Requires drivers to
                treat the intersection as a stop sign. They must come to a
                complete stop, yield to cross traffic or pedestrians, and
                proceed when it is safe to do so.
              </p>
              <p className="courseText">
                <span className="bold">Flashing yellow</span> Alerts drivers to
                exercise caution and proceed with care. It indicates that there
                may be hazards, such as an approaching school zone, a crosswalk,
                or a warning sign ahead.
              </p>
              <h5 className="sectionSubheading">Lane Signals</h5>
              <p className="sectionQuote">
                The luminous lane signals serve as beacons of guidance,
                revealing which paths are open for traversing and which must be
                left behind.
              </p>
              <p className="courseText">
                Lane signals are used to manage traffic flow and indicate which
                lanes are open or closed for use. They are often seen in areas
                with reversible lanes or during peak traffic hours:
              </p>
              <p className="courseText">
                <span className="bold">Green arrow or green signal: </span>
                Indicates that the lane is open for use. Drivers can enter and
                proceed in the designated lane.
              </p>
              <p className="courseText">
                <span className="bold">Red "X" or red signal: </span>Indicates
                that the lane is closed and drivers should not use it. They must
                merge into an open lane or follow alternate routes as directed.
              </p>
              <p className="courseText">
                <span className="bold">Yellow "X" or yellow signal: </span>Warns
                drivers that the lane is in the process of closing. They should
                prepare to exit the lane and merge into an open lane.
              </p>
              <h5 className="sectionSubheading">C. Intersection Safety</h5>
              <p className="courseText">
                Intersection safety is a road safety priority because according
                to the United States Federal Highway Administration, more than
                50% of harmful and fatal crashes occur at or near an
                intersection. Intersections create conflict points where traffic
                moves against and across itself, and pedestrian and bicycle
                safety depends on following traffic rules. Some safety measures
                include separating road users in time and space with signals,
                crosswalks, and bicycle crossings. Drivers should keep a safe
                distance, inspect the intersection, and be patient at every
                intersection.
              </p>
              <ReactPlayer
                url="https://youtu.be/6B8gmCpMXMw"
                className="courseVideo"
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 0,
                    },
                  },
                }}
                controls={0}
              />
              <h5 className="sectionSubheading">
                Scan for traffic controls and prohibitive signs:
              </h5>
              <p className="courseText">
                Before reaching an intersection, drivers should actively scan
                for traffic controls, such as stop signs, yield signs, and
                traffic signals. Additionally, they should be aware of any
                prohibitive signs, such as no-entry or no-turn signs, which
                dictate specific actions at the intersection. Scanning for these
                signs helps drivers anticipate their obligations and make
                informed decisions.
              </p>
              <p className="courseText">
                <span className="bold">Scan for potential hazards:</span>A
                thorough scan for potential hazards is crucial when approaching
                and navigating intersections. This includes checking for
                oncoming traffic, pedestrians, cyclists, and any other potential
                obstructions. Vigilance in scanning the intersection and its
                surroundings allows drivers to assess and respond to potential
                risks effectively.
              </p>
              <p className="courseText">
                <span className="bold">
                  Entering controlled intersections on a yellow light:
                </span>{" "}
                When approaching a controlled intersection, drivers must be
                attentive to traffic signal changes. A yellow light indicates
                that the signal is transitioning from green to red. Drivers
                should exercise caution and be prepared to stop safely if it is
                unsafe to proceed through the intersection before the light
                turns red. If the driver can safely clear the intersection
                without endangering themselves or others, they may proceed with
                caution.
              </p>
              <h5 className="sectionSubheading">
                D. Controlled intersections:
              </h5>
              <p className="courseText">
                Controlled intersections are those regulated by traffic signals,
                flashing signal lights, circular arrows, right turn-on red
                signals, and designated lanes. Understanding these elements is
                vital for intersection safety:
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  <span className="bold">Signal lights: </span>Traffic signals
                  provide clear indications of when to stop, proceed, or yield
                  at an intersection. Drivers must adhere to the signals and
                  follow the appropriate lanes indicated by the signal lights.
                </li>
                <li className="courseText">
                  <span className="bold">Flashing signal lights:</span>
                  Flashing signal lights at intersections often indicate
                  cautionary measures or specific conditions. These may include
                  caution for pedestrians, upcoming construction zones, or
                  temporary changes in traffic patterns. Drivers should pay
                  close attention to these signals and adjust their driving
                  accordingly.
                </li>
                <li className="courseText">
                  <span className="bold"> Circular arrows:</span> Circular
                  arrows, often seen in conjunction with signal lights, indicate
                  that a specific lane or lanes have the right-of-way to proceed
                  in a particular direction. Drivers should follow the direction
                  of the circular arrow and yield appropriately to other
                  vehicles when necessary.
                </li>
                <li className="courseText">
                  <span className="bold">Right turn on red signals: </span>In
                  certain jurisdictions, right turns on red signals are allowed
                  after a complete stop and yielding to oncoming traffic and
                  pedestrians. Drivers must familiarize themselves with local
                  traffic laws and exercise caution when making right turns on
                  red.
                </li>
                <li className="courseText">
                  <span className="bold">Designated lanes: </span>Intersections
                  often have designated lanes for different movements, such as
                  left-turn lanes, through lanes, and right-turn lanes. Drivers
                  should position their vehicles in the appropriate lanes well
                  in advance and adhere to lane markings to ensure smooth and
                  safe traffic flow.
                </li>
              </ol>
              <h4 className="sectionHeading" id="sectionTwo">
                Section 4.2 Purpose and Meaning of Pavement and Curb Markings.
              </h4>
              <h5 className="sectionSubheading">A. Pavement Marking</h5>
              <ReactPlayer
                url="https://youtu.be/pJ6aXMXdABM"
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
              <h5 className="sectionSubheading">B. Curb markings</h5>
              <p className="courseText">
                <span className="bold">Purpose</span> Curb markings provide
                important information and guidance to drivers regarding parking
                regulations, loading zones, and other specific restrictions or
                permissions related to the curb area.
              </p>
              <ReactPlayer
                url="https://youtu.be/9HwjrJ7J-oU"
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
              <p className="courseText">
                <span className="bold">Color: </span>Curb markings are typically
                painted in various colors to denote specific meanings. For
                example:
              </p>
              <p className="courseText">
                <span className="bold">Yellow curbs</span> indicate loading
                zones or areas with time-limited parking.
              </p>
              <p className="courseText">
                <span className="bold">Red curbs</span> signify no-parking
                zones, fire lanes, or areas with restricted access
              </p>
              <p className="courseText">
                <span className="bold">Blue curbs</span> are used for accessible
                parking spaces reserved for individuals with disabilities.
              </p>
              <p className="courseText">
                <span className="bold">Green curbs</span> are used to designate
                specific parking zones or areas with time restrictions.
              </p>
              <p className="courseText">
                <span className="bold">White curbs</span> serve various purposes
                depending on their location and context. They are often used to
                indicate specific parking regulations and restrictions. Some of
                the purposes of white curbs include
              </p>
              <ul>
                <li className="courseText">
                  No-parking zones: White curbs may indicate areas where parking
                  is strictly prohibited. This could be due to safety concerns,
                  high-traffic areas, or specific restrictions set by local
                  authorities.
                </li>
                <li className="courseText">
                  Passenger loading and unloading zones: In some cases, white
                  curbs can designate areas specifically designated for
                  passenger loading and unloading, allowing for a brief stop to
                  drop off or pick up passengers.
                </li>
                <li className="courseText">
                  Other designations: White curbs may be used to convey
                  additional information or restrictions depending on local
                  regulations, such as time-limited parking, specific vehicle
                  types, or loading and unloading zones for certain goods or
                  services.
                </li>
              </ul>
              <p className="courseText">
                <span className="bold">Placement:</span> Curb markings are
                placed along the edge of the roadway or pavement to indicate
                specific rules and regulations associated with that particular
                section. They may include painted words, symbols, or lines that
                provide instructions or restrictions regarding parking,
                stopping, or other activities.
              </p>
              <h5 className="sectionSubheading">Edge of pavement</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White or yellow.
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>The edge of pavement
                markings, typically white lines on the right side and yellow
                lines on the left side indicate the boundary of the roadway.
                They serve to guide drivers and provide a clear visual reference
                for staying within the designated roadway area.
              </p>
              <h5 className="sectionSubheading">Obstructions</h5>
              <p className="courseText">
                <span className="bold">Color: </span>Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Yellow markings are used
                to highlight obstructions or hazards on the roadway, such as
                islands, medians, or raised curbs. These markings alert drivers
                to the presence of potential obstacles and help guide them
                safely around or past the obstruction.
              </p>
              <h5 className="sectionSubheading">Stop lines</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Stop lines are solid
                white lines that indicate where vehicles must come to a complete
                stop at an intersection or before crossing a pedestrian
                crosswalk. They serve as an apparent visual reference for
                drivers, ensuring proper positioning and compliance with traffic
                control signals.
              </p>
              <h5 className="sectionSubheading">CrossWalks</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Crosswalk markings
                consist of white lines that indicate areas designated for
                pedestrian crossings. They provide a visible and defined path
                for pedestrians and alert drivers to the presence of pedestrians
                crossing the roadway, promoting safety and facilitating the
                right-of-way.
              </p>
              <h5 className="sectionSubheading">Railroad crossings:</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White or Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Railroad crossing
                markings are used to indicate the presence of a railroad
                crossing ahead. They consist of a series of white or yellow
                lines and "X" symbols painted on the pavement. These markings
                serve as a visual warning to drivers, reminding them to exercise
                caution, reduce speed, and be prepared to stop for approaching
                trains.
              </p>
              <h5 className="sectionSubheading">School warnings:</h5>
              <p className="courseText">
                <span className="bold">Color: </span>Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Yellow pavement markings
                are often used near school zones to provide visual cues and
                warnings to drivers. These markings may include school zone
                signage, crosswalk markings, and school zone speed limit
                markings. They help raise awareness of school zones, indicating
                areas where children may be present, and encouraging drivers to
                exercise increased caution and comply with reduced speed limits.
              </p>
              <h5 className="sectionSubheading">Bicycle lanes</h5>
              <p className="courseText">
                <span className="bold">Color: </span>Green or White
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Bicycle lane markings
                designate lanes specifically designated for bicycles. They help
                create a dedicated space for cyclists, increasing their
                visibility and safety. Green-colored markings are often used to
                highlight conflict areas where vehicles might intersect with the
                bicycle lane.
              </p>
              <h5 className="sectionSubheading">Shared lanes</h5>
              <p className="courseText">
                <span className="bold">Color: </span>None or Symbols
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Shared lane markings,
                also known as "sharrows," indicate that the lane is shared by
                both bicycles and motor vehicles. These markings typically
                consist of chevron symbols and serve as a reminder for drivers
                to share the road with cyclists.
              </p>
              <h5 className="bold">Turning Lanes</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White or Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Turning lanes are marked
                with white or yellow lines and arrows to guide vehicles entering
                or exiting a specific lane for turning maneuvers. These markings
                help organize traffic flow and provide clear instructions for
                drivers to safely execute turns without impeding other vehicles.
              </p>
              <h5 className="sectionSubheading">Traffic calming measures</h5>
              <p className="courseText">
                <span className="bold">Color: </span>Various colors
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Traffic calming markings,
                such as speed humps, speed tables, or raised crosswalks, may
                have unique colors or patterns to visually indicate the presence
                of these measures. They aim to reduce vehicle speeds, enhance
                pedestrian safety, and create a more comfortable environment for
                non-motorized road users.
              </p>
              <h5 className="sectionSubheading">Parking zones</h5>
              <p className="courseText">
                <span className="bold">Color: </span>White or Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span>Pavement markings are
                used to indicate designated parking spaces, including parallel,
                angled, or perpendicular parking. These markings provide visual
                cues for drivers, ensuring proper positioning of vehicles and
                maximizing the efficient use of parking spaces.
              </p>
              <h5 className="sectionSubheading">Lane Restrictions</h5>
              <p className="courseText">
                <span className="bold">Color: </span>Red or Yellow
              </p>
              <p className="courseText">
                <span className="bold">Purpose: </span> Lane restriction
                markings, such as solid red "X" symbols or diagonal yellow
                lines, indicate temporary or permanent lane closures or
                restrictions. These markings warn drivers of the lane closure
                ahead, promoting safety and directing traffic flow in
                construction zones or areas of restricted access.
              </p>
              <h4 className="sectionHeading" id="sectionThree">
                Section 4.3 Intersections, Crossings That Require Special Stops.
              </h4>
              <h5 className="sectionSubheading">A. Railroad Crossing</h5>
              <iframe
                src="https://drive.google.com/file/d/1p40q1Y1kSyAmtssrrqF2fjg14l5xkFXG/preview"
                title="Railroad corssing"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">Railroad Risks</h5>
              <p className="courseText">
                Railroad safety is of utmost importance, as trespassing on
                tracks and property can lead to fatal consequences. Each year,
                approximately 500 people lose their lives while trespassing on
                railroad tracks. To avoid such potential dangers, it is crucial
                to stay away from railroad tracks unless using designated
                crossings.
              </p>
              <p className="courseText">
                Comparing the risks,{" "}
                <a href="https://injuryfacts.nsc.org/home-and-community/safety-topics/deaths-by-transportation-mode/">
                  a study by the National Safety Council
                </a>
                reveals that the odds of dying in a motor-vehicle crash were 1
                in 107 in 2019. In contrast, the odds of dying in a railway
                accident were 1 in 8,000. This alarming statistic indicates that
                individuals are about 75 times more likely to be killed in a
                crash involving a train than in a collision involving another
                motor vehicle.
              </p>
              <p className="courseText">
                The number of fatalities resulting from highway-rail crashes
                exceeds those from commercial airline crashes in an average
                year. This striking comparison underscores the significance of
                rail crossing safety and the imperative for drivers to exercise
                caution and adhere to safety measures at railroad crossings.
              </p>
              <p className="courseText">
                Consider the stopping distance of trains, which is another
                critical factor. On average, it takes a train over a mile to
                come to a complete stop. This extensive stopping distance
                emphasizes the need for allowing sufficient time and distance to
                safely cross railroad tracks.
              </p>
              <p className="courseText">
                Contrary to common belief, the majority of vehicle-train crashes
                occur when the train is traveling at speeds less than 30 miles
                per hour. This unexpected finding highlights the necessity of
                caution and attentiveness at all railroad crossings, regardless
                of the train's speed.
              </p>
              <p className="courseText">
                The dangers associated with railroad tracks and crossings cannot
                be overstated. With an alarming number of deaths occurring each
                year, it is vital to respect the potential risks, adhere to
                designated crossings, and exercise caution when approaching and
                traversing railroad tracks.
              </p>
              <h5 className="sectionSubheading">
                Railroad Crossings signs and Signals
              </h5>
              <img
                src={railroadSign}
                className="courseImage"
                alt="railroad crossinng sign"
              />
              <p className="courseText">
                Railroad crossings have two basic types of warnings: passive
                signs and active signs. Passive signs include round yellow
                warning signs, pavement markings, crossbuck signs, stop signs,
                and yield signs.{" "}
                <a href="https://zutobi.com/us/driver-guides/railroad-crossings">
                  Active signs include flashing lights, gates with flashing red
                  lights, and other warning devices.
                </a>
              </p>
              <ol className="orderedList">
                <li className="courseText">
                  Flashers - they mean stop Flashing lights at a railroad
                  crossing indicate that a train is approaching, and motorists
                  must come to a complete stop before the tracks.
                </li>
                <li className="courseText">
                  Crossing gate - don't drive around: Crossing gates are
                  physical barriers that lower to block the road when a train is
                  approaching. It is crucial to never attempt to drive around a
                  lowered crossing gate, as it indicates an active train
                  crossing.
                </li>
                <li className="courseText">
                  Crossing sign: A yellow and black crossing sign alerts drivers
                  to an upcoming railroad crossing, providing an advanced
                  warning to prepare for a potential stop.
                </li>
              </ol>
              <h5 className="sectionSubheading">
                Rail crossing safety (including rail transit):
              </h5>
              <p className="courseText">
                <span className="bold">Never stop on railroad tracks: </span>{" "}
                let traffic ahead clear before trying to cross tracks. It is
                essential to ensure that there is sufficient space on the other
                side of the tracks before proceeding, avoiding the risk of being
                trapped on the tracks in the presence of an oncoming train.
              </p>
              <p className="courseText">
                <span className="bold">
                  Watch for vehicles required to stop at all rail crossings:
                </span>
                Some crossings may have additional signage indicating that all
                vehicles must come to a complete stop, even if no train is
                visible. It is important to be aware of such requirements and
                follow them accordingly.
              </p>
              <p className="courseText">
                <span className="bold">Never walk on railroad tracks: </span>
                Walking on or near railroad tracks is extremely dangerous and
                can lead to fatal accidents. Pedestrians should always use
                designated crossings or alternate routes to ensure their safety.
              </p>
              <p className="courseText">
                <span className="bold">When crossing multiple tracks</span>wait
                a few seconds after a train has passed to be sure there isn't
                one traveling the other way. Multiple tracks may be present at
                some crossings, and it is crucial to verify that no other trains
                are approaching from a different direction before proceeding.
              </p>
              <p className="courseText">
                <span className="bold">Never race a train to the crossing</span>
                Attempting to beat a train by racing to a crossing is extremely
                dangerous and significantly increases the risk of a collision.
                It is important to prioritize safety over saving time.
              </p>
              <p className="courseText">
                <span className="bold">
                  If your vehicle stalls on tracks -get out:{" "}
                </span>
                Only attempt to restart if you can post someone outside the car
                to watch for trains. In the event of a vehicle stalling on
                railroad tracks, it is essential to exit the vehicle promptly
                and move to a safe location. If it is possible to restart the
                vehicle, it should only be done if someone can provide a lookout
                for approaching trains.
              </p>
              <p className="courseText">
                <span className="bold">
                  Do not misjudge the train's speed and distance:{" "}
                </span>
                Large objects, such as trains, may appear to be moving slower
                than they are due to their size. It is important not to misjudge
                the speed and distance of an approaching train and to allow
                ample time for a safe crossing.
              </p>
              <h5 className="sectionSubheading">School Buses</h5>
              <img src={schoolBus} alt="school bus" className="courseImage" />
              <p className="courseText">
                School buses are an integral part of ensuring the safe
                transportation of students to and from school. When it comes to
                school buses, there are several important points to keep in mind
                for the safety of everyone on the road:
              </p>
              <ol className="orderedList" type="a">
                <li className="courseText">
                  Flashing red lights means that both directions of traffic must
                  stop at a safe distance away from the school bus and remain
                  stopped until the red lights stop flashing. This is to ensure
                  the safety of children who are getting on or off the bus.
                </li>
                <li className="courseText">
                  School buses are now required to activate red lights at all
                  stops. This is a safety measure to alert other drivers that
                  the bus is making a stop and children may be present.
                </li>
                <li className="courseText">
                  Always obey hand signals and other instructions of school bus
                  drivers. The drivers are responsible for the safety of the
                  children, and following their instructions helps maintain
                  order and safety during bus stops.
                </li>
                <li className="courseText">
                  Be as courteous as possible to school buses and give them the
                  right of way whenever possible. School buses often make
                  frequent stops, so being patient and allowing them to proceed
                  can help ensure the safety of everyone.
                </li>
                <li className="courseText">
                  Do not pull out in front of school buses or otherwise cause
                  them to maneuver abruptly. It's important to maintain a safe
                  distance from school buses and avoid any actions that may
                  force them to make sudden or unexpected maneuvers.
                </li>
                <li className="courseText">
                  Be very cautious around stopped school buses, even if the red
                  lights are not flashing. Assume that a child might dart out in
                  front of you. Children can be unpredictable, and it's crucial
                  to exercise caution when driving near a stopped school bus, as
                  children may be crossing the road.
                </li>
                <li className="courseText">
                  Treat school bus stops as school zones; drive 25 M.P.H. or
                  less if children are present. School bus stops are areas where
                  children gather, and it's essential to drive slowly and
                  attentively to ensure their safety.
                </li>
              </ol>
              <h4 className="sectionHeading" id="sectionFour">
                Section 4.5. Pictorial Messages
              </h4>
              <p className="courseText">
                Understanding pictorial messages is crucial for quickly
                comprehending traffic signs and symbols. Here are some common
                pictorial messages and their meanings:
              </p>
              <h5 className="sectionSubheading">Red, Black, or Red on White</h5>
              <p className="courseText">
                <span className="bold">Stop, Yield, or a Prohibition: </span>{" "}
                Signs with a red, black, or red-on-white color combination
                convey important messages. Red is universally recognized as a
                signal to stop or prohibit certain actions, while black and
                white contrast provides clear visibility. These signs can
                indicate stop signs, yield signs, or prohibitions, alerting
                drivers to necessary actions or restrictions.
              </p>
              <h5 className="courseSubheading">Guide - green:</h5>
              <p className="courseText">
                <span className="bold">
                  Movement permitted or directional guidance:{" "}
                </span>
                Green signs typically provide guidance and convey information
                about permitted movements, such as directional arrows, highway
                exits, or distance markers. They assist drivers in finding their
                way and making informed decisions while on the road.
              </p>
              <h5 className="courseSubheading">Warning - Yellow</h5>
              <p className="courseText">
                <span className="bold">General Warning:</span>Yellow signs are
                used to warn drivers about potential hazards or road conditions
                ahead. They serve as a general alert to exercise caution, reduce
                speed, or be prepared for specific situations such as curves,
                slippery roads, or pedestrian crossings.
              </p>
              <h5 className="courseSubheading">Construction - Orange</h5>
              <p className="courseText">
                <span className="bold">
                  Warning and guidance, information for construction and
                  maintenance zone operation:
                </span>{" "}
                Orange signs are commonly seen in construction or maintenance
                zones. They warn drivers of potential hazards and guide detours,
                lane closures, or construction-related activities. These signs
                help drivers navigate safely through work zones and ensure the
                safety of both motorists and construction workers.
              </p>
              <h5 className="courseSubheading">Service - blue</h5>
              <p className="courseText">
                <span className="bold">Motorists' Services: </span>Blue signs
                are typically used to indicate services available to motorists,
                such as gas stations, rest areas, hospitals, or food services.
                These signs provide drivers with essential information about
                nearby amenities and services.
              </p>
              <h5 className="sectionSubheading">Recreational - brown</h5>
              <p className="courseText">
                <span className="bold">
                  Public recreation and cultural interest guidance:{" "}
                </span>
                Brown signs are often used to indicate recreational areas,
                national parks, historic sites, or cultural points of interest.
                They guide drivers to locations of recreational or cultural
                significance, encouraging exploration and tourism.
              </p>
              <h5 className="sectionSubheading">Shapes</h5>
              <p className="courseText">
                <span className="bold">Octagon: </span>The octagonal shape is
                exclusive to stop signs, instantly communicating the requirement
                for drivers to come to a complete stop.
              </p>
              <p className="courseText">
                <span className="bold">Triangle: </span>The triangular shape is
                used for yield signs, indicating that drivers must yield the
                right-of-way to other vehicles or pedestrians.
              </p>
              <p className="courseText">
                <span className="bold">Round: </span>Circular signs with a black
                symbol of a railroad crossing indicate the presence of a
                railroad crossing ahead. They warn drivers to be cautious and
                prepared to stop for oncoming trains.
              </p>
              <p className="courseText">
                <span className="bold">Vertical rectangle: </span>Signs with a
                vertical rectangular shape convey regulatory information, such
                as speed limits, parking restrictions, or one-way streets.
              </p>
              <p className="courseText">
                <span className="bold">Pentagon: </span>The pentagonal shape is
                specifically used for school zone signs, alerting drivers to the
                presence of a school zone and the need to exercise caution.
              </p>
              <p className="courseText">
                <span className="bold">Pennant: </span>Pennant-shaped signs
                indicate no passing zones, warning drivers not to overtake or
                pass other vehicles in specific areas.
              </p>
              <p className="courseText">
                <span className="bold">Diamond: </span>Diamond-shaped signs are
                commonly used for warning signs, alerting drivers to potential
                hazards, road conditions, or other dangers.
              </p>
              <p className="courseText">
                <span className="bold">horizontal Rectangle: </span>Signs with a
                horizontal rectangular shape provide information and guidance,
                such as route markers, distance information, or tourist
                attractions.
              </p>
            </div>
          )}
          <NextButton />
        </div>
      </div>
    </div>
  );
}
