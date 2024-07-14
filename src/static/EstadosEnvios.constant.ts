export interface EstadosEnvio {
  id: number;
  descripcion: string;
}

export const ESTADOS: EstadosEnvio[] = [
  { "id": 0, "descripcion": "No definido" },
  { "id": 1, "descripcion": "Registrado" },
  { "id": 2, "descripcion": "Asignado para recojo" },
  { "id": 3, "descripcion": "En camino al punto de recojo" },
  { "id": 4, "descripcion": "Recogido" },
  { "id": 5, "descripcion": "Registrado en almacén" },
  { "id": 6, "descripcion": "Asignado para entrega" },
  { "id": 7, "descripcion": "En camino al punto de entrega" },
  { "id": 8, "descripcion": "Entregado" },
  { "id": 9, "descripcion": "Entrega Reprogramada" },
  { "id": 10, "descripcion": "Entrega Cancelada" },
  { "id": 11, "descripcion": "Recojo Reprogramado" },
  { "id": 12, "descripcion": "Recojo Cancelado" },
];
