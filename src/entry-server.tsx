// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en" class="dark">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {assets}
                </head>
                <body class="relative bg-gray-50 text-gray-950 selection:bg-red-500 selection:text-white dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
