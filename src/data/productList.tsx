import dunHillOne from '../assets/Dunhill1.webp'
import dunHillTwo from '../assets/Dunhill2.webp'
import tomFordOne from '../assets/Tomford1.webp'
import tomFordTwo from '../assets/Tomford2.webp'
import salvatoreOne from '../assets/salvatore1.webp'
import salvatoreTwo from '../assets/salvatore2.webp'
import AMCQOne from '../assets/AlexanderMcQueen1.webp'
import AMCQTwo from '../assets/AlexanderMcQueen2.webp'
import montBlancOne from '../assets/MontBlanc1.webp'
import montBlancTwo from '../assets/MontBlanc2.webp'
import gucciOne from '../assets/Gucci1.webp'
import gucciTwo from '../assets/Gucci2.webp'
import pradaOne from '../assets/Prada1.webp'
import pradaTwo from '../assets/Prada2.webp'
import DbOne from '../assets/Dolcegabbana1.webp'
import DbTwo from '../assets/Dolcegabbana2.webp'
import todsOne from '../assets/Tods1.webp'
import todsTwo from '../assets/Tods2.webp'
import versaceOne from '../assets/Versace1.webp'
import versaceTwo from '../assets/Versace2.webp'



export interface Product{

    id:number,
    slug:string,
    productTitle:string,
    productDescription:{
        form:string,
        material?:string,
        toneGrade:string,
        uvPro:string,
        case?:string
    },
    productImg:{
        img1:string,
        img2:string
    },
    productPrice:number,
    amount:number
        

}

const productList: Product[] =[
    
    {
        id:1,
        slug:'salvatore-sunglasses-1',
        productTitle:'Salvatore Sunglasses',
        productDescription:{
            form:' Glasögonform: Rektangulär', 
            material:'Material: Metall' ,
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
        },
        productImg: {
            img1:salvatoreOne,
            img2:salvatoreTwo,
        },
        productPrice:4715,
        amount:0
    },
    {
        id:2,
        slug:'dunhill-sunglasses-2',
        productTitle:'Dunhill Sunglasses',
        productDescription:{
            form:' Glasögonform: Retro fyrkant', 
            material:'Material: Metall' ,
            toneGrade:'Toningsgrad:Medium (kategori 2)',
            uvPro:'UV-skydd: Ja',
            case:' Glasögonfodral: Påse med dragsko, hårt',
        },
        productImg: {
            img1:dunHillOne,
            img2:dunHillTwo,
        },
        productPrice:3045,
        amount:0
    },
    {
        id:3,
        slug:'tomford-sunglasses-3',
        productTitle:'Tom Ford Sunglasses',
        productDescription:{
            form:'Glasögonform: Pilot (droppformad)', 
            toneGrade:'Toningsgrad:Medium (kategori 2)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: hårt',
        },
        productImg: {
            img1:tomFordOne,
            img2:tomFordTwo,
        },
        productPrice:3195,
        amount:0
    },
    {
        id:4,
        slug:'alexander-sunglasses-4',
        productTitle:'Alexander McQueen Sunglasses',
        productDescription:{
            form:'Glasögonform: Monoglas', 
            material:'Material: Acetat',
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Hårt',
        },
        productImg: {
            img1:AMCQOne,
            img2:AMCQTwo,
        },
        productPrice:3815,
        amount:0
    },
    {
        id:5,
        slug:'montblanc-sunglasses-5',
        productTitle:'Mont Blanc Sunglasses',
        productDescription:{
            form:'Glasögonform: Pilot (droppformad)', 
            material:'Material: Delvis metall',
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Hårt',
        },

        productImg: {
            img1:montBlancOne,
            img2:montBlancTwo,
        },
        productPrice:3815,
        amount:0
    },
    {
        id:6,
        slug:'gucci-sunglasses-6',
        productTitle:'Gucci Sunglasses',
        productDescription:{
            form:'Glasögonform: Rektangulär', 
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Påse med dragsko, hårt',
        },
        productImg: {
            img1:gucciOne,
            img2:gucciTwo,
        },
        productPrice:3595,
        amount:0
    },
    {
        id:7,
        slug:'prada-sunglasses-7',
        productTitle:'Prada Sunglasses',
        productDescription:{
            form:'Glasögonform: Rektangulär', 
            toneGrade:'Toningsgrad: Medium (kategori 2)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Hårt',
        },
        productImg: {
            img1:pradaOne,
            img2:pradaTwo,
        },
        productPrice:3435,
        amount:0
    },
    {
        id:8,
        slug:'dolcegabbana-sunglasses-8',
        productTitle:'Dolce&Gabbana Sunglasses',
        productDescription:{
            form:'Glasögonform: Pilot (droppformad)', 
            material:'Material: Acetat',
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Hårt',
        },        
        productImg: {
            img1:DbOne,
            img2:DbTwo,
        },
        productPrice:3195,
        amount:0
    },
    {
        id:9,
        slug:'tods-sunglasses-9',
        productTitle:"Tods's Sunglasses",
        productDescription:{
            form:'Glasögonform: Pilot (droppformad)', 
            material:'Material: Delvis metall',
            toneGrade:'Toningsgrad: Medium (kategori 2)',
            uvPro:'UV-skydd: Ja',
        },        
        productImg: {
            img1:todsOne,
            img2:todsTwo,
        },
        productPrice:3145,
        amount:0
    },
    {
        id:10,
        slug:'versace-sunglasses-10',
        productTitle:'Versace Sunglasses',
        productDescription:{
            form:'Glasögonform: Pilot (droppformad)', 
            toneGrade:'Toningsgrad: Mörka (kategori 3)',
            uvPro:'UV-skydd: Ja',
            case:'Glasögonfodral: Hårt',
        },        
        productImg: {
            img1:versaceOne,
            img2:versaceTwo,
        },
        productPrice:2865,
        amount:0
    },
]

export default productList