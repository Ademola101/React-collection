const CountryName = ({ details, countries, onClick }) => {
  return (
    <>
      <ul>
        {countries.map((country) => {
          return (
            <li>
              Country name: {country.name.common} <br />
              <button onClick={onClick}>Show more</button>
              {details ? (
                <div>
                  {" "}
                  area:
                  {country.area}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountryName;
