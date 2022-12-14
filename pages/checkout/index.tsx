import { CheckoutComponent } from "@components/CheckoutComponent";
import MainLayout from "@layouts/MainLayout";
import { Box } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth/next";
import Head from "next/head";
import { authOptions, Me } from "pages/api/auth/[...nextauth]";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login?callbackUrl=" + context.req.url,
        permanent: false,
      },
    };
  }

  const data = (await axios
    .get(`${process.env.API_URL}auth/me`, {
      headers: {
        Authorization: `${session.token}`,
      },
    })
    .then((res) => res.data)) as Me;

  return {
    props: { data },
  };
};
const CheckoutPage = () => {
  return (
    <Box>
      <Head>
        <title>Loi Heng | Checkout</title>
        <meta name="description" content="Loi Heng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CheckoutComponent />
    </Box>
  );
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default CheckoutPage;
