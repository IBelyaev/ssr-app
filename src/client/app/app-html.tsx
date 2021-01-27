import React from 'react'

type Props = {
    scriptNames: string[];
    children: string;
};

const AppHtml = React.memo(({ children, scriptNames }: Props) => {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <title>Тестовый проект</title>
            </head>
            <body>
                <div id='react-container' dangerouslySetInnerHTML={{ __html: children}}/>
            </body>
            {
                scriptNames.map(name => <script key={name} src={name} />)
            }
        </html>
    )
});

export default AppHtml;