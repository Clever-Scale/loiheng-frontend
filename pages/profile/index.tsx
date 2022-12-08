import { ProfileComponent } from "@components/ProfileComponent";
import ProfileLayout from "@layouts/ProfileLayout";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { ReactElement } from "react";

const Profile = () => {
  return (
    <Box>
      <Head>
        <title>Loi Heng | Profile</title>
        <meta name="description" content="Loi Heng Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileComponent />
    </Box>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
