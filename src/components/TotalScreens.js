import MainContent from "./mainContent/MainContent";
import Navigation from "./navbar/Navbar";

export const TOTAL_SCREENS = [
  {
    screen_name: "Nav",
    component: Navigation,
  },
  {
    screen_name: "MainContent",
    component: MainContent,
  },
  //   {
  //     screen_name: "AboutMe",
  //     component: About,
  //   },
  //   {
  //     screen_name: "MyPortfolio",
  //     component: MyPortfolio,
  //   },
  //   {
  //     screen_name: "MyBlog",
  //     component: MyBlog,
  //   },
  //   {
  //     screen_name: "Contact",
  //     component: Contact,
  //   },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  return TOTAL_SCREENS.findIndex(
    (screen) => screen.screen_name === screen_name
  );
};
