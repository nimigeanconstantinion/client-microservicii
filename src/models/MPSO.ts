


export default class MPSO{

    id: number|null=null;
    idIntern: string;
    articol:string;
    grupa: string="";
    categorie:string="";
    furniz:string="";
    id_furn: string="";
    nr_zile:number=35;


    constructor(idIntern:string,articol:string) {
        this.idIntern=idIntern;
        this.articol=articol;
    }

    equals(b:Object):boolean{
        let mpo:MPSO=b as MPSO;
        return this.idIntern===mpo.idIntern;
    }
}