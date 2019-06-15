import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  paper: {
    // marginTop: theme.spacing(13),
    // marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(20),
    // marginRight: theme.spacing(20),
    // margin: theme.spacing(10),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(13),
      // marginBottom: theme.spacing(6),
      // padding: theme.spacing(3)
    }
  }
}));

export default function Signup() {
  const classes = useStyle();
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState("a");

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const [values, setValues] = React.useState(0);

  function handleChange(event, newValues) {
    setValues(newValues);
  }

  //   handleOnClick = () => {
  //   // some action...
  //   // then redirect
  //   this.setState({redirect: true});
  // }
  return (
    <Router>
      <React.Fragment>
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              818' The Foodist
            </Typography>
          </Toolbar>
        </AppBar>
        {/*  */}
        <br />
        <br />
        <br />
        <div centered>
          <div className={classes.root}>
            <br />
            <AppBar position="static">
              <Tabs centered value={values} onChange={handleChange}>
                <Tab label="Customer" />
                <Tab label="Owner" />
              </Tabs>
            </AppBar>
            {values === 0 && (
              <TabContainer>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Register Yourself
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Full Name"
                        fullWidth
                        autoComplete="fname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Email"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Password"
                        type="password"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                          aria-label="position"
                          name="position"
                          value={value}
                          onChange={handleChange}
                          row
                        >
                          <FormControlLabel
                            value="top"
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="End"
                          />
                          <FormControlLabel
                            value="end"
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="Age"
                          type="date"
                          defaultValue="2017-05-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </form>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="billing address-line2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="billing country"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="secondary"
                            name="saveAddress"
                            value="yes"
                          />
                        }
                        label="Use this address for payment details"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleOnClick.bind(this)}
                    className={classes.button}
                  >
                    Register
                  </Button>
                </Paper>
              </TabContainer>
            )}
            {values === 1 && (
              <TabContainer>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    Register Resturant Owner
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Full Name"
                        fullWidth
                        autoComplete="fname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Email"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Password"
                        type="password"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        autoComplete="billing address-line1"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Address"
                        fullWidth
                        autoComplete="billing address-line2"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="address2"
                        name="address2"
                        label="Upload Certificate"
                        type="file"
                        fullWidth
                        autoComplete="billing address-line2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="billing country"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="secondary"
                            name="saveAddress"
                            value="yes"
                          />
                        }
                        label="Use this address for payment details"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick=""
                    className={classes.button}
                  >
                    {/* <Link to="/Components/Admin/DashAdmin">Users</Link> */}
                    Register
                  </Button>
                </Paper>
              </TabContainer>
            )}
          </div>
          {/*  */}
        </div>
        {/* <Route path="/Components/Admin/DashAdmin" component={DashAdmin} /> */}
      </React.Fragment>

      {/* <Route path="/" component={} /> */}
    </Router>
  );
}
