import db from '../index';

let client = db.schema.client;

export default (query, parameters = []) => {
    return new Promise((resolve, reject) => {
        client.query( query, parameters, function(err, results){
            if( err )
                reject(err);
            else
                resolve(results);
        })
    })
}