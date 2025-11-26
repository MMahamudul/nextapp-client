import React from "react";
import CourseDetailsClient from "./CourseDetailsClient";

export default function CourseDetailsPage({ params }) {
  
  const unwrappedParams = React.use(params);

  return <CourseDetailsClient id={unwrappedParams.id} />;
}
