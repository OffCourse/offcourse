import React, { Fragment } from "react";

export default (props: any) => {
  console.log(props);
  return (<Fragment>
    This is my updated bio.
    <br />
    It's shadowing the content from the theme.
</Fragment>);
  };
