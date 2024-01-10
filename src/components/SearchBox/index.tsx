import React from 'react'

import './index.css'

type SearchBoxProps = {
  onChange: (value: string) => void
}

const SearchBox = ({onChange}: SearchBoxProps) => {
  const [value, setValue] = React.useState<string>('')

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onChange(value)
      setValue('')
    }
  }

  return (
    <div className='search-box'>
        <div className="search-wrapper">
            <div className="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.33743 1.20377e-08C4.48625 7.25271e-05 3.64743 0.203696 2.89095 0.593882C2.13448 0.984069 1.48228 1.5495 0.988772 2.24301C0.495265 2.93652 0.17476 3.73799 0.0539975 4.58056C-0.0667651 5.42312 0.0157162 6.28235 0.29456 7.08656C0.573404 7.89076 1.04052 8.61663 1.65695 9.20359C2.27337 9.79055 3.02123 10.2216 3.83812 10.4607C4.65501 10.6999 5.51724 10.7402 6.35289 10.5784C7.18854 10.4165 7.97336 10.0572 8.64189 9.53031L10.9353 11.8237C11.0537 11.9381 11.2124 12.0014 11.377 12C11.5417 11.9985 11.6992 11.9325 11.8156 11.8161C11.932 11.6996 11.9981 11.5421 11.9995 11.3775C12.001 11.2128 11.9377 11.0542 11.8233 10.9357L9.52986 8.64234C10.1503 7.85524 10.5366 6.90935 10.6446 5.91294C10.7526 4.91653 10.5778 3.90985 10.1404 3.00811C9.70296 2.10637 9.02049 1.346 8.17109 0.814015C7.32168 0.282032 6.33967 -6.72845e-05 5.33743 1.20377e-08ZM1.25552 5.33788C1.25552 4.25529 1.68557 3.21704 2.45108 2.45153C3.21659 1.68603 4.25484 1.25597 5.33743 1.25597C6.42001 1.25597 7.45826 1.68603 8.22377 2.45153C8.98928 3.21704 9.41933 4.25529 9.41933 5.33788C9.41933 6.42047 8.98928 7.45872 8.22377 8.22422C7.45826 8.98973 6.42001 9.41979 5.33743 9.41979C4.25484 9.41979 3.21659 8.98973 2.45108 8.22422C1.68557 7.45872 1.25552 6.42047 1.25552 5.33788Z" fill="white"/>
                </svg>
            </div>
            <input 
              type="text" 
              name='search' 
              placeholder='Search' 
              className='search-input' 
              onChange={(e:any) => setValue(e.target.value)} 
              onKeyDown={handleKeyPress} value={value} 
            />
        </div>
    </div>
  )
}

export default SearchBox