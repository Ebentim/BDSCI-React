import carframe from "../Assets/images/image64.jpg";
import engine from "../Assets/images/image50.jpg";
import steering from "../Assets/images/image40.png";
import suspension from "../Assets/images/image14.png";
import electricalSystem from "../Assets/images/image21.png";
import fuelSystem from "../Assets/images/image18.png";
import powerTrain from "../Assets/images/image13.png";
import cooling from "../Assets/images/image44.png";
import brake from "../Assets/images/image6.png";
import control from "../Assets/images/image3.png";
import instrunmentPanel from "../Assets/images/image45.png";
export default function ChapterEight() {
  const sections = {
    sectionOne: "Construction of the Automobile",
    sectionTwo: "Safety Equipment",
    sectionThree: "Maintenance of the Automobile",
    sectionFour: "Economic and Safe Use of Automobile",
  };
  return (
    <div className="courseBody" id="four">
      <h3 className="bold unitHeading">
        Unit Eight: Critical Vehicle Systems and Subsystems
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
            <h4 className="sectionHeading" id="sectionOne">
              Section 8.1. Construction of the automobile
            </h4>
            <p className="courseText">
              Whether you've ridden in a car before or are just getting familiar
              with the world of automobiles, understanding the parts of a
              vehicle is a fundamental step toward becoming a responsible and
              informed driver. Knowing about these vehicle parts goes beyond
              mechanical understanding, it's about ensuring your safety and the
              safety of others on the road.
            </p>
            <h5 className="sectionSubheading">
              Vehicle Systems and Components
            </h5>
            <p className="courseText">
              A vehicle is a complex machine that consists of many different
              parts and systems that work together to provide mobility, comfort,
              safety, and performance. Some of the major systems and components
              of a vehicle are:
            </p>
            <h5 className="sectionSubheading">Frame and Body</h5>
            <img src={carframe} alt="car frame" className="courseImage" />
            <p className="courseText">
              The frame of a vehicle is the structural backbone that provides
              support and rigidity to the entire vehicle. It typically consists
              of a series of interconnected beams, rails, and supports that
              define the vehicle's shape and provide a stable platform for
              attaching various components such as the engine, suspension, and
              body panels.{" "}
            </p>
            <p className="courseText">
              The body of a vehicle refers to the outer shell that encases the
              frame and houses the passengers, cargo, and other interior
              components. It includes panels like doors, fenders, hood, roof,
              and trunk. The body contributes to the vehicle's aesthetics,
              aerodynamics, and overall design. Modern vehicles often have
              unibody construction, where the frame and body are integrated into
              a single structure, improving both structural integrity and weight
              efficiency.
            </p>
            <h5 className="sectionSubheading">Engine</h5>
            <img src={engine} alt="car engine" className="courseImage" />
            <p className="courseText">
              The engine of a vehicle is the mechanical power source that
              converts fuel (such as gasoline or diesel) into motion. It
              generates the necessary force to propel the vehicle by igniting
              the fuel-air mixture within its cylinders. The engine typically
              consists of several key components, including cylinders, pistons,
              a crankshaft, a camshaft, and valves. The combustion process in
              the cylinders drives the pistons, which in turn, powers the
              crankshaft to produce rotational motion. This motion is
              transmitted to the vehicle's drivetrain, eventually leading to the
              wheels' movement and propelling the vehicle forward.{" "}
            </p>
            <img src={steering} alt="steering system" className="courseImage" />
            <p className="courseText">
              The steering system of a car is responsible for allowing the
              driver to control the direction of the vehicle's movement. It
              enables the driver to turn the front wheels to navigate curves,
              corners, and changes in direction. The primary components of the
              steering system include:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Steering Wheel: </span>The steering wheel
              is the control interface that the driver uses to input steering
              commands. It is connected to the rest of the steering system.
              Steering Column: The steering column is a shaft that connects the
              steering wheel to the steering gearbox or rack-and-pinion
              assembly. It may also contain components like the ignition switch
              and steering lock.
            </p>
            <p className="courseText">
              <span className="bold">
                Steering Gearbox or Rack-and-Pinion:{" "}
              </span>
              These are two common types of steering mechanisms. The steering
              gearbox uses a series of gears to convert the rotational motion of
              the steering wheel into the lateral movement of the front wheels.
              The rack-and-pinion system consists of a gear rack and a pinion
              gear that work together to achieve the same purpose.
            </p>
            <p className="courseText">
              <span className="bold">Tie Rods: </span>The tie rods are
              connecting rods that link the steering gearbox or rack-and-pinion
              assembly to the front wheels. They transmit the steering input to
              the wheels, causing them to turn.
            </p>
            <p className="courseText">
              <span className="bold">Steering Linkages: </span>Various linkages
              and components connect the steering gearbox or rack-and-pinion
              assembly to the tie rods. These components ensure that the
              steering input is translated accurately to the wheels' movement.
            </p>
            <p className="courseText">
              <span className="bold">Power Steering System: </span> Many modern
              vehicles have power steering systems that assist the driver in
              turning the wheels. These systems use hydraulic or electric
              assistance to reduce the effort required to steer, especially at
              low speeds or when parking.
            </p>
            <h5 className="sectionSubheading">Suspension system</h5>
            <img
              src={suspension}
              alt="suspension system"
              className="courseImage"
            />
            <p className="courseText">
              The suspension system of a car is responsible for managing the
              vehicle's ride comfort, stability, and handling by absorbing
              shocks from the road and maintaining consistent contact between
              the tires and the road surface. It consists of various components
              that work together to achieve these goals:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Springs: </span>Springs are used to absorb
              and dampen the impact of road irregularities. They come in
              different types, such as coil springs and leaf springs, and are
              placed between the vehicle's frame and axles.
            </p>
            <p className="courseText">
              <span className="bold">Shock Absorbers (Dampers): </span>Shock
              absorbers control the movement of the springs, preventing the
              vehicle from bouncing excessively after encountering bumps or
              dips. They help maintain stable contact between the tires and the
              road.
            </p>
            <p className="courseText">
              <span className="bold">Struts: </span>Struts are components that
              combine the spring and shock absorber into a single unit. They are
              commonly used in modern suspension systems and contribute to
              structural support as well as suspension function.
            </p>
            <p className="courseText">
              <span className="bold">Control Arms: </span>Control arms, also
              known as A-arms, connect the suspension components to the
              vehicle's frame or body. They help control the movement of the
              wheels while allowing for up-and-down motion.
            </p>
            <p className="courseText">
              <span className="bold">Sway Bars (Anti-roll Bars): </span>Sway
              bars are connected to the suspension and help reduce body roll
              during cornering by transferring force between the left and right
              sides of the vehicle.
            </p>
            <p className="courseText">
              <span className="bold">Bushings: </span>Bushings are rubber or
              polyurethane components that isolate the suspension parts from the
              vehicle's frame, reducing vibration and providing flexibility for
              movement.
            </p>
            <p className="courseText">
              <span className="bold">Steering Knuckles and Hubs: </span>These
              components connect the suspension to the wheels, allowing them to
              pivot for steering and rotate for movement.
            </p>
            <p className="courseText">
              <span className="bold">Control Arm Ball Joints: </span> Ball
              joints provide pivot points for the suspension movement, allowing
              the wheels to turn and move up and down.
            </p>
            <p className="courseText">
              <span className="bold">Air Suspension: </span>Some vehicles have
              an air suspension system that uses air-filled bags to adjust the
              vehicle's ride height and stiffness electronically, improving ride
              quality and handling.
            </p>
            <h5 className="sectionSubheading">Electrical system</h5>
            <img
              src={electricalSystem}
              alt="electrical system"
              className="courseImage"
            />
            <p className="courseText">
              The electrical system of a car encompasses all the components and
              wiring that use electricity to perform various functions within
              the vehicle. It provides power for essential functions, including
              starting the engine, operating lights, powering electronics, and
              controlling various systems. Key components of the electrical
              system include:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Battery: </span>The battery stores
              electrical energy and provides the initial power needed to start
              the engine. It also supplies power to various electrical
              components when the engine is off.
            </p>
            <p className="courseText">
              <span className="bold">Starter Motor: </span>The starter motor
              engages with the engine's flywheel to crank the engine and
              initiate the combustion process when the ignition key is turned.
            </p>
            <p className="courseText">
              <span className="bold">Alternator: </span>The alternator generates
              electricity while the engine is running. It recharges the battery
              and powers the car's electrical systems, ensuring a continuous
              supply of electricity.
            </p>
            <p className="courseText">
              <span className="bold">Ignition System: </span>The ignition system
              is responsible for creating the spark that ignites the air-fuel
              mixture in the engine's cylinders. It includes components like the
              ignition coil, distributor (in older systems), and spark plugs.
            </p>
            <p className="courseText">
              <span className="bold">Lights: </span>The electrical system
              controls exterior and interior lights, including headlights,
              taillights, turn signals, brake lights, interior lighting, and
              dashboard indicators.
            </p>
            <p className="courseText">
              <span className="bold">Sensors and Control Modules: </span>Modern
              cars use numerous sensors to monitor various parameters such as
              engine temperature, vehicle speed, air-fuel mixture, and more.
              Control modules process sensor data and control different systems
              for optimal performance and efficiency.
            </p>
            <p className="courseText">
              <span className="bold">Fuse Box and Fuses: </span>Fuses protect
              the electrical components from overloading and short circuits. The
              fuse box contains various fuses that are designed to break the
              circuit if a problem occurs.
            </p>
            <p className="courseText">
              <span className="bold">Wiring: </span>Wiring connects all
              electrical components and modules, allowing the flow of
              electricity throughout the vehicle. Proper wiring ensures reliable
              and safe electrical connections.
            </p>
            <p className="courseText">
              <span className="bold">
                Power Windows, Locks, and Accessories:{" "}
              </span>{" "}
              The electrical system controls power windows, door locks, audio
              systems, climate control, and other accessories for convenience
              and comfort.
            </p>
            <h5 className="sectionSubheading">Fuel system</h5>
            <img
              src={fuelSystem}
              alt="fuel injection system"
              className="courseImage"
            />
            <p className="courseText">
              The fueling system of a car is responsible for delivering the
              appropriate fuel (gasoline or diesel) from the fuel tank to the
              engine, where it is burned to produce power. The system includes
              components such as a fuel tank, fuel pump, fuel lines, fuel
              injectors, and sometimes a carburetor.{" "}
            </p>
            <p className="courseText">
              <span className="bold">Fuel Tank: </span>The fuel tank is a metal
              or plastic container that stores the fuel and is usually located
              at the rear of the vehicle. The fuel tank has a filler cap that
              allows refueling, a vent that prevents pressure buildup, a gauge
              that indicates the fuel level, and a pump that sends the fuel to
              the engine.
            </p>
            <p className="courseText">
              <span className="bold">Fuel Pump: </span>The fuel pump is a device
              that draws fuel from the tank and pressurizes it, allowing it to
              flow through the fuel lines to the engine. The fuel pump can be
              either mechanical or electric, depending on the type of engine.
              Mechanical pumps are driven by the engine’s camshaft, while
              electric pumps are powered by the battery and controlled by a
              relay.
            </p>
            <p className="courseText">
              <span className="bold">Fuel Lines: </span>These are pipes that
              carry pressurized fuel from the tank to the engine compartment.
              They need to be well-sealed to prevent leaks and corrosion. Fuel
              lines are usually made of steel, rubber, or plastic, and have
              fittings and clamps to connect them to other components.
            </p>
            <p className="courseText">
              <span className="bold">Fuel Filter: </span>The fuel filter is a
              device that helps remove impurities and contaminants from the fuel
              before it reaches the engine. This ensures the engine receives
              clean fuel, which is crucial for proper combustion and emission
              control. The fuel filter can be either in-line or cartridge type,
              depending on the design of the system. In-line filters are
              installed along the fuel lines, while cartridge filters are housed
              in a metal or plastic casing.
            </p>
            <p className="courseText">
              <span className="bold">Manifold: </span>The manifold is a
              component that distributes the air-fuel mixture or the fuel to
              each cylinder of the engine. The manifold can be either intake or
              exhaust, depending on its function. The intake manifold connects
              to the air filter and the carburetor or fuel injectors, and
              delivers the air-fuel mixture to the combustion chamber. The
              exhaust manifold collects the exhaust gases from each cylinder and
              directs them to the catalytic converter and muffler.
            </p>
            <p className="courseText">
              <span className="bold"> Carburetor or Fuel Injectors: </span>
              Depending on the type of engine, the fuel is either mixed with air
              in a carburetor (older designs) or injected directly into the
              combustion chamber using fuel injectors (modern designs).
            </p>
            <ul id="ul">
              <li className="courseText">
                <span className="bold">Carburetor: </span>In older engines, the
                carburetor is a device that mixes fuel and air to create a
                combustible mixture that is then sent to the engine cylinders
                for combustion. The carburetor has a throttle valve that
                controls the amount of air entering the mixture, and a float
                chamber that regulates the fuel level. The carburetor also has
                jets and needles that adjust the ratio of fuel and air according
                to the engine speed and load.
              </li>
              <li className="courseText">
                <span className="bold">Fuel Injectors: </span>In modern engines,
                each cylinder usually has its own fuel injector, which is an
                electronically controlled valve that sprays a precisely measured
                amount of fuel directly into the combustion chamber. This allows
                for more efficient combustion and better control of the air-fuel
                mixture. Fuel injectors are controlled by an engine control unit
                (ECU) that monitors various sensors and adjusts the injection
                timing and duration accordingly.
              </li>
            </ul>
            <img src={powerTrain} alt="power train" className="courseImage" />
            <p className="courseText">
              The powertrain of a car refers to the components that work
              together to transmit power from the engine to the wheels, enabling
              the vehicle to move. It includes several key components:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Transmission: </span>The transmission is
              responsible for controlling the power and torque generated by the
              engine and transmitting it to the wheels. It allows the driver to
              switch between different gears to optimize speed and torque for
              various driving conditions.
            </p>
            <p className="courseText">
              <span className="bold">Clutch (in manual transmissions): </span>In
              manual transmissions, the clutch connects and disconnects the
              engine from the transmission. When the clutch is engaged (pedal
              released), power from the engine is transmitted to the
              transmission.
            </p>
            <p className="courseText">
              <span className="bold">Driveshaft: </span>The driveshaft is a
              rotating shaft that transfers power from the transmission to the
              differential (or axles) in vehicles with front-wheel, rear-wheel,
              or all-wheel drive.
            </p>
            <p className="courseText">
              <span className="bold">Differential: </span>The differential is a
              gear system that allows the wheels to rotate at different speeds
              while still receiving power from the driveshaft. This is essential
              for smooth turning.
            </p>
            <p className="courseText">
              <span className="bold">Axles: </span>Axles transmit power from the
              differential to the wheels. In front-wheel drive vehicles, the
              axles also serve as a suspension component.
            </p>
            <p className="courseText">
              <span className="bold">Final Drive: </span>The final drive is the
              last set of gears in the powertrain, which further adjusts the
              speed and torque of the rotating wheels.
            </p>
            <p className="courseText">
              <span className="bold">
                Transfer Case (in 4WD and AWD systems):{" "}
              </span>
              In vehicles with four-wheel drive (4WD) or all-wheel drive (AWD),
              the transfer case distributes power between the front and rear
              wheels, allowing for improved traction on various surfaces.
            </p>
            <h5 className="sectionSubheading">Exhaust</h5>
            <p className="courseText">
              The exhaust system of a car is responsible for directing and
              managing the waste gases produced during the combustion process in
              the engine. It plays a vital role in reducing noise, controlling
              emissions, and optimizing engine performance. The exhaust system
              includes several key components:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Exhaust Manifold: </span>The exhaust
              manifold collects exhaust gases from the engine's cylinders and
              directs them into a single pipe.
            </p>
            <p className="courseText">
              <span className="bold">Catalytic Converter: </span>The catalytic
              converter is an emissions control device that helps reduce harmful
              emissions by catalyzing chemical reactions that convert pollutants
              like carbon monoxide, nitrogen oxides, and hydrocarbons into less
              harmful compounds.
            </p>
            <p className="courseText">
              <span className="bold">Muffler: </span>The muffler is designed to
              reduce the noise generated by the exhaust gases as they exit the
              engine. It contains chambers and baffles that create
              sound-canceling effects.
            </p>
            <p className="courseText">
              <span className="bold">Resonator: </span>Some exhaust systems
              include a resonator, which further helps to reduce noise by
              canceling out specific frequencies. It can also improve engine
              performance by reducing back pressure.
            </p>
            <p className="courseText">
              <span className="bold">Exhaust Pipes: </span> The exhaust pipes
              carry the exhaust gases from the engine through the catalytic
              converter, muffler, and other components, finally expelling them
              out of the vehicle.
            </p>
            <p className="courseText">
              <span className="bold">Exhaust Tips: </span>Exhaust tips are often
              visible at the rear of the vehicle and serve as both a functional
              and aesthetic element. They can come in various shapes and
              designs, adding to the vehicle's overall look.
            </p>
            <h5 className="sectionSubheading">Cooling system</h5>
            <img src={cooling} alt="cooling system" className="courseImage" />
            <p className="courseText">
              The cooling system of a car is responsible for regulating the
              engine's temperature to prevent overheating and maintain optimal
              operating conditions. It helps dissipate the heat generated during
              the combustion process. The cooling system includes several key
              components:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Radiator: </span> The radiator is a heat
              exchanger that cools the engine coolant by using the air flowing
              through its fins. It consists of tubes and fins that allow heat
              from the coolant to be transferred to the surrounding air. The
              radiator is usually located at the front of the vehicle, behind
              the grille, to maximize the exposure to the airflow. The radiator
              has an inlet and an outlet, where the coolant enters and exits the
              system.
            </p>
            <p className="courseText">
              <span className="bold">Coolant/Antifreeze: </span>Coolant, also
              known as antifreeze, is a mixture of water and additives designed
              to lower the freezing point and raise the boiling point of the
              liquid. It circulates through the engine, absorbing heat and
              carrying it to the radiator for dissipation. Coolant also prevents
              corrosion and rust in the engine and cooling system components.
              Coolant comes in different colors and types, depending on the
              manufacturer’s specifications. It is important to use the correct
              type and amount of coolant for your vehicle
            </p>
            <p className="courseText">
              <span className="bold">Water Pump: </span>The water pump
              circulates the coolant throughout the engine and cooling system.
              It keeps the coolant flowing, allowing it to absorb and carry away
              excess heat. The water pump is driven by a belt that is connected
              to the crankshaft pulley. The water pump has an impeller that
              spins and pushes the coolant through the system. The water pump
              also has a seal that prevents coolant from leaking out of the pump
            </p>
            <p className="courseText">
              <span className="bold">Thermostat: </span>The thermostat regulates
              the engine’s temperature by controlling the flow of coolant. It
              remains closed when the engine is cold to allow it to warm up
              quickly and opens when the engine reaches its optimal temperature.
              The thermostat is a valve that is located between the engine and
              the radiator. It has a temperature-sensitive element that expands
              and contracts with changes in temperature. When the engine is
              cold, the element contracts and blocks the flow of coolant to the
              radiator. When the engine is hot, the element expands and allows
              coolant to flow to the radiator
            </p>
            <p className="courseText">
              <span className="bold">Radiator Fan: </span>The radiator fan helps
              maintain airflow through the radiator when the vehicle is
              stationary or moving at low speeds. It enhances cooling efficiency
              by drawing air through the radiator fins. The radiator fan can be
              either mechanical or electric, depending on the design of the
              system. A mechanical fan is attached to the water pump and spins
              with it. An electric fan is controlled by a relay and a
              temperature sensor that turns it on and off as needed.
            </p>
            <p className="courseText">
              <span className="bold">Radiator Cap: </span>The radiator cap
              serves as a pressure relief valve and maintains the system’s
              appropriate pressure level. It also prevents the coolant from
              boiling at higher temperatures. The radiator cap has a
              spring-loaded valve that opens and closes depending on the
              pressure inside the system. When the pressure exceeds a certain
              limit, the valve opens and releases some coolant into an overflow
              tank or reservoir. When the pressure drops, the valve closes and
              allows coolant to return from the overflow tank or reservoir.
            </p>
            <p className="courseText">
              <span className="bold">Hoses and Pipes: </span>Hoses and pipes
              connect various components of the cooling system, allowing coolant
              to flow between the engine, radiator, and other parts. Hoses are
              flexible rubber tubes that can bend and adapt to different shapes
              and positions. Pipes are rigid metal tubes that provide a more
              direct path for coolant flow. Hoses and pipes have clamps or
              fittings that secure them to other components and prevent leaks.
            </p>
            <p className="courseText">
              <span className="bold">Belt:</span>The belt is a component that
              powers some parts of the cooling system, such as the water pump
              and the radiator fan. The belt can be either serpentine or fan
              belt, depending on its function. A serpentine belt is a long and
              flat belt that snakes through several pulleys and drives multiple
              accessories, such as the alternator, power steering pump, air
              conditioning compressor, water pump, and radiator fan. A fan belt
              is a shorter and grooved belt that drives only one or two
              accessories, such as the water pump and radiator fan. The belt is
              tensioned by an idler pulley or a tensioner that keeps it tight
              and prevents slippage.
            </p>
            <h5 className="sectionSubheading">Braking</h5>
            <img src={brake} alt="braking system" className="courseImage" />
            <p className="courseText">
              The brake system is one of the most important systems in your
              vehicle, as it allows you to slow down or stop safely and
              reliably. The brake system consists of several parts that work
              together to create friction and convert the kinetic energy of the
              moving vehicle into heat. Depending on the type of vehicle, the
              brake system can be either disc or drum, or a combination of both.
              Here are some of the main components of the brake system and their
              functions:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Lining and drum/disc: </span>These are the
              parts that create friction and slow down the vehicle. The lining
              is a material that is attached to the brake pad (disc brakes) or
              brake shoe (drum brakes) and presses against the drum or disc when
              the brake pedal is applied. The lining is usually made of
              asbestos, ceramic, or metallic compounds that can withstand high
              temperatures and wear. The drum or disc is a metal part that
              rotates with the wheel and provides a surface for the lining to
              rub against. The drum is a hollow cylinder that covers the brake
              shoe, while the disc is a flat plate that is exposed to the air.
            </p>
            <p className="courseText">
              <span className="bold">
                Master cylinder and wheel cylinders/calipers:{" "}
              </span>
              These are the parts that transmit hydraulic pressure to the lining
              and drum/disc. The master cylinder is a device that converts the
              mechanical force of the brake pedal into hydraulic pressure that
              is sent to the brake lines. The master cylinder has a piston that
              moves when the pedal is pressed and pushes brake fluid into the
              lines. The wheel cylinders (drum brakes) or calipers (disc brakes)
              are devices that receive the hydraulic pressure from the brake
              lines and apply it to the lining and drum/disc. The wheel
              cylinders have pistons that push the brake shoes outward against
              the drum, while the calipers have pistons that squeeze the brake
              pads against the disc.
            </p>
            <p className="courseText">
              <span className="bold">Brake fluid: </span>This is a liquid that
              fills the brake lines and transfers hydraulic pressure from the
              master cylinder to the wheel cylinders/calipers. Brake fluid is
              usually a glycol-based or silicone-based fluid that has a high
              boiling point and low compressibility. Brake fluid also lubricates
              and protects the brake system components from corrosion.
            </p>
            <p className="courseText">
              <span className="bold">Parking brake: </span>This is a device that
              operates independently of the main brake system and keeps the
              vehicle from rolling away when parked. The parking brake, also
              known as an emergency brake, hand brake, or e-brake, can be either
              mechanical or hydraulic, depending on the design of the system. A
              mechanical parking brake uses a cable that connects to a lever or
              pedal in the driver’s compartment and pulls on the rear brakes
              when engaged. A hydraulic parking brake uses a valve that blocks
              the flow of brake fluid to the rear brakes when engaged.
            </p>
            <h5 className="sectionSubheading">Driver Controls</h5>
            <img src={control} alt="driver control" className="courseImage" />
            <p className="courseText">
              The driver control system of a vehicle encompasses the various
              components and interfaces that allow the driver to operate and
              control the vehicle's movements. It includes the following key
              elements:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Steering Wheel: </span>The steering wheel
              allows the driver to control the direction of the vehicle by
              turning it left or right.
            </p>
            <p className="courseText">
              <span className="bold">Accelerator Pedal: </span>The accelerator
              pedal, also known as the gas pedal, controls the vehicle's speed
              by adjusting the amount of fuel delivered to the engine.
            </p>
            <p className="courseText">
              <span className="bold">Brake Pedal: </span>The brake pedal is used
              to slow down or stop the vehicle by applying pressure to the
              braking system.
            </p>
            <p className="courseText">
              <span className="bold">Clutch Pedal:</span>In vehicles with manual
              transmissions, the clutch pedal is used to engage or disengage the
              engine from the transmission, allowing the driver to shift gears
            </p>
            <p className="courseText">
              <span className="bold">Gear Selector: </span>In vehicles with
              automatic transmissions, the gear selector allows the driver to
              choose between different driving modes (e.g., Park, Reverse,
              Neutral, Drive).
            </p>
            <p className="courseText">
              <span className="bold">Parking Brake: </span>The parking brake,
              also known as the handbrake, is used to keep the vehicle
              stationary when parked.
            </p>
            <p className="courseText">
              <span className="bold">Turn Signals: </span>Turn signal controls
              allow the driver to indicate their intention to turn left or
              right, promoting safe lane changes and turns.
            </p>
            <p className="courseText">
              <span className="bold">Horn: </span>The horn is used to alert
              other road users in emergency situations or to signal warnings.
            </p>
            <p className="courseText">
              <span className="bold">Windshield Wipers and Washers: </span>
              Controls for windshield wipers and washers help maintain
              visibility in inclement weather.
            </p>
            <p className="courseText">
              <span className="bold">Cruise Control: </span>Cruise control
              allows the driver to maintain a constant speed without holding
              down the accelerator pedal.
            </p>
            <p className="courseText">
              <span className="bold">Audio and Entertainment Controls: </span>
              Controls for the audio system, radio, navigation, and other
              entertainment features are usually located on the steering wheel
              or center console.
            </p>
            <p className="courseText">
              <span className="bold">Climate Control: </span>Controls for the
              heating, ventilation, and air conditioning systems allow the
              driver to adjust the cabin's temperature and airflow.
            </p>
            <p className="courseText">
              <span className="bold">Instrument Cluster: </span>The instrument
              cluster displays important information such as speed, fuel level,
              engine temperature, and warning indicators.
            </p>
            <h5 className="sectionSubheading">
              Instrument Panel Lights, Chimes, and Gauges
            </h5>
            <img
              src={instrunmentPanel}
              alt="instrunment panel lights"
              className="courseImage"
            />
            <p className="courseText">
              The instrument panel lights, chimes, and gauges system in a car
              provide crucial information to the driver about the vehicle's
              status and performance. It includes the following components:{" "}
            </p>
            <p className="courseText">
              <span className="bold">Instrument Panel Lights: </span>Instrument
              panel lights illuminate the dashboard to provide visibility of the
              various gauges, indicators, and controls, especially during
              nighttime driving. They ensure the driver can easily read the
              information displayed on the dashboard.
            </p>
            <p className="courseText">
              <span className="bold">Chimes and Warning Sound: </span>Chimes and
              warning sounds are auditory alerts that inform the driver about
              important events or potential issues. These include seatbelt
              reminders, open-door warnings, low-fuel alerts, and various other
              safety notifications.
            </p>
            <p className="courseText">
              <span className="bold">Gauges:</span>Gauges are visual indicators
              that display real-time measurements related to the vehicle's
              operation. Some common gauges include:
            </p>
            <ul id="ul">
              <li className="courseText">
                <span className="bold">Speedometer: </span>Displays the current
                speed of the vehicle.
              </li>
              <li className="courseText">
                <span className="bold">Tachometer: </span>Indicates the engine's
                revolutions per minute (RPM), helping the driver shift gears at
                appropriate times (in manual transmissions) and monitor engine
                performance.
              </li>
              <li className="courseText">
                <span className="bold">Fuel Gauge: </span>Displays the amount of
                fuel remaining in the gas tank.
              </li>
              <li className="courseText">
                <span className="bold">Temperature Gauge: </span>Shows the
                engine's operating temperature. An overheating warning may also
                be included.
              </li>
              <li className="courseText">
                <span className="bold">Odometer: </span>Displays the total
                distance the vehicle has traveled.
              </li>
              <li className="courseText">
                <span className="bold">Trip Meter: </span>Allows the driver to
                track distances for specific trips.
              </li>
              <li className="courseText">
                <span className="bold">Oil Pressure Gauge: </span> Monitors the
                engine's oil pressure, indicating proper lubrication.
              </li>
              <li className="courseText">
                <span className="bold">Battery Voltage Gauge: </span> This shows
                the battery's voltage level, indicating the electrical system's
                health.
              </li>
            </ul>
            <h4 className="sectionHeading" id="sectionTwo">
              Section 8.2. Safety Equipment
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
          </div>
          {/* course contents ends here */}
        </div>
      </div>
    </div>
  );
}
