import { createRouter, createWebHistory } from "vue-router"; 
import Index from '@/views/Index.vue'
import TestView1 from '@/views/testView1.vue'
import TestView2 from '@/views/testView2.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/TestView1',
        name: 'TestView1',
        component: TestView1
    },
    {
        path: '/TestView2',
        name: 'TestView2',
        component: TestView2
    }
]
})

export default router;