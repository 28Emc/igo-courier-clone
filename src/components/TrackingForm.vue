<template>
    <form @submit.prevent="trackPackage()" id="trackingForm"
        class="flex flex-row justify-items-center items-center gap-3 py-4 max-w-screen-xl mx-auto">
        <label for="simple-search" class="sr-only">Buscar</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-300" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <input id="trackingCode" name="trackingCode" v-model="trackingCode" v-bind:disabled="loading" type="text"
                class="w-full block p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                  bg-gray-50 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 placeholder:text-gray-400 focus:border-gray-50 focus:ring-gray-50 disabled:cursor-not-allowed transition"
                :class="{ 'border-red-500 dark:border-red-500': v$.trackingCode?.$error }"
                @blur="v$.trackingCode.$touch" placeholder="Ingresar código de envío" />
        </div>
        <button type="submit" v-if="!trackingRes" v-bind:disabled="loading"
            class="tracking-btn flex items-center text-nowrap px-4 py-2 text-md font-medium text-gray-dark rounded-lg bg-igo-light-bg-button
                      dark:text-gray-700 transition disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed">
            <svg v-if="loading" aria-hidden="true" role="status" class="w-4 h-4 me-3 text-gray-dark animate-spin"
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-location">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
            <span v-if="!loading" class="ml-2">Buscar</span>
        </button>
        <button v-if="trackingRes" type="button" class="tracking-clear-btn flex text-nowrap px-4 py-2 text-md font-medium text-igo-light-bg rounded-lg bg-red-500 hover:bg-red-700 hover:text-igo-light-bg
                    dark:text-igo-light-bg dark:hover:text-igo-light-bg transition" @click.prevent="clearSearch()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-trash-x">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7h16" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                <path d="M10 12l4 4m0 -4l-4 4" />
            </svg>
            <span class="ml-2">Limpiar</span>
        </button>
    </form>

    <div v-if="trackingRes"
        class="bg-gray-50 border border-gray-300 rounded-md shadow-sm flex flex-col md:flex-row mx-auto gap-10 px-4 py-8 max-w-screen-xl">

        <div class="tracking-cab w-full sm:basis-1/2 basis-full flex flex-col">
            <p
                class="track-id text-gray-700 font-normal animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                Datos generales de paquete
            </p>
            <p
                class="track-tipo-1 text-igo-light-icon font-bold text-2xl py-3 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                {{ trackingRes['service']['nombre'] || 'Tipo servicio no definido' }} - {{
                    trackingRes['package']['packagesize']['nombre'] || 'Tipo paquete no definido' }}
            </p>
            <p
                class="track-tipo-2 text-igo-light-text font-semibold text-sm animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                {{ trackingRes['package']['alto'] + ' cm * ' + trackingRes['package']['largo'] + ' cm * ' +
                    trackingRes['package']['ancho'] + ' cm | ' + trackingRes['package']['peso'] + ' kg' }}
            </p>
            <div class="track-direcciones flex flex-row justify-between gap-10 pt-3">
                <div
                    class="track-origen text-sm flex flex-col items-start animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                    <p class="track-origen-dir font-semibold text-gray-700 text-left">
                        {{ trackingRes['direccion_origen'] }}
                    </p>
                    <p class="track-destino-fecha text-gray-700">
                        {{ trackingRes['fecha_recojo'] }}
                    </p>
                </div>
                <div
                    class="track-destino text-sm flex flex-col items-end animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                    <p class="track-destino-dir font-semibold text-gray-700 text-right">
                        {{ trackingRes['package']['direccion_destino'] }}
                    </p>
                    <p class="track-destino-fecha text-gray-700">
                        {{ trackingRes['package']['fecha_entrega'] }}
                    </p>
                </div>
            </div>
            <div class="flex flex-row justify-between gap-5 pt-4">
                <div class="flex items-center w-full">
                    <span
                        class="track-origen-icon px-3 text-igo-light-icon animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                        <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <div
                        class="flex-1 border-t-2 border-gray-400 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                    </div>
                    <span
                        class="track-envio-icon px-3 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                        <svg class="w-8 h-8 bg-igo-dark-bg text-igo-light-bg dark:bg-igo-dark-bg rounded-full animate-fade-right animate-once animate-duration-[500ms] animate-delay-[300ms] animate-ease-in-out"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>
                    </span>
                    <div
                        class="flex-1 border-t-2 border-gray-400 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                    </div>
                    <span
                        class="track-destino-icon px-3 text-igo-light-icon animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                        <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <hr
            class="h-px bg-gray-300 border-0 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in md:hidden block">
        <div
            class="tracking-det w-full sm:basis-1/2 basis-full animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in">
            <p
                class="track-id text-gray-700 font-normal animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                Seguimiento
            </p>

            <div v-if="trackingRes['package']['statuses'] && trackingRes['package']['statuses'].length > 0"
                class="flex flex-col items-center w-full py-3">
                <div v-for="(estado, index) of trackingRes['package']['statuses']">
                    <div
                        class="grid grid-cols-3 gap-5 w-full animate-fade-up animate-once animate-duration-[400ms] animate-ease-in">
                        <span class="text-sm text-right col-span-1 my-auto text-gray-700">
                            {{ estado['created_at'] }}
                        </span>
                        <span
                            class="text-igo-light-icon track-origen-icon mx-auto my-auto animate-fade-up animate-once animate-duration-[400ms] animate-ease-in">
                            <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span class="text-sm text-left text-gray-600 col-span-1 my-auto">
                            {{ estado['description'] }}
                        </span>
                    </div>

                    <div v-if="index < trackingRes['package']['statuses'].length - 1"
                        class="flex-1 border-l-2 border-gray-400 animate-fade-up animate-once animate-duration-[400ms] animate-ease-in">
                    </div>
                </div>
            </div>

            <p v-else
                class="py-6 text-lg text-justify text-gray-700 font-semibold animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">
                Próximamente se agregará mayor información sobre el estado de tu paquete.
            </p>
        </div>
    </div>
</template>
<script>
import { toast } from 'sonner';
import { trackingByCode, OK } from '../services/TrackingService';
import { ESTADOS } from "../static/EstadosEnvios.constant";
import { DateTime } from 'luxon';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    data() {
        return {
            v$: useVuelidate(),
            trackingCode: '',
            loading: false,
            trackingRes: null,
            estadosList: []
        }
    },
    validations() {
        return {
            trackingCode: { required }
        }
    },
    mounted() {
        this.clearSearch();
    },
    methods: {
        async trackPackage() {
            if (await this.isInvalidForm()) {
                toast.warning('Código de tracking requerido.');
                return;
            }

            this.loading = true;
            const response = await trackingByCode(this.trackingCode);
            this.loading = false;

            if (response.code !== OK) {
                toast.error(response.error);
                this.clearSearch();
                return;
            }

            this.trackingRes = response.data;
            this.setStatuses(this.trackingRes);
        },
        async isInvalidForm() {
            const result = await this.v$.$validate();
            return !result;
        },
        setStatuses(trackingRes) {
            const estadosList = new Map(ESTADOS.map(obj => ([obj.id, obj.descripcion])));
            trackingRes['package']['statuses'].forEach(status => {
                status['description'] = estadosList.get(+status['package_status_id']);
                status['created_at'] = this.formatDate(status['created_at']);
                return status;
            });
        },
        formatDate(dateString, inputFormat = 'yyyy-MM-dd hh:mm:ss', outputFormat = 'dd/MM/yyyy hh:mm:ss') {
            return DateTime.fromFormat(dateString, inputFormat).toFormat(outputFormat);
        },
        clearSearch() {
            this.trackingCode = '';
            this.loading = false;
            this.trackingRes = null;
            this.v$.$reset();
        }
    },
}
</script>
<style></style>
