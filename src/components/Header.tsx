import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ padding: 0, margin: 0, backgroundColor: "#121618" }}
    >
      <Toolbar sx={{ padding: 0 }}>
        {/* Left side: Restaurant Name */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ textAlign: "right" }}>
            Restaurant
          </Typography>
        </Box>

        {/* Desktop View: Menu items */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              textTransform: "none",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "23.71px",
              letterSpacing: "3%",
              "&:hover": {
                color: "primary.main", // Hover effect with primary blue color
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/menu/drinks"
            sx={{
              textTransform: "none",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "23.71px",
              letterSpacing: "3%",
              "&:hover": {
                color: "primary.main", // Hover effect with primary blue color
              },
            }}
          >
            Menu
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/reservation"
            sx={{
              textTransform: "none",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "23.71px",
              letterSpacing: "3%",
              "&:hover": {
                color: "primary.main", // Hover effect with primary blue color
              },
            }}
          >
            Make a Reservation
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              textTransform: "none",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "23.71px",
              letterSpacing: "3%",
              "&:hover": {
                color: "primary.main", // Hover effect with primary blue color
              },
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ display: { xs: "block", md: "none" }, marginLeft: "auto" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu Dropdown */}
        <Menu
          anchorEl={isMenuOpen}
          open={Boolean(isMenuOpen)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/menu/drinks"
          >
            Drinks
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/menu/snacks"
          >
            Snacks
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/menu/desserts"
          >
            Desserts
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/reservation"
          >
            Make a Reservation
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/contact"
          >
            Contact Us
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
