import basicdate from './components/form1.vue';
import question from './components/form2.vue';
import consultation from './components/form3.vue';
import confirmation from './components/form4.vue';
 
export const routes = [
  { path: '/basicdate', component: basicdate },
  { path: '/question', component: question },
  { path: '/consultation', component: consultation },
  { path: '/confirmation', component: confirmation },
];