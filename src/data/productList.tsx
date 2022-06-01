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
        productTitle:'Salvatore Sunglasses',
        productDescription:`Glasögonform: Rektangulär 
        Material: Metall 
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja`,
        productImg: {
            img1:salvatoreOne,
            img2:salvatoreTwo,
        },
        productPrice:4715
    },
    {
        id:2,
        productTitle:'Dunhill Sunglasses',
        productDescription:`Glasögonform: Retro fyrkant
        Material: Metall
        Mönster: Färggradient
        Toningsgrad: Medium (kategori 2)
        UV-skydd: Ja
        Glasögonfodral: Påse med dragsko, hårt`,
        productImg: {
            img1:dunHillOne,
            img2:dunHillTwo,
        },
        productPrice:3045
    },
    {
        id:3,
        productTitle:'Tom Ford Sunglasses',
        productDescription:`Glasögonform: Pilot (droppformad)
        Mönster: Enfärgat
        Toningsgrad: Medium (kategori 2)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
        productImg: {
            img1:tomFordOne,
            img2:tomFordTwo,
        },
        productPrice:3195
    },
    {
        id:4,
        productTitle:'Alexander McQueen Sunglasses',
        productDescription:`Glasögonform: Monoglas
        Material: Acetat
        Mönster: Enfärgat
        Toningsgrad: Mörka (kategori 3)
        UV-skydd: Ja
        Glasögonfodral: Hårt`,
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