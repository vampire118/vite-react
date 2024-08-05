import { Avatar, Card, Divider, Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Test from "./Test";
import TestEdit from "./EditProfile";
import ProfileContainer from "./ProfileContainer";

export default function Profile() {
  return (
    <div>
      <div >
        {/* <Header /> */}
      </div>
      <ProfileContainer />
      {/* <Test /> */}
    </div>
  );
}