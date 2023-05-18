import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ChildCard = ({ child }) => {
  return (
    <Card>
      <CardContent >
        <Typography variant="h6">name : {child.name}</Typography>
        <Typography variant="h6">lastname : {child.lastName}</Typography>
        <Typography variant="body1">Age: {child.age}</Typography>
        {/* <Typography variant="body1">Gender: {child.gender}</Typography> */}
        <Typography variant="body1">
          Card Disabled: {child.disabledCard}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChildCard;
