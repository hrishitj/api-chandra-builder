import AdminJS, { actions } from 'adminjs'
import * as AdminJSSequelize from '@adminjs/sequelize'
import { dark, light } from '@adminjs/themes'
import { buildRouter, buildAuthenticatedRouter, log } from '@adminjs/express'
import dbConnection from './Utils/dbConnection.js'
import Models from './Utils/allModels.js'
import path from 'path'
import uploadFeature from '@adminjs/upload'
import { ComponentLoader } from 'adminjs'
import { DefaultAuthProvider } from 'adminjs'
import { Model } from 'sequelize'

import { fileURLToPath } from 'url'; 
import { dirname } from 'path'; 
const __dirname = dirname(fileURLToPath(import.meta.url));

// Placeholder authentication function, add your logic for authenticating users
const authenticate = ({ email, password }, ctx) => {
    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {
        return { email }
    } else return null
}

const localProvider = {
    bucket: 'assets',
    opts: {
        baseUrl: '',
    },
}
const componentLoader = new ComponentLoader()
const authProvider = new DefaultAuthProvider({
    componentLoader,
    authenticate,
})

const features = [
    uploadFeature({
        componentLoader,
        properties: {
            file: 'image',
            filePath: 'image.filePath',
            key: 'image.path',
            filename: 'image.filename',
            mimeType: 'image.mimeType',
            size: 'image.size',
        },

        provider: { local: localProvider },
        validation: { mimeTypes: ['image/jpeg', 'image/png', 'image/webp'] },
        uploadPath: (record, filename) => {
            return `/gallery/${record.id()}/image/${filename}`
        },
    }),
]

const actionsHandler = (fieldName) => {
    const action = {
        edit: {
        before: async (record) => {
            //  console.log("Params:", record.Params);
            return record
        },
        after: async (records, recordId) => {
            if (records.record.params[fieldName]) {
            const originalData = JSON.parse(records.record.params[fieldName])
            const transformedData = {
                [`${fieldName}.path`]: originalData.path,
                [`${fieldName}.size`]: originalData.size,
                [`${fieldName}.filename`]: originalData.filename,
                [`${fieldName}.mimeType`]: originalData.mimeType,
                [`${fieldName}.filePath`]: `public/uploads${originalData.path}`,
                [`${fieldName}.filesToDelete`]: `public/uploads${originalData.path}`,
            }
            const oldParams = records.record.params
            const newParams = { ...oldParams, ...transformedData }

            records.record.params = newParams
            delete records.record.params[fieldName]
            return records
            } else {
            return records
            }
        },
        },
        show: {
        after: async (records, recordId) => {
            if (records.record.params[fieldName]) {
            const originalData = JSON.parse(records.record.params[fieldName])
            const transformedData = {
                [`${fieldName}.path`]: originalData.path,
                [`${fieldName}.size`]: originalData.size,
                [`${fieldName}.filename`]: originalData.filename,
                [`${fieldName}.mimeType`]: originalData.mimeType,
                [`${fieldName}.filePath`]: `public/uploads${originalData.path}`,
                [`${fieldName}.filesToDelete`]: `public/uploads${originalData.path}`,
            }

            const oldParams = records.record.params
            const newParams = { ...oldParams, ...transformedData }

            records.record.params = newParams
            delete records.record.params[fieldName]
            return records
            } else {
            return records
            }
        },
        },
        list: {
        after: async (records) => {
            const newRecords = records.records.map((record, index) => {
            if (record.params[fieldName]) {
                const originalData = JSON.parse(record.params[fieldName])
                const transformedData = {
                [`${fieldName}.path`]: originalData.path,
                [`${fieldName}.size`]: originalData.size,
                [`${fieldName}.filename`]: originalData.filename,
                [`${fieldName}.mimeType`]: originalData.mimeType,
                [`${fieldName}.filePath`]: `public/uploads${originalData.path}`,
                }
                const oldParams = records.records[index].params
                const newParams = { ...oldParams, ...transformedData }
                records.records[index].params = newParams
                return transformedData
            }
            })
            delete records.records[0].params[fieldName]
            return records
        },
        },
    }
    return action
}

const actionsArray = [actionsHandler('gallery')]

AdminJS.registerAdapter(AdminJSSequelize)

const adminJs = new AdminJS({
    componentLoader,
    databases: [dbConnection],
    resources: [
        {
            resource: Models.chainTypeModel,
            options:{
                listProperties:["id","chainType","createdAt","updatedAt"],
                showProperties:["id","chainType","createdAt","updatedAt"],
                editProperties:["id","chainType"],
            }
        },
        {
            resource: Models.characterCostModel,
            options:{
                listProperties:["id","alphabet","fontStyleId","letterHeightId","dimensions","diamondCarat","noOfDiamonds","weight10KT","metalKaratId"],
                showProperties:["id","alphabet","fontStyleId","letterHeightId","dimensions","diamondCarat","noOfDiamonds","weight10KT","metalKaratId","createdAt","updatedAt"],
                editProperties:["id","alphabet","fontStyleId","letterHeightId","dimensions","diamondCarat","noOfDiamonds","weight10KT","metalKaratId"],
            }
        },
        {
            resource: Models.costingModel,
            options:{
                listProperties:["id","updatedAt","styleNumber","customName","deliveryPeriod","quantity","metalKaratId","metalColorId","diamondQualityId","fontStyleId","letterHeightId","chainTypeId"],
                showProperties:["id","updatedAt","styleNumber","customName","deliveryPeriod","quantity","metalKaratId","metalColorId","diamondQualityId","fontStyleId","letterHeightId","chainTypeId","createdAt"],
                editProperties:["id","styleNumber","customName","deliveryPeriod","quantity","metalKaratId","metalColorId","diamondQualityId","fontStyleId","letterHeightId","chainTypeId"],
            }
        },
        {
            resource: Models.diamondQualityModel,
            options:{
                listProperties:["id","diamondQuality","createdAt","updatedAt"],
                showProperties:["id","diamondQuality","createdAt","updatedAt"],
                editProperties:["id","diamondQuality"],
            }
        },
        {
            resource: Models.fontStyleModel,
            options:{
                listProperties:["id","fontStyle","createdAt","updatedAt"],
                showProperties:["id","fontStyle","createdAt","updatedAt"],
                editProperties:["id","fontStyle"],
            }
        },
        {
            resource: Models.letterHeightModel,
            options:{
                listProperties:["id","letterHeight","createdAt","updatedAt"],
                showProperties:["id","letterHeight","createdAt","updatedAt"],
                editProperties:["id","letterHeight"],
            }
        },
        {
            resource: Models.metalColorModel,
            options:{
                listProperties:["id","metalColor","createdAt","updatedAt"],
                showProperties:["id","metalColor","createdAt","updatedAt"],
                editProperties:["id","metalColor"],
            }
        },
        {
            resource: Models.metalKaratModel,
            options:{
                listProperties:["id","metalKarat","createdAt","updatedAt"],
                showProperties:["id","metalKarat","createdAt","updatedAt"],
                editProperties:["id","metalKarat"],
            }
        },
        /* Can be used later to edit the images database 
        {
            resource: Models.Gallery_Model,
            features,
            options: {
                actions: actionsArray[0],
            },
        }, 
        */
    ],
    /* dashboard: {
        component: Components.Dashboard,
    }, */
    rootPath: '/admin',
    defaultTheme: light.id,
    availableThemes: [dark, light],
    branding: {
        companyName: 'Chandra Jewellery',
        softwareBrothers: false,
        logo: '/ChandraLogo.jpg',
    },
})

const router = buildAuthenticatedRouter(
    adminJs,
    {
        cookiePassword: 'test',
        provider: authProvider,
    },
    null,
    {
        secret: 'test',
        resave: false,
        saveUninitialized: true,
    },
)
// app.use(adminJs.options.rootPath, router)

adminJs.watch()

const adminJSConfig = (app) => {
    // app.use(adminJs.options.rootPath, adminRouter);
    app.use(adminJs.options.rootPath, router)
}

export default adminJSConfig
