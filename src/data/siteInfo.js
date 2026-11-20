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
  facebookUrl: "https://www.facebook.com/share/18abdkAsyn/",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=86+Ainsworth+Street+Mawson+ACT",
  mapEmbedUrl:
    "https://www.google.com/maps?q=86+Ainsworth+Street,+Mawson+ACT&output=embed",
};

export const routes = {
  home: "/",
  about: "/about",
  gatherings: "/gatherings",
  nextSteps: "/next-steps",
  beliefs: "/beliefs",
  story: "/story",
  visit: "/visit",
};

export const mainNavigation = [
  { label: "About", to: routes.about },
  { label: "Gatherings", to: routes.gatherings },
  { label: "Next Steps", to: routes.nextSteps },
  { label: "What We Believe", to: routes.beliefs },
  { label: "Our Story", to: routes.story },
];

export const planAVisitLink = { label: "Plan a Visit", to: routes.visit };

export const footerNavigation = [
  { label: "Home", to: routes.home },
  ...mainNavigation,
  planAVisitLink,
];
