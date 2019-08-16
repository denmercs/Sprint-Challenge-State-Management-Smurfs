import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function TheForm({ errors, touched, status, setStatus }) {
  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => {
      setStatus(res.data);
    });
  }, []);
  useEffect(() => {
    if (status) {
      setSmurfs([...smurfs, status]);
    }
  }, [status]);
  return (
    <>
      <Form>
        <label>
          Smurf Name
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
          <Field type="text" name="name" placeholder="Smurf Name..." />
        </label>
        <label>
          Smurf Age
          {touched.age && errors.age && <p className="errors">{errors.age}</p>}
          <Field type="text" name="age" placeholder="Smurf Age..." />
        </label>
        <label>
          Smurf Height
          {touched.height && errors.height && (
            <p className="errors">{errors.height}</p>
          )}
          <Field type="text" name="height" placeholder="Smurf Height..." />
        </label>
        <button type="submit">Add Smurf</button>
      </Form>
    </>
  );
}

const FormikForm = withFormik({
  mapPropsToValues: ({ name, age, height }) => {
    return {
      name: "",
      age: "",
      height: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Please Provide A Longer Name For Smurf")
      .required("Please Provide Smurf Name"),
    age: Yup.string().required("Please Provide Smurf Age"),
    height: Yup.string().required("Please Provide Smurf Height")
  }),
  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post("http://localhost:3333/smurfs", {
        name: values.name,
        age: values.age,
        height: values.height
      })
      .then(response => {
        console.log("response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
    resetForm();
  }
})(TheForm);

export default FormikForm;
