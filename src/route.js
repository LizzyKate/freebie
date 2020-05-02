import home from './components/page1/home';
import shop from './components/page2/shop';
import cart from './components/page3/cart'
import blog from './components/page4/blog';
import info from './components/page5/info';
import about from './components/page6/About';
import contact from './components/page7/contact';
import questions from './components/additions/questions';
import checkout from './components/additions/checkout/sum';
import drop from './components/additions/drop'

export default [
    { path: '/', component: home },
    { path: '/shop', name: 'shop', component: shop },
    { path: '/cart/', component: cart },
    { path: '/cart/:id', component: cart },
    { path: '/blog', component: blog },
    { path: '/info', component: info },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/questions', component: questions },
    { path: '/checkout', component: checkout },
    { path: '/drop', component: drop }
]