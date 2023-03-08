export const synthecDataGenerator = {
    databaseValues: {
        options: ['Select database', 'postgres'],
        default: 'Select database'
    },
    schemaValues: {
        options: ['Select schema', 'ade'],
        default: 'Select schema'

    },
    tableValues: {
        options: ['Select table', 'customer_ip', 'sgd_input'],
        default: 'Select table'
    }
};

export const dataProfiler = {
    databaseValues: {
        options: ['Select database', 'postgres'],
        default: 'Select database'
    },
    schemaValues: {
        options: ['Select schema', 'public'],
        default: 'Select schema'

    },
    tableValues: {
        options: ['Select table', 'sgd_input'],
        default: 'Select table'
    }
};

export const migrationAdvisor = {
    sourceTypeValues: {
        options: ['Select', 'Relational', 'Non-Relational'],
        default: 'Select'
    },
    sourceDBProductValues: {
        options: ['Teradata'],
        default: 'Teradata'

    },
    targetProductValues: {
        options: ['Bigquery(GCP)'],
        default: 'Bigquery(GCP)'
    }
}



// export const databaseValues = {
//     synthecDataGenerator: {
//         options: ['Select database', 'postgres'],
//         default: 'Select database'
//     },
//     dataProfiler: {
//         options: ['Select database', 'postgres'],
//         default: 'Select database'
//     }
// };
// export const schemaValues = {
//     synthecDataGenerator: {    options: ['Select schema', 'public'],
//     default: 'Select schema'},
//     dataProfiler: {    options: ['Select schema', 'public'],
//     default: 'Select schema'},
// };
// export const tableValues = {
//     options: ['Select table', 'sync1'],
//     default: 'Select table'
// };