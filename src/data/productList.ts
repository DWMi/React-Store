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
import carreraOne from '../assets/Carrera1.webp'
import carreraTwo from '../assets/Carrera2.webp'
import calvinKleinOne from '../assets/CalvinKlein1.webp'
import calvinKleinTwo from '../assets/CalvinKlein2.webp'



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
    qty?: number
        

}

const productList: Product[] =[
    
    {
        id:1,
        slug:'salvatore-sunglasses-1',
        productTitle:'Salvatore Ferragamo',
        productDescription:{
            form:'Rektangulär', 
            material:'Metall' ,
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
        },
        productImg: {
            img1:salvatoreOne,
            img2:salvatoreTwo,
        },
        productPrice:4715
    },
    {
        id:2,
        slug:'dunhill-sunglasses-2',
        productTitle:'Dunhill',
        productDescription:{
            form:'Retro fyrkant', 
            material:'Metall' ,
            toneGrade:'Medium (kategori 2)',
            uvPro:'Ja',
            case:'Påse med dragsko, hårt',
        },
        productImg: {
            img1:dunHillOne,
            img2:dunHillTwo,
        },
        productPrice:3045
    },
    {
        id:3,
        slug:'tomford-sunglasses-3',
        productTitle:'Tom Ford',
        productDescription:{
            form:'Pilot (droppformad)', 
            material:' - ',
            toneGrade:'Medium (kategori 2)',
            uvPro:'Ja',
            case:'hårt',
        },
        productImg: {
            img1:tomFordOne,
            img2:tomFordTwo,
        },
        productPrice:3195
    },
    {
        id:4,
        slug:'alexander-sunglasses-4',
        productTitle:'Alexander McQueen',
        productDescription:{
            form:'Monoglas', 
            material:'Acetat',
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },
        productImg: {
            img1:AMCQOne,
            img2:AMCQTwo,
        },
        productPrice:3815
    },
    {
        id:5,
        slug:'montblanc-sunglasses-5',
        productTitle:'Mont Blanc',
        productDescription:{
            form:'Pilot (droppformad)', 
            material:'Delvis metall',
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },

        productImg: {
            img1:montBlancOne,
            img2:montBlancTwo,
        },
        productPrice:3815
    },
    {
        id:6,
        slug:'gucci-sunglasses-6',
        productTitle:'Gucci',
        productDescription:{
            form:'Rektangulär', 
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Påse med dragsko, hårt',
        },
        productImg: {
            img1:gucciOne,
            img2:gucciTwo,
        },
        productPrice:3595
    },
    {
        id:7,
        slug:'prada-sunglasses-7',
        productTitle:'Prada',
        productDescription:{
            form:'Rektangulär', 
            toneGrade:'Medium (kategori 2)',
            uvPro:'Ja',
            case:'Hårt',
        },
        productImg: {
            img1:pradaOne,
            img2:pradaTwo,
        },
        productPrice:3435
    },
    {
        id:8,
        slug:'dolcegabbana-sunglasses-8',
        productTitle:'Dolce&Gabbana',
        productDescription:{
            form:'Pilot (droppformad)', 
            material:'Acetat',
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },        
        productImg: {
            img1:DbOne,
            img2:DbTwo,
        },
        productPrice:3195
    },
    {
        id:9,
        slug:'tods-sunglasses-9',
        productTitle:"Tods's",
        productDescription:{
            form:'Pilot (droppformad)', 
            material:'Delvis metall',
            toneGrade:'Medium (kategori 2)',
            uvPro:'Ja',
        },        
        productImg: {
            img1:todsOne,
            img2:todsTwo,
        },
        productPrice:3145
    },
    {
        id:10,
        slug:'versace-sunglasses-10',
        productTitle:'Versace',
        productDescription:{
            form:'Pilot (droppformad)', 
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },        
        productImg: {
            img1:versaceOne,
            img2:versaceTwo,
        },
        productPrice:2865
    },
    {
        id:11,
        slug:'carrera-sunglasses-10',
        productTitle:'Carrera',
        productDescription:{
            form:'Pilot (droppformad)', 
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },        
        productImg: {
            img1:carreraOne,
            img2:carreraTwo,
        },
        productPrice:2865,
    },
    {
        id:12,
        slug:'ck-sunglasses-10',
        productTitle:'CalvinKlein',
        productDescription:{
            form:'Pilot (droppformad)', 
            toneGrade:'Mörka (kategori 3)',
            uvPro:'Ja',
            case:'Hårt',
        },        
        productImg: {
            img1:calvinKleinOne,
            img2:calvinKleinTwo,
        },
        productPrice:2865,
    },
]

export default productList