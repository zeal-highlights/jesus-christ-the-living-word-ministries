export const heroTickerWords = ["Worship", "Grow", "Serve", "Reach"];

export const sundayCollagePhotos = [
  { src: "/images/anniv/worship-singers.jpg", alt: "The worship team leading a song" },
  { src: "/images/anniv/stage-wide.jpg", alt: "The stage during a Sunday gathering" },
  { src: "/images/anniv/kids-group.jpg", alt: "The children of the church" },
];

export const pillars = [
  {
    title: "Worship",
    description: "We gather to lift up the name of Jesus in song, in prayer and in the Word.",
    image: "/images/anniv/worship-team.jpg",
    imageAlt: "The worship team singing",
  },
  {
    title: "Grow",
    description: "We open the Bible together and learn to follow Jesus day by day.",
    image: "/images/anniv/preaching.jpg",
    imageAlt: "Preaching beside the church banner",
  },
  {
    title: "Serve",
    description: "Everyone has a gift. We use ours to care for the church family and our city.",
    image: "/images/anniv/shared-table.jpg",
    imageAlt: "Members serving food at a shared meal",
  },
  {
    title: "Reach",
    description: "We carry the good news of Jesus to Canberra and to the nations.",
    image: "/images/reach-bible.jpg",
    imageAlt: "Hands over an open Bible during a Bible study",
    // Photo: free to use from Pexels, https://www.pexels.com/photo/hands-reading-a-bible-at-a-study-group-34612053/
  },
];

export const weeklySchedule = [
  {
    name: "Sunday Service",
    when: "Every Sunday, 3:30 PM",
    where: "86 Ainsworth Street, Mawson, Canberra",
  },
  {
    name: "Prayer Meeting",
    when: "Thursdays",
    where: "86 Ainsworth Street, Mawson, Canberra",
  },
  {
    name: "Youth Bible Study",
    when: "Every second Thursday",
    where: "86 Ainsworth Street, Mawson, Canberra",
  },
  {
    name: "Combined Bible Study",
    when: "Every fortnight, 6:30 PM",
    where: null, // shown as "To be announced"
  },
  {
    name: "Cell Group Bible Study",
    when: "Every fortnight",
    where: "Contact your cell group leader for the time and venue",
  },
];

// `layout` sets how big a photo is in the mosaic:
// "standard" (1x1), "wide" (2x1), "tall" (1x2), "big" (2x2) or "most" (3x2).
export const anniversaryPhotos = [
  { src: "/images/anniv/dance.jpg", caption: "The tambourine dance team", label: "Praise", layout: "big" },
  { src: "/images/anniv/kids-group.jpg", caption: "The children of the church", label: "Children", layout: "standard" },
  { src: "/images/anniv/family-group.jpg", caption: "Families gathered for a photo", label: "Family", layout: "standard" },
  { src: "/images/anniv/presentation.jpg", caption: "A presentation on stage", label: "Honour", layout: "wide" },
  { src: "/images/anniv/dance-ribbons.jpg", caption: "Dancers with ribbons", label: "Dance", layout: "wide" },
  { src: "/images/anniv/stage-speaker.jpg", caption: "The stage during the celebration", label: "Welcome", layout: "wide" },
];

export const storyPhotos = [
  { src: "/images/anniv/worship-team.jpg", caption: "The worship team opens the celebration", label: "Worship", layout: "big" },
  { src: "/images/anniv/dance-ribbons.jpg", caption: "Dancers with ribbons", label: "Dance", layout: "standard" },
  { src: "/images/anniv/kids-group.jpg", caption: "The children of the church", label: "Children", layout: "standard" },
  { src: "/images/anniv/family-group.jpg", caption: "Families gathered for a photo", label: "Family", layout: "wide" },
  { src: "/images/anniv/shared-table.jpg", caption: "The shared meal", label: "Fellowship", layout: "tall" },
  { src: "/images/anniv/presentation.jpg", caption: "A presentation on stage", label: "Honour", layout: "standard" },
  { src: "/images/anniv/stage-speaker.jpg", caption: "The stage during the celebration", label: "Welcome", layout: "standard" },
  { src: "/images/anniv/preaching.jpg", caption: "Preaching beside the church banner", label: "The Word", layout: "tall", focus: "center 22%" },
  { src: "/images/anniv/dance.jpg", caption: "The tambourine dance team", label: "Praise", layout: "wide" },
  { src: "/images/anniv/laughter.jpg", caption: "Sharing a laugh", label: "Joy", layout: "tall", focus: "center 38%" },
  { src: "/images/anniv/stage-wide.jpg", caption: "The room during worship", label: "Together", layout: "most", focus: "center 55%" },
];

export const nextStepsFirstSteps = [
  {
    step: "Step one",
    title: "Come on Sunday",
    text: "Join us at 3:30 PM at 86 Ainsworth Street, Mawson.",
    link: { label: "Plan a visit", to: "/visit" },
  },
  {
    step: "Step two",
    title: "Join a Bible study",
    text: "Combined, youth and cell group studies meet every fortnight.",
    link: { label: "See the times", to: "/gatherings" },
  },
  {
    step: "Step three",
    title: "Pray with us",
    text: "The prayer meeting gathers on Thursdays at 86 Ainsworth Street.",
  },
];

export const visitQuestions = [
  {
    question: "Do I need to be a Christian to come?",
    answer: "No. Whoever you are and whatever you believe, you are welcome to come and see.",
  },
  {
    question: "Can I bring my children?",
    answer:
      "Yes. Children and young people are part of our church family, and families are welcome every Sunday.",
  },
  {
    question: "What else happens during the week?",
    answer:
      "We meet for prayer on Thursdays and for Bible study every fortnight. See the Gatherings page for the full list.",
  },
  {
    question: "What does the church believe?",
    answer:
      "Our Statement of Faith sets out seven truths we stand on. You can read it on the What We Believe page.",
  },
];
