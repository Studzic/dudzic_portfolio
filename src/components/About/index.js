import React from 'react';


function About() {
    return (
        <section className="mt-5">
            <div className="row">
                <h1 id="about">About me</h1>
            </div>
            <div className="row">

            <div className="col about-img pl-0">
                <img src="https://ca.slack-edge.com/T01EXTZCZ44-U01FG6JGREX-8aab55bc0e29-512" alt=""></img>

            </div>

            <div className="col-8">

                <p>I currently work as an electrical technican with cnc router tables, I aspire to create easy to use softwares to help increase efficency.</p>    

                <p>I have enjoyed learning all the aspects of coding through the UOFT software bootcamp.</p>

                <p>I have a wonderful girlfriend who is patiently waiting for me to finish this project.</p>
            </div>

            </div>
        </section>
    );
}

export default About;