import { useState, useEffect } from 'react'
import MeetupList from "../componnents/layout/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // Displaying data from the database
    fetch(
      'https://meet-up-4f1c9-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        //Converting the incoming object from the database into an array before passing it to data
        const meetups = [];

        for(const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })

  }, []);
  
  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    )
  }
  

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
            {/* <ul>
              Mapping an array of objects into jsx element
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })}
            </ul> */}
        </section>
    );
    
}

export default AllMeetupsPage;