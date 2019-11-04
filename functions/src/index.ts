import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);

export const inserirDadoSensor = functions.https.onRequest((req, response) => {

    try {
        if (!req.body) {
            return response.status(500).send('Corpo da mensagem não encontrado.');
        }

        const item = req.body as DadosSensores;
        item.data = admin.firestore.Timestamp.fromDate(new Date(Date.now()));
        const grupoSensorId = admin.firestore().doc('gruposensores/' + item.gruposensorid);

        return admin.firestore().collection('dadossensores').doc().set({
            data: item.data,
            gruposensorid: grupoSensorId,
            sensor1: item.sensor1,
            sensor2: item.sensor2,
            sensor3: item.sensor3
        })
        .then(()=>{
            return response.status(200).send('Inserido com sucesso.');
        })
        .catch((err) => {
            return response.status(500).send('Erro ao inserir registro: ' + JSON.stringify(err));
        });

    } catch (error) {
        return response.status(500).send('Algum erro ocorreu: ' + JSON.stringify(error));
    }
});

class DadosSensores {
    public data: FirebaseFirestore.Timestamp | undefined;
    public gruposensorid: FirebaseFirestore.DocumentReference | undefined;
    public sensor1: number | undefined;
    public sensor2: number | undefined;
    public sensor3: number | undefined;
}

// class GruposSensores {
//     public dataultimasincronizacao: Date | undefined;
//     public geolocalizacao: any;
//     public id: number | undefined;
// }
