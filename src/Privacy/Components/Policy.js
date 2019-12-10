import React from 'react';

export const Policy = (props) => {
  return (
    <div className='container t16-policy'>
      <h1 className='t16-policy-header'>
        Song Reviewer Privacy Policy
      </h1>
      <br></br>
      <h3>
        Information collected on signup
      </h3>
      <p>
        When you sign up for our site, we collect your username, password, and role. All of this information (including your password) is stored in plaintext in our database. This is obviously insecure (regarding the password), but this site was created for educational purposes and encryption/decryption was not required nor taught to us. If you choose to make your username your real name, you do so on your own volition; it is not required.
      </p>
      <h3>
        Information collected through the use of the site
      </h3>
      <p>
        We collect information regarding actions you take on our site. This includes writing reviews, tagging artists, and liking reviews. We must do this to facilitate these actions, and do not collect any more information besides which user has taken which actions.
      </p>
      <h3>
        Changing your data
      </h3>
      <p>
        You can always change the data we store about you by navigating to your profile page and editing the information displayed there. That is the extent of the data we have about you, so any changes are comprehensive.
        If you are a music artist whose information is displayed on the site, we have no control over that data. It was provided to use via the Genius API. If you wish to change any of that data, you must contact Genius.
      </p>
      <h3>
        Data protection
      </h3>
      <p>
        We cannot guarantee that data will be protected, because it is stored in plain text, as previously stated. However, the data we collect should not be able to personally identify you (unless you purposefully make it so via your username). If you wish for any data to be deleted, please reach us in the “Contact Us” section below.
      </p>
      <h3>
        Storage of cookies
      </h3>
      <p>
        For our purposes, we must store cookies on your browser. These cookies are used to identify you, but do not include any personal information beyond what we have stated that we record. We do not collect information about your device, browser, location or ip address.
      </p>
      <h3>
        Sharing data with other parties
      </h3>
      <p>
        We do not share data with other parties. Please note that we do make use of the Genius API to feed data (songs, artists, annotations, etc.) to our site. However, we do not share your information with Genius in any way. We use our own account and API key to fetch this data; there should be no way for Genius to track that this information was provided to you, to the best of our knowledge.
      </p>
      <h3>
        Changes to this privacy policy
      </h3>
      <p>
        We reserve the right to change this privacy policy at any point. We will do our best to notify users when they return to our site after the policy is changed, can but make no guarantees. We do however guarantee that this policy will always be available to you via our site if you wish to read it.
      </p>
      <h3>
        Contact us
      </h3>
      <p>
        For further inquiries, the creators of this site may be reached at:
      </p>
      <ul>
        <li>
          costa.ste@husky.neu.edu
        </li>
        <li>
          burns.j@husky.neu.edu
        </li>
        <li>
          ma.yiw@husky.neu.edu
        </li>
      </ul>
    </div>
  );
};

export default Policy;
