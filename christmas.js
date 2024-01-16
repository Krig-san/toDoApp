const kids = [
    { name: "joe", age: 8, wishes: ["minicar", "fruits"] },
    { name: "paul", age: 8, wishes: ["phone"] },
    { name: "nina", age: 12, wishes: ["minicar", "phone"] },
    { name: "elodie", age: 65, wishes: ["money", "drugs"] },
    { name: "patrick", age: 2, wishes: [] },
  ];


const gifts = {
    minicar: ["joe", "nina"],
    fruits: ["joe"],
    phone: ["nina"],
    money: ("elodie"),
    drugs: ["drugs"],
}

  function distributeGifts(kids){
    // crée un objet vide "gifts"
    // loop sur kids
    // pour chaque kid:
        // - loop sur ses souhaits de cadeau (wishes)
        // - pour chaque souhait (wish) de l'enfant:
            // - si le souhait existe déjà dans gifts: ajouter l'enfant à la liste des destionataires
            // - sinon, insérer le cadeau dans l'objet gift, avec une liste de destinataires contenant seulement l'enfant
    // à la fin de la loop, retourner l'objet gifts
    const gifts = {}
     kids.forEach(kid=> {
        kid.wishes.forEach((wish)=>{
            wish in gifts ?
            gifts[wish].push(kid.name)
            : gifts[wish] = [kid.name]
        })
     })
     return gifts
  }

  [5, true, {}, undefined, ""]
  
  const headA = {
    eyes: 2,
    operations: ["hait implants", "tanning", "lifting", "botox"],
  }

  const headB = {
    eyes: 1,
    operations: ["botox"],
  }

  const heads = [headA, headB]

  const myKids = {
    joe: {
        age: 8, 
        wishes: ["minicar", "fruits"]
    },
    jack: {
        age: 3, 
        wishes: ["phone"]
    }
  }

  const myKidsList = [kids[0], kids[1]]

  Object.entries(myKids)

  Object.keys(myKids) // [joe, jack]
  Object.values(myKids)
   [{
    age: 8, 
    wishes: ["minicar", "fruits"]
},{
    age: 3, 
    wishes: ["phone"]
}]
Object.entries(myKid) 

Object.values(myKids)

const z = [
 ["joe", { age: 8, wishes: ["minicar", "fruits"]}],
 ["jack", { age: 3, wishes: ["phone"]}]
]

const {name} = {name: "joe"}

name // joe

z.map(([name, values])=> name )

