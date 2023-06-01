import './bootstrap';
import './App.css'
import * as React from 'react';
import {useState} from 'react'
import {Formik, useFormik} from "formik";
import CssBaseline from '@mui/material/CssBaseline';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import states from "./states.json";
import * as yup from 'yup';
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from "./AppBar"









import {
    FormHelperText,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    FormControl,
    TextField,
    Button,
    Grid,
    Typography
} from "@mui/material";

const validationSchema = yup.object({
        amountNeeded: yup.string().required("Amount is Required"),
        businessName: yup.string().required("Business Name is Required"),
        businessPhone: yup.string().required("Business Phone is Required"),
        businessAddress: yup.string().required("Business Address is Required"),
        suite: yup.string().required("Suite is Required"),
        city: yup.string().required("City is Required"),
        state: yup.string().required("State is Required"),
        zip: yup.string().required("Zip is Required"),
        yearsInBusiness: yup.string().required("Years In Business is Required"),
        annualRevenue: yup.string().required("Annual Revenue is Required"),
        firstName: yup.string().required("First Name is Required"),
        lastName: yup.string().required("Last Name is Required"),
        email: yup.string().email("Must be a valid Email Address").required("Email is Required"),
        Ownership: yup.string().required("Ownership is Required"),
        SocialSecurityNumber: yup.string().required("Social Security Number is Required"),
        DateofBirth: yup.string().required("Date of Birth is Required"),
        HomeAddress: yup.string().required("Home Address is Required"),







    }
)

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App() {
    const [count, setCount] = useState(0)

    const [state, setState] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };

    const formik = useFormik({
        initialValues: {
            amountNeeded: "",
            businessName: "",
            businessPhone: "",
            businessAddress: "",
            suite: "",
            city: "",
            state: "",
            zip: "",
            yearsInBusiness: "",
            annualRevenue: "",
            firstName: "",
            lastName: "",
            email: "",
            FederalTaxIDNumber: "",
            SocialSecurityNumber: "",
            Ownership: "",
            DateofBirth: "",
            HomeAddress: "",


        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values))
        },
        validationSchema: validationSchema,
    })

    return (
        <>

            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ResponsiveAppBar />
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl
                            id="amountNeededForm" variant="outlined">
                            <InputLabel htmlFor="amountNeeded">Amount Needed</InputLabel>
                            <OutlinedInput
                                id="amountNeeded"
                                name="amountNeeded"
                                type="number"
                                value={formik.values.amountNeeded}
                                onChange={formik.handleChange}
                                error={formik.touched.amountNeeded && Boolean(formik.errors.amountNeeded)}
                                onBlur={formik.handleBlur}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="businessName"
                                   name="businessName"
                                   label="Business Name"
                                   value={formik.values.businessName}
                                   onChange={formik.handleChange}
                                   error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                                   onBlur={formik.handleBlur}
                                   helperText={formik.touched.businessName && formik.errors.businessName}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="businessPhone"
                                   name="businessPhone"
                                   label="Business Phone"
                                   value={formik.values.businessPhone}
                                   onChange={formik.handleChange}
                                   error={formik.touched.businessPhone && Boolean(formik.errors.businessPhone)}
                                   onBlur={formik.handleBlur}
                                   helperText={formik.touched.businessPhone && formik.errors.businessPhone}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="businessAddress"
                            name="businessAddress"
                            label="Business Address"
                            value={formik.values.businessAddress}
                            onChange={formik.handleChange}
                            error={formik.touched.businessAddress && Boolean(formik.errors.businessAddress)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.businessAddress && formik.errors.businessAddress}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="suite"
                            name="suite"
                            label="Suite"
                            value={formik.values.suite}
                            onChange={formik.handleChange}
                            error={formik.touched.suite && Boolean(formik.errors.suite)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.suite && formik.errors.suite}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="city"
                            name="city"
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="State"
                                onChange={handleChange}
                            >
                                {states.map((obj) => (
                                    <MenuItem key={obj.abbreviation} value={obj.name}>
                                        {obj.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip"
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="yearsInBusiness"
                            name="yearsInBusiness"
                            label="Years In Business"
                            value={formik.values.yearsInBusiness}
                            onChange={formik.handleChange}
                            error={formik.touched.yearsInBusiness && Boolean(formik.errors.yearsInBusiness)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.yearsInBusiness && formik.errors.yearsInBusiness}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="annualRevenue"
                            name="annualRevenue"
                            label="Annual Revenue"
                            value={formik.values.annualRevenue}
                            onChange={formik.handleChange}
                            error={formik.touched.annualRevenue && Boolean(formik.errors.annualRevenue)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.annualRevenue && formik.errors.annualRevenue}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginY={1}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="firstName"
                                   name="firstName"
                                   label="First Name"
                                   value={formik.values.firstName}
                                   onChange={formik.handleChange}
                                   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                   onBlur={formik.handleBlur}
                                   helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="lastName"
                                   name="lastName"
                                   label="Last Name"
                                   value={formik.values.lastName}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                   helperText={formik.errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="FederalTaxIDNumber"
                                   name="FederalTaxIDNumber"
                                   label="Federal Tax ID Number (if available)"
                                   value={formik.values.FederalTaxIDNumber}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.FederalTaxIDNumber && Boolean(formik.errors.FederalTaxIDNumber)}
                                   helperText={formik.errors.FederalTaxIDNumber}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="SocialSecurityNumber"
                                   name="SocialSecurityNumber"
                                   label="Social Security Number"
                                   value={formik.values.SocialSecurityNumber}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.SocialSecurityNumber && Boolean(formik.errors.SocialSecurityNumber)}
                                   helperText={formik.errors.SocialSecurityNumber}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="Ownership"
                                   name="Ownership"
                                   label="% Ownership"
                                   value={formik.values.Ownership}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.Ownership && Boolean(formik.errors.Ownership)}
                                   helperText={formik.errors.Ownership}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="DateofBirth"
                                   name="DateofBirth"
                                   label="Date of Birth"
                                   value={formik.values.DateofBirth}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.DateofBirth && Boolean(formik.errors.DateofBirth)}
                                   helperText={formik.errors.DateofBirth}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth
                                   id="HomeAddress"
                                   name="HomeAddress"
                                   label="Home Address"
                                   value={formik.values.HomeAddress}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched.HomeAddress && Boolean(formik.errors.HomeAddress)}
                                   helperText={formik.errors.HomeAddress}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="suite"
                            name="suite"
                            label="Suite"
                            value={formik.values.suite}
                            onChange={formik.handleChange}
                            error={formik.touched.suite && Boolean(formik.errors.suite)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.suite && formik.errors.suite}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="city"
                            name="City"
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.errors.city}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="State"
                                onChange={handleChange}
                            >
                                {states.map((obj) => (
                                    <MenuItem key={obj.abbreviation} value={obj.name}>
                                        {obj.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip"
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
            </ThemeProvider>
        </>


 )
}

export default App

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

