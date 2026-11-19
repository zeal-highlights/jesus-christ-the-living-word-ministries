// Each icon is a list of SVG shapes drawn in a 24x24 viewBox.
export const beliefs = [
  {
    id: "bible",
    title: "The Bible",
    statement:
      "We believe the Bible is the inspired, infallible, and authoritative Word of God.",
    icon: [
      {
        type: "path",
        d: "M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5zM12 6v13",
      },
    ],
  },
  {
    id: "one-god",
    title: "One God",
    statement:
      "We believe in one God eternally existing in three Persons: Father, Son, and Holy Spirit.",
    icon: [
      { type: "circle", cx: 12, cy: 8.5, r: 4.5 },
      { type: "circle", cx: 8, cy: 15, r: 4.5 },
      { type: "circle", cx: 16, cy: 15, r: 4.5 },
    ],
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    statement:
      "We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, ascension, and personal return.",
    icon: [{ type: "path", d: "M12 3v18M6.5 8.5h11" }],
  },
  {
    id: "salvation",
    title: "Salvation",
    statement:
      "We believe salvation is by grace through faith in Christ alone, resulting in the born-again experience.",
    icon: [
      {
        type: "path",
        d: "M12 20s-7-4.3-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5C19 15.7 12 20 12 20z",
      },
    ],
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    statement:
      "We believe in the present ministry of the Holy Spirit, empowering believers for holy living, service, and evangelism.",
    icon: [
      {
        type: "path",
        d: "M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.2 2-4 .2 1.5 1 2.3 2 2.5C10.5 9 11 5.5 12 3z",
      },
    ],
  },
  {
    id: "church",
    title: "The Church",
    statement:
      "We believe the Church is the Body of Christ, called to worship, fellowship, discipleship, and the Great Commission.",
    icon: [
      { type: "path", d: "M12 3v4M10 5h4M6 21V12l6-5 6 5v9zM10 21v-5h4v5" },
    ],
  },
  {
    id: "eternity",
    title: "Eternity",
    statement:
      "We believe in the resurrection of the dead, final judgment, and eternal life for believers.",
    icon: [
      {
        type: "path",
        d: "M7.5 15.5a3.5 3.5 0 1 1 0-7c3 0 6 7 9 7a3.5 3.5 0 1 0 0-7c-3 0-6 7-9 7z",
      },
    ],
  },
];
