
import Home from '../Components/Home'
import Login from '../Components/OpenPage/Login'
import Test from '../Components/Pages/Test'
import FormicForm from '../Components/Forms/Formic'
import CustomHooksDemo from '../Components/Dropdown'
import DexieDemo from '../Components/Database/DexieDemo'
import User from '../Components/JsonPlaceholder/User'
import About from '../Components/About/About'
import ES6 from '../Components/Javascript/ES6/ES6'
import JavaScriptMain from '../Components/Javascript/Programming/Main'
const config = {

    menuItems: [
        {
            name: 'Home',
            path: '/Home',
            component: Home,
        },
        {
            name: 'Test',
            path: '/Test',
            component: Test,
        },
        {
            name: 'Components',
            children: [{
                name: 'Froms',
                children: [
                    {
                        name: 'Formic',
                        path: '/Components/Forms/Formic',
                        component: FormicForm,
                    }
                ]
            }]
        },
        {
            name: 'Javascript Concepts',
            children: [{
                name: 'JavaScript ES6',
                path: '/Components/Javascript/ES6',
                component: ES6,
                children: []
            },
            {
                name: 'Programming',
                children: [{
                    name: 'Programming',
                    path: '/Components/Javascript/Programming/Main',
                    component: JavaScriptMain
                }]
            }]
        },
        {
            name: 'CSS',
            children: [{
                name: 'Gradient',
                path: '/Test2',
                component: ES6,
                children: []
            }]
        },
        {
            name: 'HooksConcepts',
            children: [{
                name: 'CustomHooksDemo',
                path: '/Components/Dropdown',
                component: CustomHooksDemo,
                children: []
            }]

        },
        {
            name: 'DatabaseConcept',
            children: [{
                name: 'Dexie Database',
                path: '/Components/Database/DexieDemo',
                component: DexieDemo,
                children: []
            }]

        },
        {
            name: 'Pages',
            children: [{
                name: 'Login',
                path: '/Login',
                component: Login,
                openPage: true,
                children: []
            }]
        },
        {
            name: 'Api',
            children: [{
                name: 'JsonPlaceHolder',
                children: [{
                    name: 'JsonPlaceHolder User',
                    path: '/Api/JsonPlaceHolder/Users',
                    component: User,
                }]
            }]
        },
        {
            name: 'AboutUS',
            path: '/About',
            component: About,
            children: []
        }
    ]
}
export { config }