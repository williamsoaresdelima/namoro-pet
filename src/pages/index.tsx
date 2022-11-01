import React from "react";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";

function Home() {
  return (
    <Layout>
      <div>
        <ProfileHeader/>
      </div>
    </Layout>
  );
}

export default Home;