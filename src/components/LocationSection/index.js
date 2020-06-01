import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>OUR SPECIAL PLACE</span>
              <h2 className="main-font">Location</h2>
              <p>
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>HARRIS Hotel Sentraland Semarang</strong>
                </a>{' '}
                <br />
                Jl. Ki Mangunsarkoro No.36, Karangkidul, Kec. Semarang Tengah, <br />
                Kota Semarang, Jawa Tengah 50136
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.293266961091!2d110.4250066322774!3d-6.992004594949059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ca11d0e6f61%3A0x8c359fe27c58195d!2sHARRIS%20Hotel%20Sentraland%20Semarang!5e0!3m2!1sen!2sid!4v1590977401700!5m2!1sen!2sid"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: '0' }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="Google Maps - Dinda & Indra Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);