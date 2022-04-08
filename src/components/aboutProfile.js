import '../css/aboutProfile.css'
import { ContentContext } from '../context/context';

export const AboutProfile = (props) => {

    const { contentState: {aboutMe: {Intro}}} = ContentContext();

    const { showClass } = props;

    return (
        <div className={"profile " + showClass}>
            <div className="aboutPhotoBox">
                {/*<div className="hello">Hello</div>*/}
                <div className="myPhotoBox">
                    <img alt="myPhoto" src={require('../images/JS.png')}></img>
                </div>
            </div>
            <div className="aboutOverview">
                <p>
                {Intro}
                </p>
            </div>
        </div>
    )
}