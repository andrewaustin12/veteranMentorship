import React from "react";
import '../App.css'
import Card from '@mui/material/Card';

const Resources = () => {
  return (
    <div className="resources-page">
      
      <Card style={{padding:'1%'}}>
        <div>
          <h2 style={{textAlign:'center'}}>Crisis/Hotlines</h2>
            <div>
              <strong>
                National VA Homeless Hotline – 24 Hour
              </strong>
              <p>Toll Free at 1-877-424-3838</p>
              <a href="http://www.va.gov/homeless">www.va.gov/homeless</a>
            </div>
          <br />
          <br />
          <div>
            <strong>Veteran Crisis Line – 24 Hour</strong>
            <p>Toll Free at 988, Press 1</p>
            <a href="http://www.mentalhealth.va.gov">www.mentalhealth.va.gov</a>
          </div>
          <br />
          <br />
          <div>
            <strong>The Recovery Village</strong>
            <br />
            <br />
            <a href="http://www.therecoveryvillage.com/treatment-program/online-counseling/telehealth-app/">www.therecoveryvillage.com</a>
          </div>
          <br />
          <br />
          <div>
            <strong>White House VA Hotline – non-emergency, VA inquiries</strong>
            <p>1-855-948-2311</p>
            <a href="http://www.va.gov/ve/whvahotline.asp">Non Emergency White House VA Hotline</a>
          </div>
          <br />
          <br />
        </div>
      </Card>

      <Card style={{padding:'1%'}}>
        <div>
          <h2 style={{textAlign:'center'}}>Veterans’ Benefits</h2>
          <div>
            <strong>Federal Benefits for Veterans & Dependents Guide</strong>
            <br />
            <br />
            <a href="http://www.va.gov/opa/publications/benefits_book.asp">VA Benifits Book</a>
          </div>
          <br />
          <br />
          <div>
            <strong>VA Online Discharge Upgrade Tool</strong>
            <br />
            <br />
            <a href="http://www.vets.gov/discharge-upgrade-instructions">Discharge Upgrade Instructions</a>
          </div>
          <br />
          <br />
          <div>
            <strong>Locate Military Records</strong>
            <br />
            <br />
            <a href="http://www.archives.gov/veterans/">www.archives.gov/veterans</a>
          </div>
          <br />
          <br />
          <div>
            <strong>Veterans Retraining Assistance Program</strong>
            <br />
            <br />
            <a href="http://benefits.va.gov/vow/education.asp">http://benefits.va.gov/vow/education.asp</a>
          </div>
        </div>
      </Card>

    </div>
  );
};

export default Resources;
