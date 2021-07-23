import * as React from "react"

function SvgSearch({size,...props}) {
  return (
    <svg
      className="prefix__Zi prefix__Zi--Search prefix__SearchBar-searchIcon"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M17.068 15.58a8.377 8.377 0 001.774-5.159 8.421 8.421 0 10-8.42 8.421 8.38 8.38 0 005.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 01-6.316-6.316 6.323 6.323 0 016.316-6.316 6.323 6.323 0 016.316 6.316 6.323 6.323 0 01-6.316 6.316z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgSearch