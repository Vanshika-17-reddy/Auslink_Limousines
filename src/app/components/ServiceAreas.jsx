import '@/app/styles/components/ServiceAreas.css';

const areas = [
  {
    region: "Melbourne CBD",
    suburbs: ["Melbourne", "Southbank", "Docklands", "South Melbourne", "East Melbourne"],
  },
  {
    region: "Eastern Suburbs",
    suburbs: ["Box Hill", "Doncaster", "Glen Waverley", "Ringwood", "Camberwell"],
  },
  {
    region: "South Eastern Suburbs",
    suburbs: ["Dandenong", "Cranbourne", "Berwick", "Narre Warren", "Pakenham"],
  },
  {
    region: "Northern Suburbs",
    suburbs: ["Broadmeadows", "Craigieburn", "Epping", "South Morang", "Preston"],
  },
  {
    region: "Western Suburbs",
    suburbs: ["Footscray", "Werribee", "Sunshine", "Melton", "Caroline Springs"],
  },
  {
    region: "Mornington Peninsula",
    suburbs: ["Frankston", "Mornington", "Sorrento", "Portsea", "Red Hill"],
  },
];

export default function ServiceAreas() {
  return (
    <section className="service-areas">
      <div className="container">
        <div className="service-areas__header">
          <p className="service-areas__tagline">Areas We Service</p>
          <h2 className="service-areas__title">Servicing All of Melbourne</h2>
          <p className="service-areas__description">
            Our luxury limousine service covers Melbourne and surrounding areas.
            No matter where you are, we'll get you there in style.
          </p>
        </div>

        <div className="service-areas__grid">
          {areas.map((area, index) => (
            <div key={index} className="service-areas__card">
              <div className="service-areas__icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="service-areas__region">{area.region}</h3>
              <ul className="service-areas__suburbs">
                {area.suburbs.map((suburb, i) => (
                  <li key={i}>{suburb}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="service-areas__note">
          Don't see your area? Contact us - we service all of Victoria!
        </p>
      </div>
    </section>
  );
}
