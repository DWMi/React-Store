import dunHill1 from './src/assets/Dunhill1.webp'
import dunHill2 from './src/assets/Dunhill2.webp'
import tomFord1 from './src/assets/Tomford1.webp'
import tomFord2 from './src/assets/Tomford2.webp'
import dunHillClear1 from './src/assets/DunhillClear1.webp'
import dunHillClear2 from './src/assets/DunhillClear2.webp'
import AMCQ1 from './src/assets/AlexanderMcQueen1.webp'
import AMCQ2 from './src/assets/AlexanderMcQueen2.webp'
import montBlanc1 from './src/assets/MontBlanc1.webp'
import montBlanc2 from './src/assets/MontBlanc2.webp'
import gucci1 from './src/assets/Gucci1.webp'
import gucci2 from './src/assets/Gucci2.webp'
import prada1 from './src/assets/prada1.webp'
import prada2 from './src/assets/prada2.webp'
import DB1 from './src/assets/Dolcegabbana1.webp'
import DB2 from './src/assets/Dolcegabbana2.webp'
import tods1 from './src/assets/Tods1.webp'
import tods2 from './src/assets/Tods2.webp'
import versace1 from './src/assets/Versace1.webp'
import versace2 from './src/assets/Versace2.webp'



export interface product{

    id:number,
    productTitle:string,
    productDescription:string,
    productImg:{
        img1:string,
        img2:string
    },
    productPrice:number,
        

}

const productList:product[] =[
    
    {
        id:1,
        productTitle:'Dunhill Sunglasses',
        productDescription:`Glasögonform: Rektangulär 
        Material: Metall 
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja`,
        productImg: {
            img1: dunHill1,
            img2: dunHill2,
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
            img1:tomFord1,
            img2:tomFord2,
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
            img1:dunHillClear1,
            img2:dunHillClear2,
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
            img1:AMCQ1,
            img2:AMCQ2,
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
            img1:montBlanc1,
            img2:montBlanc2,
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
            img1:gucci1,
            img2:gucci2,
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
            img1:prada1,
            img2:prada2,
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
            img1:DB1,
            img2:DB2,
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
            img1:tods1,
            img2:tods2,
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
            img1:versace1,
            img2:versace2,
        },
        productPrice:2865
    },
]

export default productList