"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signUp from "@/lib/signUp";
import { useRouter } from "next/navigation";

const Signup = () => {
  const initialValues: UserForm = {
    name: "",
    email: "",
    password: "",
  };

  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (user: UserForm, { setSubmitting }: any) => {
    try {
      const users = await signUp(user);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center justify-center bg-slate-400 h-[50vh]">
            <label htmlFor="name" className="font-thin">
              name
            </label>
            <Field type="text" id="name" name="name" />

            <ErrorMessage name="name" />

            <label htmlFor="email" className="font-thin">
              email
            </label>
            <Field type="email" id="email" name="email" />

            <ErrorMessage name="email" />

            <label htmlFor="password" className="font-thin">
              password
            </label>
            <Field type="password" id="password" name="password" />

            <ErrorMessage name="password" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 border rounded p-2"
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Signup;
