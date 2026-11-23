export const business = {
  name: "The Cumming Groomery",
  legalName: "The Cumming Groomery LLC",
  phone: "404-615-0383",
  phoneInternational: "+14046150383",
  email: "Thecumminggroomery@gmail.com",
  address: {
    street: "2440 Pilgrim Mill Road",
    suite: "Suite C",
    city: "Cumming",
    region: "GA",
    postalCode: "30041",
  },
  listedHours: { days: "Monday through Thursday", time: "7:30 to 6:00" },
  publicListing: "https://crm.pawfinity.com/the-cumming-groomery/",
} as const;

const { street, suite, city, region, postalCode } = business.address;
const destination = encodeURIComponent(`${street}, ${suite}, ${city}, ${region} ${postalCode}`);

export const businessLinks = {
  phone: `tel:${business.phoneInternational}`,
  email: `mailto:${business.email}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  legalName: business.legalName,
  telephone: business.phoneInternational,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${street}, ${suite}`,
    addressLocality: city,
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  },
};
