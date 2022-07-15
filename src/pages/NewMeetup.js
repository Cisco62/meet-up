import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../componnents/layout/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://meet-up-4f1c9-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        }) 
        
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;