import AnchorLink, { AnchorLinkProps } from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedpge:string,
  setselectedpage:()
};

const Link = ({ page ,
selectedpage,
setselectedpage

}: Props) => {
 

    const lcase=page.toLowerCase().replace(/ /g,"")

  return (
    <AnchorLink className={`${selectedpage === lowercase ?"text-primary-500":""}
    transition duration-500 hover:text-primary-300
    
    
    
    `} href={`#${lcase}`} onClick={handleClick}>
      {page}
    </AnchorLink>
  );
};

export default Link;
