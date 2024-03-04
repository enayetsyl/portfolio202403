import { companyLogos } from "../constants";

const CompanyLogo = ({className}) => {
  return <div className={className}>
    <h5 className="h6 mb-6 text-center text-n-1">EXPERIENCE WITH INDUSTRY-LEADING PLATFORMS</h5>
    <ul className="flex">
      {companyLogos.map((logo, index) => (
<li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
  <img src={logo} alt={logo} height={28} width={134} />
</li>
      ))}
    </ul>
   </div>;
};

export default CompanyLogo;
