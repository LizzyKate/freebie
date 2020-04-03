import home from './components/page1/home.vue';
import shop from './components/page 2/shop.vue';
import blog from './components/page 4/blog.vue';
import info from './components/page 5/info';
import about from './components/page 6/about.vue';

export default[
    {path:'/',component: home},
    {path:'/shop', component:shop},
    {path:'/blog', component:blog},
    {path:'/info', component:info},
    {path:'/about', component:about}
]