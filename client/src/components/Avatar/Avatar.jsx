import React from 'react'
const Avatar=({children ,backgroundColor,
  padding,
  marginTop,
  color,
  borderRadius,
  textDecoration,
  cursor,
  fontSize,
  textAlign,})=>{
const style={
  backgroundColor,
  marginTop,
  padding,
  color,
  borderRadius,
  fontSize,
  textAlign,
  textDecoration: "none",
  cursor,
}
  return (
    <div style={style}>{children}</div>
  )
}
export default Avatar