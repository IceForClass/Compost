import { postData, fetchData } from "./api";

export async function createRegist() {
    const user_id = sessionStorage.getItem("idUser");
    const cicle_id = localStorage.getItem("cicle_id");
    const composter_id = localStorage.getItem("composter_id");
    const now = new Date();
    const date = now.toISOString().replace("T", " ").split(".")[0];
    const cicle_start = 1;
    const registData = {
        user_id,
        cicle_id,
        composter_id,
        date,
        cicle_start,
    };
    console.log("Datos enviados a /api/regist:", registData);
    const response = await postData("/api/regist", registData);

    fetchData(`/api/exactregist/lastRegist`)
        .then((registData) => {
            console.log("ID del registro:", registData.id);
            localStorage.setItem("regist_id", JSON.stringify(registData.id));
        })
        .catch((error) => {
            console.error("Error al obtener el registro:", error);
        });
    createBeforeForm();
}

function createBeforeForm() {
    // Obtener el objeto completo del local storage
    const beforeFormData =
        JSON.parse(localStorage.getItem("beforeFormData")) || {};
    const regist_id = JSON.parse(localStorage.getItem("regist_id"));

    // Extraer los valores individuales del objeto
    const tempAmbient = beforeFormData.temp_ambient || "";
    const tempCompost = beforeFormData.temp_compost || "";
    const fillLevel = beforeFormData.fill_level || "";
    const olor = beforeFormData.olor || "";
    const insectStatus = beforeFormData.insect_status || "0";
    const insectDescription = beforeFormData.insect_description || "";
    const humidity = beforeFormData.humidity || "";
    const initialPhotos = beforeFormData.initial_photos || "";
    const initialObservations = beforeFormData.initial_observations || "";

    // Puedes usar estas variables para procesar o enviar datos
    console.log({
        regist_id,
        tempAmbient,
        tempCompost,
        fillLevel,
        olor,
        insectStatus,
        insectDescription,
        humidity,
        initialPhotos,
        initialObservations,
    });
    createDuringForm();
}

function createDuringForm() {
    // Obtener el objeto completo del local storage
    const duringFormData =
        JSON.parse(localStorage.getItem("duringFormData")) || {};

    const regist_id = JSON.parse(localStorage.getItem("regist_id"));

    // Extraer los valores individuales del objeto
    const wateringDone = duringFormData.watering_done || "0";
    const stirringDone = duringFormData.stirring_done || "0";
    const greenDeposit = duringFormData.green_deposit || "0";
    const dryDeposit = duringFormData.dry_deposit || "0";
    const greenQuantity = duringFormData.green_quantity || "";
    const greenType = duringFormData.green_type || "";
    const dryQuantity = duringFormData.dry_quantity || "";
    const dryType = duringFormData.dry_type || "";
    const photo = duringFormData.photo || "";
    const observations = duringFormData.observations || "";

    // Puedes usar estas variables para procesar o enviar datos
    console.log({
        regist_id,
        wateringDone,
        stirringDone,
        greenDeposit,
        dryDeposit,
        greenQuantity,
        greenType,
        dryQuantity,
        dryType,
        photo,
        observations,
    });
    createAfterForm();
}

function createAfterForm() {
    // Obtener el objeto completo del local storage
    const afterFormData =
        JSON.parse(localStorage.getItem("afterFormData")) || {};

    const regist_id = JSON.parse(localStorage.getItem("regist_id"));

    // Extraer los valores individuales del objeto
    const fillLevel = afterFormData.fill_level || "0%";
    const photo = afterFormData.photo || "";
    const observations = afterFormData.observations || "";
    const endCicle = afterFormData.end_Cicle || "0";

    // Puedes usar estas variables para procesar o enviar datos
    console.log({
        regist_id,
        fillLevel,
        photo,
        observations,
        endCicle,
    });
}
