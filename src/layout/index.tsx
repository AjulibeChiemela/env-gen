import React, { Suspense } from "react";
import { Spinner } from "../components/spinner";

interface IProps {
  children: React.ReactNode;
}

export const PagesWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </div>
  );
};
