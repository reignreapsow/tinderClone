import React, { useState, useEffect } from 'react';

import TinderCard from 'react-tinder-card';
import database from "./firebase";

import './TinderCards.css';

function TinderCards() {

    //# Array
    const [people, setPeople] = useState([
            //#    static (test) data
        // {
        //     name: 'steve jobs',
        //     url: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/36360474-F645-CA18-BABB601709CBAC5C.jpg'
        // },
        // {
        //     name:'mark zuckerburg',
        //     url: 'https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        // }
    ]);
    //# a piece of code which runs based on a condition
    useEffect(() => {
        //# this is where the code runs...
        

        //# grabs collection people and take a picture of the content and paste it in people
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot =>(
                setPeople(snapshot.docs.map((doc) => doc.data())))
                        );
        //# cleanup func
        //# stops & detaches the listener after running once
        return () => {
            // this is the cleanup
            unsubscribe();
        };

        //#  runs once when the component loads, and never again
    }, []);

     //# Push to an array in React
    // setPeople([...people, 'sonny', 'qazi'])
    // ... keep what ever is in the state and append to that

    //# Always give KEYS in React - allows react to efficiently re-render a list faster
    //# INLINE STYLE = style
    //# preventSwipe = locks out certain directions
    return (
        <div>
            {/* <h1>Tinder Cards</h1> */}

            {/*//# .map === loops through array data */}
            {people.map(person => (

                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={[ 'up', 'down']}
                >
                    <div style={{ 
                        backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3 className="tinderCards__name">{person.name}</h3>
                    </div>
                </TinderCard>
                
            ))}

        </div>
    )
}

export default TinderCards
