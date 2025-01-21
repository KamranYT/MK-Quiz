export const quiz = {
    questions: [
        {
            id: 1,
            question: 'What is the primary feature of Next.js that differentiates it from a standard React app?',
            answers: [
                'It provides a virtual DOM.',
                'It enables server-side rendering (SSR).',
                'It uses TypeScript by default.',
                'It doesn\'t support client-side routing.'
            ],
            correctAnswer: 'It enables server-side rendering (SSR).'
        },
        {
            id: 2,
            question: 'Which of the following is a feature provided by Next.js for optimizing performance and development?',
            answers: [
                'Built-in CSS support',
                'API Routes',
                'Static Site Generation (SSG)',
                'All of the above'
            ],
            correctAnswer: 'All of the above'
        },
        {
            id: 3,
            question: 'In Next.js, which function is used to fetch data at build time for Static Site Generation (SSG)?',
            answers: [
                'getServerSideProps',
                'getInitialProps',
                'getStaticProps',
                'getStaticPaths'
            ],
            correctAnswer: 'getStaticProps'
        },
        {
            id: 4,
            question: 'Which of the following methods is used in Next.js to define dynamic routes?',
            answers: [
                'Using query strings',
                'Using folders with square brackets in the `pages` directory',
                'Using the `Router` component',
                'Using a special configuration file'
            ],
            correctAnswer: 'Using folders with square brackets in the `pages` directory'
        },
        {
            id: 5,
            question: 'What is the purpose of the `getServerSideProps` function in Next.js?',
            answers: [
                'To fetch data at build time',
                'To fetch data on the client side',
                'To fetch data on each request at runtime',
                'To prefetch links for faster navigation'
            ],
            correctAnswer: 'To fetch data on each request at runtime'
        },
        {
            id: 6,
            question: 'Which file is used in Next.js to customize the default HTML structure of your application?',
            answers: [
                '_app.js',
                '_document.js',
                'index.js',
                '_html.js'
            ],
            correctAnswer: '_document.js'
        },
        {
            id: 7,
            question: 'Which of the following is true about API routes in Next.js?',
            answers: [
                'They are defined in the `api` directory under `pages`.',
                'They require an external server to function.',
                'They only work with POST requests.',
                'They do not support server-side code.'
            ],
            correctAnswer: 'They are defined in the `api` directory under `pages`.'
        },
        {
            id: 8,
            question: 'Which command is used to start a Next.js development server?',
            answers: [
                'next run',
                'next start',
                'next dev',
                'next build'
            ],
            correctAnswer: 'next dev'
        },
        {
            id: 9,
            question: 'What is the purpose of the `next/link` component?',
            answers: [
                'To add animations to navigation',
                'To link to external websites',
                'To enable client-side navigation between pages',
                'To fetch data from an API'
            ],
            correctAnswer: 'To enable client-side navigation between pages'
        },
        {
            id: 10,
            question: 'Which feature allows Next.js to automatically optimize images?',
            answers: [
                'next/image',
                'next/optimize',
                'next/media',
                'next/auto-img'
            ],
            correctAnswer: 'next/image'
        },
        {
            id: 11,
            question: 'In Next.js, what is the default behavior of pages inside the `pages` directory?',
            answers: [
                'They are treated as server-side rendered pages.',
                'They are ignored unless manually imported.',
                'They are automatically routed based on their file name.',
                'They must be explicitly configured in a routing file.'
            ],
            correctAnswer: 'They are automatically routed based on their file name.'
        },
        {
            id: 12,
            question: 'Which function in Next.js is used to pre-render pages with data during build time and generate paths dynamically?',
            answers: [
                'getServerSideProps',
                'getInitialProps',
                'getStaticProps',
                'getStaticPaths'
            ],
            correctAnswer: 'getStaticPaths'
        },
        {
            id: 13,
            question: 'What command is used to build a Next.js application for production?',
            answers: [
                'next build',
                'next run',
                'next start',
                'next deploy'
            ],
            correctAnswer: 'next build'
        },
        {
            id: 14,
            question: 'Which of the following best describes the `useRouter` hook in Next.js?',
            answers: [
                'It fetches data from the API.',
                'It provides access to the router object inside functional components.',
                'It manages application state.',
                'It is used to handle server-side rendering.'
            ],
            correctAnswer: 'It provides access to the router object inside functional components.'
        },
        {
            id: 15,
            question: 'What is the purpose of the `next/head` component?',
            answers: [
                'To manage application-wide styles',
                'To inject meta tags and other elements into the `<head>` of the document',
                'To handle authentication',
                'To set up server-side API routes'
            ],
            correctAnswer: 'To inject meta tags and other elements into the `<head>` of the document'
        },
        {
            id: 16,
            question: 'Which of the following commands is used to start a Next.js application in production mode?',
            answers: [
                'next run',
                'next prod',
                'next start',
                'next deploy'
            ],
            correctAnswer: 'next start'
        },
        {
            id: 17,
            question: 'In Next.js, what does the `next.config.js` file do?',
            answers: [
                'It is used to configure database connections.',
                'It allows customization of the Next.js server and build process.',
                'It manages application state.',
                'It handles CSS styling for the app.'
            ],
            correctAnswer: 'It allows customization of the Next.js server and build process.'
        },
        {
            id: 18,
            question: 'Which of the following methods in Next.js allows for client-side navigation between routes?',
            answers: [
                'window.location.href',
                'Router.push',
                'Link.move',
                'navigate'
            ],
            correctAnswer: 'Router.push'
        },
        {
            id: 19,
            question: 'What type of data fetching is most suitable for pages that need to show real-time data updates in Next.js?',
            answers: [
                'Static Site Generation (SSG)',
                'Incremental Static Regeneration (ISR)',
                'Client-side Rendering (CSR)',
                'Server-side Rendering (SSR)'
            ],
            correctAnswer: 'Server-side Rendering (SSR)'
        },
        {
            id: 20,
            question: 'What does ISR (Incremental Static Regeneration) in Next.js enable you to do?',
            answers: [
                'Fetch data at runtime on every request.',
                'Automatically refresh static pages at a specified interval without rebuilding the entire site.',
                'Perform client-side routing.',
                'Use server-side APIs to fetch data.'
            ],
            correctAnswer: 'Automatically refresh static pages at a specified interval without rebuilding the entire site.'
        }
    ] as {
        id: number;
        question: string;
        answers: string[];
        correctAnswer: string;
    }[],
};
