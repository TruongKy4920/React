import Button from "../components/Button";
import {GoBell,GoBook,GoBeaker} from 'react-icons/go';
function ButtonPage(){
    const handleClick=()=>{
        console.log('click');
    };
    return <div>
        <div><Button primary outline rounded onClick={handleClick} className='mb-5'> 
                 <GoBell></GoBell> Click there
            </Button>
        </div>
        <div><Button success outline rounded onClick={handleClick}>
             <GoBook></GoBook> Click here
            </Button>
        </div>
        <div><Button secondary outline rounded onMouseEnter={handleClick}> <GoBeaker></GoBeaker> Click 1</Button></div>
        <div><Button danger outline rounded> <GoBook></GoBook> Click 2222</Button></div>
        <div><Button warning outline rounded>Click 3</Button></div>
    </div>;
}
export default ButtonPage;