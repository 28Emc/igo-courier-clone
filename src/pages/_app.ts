import { createNotivue } from 'notivue/astro'

export default (app: any) => {
    const notivue = createNotivue({
        position: 'bottom-center',
        notifications: {
            global: {
                duration: 5000
            }
        }
    });
    app.use(notivue);
}
