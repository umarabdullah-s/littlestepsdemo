import React from 'react'
import { Fragment } from 'react'
import colors from '../layout/utils/color'

const WebLayout = ({children}) => {
  return (
    <Fragment>
      <div
        style={{
          display: "inline-block",
          background: colors.light,
          color: colors.lavender,
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          // textTransform: "uppercase",
         
          borderRadius: 50,
          fontFamily: "'Nunito', sans-serif",
          // marginBottom: "1rem",
        }}
      >
        {children}
      </div>
    </Fragment>
  );
}

export default WebLayout