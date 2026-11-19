export const siteInfo = {
  name: "Jesus Christ the Living Word",
  fullName: "Jesus Christ the Living Word International Ministries",
  subtitle: "International Ministries",
  motto: "Worship, grow, serve and reach.",
  serviceTime: "Sundays, 3:30 PM",
  streetAddress: "86 Ainsworth Street",
  suburbAndCity: "Mawson, Canberra",
  fullAddress: "86 Ainsworth Street, Mawson, Canberra",
  phoneDisplay: "0452 404 536",
  phoneLink: "tel:+61452404536",
  email: "jcthelivingword@gmail.com",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=86+Ainsworth+Street+Mawson+ACT",
};

export const mainNavigation = [
  { label: "About", href: "about.html" },
  { label: "Gatherings", href: "gatherings.html" },
  { label: "Next Steps", href: "next-steps.html" },
  { label: "What We Believe", href: "beliefs.html" },
  { label: "Our Story", href: "story.html" },
];

export const planAVisitLink = { label: "Plan a Visit", href: "visit.html" };

export const footerNavigation = [
  { label: "Home", href: "#top" },
  ...mainNavigation,
  planAVisitLink,
];
