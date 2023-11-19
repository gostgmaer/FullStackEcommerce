import { useAuthContext } from "@/context/AuthContext";
import Userlayout from "@/layout/user";

import { Person } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuthContext();
  const [loading, setloading] = useState(true);
  const [open, setopen] = useState(true);
  const route = useRouter();
  console.log(user);
  // useEffect(() => {
  //   const sequrePage = async () => {
  //     const session = await getSession();

  //     if (!session) {
  //       signIn();
  //     } else {
  //       setloading(false);
  //     }
  //   };
  //   sequrePage();
  // }, []);

  return (
    <Userlayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={3}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
          >
            <Person color="error" />
            <span>My profile</span>
          </Typography>
          <Link href={`/my-account/profile/${user?.user_id}`}>Edit Profile</Link>
        </Stack>
        <UserCard user={user} />
        <ProfileDetails user={user} />
      </Box>
    </Userlayout>
  );
};

export default Profile;

const UserCard = ({ user }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "45%",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image
            width={75}
            height={75}
            className=" w-20 h-20 object-cover"
            style={{ borderRadius: "50%" }}
            src={user?.["profilePicture"]}
            alt=""
          />
          <Stack>
            <strong>
              {user?.firstName} {user?.lastName}
            </strong>
            <span>Balance: $5421</span>
          </Stack>
        </Box>
        <Typography color={colors.red[300]} variant="button">
          Silver User
        </Typography>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Total order{" "}
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 14,
          gap: 0.5,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Delivared
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 0.5,
          fontSize: 14,
          width: "15%",
          p: 1,
        }}
      >
        <span>16</span>
        Order Cancel
      </Paper>
    </Stack>
  );
};

const ProfileDetails = ({ user }) => {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          py: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          First Name: <span>{user?.firstName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Last Name: <span>{user?.lastName}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Email: <span>{user?.email}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Phone: <span>{user?.phoneNumber}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 0.5,
          }}
          variant="body2"
        >
          Date of Birth: <span>{user?.dateOfBirth}</span>
        </Typography>
      </Paper>
    </Stack>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   // console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: `/auth/signin?callbackUrl=${appBaseUrl}/profile`,
//         parmanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "List of 100 pro blog" : "list of free blogs",
//     },
//   };
// };
