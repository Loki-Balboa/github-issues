import { FunctionComponent } from "react";

import { LoaderWrapper } from "./Loader.components";
import { ReactComponent as SpinningCircle } from "./spinner.svg";

const Loader: FunctionComponent = () => (
  <LoaderWrapper>
    <SpinningCircle />
  </LoaderWrapper>
);

export default Loader;
