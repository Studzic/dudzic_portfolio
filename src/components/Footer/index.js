import React from 'react';


function Footer() {
    return (
        <footer className="bg-secondary text-center text-dark">
            <div className="container p-3 pb-0">
                <section>
                    {/* <!-- Linkedin --> */}
                    <a className="btn btn-outline-dark btn-floating rounded-circle m-1 site-link" href="https://www.linkedin.com/feed/" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-linkedin-in"></i
                    ></a>

                    {/* <!-- Github --> */}
                    <a className="btn btn-outline-dark btn-floating rounded-circle m-1 site-link" href="https://github.com/Studzic" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-github"></i
                    ></a>
                    
                </section>
            </div>

            <div className="bg-primary p-2 text-light">
                &copy; 2021: Austin Dudzic
            </div>

        </footer>
    );
}

export default Footer;