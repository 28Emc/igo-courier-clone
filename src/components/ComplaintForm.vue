<template>
    <form @submit.prevent="postComplaintForm()" class="space-y-8">
        <p
            class="text-2xl text-igo-light-text font-semibold animate-fade-up animate-once animate-duration-[500ms] animate-ease-in">
            Datos personales
        </p>
        <div
            class="flex flex-col sm:flex-row gap-5 animate-fade-up animate-once animate-duration-[500ms] animate-ease-in">
            <div class="basis-full">
                <label for="nombre_completo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Nombre Completo
                </label>
                <input type="text" id="nombre_completo" name="nombre_completo" v-model="nombre_completo"
                    v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu nombre completo" required />
            </div>
            <div class="basis-full">
                <label for="numero_documento" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Nro. Documento
                </label>
                <input type="text" id="numero_documento" name="numero_documento" v-model="numero_documento"
                    v-bind:disabled="loading"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text-button focus:border-igo-light-text-button block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu nro. de documento" required />
            </div>
        </div>
        <div
            class="flex flex-col sm:flex-row gap-5 animate-fade-up animate-once animate-duration-[600ms] animate-ease-in">
            <div class="basis-full">
                <label for="direccion"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dirección</label>
                <input type="text" id="direccion" name="direccion" v-model="direccion" v-bind:disabled="loading"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu dirección" required />
            </div>
            <div class="basis-full">
                <label for="referencia"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Referencia
                    (Opcional)</label>
                <input type="text" id="referencia" name="referencia" v-model="referencia" v-bind:disabled="loading"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe tu dirección" />
            </div>
        </div>

        <p
            class="text-2xl text-igo-light-text font-semibold animate-fade-up animate-once animate-duration-[600ms] animate-ease-in">
            Datos Incidencia
        </p>
        <div
            class="flex flex-col sm:flex-row gap-5 animate-fade-up animate-once animate-duration-[600ms] animate-ease-in">
            <div class="basis-full">
                <label for="titulo"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titulo</label>
                <input type="text" id="titulo" name="titulo" v-model="titulo" v-bind:disabled="loading"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button dark:shadow-sm-light"
                    placeholder="Escribe un título para tu incidencia" />
            </div>
            <div class="basis-full">
                <label for="tipo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo</label>
                <select id="tipo" name="tipo" v-model="tipo" v-bind:disabled="loading"
                    class="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 dark:placeholder:text-gray-300 placeholder:text-gray-200 border-gray-300 text-gray-900 dark:text-gray-400 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed">
                    <option value="" class="text-gray-300">Seleccionar un tipo de incidencia</option>
                    <option v-for="item in tiposDeIncidenciaCbo" :value=item.descripcion>
                        {{ item.descripcion }}
                    </option>

                </select>
            </div>
        </div>
        <div class="basis-full animate-fade-up animate-once animate-duration-[700ms] animate-ease-in">
            <label for="descripcion_incidencia" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Descripción Incidencia
            </label>
            <textarea id="descripcion_incidencia" rows="6" name="descripcion_incidencia"
                v-model="descripcion_incidencia" v-bind:disabled="loading"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button"
                placeholder="Escribe la descripción de tu incidencia" required></textarea>
        </div>
        <div class="basis-full animate-fade-up animate-once animate-duration-[700ms] animate-ease-in">
            <label for="pedido_sugerencia" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Pedido / Sugerencia (Opcional)
            </label>
            <textarea id="pedido_sugerencia" rows="6" name="pedido_sugerencia" v-model="pedido_sugerencia"
                v-bind:disabled="loading"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-igo-light-text-button focus:border-igo-light-text-button dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-igo-light-text-button"
                placeholder="Escribe tu pedido u sugerencia"></textarea>
        </div>
        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-dark dark:text-igo-light-text rounded-lg bg-igo-light-bg-button sm:w-fit hover:bg-igo-hover-bg-button hover:text-igo-light-bg dark:hover:text-igo-light-bg dark:bg-igo-light-bg-button dark:hover:bg-igo-light-text disabled:bg-gray-400 disabled:text-gray-dark
              animate-fade-up animate-once animate-duration-[800ms] animate-ease-in">
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
            <span v-if="!loading">Enviar Mensaje</span>
        </button>
    </form>
</template>
<script>
import { toast } from "sonner";
import { sendComplaintForm } from "../services/ComplaintService";

let loading = false;

export default {
    data() {
        return {
            nombre_completo: "",
            numero_documento: "",
            direccion: "",
            referencia: "",
            titulo: "",
            tipo: "",
            descripcion_incidencia: "",
            pedido_sugerencia: "",
            status: 1,
            tiposDeIncidenciaCbo: [
                { id: 1, descripcion: 'Queja' },
                { id: 2, descripcion: 'Reclamo' },
            ],
            loading: false,
            complaintRes: null
        }
    },
    methods: {
        async postComplaintForm() {
            if (this.isInvalidForm()) {
                toast.warning('Rellenar todos los campos.');
                return;
            }

            const formData = {
                nombre_completo: this.nombre_completo,
                numero_documento: this.numero_documento,
                direccion: this.direccion,
                referencia: this.referencia,
                titulo: this.titulo,
                tipo: this.tipo,
                descripcion_incidencia: this.descripcion_incidencia,
                pedido_sugerencia: this.pedido_sugerencia,
                status: 1
            };

            this.loading = true;
            const response = await sendComplaintForm(formData);
            this.loading = false;

            if (!response.success) {
                toast.error(response.error);
                this.clearComplaintForm();
                return;
            }

            this.complaintRes = response;
            toast.success(response.data);
            this.clearComplaintForm();
        },
        isInvalidForm() {
            return this.tipo === "";
        },
        clearComplaintForm() {
            this.nombre_completo = "";
            this.numero_documento = "";
            this.direccion = "";
            this.referencia = "";
            this.titulo = "";
            this.tipo = "";
            this.descripcion_incidencia = "";
            this.pedido_sugerencia = "";
            this.status = 1;
            this.loading = false;
            this.complaintRes = null;
        }
    }
}
</script>
<style></style>
