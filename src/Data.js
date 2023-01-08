import AboutImg from './assets/imgs/DrawKit Vector Illustration Project Manager (5).svg'
import HeroImg from './assets/imgs/DrawKit Vector Illustration Project Manager (6).svg'
import Avatar1 from './assets/imgs/DrawKit Vector Illustration Project Manager (4).svg'
import Avatar2 from './assets/imgs/DrawKit Vector Illustration Project Manager (6).svg'
import Feature1Img from './assets/fetures/DrawKit Vector Illustration Project Manager (13).svg'
import Feature2Img from './assets/fetures/DrawKit Vector Illustration Project Manager (14).svg'
import Feature3Img from './assets/fetures/DrawKit Vector Illustration Project Manager (15).svg'
import Feature4Img from './assets/fetures/DrawKit Vector Illustration Project Manager (16).svg'
import LogoV2 from './assets/fetures/DrawKit Vector Illustration Project Manager (17).svg'


export const navigationData = [
    {
        name: 'Gallery',
        href: '#gallery'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Features',
        href: '#features'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
]

export const heroData = {
    title: `Lorem Ipsum is simply dummy text`,
    subtitle: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    `,
    btnText: `Get Started`,
    image: Avatar1
};

export const aboutData = {
    image: AboutImg,
    title: `Find out A Little More About Us`,
    subtitle: `
    We are a company dedicated to the distrbution of products by delivery to your home or to the place where your are,
    `
}



export const featruesData = {
    title: 'Some Services We Offer',
    subtitle: 'With our app you can view the route of your order',
    list: [
        {
            image: Feature1Img,
            title: 'Payment Done',
            description: 'Pay with a Visa or PayPayl Card withoud much ad',
            linkText: 'Learn more',
            delay: '400'
        },
        {
            image: Feature2Img,
            title: 'Find Your Product',
            description: 'We offer sale on products in interent',
            linkText: 'Learn more',
            delay: '1000'
        },
        {
            image: Feature3Img,
            title: 'Payment Done',
            description: 'Pay with a Visa or PayPayl Card withoud much ad',
            linkText: 'Learn more',
            delay: '1000'
        },
        {
            image: Feature4Img,
            title: 'Payment Done',
            description: 'Pay with a Visa or PayPayl Card withoud much ad',
            linkText: 'Learn more',
            delay: '1300'
        },

    ]
}


export const galleryData = [
    {
        title: ' first work',
        message: 'the best work in the world1',
        image: HeroImg,
        delay: '300'
    },
    {
        title: ' second work',
        image: AboutImg,
        message: 'the best work in the world2',
        delay: '400'
    },
    {
        title: ' third work',
        image: Feature1Img,
        message: 'the best work in the world3',
        delay: '500'
    },
    {
        title: ' fourt work',
        image: Feature3Img,
        message: 'the best work in the world4',
        delay: '600'
    },
]



export const footerData = {
    title: 'Contact Us From Here',
    subtitle: 'Get Limited 1 week free try',
    btn1: 'leaern more',
    btn2: 'Request Demo'
}


export const footerItems = {
    productds: [
        {
            name: 'Drag And Drop', link: '#',
        },
        {
            name: 'Visual Studio X', link: '#',
        },
        {
            name: 'Easy Content', link: '#',
        },
    ],
    company: [
        {
            name: 'Diversity & iusion', link: '#'
        },
        {
            name: 'About us', link: '#'
        },
        {
            name: 'Press', link: '#'
        },
        {
            name: 'Services', link: '#'
        },
    ]
}


export const footerIcons = [
    { name: "logo-facebook", link: "#" },
    { name: "logo-twitter", link: "#" },
    { name: "logo-github", link: "#" },
    { name: "logo-linkedin", link: "#" },
    { name: "logo-instagram", link: "#" },
];