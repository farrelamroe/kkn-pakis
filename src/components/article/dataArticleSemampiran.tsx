type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleSemampiran = {
  [key: string]: Article;
};

export const dataArticleSemampiran: DataArticleSemampiran = {
  "pertemuan-dengan-kepala-dusun": {
    image: "/semampiran/week-1-hero.jpg",
    location: "Rumah Pak Bayan",
    title: "Pertemuan dengan Kepala Dusun",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
  "diskusi-dengan-kepala-dusun": {
    image: "/hero.jpg",
    location: "Rumah Pak Bayan",
    title: "Diskusi dengan Kepala Dusun",
    text: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </>
    ),
  },
};
