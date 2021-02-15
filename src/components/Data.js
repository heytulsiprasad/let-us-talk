import React from "react";
import { connect } from "react-redux";

import { getSomeData } from "./../actions/authActions";

const Data = (props) => {
  React.useEffect(() => {
    props.getSomeData();
    // eslint-disable-next-line
  }, []);

  console.log(props.auth);

  return (
    <div>
      <pre>
        <code>
          {props.auth.data && JSON.stringify(props.auth.data, null, 4)}
        </code>
      </pre>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getSomeData })(Data);
