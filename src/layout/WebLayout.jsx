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
          textTransform: "uppercase",
          // padding: "6px 14px",
          borderRadius: 50,
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {children}
      </div>
    </Fragment>
  );
}

export default WebLayout