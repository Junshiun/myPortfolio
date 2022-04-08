import '../css/aboutWork.css'
import { ContentContext } from '../context/context';

const workDetails = [
    {
        title: "Design Verification Engineer",
        period: "Aug 2020 -  Dec 2021",
        company: "Realtek Semiconductor (Malaysia) Sdn. Bhd.",
        experience: 
            ["develop comprehensive test plans, design direct and random test cases to verify the correctness of the hardware design",
            "work and communicate with different departments to perform verification and validation of system functions",
            "create reusable test codes to improve productivity and efficiency"]
    },
    {
        title: "Internship",
        period: "Jun 2019 - Aug 2019",
        company: "Willowglen MSC Bhd.",
        experience: 
            ["prepare schematic diagram and documentation for quality check"]
    }
]

export const AboutWork = (props) => {

    const { contentState: {aboutMe: {Career}}} = ContentContext();

    const { showClass } = props;

    return (
    <div className={"work " + showClass}>
        <h1>career</h1>
        <div className="workWrap">
            {Career.map(({Title, Period, Company, Description}) => {
                return (
                    <div className="eachWork" key={Title}>
                        <h2>
                            {Title}
                        </h2>
                        <span className="period">
                            {Period}
                        </span>
                        <span>
                            {Company}
                        </span>
                        <ul>
                        {Description.map((detail, index) => {
                            return (
                                <li className="workDetail" key={Title + "-detail-" + index}>
                                    {detail}
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
    )
}