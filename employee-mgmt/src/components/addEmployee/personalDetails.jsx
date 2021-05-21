import React from 'react';
import { MenuItem, TextField } from "@material-ui/core";

const PersonalDetails = () => {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        nationality: "",
        permanentAddress: "",
        currentAddress: "",
        guardianSpouseName: "",
        dob: "",
        gender: ""
    })
    const nationalityOptions = [
        { value: "Australian", label: "Australian" },
        { value: "American", label: "American" },
        { value: "Bangladeshi", label: "Bangladeshi" },
        { value: "Canadian", label: "Canadian" },
        { value: "French", label: "French" },
        { value: "German", label: "German" },
        { value: "Indian", label: "Indian" },
        { value: "Italian", label: "Italian" },
        { value: "Nepali", label: "Nepali" },
        { value: "New Zealand, NZ", label: "New Zealand, NZ" },
        { value: "Other", label: "Other" }
    ]

    const genderOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Transgender", label: "Transgender" }
    ]
    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    const onSelectHandler = () => {
        setState({ ...state, ["currentAddress"]: state.permanentAddress });
    }
    return (
        <div>
            <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={state.firstName}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Last Name"
                name="lastName"
                variant="outlined"
                value={state.lastName}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Date of Birth"
                type="date"
                placeholder="Date of Birth"
                variant="outlined"
                value={state.dob}
                name="dob"
                onChange={onChangeHandler}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Gender"
                name="gender"
                variant="outlined"
                select
                value={state.gender}
                onChange={onChangeHandler}
                fullWidth >
                {genderOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                style={{ marginTop: "30px" }}
                label="Nationality"
                name="nationality"
                variant="outlined"
                select
                value={state.nationality}
                onChange={onChangeHandler}
                fullWidth >
                {nationalityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                style={{ marginTop: "30px" }}
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                value={state.phoneNumber}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Guardian/Spouse Name"
                name="guardianSpouseName"
                variant="outlined"
                value={state.guardianSpouseName}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Permanent Address"
                variant="outlined"
                name="permanentAddress"
                value={state.permanentAddress}
                onChange={onChangeHandler}
                fullWidth
                multiline
                rows={4}
            />

            <TextField
                style={{ marginTop: "30px" }}
                label="Current Address"
                variant="outlined"
                name="currentAddress"
                value={state.currentAddress}
                onChange={onChangeHandler}
                fullWidth
                multiline
                rows={4}
            />
            <input type="checkbox" id="checkbox" onChange={onSelectHandler} />
            <label for="checkbox">Same as permanent address </label>

        </div>
    );
}

export default PersonalDetails;