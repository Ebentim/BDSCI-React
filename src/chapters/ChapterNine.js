import ReactPlayer from "react-player";
import pedestrian from "../Assets/images/image49.png";
export default function ChapterNine() {
  const sections = {
    sectionOne: "As a Pedestrian",
    sectionTwo: "As a Driver",
    sectionThree: "Avoidinng Collisions with Animals",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">Unit Nine: Pedestrian Safety</h3>
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
              Section 9.1 As a Pedestrian
            </h4>
            <img
              src={pedestrian}
              alt="a pedestrian on zebra crossing"
              className="courseImage"
            />
            <h5 className="sectionSubheading">
              A. Pedestrian/ Bicycle Accident are a major cause of death for
              ages 8-14
            </h5>
            <p className="courseText">
              With nearly 1,000 bicyclist deaths and over 130,000 injuries
              occurring yearly due to road crashes in the US, these figures
              serve as a stark reminder of the risks associated with cycling.
              While adults constitute the majority of casualties, the
              vulnerability of children, adolescents, teens, and young adults
              cannot be ignored. These age groups face the highest rates of
              bicycle-related injuries, as evidenced by the significant number
              of emergency department visits. The RoSPA report's revelation of
              16,884 cyclists injured in road accidents in a single year further
              accentuates the need for caution. Particularly concerning is the
              statistic that children aged 9-12 have a higher percentage of
              bicycle fatalities compared to younger children, while pedestrian
              fatalities account for a considerable portion of crash deaths
              among young children. This collective data is a resounding call
              for individuals to exercise vigilance and follow road safety rules
              to safeguard themselves and others on the roads.
            </p>
            <h5 className="sectionSubheading">
              B. Safety at Intersections with Traffic Signals
            </h5>
            <p className="courseText">
              Being a responsible pedestrian means being aware of your
              surroundings and taking necessary precautions when crossing
              intersections. By following traffic signals and watching for
              vehicles that may not stop, you can help ensure a safer crossing
              experience. Do not forcefully claim the right of way, pay
              attention to turning vehicles, and avoid distractions. When
              possible, walk with a group to increase safety. Always be prepared
              to stop at any moment and always exercise caution. By taking these
              steps, you can positively impact your safety and that of others
              around you
            </p>
            <h5 className="sectionSubheading">
              C. Safety at Intersections with Stop Signs
            </h5>
            "
            <p className="courseText">
              Intersections controlled by stop signs require pedestrians to be
              cautious and proactive in ensuring their safety. Before crossing,
              make eye contact with drivers at the stop signs to ensure they see
              you and acknowledge your intention to cross. This visual
              confirmation helps prevent accidents caused by miscommunication
              between pedestrians and drivers.
            </p>
            <p className="courseText">
              Don't assume others will stop just because one car has. Wait until
              all approaching vehicles have stopped before crossing. Be cautious
              of hidden vehicles at intersections, obscured by other objects or
              vehicles. Cross only at designated crosswalks or intersections to
              avoid unexpected crossings and increased accident risk.
            </p>
            <p className="courseText">
              Increase visibility by wearing bright or reflective clothing,
              especially during low-light conditions. Stay alert and avoid
              distractions like headphones. Educate children about safe crossing
              habits, and be patient when multiple pedestrians are present,
              waiting your turn to cross.
            </p>
            <h5 className="sectionSubheading">
              D. Crossing at Intersections - Don’t jaywalk
            </h5>
            <p className="courseText">
              Crossing at intersections and refraining from jaywalking are vital
              practices. Adhering to designated crosswalks or intersections
              enhances your visibility to drivers and reduces the risk of
              accidents.
            </p>
            <p className="courseText">
              Jaywalking is often prohibited and subject to fines. Using
              crosswalks and intersections grants pedestrians the right of way,
              ensuring that vehicles yield to them when crossing the road.
            </p>
            <h5 className="sectionSubheading">E. Walk Facing Traffic</h5>
            <p className="courseText">
              Have you ever wondered why it is safer to walk facing the cars on
              the road? There are many reasons for this. First, you can see the
              cars better and they can see you better. This way, you can make
              eye contact with the drivers and know what they are going to do.
              You can also notice if a car is coming too close to you or if a
              driver does not see you. This way, you can move away or warn them
              in time. You can also judge when it is safe to cross the road by
              looking at the traffic. This way, you can avoid getting hit by a
              car that is turning or changing lanes.
            </p>
            <p className="courseText">
              You should always use the sidewalk if there is one and stay as far
              to the left as possible if there is not. You should also avoid
              using your phone or listening to music while walking, as these can
              distract you and make you less aware of your surroundings.
            </p>
            <h5 className="sectionSubheading">
              F. Wear Bright and/or Reflective Clothing
            </h5>
            <p className="courseText">
              Wearing bright and reflective clothing is a paramount aspect of
              pedestrian safety, especially in low-light conditions and near
              roadways. The choice of clothing that enhances visibility
              significantly increases the chances of pedestrians being noticed
              by drivers, ultimately reducing the risk of accidents. Brightly
              colored garments, like fluorescent yellow, green, orange, or pink,
              help you stand out during the day, while reflective materials
              ensure you remain visible in the dark by reflecting light to their
              source, such as headlights.
            </p>
            <p className="courseText">
              In situations with limited visibility, such as dawn, dusk, or
              nighttime, wearing bright or reflective clothing becomes even more
              crucial. This allows drivers to spot you from a greater distance
              and react accordingly.
            </p>
            <h5 className="sectionSubheading">G. Don’t Wear Headphones</h5>
            <p className="courseText">
              Avoiding the use of headphones while walking as a pedestrian is a
              critical safety measure that can significantly reduce the risk of
              accidents and improve situational awareness. When you wear
              headphones, you are more likely to become distracted, which can
              lead to serious consequences on the road. Here's why it's
              important not to wear headphones while walking.
            </p>
            <p className="courseText">
              Wearing headphones impairs your ability to hear sounds from your
              surroundings, including oncoming traffic, car horns, emergency
              vehicle sirens, bicycle bells, and warning signals. Auditory cues
              play a crucial role in detecting potential hazards and avoiding
              accidents. Using headphones diverts your attention away from your
              environment, making you less aware of potential dangers. This
              distracted walking can lead to unintended crossings, failure to
              notice traffic signals, or stepping into the path of oncoming
              vehicles. Without the ability to hear nearby vehicles or
              environmental cues, you may be caught off guard by sudden
              movements or changes in traffic patterns, making it difficult for
              you to react appropriately. When wearing headphones, you might be
              less likely to hear or respond to verbal warnings or instructions
              from others, such as fellow pedestrians, drivers, or emergency
              responders. For individuals with hearing impairments, the use of
              headphones can further hinder their ability to communicate with
              others and be aware of their surroundings, potentially leading to
              unsafe situations.
            </p>
            <h5 className="sectionSubheading">
              H. Don’t Walk on Railroad Tracks
            </h5>
            <p className="courseText">
              Walking on railroad tracks is both highly perilous and illegal,
              posing substantial threats to personal safety and resulting in
              severe accidents and injuries. The swift and quiet approach of
              trains creates a challenge for pedestrians to anticipate,
              increasing the risk of potentially fatal collisions. Furthermore,
              the confined space surrounding railroad tracks limits escape
              options, heightening the possibility of being unable to evade
              danger swiftly. Operating on fixed schedules, trains can appear
              unexpectedly, leaving those on the tracks with inadequate time to
              react.
            </p>
            <p className="courseText">
              Apart from the imminent physical risks, trespassing on railroad
              tracks is against the law, subjecting individuals to legal
              ramifications like fines and penalties. The uneven and slippery
              terrain, especially during adverse weather, contributes to the
              danger of slips and falls. In addition, the tracks carry high
              voltages for signaling, exposing pedestrians to the grave threat
              of electric shocks or even electrocution. This behavior can
              obstruct train operators' views, leading to delayed responses and
              a heightened risk of accidents.
            </p>
            <p className="courseText">
              Pedestrians on tracks also risk being caught in potential train
              derailments, amplifying the hazards of this reckless conduct.
              Given that railroads hold the right of way, pedestrians lack legal
              entitlement to be on tracks, underscoring the significance of
              respecting safety measures and established laws. To prioritize
              personal safety and legal compliance, pedestrians must refrain
              from walking on railroad tracks, opting instead for designated
              crossings or bridges.
            </p>
            <h4 className="sectionHeading" id="sectionTwo">
              Section 9.2. As a Driver
            </h4>
            <h5 className="sectionSubheading">
              A. Always yield the right of way to pedestrians, regardless of
              who’s right.
            </h5>
            <p className="courseText">
              As a driver, ensuring the safety of pedestrians should be a top
              priority. Always yield the right of way to pedestrians within
              crosswalks, whether they are marked or unmarked. Slow down and be
              prepared to stop when approaching a crosswalk to allow pedestrians
              to cross safely. Pay attention to pedestrian signals at
              intersections, allowing pedestrians to cross when the signal is
              green and giving them ample time to finish crossing if the signal
              indicates "Don't Walk" or displays a flashing hand. Yield to
              pedestrians who have entered an intersection, even if there are no
              marked crosswalks or traffic signals.
            </p>
            <p className="courseText">
              Exercise extra caution when turning at intersections, especially
              when making right turns on red signals, as pedestrians may be
              crossing in the direction of your turn. If a vehicle has stopped
              to allow pedestrians to cross, do not pass or overtake it until
              the pedestrians have crossed safely. Be particularly attentive
              when driving in school zones or near school crossings, as children
              can be unpredictable. Reduce your speed and be prepared to stop at
              all times in these areas.
            </p>
            <p className="courseText">
              In parking lots and near driveways, be vigilant for pedestrians
              who may be walking between parked cars, making them less visible.
              Always check your blind spots thoroughly before turning or
              changing lanes at intersections, as pedestrians may be walking
              near your vehicle. Exercise patience and allow extra time for
              pedestrians, such as the elderly or those with disabilities, to
              cross the road safely.
            </p>
            <p className="courseText">
              During adverse weather conditions, like rain or snow, be extra
              cautious as visibility may be reduced, making it harder to spot
              pedestrians. At night, ensure your headlights are on and be
              watchful for pedestrians to see and be seen by them. By following
              these safety measures, drivers can play a crucial role in ensuring
              the safety of pedestrians and reducing the risk of accidents on
              the road.
            </p>
            <ReactPlayer
              url="https://youtu.be/ifdzk70Pjxg"
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
            <h5 className="sectionSubheading">B. Watch for Pedestrians</h5>
            <p className="courseText">
              As a responsible driver, being vigilant for pedestrians in various
              locations is crucial for ensuring their safety. Always watch for
              pedestrians when approaching or passing through crosswalks,
              whether marked or unmarked. Exercise extreme caution in school
              zones and areas near schools, as children can be unpredictable. Be
              attentive when driving near buses, especially when they are
              stopped to pick up or drop off passengers, and obey signals from
              the bus driver. When encountering a school bus with flashing red
              lights, always stop to allow children to safely cross the road.
            </p>
            <p className="courseText">
              Stay cautious when driving near parked cars, as pedestrians may
              emerge suddenly from between them and attempt to cross the road.
              Be mindful of pedestrian traffic at intersections, even if there
              are no designated crosswalks. Avoid distractions like electronic
              devices while driving to maintain full attention on the road and
              pedestrians. Use your vehicle's horn sparingly and only when
              necessary to alert pedestrians to your presence. Being aware of
              pedestrians in these specific locations and adopting defensive
              driving techniques will help prevent accidents and ensure
              pedestrian safety on the road. Your attentiveness and cautious
              approach as a driver can make a significant difference in
              promoting pedestrian safety.
            </p>
            <h5 className="sectionSubheading">
              C. Stop behind the limit line, don’t block crosswalks
            </h5>
            <p className="courseText">
              Stopping behind the limit line and avoiding blocking crosswalks is
              not only a matter of following traffic rules but also a critical
              safety measure that protects pedestrians and ensures efficient
              traffic flow. Respecting traffic laws by stopping behind the limit
              line allows drivers to have an unobstructed view of oncoming
              traffic and potential hazards at intersections, facilitating
              well-informed driving decisions. It also helps avoid traffic
              violations and potential penalties, while maintaining the
              visibility of other drivers and pedestrians for safer
              interactions.
            </p>
            <p className="courseText">
              Additionally, not blocking crosswalks ensures pedestrian safety by
              providing designated areas for them to cross the road without
              obstruction or risk of accidents. It also complies with pedestrian
              right of way, promoting smooth traffic flow and reducing
              congestion at intersections.
            </p>
            <h5 className="sectionSubheading">
              D. Use special care when backing.
            </h5>
            <p className="courseText">
              Using special care when backing is crucial for ensuring the safety
              of pedestrians and other vehicles. Limited visibility while
              backing can lead to accidents, making it essential to be cautious
              and attentive during this maneuver. Pedestrian safety is of
              particular concern, as they may not always be visible when a
              vehicle is backing up, especially in blind spots. Avoiding
              collisions with other vehicles or stationary objects is another
              significant reason to exercise special care when backing.
            </p>
            <p className="courseText">
              To back up safely, you should check your surroundings thoroughly,
              using mirrors and looking over your shoulder to have a clear view
              of the area behind the vehicle. If possible, having a spotter to
              guide the backing process can be immensely helpful. Modern
              vehicles equipped with backup cameras and sensors can also be
              valuable aids in enhancing safety. Backing up slowly and steadily
              gives you enough time to react to any unexpected obstacles or
              pedestrians. Properly signaling intentions and using the horn when
              necessary help alert pedestrians and other drivers of the
              vehicle's movement.
            </p>
            <p className="courseText">
              Avoiding distractions and staying focused on the backing process
              is crucial. Continuously monitor the mirrors to track the movement
              of pedestrians or other vehicles while backing. Additionally, be
              mindful of tire position, especially during parallel parking, to
              prevent damage to tires or wheels.
            </p>
            <h5 className="sectionSubheading">
              E. Don’t drive in bike lanes, except where permitted.
            </h5>
            "
            <p className="courseText">
              Driving in bike lanes is generally prohibited and can be dangerous
              for both cyclists and motorists. Bike lanes are specifically
              designed to provide a safe and convenient space for cyclists, away
              from faster-moving vehicles. Driving in bike lanes can put
              cyclists at risk of accidents and injuries, and it may surprise
              cyclists and pedestrians, leading to unexpected maneuvers and
              potential collisions. Moreover, driving in bike lanes is often a
              legal violation that can result in fines or penalties.
            </p>
            <p className="courseText">
              Driving in bike lanes can also disrupt the flow of bicycle
              traffic, causing congestion and frustration among cyclists.
              Additionally, it can cause damage to the lane markings, affecting
              the overall maintenance and safety of the cycling infrastructure.
              However, there are exceptions when driving in bike lanes may be
              permitted, such as making turns at intersections or driveways.
              Nevertheless, this should be done with extreme caution and only
              when no cyclists or pedestrians are present.
            </p>
            <p className="courseText">
              When sharing the road with cyclists, it is essential to give them
              adequate space when passing, check blind spots carefully before
              turning or changing lanes, and use turn signals to indicate your
              intentions. Be patient with cyclists who may ride at a slower pace
              and look before opening your car door when parked on the side of
              the road. Exercise caution at intersections, and yield to cyclists
              and pedestrians when making turns. Remember that cyclists have the
              same rights and responsibilities as other vehicles on the road,
              and it is essential to share the road responsibly.
            </p>
            <h4 className="section-heading" id="sectionThree">
              Section 9.3. Avoiding Collisions with Animals
            </h4>
            <h5 className="sectionSubheading">
              A. Vehicle Damage, and Human Injury From Larger Animals
            </h5>
            <p className="courseText">
              Collisions involving animals like deer, moose, elk, and others
              pose significant risks of vehicle damage and human injury. The
              impact of such collisions can cause severe damage to the vehicle's
              body, including the front hood, fenders, and windshield, leading
              to costly repairs. Vital mechanical components like the radiator,
              engine, suspension, and exhaust system may also suffer damage,
              rendering the vehicle inoperable and requiring expensive repairs
              or towing. Airbag deployment in severe collisions adds to the
              expenses, as it necessitates replacing the airbags and repairing
              the steering wheel and dashboard. Additionally, tire damage can
              occur, leading to blowouts or punctures that require replacement.
            </p>
            <p className="courseText">
              On the human front, occupants in a collision may experience
              whiplash, musculoskeletal injuries, head and facial injuries,
              fractures, broken bones, and internal organ damage due to the
              forces involved. Unrestrained passengers may be thrown forward
              into the dashboard, windshield, or airbag, leading to severe head
              and facial injuries. In high-speed collisions with large animals,
              occupants may be ejected from the vehicle, further increasing the
              risk of severe injuries or fatalities. Beyond physical injuries,
              being involved in such collisions can have long-lasting
              psychological effects, causing anxiety and post-traumatic stress
              disorder (PTSD) due to the traumatic nature of the experience.
            </p>
            <p className="courseText">
              To mitigate these risks, drivers should exercise caution,
              especially in areas known for animal crossings. Reduce speed,
              especially at dawn and dusk when animals are most active. Use high
              beams when appropriate to spot animals on the road from a greater
              distance. Always wear seat belts and ensure all occupants are
              restrained to reduce the risk of injury in the event of a
              collision.
            </p>
            <h5 className="sectionSubheading">
              B. Animals most active at dusk and dawn
            </h5>
            <p className="courseText">
              Dawn and dusk, often referred to as the "twilight hours," present
              higher risks for drivers due to reduced visibility and increased
              animal movement. Two types of animals that are notably more active
              during these times are deer and some small mammals. Deer, being
              crepuscular animals, are highly active during dusk and dawn as
              they move between their bedding areas and feeding grounds. During
              these periods, you should exercise caution and follow safety
              precautions to avoid collisions with deer. These precautions
              include reducing speed, staying alert for any movement along the
              roadside, and using high beams when appropriate.
            </p>
            <p className="courseText">
              Similarly, various small mammals like raccoons are also more
              active during the twilight hours as they seek food and shelter.
              You should scan roadside areas, especially near wooded areas and
              shrubbery, where small mammals may be foraging or crossing. If a
              small animal suddenly crosses the road, it is important to avoid
              swerving to avoid it, as swerving can lead to loss of control or
              collisions with other vehicles. Instead, brake as safely and
              steadily as possible.
            </p>
            <h5 className="sectionSubheading">
              C. Don’t jeopardize vehicle control when avoiding animals.
            </h5>
            <p className="courseText">
              When drivers encounter animals suddenly on or near the road, it is
              natural to react instinctively. However, making abrupt and extreme
              maneuvers to avoid the animal can be dangerous and potentially
              lead to more severe consequences. It is essential for you to stay
              calm and composed in such situations to make safe decisions.
            </p>
            <p className="courseText">
              Abrupt swerving is hazardous, especially at high speeds, as it can
              cause the driver to lose control of the vehicle, veer into
              oncoming traffic, or collide with other objects. Instead of harsh
              swerving, the best initial response is to slow down gradually and
              apply the brakes smoothly. This gives the animal more time to
              react and move away from the road and allows other drivers behind
              you to anticipate your actions.
            </p>
            <p className="courseText">
              Using your horn, if safe to do so, can help alert the animal and
              encourage it to move away from the road. Animals may freeze in
              response to headlights, but the sound of the horn may startle them
              into moving out of the way. While trying to avoid the animal, it's
              essential to stay in your lane and avoid crossing into oncoming
              traffic or driving onto the shoulder excessively.
            </p>
            <p className="courseText">
              Maintaining focus on the road and surroundings is crucial during
              this situation. Animals can behave unpredictably, so being
              prepared for the unexpected is essential. If a collision with the
              animal becomes unavoidable, try to keep the vehicle as straight as
              possible and brake firmly to reduce the impact.
            </p>
          </div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
