<template>
    <form @submit.prevent="sendEstimatedPricingForm()"
        class="cotizador-form py-8 px-4 bg-gray-200 border border-gray-200 shadow-md rounded-xl">

        <div class="flex lg:flex-row flex-col gap-5">

            <div class="flex flex-col justify-start items-center gap-3 sm:basis-1/3 basis-full">
                <p
                    class="w-full pt-1 text-xl font-bold animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in">
                    Datos de envío</p>
                <div class="grid grid-flow-row grid-cols-1 gap-4 w-full">
                    <div
                        class="w-full animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in">
                        <label for="idTipoServicio" class="block mb-2 text-sm font-medium text-gray-900">
                            Servicio
                        </label>
                        <select id="idTipoServicio" name="idTipoServicio" v-model="idTipoServicio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:hover:cursor-not-allowed">
                            <option value="">Seleccionar un servicio</option>
                            <option v-for="item in tiposDeServicioCbo" :value="item.id">
                                {{ item.nombre }}
                            </option>
                        </select>
                    </div>
                    <div
                        class="w-full animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in">
                        <label for="idUbigeoOrigen" class="block mb-2 text-sm font-medium text-gray-900">
                            Distrito de Origen
                        </label>
                        <select id="idUbigeoOrigen" name="idUbigeoOrigen" v-model="idUbigeoOrigen"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:hover:cursor-not-allowed">
                            <option value="">Seleccionar un distrito</option>
                            <option v-for="item in distritosCbo" :value="item.id">
                                {{ item.ubigeo }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <hr class="lg:hidden block h-px my-6 bg-gray-400 border-0">

            <div class="flex flex-col sm:basis-2/3 basis-full">

                <div class="flex flex-row items-center pb-2">
                    <p
                        class="w-full text-xl font-bold animate-fade-up animate-once animate-duration-[400ms] animate-delay-[200ms] animate-ease-in">
                        Datos del paquete
                    </p>
                </div>

                <div id="paquetes" class="overflow-y-auto pr-0">

                    <div
                        class="w-full rounded-xl animate-flip-down animate-once animate-duration-[300ms] animate-ease-in-out">

                        <div class="grid sm:grid-cols-12 grid-cols-1 items-end gap-3 sm:py-3 py-1">
                            <div class="col-span-6 w-full">
                                <label for="idUbigeoDestino" class="block mb-2 text-sm font-medium text-gray-900">
                                    Distrito de Destino
                                </label>
                                <select id="idUbigeoDestino" name="idUbigeoDestino" v-model="idUbigeoDestino"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:hover:cursor-not-allowed">
                                    <option value="">Seleccionar un distrito</option>
                                    <option v-for="item in distritosCbo" :value="item.id">
                                        {{ item.ubigeo }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-span-6 w-full">
                                <label for="id" class="block mb-2 text-sm font-medium text-gray-900">
                                    Tipo de Paquete
                                </label>
                                <select id="id" name="id" v-model="id" @change="onTipoPaqueteChange(id)"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed">
                                    <option value="">Seleccionar un tipo</option>
                                    <option v-for="item in tiposDePaqueteCbo" :value="item.id">
                                        {{ item.nombre }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-span-3 w-full">
                                <label for="altoPaquete" class="block mb-2 text-sm font-medium text-gray-900">
                                    Alto Paquete (cm)
                                </label>
                                <input type="number" min="0.00" step="0.01" name="altoPaquete" id="altoPaquete"
                                    v-model="altoPaquete"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed"
                                    placeholder="0.00" required>
                            </div>
                            <div class="col-span-3 w-full">
                                <label for="anchoPaquete" class="block mb-2 text-sm font-medium text-gray-900">
                                    Ancho Paquete (cm)
                                </label>
                                <input type="number" min="0.00" step="0.01" name="anchoPaquete" id="anchoPaquete"
                                    v-model="anchoPaquete"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed"
                                    placeholder="0.00" required>
                            </div>
                            <div class="col-span-3 w-full">
                                <label for="largoPaquete" class="block mb-2 text-sm font-medium text-gray-900">
                                    Largo Paquete (cm)
                                </label>
                                <input type="number" min="0.00" step="0.01" name="largoPaquete" id="largoPaquete"
                                    v-model="largoPaquete"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed"
                                    placeholder="0.00" required>
                            </div>
                            <div class="col-span-3 w-full">
                                <label for="pesoPaquete" class="block mb-2 text-sm font-medium text-gray-900">
                                    Peso Paquete (kg)
                                </label>
                                <input type="number" min="0.00" step="0.01" name="pesoPaquete" id="pesoPaquete"
                                    v-model="pesoPaquete"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-igo-light-text focus:border-igo-light-text block w-full p-2.5 disabled:placeholder:text-gray-400 disabled:text-gray-400 disabled:hover:cursor-not-allowed"
                                    placeholder="0.00" required>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>

        <hr
            class="h-px my-8 bg-gray-400 border-0 animate-fade-up animate-once animate-duration-[400ms] animate-delay-[300ms] animate-ease-in">

        <div class="flex sm:flex-row flex-col sm:justify-start justify-end sm:items-center items-end gap-5">
            <button v-bind:disabled="loadingCotizacion" type="submit" class="w-full sm:w-auto text-nowrap px-5 py-3 text-sm font-medium bg-igo-light-icon
    rounded-lg text-igo-light-bg transition hover:bg-igo-hover-bg-button hover:translate-x-1 disabled:hover:cursor-not-allowed disabled:bg-gray-600
    animate-flip-down animate-once animate-duration-300 animate-delay-200 animate-ease-linear">
                <span v-if="loadingCotizacion">
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor" />
                    </svg>
                    Espere...
                </span>
                <span v-else>
                    Calcular Envío
                </span>
            </button>

            <p
                class="w-full sm:text-xl text-2xl text-right font-medium py-2 animate-flip-down animate-once animate-duration-300 animate-delay-200 animate-ease-linear">
                Precio estimado:
                <span class="bg-igo-dark-bg text-igo-light-bg rounded-lg px-4 py-2">
                    S/ {{ cotizacion }}
                </span>
            </p>
        </div>

        <div
            class="pt-1 text-right animate-flip-down animate-once animate-duration-300 animate-delay-200 animate-ease-linear">
            <p class="text-gray-500 text-sm">Las tarifas son referenciales. Las tarifas incluyen IGV.</p>
        </div>

    </form>
</template>
<script>
import { toast } from 'sonner';
import { fetchCustomLocations, fetchCustomPackageTypes, fetchCustomServiceTypes, OK, sendEstimatedPricingForm, SERVICIO_EXPRES_ID } from '../services/EstimatedPricingService';

export default {
    data() {
        return {
            idTipoServicio: '',
            idUbigeoOrigen: '',
            idUbigeoDestino: '',
            id: '',
            altoPaquete: '',
            anchoPaquete: '',
            largoPaquete: '',
            pesoPaquete: '',
            distritosCbo: [],
            tiposDeServicioCbo: [],
            tiposDePaqueteCbo: [],
            loadingCotizacion: false,
            cotizacion: 0,
            estimatedPricingRes: null
        }
    },
    mounted() {
        this.fetchLocations();
        this.fetchServiceTypes();
        this.fetchPackageTypes();
        this.clearEstimatedPricingForm();
    },
    methods: {
        async fetchLocations() {
            const paginationParams = {
                Page: 1,
                PerPage: 10000,
                Status: 1
            };
            this.loading = true;
            const response = await fetchCustomLocations(paginationParams);
            this.loading = false;

            if (response.code !== OK) {
                this.distritosCbo = [];
                toast.error(response.error);
                return;
            }

            this.distritosCbo = response.data;
            this.formatLocations(this.distritosCbo);
        },
        formatLocations(locations) {
            return locations.map(d => {
                d['ubigeo'] = d['departamento'] + ' - ' + d['provincia'] + ' - ' + d['distrito'];
                return d;
            });
        },
        async fetchServiceTypes() {
            const paginationParams = {
                Page: 1,
                PerPage: 10000,
                Status: 1
            };
            this.loading = true;
            const response = await fetchCustomServiceTypes(paginationParams);
            this.loading = false;

            if (response.code !== OK) {
                this.tiposDeServicioCbo = [];
                toast.error(response.error);
                return;
            }

            this.tiposDeServicioCbo = response.data;
        },
        async fetchPackageTypes() {
            const paginationParams = {
                Page: 1,
                PerPage: 10000,
                Status: 1
            };
            this.loading = true;
            const response = await fetchCustomPackageTypes(paginationParams);
            this.loading = false;

            if (response.code !== OK) {
                this.tiposDePaqueteCbo = [];
                toast.error(response.error);
                return;
            }

            this.tiposDePaqueteCbo = response.data;
        },
        onTipoPaqueteChange(id) {
            const paquete = this.tiposDePaqueteCbo.find(p => +p.id === +id);
            if (paquete) {
                this.altoPaquete = paquete.alto;
                this.anchoPaquete = paquete.ancho;
                this.largoPaquete = paquete.largo;
                this.pesoPaquete = paquete.peso;
            } else {
                this.altoPaquete = '';
                this.anchoPaquete = '';
                this.largoPaquete = '';
                this.pesoPaquete = '';
            }
        },
        async sendEstimatedPricingForm() {
            if (this.isInvalidForm()) {
                toast.warning('Rellenar todos los campos.');
                return;
            }

            const formData = {
                origin_location_id: this.idUbigeoOrigen,
                target_location_id: this.idUbigeoDestino,
                packagesize_id: this.id,
                service_id: this.idTipoServicio
            };

            this.loading = true;
            const response = await sendEstimatedPricingForm(formData);
            this.loading = false;

            if (!response.success) {
                toast.error(response.error);
                this.clearEstimatedPricingForm();
                return;
            }

            this.estimatedPricingRes = response.data;
            const isExpress = +this.idTipoServicio === SERVICIO_EXPRES_ID;
            this.cotizacion = isExpress ? this.estimatedPricingRes.quotation_express : this.estimatedPricingRes.quotation;
        },
        isInvalidForm() {
            return this.idTipoServicio === '' ||
                this.idUbigeoOrigen === '' ||
                this.idUbigeoDestino === '' ||
                this.id === '' ||
                this.altoPaquete === '' ||
                this.anchoPaquete === '' ||
                this.largoPaquete === '' ||
                this.pesoPaquete === '';
        },
        clearEstimatedPricingForm() {
            this.idTipoServicio = '';
            this.idUbigeoOrigen = '';
            this.idUbigeoDestino = '';
            this.id = '';
            this.altoPaquete = '';
            this.anchoPaquete = '';
            this.largoPaquete = '';
            this.pesoPaquete = '';
            this.loadingCotizacion = false;
            this.cotizacion = 0;
            this.estimatedPricingRes = null;
        }
    }
}
</script>
<style></style>