import { useState } from "react";
import { NavButtons } from "../Assets/next";
import Thirteen from "../quizes/Thirteen";
const sections = {
  sectionOne: "Illegal for Those Under 21 to Possess or use Alcohol",
  sectionTwo: "Statics",
  sectionThree: "Cycle of Abuse",
  sectionFour: "Drug Actions Within the Body",
  sectionFive: "Availability of Drugs",
  sectionSix: "Legalities",
};
export default function ChapterThirteen() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuiz = () => {
    !showQuiz ? setShowQuiz(true) : setShowQuiz(false);
  };
  const ToQuiz = () => {
    return (
      <NavButtons classname={"nextButton toQuiz"} onclick={handleQuiz}>
        Unit Thirteen COmplete, Take the Quiz
      </NavButtons>
    );
  };

  return (
    <div className="courseBody" id="thirteen">
      <h3 className="bold unitHeading">Unit Thirteen: Substance Abuse</h3>
      {showQuiz ? (
        <Thirteen />
      ) : (
        <div className="courseContentContainer">
          <div className="courseOutline">
            <h4 className="sectionSubheading outlineName">Outline</h4>
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
                Section 13.1. Illegal for those under 21 to possess or use
                alcohol
              </h4>
              <iframe
                src="https://drive.google.com/file/d/1lBF81bgvmrrCHFgkbUo1PNKz7eO-TZZT/preview"
                title="Substance Abuse"
                className="courseVideo"
                allow="autoplay"
              ></iframe>
              <h5 className="sectionSubheading">
                Zero tolerance, alcohol and drugs
              </h5>
              <p className="courseText">
                California has strict laws against driving under the influence
                of alcohol or drugs, which apply to anyone who operates a
                vehicle or performs safety-sensitive tasks. These laws have a
                zero-tolerance policy for drivers under 21 years old, who cannot
                have any amount of alcohol or drugs in their system. The purpose
                of these laws is to prevent impaired driving, which endangers
                the lives of drivers, passengers, and pedestrians. violation of
                these laws has several consequences, such as fines, license
                suspension, or jail time.
              </p>
              <h4 className="sectionHeading" id="sectionTwo">
                Section 13.2 Statistics
              </h4>
              <h5 className="sectionSubheading">
                Teens Are Less Likely to Drink and Drive
              </h5>
              <p className="courseText">
                Teens have become less likely to drink and drive over the past
                few decades, thanks to several factors. Comprehensive driver
                education programs, public awareness campaigns, and
                zero-tolerance policies toward underage drinking and driving
                have all helped to lower the rate of impaired driving among
                young drivers. Graduated driver licensing programs and parental
                involvement have also encouraged teens to drive more
                responsibly. This decline has had a substantial impact, reducing
                alcohol-related accidents and injuries among young drivers. The
                roads have become safer for everyone, including pedestrians and
                other drivers.{" "}
              </p>
              <h5 className="sectionSubheading">
                Teens Who Do Drink and Drive Are More At Risk
              </h5>
              <p className="courseText">
                According to the Centers for Disease Control and Prevention
                (CDC), teenage drinking and driving remain a severe issue in the
                United States. Despite a decline in the percentage of high
                school teens who drink and drive since 1991, the statistics
                still show that young drivers (ages 16-20) are at a
                significantly higher risk of being involved in alcohol-related
                accidents, which are more likely to result in fatalities. This
                is a cause for concern as teen drivers are three times more
                likely to be in a fatal crash compared to more experienced
                drivers.
              </p>
              <h5 className="sectionSubheading">Comparatively Inexperienced</h5>
              <p className="courseText">
                Teens who drink and drive are particularly vulnerable to the
                risks associated with impaired driving due to their relative
                inexperience in both driving and handling alcohol. Their limited
                experience on the road means they may not have encountered
                various driving situations or learned how to respond effectively
                to challenging conditions. Additionally, teenagers' developing
                brains may result in limited decision-making skills, which are
                further impaired under the influence of alcohol.
              </p>
              <p className="courseText">
                Compared to adults, teens generally have a lower tolerance to
                alcohol, making even small amounts have a more substantial
                impact on their cognitive and motor functions. This combination
                of inexperience and alcohol use can impair judgment, leading
                young drivers to take unnecessary risks or overestimate their
                abilities on the road. Peer pressure can also play a role, as
                teenagers may feel pressured to drink or drive after consuming
                alcohol, further increasing their risk of impaired driving.
              </p>
              <h5 className="sectionSubheading">
                Teens more likely to exhibit impaired driving skills at lower
                blood alcohol levels{" "}
              </h5>
              <p className="courseText">
                Teen drinking and driving is a serious issue that poses
                significant risks and potential consequences for young drivers
                and others on the road. According to the CDC, even low blood
                alcohol concentration (BAC) impairs driving skills and increases
                crash risk. Despite being less likely than adults to drink and
                drive, teen drivers’ crash risk is substantially higher when
                they do, even with low or moderate BAC levels. One reason for
                this is that teens are inexperienced drivers who may not have
                faced various road challenges or learned how to handle them
                effectively. Another reason is that teens have developing brains
                that affect their decision-making skills, which are worsened by
                alcohol.{" "}
              </p>
              <p className="courseText">
                Compared to adults, teens generally have a lower tolerance to
                alcohol, making even small amounts have a big impact on their
                thinking and movement. This, along with their lack of driving
                experience, can impair their judgment, leading them to take
                unnecessary risks or overestimate their abilities on the road.
                Therefore, it is essential for teens to understand the dangers
                of drinking and driving and to make responsible choices to keep
                themselves and others safe.
              </p>
              <h5 className="sectionSubheading">
                A combination of lack of experience and alcohol or drugs
                compounds the danger
              </h5>
              <p className="courseText">
                Alcohol or drugs impair the ability of inexperienced drivers to
                operate a vehicle safely, raising the risk of accidents and
                serious consequences. These drivers already struggle with making
                quick decisions, judging distances, and handling unexpected
                situations. Alcohol or drugs worsen these essential driving
                skills, making accidents more likely. They also slow down
                thinking and movement, reducing reaction times and hindering
                effective responses to road hazards. Additionally, substance use
                affects judgment, leading to reckless behaviors without
                considering the outcomes.
              </p>
              <h4 className="sectionHeading" id="sectionThree">
                Section 13.3 Cycle of Abuse
              </h4>
              <p className="courseText">
                Drug abuse can start as a personal choice, but it can quickly
                turn into a physical and psychological dependence that traps the
                person in a cycle of misuse. This affects not only the person
                but also their family and friends, who may witness or suffer
                from harmful and destructive behaviors. To break this cycle,
                intervention, support, and professional help are needed.
                Therapies, counseling, and rehabilitation programs can help
                address the addiction and its underlying causes. People who
                misuse drugs should seek assistance and work towards a healthier
                life.
              </p>
              <h4 className="sectionHeading" id="sectionFour">
                Section 13.4. Drug Actions Within the Body
              </h4>
              <h5 className="sectionSubheading">Uppers</h5>
              <p className="courseText">
                Uppers, also known as stimulants, can have severe adverse
                effects on the body due to their stimulation of the central
                nervous system. While they may initially produce increased
                alertness, energy, and euphoria, they can also lead to troubling
                consequences.
              </p>
              <p className="courseText">
                Some effects of uppers include nervousness, anxiety, and
                restlessness. The heightened stimulation of the nervous system
                can result in a rapid heart rate, elevated blood pressure, and
                an overall sense of being on edge. In extreme cases, the use of
                uppers can even trigger convulsions or seizures, which are
                dangerous and require immediate medical attention.
              </p>
              <p className="courseText">
                Moreover, uppers can be life-threatening in cases of misuse or
                overdose. Taking these drugs in excessive amounts can lead to
                cardiovascular complications, such as heart attacks or stroke,
                which can be fatal. Additionally, uppers can induce intense
                feelings of paranoia, causing individuals to become overly
                suspicious and fearful of others, significantly impacting their
                mental well-being and behavior.
              </p>
              <h5 className="sectionSubheading">Downers</h5>
              <p className="courseText">
                Downers, also known as depressants, are drugs that slow down the
                activity of the central nervous system, leading to relaxation,
                sedation, and a feeling of calm. While they may induce these
                effects, the use of downers can also have various negative
                consequences on the body and behavior.
              </p>
              <p className="courseText">
                One of the primary effects of downers is listlessness,
                drowsiness, and lethargy. They can reduce alertness and make it
                challenging to concentrate or stay awake. Downers can lead to
                significant behavioral changes, including slowed speech,
                impaired coordination, and reduced inhibition. People under the
                influence of downers may appear disoriented or unsteady on their
                feet.
              </p>
              <p className="courseText">
                Apart from these immediate effects, downers can cause sedation,
                leading to extreme drowsiness or unconsciousness. They can
                impair motor skills, making it dangerous to operate or drive a
                vehicle. Memory impairment and difficulties in recalling events
                or conversations that occurred while under the influence are
                common. In higher doses or when combined with other substances,
                downers can suppress the respiratory system, leading to slowed
                or shallow breathing. Prolonged use of downers can result in
                physical and psychological dependence, with individuals
                experiencing withdrawal symptoms when trying to stop using the
                drug. Moreover, the use of downers in excessive amounts can lead
                to an overdose, which can be life-threatening. Combining downers
                with alcohol is especially dangerous, intensifying the effects
                of both substances and increasing the risk of overdose.
              </p>
              <h5 className="sectionSubheading">Narcotics</h5>"
              <p className="courseText">
                Narcotics are a class of drugs that primarily act as pain
                relievers and can induce a state of euphoria. Derived from or
                chemically similar to opium, a substance obtained from the opium
                poppy plant, narcotics have been used for both medicinal and
                recreational purposes. Two well-known narcotics are opium and
                heroin.
              </p>
              <p className="courseText">
                Opium, a natural narcotic, contains alkaloids like morphine and
                codeine, known for their potent pain-relieving properties. It
                provides pain relief, induces feelings of euphoria and
                relaxation, and has sedative effects. However, opium use can
                lead to constipation as a common side effect.
              </p>
              <p className="courseText">
                Heroin, an illegal drug synthesized from morphine, is highly
                addictive and usually consumed through injection, smoking, or
                snorting. It also induces intense euphoria, pain relief, and
                sedation. However, heroin use poses serious risks, including
                respiratory depression and addiction. Injecting heroin also
                increases the risk of infectious diseases due to shared needles.
              </p>
              <h5 className="sectionSubheading">Hallucinogens</h5>
              <p className="courseText">
                Hallucinogens are a class of drugs that alter a person's
                perception, thoughts, and feelings, leading to hallucinations,
                sensory distortions, and changes in consciousness. Two
                well-known hallucinogens are LSD (lysergic acid diethylamide)
                and marijuana (cannabis).
              </p>
              <p className="courseText">
                LSD is a powerful synthetic hallucinogenic drug derived from
                ergot, a fungus that grows on certain grains. It induces vivid
                hallucinations, alters perception of time and senses, and can
                lead to changes in mood and introspection. LSD's effects can be
                unpredictable, varying widely between individuals.
              </p>
              <p className="courseText">
                Marijuana, derived from the Cannabis sativa plant, is a natural
                hallucinogenic drug commonly consumed by smoking dried flowers
                or leaves. Its effects include altered perception, feelings of
                relaxation and euphoria, increased appetite, impaired
                coordination, and short-term memory impairment. In some cases,
                marijuana use may cause anxiety or paranoia.
              </p>
              <h4 className="sectionHeading">
                Section 13.5. Availability of Drugs
              </h4>
              <h5 className="sectionSubheading">Over the Counter</h5>
              <p className="courseText">
                The availability of drugs, both over-the-counter (OTC) and
                prescription medications, can have significant implications for
                road safety. OTC medications like aspirin and cough medicine,
                when used as directed, may not significantly impair driving
                ability. However, caution should be exercised with medications
                that can cause drowsiness or cognitive effects. Nicotine gum, an
                OTC smoking cessation aid, may not impair driving significantly,
                but users should be mindful of possible side effects that may
                affect focus and alertness. Diet pills, often containing
                stimulants, can have variable effects on alertness and may
                impact driving performance.
              </p>
              <p className="courseText">
                Prescription medications, obtained through healthcare providers,
                can also affect driving ability. Some prescription drugs, such
                as painkillers, tranquilizers, sedatives, and certain
                antidepressants, can impair cognition, alertness, and motor
                skills. Drivers should always discuss potential side effects
                with their healthcare providers before starting any new
                prescription medication. If a prescription medication causes
                drowsiness or cognitive impairment, you should avoid driving
                until you understand how the medication affects you.
              </p>
              <p className="courseText">
                To ensure road safety, priority should be given to responsible
                medication use and being aware of the potential effects of drugs
                on your driving abilities. Reading product labels carefully,
                following recommended dosages, and being cautious with
                medications that can cause impairment are essential steps. When
                in doubt, consulting with healthcare professionals or
                pharmacists for guidance on medication use and driving is
                crucial.
              </p>
              <h5 className="sectionSubheading">Social</h5>
              <p className="courseText">
                Driving is deeply intertwined with various social contexts, and
                certain situations can have a significant impact on road safety.
                Parties and social gatherings can lead to alcohol and drug
                consumption, increasing the risk of impaired driving. Planning
                for alternative transportation methods in these situations can
                prevent accidents caused by driving under the influence.
                Similarly, being mindful of caffeine intake during coffee breaks
                and avoiding excessive consumption can help maintain focus and
                reduce distractions while driving.
              </p>
              <h4 className="sectionSubheading">Section 13.6. Legalities</h4>
              <h5 className="sectionSubheading">Arrests</h5>
              <p className="courseText">
                Driving under the influence of alcohol or drugs, whether illegal
                or prescription, is a serious offense that can impair a driver’s
                ability to operate a vehicle safely and result in legal
                consequences and arrests. Law enforcement officers use various
                methods, such as breathalyzer tests and field sobriety tests, to
                detect impairment during traffic stops or checkpoints. If a
                driver is found to be impaired by any substance, they can be
                arrested on the spot.
              </p>
              <h5 className="sectionSubheading">Fines</h5>
              <p className="courseText">
                In California, the fines for driving-related offenses involving
                substance abuse are substantial to deter impaired driving and
                promote road safety. The state takes a strict approach to combat
                DUI and DWI (driving while intoxicated or driving while
                impaired) offenses, aiming to protect the public from the
                dangers posed by impaired drivers. The fines for such offenses
                can vary depending on factors like whether it's a first-time
                offense or a repeat offense within a certain time frame.
              </p>
              <p className="courseText">
                For a first-time DUI conviction in California, the base fine can
                range from approximately $390 to $1,000. However, when
                considering additional penalties, assessments, and fees, the
                total cost can become significantly higher. Repeated DUI
                offenses within ten years carry much steeper fines, ranging from
                around $500 to over $2,000 or more.
              </p>
              <p className="courseText">
                Reckless driving charges combined with DUI can also lead to
                substantial fines ranging from $145 to $1,000 or more. Sobriety
                checkpoints, where law enforcement screens drivers for signs of
                impairment, can also result in fines similar to those mentioned
                for DUI offenses.
              </p>
              <p className="courseText">
                It's essential to recognize that the base fines mentioned above
                are just one part of the financial consequences associated with
                DUI and DWI offenses. The total cost can include court fees,
                probation costs, alcohol education programs, and increased
                insurance rates. Additionally, DUI offenders may face driver's
                license suspension, mandatory installation of ignition interlock
                devices, community service, probation, and, in severe cases,
                incarceration.
              </p>
              <h5 className="sectionSubheading">Jail</h5>
              <p className="courseText">
                It is illegal to operate a vehicle with a blood alcohol
                concentration (BAC) of 0.08% or higher for most drivers, and the
                legal limit is even lower at 0.01% BAC for drivers under 21.
                Zero tolerance exists for underage drivers caught with any
                alcohol in their system, resulting in license suspension and
                other penalties.
              </p>
              <p className="courseText">
                The legal consequences for DUI offenses in California include
                fines, license suspension, mandatory DUI education programs,
                probation, community service, and jail time, with more severe
                penalties for repeat offenders. The state's implied consent law
                mandates chemical testing if lawfully arrested for suspicion of
                DUI, and refusal can lead to automatic license suspension. Some
                DUI offenders may be required to install an Ignition Interlock
                Device (IID) that measures BAC and prevents the vehicle from
                starting if alcohol is detected. Additionally, it's crucial to
                recognize that certain medications can impair driving,
                potentially leading to DUI charges. Individuals facing DUI
                charges can seek legal counsel from experienced attorneys to
                explore possible defense strategies.
              </p>
              <h5 className="sectionSubheading">Legal Costs</h5>
              <p className="courseText">
                Legal costs associated with substance abuse-related driving
                offenses in California can be substantial, encompassing various
                expenses. For individuals charged with DUI or DWI, hiring a
                skilled DUI defense attorney is crucial, with costs varying
                based on case complexity and attorney experience. Court fees and
                fines are common penalties, depending on the offense's severity
                and prior DUI history. Attendees of DUI education programs may
                encounter related costs, as might individuals required to
                install and maintain an Ignition Interlock Device (IID) in their
                vehicles. Reinstating a suspended or revoked license after a DUI
                conviction incurs additional fees, and those on probation may
                face probation supervision costs.
              </p>
              <h5 className="sectionSubheading">Insurance Cost</h5>
              <p className="courseText">
                People convicted of substance abuse-related driving offenses,
                such as DUI or DWI in California, often experience significant
                increases in insurance costs. Insurance companies consider such
                offenses high-risk behavior and adjust premiums accordingly to
                account for the increased likelihood of accidents or claims.
                After a DUI conviction, individuals may be required to obtain an
                SR-22 certificate from their insurance provider, verifying their
                financial responsibility and insurance coverage for a specified
                period, usually several years. This SR-22 requirement labels the
                driver as high-risk, resulting in substantially higher insurance
                premiums.
              </p>
              <p className="courseText">
                Additionally, insurance companies may refuse to renew the policy
                for persons with DUI convictions. The impact of a DUI conviction
                can also extend to other insurance policies, such as homeowner's
                or renter's insurance, with insurers reviewing driving history
                and adjusting premiums accordingly.
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
