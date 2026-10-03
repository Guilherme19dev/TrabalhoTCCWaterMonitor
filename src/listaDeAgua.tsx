
class clientes {
   gasto:number[]
   dia:string[]

   constructor(gasto:number[],dia:string[]){
    this.gasto=gasto,
    this.dia=dia
   }
}
   const pessoa = new clientes([11,20,30,10,50,30,20],["1h","2h","3h","4h","5h","6h","7h"])
   const pessoa2 = new clientes([100,240,310,180,250],["1d","2d","3d","4d","5d"])
   const pessoa3 = new clientes([50,20,30,70,50,10,20],["1m","2m","3m","4m","5m","6m","7m"])

export const Water = [  
   pessoa,
   pessoa2,
   pessoa3
]