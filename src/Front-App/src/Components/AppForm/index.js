import { Form, Formik } from "formik";
import { func, node, shape } from "prop-types";
import React from "react";

function AppForm({ initialValues, onSubmit, children, validationSchema }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}

AppForm.propTypes = {
  initialValues: shape({}).isRequired,
  onSubmit: func,
  children: node,
  validationSchema: shape({}),
};

AppForm.defaultProps = {
  onSubmit: Function.prototype,
  children: node,
  validationSchema: null,
};

export default AppForm;
