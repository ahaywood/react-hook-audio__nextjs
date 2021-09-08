interface Props {
  className?: string;
}

const PlusClose = ({ className = '' }: Props) => {
  return (
    <svg className={className} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.98633 9.99996L3.49319 6.50681L5.69936 4.30064L9.19251 7.79378L12.6855 4.30076L14.8917 6.50693L11.3987 9.99996L14.8917 13.493L12.6856 15.6992L9.19251 12.2061L5.69932 15.6993L3.49314 13.4931L6.98633 9.99996Z" />
      </g>
    </svg>
  )
}

export { PlusClose }
