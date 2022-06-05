import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Example() {
  //   let navigate = useNavigate();
  const [showRegistrationField, setShowRegistrationField] = useState({
    password: false,
    name: false,
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    showRegistration: Yup.boolean(),
    name: Yup.string().required().min(2).label("Name"),
    password: Yup.string().required().min(6).label("Password"),
    passwordConfirm: Yup.string().when("showRegistration", {
      is: true,
      then: Yup.string().required().min(6).label("Confirmation Password"),
    }),
  });

  const handleLogin = async (userValues: any) => {
    console.log(userValues);
    // navigate("/profile");
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          showRegistration: false,
          name: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(userValues) => handleLogin(userValues)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          errors,
          handleBlur,
          touched,
          setFieldValue,
          values,
        }) => {
          return (
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {!values.showRegistration ? "Sign in to " : "Create "} your
                    account
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Or{" "}
                    <a
                      onClick={() => {
                        setFieldValue(
                          "showRegistration",
                          !values.showRegistration
                        );
                        if (values.showRegistration) {
                          setShowRegistrationField({
                            name: false,
                            password: false,
                          });
                        }
                      }}
                      className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
                    >
                      {!values.showRegistration
                        ? "create an account"
                        : "Sign In"}
                    </a>
                  </p>
                </div>
                <Form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          !values.showRegistration
                            ? "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            : "mt-1 border-gray-300 appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                        placeholder="Email address"
                      />
                    </div>
                    {showRegistrationField.name ? (
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-4 appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                    ) : null}

                    {!values.showRegistration ||
                    showRegistrationField.password ? (
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          autoComplete="current-password"
                          className={
                            !values.showRegistration
                              ? "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              : "mt-4 border-gray-300 appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          }
                          placeholder="Password"
                        />
                      </div>
                    ) : null}
                    {values.showRegistration &&
                    showRegistrationField.password ? (
                      <div>
                        <label htmlFor="passwordConfirm" className="sr-only">
                          Password
                        </label>
                        <input
                          id="passwordConfirm"
                          name="passwordConfirm"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          autoComplete="current-password"
                          className={
                            !values.showRegistration
                              ? "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              : "mt-4 border-gray-300 appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          }
                          placeholder="Confirm Password"
                        />
                      </div>
                    ) : null}
                  </div>
                  <p>{touched.email ? errors.email : null}</p>
                  <p>
                    {touched.name &&
                    values.showRegistration &&
                    showRegistrationField.name
                      ? errors.name
                      : null}
                  </p>
                  <p>
                    {touched.password &&
                    values.showRegistration &&
                    showRegistrationField.password
                      ? errors.password
                      : null}
                  </p>
                  <p>
                    {touched.password &&
                    values.showRegistration &&
                    showRegistrationField.password
                      ? errors.passwordConfirm
                      : null}
                  </p>
                  {!values.showRegistration ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                  ) : null}

                  <div>
                    {!values.showRegistration ? (
                      <button
                        type="button"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                          />
                        </span>
                        Sign in
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          if (!errors.email) {
                            setShowRegistrationField({
                              ...showRegistrationField,
                              name: true,
                            });
                          }
                          if (!errors.name) {
                            setShowRegistrationField({
                              ...showRegistrationField,
                              password: true,
                            });
                          }
                        }}
                        type="button"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                          />
                        </span>
                        {values.showRegistration &&
                        !showRegistrationField.password
                          ? "Continue"
                          : "Sign Up"}
                      </button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
}
