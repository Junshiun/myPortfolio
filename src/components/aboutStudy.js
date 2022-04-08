import '../css/aboutStudy.css'
import { ContentContext } from '../context/context';

const studyDetails = [
    {
        title: "Bachelor of Engineering (Electrical - Electronics)",
        period: "Aug 2016 - Aug 2020",
        school: "University Technology Malaysia (UTM)",
        //others: ["major in Computer Engineering", "CGPA: 3.70", "relevant coursework: angular web app, firebase data storage"]
        others: ["major in Computer Engineering"]
    },
    {
        title: "STPM",
        period: "2014 -2015",
        school: "SMK Desa Mahkota",
        //others: ["STPM: 3.92"]
    },
]

export const AboutStudy = (props) => {

    const { contentState: {aboutMe: {Academic}}} = ContentContext();

    const { showClass } = props;

    return (
    <div className={"study " + showClass}>
        <h1>academic</h1>
        <div className="studyWrap">
            {Academic.map(({Title, Period, School, Description}) => {
                return (
                    <div className="eachStudy" key={Title}>
                        <h2>{Title}</h2>
                        <span className="period">{Period}</span>
                        <span>{School}</span>
                        {(Description===undefined)?
                        <span></span>
                        :
                        <ul>
                            {Description.map((item, index) => {
                                return (
                                    <li key={Title + "-others-" + index}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                        }
                    </div>
                )
            })}
        </div>
    </div>
    )
}