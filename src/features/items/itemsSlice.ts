import { createSlice } from '@reduxjs/toolkit'
import color from '../../interfaces/color'
import itemData from '../../interfaces/itemData'
interface itemsState {
    itemsList: Array<itemData>
    availableColors:Array<color>
}

const initialState:itemsState={
    itemsList: [{
        id: "1",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
    similique eius quia omnis consequatur illo saepe, suscipit nemo
    repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
    asperiores, recusandae aliquam.`,
        header: "Roleta rzymska",
        alt: "Roleta",
        image: "https://random.imagecdn.app/345/140",
        price: "140 zł/m2",
      },
      {
        id: "22",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
    similique eius quia omnis consequatur illo saepe, suscipit nemo
    repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
    asperiores, recusandae aliquam.`,
        header: "Zadaszenie tkaninowe",
        alt: "Roleta",
        image: "https://random.imagecdn.app/345/140",
        price: "140 zł/m2",
      },
      {
        id: "33",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
    similique eius quia omnis consequatur illo saepe, suscipit nemo
    repudiandae reprehenderit, perspiciatis illum? Qui ea provident quae
    asperiores, recusandae aliquam.`,
        header: "Osłona silikonowa",
        alt: "Roleta",
        image: "https://random.imagecdn.app/345/140",
        price: "140 zł/m2",
      }],
      availableColors:[{
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },{
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      },
      {
        imgSrc:"https://random.imagecdn.app/100/100",
        text:"Text"
      }
    ]
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer function
export const {  } = itemsSlice.actions

export default itemsSlice.reducer