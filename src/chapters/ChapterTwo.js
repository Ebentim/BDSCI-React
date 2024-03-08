import { NavButtons } from "../Assets/next";
import { useState } from "react";
import Two from "../quizes/Two";
import "../styles/general.css";
import humanEye from "../Assets/images/image59.png";
import humanEyeStructure from "../Assets/images/image67.png";
import snellenChart from "../Assets/images/image34.png";
const sections = {
  sectionOne: "The Pyschological Nature of the Driver",
  sectionTwo: "The Physiological Nature of the Driver",
};
export default function ChapterTwo() {
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
    <div className="courseBody" id="two">
      <h3 className="bold unitHeading">Unit two: The Driver</h3>
      {!showQuiz ? (
        <div className="courseContentContainer">
          <div className="courseOutline">
            <ul className="sectionList">
              {Object.entries(sections).map(([key, value]) => {
                return (
                  <li key={key}>
                    <a href={`#${key}`}>{value}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="courseContents">
              <h4 className="sectionHeading" id="sectionOne">
                Section 2.1: The physiological nature of the driver
              </h4>
              <p className="courseText">
                Your ability to operate a vehicle safely is closely connected to
                your cognitive and physiological condition. Quick decisions on
                the road depend on your mental and physical state. You must
                possess sufficient visual and auditory acuity to recognize
                potential dangers and effectively manage unexpected scenarios.
              </p>
              <p className="courseText">
                To drive safely, you need to be able to{" "}
                <span className="bold">Search</span>,{" "}
                <span className="bold">Identify</span>,{" "}
                <span className="bold">Predict</span>,{" "}
                <span className="bold">Decide</span>, and{" "}
                <span className="bold">Execute (SIPDE)</span>. These abilities
                collectively ensure your awareness, responsiveness, and
                effective navigation. Missing any of these abilities renders
                safe driving impossible.{" "}
              </p>
              <p className="courseText">
                <span className="bold">Search: </span>You must actively scan for
                hazards, road signs, pedestrians, vehicles, road conditions, and
                signals to gather comprehensive information about the
                environment.
              </p>
              <p className="courseText">
                <span className="bold">Identify: </span>Drivers need to
                recognize hazards, understand road signs and signals,
                distinguish between vehicles and pedestrians, and note changes
                in road conditions from the gathered information.
              </p>
              <p className="courseText">
                <span className="bold">Predict: </span>Drivers should anticipate
                the actions of other road users, such as lane changes, turns,
                acceleration, and deceleration, based on observed behaviors and
                patterns.
              </p>
              <p className="courseText">
                <span className="bold">Decide: </span>Decision-making involves
                evaluating information, identifying hazards, and predicting
                actions to make informed choices like changing lanes, adjusting
                speed, yielding the right of way, and more.
              </p>
              <p className="courseText">
                <span className="bold">Execute: </span> Proper execution entails
                carrying out decisions safely by manipulating vehicle controls
                for actions like accelerating, braking, steering, and signaling.
              </p>
              <p className="courseText">
                If you: <span className="bold">(a)</span> demonstrate inadequate
                decision-making in traffic scenarios and struggle to take
                suitable autonomous measures, <span className="bold">(b)</span>{" "}
                are unable to foresee the actions of fellow drivers and exhibit
                subpar or delayed reactions to dangers, and/or{" "}
                <span className="bold">(c)</span> seem readily diverted,
                struggle with basic instructions, and exhibit inattention or
                lack of response to road signs, you will be considered a risk to
                fellow motorists, potentially leading to a denial of a license.
              </p>
              <h5 className="sectionSubheading">A. The eyes and vision</h5>
              <p className="courseText">
                The human eye is a remarkable organ; it consists of various
                components working together to capture and process visual
                information.
              </p>
              <div className="courseimageContainer">
                <img
                  src={humanEye}
                  alt="The Human eye"
                  className="courseImage"
                />
                <img
                  src={humanEyeStructure}
                  alt="Internal structure of the human eye"
                  className="courseImage"
                />
              </div>
              <h6 className="sectionSubheading">Eye Physiology</h6>
              <p className="courseText">
                The human eye is a complex sensory organ that enables us to see
                and perceive the world around us. It consists of various
                structures and components, each with its unique role. Let's
                explore the basic structure and function of the human eye:
              </p>
              <p className="courseText">
                Light passes through the cornea, which is the clear front layer
                of the eye. The cornea plays a vital role in vision by bending
                or refracting the incoming light. By doing so, it helps to focus
                the light onto the lens and eventually onto the retina, ensuring
                clear and sharp vision.
              </p>
              <p className="courseText">
                The pupil, an opening in the center of the iris (the colored
                part of the eye), regulates the amount of light that enters the
                eye. In bright light, the pupil constricts or becomes smaller,
                reducing the amount of light entering the eye. Conversely, in
                dim light, the pupil dilates or expands, allowing more light to
                enter the eye.
              </p>
              <p className="courseText">
                After passing through the pupil, the light continues its journey
                through the lens. The lens, located behind the pupil, further
                refracts or bends the light to focus it onto the retina. Working
                together with the cornea, the lens ensures that the light rays
                converge precisely onto the retina, enabling precise and focused
                vision.
              </p>
              <p className="courseText">
                The retina is a delicate and light-sensitive layer of tissue
                located at the back of the eye. It contains specialized cells
                called photoreceptors, which are responsible for converting the
                incoming light into electrical signals. These photoreceptors,
                known as rods and cones, react to different levels of light and
                are crucial for visual perception.
              </p>
              <p className="courseText">
                Once the photoreceptors in the retina capture the light, they
                convert it into electrical signals. These signals then travel
                from the retina through the optic nerve, a bundle of nerve
                fibers, toward the brain. The optic nerve serves as a
                transmission pathway, relaying the visual information encoded as
                electrical signals to the brain for further processing.
              </p>
              <p className="courseText">
                Finally, the brain receives the electrical signals from the
                optic nerve and interprets them, creating the images that we
                perceive. The brain integrates and analyzes visual information,
                allowing us to recognize shapes, colors, depth, and other visual
                details. This complex process of signal interpretation occurs in
                different regions of the brain, contributing to our visual
                perception and understanding of the world around us.
              </p>
              <h6 className="sectionSubheading">Visual acuity</h6>
              <p className="courseText">
                Visual Acuity is the sharpness of our vision and plays a vital
                role in reading road signs, identifying hazards, and maintaining
                safe distances from other vehicles. It is a critical factor in
                ensuring safe driving. It refers to the clarity and sharpness of
                vision, specifically the ability to see details and distinguish
                objects clearly at various distances. Visual acuity plays a
                crucial role in several aspects of driving,
              </p>
              <h5 className="sectionSubheading">Importance of visual acuity</h5>
              <p className="courseText">
                Visual acuity underpins critical facets such as road sign
                recognition, early hazard detection, precise distance
                perception, and comprehensive situational awareness. With the
                clarity it affords, drivers swiftly interpret road signs, spot
                potential hazards, judge distances, and maintain a wide-angle
                view, collectively enhancing road safety and empowering
                confident navigation.
              </p>
              <h5 className="sectionSubheading">
                Measurement of visual acuity
              </h5>
              <img
                src={snellenChart}
                alt="Snellen Chart"
                className="courseImage"
              />
              <p className="courseText">
                Visual acuity is typically measured using the Snellen chart, a
                standardized method eye care professionals use. The Snellen
                chart consists of rows of letters or symbols that decrease in
                size from top to bottom. During an eye examination, individuals
                are asked to read the notes or symbols from a certain distance.
                The measurement is expressed as a fraction, with the top number
                representing the testing distance and the bottom number
                indicating the distance at which a person with normal vision can
                read the same line.
              </p>
              <p className="courseText">
                For example, 20/20 vision indicates that the person being tested
                can read at 20 feet and a person with normal vision can read at
                20 feet. If someone has 20/40 vision, it means they need to be
                at 20 feet to see what a person with normal vision can see at 40
                feet. The lower the second number in the fraction, the lower the
                visual acuity.
              </p>
              <p className="courseText">
                According to the California Department of Motor Vehicles (DMV),
                drivers applying for an original or renewal driver's license
                must meet the department’s visual acuity (vision) screening
                standard. The DMV’s vision screening standard is 20/40 with both
                eyes tested together, and 20/40 in one eye and at least, 20/70
                in the other eye. If corrective wear cannot allow you to reach a
                level of visual acuity better than 20/200 vision (where at 20
                feet you see a level of detail a person with normal vision can
                see at 200 feet) in at least one eye, you may not be scheduled
                for a drive test in California.
              </p>
              <h5 className="coursesubheading">
                Distance judgment (depth perception)
              </h5>
              <p className="sectionQuote">
                Depth perception allows us to accurately perceive the relative
                distances between objects in our environment. It helps us judge
                the space between vehicles, estimate stopping distances, and
                make safe lane changes. Depth perception is vital for
                maintaining a proper following distance.
              </p>
              <p className="courseText">
                Depth perception refers to the ability to perceive the relative
                distances between objects in our visual field. It allows us to
                judge the position of objects in three-dimensional space
                accurately. Depth perception is crucial while driving because it
                helps us make important judgments and decisions on the road.
              </p>
              <p className="courseText">
                Depth perception is primarily achieved through the process of
                binocular vision, which involves both eyes working together to
                provide a sense of depth and distance. When both eyes are
                functioning properly, they capture slightly different images of
                the same object from slightly different angles. The brain
                combines these two images to create a single, three-dimensional
                perception of the world.
              </p>
              <p className="courseText">
                Depth perception enables us to accurately assess the distance
                between our vehicle and other objects, facilitating safe
                following distances, smooth lane changes, and skillful
                maneuvering through tight spaces. Moreover, depth perception
                plays a pivotal role in estimating stopping distances, helping
                us make informed decisions about braking and safety. It also
                aids in evaluating the speed and timing of other vehicles or
                objects on the road, enhancing our ability to anticipate and
                react to potential hazards. Skillful use of depth perception is
                particularly vital during maneuvers like parking and navigating,
                ensuring precise and secure actions.
              </p>
              <p className="courseText">
                To optimize depth perception while driving, employing proper
                eye-scanning techniques is essential. Central and peripheral
                vision should be balanced, focusing on the road's central area
                while utilizing peripheral vision to monitor surroundings.
                Regularly scanning mirrors provides a comprehensive view of
                nearby vehicles, promoting situational awareness and early
                hazard detection. Checking blind spots through shoulder checks
                or mirror use before changing lanes enhances visibility, and
                consistently looking ahead aids in anticipating traffic changes
                and potential dangers. By incorporating these effective
                eye-scanning practices into driving routines, individuals can
                refine their depth perception skills, heighten awareness, and
                navigate roads with confidence and precision.
              </p>
              <h5 className="sectionSubheading">Peripheral Vision</h5>
              <p className="sectionQuote">
                Peripheral vision provides a wide-angle view of the
                surroundings, helping us detect objects and potential dangers
                from the sides without directly looking at them.
              </p>
              <p className="courseText">
                Peripheral vision, also known as side vision, plays a crucial
                role in detecting hazards and maintaining situational awareness
                while driving. It refers to the ability to see objects and
                movement outside of the direct line of sight, on the sides of
                our visual field.
              </p>
              <p className="courseText">
                Peripheral vision plays a crucial role in enhancing driver
                safety and situational awareness on the road. One of its key
                functions is detecting potential hazards that may not be
                immediately in front of the driver. This allows for early
                identification of objects, pedestrians, cyclists, or vehicles
                approaching from the sides, giving drivers more time to react
                and mitigate the risk of collisions.
              </p>
              <p className="courseText">
                Peripheral vision aids in maintaining lane awareness by enabling
                drivers to monitor adjacent lanes and watch for vehicles
                entering or exiting their lane, ensuring they stay within lane
                boundaries and preventing unintended lane departures. When
                approaching intersections, peripheral vision is vital for
                observing cross traffic and detecting any vehicles, pedestrians,
                or cyclists coming from the sides, empowering drivers to make
                well-informed decisions and navigate intersections safely.
              </p>
              <p className="courseText">
                Furthermore, peripheral vision contributes to monitoring the
                surroundings and maintaining overall situational awareness. It
                helps drivers keep track of vehicles both behind and beside
                them, allowing them to anticipate changing traffic conditions
                such as merging vehicles or those preparing to pass. Notably,
                peripheral vision also plays a critical role in pedestrian and
                cyclist awareness. Given the vulnerability of pedestrians and
                cyclists, especially when they aren't directly in front of the
                vehicle, utilizing peripheral vision helps drivers anticipate
                their presence and take necessary precautions to ensure their
                safety.
              </p>
              <p className="courseText">
                Lastly, effective visual scanning techniques involve regular
                mirror checks and leveraging peripheral vision to gather
                information from the environment. This comprehensive scanning
                approach minimizes blind spots, enhances overall safety, and
                equips drivers with the necessary information to navigate the
                roads confidently and responsibly.
              </p>
              <h5 className="sectionSubheading">Night vision</h5>
              <p className="sectionQuote">
                Driving at night requires special attention due to reduced
                visibility. Understanding night vision and using appropriate
                techniques can enhance safety in low-light conditions.
              </p>
              <p className="courseText">
                Driving at night and in low-light conditions presents unique
                challenges that require special attention and techniques to
                ensure safety.
              </p>
              <iframe
                title="driving at night"
                src="https://drive.google.com/file/d/1TM1zGTUpJJd3CZTjLvbMdW9r9b5kwGgn/preview"
                allow="autoplay"
                className="courseVideo"
              ></iframe>
              <h5 className="sectionSubheading">
                Techniques for driving at night and in low-light conditions
              </h5>
              <p className="courseText">
                Navigating the intricacies of nighttime driving and low-light
                conditions requires practice and awareness. Imagine you're on
                the road when the sun sets and the world around you is enveloped
                in darkness. To drive safely in such situations, you need to
                know a few important techniques.
              </p>
              <p className="courseText">
                It's essential to make sure your headlights, taillights, and
                turn signals are clean and working properly. When you're driving
                at night, switch to your low beams when other cars are coming
                toward you or when you're driving in areas with streetlights.
                This helps prevent blinding other drivers and gives you better
                visibility.
              </p>
              <p className="courseText">
                Glare from headlights behind you or reflective surfaces can be
                pretty bothersome. To deal with this, adjust your rearview
                mirror to its nighttime setting. Also, try not to look directly
                at the oncoming headlights. Instead, focus your eyes on the
                right side of the road and use your side vision to help you see
                what's in front.
              </p>
              <p className="courseText">
                Keeping a safe following distance between you and the car ahead
                is really important at night. This gives you more time to react
                if something unexpected happens. It's also a good idea to keep
                your windshield and mirrors clean. Dirt, streaks, or fog can
                make it harder to see clearly.
              </p>
              <p className="courseText">
                While it's crucial to pay attention to what's in front of you,
                remember to use your side mirrors and peripheral vision to be
                aware of what's happening on the sides. And if you're driving
                for a long time, especially at night, take breaks to combat
                fatigue. Being tired can slow down your reaction times and make
                driving more dangerous.
              </p>
              <p className="courseText">
                Avoid distractions inside your vehicle, like using your phone or
                adjusting the radio. Your focus should be on the road and
                everything around you.
              </p>
              <h5 className="sectionSubheading">Color Vision</h5>
              <p className="sectionQuote">
                Color vision is necessary for interpreting traffic signals,
                distinguishing road signs, and identifying hazards based on
                their color-coded warnings.
              </p>
              <p className="courseText">
                Traffic signals use color-coded lights to communicate messages,
                such as red for stop, green for go, and yellow for caution.
                Drivers with normal color vision can quickly recognize and
                respond to these signals. This contributes to a safe and
                efficient traffic flow. Road signs also rely on color to convey
                information and warnings. For instance, red is often used for
                regulatory signs, yellow for warning signs, and a combination of
                colors for informational signs. Accurate color vision enables
                drivers to interpret these signs correctly, anticipate hazards,
                and navigate the road safely.
              </p>
              <h5 className="sectionSubheading">Road Sign Recognition</h5>
              <iframe
                title="road sign"
                src="https://drive.google.com/file/d/1sPGkABAU9VLDZaBlhQaNQwomOUxvYqKp/preview"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">
                Compensation for Subnormal Vision
              </h5>
              <p className="sectionQuote">
                Individuals with subnormal vision need to consult their eye care
                professional or specialist for personalized advice and
                recommendations tailored to their specific visual condition.
              </p>
              <p className="courseText">
                Using prescription eyeglasses or contact lenses can improve
                vision and compensate for refractive errors. Regular eye exams
                and updating prescriptions are essential for optimal vision
                correction. Drivers with reduced peripheral vision can enhance
                awareness by scanning, using mirrors effectively, and being
                cautious when changing lanes. Maintaining a greater distance
                from the vehicle ahead gives more reaction time for those with
                subnormal vision. Properly adjusting mirrors becomes crucial.
                Assistive technologies like bioptic telescopes can help some
                individuals, ensuring compliance with driving regulations.
                Daylight driving is easier for those with subnormal vision.
                Routine eye exams monitor changes, while honesty about
                limitations is vital. Being aware of challenges and staying
                informed about driving practices through education enhances safe
                driving.
              </p>
              <h5 className="sectionSubHeading">The ears and hearing</h5>
              <p className="sectionQuote">
                Hearing is a vital sense for safe driving, enabling us to detect
                crucial auditory cues on the road.
              </p>
              <p className="courseText">
                The sense of hearing plays a crucial role in driving, allowing
                us to detect sounds such as sirens, horns, and approaching
                vehicles.
              </p>
              <h6 className="sectionSubheading">Auditory Acuity</h6>
              <p className="courseText">
                Auditory acuity is crucial for safe driving as it allows us to
                detect vital auditory cues on the road. These cues provide
                essential information that contributes to making informed
                decisions while driving.
              </p>
              <p className="courseText">
                One significant aspect of auditory acuity is its role in
                recognizing sounds that indicate potential hazards. Emergency
                vehicle sirens, for instance, require quick identification and
                localization to yield the right of way promptly. Similarly, the
                ability to promptly recognize and react to car horns is crucial
                in various situations, such as imminent collisions or lane
                changes. Hearing the sound of an approaching vehicle provides
                vital information about its proximity, speed, and direction,
                aiding in making safe driving choices.
              </p>
              <p className="courseText">
                By maintaining good auditory acuity, drivers can remain aware of
                their surroundings and identify potential dangers that might not
                be immediately visible. These auditory cues complement visual
                information and enhance overall situational awareness, enabling
                timely responses when facing critical situations.
              </p>
              <p className="courseText">
                You should prioritize auditory acuity by minimizing
                distractions, ensuring clear windows for minimal noise
                interference, and seeking medical attention or hearing aids when
                needed. Regular hearing evaluations can help identify and
                address any issues, allowing individuals to sustain their
                auditory acuity and drive safely.
              </p>
              <h5 className="sectionSubheading">Partial Deafness</h5>
              <p className="sectionQuote">
                Drivers with partial hearing loss can make use of visual cues,
                such as mirrors, and observe other drivers' behaviors, to
                compensate for their impaired hearing.
              </p>
              <p className="courseText">
                Individuals with partial hearing loss face specific challenges
                while driving, as they may struggle to hear certain frequencies
                or distinguish sounds in noisy environments. However, several
                strategies can enhance communication and mitigate these
                challenges.{" "}
              </p>
              <p className="courseText">
                Minimizing background noise within the vehicle by reducing audio
                system volumes or turning off radios helps individuals focus on
                essential auditory cues. Utilizing visual cues as supplements to
                auditory information, maintaining eye contact during
                conversations, and utilizing assistive listening devices like
                hearing aids or amplifiers can significantly enhance
                communication abilities. Encouraging open communication about
                hearing impairments and prioritizing regular hearing check-ups
                also play pivotal roles in addressing these challenges and
                ensuring safe driving practices.
              </p>
              <h5 className="sectionSubheading">Total deafness</h5>
              <p className="sectionQuote">
                Total deafness presents unique challenges for drivers.
                Communication alternatives like visual signaling or utilizing
                technology can help ensure effective communication on the road.
              </p>
              <p className="courseText">
                For drivers completely deaf, ensuring safe communication and
                driving presents distinct considerations. Visual cues replace
                verbal interaction, with sign language as a vital means of
                communication, aided by a pen and notepad for written exchanges.
                Visual signals, like gestures and lights, communicate intentions
                on the road.
              </p>
              <p className="courseText">
                Vital for hazard awareness, visual alerts, and warnings are
                integrated into modern vehicles through dashboard icons and
                lights. Additional visual warning devices can be installed for
                sounds that might be missed, such as sirens or car horns.
              </p>
              <p className="courseText">
                Assistive technology enhances communication, like telematics
                systems providing visual alerts, and visual display systems
                projecting data without distracting from driving. Education and
                awareness among law enforcement, instructors, and drivers are
                key, with "DEAF DRIVER" signage aiding understanding.
              </p>
              <h5 className="sectionSubheading">
                Compensation for Impaired Hearing
              </h5>
              <p className="sectionQuote">
                Adaptive devices, such as hearing aids or assistive listening
                devices, can assist drivers with impaired hearing and improve
                their awareness of auditory cues.
              </p>
              <p className="courseText">
                For individuals with impaired hearing, a range of assistive
                devices and techniques are available to enhance their driving
                experience and ensure road safety. One such solution is the use
                of hearing aids, wearable devices that amplify sound, enabling
                drivers to better perceive auditory cues like sirens and horns.
                Additionally, Assistive Listening Devices (ALDs) can be
                integrated into vehicles, transmitting audio signals directly to
                the driver's hearing aids or headphones, providing clearer and
                amplified sound reception.
              </p>
              <p className="courseText">
                Visual alert systems play a crucial role by offering visual
                indications of auditory signals or warnings. These systems
                employ visual cues such as flashing lights or vibrating alerts
                to notify drivers about vital auditory information, such as the
                presence of emergency vehicles or lane departure warnings.
                Moreover, drivers with hearing impairment can benefit from
                supplementary mirrors attached to their side mirrors, widening
                their field of view and compensating for auditory limitations.
              </p>
              <p className="courseText">
                Seat vibrators can be installed in vehicles to transmit
                vibrations to the driver's seat. These vibrations serve as
                alerts for significant auditory cues, enabling drivers with
                hearing loss to stay aware of critical information while
                driving. Additionally, relying on techniques such as lip reading
                and observing visual cues from fellow drivers and pedestrians
                assists in compensating for the lack of auditory input.
              </p>
              <p className="sectionSubheading">
                Other Physical Conditions That Can Affect Driving
              </p>
              <p className="sectionQuote">
                Physical deformities can affect driver control, but adaptive
                equipment or vehicle modifications can provide solutions and
                help individuals drive safely.
              </p>
              <p className="courseText">
                In the realm of driving, several factors can influence driver
                performance and safety. Fatigue, for instance, significantly
                impacts drivers by slowing reaction times, diminishing attention
                spans, impairing decision-making abilities, and reducing overall
                alertness. Such factors elevate the risk of road accidents,
                underscoring the need for effective fatigue management. Adequate
                rest before driving is vital, with recommended sleep hours of
                7-9 per night. In case of fatigue while driving, pulling over to
                rest in a safe location and consuming light, nutritious snacks
                can help mitigate its effects.
              </p>
              <p className="courseText">
                Illnesses, too, bear an influence on driving capabilities due to
                symptoms and potential side effects. Conditions like
                uncontrolled diabetes, epilepsy, severe cardiovascular diseases,
                and unmanaged psychiatric disorders can hinder a person's
                ability to drive safely. Adherence to medical advice is crucial
                in such cases, involving consultations with healthcare
                professionals to assess fitness for driving. Following
                recommended treatments, medications, and lifestyle modifications
                is pivotal to managing illnesses and their impact on driving
                ability.
              </p>
              <p className="courseText">
                Physical deformities also pose challenges to driving, yet
                adaptive equipment and techniques offer solutions. Conditions
                like limb amputations, limited mobility, or spinal deformities
                can be accommodated through hand controls, pedal extensions,
                steering wheel knobs, and more. Adaptive equipment enhances
                control and ensures safe operation. Consulting with driving
                rehabilitation specialists helps identify suitable adaptations
                for individual needs. Moreover, steadiness, muscular conditions,
                and disqualifying medical conditions all contribute to the
                complex landscape of driver considerations. Assessing and
                addressing these factors through exercise, adaptive equipment,
                and adherence to regulations collectively strive to foster a
                safer driving environment for all.
              </p>
              <h5 className="sectionSubheading">
                Effects of Carbon Monoxide Poisoning
              </h5>
              <p className="courseText">
                Carbon monoxide is a stealthy and hazardous gas, which poses
                grave threats to drivers and passengers due to its colorless and
                odorless nature. Its ability to bind with hemoglobin in the
                bloodstream disrupts oxygen transport, even in confined spaces
                like vehicles, leading to carbon monoxide poisoning. The
                subtleness of symptoms such as headaches, dizziness, and
                weakness necessitates vigilant recognition of potential exposure
                while driving.
              </p>
              <p className="courseText">
                Multiple sources contribute to carbon monoxide's presence near
                vehicles, including damaged exhaust systems, idling engines in
                enclosed spaces, and improperly used heating systems. Preventive
                measures include regular exhaust system checks, proper vehicle
                ventilation, avoiding idling in enclosed spaces, and meticulous
                use of heating systems within the vehicle.
              </p>
              <p className="courseText">
                Should exposure or symptoms emerge while driving, prompt action
                is crucial. Opening windows to enhance ventilation, pulling over
                safely to well-ventilated spots, exiting the vehicle, and
                seeking medical assistance for severe symptoms are vital steps.
                In all instances, these measures prioritize safety, underscoring
                the significance of awareness and proactive measures to address
                carbon monoxide concerns while driving.
              </p>
              <h4 className="sectionHeading" id="sectionTwo">
                The Pyschological Nature of the Driver
              </h4>
              <p className="sectionQuote">
                Driving is not only a physical skill, but also a mental and
                emotional activity that requires attention, concentration,
                decision-making, and self-control.
              </p>
              <p className="courseText"></p>
            </div>
            {/* course contents ends here */}
            <ToQuiz />
          </div>
        </div>
      ) : (
        <Two />
      )}
    </div>
  );
}
