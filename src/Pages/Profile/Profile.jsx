import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title";

import ProfileCompo from "../../Components/ProfileCompo/ProfileCompo";
import Storage from "../../Components/Storage/Storage";
import AllProject from "../../Components/AllProject/AllProject";
import GeneralInformation from "../../Components/GeneralInformation/GeneralInformation";
import Notification from "../../Components/Notification/Notification";

const Profile = () => {
  return (
    <Wrapper>
      <div>
        <span>Home / Profile</span>
        <Title mytitle="Profile" />
      </div>
      <div className="gap-3 min-md:grid min-md:grid-cols-2">
        <ProfileCompo />
        <Storage />
      </div>
      <div className="gap-3 mt-3 min-md:grid min-md:grid-cols-3">
        <AllProject />
        <GeneralInformation />
        <Notification />
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.section`
  background: #f4f7fe;
  padding: 16px;
`;
