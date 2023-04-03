import { countries } from "@/assets/mock/staticData";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";

export default function PaymentForm({formik}) {
  const [value, setValue] = useState("");
  console.log(formik);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event);
    console.log(value);
  };
  return (
    <Paper
      variant="outlined"
      sx={{ p: "1.5rem", boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px" }}
    >
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="card" control={<Radio />} label="Pay with credit card" />
        </RadioGroup>
        {value === "card" && <PaywithCard formik={formik} />}
        <Divider sx={{my:2}} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="paypal" control={<Radio />} label="Pay with Paypal" />
        </RadioGroup>
        {value === "paypal" && <PaywithPaypal />}
        <Divider sx={{my:2}} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="upi" control={<Radio />} label="Pay with UPI" />
        </RadioGroup>
        {value === "upi" && <Paywithupi />}
        <Divider sx={{my:2}} />
      </Stack>
      <Stack>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivary" />
        </RadioGroup>
        {value === "cod" && <PayCoD />}
   
      </Stack>
    </Paper>
  );
}

const PaywithCard = ({formik}) => {

  return (
    <Box>
      <Stack gap={2}>
        <Box></Box>
        <Grid
          container
          gap={2}
          justifyContent={"space-between"}
          spacing={1}
          columns={12}
        >
          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <Typography variant="body1" mb={0} gutterBottom>
              Enter Card Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <TextField
              required
              id="cardname"
              name="cardname"
              label="Full Name"
              onChange={formik.handleChange}
              value={formik.values.cardname}
              size="small"
              fullWidth
              autoComplete="company-name"
              variant="outlined"
            />
            <TextField
              required
              id="cardno"
              name="cardno"
              onChange={formik.handleChange}
              value={formik.values.cardno}
              label="Card No"
              size="small"
              fullWidth
              autoComplete="card-no"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <Autocomplete
              id="expmonth"
              size="small"
              sx={{ flex: 1 }}
              onChange={formik.handleChange}
              value={formik.values.expmonth}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Card Expire Month"
                  id="expiremonth"
                  name="expiremonth"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-expiremonth", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <Autocomplete
              id="expyear"
              size="small"
              sx={{ flex: 1 }}
              options={countries}
              onChange={formik.handleChange}
              value={formik.values.expyear}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Card Expire Year"
                  id="expireyear"
                  name="expireyear"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-expireyear", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <TextField
              required
              id="cvv"
              onChange={formik.handleChange}
              value={formik.values.cvv}
              sx={{ flex: 1 }}
              type="number"
              name="cvv"
              label="CVC/CVV"
              size="small"
              fullWidth
              autoComplete="cvv-number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex" }} gap={2}>
            <FormControlLabel control={<Checkbox />} label="Save this Card" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
const PaywithPaypal = (params) => {
  return <Box>PaywithPaypal</Box>;
};
const Paywithupi = (params) => {
  return <Box></Box>;
};
const PayCoD = (params) => {
  return <Box></Box>;
};
