import React from 'react';

const Location = () => {
        return (
            <div className="location_wrapper">
                
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3293534209506!2d106.80347521454632!3d-6.220228295497242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d81ff223b%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1569258658427!5m2!1sen!2sid" 
                    width="100%" height="500px" frameBorder="0" allowFullScreen="">
                 </iframe>

                <div className="location_tag">
                    <div>Location</div>
                </div>

            </div>
        );
}


export default Location;