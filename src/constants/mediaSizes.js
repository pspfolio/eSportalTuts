const size = {
  desktop: "992px",
  tablet: "768px",
  phone: "414px"
};

const device = {
  phone: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`
};

export default device;
