import { useState } from "react";

const CountryName = ({ country }) => {
  const [details, setDetails] = useState(false);
  return (
    <li>
      Country name: {country.name.common} <br />
      <button onClick={() => setDetails(!details)}>Show more</button>
      {details ? (
        <div>
          {" "}
          area:
          {country.area}
        </div>
      ) : null}
    </li>
  );
};

export default CountryName;
