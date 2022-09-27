import { Box, createStyles, ThemeIcon } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";

const NonExpendAbleButton = ({ icon: Icon, link, label }) => {
  const useStyles = createStyles(theme => ({
    control: {
      fontWeight: 500,
      display: "block",
      width: "100%",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,
      borderRadius: "7px",
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    controlActive: {
      fontWeight: 500,
      display: "block",
      width: "100%",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,
      borderRadius: "7px",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[4],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  }));

  const { classes } = useStyles();

  return (
    <NavLink to={link} end={true}>
      {({ isActive }) => (
        <div className={isActive ? classes.controlActive : classes.control}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="dark" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
        </div>
      )}
    </NavLink>
  );
};

export default NonExpendAbleButton;
