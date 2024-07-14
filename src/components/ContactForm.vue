<template>
    <form @submit.prevent="postContactForm()" class="space-y-8">
        <div class="flex md:flex-row flex-col gap-5">
            <div class="w-full">
                <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Nombre
                </label>
                <input type="text" id="nombre" name="nombre" v-model="nombre" v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu nombre" required />
            </div>
            <div class="w-full">
                <label for="apellido_paterno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Apellido Paterno
                </label>
                <input type="text" id="apellido_paterno" name="apellido_paterno" v-model="apellido_paterno"
                    v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu apellido paterno" required />
            </div>
            <div class="w-full">
                <label for="apellido_materno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Apellido Materno
                </label>
                <input type="text" id="apellido_materno" name="apellido_materno" v-model="apellido_materno"
                    v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu apellido materno" required />
            </div>
        </div>

        <div class="flex md:flex-row flex-col gap-5">
            <div class="w-full">
                <label for="correo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Correo
                </label>
                <input type="email" id="correo" name="correo" v-model="correo" v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="example@email.com" required />
            </div>
            <div class="w-full">
                <label for="telefono" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Teléfono
                </label>
                <input type="text" id="telefono" name="telefono" v-model="telefono" v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="987654321" required />
            </div>
            <div class="w-full">
                <label for="rubro" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Rubro
                </label>
                <input type="text" id="rubro" name="rubro" v-model="rubro" v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu rubro" required />
            </div>
        </div>

        <div class="flex md:flex-row flex-col gap-5">
            <div class="w-full">
                <label for="servicio"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Servicio</label>
                <select id="servicio" name="servicio" v-model="servicio" v-bind:disabled="loading"
                    class="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 dark:placeholder:text-gray-300 placeholder:text-gray-200 border-gray-300 text-gray-900 dark:text-gray-400 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed">
                    <option value="" class="text-gray-300">Seleccionar un tipo de servicio</option>
                    <option v-for="item in tiposDeServiciosCbo" :value=item.descripcion>
                        {{ item.descripcion }}
                    </option>
                </select>
            </div>
            <div class="w-full">
                <label for="rango_envio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rango
                    de envío (mensual)</label>
                <select id="rango_envio" name="rango_envio" v-model="rango_envio" v-bind:disabled="loading"
                    class="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 dark:placeholder:text-gray-300 placeholder:text-gray-200 border-gray-300 text-gray-900 dark:text-gray-400 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed">
                    <option value="" class="text-gray-300">Seleccionar un rango de envío</option>
                    <option v-for="item in rangoEnviosMensualCbo" :value=item.descripcion>
                        {{ item.descripcion }}
                    </option>
                </select>
            </div>
            <div class="w-full">
                <label for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                <input type="text" id="subject" name="asunto" v-model="asunto" v-bind:disabled="loading"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Haznos saber en que podemos ayudarte" required />
            </div>
        </div>

        <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Mensaje
            </label>
            <textarea id="message" rows="6" name="mensaje" v-model="mensaje" v-bind:disabled="loading"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button"
                placeholder="Deja tu comentario aqui" required></textarea>
        </div>
        <button type="submit" v-bind:disabled="loading"
            class="text-nowrap flex w-full sm:w-auto py-3 px-5 text-sm font-medium text-center text-gray-dark dark:text-igo-light-text rounded-lg bg-igo-light-bg-button hover:bg-igo-hover-bg-button hover:text-igo-light-bg dark:hover:text-igo-light-bg dark:bg-igo-light-bg-button dark:hover:bg-igo-light-text disabled:bg-gray-400 disabled:text-gray-dark">
            <svg v-if="loading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-dark animate-spin"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor" />
            </svg>
            <span v-if="loading">Espere...</span>
            <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            <span v-if="!loading" class="ml-2">Enviar Mensaje</span>
        </button>
    </form>
</template>
<script>
import { toast } from "sonner";
import { sendContactForm } from "../services/ContactService";
import { HOME_DATA } from "../static/Home.data";

let loading = false;

export default {
    data() {
        return {
            nombre: "",
            apellido_paterno: "",
            apellido_materno: "",
            correo: "",
            telefono: "",
            rubro: "",
            servicio: "",
            rango_envio: "",
            asunto: "",
            mensaje: "",
            status: 1,
            tiposDeServiciosCbo: [],
            rangoEnviosMensualCbo: [],
            loading: false,
            contactRes: null
        }
    },
    mounted() {
        this.tiposDeServiciosCbo = HOME_DATA.section_servicios.services.map(
            servicio => ({ descripcion: servicio.title })
        );
        this.rangoEnviosMensualCbo = [{
            descripcion: "Menos de 20",
        },
        {
            descripcion: "De 21 a 50",
        },
        {
            descripcion: "De 51 a 90",
        },
        {
            descripcion: "90 a más",
        }];
        this.clearContactForm();
    },
    methods: {
        async postContactForm() {
            if (this.isInvalidForm()) {
                toast.warning('Rellenar todos los campos.');
                return;
            }

            const formData = {
                nombre: this.nombre,
                apellido_paterno: this.apellido_paterno,
                apellido_materno: this.apellido_materno,
                correo: this.correo,
                telefono: this.telefono,
                rubro: this.rubro,
                servicio: this.servicio,
                rango_envio: this.rango_envio,
                asunto: this.asunto,
                mensaje: this.mensaje,
                status: 1
            };

            this.loading = true;
            const response = await sendContactForm(formData);
            this.loading = false;

            if (!response.success) {
                toast.error(response.error);
                this.clearContactForm();
                return;
            }

            this.contactRes = response;
            toast.success(response.data);
            this.clearContactForm();
        },
        isInvalidForm() {
            return this.servicio === "" || this.rango_envio === "";
        },
        clearContactForm() {
            this.nombre = "";
            this.apellido_paterno = "";
            this.apellido_materno = "";
            this.correo = "";
            this.telefono = "";
            this.rubro = "";
            this.servicio = "";
            this.rango_envio = "";
            this.asunto = "";
            this.mensaje = "";
            this.status = 1;
            this.loading = false;
            this.contactRes = null;
        }
    }
}
</script>
<style></style>
