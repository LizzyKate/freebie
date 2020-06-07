import home from "./components/page1/home";
import shop from "./components/page2/shop";
import cart from "./components/page3/cart";
import blog from "./components/page4/blog";
import info from "./components/page5/info";
import about from "./components/page6/About";
import contact from "./components/page7/contact";
import questions from "./components/additions/questions";
import checkout from "./components/additions/checkout/sum";
import drop from "./components/additions/drop";
import signup from "./components/additions/signup";

export default [
    { path: "/", name: "home", component: home },
    { path: "/home", name: "newHome", component: home },
    { path: "/shop", name: "shop-general", component: shop },
    { path: "/shop/:shop", name: "shop", component: shop },
    { path: "/cart/:id", name: "newCart", component: cart },
    { path: "/blog", name: "blog", component: blog },
    { path: "/info", name: "info", component: info },
    { path: "/about", name: "about", component: about },
    { path: "/contact", name: "contact", component: contact },
    { path: "/questions", name: "quest", component: questions },
    { path: "/checkout", name: "check", component: checkout },
    { path: "/drop", name: "drop", component: drop },
    { path: "/signup", name: "signup", component: signup },
];
