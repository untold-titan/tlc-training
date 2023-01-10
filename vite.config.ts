import {resolve} from "path";
import {defineConfig} from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                // This is where I tell Vite what HTML files to include. 
                // This HAS to be done for every page, to allow it to be hosted on Netlify. 
                // Not required if hosting off a Static Server
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about-us.html'),
                training: resolve(__dirname, 'training.html'),
                news: resolve(__dirname, 'news.html'),
            }
        }
    }
})