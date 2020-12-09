//DATA
import classiques from './assets/images/mobile/menu/menu-classiques2.jpeg'
import traditionnels from './assets/images/mobile/menu/menu-traditionnels.jpg'
import specialites from './assets/images/mobile/menu/menu-specialites.jpg'
import tavolacalda from './assets/images/mobile/menu/menu-tavolacalda.jpg'
import paninis from './assets/images/mobile/menu/menu-paninis.jpg'
import salades from './assets/images/mobile/menu/menu-salades.jpg'
import pates from './assets/images/mobile/menu/menu-pates.jpg'
import desserts from './assets/images/mobile/menu/menu-desserts.jpg'

const menuClassiques = [
    {name: 'Dagobert', price: '2.80 / 3.50 / 4.20'},
    {name: 'Américain', price: '2.80 / 3.50 / 4.20'},
    {name: 'Jambon de parme', price: '2.80 / 3.50 / 4.20'},
    {name: 'Thon', info: 'Piquant / Cocktail', price: '2.80 / 3.50 / 4.20'},
    {name: 'Poulet', info: 'Andalouse / Hawaï', price: '2.80 / 3.50 / 4.20'},
    {name: 'Salade', info: 'Crevettes / Pita / Viande', price: '2.80 / 3.50 / 4.20'},
    {name: 'Sandwich omelette', price: '3.00 / 3.70 / 4.40'},
    {name: 'Merguez', price: '3.00 / 3.70 / 4.40'},
    {name: 'Poulet grillé', price: '3.00 / 3.70 / 4.40'}
]
const menuTraditionnels = [
    {name: 'Panino Villa',info: 'Salami , provola dolce', price: '3.50 / 4.50'},
    {name: 'Napoli',info: 'Salami Napoli, provola dolce', price: '3.50 / 4.50'},
    {name: 'Calabria',info: 'Salami piquant, provola picante', price: '3.50 / 4.50'},
    {name: 'Panino Zio',info: 'Escalope panée, huile d’olive, origan', price: '4.00 / 5.00'},
    {name: 'Panino Della Nonna',info: 'Boulettes maison', price: '4.00 / 5.00'}
]
const menuSpecialite = [
    {name: 'Le Sicilien',info: 'Porchetta, provola dolce, tomates séchées, roquette, crème balsamique', price: '4.60'},
    {name: 'I Sapori Del Sud',info: 'Panchetta, mozzarella, tomates séchées, huile d’olive, oignons, origan', price: '4.60'},
    {name: 'La Mamma',info: 'Boulette maison, mozzarella, tomates, oeufs, sauce au choix', price: '4.60'},
    {name: 'Isola',info: 'Coppa, provolone piquant, aubergines grillées, roquette, pignons de pin', price: '4.70'},
    {name: 'Etna',info: 'Salami piquant, provolone piquant, sauce piquante, tomates, olives, roquette', price: '4.60'},
    {name: 'Piemontese',info: 'Gorgonzola, jambon de parme, roquette, tomates', price: '4.60'},
    {name: 'Italienne',info: 'Jambon de parme, mozzarella, tomates séchées, parmesan, roquette, origan, huile d’olive, pignons de pin', price: '4.80'}
]
const menuTavolacalda = [
    {name: 'Arancini', price: '2.50'},
    {name: 'Calzoni', price: '2.50'},
    {name: 'Pizzetta', price: '2.50'},
    {name: 'Pane Panelle', price: '3.50'}
]
const menuPaninis = [
    {name: 'Classique',info: 'Jambon, mozzarella, tomates', price: '4.00'},
    {name: '4 fromages',info: 'Mozzarella, gouda, gorgonzola, parmesan, tomates, origan', price: '4.50'},
    {name: 'Parme',info: 'Jambon de parme, tomates, mozzarella, origan, roquette', price: '4.50'},
    {name: 'Adriatica',info: 'Thon, oignons, câpres, mozzarella, tomates, màche', price: '4.50'},
    {name: 'La zia',info: 'Poulet pané, mozzarella, tomates, poivrons, oignons secs', price: '4.50'},
    {name: 'Végétarien',info: 'Mozzarella, tomates, poivrons, courgettes, aubergines, origan, roquette', price: '4.80'},
    {name: 'Polpette',info: 'Boulette, mozzarella, tomates séchées, màche', price: '4.80'},
    {name: 'Vesuvio',info: 'Salami piquant, provolone piquant, oignons, poivrons, parmesan, roquette', price: '4.80'},
    {name: 'Paisanu',info: 'Saucisse italienne, mozzarella, tomates cerises, Poivrons grillés, roquette', price: '4.80'}
]
const menuSalades = [
    {name: 'Composition au choix', price: '4.50 / 6.00'},
    {name: 'Arrosticini', price: '7.50'},
    {name: 'Brochettes poulet', price: '7.00'}
]
const menuPates = [
    {name: 'Lasagnes', price: '5.00 / 17.00'},
    {name: 'Pâtes au four', info: 'Penne / Anelini', price: '4.50 / 16.00'}
]
const menuDesserts = [
    {name: 'Glace', price: '1.50 / 2.50 / 3.50'},
    {name: 'Tiramisu', price: '3.50'},
    {name: 'Mousse au chocolat', info:'Vanille / Liègeoise', price: '1.20'}

]

export const menus = [
    {name: "Classiques", category: "Sandwiches", description: "Le sandwich est un mets, généralement composé de deux ou plusieurs tranches de pain, avec un ou plusieurs ingrédients entre elles", bg: classiques, menu: menuClassiques},
    {name: "Traditionnels", category: "Sandwiches", description: "C'est l'italie qui régale avec nos sandwiches traditionnels", bg: traditionnels, menu: menuTraditionnels},
    {name: "Specialites", category: "Sandwiches", description: "Phrase de description ou d'accroche", bg: specialites, menu: menuSpecialite},
    {name: "Tavola Calda", description: "Phrase de description ou d'accroche", bg: tavolacalda, menu: menuTavolacalda},
    {name: "Paninis", description: "Phrase de description ou d'accroche", bg: paninis, menu: menuPaninis},
    {name: "Salades", description: "Phrase de description ou d'accroche", bg: salades, menu: menuSalades},
    {name: "Pates", description: "Phrase de description ou d'accroche", bg: pates, menu: menuPates},
    {name: "Desserts", description: "Phrase de description ou d'accroche", bg: desserts, menu: menuDesserts}
]

