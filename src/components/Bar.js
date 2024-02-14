import {Link} from "react-router-dom"
export default function Bar() {
  const navs =
    {
      unitOne: {
        unitName: "Unit One: Driving is Your Responsibility",
        link: "/one",
        subNavs: {
          section1: "Section One: License to drive, a privilege",
          section2:
            "Section Two: Operating a motor vehicle is A serious responsibility",
          section3:
            "Section Three: Obey the literal interpretation of everyday law",
          section4: "Section Four: Common courtesy is a key to safety",
          section5: "Section Five: The importance of driver education",
          section6: "Section Six: History of the automobile",
        },
      },
      unitTwo: {
        unitName: "Unit Two: The Driver",
        link: "/two",
        subNavs: {
          section1: "Section One: The Physiological nature of the driver",
          section2: "Section Two: The psychological nature of the driver",
        },
      },
      unitThree: {
        unitName: "Unit Three: Natural Laws Affecting the Driver",
        link: "/three",
        subNavs: {
          section1: "Section One: Natural laws and driving an automobile",
          section2: "Section Two: The force of gravity",
          section3: "Section Three: Inertia and energy",
          section4: "Section Four: The force of friction",
          section5: "Section Five: Centrifugal and centripetal force",
          section6: "Section Six: Force of impact",
        },
      },
      unitFour: {
        unitName: "Unit Four: Signs, Signals, and Highway Markings",
        link: "/four",
        subNavs: {
          section1: "Section One: Recognizing traffic control signals",
          section2:
            "Section Two: Purpose and meaning of pavement and curb markings",
          section3:
            "Section Three: Intersections, crossings that requires special stops",
          section4: "Section four: Pictorial messages",
        },
      },
      unitFive: {
        unitName: "Unit Five: California Vehicle Code and Rules of the Road",
        link: "/five",
        subNavs: {
          section1: "Section One: Provisional driver license",
          section2: "Section Two: Automobile ownership and registration",
          section3: "Section Three: Traffic laws for pedestrians and drivers",
          section4: "Section Four: Automobile equipment",
          section5:
            "Section Five: Civil liability and financial responsibility",
          section6: "Section Six: Criminal offenses",
        },
      },
      unitSix: {
        unitName: "Unit Six: Causes and Costs of Accidents",
        link: "/six",
        subNavs: {
          section1: "Section One: Faulty driver performance",
          section2: "Section Two: Accident avoidance and prevention",
          section3: "Section Three: Procedures when involved in an accident",
          section4: "Section Four: Financial responsibility requirements",
        },
      },
      unitSeven: {
        unitName: "Unit Seven: Difference in Urban and Rural Driving",
        link: "/seven",
        subNavs: {
          section1: "Section One: Urban driving",
          section2: "Section Two: Freeway driving",
          section3: "Section Three: Driving on open highways",
          section4: "Section Four: Passing",
          section5: "Section Five: Hazardous conditions",
        },
      },
      unitEight: {
        unitName: "Unit Eight: Critical Vehicle Systems and Subsystems",
        link: "/eight",
        subNavs: {
          section1: "Section One: Construction of the automobile",
          section2: "Section Two: Safety equipment",
          section3: "Section Three: Maintenance of the automobile",
          section4: "Section Four: Economical and safe use of the automobile",
        },
      },
      unitNine: {
        unitName: "Unit Nine: Pedestrian Safety",
        link: "/nine",
        subNavs: {
          section1: "Section One: As a pedestrian",
          section2: "Section Two: As a driver",
          section3: "Section Three: Avoiding collisions with animals",
        },
      },
      unitTen: {
        unitName: "Unit Ten: Effects of Alcohol and Drugs",
        link: "/ten",
        subNavs: {
          section1: "Section One: Alcohol",
          section2: "Section Two: Drugs",
          section3: "Section Three: Avoiding driving while intoxicated",
          section4: "Section Four: Avoiding the intoxicated driver",
        },
      },
      unitEleven: {
        unitName: "Unit Eleven: Motorcycle Safety",
        link: "/eleven",
        subNavs: {
          section1: "Section One: Sharing the road with motorcycle",
          section2: "Section Two: Riding a motorcycle",
          section3: "Section Three: Riding as a passenger on a motorcycle",
        },
      },
      unitTwelve: {
        unitName: "Unit Twelve: Risk Taking and Risk Perception of Teenagers",
        link: "/twelve",
        subNavs: {
          section1: "Section One: Youthful risk taking",
          section2: "Section Two: Risk perception by young drivers",
        },
      },
      unitThirteen: {
        unitName: "Unit Thirteen: Substance Abuse",
        link: "/thirteen",
        subNavs: {
          section1:
            "Section One: Illegal for under 21 to possess or use alcohol",
          section2: "Section Two: Statistics",
          section3: "Section Three: Cycle of abuse",
          section4: "Section Four: Drugs actions within the body",
          section5: "Section Five: Availability of drugs",
          section6: "Section Six: Legalities",
        },
      },
      unitFourteen: {
        unitName: "Unit Fourteen: Driving Inexperience",
        link: "/fourteen",
        subNavs: {
          section1: "Section One: Inexperience vs. immature",
        },
      },
      unitFifteen: {
        unitName: "Unit Fifteen: Road Rage",
        link: "/fifteen",
        subNavs: {
          section1: "Section One: Anger management",
          section2: "Section Two: Statistics",
        },
      },
      quiz: {
        unitName: "Final Graded Quiz",
        link: "/FinalQuiz",
      },
    }

  return (
    <div className="sidebar">
      {Object.values(navs).map((item, index) => (
        <h5 className="navItem" key={index}>
          <Link to={`/coursebody#${item.link}`}>{item.unitName}</Link>
        </h5>
      ))}
    </div>
  );
}
