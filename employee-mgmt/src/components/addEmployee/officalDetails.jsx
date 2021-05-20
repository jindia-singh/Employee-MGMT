import React from 'react';
import {TextField,MenuItem } from "@material-ui/core";

const OfficialDetails = () => {
    const departmentOptions = [
        { value: "Production", label: "Production" },
    { value: "R&D", label: "R&D" },
    { value: "Purchasing", label: "Purchasing" },
    { value: "Marketing", label: "Marketing" },
    { value: "Human Resource Management", label: "Human Resource Management" },
    { value: "Accounting and Finance", label: "Accounting and Finance" }
    ]
    const employeerOptions = [
        { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract Worker", label: "Contract Worker" }
    ]
    const designationOptions = [
        { value: "Trainee Engineer", label: "Trainee Engineer" },
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "System Analyst", label: "System Analyst" },
    { value: "Programmer Analyst", label: "Programmer Analyst" },
    { value: "Senior Software Engineer", label: "Senior Software Engineer" },
    { value: "Project Lead", label: "Project Lead" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "Program Manager", label: "Program Manager" },
    { value: "Architect", label: "Architect" },
    { value: "Technical Specialist", label: "Technical Specialist" },
    { value: "Deliver Manager", label: "Deliver Manager" },
    { value: "Delivery Head", label: "Delivery Head" },
    { value: "Business Analyst", label: "Business Analyst" },
    { value: "Director", label: "Director" },
    { value: "Vice President", label: "Vice President" },
    { value: "President", label: "President" },
    { value: "CEO", label: "CEO" },
    ]
    const [state, setState] = React.useState({
        eID: "",
        email: "",
        doj: "",
        department: "",
        employementType: "",
        workExp: "",
        managerName: "",
        hrName: "",
        workAddress: "",
        designation:""
    })

    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }
    return (
        <div>
            <TextField

                label="Employee ID"
                variant="outlined"
                name="eID"
                value={state.eID}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Official Email-ID"
                variant="outlined"
                name="email"
                value={state.email}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Date of Joining"
                variant="outlined"
                name="doj"
                type="date"
                value={state.doj}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Department"
                select
                variant="outlined"
                name="department"
                value={state.department}
                onChange={onChangeHandler}
                fullWidth >
                {departmentOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                style={{ marginTop: "30px" }}
                label="Designation"
                select
                variant="outlined"
                name="designation"
                value={state.designation}
                onChange={onChangeHandler}
                fullWidth >
                {designationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                style={{ marginTop: "30px" }}
                label="Employement Type"
                select
                variant="outlined"
                name="employementType"
                value={state.employementType}
                onChange={onChangeHandler}
                fullWidth >
                {employeerOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                style={{ marginTop: "30px" }}
                label="Total Working experince"
                variant="outlined"
                name="workExp"
                value={state.workExp}
                onChange={onChangeHandler}
                fullWidth />
            <TextField
                style={{ marginTop: "30px" }}
                label="Manager Name"
                variant="outlined"
                name="managerName"
                value={state.managerName}
                onChange={onChangeHandler}
                fullWidth />
            <TextField
                style={{ marginTop: "30px" }}
                label="HR Name"
                variant="outlined"
                name="hrName"
                value={state.hrName}
                onChange={onChangeHandler}
                fullWidth />

            <TextField
                style={{ marginTop: "30px" }}
                label="Work Address"
                variant="outlined"
                name="workAddress"
                value={state.workAddress}
                onChange={onChangeHandler}
                fullWidth
                multiline
                rows={4}
            />
        </div>
    );
}

export default OfficialDetails;