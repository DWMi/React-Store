import dunHillOne from './src/assets/Dunhill1.webp'
import dunHillTwo from './src/assets/Dunhill2.webp'
import tomFordOne from './src/assets/Tomford1.webp'
import tomFordTwo from './src/assets/Tomford2.webp'
import dunHillClearOne from './src/assets/DunhillClear1.webp'
import dunHillClearTwo from './src/assets/DunhillClear2.webp'
import AMCQOne from './src/assets/AlexanderMcQueen1.webp'
import AMCQTwo from './src/assets/AlexanderMcQueen2.webp'
import montBlancOne from './src/assets/MontBlanc1.webp'
import montBlancTwo from './src/assets/MontBlanc2.webp'
import gucciOne from './src/assets/Gucci1.webp'
import gucciTwo from './src/assets/Gucci2.webp'
import pradaOne from './src/assets/prada1.webp'
import pradaTwo from './src/assets/prada2.webp'
import DbOne from './src/assets/Dolcegabbana1.webp'
import DbTwo from './src/assets/Dolcegabbana2.webp'
import todsOne from './src/assets/Tods1.webp'
import todsTwo from './src/assets/Tods2.webp'
import versaceOne from './src/assets/Versace1.webp'
import versaceTwo from './src/assets/Versace2.webp'



export interface Product{

    id:number,
    productTitle:string,
    productDescription:string,
    productImg:{
        img1:string,
        img2:string
    },
    productPrice:number,
        

}

const productList: Product[] =[
    
    {
        id:1,
        productTitle:'Dunhill Sunglasses',
        productDescription:`Glasögonform: Rektangulär 
        Material: Metall 
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja`,
        productImg: {
            img1: dunHillOne,
            img2: dunHillTwo,
        },
        productPrice:4715
    },
    {
        id:2,
        productTitle:'Tom Ford Sunglasses',
        productDescription:`Glasögonform: Pilot (droppformad)
        Material:Delvis metall
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:tomFordOne,
            img2:tomFordTwo,
        },
        productPrice:4299
    },
    {
        id:3,
        productTitle:'Dunhill Clear Sunglasses',
        productDescription:`Glasögonform: Retro fyrkant
        Material:Acetat
        Mönster: Melerat
        Toningsgrad: Klara eller väldigt ljusa (kategori 0)
        UV-skydd: Ja`,
        productImg: {
            img1:dunHillClearOne,
            img2:dunHillClearTwo,
        },
        productPrice:4265
    },
    {
        id:4,
        productTitle:'Alexander McQueen Sunglasses',
        productDescription:`Glasögonform: Rund
        Material:Delvis metall
        Mönster: Enfärgat
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Påse med dragsko, hårt`,
        productImg: {
            img1:AMCQOne,
            img2:AMCQTwo,
        },
        productPrice:3815
    },
    {
        id:5,
        productTitle:'Mont Blanc Sunglasses',
        productDescription:`Glasögonform: Pilot (droppformad)
        Material: Delvis metall
        Mönster: Enfärgat
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:montBlancOne,
            img2:montBlancTwo,
        },
        productPrice:3815
    },
    {
        id:6,
        productTitle:'Gucci Sunglasses',
        productDescription:`Glasögonform: Rektangulär
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Påse med dragsko, hårt`,
        productImg: {
            img1:gucciOne,
            img2:gucciTwo,
        },
        productPrice:3595
    },
    {
        id:7,
        productTitle:'Prada Sunglasses',
        productDescription:`Glasögonform: Rektangulär
        Toningsgrad: Medium (kategori 2)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:pradaOne,
            img2:pradaTwo,
        },
        productPrice:3435
    },
    {
        id:8,
        productTitle:'Dolce&Gabbana Sunglasses',
        productDescription:`Glasögonform: Pilot (droppformad)
        Material: Acetat
        Mönster: Enfärgat
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:DbOne,
            img2:DbTwo,
        },
        productPrice:3195
    },
    {
        id:9,
        productTitle:"Tods's Sunglasses",
        productDescription:`Glasögonform: Pilot (droppformad)
        Material: Delvis metall
        Toningsgrad: Medium (kategori 2)
        UV-skydd: Ja`,
        productImg: {
            img1:todsOne,
            img2:todsTwo,
        },
        productPrice:3145
    },
    {
        id:10,
        productTitle:'Versace Sunglasses',
        productDescription:`Glasögonform: Pilot (droppformad)
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:versaceOne,
            img2:versaceTwo,
        },
        productPrice:2865
    },
]

export default productList