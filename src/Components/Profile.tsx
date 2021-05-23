import React from 'react';
import Record from './Record';
import { Profile } from './Interface';
import zengardenData from 'Data/zengardern-data.json';
import TwoColumnGrid from 'Components/TwoColumnGrid';
import classes from './Profile.scss';

const columnMap: Record<string, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  phone: 'Phone',
  email: 'Email',
  bio: 'Bio',
};

const profile: Profile = zengardenData?.profile;

const Profile = () => {
  return (
    <div className={classes.profileSection}>
      <div className={classes.avatar}>
        <img src={profile.avatarImage} />
      </div>
      <TwoColumnGrid columnMap={columnMap} data={profile} title={'Profile'} />
    </div>
  );
};

export default Profile;
