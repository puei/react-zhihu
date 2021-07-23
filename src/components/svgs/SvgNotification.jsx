import * as React from "react"

function SvgNotification(props) {
  return (
    <svg
      className="prefix__Zi prefix__Zi--Bell"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      {...props}
    >
      <path d="M4.523 15.076l.804-6.757a6.753 6.753 0 014.945-5.7 1.823 1.823 0 013.623 0 6.753 6.753 0 014.945 5.7l.804 6.757a2.293 2.293 0 001.712 2.108 1.093 1.093 0 01-.297 2.15H3.108a1.093 1.093 0 01-.297-2.15 2.293 2.293 0 001.712-2.108zM12.083 23a2.758 2.758 0 01-2.753-2.509.229.229 0 01.232-.24h5.043a.229.229 0 01.232.24 2.759 2.759 0 01-2.753 2.51z" />
    </svg>
  )
}

export default SvgNotification