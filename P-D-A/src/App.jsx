import ProfileCard from "./ProfileCard";
import 'bulma/css/bulma.css';
import Cortana from './images/cortana.png';
import Siri from './images/siri.png';
import Alexa from './images/alexa.png';
function App(){
    return(<div>
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">Personal Digital Assistants</p>
        </div>
    </section>
    <div className="container">
        <section className="section">
            <div className="columns">
                <div className="column is-4">
                    <ProfileCard img={Alexa} handle='@alexa' title='Alexa' origin='Created by Amazon'></ProfileCard>
                </div>
                <div className="column is-4">
                    <ProfileCard img={Cortana} handle='@cortana' title='Cortana' origin='Created by Micro'></ProfileCard>
                </div>
                <div className="column is-4">
                    <ProfileCard img={Siri} handle='@siri' title='Siri' origin='Created by Apple'></ProfileCard>
                </div>
            </div>
        </section>
    </div>
    </div>
    );
}
export default App;